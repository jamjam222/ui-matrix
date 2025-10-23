# 🤝 기여 가이드

UI Matrix 프로젝트에 기여해주셔서 감사합니다!

## 🚀 시작하기

### 1. 저장소 Fork 및 Clone

```bash
# Fork 후
git clone https://github.com/YOUR_USERNAME/ui-matrix.git
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

## 📋 기여 프로세스

### 1. 브랜치 생성

```bash
git checkout -b feature/amazing-feature
# 또는
git checkout -b fix/bug-fix
```

**브랜치 네이밍 규칙**:
- `feature/`: 새로운 기능
- `fix/`: 버그 수정
- `docs/`: 문서 업데이트
- `style/`: 코드 스타일 변경
- `refactor/`: 리팩토링
- `test/`: 테스트 추가
- `chore/`: 기타 변경사항

### 2. 코드 작성

#### 코딩 스타일
- **TypeScript** 사용
- **BEM** 네이밍 컨벤션 (CSS)
- **ESLint** 규칙 준수
- **Prettier** 포맷팅

#### 컴포넌트 추가
```bash
# shadcn/ui 컴포넌트
npm run add:shadcn component-name

# Aceternity UI 컴포넌트
npm run add:aceternity component-name

# Magic UI 컴포넌트
npm run add:magicui component-name

# Origin UI 컴포넌트
npm run add:originui comp-XX
```

### 3. 커밋

**커밋 메시지 규칙** (Conventional Commits):
```
<type>(<scope>): <subject>

<body>

<footer>
```

**타입**:
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (포맷팅)
- `refactor`: 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가
- `chore`: 빌드 프로세스 또는 도구 변경

**예시**:
```bash
git commit -m "feat(components): Accordion 컴포넌트 추가"
git commit -m "fix(search): 검색 필터링 버그 수정"
git commit -m "docs(readme): 설치 가이드 업데이트"
```

### 4. Push 및 Pull Request

```bash
git push origin feature/amazing-feature
```

GitHub에서 Pull Request를 생성하고 템플릿을 작성해주세요.

## ✅ 체크리스트

PR을 제출하기 전에 다음을 확인해주세요:

- [ ] 코드가 정상적으로 빌드됩니다 (`npm run build`)
- [ ] 로컬에서 테스트를 완료했습니다
- [ ] ESLint 에러가 없습니다
- [ ] 커밋 메시지가 규칙을 따릅니다
- [ ] 문서를 업데이트했습니다 (필요한 경우)
- [ ] 접근성을 고려했습니다 (aria-label 등)
- [ ] 반응형 디자인을 확인했습니다

## 🎨 디자인 가이드라인

### CSS
- **BEM** 네이밍만 사용
- 유틸리티 클래스 남발 금지
- 전역 토큰 사용 (`globals.css`)

### 접근성
- 시맨틱 HTML 사용
- ARIA 레이블 추가
- 키보드 내비게이션 지원
- 포커스 가시성 유지

### 성능
- `useMemo`, `useCallback` 활용
- 불필요한 리렌더링 방지
- 이미지 최적화

## 🐛 버그 리포트

버그를 발견하셨나요? [이슈를 생성](https://github.com/jamjam222/ui-matrix/issues/new?template=bug_report.md)해주세요.

## 💡 기능 제안

새로운 기능을 제안하고 싶으신가요? [기능 제안 이슈](https://github.com/jamjam222/ui-matrix/issues/new?template=feature_request.md)를 생성해주세요.

## 📧 질문

질문이 있으시면 [Discussions](https://github.com/jamjam222/ui-matrix/discussions)에서 물어보세요.

## 📝 라이선스

이 프로젝트에 기여함으로써, 귀하의 기여가 MIT 라이선스 하에 있음에 동의합니다.

---

감사합니다! 🎉
