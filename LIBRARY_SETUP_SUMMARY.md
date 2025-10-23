# UI Matrix - 라이브러리 설치 시스템 요약

## 🎯 개요

4개의 UI 라이브러리를 독립된 폴더 구조로 관리하여 컴포넌트 이름 충돌을 방지하는 자동화 시스템입니다.

## 📁 폴더 구조

```
src/components/
├── shadcn/          # shadcn/ui 컴포넌트
├── aceternity/      # Aceternity UI 컴포넌트
├── magicui/         # Magic UI 컴포넌트
└── originui/        # Origin UI 컴포넌트
```

## 🔧 각 라이브러리별 설치 방식

### 1. shadcn/ui
- **CLI**: `npx shadcn@latest add`
- **형식**: 일반 컴포넌트 이름
- **예시**: `npm run add:shadcn button`
- **특징**: 표준 shadcn CLI 사용

### 2. Aceternity UI
- **CLI**: `npx shadcn@latest add https://ui.aceternity.com/registry/`
- **형식**: URL 기반 (component-name.json)
- **예시**: `npm run add:aceternity moving-border`
- **특징**: 
  - URL 레지스트리 사용
  - 설치 후 자동으로 `ui/` → `aceternity/` 폴더로 이동
  - 16개 기본 컴포넌트 포함

### 3. Magic UI
- **CLI**: `npx shadcn@latest add @magicui/`
- **형식**: @magicui/ 접두사
- **예시**: `npm run add:magicui shimmer-button`
- **특징**: 
  - 특수 효과 버튼 전문
  - 일반 button 없음 (shimmer, rainbow, ripple 등)

### 4. Origin UI
- **CLI**: `npx shadcn@latest add https://originui.com/r/`
- **형식**: URL 기반 (comp-XX.json)
- **예시**: `npm run add:originui comp-01`
- **특징**: 
  - comp-XX 형식의 ID 사용
  - 54개 이상의 버튼 컴포넌트

## 🚀 설치 명령어

```bash
# shadcn/ui
npm run add:shadcn button
npm run add:shadcn card

# Aceternity UI
npm run add:aceternity moving-border
npm run add:aceternity stateful-button

# Magic UI
npm run add:magicui shimmer-button
npm run add:magicui rainbow-button

# Origin UI
npm run add:originui comp-01
npm run add:originui comp-90
```

## 📋 설정 파일

각 라이브러리는 독립된 설정 파일을 가집니다:

| 라이브러리 | 설정 파일 | 경로 설정 |
|-----------|----------|----------|
| shadcn | `components.shadcn.json` | `@/components/shadcn` |
| Aceternity | `components.aceternity.json` | `@/components/aceternity` |
| Magic UI | `components.magicui.json` | `@/components/magicui` |
| Origin UI | `components.originui.json` | `@/components/originui` |

## 🔄 설치 프로세스

1. **설정 백업**: 기존 `components.json` 백업
2. **설정 교체**: 라이브러리별 설정을 `components.json`으로 복사
3. **컴포넌트 설치**: CLI 실행
4. **파일 이동** (Aceternity만): `ui/` → `aceternity/` 자동 이동
5. **설정 복원**: 원래 `components.json` 복원

## 💡 사용 예시

```tsx
// shadcn/ui 컴포넌트
import { Button } from '@/components/shadcn/button';

// Aceternity UI 컴포넌트
import { MovingBorder } from '@/components/aceternity/moving-border';

// Magic UI 컴포넌트
import { ShimmerButton } from '@/components/magicui/shimmer-button';

// Origin UI 컴포넌트
import Component01 from '@/components/originui/comp-01';

export default function MyPage() {
  return (
    <div>
      <Button>Shadcn Button</Button>
      <MovingBorder>Aceternity Border</MovingBorder>
      <ShimmerButton>Magic Shimmer</ShimmerButton>
      <Component01 />
    </div>
  );
}
```

## 🛠️ 스크립트 파일

- **Node.js**: `scripts/install-wrapper.mjs` (크로스 플랫폼)
- **PowerShell**: `scripts/install-component.ps1` (Windows)
- **Bash**: `scripts/install-component.sh` (Linux/Mac)

## 📚 문서 링크

- **shadcn/ui**: https://ui.shadcn.com/docs/components
- **Aceternity UI**: https://ui.aceternity.com/components
- **Magic UI**: https://magicui.design/docs/components
- **Origin UI**: https://originui.com/button

## ⚠️ 주의사항

### Aceternity UI
- 설치 시 `ui/` 폴더에 먼저 설치됨
- 자동으로 `aceternity/` 폴더로 이동
- 기존 `ui/` 폴더의 다른 파일도 함께 이동될 수 있음

### Magic UI
- 일반 `button` 컴포넌트 없음
- 특수 효과 버튼만 제공 (shimmer, rainbow, ripple 등)

### Origin UI
- `comp-XX` 형식의 ID 사용
- 웹사이트에서 컴포넌트 ID 확인 필요

## 🔍 문제 해결

### 설치 실패 시
1. Node.js 버전 확인 (18 이상)
2. npm 캐시 정리: `npm cache clean --force`
3. 의존성 재설치: `npm install`

### 컴포넌트가 잘못된 폴더에 설치된 경우
- 각 라이브러리의 `components.*.json` 파일에서 `aliases.ui` 경로 확인
- Aceternity UI는 자동 이동 로직이 작동하는지 확인

## ✅ 테스트 결과

| 라이브러리 | 상태 | 설치된 컴포넌트 |
|-----------|------|----------------|
| shadcn | ✅ 성공 | button, card 등 |
| Aceternity | ✅ 성공 | moving-border, stateful-button |
| Magic UI | ✅ 성공 | shimmer-button, rainbow-button |
| Origin UI | ✅ 성공 | comp-01, input, label |

---

**작성일**: 2025-10-02  
**버전**: 1.0.0
