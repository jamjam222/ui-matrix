# 🎨 UI Matrix

> **여러 UI 라이브러리의 컴포넌트를 한 곳에서 비교하고 탐색할 수 있는 인터랙티브 갤러리**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🌐 Live Demo

**🚀 [https://ui-matrix-k1p6k48s8-jamjam222s-projects.vercel.app](https://ui-matrix-k1p6k48s8-jamjam222s-projects.vercel.app)**

## ✨ 주요 기능

- 🎯 **4개 UI 라이브러리 통합**: shadcn/ui, Aceternity UI, Magic UI, Origin UI
- 🔍 **실시간 검색**: 컴포넌트 이름으로 즉시 필터링
- 🏷️ **카테고리 필터**: Button, Input, Layout, Animation 등
- ⭐ **즐겨찾기**: localStorage 기반 개인화
- 📋 **코드 복사**: 원클릭 코드 스니펫 복사
- 🌓 **다크모드**: 시스템 설정 자동 감지
- 📱 **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- ⚡ **성능 최적화**: useMemo, useCallback 활용
- ♿ **접근성**: WCAG 2.1 Level A 준수

## 🎨 지원 UI 라이브러리

| 라이브러리 | 컴포넌트 수 | 특징 |
|-----------|------------|------|
| [**shadcn/ui**](https://ui.shadcn.com) | 18개 | 커스터마이징 가능한 Radix UI 기반 |
| [**Aceternity UI**](https://ui.aceternity.com) | 10개 | 고급 애니메이션 효과 |
| [**Magic UI**](https://magicui.design) | 20개 | 인터랙티브 특수 효과 |
| [**Origin UI**](https://originui.com) | 19개 | 실용적인 비즈니스 컴포넌트 |

**총 67개 컴포넌트** 제공

## 📦 컴포넌트 설치

각 라이브러리의 컴포넌트는 독립된 폴더에 설치되어 이름 충돌을 방지합니다.

```bash
# shadcn/ui 컴포넌트 설치
npm run add:shadcn button

# Aceternity UI 컴포넌트 설치
npm run add:aceternity moving-border

# Magic UI 컴포넌트 설치
npm run add:magicui button

# Origin UI 컴포넌트 설치 (comp-XX 형식)
npm run add:originui comp-01
```

**자세한 설치 가이드:** [COMPONENT_INSTALLATION.md](./COMPONENT_INSTALLATION.md)

## 🚀 빠른 시작

### 1. 저장소 클론

```bash
git clone https://github.com/jamjam222/ui-matrix.git
cd ui-matrix
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 🛠️ 기술 스택

- **Framework**: [Next.js 15.5](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS 3.4](https://tailwindcss.com/)
- **UI Components**: 
  - [shadcn/ui](https://ui.shadcn.com) (Radix UI)
  - [Aceternity UI](https://ui.aceternity.com)
  - [Magic UI](https://magicui.design)
  - [Origin UI](https://originui.com)
- **Animation**: Framer Motion, CSS Animations
- **State Management**: React Hooks (useState, useMemo, useCallback)
- **Storage**: localStorage (즐겨찾기, 테마)
- **Deployment**: Vercel

## 📂 프로젝트 구조

```
ui-matrix/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 메인 페이지 (Gallery, Compare, By Component)
│   │   ├── globals.css       # 전역 스타일 + 애니메이션
│   │   └── layout.tsx        # 루트 레이아웃
│   ├── components/
│   │   └── ui/
│   │       ├── shadcn/       # shadcn/ui 컴포넌트
│   │       ├── aceternity/   # Aceternity UI 컴포넌트
│   │       ├── magicui/      # Magic UI 컴포넌트
│   │       └── originui/     # Origin UI 컴포넌트
│   ├── hooks/
│   │   └── use-toast.ts      # 토스트 알림 훅
│   └── styles/
│       └── components.css    # BEM 기반 컴포넌트 스타일
├── scripts/                  # 컴포넌트 설치 스크립트
├── DEPLOYMENT.md             # 배포 가이드
└── COMPONENT_INSTALLATION.md # 컴포넌트 설치 가이드
```

## 🎯 주요 구현 사항

### 성능 최적화
- ✅ `useMemo`로 검색 쿼리 정규화
- ✅ `useCallback`으로 필터 함수 메모이제이션
- ✅ 조건부 렌더링으로 불필요한 컴포넌트 제거
- ✅ CSS 애니메이션 stagger 효과

### 접근성 (a11y)
- ✅ 시맨틱 HTML (`<article>`, `<nav>`, `<main>`)
- ✅ ARIA 레이블 (`aria-label`, `aria-hidden`)
- ✅ 키보드 내비게이션 지원
- ✅ 포커스 가시성 유지
- ✅ 스크린 리더 지원

### UX 개선
- ✅ 실시간 검색 (debounce 없이 즉시 반응)
- ✅ 다중 필터 (라이브러리 + 카테고리)
- ✅ 즐겨찾기 localStorage 저장
- ✅ 토스트 알림 (코드 복사 피드백)
- ✅ 다크모드 시스템 설정 자동 감지

## 📸 스크린샷

### Gallery View
![Gallery View](docs/screenshots/gallery.png) _(배포 후 추가)_

### Compare View
![Compare View](docs/screenshots/compare.png) _(배포 후 추가)_

### Dark Mode
![Dark Mode](docs/screenshots/dark-mode.png) _(배포 후 추가)_

## 🚀 배포

### Vercel (추천)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/<your-username>/ui-matrix)

자세한 배포 가이드: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 🤝 기여

이슈 제보 및 Pull Request를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 연락처

프로젝트 링크: [https://github.com/<your-username>/ui-matrix](https://github.com/<your-username>/ui-matrix)

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
