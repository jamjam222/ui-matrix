# UI Matrix - 컴포넌트 설치 가이드

UI Matrix는 여러 UI 라이브러리의 컴포넌트를 하나의 프로젝트에서 사용할 수 있도록 설계되었습니다.
각 라이브러리는 독립된 폴더 구조를 유지하여 컴포넌트 이름 충돌을 방지합니다.

## 📁 폴더 구조

```
src/
└── components/
    ├── shadcn/          # shadcn/ui 컴포넌트
    ├── aceternity/      # Aceternity UI 컴포넌트
    ├── magicui/         # Magic UI 컴포넌트
    └── originui/        # Origin UI 컴포넌트
```

## 🚀 컴포넌트 설치 방법

### 1. shadcn/ui 컴포넌트 설치

```bash
npm run add:shadcn button
npm run add:shadcn card
npm run add:shadcn dialog
```

**문서:** https://ui.shadcn.com/docs/components

### 2. Aceternity UI 컴포넌트 설치

```bash
npm run add:aceternity moving-border
npm run add:aceternity stateful-button
```

**참고:** Aceternity UI는 URL 기반 레지스트리를 사용합니다.
**문서:** https://ui.aceternity.com/components

### 3. Magic UI 컴포넌트 설치

```bash
npm run add:magicui button
npm run add:magicui animated-beam
```

**문서:** https://magicui.design/docs/components

### 4. Origin UI 컴포넌트 설치

```bash
npm run add:originui comp-01
npm run add:originui comp-90
```

**참고:** Origin UI는 `comp-XX` 형식의 컴포넌트 ID를 사용합니다.
**문서:** https://originui.com/button

## 📦 설치된 컴포넌트 사용하기

각 라이브러리의 컴포넌트는 독립된 경로에서 import합니다:

```tsx
// shadcn/ui 컴포넌트
import { Button } from '@/components/shadcn/button';

// Aceternity UI 컴포넌트
import { Button as AceternityButton } from '@/components/aceternity/button';

// Magic UI 컴포넌트
import { Button as MagicButton } from '@/components/magicui/button';

// Origin UI 컴포넌트
import { Button as OriginButton } from '@/components/originui/button';
```

### 사용 예시

```tsx
import { Button as ShadcnButton } from '@/components/shadcn/button';
import { Button as AceternityButton } from '@/components/aceternity/button';

export default function MyPage() {
  return (
    <div>
      <ShadcnButton>Shadcn Button</ShadcnButton>
      <AceternityButton>Aceternity Button</AceternityButton>
    </div>
  );
}
```

## ⚙️ 설정 파일

각 라이브러리는 독립된 설정 파일을 가지고 있습니다:

- `components.shadcn.json` - shadcn/ui 설정
- `components.aceternity.json` - Aceternity UI 설정
- `components.magicui.json` - Magic UI 설정
- `components.originui.json` - Origin UI 설정

**중요:** 기본 `components.json` 파일은 설치 시 임시로 사용되며, 설치 후 자동으로 복원됩니다.

## 🛠️ 고급 사용법

### PowerShell 스크립트 직접 사용 (Windows)

```powershell
.\scripts\install-component.ps1 -Library shadcn -Component button
```

### Bash 스크립트 직접 사용 (Linux/Mac)

```bash
chmod +x scripts/install-component.sh
./scripts/install-component.sh shadcn button
```

### Node.js 래퍼 직접 사용

```bash
node scripts/install-wrapper.mjs shadcn button
```

## 🔍 문제 해결

### 설치가 실패하는 경우

1. **Node.js 버전 확인**: Node.js 18 이상이 필요합니다.
   ```bash
   node --version
   ```

2. **의존성 재설치**:
   ```bash
   npm install
   ```

3. **캐시 정리**:
   ```bash
   npm cache clean --force
   ```

### 컴포넌트가 올바른 폴더에 설치되지 않는 경우

- 각 라이브러리의 설정 파일(`components.*.json`)에서 `aliases.ui` 경로를 확인하세요.
- 설치 후 `src/components/<library>/` 폴더에 컴포넌트가 있는지 확인하세요.

### Origin UI 컴포넌트 ID 찾기

Origin UI는 `comp-XX` 형식의 ID를 사용합니다:

1. https://originui.com/button 에서 원하는 컴포넌트 선택
2. 컴포넌트 카드에서 ID 확인 (예: `comp-01`, `comp-90`)
3. 해당 ID로 설치: `npm run add:originui comp-01`

## 📚 추가 리소스

- **shadcn/ui**: https://ui.shadcn.com
- **Aceternity UI**: https://ui.aceternity.com
- **Magic UI**: https://magicui.design
- **Origin UI**: https://originui.com

## 🤝 기여

컴포넌트 설치 스크립트 개선 제안은 언제나 환영합니다!
