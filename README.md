# 올림푸스의 신탁 (Oracle of Olympus)

올림포스 12신의 신탁을 통해 오늘의 운세를 확인하는 포춘카드 웹앱입니다.

---

## 프로젝트 소개

그리스 신화의 올림포스 12신 중 원하는 신을 선택하면, 아름다운 3D 플립 카드 애니메이션과 함께 오늘의 운세가 펼쳐집니다. 별빛 배경, 골드 테마의 신비로운 분위기, 라이트/다크 모드 지원으로 몰입감 있는 경험을 제공합니다.

---

## 주요 기능

### 화면 구성
- **인트로 화면**: 앱 소개 및 시작하기 버튼
- **신 선택 목록**: 12신을 카드 그리드로 표시, 각 신마다 소개 모달 및 신탁 요청 가능
- **운세 카드 화면**: 3D 플립 카드로 신탁 공개, 피드백 버튼 제공

### 테마 전환
- 다크 모드 (기본): 심우주의 신비로운 분위기
- 라이트 모드: 따뜻한 앰버 톤의 낮 분위기
- 시스템 테마 자동 감지 및 localStorage에 설정 저장

### 12신 목록
| 신 | 한글 이름 | 영문 이름 | 담당 영역 |
|---|---|---|---|
| ⚡ | 제우스 | ZEUS | 하늘 · 천둥 · 왕권 |
| 👑 | 헤라 | HERA | 결혼 · 가정 · 여왕 |
| 🔱 | 포세이돈 | POSEIDON | 바다 · 지진 · 말 |
| 🌾 | 데메테르 | DEMETER | 대지 · 수확 · 계절 |
| 🦉 | 아테나 | ATHENA | 지혜 · 전쟁 · 공예 |
| ☀️ | 아폴론 | APOLLO | 태양 · 예언 · 음악 · 의술 |
| 🌙 | 아르테미스 | ARTEMIS | 달 · 사냥 · 순결 |
| ⚔️ | 아레스 | ARES | 전쟁 · 용기 · 폭력 |
| 🌹 | 아프로디테 | APHRODITE | 사랑 · 미 · 욕망 |
| 🔥 | 헤파이스토스 | HEPHAESTUS | 불 · 대장간 · 창조 |
| 🪄 | 헤르메스 | HERMES | 전령 · 여행 · 상업 |
| 🍇 | 디오니소스 | DIONYSUS | 포도주 · 축제 · 광기 |

---

## 사용 방법

1. `index.html`을 웹 브라우저에서 열거나 로컬 서버로 실행합니다.
2. **[시작하기]** 버튼을 클릭하여 신 목록으로 이동합니다.
3. 원하는 신의 **[소개]** 버튼을 클릭하면 신 소개 모달이 열립니다.
4. **[신탁 요청 →]** 버튼을 클릭하면 운세 카드 화면으로 이동합니다.
5. 카드가 자동으로 플립되며 오늘의 운세가 공개됩니다.
6. **[만족]** / **[불만족]** 버튼으로 피드백을 남길 수 있습니다.
7. **[← 돌아가기]** 버튼으로 신 목록으로 돌아가거나, **[종료]** 버튼으로 처음으로 돌아갑니다.

---

## 기술 스택

- **HTML5** — 시맨틱 마크업, WAI-ARIA 접근성 속성
- **CSS3** — CSS 변수, CSS Grid/Flexbox, 3D Transform, CSS 애니메이션
- **JavaScript (Vanilla ES6+)** — DOM 조작, Canvas API, localStorage
- **Google Fonts** — Noto Serif KR, Noto Sans KR, Cinzel
- **Canvas API** — 별빛 배경 파티클 시스템 (220개 별, twinkle 애니메이션)

---

## 파일 구조

```
oracle-of-olympus/
├── index.html              # 메인 HTML (3개 화면 + 모달 포함)
├── assets/
│   ├── css/
│   │   └── style.css       # 전체 스타일 (CSS 변수, 반응형, 애니메이션)
│   ├── js/
│   │   ├── app.js          # 앱 로직 (화면 전환, 카드, 테마, Canvas)
│   │   └── gods.js         # 12신 데이터 배열 (GODS)
│   └── images/             # 이미지 에셋 폴더 (추후 신 이미지 추가 예정)
├── README.md               # 프로젝트 문서
└── .gitignore              # Git 무시 파일 목록
```

---

## 반응형 지원

| 브레이크포인트 | 레이아웃 |
|---|---|
| 480px 이하 (모바일) | 단일 열, 세로 버튼 배치 |
| 481px ~ 768px (태블릿) | 2열 그리드 |
| 769px 이상 (PC) | 3열 그리드 |

---

## 라이선스

MIT License

Copyright (c) 2025 Oracle of Olympus

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
