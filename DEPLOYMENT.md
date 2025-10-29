# 🚀 배포 가이드

## Vercel 배포 (추천)

### 방법 1: Vercel CLI 사용

1. **Vercel CLI 설치**
   ```bash
   npm install -g vercel
   ```

2. **로그인**
   ```bash 
   vercel login
   ```

3. **배포**
   ```bash
   vercel
   ```

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

### 방법 2: Vercel 웹사이트 사용 (더 쉬움)

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 Import**
   - "New Project" 클릭
   - GitHub 저장소 선택: `ui-matrix`
   - "Import" 클릭

3. **설정 확인**
   - Framework Preset: **Next.js** (자동 감지됨)
   - Build Command: `npm run build` (기본값)
   - Output Directory: `.next` (기본값)
   - Install Command: `npm install` (기본값)

4. **배포**
   - "Deploy" 클릭
   - 약 2-3분 후 배포 완료!

5. **자동 배포 설정**
   - GitHub에 push하면 자동으로 재배포됨
   - PR마다 미리보기 URL 생성

---

## 배포 후 확인 사항

✅ **URL 확인**: `https://ui-matrix-xxxxx.vercel.app`
✅ **다크모드 작동**: 테마 토글 버튼 클릭
✅ **검색 기능**: 컴포넌트 검색 테스트
✅ **필터링**: 라이브러리/카테고리 필터 테스트
✅ **즐겨찾기**: localStorage 저장 확인
✅ **코드 복사**: 토스트 알림 확인
✅ **반응형**: 모바일/태블릿/데스크톱 확인

---

## 환경 변수 (필요 시)

Vercel 대시보드에서 설정:
- Settings → Environment Variables

현재 프로젝트는 환경 변수가 필요 없습니다.

---

## 커스텀 도메인 연결 (선택)

1. Vercel 대시보드 → Settings → Domains
2. 원하는 도메인 입력 (예: `ui-matrix.com`)
3. DNS 설정 안내에 따라 도메인 연결

---

## 성능 최적화 (자동 적용됨)

Vercel이 자동으로 제공하는 기능:
- ✅ **CDN**: 전 세계 엣지 서버에서 제공
- ✅ **이미지 최적화**: Next.js Image 컴포넌트 자동 최적화
- ✅ **코드 스플리팅**: 페이지별 자동 분할
- ✅ **압축**: Gzip/Brotli 자동 압축
- ✅ **캐싱**: 정적 자산 자동 캐싱
- ✅ **HTTPS**: 무료 SSL 인증서

---

## 문제 해결

### 빌드 실패 시
```bash
# 로컬에서 빌드 테스트
npm run build

# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### 배포 후 404 에러
- `next.config.ts` 확인
- `vercel.json` 설정 확인

### 환경 변수 문제
- Vercel 대시보드에서 환경 변수 확인
- 재배포 필요 (Deployments → Redeploy)

---

## 대안 배포 플랫폼

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Cloudflare Pages
- GitHub 연동 후 자동 배포
- 무료 무제한 대역폭

### AWS Amplify
- AWS 계정 필요
- GitHub 연동 후 자동 배포

---

## 비용

**Vercel 무료 플랜:**
- ✅ 무제한 배포
- ✅ 100GB 대역폭/월
- ✅ 자동 HTTPS
- ✅ 커스텀 도메인
- ✅ 프리뷰 배포

개인 프로젝트는 **완전 무료**입니다!
