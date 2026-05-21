/**
 * app.js — Oracle of Olympus SPA 메인 로직
 * Phase 1~3: 화면 전환, 신 목록, 운세 카드, 피드백, 테마 관리
 * HTML ID 기준: screen-intro / screen-list / screen-card / oracle-card
 */

'use strict';

/* ══════════════════════════════════════════════════════════════
   1. localStorage 안전 래퍼 (iframe/프라이빗 환경 대응)
   ══════════════════════════════════════════════════════════════ */
const Storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  },
  set(key, val) {
    try { localStorage.setItem(key, val); } catch(e) { /* 무시 */ }
  },
  getJSON(key) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch(e) { return null; }
  },
  setJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) { /* 무시 */ }
  }
};

/* ══════════════════════════════════════════════════════════════
   2. 앱 상태 관리 객체
   ══════════════════════════════════════════════════════════════ */
const AppState = {
  currentScreen: 'intro',   // 현재 활성 화면 ID ('intro'|'list'|'card')
  selectedGod:   null,      // 현재 선택된 신 데이터 객체
  currentFortune: '',       // 현재 뽑힌 운세 문장
  feedbackGiven:  false,    // 이미 피드백을 줬는지 여부
  cardFlipped:    false,    // 카드 뒤집힘 여부
  theme:          'dark',   // 현재 테마 ('dark' | 'light')
  feedbackData:   [],       // 피드백 기록 배열
};

/* ══════════════════════════════════════════════════════════════
   3. DOM 요소 캐시 (초기화 시 한 번만 조회)
   ══════════════════════════════════════════════════════════════ */
const DOM = {};

/** DOM 요소를 한 번에 조회하여 캐시에 저장 */
function cacheDOMElements() {
  // 별빛 캔버스
  DOM.starCanvas = document.getElementById('bg-canvas');

  // 토스트
  DOM.toast = document.getElementById('toast');

  // 모달 (신 소개)
  DOM.modalOverlay  = document.getElementById('modal-overlay');
  DOM.modalEmoji    = document.getElementById('modal-god-emoji');
  DOM.modalName     = document.getElementById('modal-god-name');
  DOM.modalDomain   = document.getElementById('modal-god-domain');
  DOM.modalIntro    = document.getElementById('modal-god-intro');
  DOM.modalCloseBtn = document.getElementById('btn-modal-close');

  // 화면 컨테이너
  DOM.screenIntro = document.getElementById('screen-intro');
  DOM.screenList  = document.getElementById('screen-list');
  DOM.screenCard  = document.getElementById('screen-card');

  // 인트로 화면
  DOM.btnStart = document.getElementById('btn-start');

  // 신 목록 화면
  DOM.godsGrid = document.getElementById('gods-grid');

  // 테마 토글 버튼 (각 화면마다 배치됨)
  DOM.themeButtons = document.querySelectorAll('.btn-theme');

  // 운세 카드 화면
  DOM.oracleCard    = document.getElementById('oracle-card');
  DOM.cardGodEmoji  = document.getElementById('card-god-emoji');
  DOM.cardGodKr     = document.getElementById('card-god-kr');
  DOM.cardGodEn     = document.getElementById('card-god-en');
  DOM.cardGodDomain = document.getElementById('card-god-domain');
  DOM.cardFortune   = document.getElementById('card-fortune-msg');
  DOM.btnBack       = document.getElementById('btn-back');
  DOM.btnLike       = document.getElementById('btn-like');
  DOM.btnDislike    = document.getElementById('btn-dislike');
  DOM.btnExit       = document.getElementById('btn-exit');
}

/* ══════════════════════════════════════════════════════════════
   4. 테마 관리
   ══════════════════════════════════════════════════════════════ */

/** 저장된 테마 또는 시스템 설정으로 초기 테마 적용 */
function initTheme() {
  const saved = Storage.get('oracle-theme');
  if (saved === 'light' || saved === 'dark') {
    AppState.theme = saved;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    AppState.theme = prefersDark ? 'dark' : 'light';
  }
  applyTheme(AppState.theme, false);
}

/**
 * 테마를 DOM에 적용
 * @param {string} theme - 'dark' | 'light'
 * @param {boolean} animate - 전환 애니메이션 여부
 */
function applyTheme(theme, animate = true) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);

  // 모든 테마 토글 버튼 아이콘·ARIA 갱신
  const icon = theme === 'dark' ? '☀️' : '🌙';
  const label = theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환';
  DOM.themeButtons?.forEach(btn => {
    btn.textContent = icon;
    btn.setAttribute('aria-label', label);
    btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  });

  // localStorage 저장
  Storage.set('oracle-theme', theme);

  // 카드 화면이 표시 중이면 현재 신의 배경을 새 테마로 즉시 갱신
  if (AppState.selectedGod) {
    applyCardTheme(AppState.selectedGod);
  }
}

/** 테마 토글 핸들러 */
function handleThemeToggle() {
  const newTheme = AppState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme, true);
  showToast(newTheme === 'dark' ? '🌙 다크 모드' : '☀️ 라이트 모드', 1800);
}

/* ══════════════════════════════════════════════════════════════
   5. 화면 전환 (SPA 라우팅)
   ══════════════════════════════════════════════════════════════ */

/** 모든 화면 숨기기 */
function hideAllScreens() {
  [DOM.screenIntro, DOM.screenList, DOM.screenCard].forEach(s => {
    if (!s) return;
    s.classList.add('hidden');
  });
}

/**
 * 지정한 화면으로 전환
 * @param {string} screenId - 'intro' | 'list' | 'card'
 */
function showScreen(screenId) {
  hideAllScreens();

  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  AppState.currentScreen = screenId;
  // URL 해시 업데이트
  history.replaceState(null, '', `#${screenId}`);
}

/** URL 해시 기반 초기 화면 결정 */
function initRouting() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'list' || hash === 'intro') {
    showScreen(hash);
  } else {
    showScreen('intro');
  }
}

/* ══════════════════════════════════════════════════════════════
   6. 신 목록 화면 렌더링
   ══════════════════════════════════════════════════════════════ */

/** GODS 배열로 신 선택 목록 카드 동적 생성 */
function renderGodList() {
  if (!DOM.godsGrid) return;
  DOM.godsGrid.innerHTML = '';

  GODS.forEach((god, i) => {
    const item = document.createElement('div');
    item.className = 'god-item';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `${god.kr} — ${god.domain}`);
    item.dataset.godId = god.id;

    // stagger 애니메이션: setTimeout으로 .visible 클래스 지연 추가
    setTimeout(() => item.classList.add('visible'), i * 60);

    // CSS 구조에 맞게: .god-emoji-wrap > SVG 아이콘(없으면 이모지 폴백), .god-info > (kr/en/domain), .god-actions > (btn-intro, btn-oracle)
    // svgIcon이 있으면 SVG 아이콘, 없으면 이모지 폴백
    const iconHtml = god.svgIcon
      ? `<div class="god-icon-wrap" aria-hidden="true">${god.svgIcon}</div>`
      : `<div class="god-emoji-wrap" aria-hidden="true">${god.emoji}</div>`;
    item.innerHTML = `
      ${iconHtml}
      <div class="god-info">
        <span class="god-name-kr">${god.kr}</span>
        <span class="god-name-en">${god.en}</span>
        <span class="god-domain">${god.domain}</span>
      </div>
      <div class="god-actions">
        <button class="btn-intro" aria-label="${god.kr} 소개" data-god-id="${god.id}">소개</button>
        <button class="btn-oracle btn-oracle-direct" aria-label="${god.kr}에게 신탁 요청" data-god-id="${god.id}">신탁 →</button>
      </div>
    `;

    // 신탁 요청 버튼 → 바로 카드 화면으로
    const oracleBtn = item.querySelector('.btn-oracle-direct');
    oracleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openOracleCard(god.id);
    });

    // 소개 버튼 → 모달
    const introBtn2 = item.querySelector('.btn-intro');
    introBtn2.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(god.id);
    });

    DOM.godsGrid.appendChild(item);
  });
}

/* ══════════════════════════════════════════════════════════════
   7. 신 소개 모달
   ══════════════════════════════════════════════════════════════ */

/**
 * 신 소개 모달 열기
 * @param {string} godId
 */
function openModal(godId) {
  const god = getGodById(godId);
  if (!god || !DOM.modalOverlay) return;

  DOM.modalEmoji.textContent  = god.emoji;
  DOM.modalName.textContent   = god.kr;
  DOM.modalDomain.textContent = god.domain;
  DOM.modalIntro.textContent  = god.intro;

  DOM.modalOverlay.classList.remove('hidden');
  DOM.modalOverlay.setAttribute('aria-hidden', 'false');
  setTimeout(() => DOM.modalCloseBtn?.focus(), 100);
  document.body.style.overflow = 'hidden';
}

/** 모달 닫기 */
function closeModal() {
  if (!DOM.modalOverlay) return;
  DOM.modalOverlay.classList.add('hidden');
  DOM.modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════════
   8. 운세 카드 화면
   ══════════════════════════════════════════════════════════════ */

/**
 * 신을 선택하고 운세 카드 화면으로 이동
 * @param {string} godId
 */
function openOracleCard(godId) {
  const god = getGodById(godId);
  if (!god) return;

  AppState.selectedGod    = god;
  // gods.js의 fortune은 단일 문자열 (\n 포함)
  AppState.currentFortune = god.fortune ?? '';
  AppState.feedbackGiven  = false;
  AppState.cardFlipped    = false;

  // 카드 뒷면 데이터 채우기 — SVG 아이콘 또는 이모지 폴백
  if (DOM.cardGodEmoji) {
    if (god.svgIcon) {
      // SVG 아이콘을 카드용 크기(80×80)로 리사이즈하여 삽입
      const cardSvg = god.svgIcon
        .replace('width="120"', 'width="80"')
        .replace('height="120"', 'height="80"');
      DOM.cardGodEmoji.innerHTML = cardSvg;
      DOM.cardGodEmoji.style.fontSize = '0'; // 이모지 텍스트 숨김
    } else {
      DOM.cardGodEmoji.textContent = god.emoji;
      DOM.cardGodEmoji.style.fontSize = '';
    }
  }
  if (DOM.cardGodKr)     DOM.cardGodKr.textContent     = god.kr;
  if (DOM.cardGodEn)     DOM.cardGodEn.textContent     = god.en;
  if (DOM.cardGodDomain) DOM.cardGodDomain.textContent = god.domain;
  if (DOM.cardFortune)   DOM.cardFortune.textContent   = AppState.currentFortune;

  // 신별 배경색 적용 (카드 앞/뒷면)
  applyCardTheme(god);

  // 카드 플립 상태 초기화 (CSS는 .flipped 클래스 사용)
  DOM.oracleCard?.classList.remove('flipped');

  // iOS Safari 대비: 앞면 숨김 클래스 제거 (새 카드 진입 시 앞면 복원)
  const cardFront = document.querySelector('.card-front');
  if (cardFront) cardFront.classList.remove('front-hidden');

  // 피드백 버튼 초기화
  resetFeedbackButtons();

  // 카드 화면으로 전환
  showScreen('card');
}

/**
 * 신에 따른 카드 배경 적용
 * @param {Object} god
 */
function applyCardTheme(god) {
  const bg = AppState.theme === 'dark' ? god.bgDark : god.bgLight;
  // 카드 앞/뒷면 모두 같은 배경 적용
  const front = document.querySelector('.card-front');
  const back  = document.querySelector('.card-back');
  if (front) front.style.background = bg;
  if (back)  back.style.background  = bg;
}

/** 카드 클릭 → 뒤집기 */
function handleCardFlip() {
  if (AppState.cardFlipped) return;
  AppState.cardFlipped = true;

  // CSS: .card.flipped → transform: rotateY(180deg)
  DOM.oracleCard?.classList.add('flipped');
  DOM.oracleCard?.setAttribute('aria-label', '카드가 뒤집혔습니다. 신탁을 확인하세요.');

  // iOS Safari 대비: 플립 애니메이션(0.95s) 완료 후 앞면 완전 숨김
  // backface-visibility가 무시되는 경우에도 앞면이 비쳐보이지 않도록 처리
  const cardFront = document.querySelector('.card-front');
  setTimeout(() => {
    if (cardFront) cardFront.classList.add('front-hidden');
  }, 980); // 플립 0.95s + 여유 30ms
}

/* ══════════════════════════════════════════════════════════════
   9. 피드백 처리 & localStorage 저장
   ══════════════════════════════════════════════════════════════ */

/** 피드백 데이터 로드 */
function loadFeedbackData() {
  AppState.feedbackData = Storage.getJSON('oracle-feedback') ?? [];
}

/** 피드백 데이터 저장 */
function saveFeedbackData() {
  Storage.setJSON('oracle-feedback', AppState.feedbackData);
}

/**
 * 피드백 처리
 * @param {'like'|'dislike'} type
 */
function handleFeedback(type) {
  if (AppState.feedbackGiven) return;
  AppState.feedbackGiven = true;

  const entry = {
    timestamp: new Date().toISOString(),
    godId:     AppState.selectedGod?.id   ?? 'unknown',
    godKr:     AppState.selectedGod?.kr   ?? '',
    fortune:   AppState.currentFortune,
    type,
  };

  AppState.feedbackData.push(entry);
  // 최대 100개 유지
  if (AppState.feedbackData.length > 100) {
    AppState.feedbackData = AppState.feedbackData.slice(-100);
  }
  saveFeedbackData();

  // 버튼 비활성화
  if (DOM.btnLike)    DOM.btnLike.disabled    = true;
  if (DOM.btnDislike) DOM.btnDislike.disabled = true;

  if (type === 'like') {
    if (DOM.btnLike) DOM.btnLike.textContent = '✅ 감사합니다!';
    showToast('✨ 올림푸스의 축복이 함께하길!', 2500);
  } else {
    if (DOM.btnDislike) DOM.btnDislike.textContent = '🙏 다음엔 더 좋은 신탁을';
    showToast('🌊 다른 신의 지혜를 구해보세요', 2500);
  }
}

/** 피드백 버튼 초기 상태로 리셋 */
function resetFeedbackButtons() {
  if (DOM.btnLike) {
    DOM.btnLike.disabled    = false;
    DOM.btnLike.textContent = '👍 만족';
  }
  if (DOM.btnDislike) {
    DOM.btnDislike.disabled    = false;
    DOM.btnDislike.textContent = '👎 불만족';
  }
}

/* ══════════════════════════════════════════════════════════════
   10. 토스트 알림
   ══════════════════════════════════════════════════════════════ */

let toastTimer = null;

/**
 * 토스트 메시지 표시
 * @param {string} message
 * @param {number} duration - ms (기본 2200)
 */
function showToast(message, duration = 2200) {
  if (!DOM.toast) return;
  clearTimeout(toastTimer);

  DOM.toast.textContent = message;
  DOM.toast.classList.add('show');

  toastTimer = setTimeout(() => {
    DOM.toast.classList.remove('show');
  }, duration);
}

/* ══════════════════════════════════════════════════════════════
   11. 별빛 배경 캔버스
   ══════════════════════════════════════════════════════════════ */

let stars       = [];
let starAnimId  = null;
let starCtx     = null;

/** 별 데이터 초기화 */
function initStars() {
  const canvas = DOM.starCanvas;
  if (!canvas) return;

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  starCtx = canvas.getContext('2d');

  const count = Math.min(200, Math.floor((canvas.width * canvas.height) / 5500));
  stars = Array.from({ length: count }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.4 + 0.3,
    alpha: Math.random() * 0.7 + 0.15,
    speed: Math.random() * 0.007 + 0.003,
    phase: Math.random() * Math.PI * 2,
  }));
}

/** 별빛 그리기 (rAF 루프) */
function drawStars(timestamp) {
  const canvas = DOM.starCanvas;
  if (!canvas || !starCtx) return;

  starCtx.clearRect(0, 0, canvas.width, canvas.height);

  // 테마별 별 색상
  const rgb = AppState.theme === 'dark' ? '255,255,255' : '139,100,0';

  stars.forEach(star => {
    const alpha = star.alpha * (0.5 + 0.5 * Math.sin(timestamp * star.speed + star.phase));
    starCtx.beginPath();
    starCtx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    starCtx.fillStyle = `rgba(${rgb},${alpha})`;
    starCtx.fill();
  });

  starAnimId = requestAnimationFrame(drawStars);
}

/** 리사이즈 핸들러 */
function handleResize() {
  cancelAnimationFrame(starAnimId);
  initStars();
  requestAnimationFrame(drawStars);
}

/* ══════════════════════════════════════════════════════════════
   12. 이벤트 리스너 등록
   ══════════════════════════════════════════════════════════════ */

function attachEventListeners() {
  // 테마 토글 (모든 화면의 버튼)
  DOM.themeButtons?.forEach(btn =>
    btn.addEventListener('click', handleThemeToggle)
  );

  // 인트로 → 신 목록
  DOM.btnStart?.addEventListener('click', () => showScreen('list'));

  // 모달 닫기
  DOM.modalCloseBtn?.addEventListener('click', closeModal);
  DOM.modalOverlay?.addEventListener('click', (e) => {
    if (e.target === DOM.modalOverlay) closeModal();
  });

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !DOM.modalOverlay?.classList.contains('hidden')) {
      closeModal();
    }
  });

  // 카드 클릭/키보드 → 뒤집기
  DOM.oracleCard?.addEventListener('click', handleCardFlip);
  DOM.oracleCard?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardFlip();
    }
  });

  // 피드백 버튼
  DOM.btnLike?.addEventListener('click',    () => handleFeedback('like'));
  DOM.btnDislike?.addEventListener('click', () => handleFeedback('dislike'));

  // 돌아가기 → 신 목록
  DOM.btnBack?.addEventListener('click', () => showScreen('list'));

  // 종료 → 인트로
  DOM.btnExit?.addEventListener('click', () => {
    AppState.selectedGod    = null;
    AppState.currentFortune = '';
    showScreen('intro');
  });

  // 리사이즈 (디바운스)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 200);
  });

  // 해시 변경으로 브라우저 뒤로가기 지원
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'list' || hash === 'intro') showScreen(hash);
  });
}

/* ══════════════════════════════════════════════════════════════
   13. 앱 초기화
   ══════════════════════════════════════════════════════════════ */

function initApp() {
  // 1. DOM 캐시
  cacheDOMElements();

  // 2. 테마 초기화
  initTheme();

  // 3. 피드백 데이터 로드
  loadFeedbackData();

  // 4. 별빛 캔버스 시작
  initStars();
  requestAnimationFrame(drawStars);

  // 5. 신 목록 렌더링
  renderGodList();

  // 6. 이벤트 리스너
  attachEventListeners();

  // 7. 초기 화면 설정 (URL 해시 기반)
  initRouting();
}

/* ══════════════════════════════════════════════════════════════
   14. DOMContentLoaded 진입점
   ══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', initApp);
