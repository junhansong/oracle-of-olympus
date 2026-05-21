/**
 * gods.js — 올림포스 12신 데이터 배열
 * 각 신의 정보, 운세 문구, 카드 배경, 대표 색상을 담고 있습니다.
 * 순서: 제우스 > 헤라 > 포세이돈 > 데메테르 > 아테나 > 아폴론 > 아르테미스 > 아레스 > 아프로디테 > 헤파이스토스 > 헤르메스 > 디오니소스
 */

// 12신 데이터 배열 — 각 신 객체는 카드 렌더링에 필요한 모든 정보를 포함합니다
const GODS = [
  {
    // 신 고유 ID (영문 소문자)
    id: 'zeus',
    // 폴백 이모지 (이미지 로드 실패 시 표시)
    emoji: '⚡',
    // 한글 이름
    kr: '제우스',
    // 영문 이름 (대문자)
    en: 'ZEUS',
    // 담당 영역
    domain: '하늘 · 천둥 · 왕권',
    // 재미있는 소개 문구
    intro: '올림포스의 대빵! 번개를 던지는 게 취미이고, 독수리와 술을 사랑합니다. 엄청 바람둥이지만… 그래도 최고 신이랍니다 ⚡',
    // 오늘의 운세 문구
    fortune: '오늘은 당신이 주도권을 잡을 때입니다.\n두려움을 내려놓고 결단을 내리세요.\n하늘의 뜻이 당신의 선택을 지지합니다.',
    // 다크 모드 카드 배경 그라디언트
    bgDark: 'radial-gradient(ellipse at 42% 28%, #1c0050, #060015 68%)',
    // 라이트 모드 카드 배경 그라디언트
    bgLight: 'radial-gradient(ellipse at 42% 28%, #e8e0ff, #f5f0ff 68%)',
    // 신 대표 색상 (hex)
    color: '#ffd700',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#ffd700"/> <circle cx="60" cy="60" r="50" fill="#1a1400"/> <polygon points="36,50 42,34 50,44 60,30 70,44 78,34 84,50 80,50 60,42 40,50" fill="#ffd700"/> <polygon points="60,30 57,38 60,36 63,38" fill="#fff5cc"/> <ellipse cx="60" cy="62" rx="18" ry="20" fill="#f5d78e"/> <path d="M42,68 Q44,82 60,86 Q76,82 78,68" fill="#d4af37"/> <line x1="55" y1="74" x2="54" y2="84" stroke="#b8960c" stroke-width="1.2" stroke-linecap="round"/> <line x1="60" y1="76" x2="60" y2="86" stroke="#b8960c" stroke-width="1.2" stroke-linecap="round"/> <line x1="65" y1="74" x2="66" y2="84" stroke="#b8960c" stroke-width="1.2" stroke-linecap="round"/> <path d="M50,58 Q56,54 60,56" stroke="#5a3e0a" stroke-width="2.5" fill="none" stroke-linecap="round"/> <path d="M70,58 Q64,54 60,56" stroke="#5a3e0a" stroke-width="2.5" fill="none" stroke-linecap="round"/> <ellipse cx="54" cy="62" rx="3.5" ry="3" fill="#1a1a2e"/> <ellipse cx="66" cy="62" rx="3.5" ry="3" fill="#1a1a2e"/> <circle cx="55.5" cy="61" r="1" fill="white"/> <circle cx="67.5" cy="61" r="1" fill="white"/> <path d="M60,64 Q57,70 59,72 Q61,72 63,70 Q60,68 60,64Z" fill="#e0b870" stroke="none"/> <polygon points="76,76 70,90 75,90 68,104 83,86 77,86" fill="#ffd700"/> <polygon points="76,76 70,90 75,90 68,104 83,86 77,86" fill="none" stroke="#1a1400" stroke-width="0.8"/> <ellipse cx="42" cy="64" rx="5" ry="6" fill="#e8c87a"/> <ellipse cx="78" cy="64" rx="5" ry="6" fill="#e8c87a"/> </svg>`,
  },
  {
    id: 'hera',
    emoji: '👑',
    kr: '헤라',
    en: 'HERA',
    domain: '결혼 · 가정 · 여왕',
    intro: '제우스의 아내이자 가정의 수호신. 남편 바람기에 단련된 인내심의 여왕 👑 절대 만만히 보면 안 됩니다!',
    fortune: '소중한 인연과의 신뢰가 깊어지는 날입니다.\n가까운 이의 마음을 세심히 살피세요.\n진정한 유대가 당신을 더욱 강하게 합니다.',
    bgDark: 'radial-gradient(ellipse at 58% 30%, #3d0030, #0f0010 68%)',
    bgLight: 'radial-gradient(ellipse at 58% 30%, #ffe0f5, #fff0fa 68%)',
    color: '#cc88cc',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#cc88cc"/> <circle cx="60" cy="60" r="50" fill="#1a0010"/> <path d="M38,55 Q30,70 34,88 Q44,100 60,102 Q76,100 86,88 Q90,70 82,55" fill="#882299"/> <path d="M36,52 L40,36 L48,46 L60,28 L72,46 L80,36 L84,52 Z" fill="#cc88cc"/> <circle cx="60" cy="31" r="3" fill="#ffccff"/> <circle cx="44" cy="40" r="2" fill="#ffccff"/> <circle cx="76" cy="40" r="2" fill="#ffccff"/> <rect x="36" y="50" width="48" height="5" rx="2" fill="#aa66bb"/> <ellipse cx="30" cy="36" rx="4" ry="10" fill="#8844aa" transform="rotate(-20,30,36)"/> <ellipse cx="30" cy="36" rx="2" ry="5" fill="#cc66dd" transform="rotate(-20,30,36)"/> <circle cx="28" cy="27" r="3" fill="#4422aa"/> <circle cx="28" cy="27" r="1.5" fill="#88aaff"/> <ellipse cx="24" cy="40" rx="4" ry="10" fill="#8844aa" transform="rotate(-35,24,40)"/> <ellipse cx="24" cy="40" rx="2" ry="5" fill="#cc66dd" transform="rotate(-35,24,40)"/> <circle cx="19" cy="32" r="3" fill="#4422aa"/> <circle cx="19" cy="32" r="1.5" fill="#88aaff"/> <ellipse cx="22" cy="50" rx="4" ry="10" fill="#8844aa" transform="rotate(-50,22,50)"/> <ellipse cx="22" cy="50" rx="2" ry="5" fill="#cc66dd" transform="rotate(-50,22,50)"/> <circle cx="13" cy="44" r="3" fill="#4422aa"/> <circle cx="13" cy="44" r="1.5" fill="#88aaff"/> <ellipse cx="60" cy="66" rx="19" ry="21" fill="#e8c8e8"/> <ellipse cx="41" cy="67" rx="5" ry="6" fill="#d8b0d8"/> <ellipse cx="79" cy="67" rx="5" ry="6" fill="#d8b0d8"/> <path d="M49,59 Q55,54 61,57" fill="none" stroke="#5a1a5a" stroke-width="2.5" stroke-linecap="round"/> <path d="M71,59 Q65,54 59,57" fill="none" stroke="#5a1a5a" stroke-width="2.5" stroke-linecap="round"/> <ellipse cx="53" cy="63" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="67" cy="63" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="53" cy="64" rx="3" ry="2.8" fill="#660066"/> <ellipse cx="67" cy="64" rx="3" ry="2.8" fill="#660066"/> <circle cx="54.5" cy="62.5" r="1" fill="white"/> <circle cx="68.5" cy="62.5" r="1" fill="white"/> <path d="M60,67 Q57,72 59,74 Q61,74 63,72 Q60,70 60,67Z" fill="#c8a8c8" stroke="none"/> <path d="M53,78 Q60,82 67,78" fill="none" stroke="#882288" stroke-width="2" stroke-linecap="round"/> <ellipse cx="38" cy="74" rx="2.5" ry="4" fill="#cc88cc"/> <ellipse cx="82" cy="74" rx="2.5" ry="4" fill="#cc88cc"/> <circle cx="80" cy="90" r="8" fill="#cc88cc"/> <circle cx="80" cy="90" r="5" fill="#1a0010"/> <path d="M80,84 Q76,88 78,92 Q80,94 82,92 Q84,88 80,84Z" fill="#cc88cc"/> <circle cx="77" cy="90" r="1.5" fill="#cc88cc"/> <circle cx="83" cy="90" r="1.5" fill="#cc88cc"/> <circle cx="80" cy="87" r="1.5" fill="#cc88cc"/> </svg>`,
  },
  {
    id: 'poseidon',
    emoji: '🔱',
    kr: '포세이돈',
    en: 'POSEIDON',
    domain: '바다 · 지진 · 말',
    intro: '바다의 지배자, 삼지창 하나로 파도를 일으키고 지진도 만들어요. 기분이 좋으면 항해가 순탄하고, 나쁘면… 조심하세요 🔱',
    fortune: '예상치 못한 변화의 물결이 찾아옵니다.\n흐름에 맞서지 말고 유연하게 몸을 맡기세요.\n깊은 바다 속에 당신을 위한 보물이 숨어 있습니다.',
    bgDark: 'radial-gradient(ellipse at 50% 35%, #001a40, #00050f 68%)',
    bgLight: 'radial-gradient(ellipse at 50% 35%, #d0e8ff, #eef5ff 68%)',
    color: '#4488cc',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#4488cc"/> <circle cx="60" cy="60" r="50" fill="#001530"/> <path d="M36,54 Q28,70 32,88 Q42,102 60,104 Q78,102 88,88 Q92,70 84,54" fill="#1a5599"/> <rect x="36" y="50" width="48" height="6" rx="3" fill="#2266aa"/> <polygon points="60,50 56,34 60,28 64,34" fill="#4488cc"/> <polygon points="48,50 45,38 48,33 51,38" fill="#4488cc"/> <polygon points="72,50 69,38 72,33 75,38" fill="#4488cc"/> <circle cx="60" cy="29" r="2" fill="#88bbee"/> <circle cx="48" cy="34" r="1.5" fill="#88bbee"/> <circle cx="72" cy="34" r="1.5" fill="#88bbee"/> <ellipse cx="60" cy="66" rx="19" ry="20" fill="#99bbdd"/> <ellipse cx="41" cy="67" rx="5" ry="6" fill="#7799bb"/> <ellipse cx="79" cy="67" rx="5" ry="6" fill="#7799bb"/> <path d="M48,59 Q54,54 60,57" fill="none" stroke="#001a44" stroke-width="3" stroke-linecap="round"/> <path d="M72,59 Q66,54 60,57" fill="none" stroke="#001a44" stroke-width="3" stroke-linecap="round"/> <ellipse cx="53" cy="63" rx="4" ry="3.5" fill="white"/> <ellipse cx="67" cy="63" rx="4" ry="3.5" fill="white"/> <ellipse cx="53" cy="64" rx="2.8" ry="2.5" fill="#001a44"/> <ellipse cx="67" cy="64" rx="2.8" ry="2.5" fill="#001a44"/> <circle cx="54.5" cy="62.5" r="1" fill="white"/> <circle cx="68.5" cy="62.5" r="1" fill="white"/> <path d="M60,67 Q57,72 59,74 Q61,74 63,72 Q60,70 60,67Z" fill="#77aacc" stroke="none"/> <path d="M42,72 Q46,68 50,72 Q54,76 58,72 Q62,68 66,72 Q70,76 74,72 Q78,68 78,72 Q76,84 60,88 Q44,84 42,72Z" fill="#2266aa"/> <path d="M44,74 Q48,71 52,74 Q56,77 60,74 Q64,71 68,74 Q72,77 76,74" fill="none" stroke="#4488cc" stroke-width="1.2" stroke-linecap="round"/> <path d="M46,80 Q52,77 58,80 Q64,77 70,80 Q68,86 60,88 Q52,86 46,80Z" fill="#1a5599"/> <path d="M52,73 Q60,69 68,73" fill="none" stroke="#001a44" stroke-width="1.5" stroke-linecap="round"/> <line x1="79" y1="80" x2="79" y2="107" stroke="#4488cc" stroke-width="2.5" stroke-linecap="round"/> <line x1="79" y1="80" x2="79" y2="86" stroke="#4488cc" stroke-width="2.5"/> <line x1="73" y1="80" x2="73" y2="88" stroke="#4488cc" stroke-width="2" stroke-linecap="round"/> <line x1="85" y1="80" x2="85" y2="88" stroke="#4488cc" stroke-width="2" stroke-linecap="round"/> <rect x="72" y="87" width="14" height="2" rx="1" fill="#4488cc"/> </svg>`,
  },
  {
    id: 'demeter',
    emoji: '🌾',
    kr: '데메테르',
    en: 'DEMETER',
    domain: '대지 · 수확 · 계절',
    intro: '대지와 수확의 어머니. 딸 페르세포네를 빼앗겨 겨울을 만든 분 🌾 그 모성애만큼은 올림포스 최강입니다!',
    fortune: '꾸준히 심어온 씨앗이 싹을 틔울 준비를 합니다.\n작은 노력도 허투루 사라지지 않았습니다.\n오늘은 그 결실을 믿고 한 발 더 나아가세요.',
    bgDark: 'radial-gradient(ellipse at 40% 45%, #0d2210, #04090a 68%)',
    bgLight: 'radial-gradient(ellipse at 40% 45%, #d8f0d8, #eef8ee 68%)',
    color: '#66aa44',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#66aa44"/> <circle cx="60" cy="60" r="50" fill="#0a1a08"/> <path d="M38,56 Q30,72 34,88 Q44,100 60,102 Q76,100 86,88 Q90,72 82,56" fill="#886622"/> <path d="M34,54 Q60,46 86,54" fill="none" stroke="#aa8833" stroke-width="4" stroke-linecap="round"/> <ellipse cx="38" cy="44" rx="3.5" ry="7" fill="#ccaa44" transform="rotate(-20,38,44)"/> <line x1="38" y1="51" x2="38" y2="56" stroke="#aa8833" stroke-width="1.5"/> <path d="M35,46 Q33,44 35,42" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M41,44 Q43,42 41,40" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <ellipse cx="47" cy="38" rx="3.5" ry="7" fill="#ddbb55" transform="rotate(-10,47,38)"/> <line x1="47" y1="45" x2="47" y2="54" stroke="#aa8833" stroke-width="1.5"/> <path d="M44,40 Q42,38 44,36" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M50,38 Q52,36 50,34" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <ellipse cx="60" cy="34" rx="4" ry="8" fill="#ccaa44"/> <line x1="60" y1="42" x2="60" y2="54" stroke="#aa8833" stroke-width="1.5"/> <path d="M56,37 Q54,35 56,33" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M64,37 Q66,35 64,33" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M57,41 Q55,39 57,37" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M63,41 Q65,39 63,37" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <ellipse cx="73" cy="38" rx="3.5" ry="7" fill="#ddbb55" transform="rotate(10,73,38)"/> <line x1="73" y1="45" x2="73" y2="54" stroke="#aa8833" stroke-width="1.5"/> <path d="M70,40 Q68,38 70,36" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M76,38 Q78,36 76,34" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <ellipse cx="82" cy="44" rx="3.5" ry="7" fill="#ccaa44" transform="rotate(20,82,44)"/> <line x1="82" y1="51" x2="82" y2="56" stroke="#aa8833" stroke-width="1.5"/> <path d="M79,46 Q77,44 79,42" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <path d="M85,44 Q87,42 85,40" fill="none" stroke="#ccaa44" stroke-width="1.2"/> <ellipse cx="60" cy="67" rx="19" ry="21" fill="#c8e0a0"/> <ellipse cx="41" cy="68" rx="5" ry="6" fill="#b0cc88"/> <ellipse cx="79" cy="68" rx="5" ry="6" fill="#b0cc88"/> <path d="M49,60 Q55,56 61,58" fill="none" stroke="#336611" stroke-width="2" stroke-linecap="round"/> <path d="M71,60 Q65,56 59,58" fill="none" stroke="#336611" stroke-width="2" stroke-linecap="round"/> <ellipse cx="53" cy="64" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="67" cy="64" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="53" cy="65" rx="3" ry="2.8" fill="#336611"/> <ellipse cx="67" cy="65" rx="3" ry="2.8" fill="#336611"/> <circle cx="54.5" cy="63.5" r="1" fill="white"/> <circle cx="68.5" cy="63.5" r="1" fill="white"/> <path d="M60,68 Q57,73 59,75 Q61,75 63,73 Q60,71 60,68Z" fill="#a8cc80" stroke="none"/> <path d="M52,78 Q60,84 68,78" fill="none" stroke="#446622" stroke-width="2" stroke-linecap="round"/> <ellipse cx="44" cy="70" rx="5" ry="3.5" fill="#88cc44" opacity="0.4"/> <ellipse cx="76" cy="70" rx="5" ry="3.5" fill="#88cc44" opacity="0.4"/> <path d="M76,84 Q82,80 86,86 Q86,96 78,98 Q74,98 74,95 Q74,92 78,92 Q82,92 82,88 Q80,84 76,84Z" fill="#66aa44"/> <line x1="74" y1="95" x2="70" y2="107" stroke="#66aa44" stroke-width="2.5" stroke-linecap="round"/> </svg>`,
  },
  {
    id: 'athena',
    emoji: '🦉',
    kr: '아테나',
    en: 'ATHENA',
    domain: '지혜 · 전쟁 · 공예',
    intro: '지혜와 전략의 여신. 머리에서 태어난 정도로 능력치 MAX 🦉 뜨개질과 전쟁 전략을 동시에 잘합니다!',
    fortune: '혼란스러운 상황에서 냉철한 판단이 필요합니다.\n감정보다 이성을 앞세우면 길이 열립니다.\n지혜로운 선택이 곧 오늘의 승리입니다.',
    bgDark: 'radial-gradient(ellipse at 50% 28%, #0a2020, #030d0d 68%)',
    bgLight: 'radial-gradient(ellipse at 50% 28%, #d8eeee, #eef8f8 68%)',
    color: '#88aaaa',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#88aaaa"/> <circle cx="60" cy="60" r="50" fill="#081818"/> <path d="M34,62 Q32,42 60,32 Q88,42 86,62 L86,72 Q86,80 78,82 L78,90 L42,90 L42,82 Q34,80 34,72 Z" fill="#88aaaa"/> <path d="M42,58 Q42,40 60,34 Q78,40 78,58 L78,72 Q78,78 70,80 L50,80 Q42,78 42,72 Z" fill="#446666"/> <ellipse cx="60" cy="32" rx="6" ry="4" fill="#cc4444"/> <path d="M54,32 Q44,24 40,14 Q50,16 60,22 Q70,16 80,14 Q76,24 66,32 Z" fill="#cc4444"/> <path d="M52,32 Q50,28 46,20 Q50,21 56,26" fill="#ee6666" opacity="0.6"/> <path d="M44,56 Q44,48 60,46 Q76,48 76,56 L76,60 Q76,64 60,64 Q44,64 44,60 Z" fill="#0d2222"/> <rect x="57" y="54" width="6" height="14" rx="3" fill="#88aaaa"/> <path d="M42,62 L42,80 Q42,84 48,84 L48,62 Z" fill="#6a8888"/> <path d="M78,62 L78,80 Q78,84 72,84 L72,62 Z" fill="#6a8888"/> <ellipse cx="60" cy="58" rx="13" ry="9" fill="#aacccc"/> <circle cx="52" cy="57" r="3.5" fill="#001a1a"/> <circle cx="68" cy="57" r="3.5" fill="#001a1a"/> <circle cx="52" cy="57" r="2" fill="#88aaaa"/> <circle cx="68" cy="57" r="2" fill="#88aaaa"/> <circle cx="52.8" cy="56.3" r="0.8" fill="white"/> <circle cx="68.8" cy="56.3" r="0.8" fill="white"/> <path d="M60,60 Q58,63 59,64 Q61,64 62,63 Q60,62 60,60Z" fill="#88aaaa" stroke="none"/> <ellipse cx="42" cy="76" rx="4" ry="5" fill="#6a8888"/> <ellipse cx="78" cy="76" rx="4" ry="5" fill="#6a8888"/> <line x1="76" y1="92" x2="88" y2="108" stroke="#88aaaa" stroke-width="2" stroke-linecap="round"/> <ellipse cx="79" cy="97" rx="4" ry="2.5" fill="#88aaaa" transform="rotate(-40,79,97)"/> <ellipse cx="83" cy="102" rx="4" ry="2.5" fill="#88aaaa" transform="rotate(-40,83,102)"/> <ellipse cx="76" cy="101" rx="3.5" ry="2" fill="#668888" transform="rotate(30,76,101)"/> <circle cx="81" cy="99" r="2" fill="#aaccaa"/> <circle cx="86" cy="105" r="2" fill="#aaccaa"/> </svg>`,
  },
  {
    id: 'apollo',
    emoji: '☀️',
    kr: '아폴론',
    en: 'APOLLO',
    domain: '태양 · 예언 · 음악 · 의술',
    intro: '태양·음악·예언·의술… 팔방미인도 이런 팔방미인이 없습니다 ☀️ 잘생기기까지 했으니 올림포스 아이돌이죠!',
    fortune: '당신 안에 잠든 재능이 빛을 발할 때가 왔습니다.\n창의적인 영감이 오늘 유독 선명하게 느껴질 것입니다.\n진실을 향한 발걸음이 행운을 불러옵니다.',
    bgDark: 'radial-gradient(ellipse at 50% 20%, #2e1500, #0a0500 68%)',
    bgLight: 'radial-gradient(ellipse at 50% 20%, #fff0cc, #fffae8 68%)',
    color: '#ffaa00',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#ffaa00"/> <circle cx="60" cy="60" r="50" fill="#1a0a00"/> <path d="M38,55 Q30,70 34,88 Q44,100 60,102 Q76,100 86,88 Q90,70 82,55" fill="#cc8800"/> <path d="M34,54 Q60,46 86,54" fill="none" stroke="#cc8800" stroke-width="3" stroke-linecap="round"/> <ellipse cx="36" cy="48" rx="5" ry="3" fill="#ffaa00" transform="rotate(-30,36,48)"/> <ellipse cx="42" cy="42" rx="5" ry="3" fill="#dd9900" transform="rotate(-15,42,42)"/> <ellipse cx="50" cy="38" rx="5" ry="3" fill="#ffaa00" transform="rotate(-5,50,38)"/> <ellipse cx="84" cy="48" rx="5" ry="3" fill="#ffaa00" transform="rotate(30,84,48)"/> <ellipse cx="78" cy="42" rx="5" ry="3" fill="#dd9900" transform="rotate(15,78,42)"/> <ellipse cx="70" cy="38" rx="5" ry="3" fill="#ffaa00" transform="rotate(5,70,38)"/> <ellipse cx="60" cy="35" rx="6" ry="3.5" fill="#ffaa00"/> <circle cx="60" cy="34" r="2" fill="#ffe060"/> <ellipse cx="60" cy="66" rx="19" ry="21" fill="#ffe8a0"/> <ellipse cx="41" cy="67" rx="5" ry="6" fill="#ffd470"/> <ellipse cx="79" cy="67" rx="5" ry="6" fill="#ffd470"/> <path d="M49,59 Q55,55 61,57" fill="none" stroke="#775500" stroke-width="2" stroke-linecap="round"/> <path d="M71,59 Q65,55 59,57" fill="none" stroke="#775500" stroke-width="2" stroke-linecap="round"/> <ellipse cx="53" cy="64" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="67" cy="64" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="53" cy="65" rx="3" ry="2.8" fill="#774400"/> <ellipse cx="67" cy="65" rx="3" ry="2.8" fill="#774400"/> <circle cx="54.5" cy="63.5" r="1.2" fill="white"/> <circle cx="68.5" cy="63.5" r="1.2" fill="white"/> <path d="M60,68 Q57,73 59,75 Q61,75 63,73 Q60,71 60,68Z" fill="#f0c870" stroke="none"/> <path d="M52,78 Q60,86 68,78" fill="none" stroke="#885500" stroke-width="2.2" stroke-linecap="round"/> <circle cx="50" cy="77" r="1.2" fill="#e8b860"/> <circle cx="70" cy="77" r="1.2" fill="#e8b860"/> <ellipse cx="45" cy="71" rx="5" ry="3.5" fill="#ffaa00" opacity="0.35"/> <ellipse cx="75" cy="71" rx="5" ry="3.5" fill="#ffaa00" opacity="0.35"/> <path d="M24,60 Q20,72 24,82 Q28,90 36,90 Q44,90 48,82 Q52,72 48,60 Z" fill="none" stroke="#ffaa00" stroke-width="2"/> <line x1="28" y1="62" x2="28" y2="88" stroke="#ffaa00" stroke-width="1.2"/> <line x1="32" y1="60" x2="32" y2="90" stroke="#ffaa00" stroke-width="1.2"/> <line x1="36" y1="59" x2="36" y2="90" stroke="#ffaa00" stroke-width="1.2"/> <line x1="40" y1="60" x2="40" y2="90" stroke="#ffaa00" stroke-width="1.2"/> <line x1="44" y1="62" x2="44" y2="88" stroke="#ffaa00" stroke-width="1.2"/> <line x1="24" y1="70" x2="48" y2="70" stroke="#cc8800" stroke-width="2"/> <circle cx="82" cy="94" r="6" fill="#ffaa00"/> <line x1="82" y1="84" x2="82" y2="88" stroke="#ffaa00" stroke-width="2" stroke-linecap="round"/> <line x1="82" y1="100" x2="82" y2="104" stroke="#ffaa00" stroke-width="2" stroke-linecap="round"/> <line x1="72" y1="94" x2="76" y2="94" stroke="#ffaa00" stroke-width="2" stroke-linecap="round"/> <line x1="88" y1="94" x2="92" y2="94" stroke="#ffaa00" stroke-width="2" stroke-linecap="round"/> <line x1="74.9" y1="86.9" x2="77.8" y2="89.8" stroke="#ffaa00" stroke-width="1.5" stroke-linecap="round"/> <line x1="86.2" y1="98.2" x2="89.1" y2="101.1" stroke="#ffaa00" stroke-width="1.5" stroke-linecap="round"/> <line x1="74.9" y1="101.1" x2="77.8" y2="98.2" stroke="#ffaa00" stroke-width="1.5" stroke-linecap="round"/> <line x1="86.2" y1="89.8" x2="89.1" y2="86.9" stroke="#ffaa00" stroke-width="1.5" stroke-linecap="round"/> </svg>`,
  },
  {
    id: 'artemis',
    emoji: '🌙',
    kr: '아르테미스',
    en: 'ARTEMIS',
    domain: '달 · 사냥 · 순결',
    intro: '아폴론의 쌍둥이 누나. 달과 사냥을 사랑하며 혼자 있는 걸 즐깁니다 🌙 독립심이 넘치는 자유로운 영혼!',
    fortune: '고요한 직관이 오늘의 나침반이 됩니다.\n혼자만의 시간이 당신을 더 강하게 만듭니다.\n자연의 리듬에 귀를 기울이면 답을 얻을 수 있습니다.',
    bgDark: 'radial-gradient(ellipse at 60% 28%, #0a0a2a, #020208 68%)',
    bgLight: 'radial-gradient(ellipse at 60% 28%, #e0e0ff, #f0f0ff 68%)',
    color: '#aaaadd',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#aaaadd"/> <circle cx="60" cy="60" r="50" fill="#080820"/> <path d="M38,54 Q30,68 34,86 Q44,100 60,102 Q76,100 86,86 Q90,68 82,54" fill="#334466"/> <path d="M44,40 Q36,44 36,56 Q36,64 44,68 Q38,64 38,54 Q38,46 44,40Z" fill="#aaaadd"/> <path d="M44,40 Q54,38 60,40 Q70,44 72,54 Q70,64 60,68 Q54,70 44,68 Q50,64 52,54 Q50,46 44,40Z" fill="#aaaadd"/> <path d="M50,42 Q58,40 64,46 Q68,52 66,60 Q62,66 54,66 Q52,60 54,52 Q52,46 50,42Z" fill="#080820"/> <path d="M45,44 Q42,50 44,58 Q42,54 42,48 Q42,46 45,44Z" fill="#ccccee"/> <ellipse cx="60" cy="68" rx="18" ry="20" fill="#c0c0ee"/> <ellipse cx="42" cy="68" rx="5" ry="6" fill="#9999cc"/> <ellipse cx="78" cy="68" rx="5" ry="6" fill="#9999cc"/> <path d="M49,62 Q55,57 60,60" fill="none" stroke="#221144" stroke-width="2.5" stroke-linecap="round"/> <path d="M71,62 Q65,57 60,60" fill="none" stroke="#221144" stroke-width="2.5" stroke-linecap="round"/> <ellipse cx="53" cy="66" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="67" cy="66" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="53" cy="67" rx="3" ry="2.8" fill="#221144"/> <ellipse cx="67" cy="67" rx="3" ry="2.8" fill="#221144"/> <circle cx="54.5" cy="65.5" r="1" fill="white"/> <circle cx="68.5" cy="65.5" r="1" fill="white"/> <path d="M57.5,64.5 L60,63 L62.5,64.5" fill="none" stroke="#aaaadd" stroke-width="0.8"/> <path d="M60,70 Q57,75 59,77 Q61,77 63,75 Q60,73 60,70Z" fill="#9090bb" stroke="none"/> <path d="M53,80 Q60,83 67,80" fill="none" stroke="#334466" stroke-width="1.8" stroke-linecap="round"/> <path d="M86,54 Q96,68 86,82" fill="none" stroke="#aaaadd" stroke-width="2.5" stroke-linecap="round"/> <line x1="86" y1="54" x2="86" y2="82" stroke="#aaaadd" stroke-width="1" stroke-dasharray="2,2"/> <line x1="82" y1="60" x2="104" y2="76" stroke="#aaaadd" stroke-width="1.8" stroke-linecap="round"/> <polygon points="104,76 97,71 99,78" fill="#aaaadd"/> <path d="M82,60 L80,55 L85,58" fill="#8888bb"/> <path d="M75,92 Q70,92 68,97 Q68,104 74,106 Q68,104 68,100 Q68,94 75,92Z" fill="#aaaadd"/> <path d="M75,92 Q80,92 82,97 Q82,104 76,106 Q79,102 79,98 Q79,94 75,92Z" fill="#aaaadd"/> </svg>`,
  },
  {
    id: 'ares',
    emoji: '⚔️',
    kr: '아레스',
    en: 'ARES',
    domain: '전쟁 · 용기 · 폭력',
    intro: '전쟁의 신이지만 사실 그다지 인기는 없어요 ⚔️ 싸움은 최고지만 아프로디테한테는 약하다는 게 함정…',
    fortune: '두려움을 정면으로 마주할 용기를 내세요.\n치열한 도전 속에 성장의 씨앗이 있습니다.\n열정의 불꽃이 꺼지지 않는 한, 패배는 없습니다.',
    bgDark: 'radial-gradient(ellipse at 40% 28%, #300a0a, #0f0202 68%)',
    bgLight: 'radial-gradient(ellipse at 40% 28%, #ffe0e0, #fff0f0 68%)',
    color: '#cc4444',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#cc4444"/> <circle cx="60" cy="60" r="50" fill="#1a0505"/> <path d="M32,65 Q30,42 60,30 Q90,42 88,65 L88,78 Q88,88 78,90 L78,94 L42,94 L42,90 Q32,88 32,78 Z" fill="#cc4444"/> <path d="M40,62 Q40,44 60,36 Q80,44 80,62 L80,76 Q80,84 70,86 L50,86 Q40,84 40,76 Z" fill="#882222"/> <rect x="52" y="28" width="16" height="6" rx="3" fill="#aa2222"/> <path d="M34,28 Q44,20 60,28 Q76,20 86,28 Q72,34 60,32 Q48,34 34,28Z" fill="#cc4444"/> <path d="M36,28 Q46,22 60,28 Q74,22 84,28 Q70,32 60,30 Q50,32 36,28Z" fill="#ee5555"/> <path d="M34,28 Q28,32 26,40 Q32,38 36,32 Z" fill="#cc4444"/> <path d="M86,28 Q92,32 94,40 Q88,38 84,32 Z" fill="#cc4444"/> <path d="M44,60 L44,52 Q44,44 60,42 Q76,44 76,52 L76,60 L70,60 L70,68 L50,68 L50,60 Z" fill="#1a0505"/> <rect x="57" y="56" width="6" height="16" rx="3" fill="#cc4444"/> <path d="M40,64 L40,82 Q40,88 46,88 L46,64 Z" fill="#aa3333"/> <path d="M80,64 L80,82 Q80,88 74,88 L74,64 Z" fill="#aa3333"/> <ellipse cx="60" cy="58" rx="13" ry="9" fill="#e08080"/> <ellipse cx="53" cy="57" rx="4" ry="2.8" fill="white"/> <ellipse cx="67" cy="57" rx="4" ry="2.8" fill="white"/> <ellipse cx="53" cy="57.5" rx="2.8" ry="2" fill="#440000"/> <ellipse cx="67" cy="57.5" rx="2.8" ry="2" fill="#440000"/> <circle cx="54.5" cy="56.5" r="0.9" fill="white"/> <circle cx="68.5" cy="56.5" r="0.9" fill="white"/> <path d="M49,54 Q54,50 59,52" fill="none" stroke="#440000" stroke-width="3" stroke-linecap="round"/> <path d="M71,54 Q66,50 61,52" fill="none" stroke="#440000" stroke-width="3" stroke-linecap="round"/> <path d="M60,60 Q57,64 59,65 Q61,65 63,64 Q60,63 60,60Z" fill="#c06060" stroke="none"/> <path d="M48,62 Q52,60 60,62 Q68,60 72,62 Q72,70 60,73 Q48,70 48,62Z" fill="#882222"/> <line x1="52" y1="63" x2="52" y2="71" stroke="#cc4444" stroke-width="1" stroke-linecap="round"/> <line x1="56" y1="63" x2="55" y2="72" stroke="#cc4444" stroke-width="1" stroke-linecap="round"/> <line x1="60" y1="63" x2="60" y2="73" stroke="#cc4444" stroke-width="1" stroke-linecap="round"/> <line x1="64" y1="63" x2="65" y2="72" stroke="#cc4444" stroke-width="1" stroke-linecap="round"/> <line x1="68" y1="63" x2="68" y2="71" stroke="#cc4444" stroke-width="1" stroke-linecap="round"/> <path d="M72,88 L72,98 Q72,106 80,106 Q88,106 88,98 L88,88 Z" fill="#cc4444"/> <path d="M73,89 L73,98 Q73,104 80,104 Q87,104 87,98 L87,89 Z" fill="#1a0505"/> <line x1="80" y1="88" x2="80" y2="106" stroke="#cc4444" stroke-width="1.5"/> <line x1="72" y1="97" x2="88" y2="97" stroke="#cc4444" stroke-width="1.5"/> <line x1="68" y1="86" x2="68" y2="108" stroke="#cc4444" stroke-width="2.5" stroke-linecap="round"/> <polygon points="68,86 65,92 71,92" fill="#cc4444"/> <rect x="64" y="92" width="8" height="3" rx="1" fill="#882222"/> </svg>`,
  },
  {
    id: 'aphrodite',
    emoji: '🌹',
    kr: '아프로디테',
    en: 'APHRODITE',
    domain: '사랑 · 미 · 욕망',
    intro: '사랑과 미의 여신, 바다 거품에서 태어난 전설의 미녀 🌹 모든 신과 인간이 그녀 앞에서 무릎을 꿇었죠!',
    fortune: '진심 어린 감정을 표현할 절호의 순간입니다.\n아름다운 것에 마음을 열면 더 많은 행복이 찾아옵니다.\n당신이 먼저 사랑을 베풀면 그것은 반드시 돌아옵니다.',
    bgDark: 'radial-gradient(ellipse at 50% 28%, #2e0a20, #0f0308 68%)',
    bgLight: 'radial-gradient(ellipse at 50% 28%, #ffe8f0, #fff4f8 68%)',
    color: '#ff88aa',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#ff88aa"/> <circle cx="60" cy="60" r="50" fill="#1a000a"/> <path d="M38,56 Q32,72 36,86 Q44,96 60,98 Q76,96 84,86 Q88,72 82,56" fill="#cc5577"/> <path d="M38,56 Q30,60 32,72 Q34,68 38,64 Q36,74 40,80" fill="#aa3366" stroke="none"/> <path d="M82,56 Q90,60 88,72 Q86,68 82,64 Q84,74 80,80" fill="#aa3366" stroke="none"/> <ellipse cx="60" cy="65" rx="20" ry="22" fill="#ffd0dc"/> <circle cx="44" cy="46" r="6" fill="#ff88aa"/> <circle cx="52" cy="38" r="7" fill="#ff5577"/> <circle cx="60" cy="35" r="8" fill="#ff88aa"/> <circle cx="68" cy="38" r="7" fill="#ff5577"/> <circle cx="76" cy="46" r="6" fill="#ff88aa"/> <circle cx="44" cy="46" r="2.5" fill="#ffe0ea"/> <circle cx="52" cy="38" r="3" fill="#ffe0ea"/> <circle cx="60" cy="35" r="3.5" fill="#ffe0ea"/> <circle cx="68" cy="38" r="3" fill="#ffe0ea"/> <circle cx="76" cy="46" r="2.5" fill="#ffe0ea"/> <path d="M38,52 Q60,44 82,52" fill="none" stroke="#ff5577" stroke-width="3" stroke-linecap="round"/> <ellipse cx="52" cy="62" rx="6" ry="4" fill="white"/> <ellipse cx="68" cy="62" rx="6" ry="4" fill="white"/> <ellipse cx="52" cy="63" rx="4" ry="3" fill="#cc2244"/> <ellipse cx="68" cy="63" rx="4" ry="3" fill="#cc2244"/> <path d="M46,60 Q52,56 58,60" fill="none" stroke="#660022" stroke-width="1.5" stroke-linecap="round"/> <path d="M62,60 Q68,56 74,60" fill="none" stroke="#660022" stroke-width="1.5" stroke-linecap="round"/> <circle cx="50" cy="61" r="1.2" fill="white"/> <circle cx="66" cy="61" r="1.2" fill="white"/> <path d="M47,56 Q52,52 57,54" fill="none" stroke="#880033" stroke-width="2" stroke-linecap="round"/> <path d="M63,54 Q68,52 73,56" fill="none" stroke="#880033" stroke-width="2" stroke-linecap="round"/> <path d="M60,66 Q58,70 59,72 Q61,72 62,70 Q60,68 60,66Z" fill="#ffaacc" stroke="none"/> <path d="M53,76 Q60,73 67,76 Q60,82 53,76Z" fill="#ff3366"/> <path d="M53,76 Q56,74 60,75 Q64,74 67,76" fill="#ff5588" stroke="none"/> <ellipse cx="44" cy="70" rx="6" ry="4" fill="#ff88aa" opacity="0.5"/> <ellipse cx="76" cy="70" rx="6" ry="4" fill="#ff88aa" opacity="0.5"/> <ellipse cx="40" cy="65" rx="5" ry="6" fill="#ffb8cc"/> <ellipse cx="80" cy="65" rx="5" ry="6" fill="#ffb8cc"/> <path d="M37,72 Q35,74 37,76 Q39,74 37,72" fill="#ff88aa"/> <path d="M83,72 Q81,74 83,76 Q85,74 83,72" fill="#ff88aa"/> </svg>`,
  },
  {
    id: 'hephaestus',
    emoji: '🔥',
    kr: '헤파이스토스',
    en: 'HEPHAESTUS',
    domain: '불 · 대장간 · 창조',
    intro: '불과 대장장이의 신. 못생겼다고 올림포스에서 던져졌지만, 그래도 신들의 무기를 다 만들어줬어요 🔥 진정한 장인정신!',
    fortune: '끈기 있는 노력이 빛나는 작품을 만들어냅니다.\n완벽하지 않아도 괜찮습니다, 계속 두드리세요.\n당신의 손끝에서 탄생하는 것은 반드시 가치 있습니다.',
    bgDark: 'radial-gradient(ellipse at 42% 38%, #1e0f00, #080400 68%)',
    bgLight: 'radial-gradient(ellipse at 42% 38%, #ffe8cc, #fff4e8 68%)',
    color: '#dd6600',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#dd6600"/> <circle cx="60" cy="60" r="50" fill="#150800"/> <path d="M36,56 Q28,72 32,88 Q42,102 60,104 Q78,102 88,88 Q92,72 84,56" fill="#553300"/> <rect x="34" y="50" width="52" height="7" rx="3" fill="#bb4400"/> <path d="M38,50 Q34,42 38,34 Q40,40 44,38 Q42,44 46,40 Q44,46 48,50 Z" fill="#dd6600"/> <path d="M48,50 Q46,40 50,32 Q52,38 56,36 Q54,42 58,38 Q56,44 60,50 Z" fill="#ff8800"/> <path d="M55,50 Q54,38 60,28 Q62,36 66,32 Q64,40 68,36 Q66,44 65,50 Z" fill="#dd6600"/> <path d="M62,50 Q60,40 64,32 Q66,38 70,36 Q68,42 72,38 Q70,44 74,50 Z" fill="#ff8800"/> <path d="M72,50 Q70,42 74,34 Q76,40 80,38 Q78,44 82,40 Q80,46 82,50 Z" fill="#dd6600"/> <path d="M56,50 Q55,42 60,34 Q61,40 63,50 Z" fill="#ffcc00" opacity="0.7"/> <path d="M46,50 Q45,44 48,38 Q50,43 51,50 Z" fill="#ffcc00" opacity="0.5"/> <ellipse cx="61" cy="66" rx="19" ry="21" fill="#e0aa70"/> <ellipse cx="42" cy="67" rx="5" ry="6" fill="#c88850"/> <ellipse cx="80" cy="67" rx="5" ry="6" fill="#c88850"/> <path d="M49,60 Q55,55 61,58" fill="none" stroke="#3a1a00" stroke-width="3" stroke-linecap="round"/> <path d="M73,60 Q67,55 61,58" fill="none" stroke="#3a1a00" stroke-width="3" stroke-linecap="round"/> <ellipse cx="54" cy="64" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="68" cy="64" rx="4" ry="3" fill="white"/> <ellipse cx="54" cy="65" rx="3" ry="2.5" fill="#4a2200"/> <ellipse cx="68" cy="65" rx="2.8" ry="2.2" fill="#4a2200"/> <circle cx="55.5" cy="63.5" r="1" fill="white"/> <circle cx="69.2" cy="63.2" r="0.9" fill="white"/> <path d="M61,68 Q58,73 60,75 Q62,75 64,73 Q61,71 61,68Z" fill="#c08050" stroke="none"/> <path d="M42,72 Q46,70 52,72 Q56,70 60,72 Q64,70 68,72 Q72,70 78,72 Q78,84 61,88 Q44,84 42,72Z" fill="#553300"/> <line x1="48" y1="74" x2="47" y2="86" stroke="#dd6600" stroke-width="1.2" stroke-linecap="round"/> <line x1="54" y1="73" x2="53" y2="87" stroke="#dd6600" stroke-width="1.2" stroke-linecap="round"/> <line x1="61" y1="73" x2="61" y2="88" stroke="#dd6600" stroke-width="1.2" stroke-linecap="round"/> <line x1="68" y1="73" x2="69" y2="87" stroke="#dd6600" stroke-width="1.2" stroke-linecap="round"/> <line x1="74" y1="74" x2="75" y2="85" stroke="#dd6600" stroke-width="1.2" stroke-linecap="round"/> <path d="M81,60 Q83,57 82,62 Q80,62 81,60Z" fill="#ffcc88" opacity="0.8"/> <rect x="18" y="60" width="18" height="7" rx="3" fill="#dd6600"/> <line x1="27" y1="67" x2="27" y2="100" stroke="#dd6600" stroke-width="3" stroke-linecap="round"/> <path d="M78,90 Q74,84 78,78 Q80,84 84,82 Q82,86 86,84 Q84,90 80,96 Q76,92 78,90Z" fill="#dd6600"/> <path d="M80,90 Q78,86 80,82 Q81,86 83,84 Q82,88 84,86 Q83,90 80,94 Q77,91 80,90Z" fill="#ffcc00" opacity="0.7"/> </svg>`,
  },
  {
    id: 'hermes',
    emoji: '🪄',
    kr: '헤르메스',
    en: 'HERMES',
    domain: '전령 · 여행 · 상업',
    intro: '신들의 전령이자 여행자·도둑의 수호신 🪄 날개 달린 모자와 지팡이로 어디든 순식간에 나타납니다. 제일 바쁜 신!',
    fortune: '빠른 변화 속에 놓치지 말아야 할 기회가 숨어 있습니다.\n발빠르게 움직이는 자에게 행운의 여신이 손을 내밉니다.\n오늘 맺는 인연이 먼 훗날 큰 도움이 될 것입니다.',
    bgDark: 'radial-gradient(ellipse at 55% 25%, #002520, #000b0a 68%)',
    bgLight: 'radial-gradient(ellipse at 55% 25%, #ccf0ee, #e8faf8 68%)',
    color: '#44aaaa',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#44aaaa"/> <circle cx="60" cy="60" r="50" fill="#001a1a"/> <ellipse cx="60" cy="50" rx="28" ry="6" fill="#44aaaa"/> <path d="M36,50 Q36,30 60,28 Q84,30 84,50Z" fill="#2d8888"/> <path d="M32,50 Q20,44 18,52 Q22,58 34,54" fill="#44aaaa"/> <path d="M32,50 Q22,46 20,50 Q22,54 34,52" fill="#66cccc"/> <path d="M88,50 Q100,44 102,52 Q98,58 86,54" fill="#44aaaa"/> <path d="M88,50 Q98,46 100,50 Q98,54 86,52" fill="#66cccc"/> <path d="M36,50 Q60,54 84,50" fill="none" stroke="#66cccc" stroke-width="2"/> <ellipse cx="60" cy="68" rx="18" ry="20" fill="#99dddd"/> <path d="M49,62 Q54,58 59,60" fill="none" stroke="#003333" stroke-width="2.2" stroke-linecap="round"/> <path d="M71,62 Q66,58 61,60" fill="none" stroke="#003333" stroke-width="2.2" stroke-linecap="round"/> <ellipse cx="54" cy="66" rx="4" ry="3.5" fill="white"/> <ellipse cx="66" cy="66" rx="4" ry="3.5" fill="white"/> <ellipse cx="54" cy="67" rx="2.8" ry="2.5" fill="#004444"/> <ellipse cx="66" cy="67" rx="2.8" ry="2.5" fill="#004444"/> <circle cx="55" cy="65.5" r="1" fill="white"/> <circle cx="67" cy="65.5" r="1" fill="white"/> <path d="M60,69 Q57,74 59,76 Q61,76 63,74 Q60,72 60,69Z" fill="#77cccc"/> <path d="M53,80 Q60,85 67,80" fill="none" stroke="#003333" stroke-width="2" stroke-linecap="round"/> <circle cx="51" cy="79" r="1.2" fill="#55bbbb"/> <circle cx="69" cy="79" r="1.2" fill="#55bbbb"/> <ellipse cx="42" cy="68" rx="5" ry="6" fill="#88cccc"/> <ellipse cx="78" cy="68" rx="5" ry="6" fill="#88cccc"/> <line x1="76" y1="82" x2="76" y2="104" stroke="#44aaaa" stroke-width="2.5" stroke-linecap="round"/> <path d="M76,86 Q69,90 76,94 Q83,90 76,86" fill="none" stroke="#66cccc" stroke-width="1.5"/> <path d="M76,94 Q69,98 76,102 Q83,98 76,94" fill="none" stroke="#66cccc" stroke-width="1.5"/> <path d="M76,84 Q68,80 64,84 Q68,86 74,86" fill="#44aaaa"/> <path d="M76,84 Q84,80 88,84 Q84,86 78,86" fill="#44aaaa"/> </svg>`,
  },
  {
    id: 'dionysus',
    emoji: '🍇',
    kr: '디오니소스',
    en: 'DIONYSUS',
    domain: '포도주 · 축제 · 광기',
    intro: '포도주와 축제의 신 🍇 파티를 열면 올림포스 모두가 찾아옵니다. "인생은 즐겨야 한다"는 철학을 몸소 실천 중!',
    fortune: '지나친 긴장을 풀고 오늘만큼은 자신을 해방시키세요.\n즐거움 속에서 새로운 아이디어가 피어납니다.\n때로는 흘러가는 대로 두는 것이 최선의 선택입니다.',
    bgDark: 'radial-gradient(ellipse at 45% 28%, #1a0a2e, #07030f 68%)',
    bgLight: 'radial-gradient(ellipse at 45% 28%, #ead8ff, #f5eeff 68%)',
    color: '#9944cc',
    // SVG 아이콘 (Style B 플랫 아이콘)
    svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"> <circle cx="60" cy="60" r="55" fill="#9944cc"/> <circle cx="60" cy="60" r="50" fill="#0f0520"/> <path d="M36,56 Q28,72 32,90 Q42,104 60,106 Q78,104 88,90 Q92,72 84,56" fill="#551188"/> <path d="M32,52 Q40,42 60,40 Q80,42 88,52" fill="none" stroke="#6622aa" stroke-width="2.5" stroke-linecap="round"/> <path d="M36,52 Q30,46 34,40 Q36,44 40,46 Q38,42 42,40 Q40,46 38,52Z" fill="#9944cc"/> <path d="M48,44 Q44,36 50,32 Q50,38 54,38 Q50,36 54,32 Q56,38 52,44Z" fill="#7722aa"/> <path d="M60,40 Q58,32 64,28 Q62,34 66,34 Q62,32 66,28 Q68,34 62,40Z" fill="#9944cc"/> <path d="M72,44 Q68,36 74,32 Q72,38 76,38 Q72,36 76,32 Q78,38 74,44Z" fill="#7722aa"/> <path d="M84,52 Q80,44 86,38 Q84,44 88,46 Q84,42 88,38 Q90,44 86,52Z" fill="#9944cc"/> <circle cx="38" cy="48" r="3.5" fill="#6622aa"/> <circle cx="44" cy="45" r="3.5" fill="#7733bb"/> <circle cx="41" cy="52" r="3" fill="#6622aa"/> <circle cx="35" cy="52" r="3" fill="#5511aa"/> <circle cx="82" cy="48" r="3.5" fill="#6622aa"/> <circle cx="76" cy="45" r="3.5" fill="#7733bb"/> <circle cx="79" cy="52" r="3" fill="#6622aa"/> <circle cx="85" cy="52" r="3" fill="#5511aa"/> <ellipse cx="60" cy="67" rx="19" ry="21" fill="#d8a0d8"/> <ellipse cx="41" cy="68" rx="5" ry="6" fill="#bb80bb"/> <ellipse cx="79" cy="68" rx="5" ry="6" fill="#bb80bb"/> <path d="M49,61 Q55,57 61,59" fill="none" stroke="#440066" stroke-width="2" stroke-linecap="round"/> <path d="M71,61 Q65,57 59,59" fill="none" stroke="#440066" stroke-width="2" stroke-linecap="round"/> <ellipse cx="53" cy="65" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="67" cy="65" rx="4.5" ry="3.5" fill="white"/> <ellipse cx="53" cy="66" rx="3" ry="2.8" fill="#440066"/> <ellipse cx="67" cy="66" rx="3" ry="2.8" fill="#440066"/> <circle cx="54.5" cy="64.5" r="1.2" fill="white"/> <circle cx="68.5" cy="64.5" r="1.2" fill="white"/> <path d="M49,63.5 Q53,60.5 57,63.5" fill="none" stroke="#440066" stroke-width="1.5"/> <path d="M63,63.5 Q67,60.5 71,63.5" fill="none" stroke="#440066" stroke-width="1.5"/> <path d="M60,69 Q57,74 59,76 Q61,76 63,74 Q60,72 60,69Z" fill="#bb88bb" stroke="none"/> <path d="M51,79 Q60,88 69,79" fill="none" stroke="#6622aa" stroke-width="2.5" stroke-linecap="round"/> <path d="M53,79 Q56,77 60,78 Q64,77 67,79" fill="none" stroke="#9944cc" stroke-width="1.5"/> <ellipse cx="44" cy="72" rx="6" ry="4" fill="#9944cc" opacity="0.45"/> <ellipse cx="76" cy="72" rx="6" ry="4" fill="#9944cc" opacity="0.45"/> <path d="M86,62 Q82,68 84,76 L88,76 Q90,68 86,62Z" fill="#9944cc"/> <line x1="86" y1="76" x2="86" y2="90" stroke="#9944cc" stroke-width="2" stroke-linecap="round"/> <rect x="81" y="89" width="10" height="3" rx="1.5" fill="#9944cc"/> <rect x="81" y="62" width="10" height="2" rx="1" fill="#bb66ee"/> <path d="M82,64 Q82,70 84,74 L88,74 Q90,70 90,64Z" fill="#6622aa"/> <circle cx="74" cy="94" r="3.5" fill="#9944cc"/> <circle cx="80" cy="92" r="3.5" fill="#7733bb"/> <circle cx="77" cy="98" r="3.5" fill="#9944cc"/> <circle cx="83" cy="98" r="3" fill="#6622aa"/> <circle cx="74" cy="100" r="3" fill="#7733bb"/> <circle cx="80" cy="104" r="3" fill="#9944cc"/> <line x1="78" y1="88" x2="78" y2="92" stroke="#6622aa" stroke-width="1.5"/> <path d="M78,88 Q74,84 76,80 Q78,84 82,82 Q80,86 78,88Z" fill="#7733bb"/> </svg>`,
  },
];

// ── 유틸리티 함수 ──────────────────────────────────────────────────

/**
 * 신 ID로 해당 신 데이터를 반환
 * @param {string} id - 신의 고유 ID (예: "zeus")
 * @returns {Object|undefined} 신 데이터 객체 또는 undefined
 */
function getGodById(id) {
  return GODS.find(god => god.id === id);
}
