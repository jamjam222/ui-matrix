# 포트폴리오 파일 구조 가이드

## 📁 포트폴리오 저장소 구조

```
portfolio/
├── index.html                          # 메인 HTML 파일 (여기에 코드 추가)
├── css/
│   └── style.css                       # 스타일시트
├── js/
│   └── script.js                       # JavaScript
└── img/
    ├── ui-matrix-main.png              # ✅ 추가: 메인 스크린샷
    ├── ui-matrix-dark.png              # ✅ 추가: 다크모드 스크린샷
    ├── ui-matrix-search.png            # ✅ 추가: 검색 기능 스크린샷
    ├── ui-matrix-compare.png           # ✅ 추가: 비교 뷰 스크린샷
    ├── ui-matrix-mobile.png            # ✅ 추가: 모바일 뷰 스크린샷
    └── 프로세스페이지/
        └── UI_Matrix.pdf               # ✅ 추가: 프로세스 PDF
```

---

## 📸 이미지 저장 위치

### 1. 스크린샷 이미지
**저장 경로**: `portfolio/img/`

| 파일명 | 설명 | 권장 크기 |
|--------|------|-----------|
| `ui-matrix-main.png` | 메인 화면 (Gallery View) | 1920x1080 |
| `ui-matrix-dark.png` | 다크모드 화면 | 1920x1080 |
| `ui-matrix-search.png` | 검색 기능 화면 | 1920x1080 |
| `ui-matrix-compare.png` | 비교 뷰 화면 | 1920x1080 |
| `ui-matrix-mobile.png` | 모바일 뷰 화면 | 375x812 |

### 2. 프로세스 PDF
**저장 경로**: `portfolio/img/프로세스페이지/UI_Matrix.pdf`

---

## 🎨 이미지 최적화

### 스크린샷 최적화 방법

1. **원본 캡처** (PNG)
   - 고해상도로 캡처 (1920x1080)
   - 브라우저 주소창 포함

2. **이미지 압축**
   - 온라인 도구: https://tinypng.com
   - 또는 Photoshop "Save for Web"
   - 목표: 500KB 이하

3. **파일명 규칙**
   - 소문자 사용
   - 하이픈(-) 사용
   - 공백 없음

### 예시
```
❌ UI Matrix Main.PNG
✅ ui-matrix-main.png
```

---

## 📄 프로세스 PDF 만들기

### PowerPoint로 만들기

1. **새 프레젠테이션 생성**
   - 슬라이드 크기: 16:9 (1920x1080)
   - 테마: 깔끔한 화이트 또는 다크

2. **내용 추가**
   - `docs/PORTFOLIO_PROCESS.md` 내용 참고
   - 12페이지 구성
   - 스크린샷 삽입

3. **PDF로 저장**
   - 파일 → 다른 이름으로 저장 → PDF
   - 파일명: `UI_Matrix.pdf`
   - 저장 위치: `portfolio/img/프로세스페이지/`

### Figma로 만들기 (추천)

1. **새 파일 생성**
   - Frame 크기: 1920x1080

2. **디자인**
   - 깔끔한 레이아웃
   - 일관된 색상 팔레트
   - 가독성 좋은 폰트

3. **Export**
   - Export as PDF
   - 파일명: `UI_Matrix.pdf`

---

## 🔧 포트폴리오 수정 단계

### Step 1: 포트폴리오 저장소 클론

```bash
# 포트폴리오 저장소 클론
git clone https://github.com/jamjam222/portfolio.git
cd portfolio
```

### Step 2: 이미지 파일 추가

```bash
# img 폴더에 스크린샷 복사
# Windows 탐색기에서 직접 복사하거나:
copy C:\Users\DATCO1\Downloads\ui-matrix-*.png img\

# 프로세스 PDF 복사
copy C:\Users\DATCO1\Downloads\UI_Matrix.pdf img\프로세스페이지\
```

### Step 3: index.html 수정

1. `index.html` 파일 열기
2. **Web 섹션** 찾기 (Ctrl + F: "## Web")
3. 기존 프로젝트들 **위에** 새 코드 추가
4. `docs/PORTFOLIO_HTML_CODE.html` 내용 복사

### Step 4: 커밋 및 푸시

```bash
# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋
git commit -m "feat: UI Matrix 프로젝트 추가

- 메인 스크린샷 5개 추가
- 프로세스 PDF 추가
- index.html에 프로젝트 정보 추가"

# GitHub에 푸시
git push origin main
```

### Step 5: GitHub Pages 확인

- 1-2분 후 https://jamjam222.github.io/portfolio/ 접속
- UI Matrix 프로젝트가 맨 위에 표시되는지 확인

---

## ✅ 체크리스트

### 이미지 준비
- [ ] ui-matrix-main.png (메인 화면)
- [ ] ui-matrix-dark.png (다크모드)
- [ ] ui-matrix-search.png (검색 기능)
- [ ] ui-matrix-compare.png (비교 뷰)
- [ ] ui-matrix-mobile.png (모바일 뷰)

### 프로세스 PDF
- [ ] PowerPoint 또는 Figma로 작성
- [ ] 12페이지 구성
- [ ] 스크린샷 삽입
- [ ] PDF로 저장 (UI_Matrix.pdf)

### 포트폴리오 수정
- [ ] 포트폴리오 저장소 클론
- [ ] 이미지 파일 추가 (img/)
- [ ] 프로세스 PDF 추가 (img/프로세스페이지/)
- [ ] index.html 수정 (Web 섹션)
- [ ] Git 커밋 및 푸시
- [ ] GitHub Pages 배포 확인

### 최종 확인
- [ ] 스크린샷이 정상적으로 표시됨
- [ ] 호버 효과 작동 (마우스 올릴 때)
- [ ] PROCESS 버튼 클릭 시 PDF 열림
- [ ] GITHUB 버튼 클릭 시 저장소 이동
- [ ] LIVE DEMO 버튼 클릭 시 사이트 이동
- [ ] 모바일에서도 정상 작동

---

## 🎨 추가 커스터마이징 (선택사항)

### 호버 효과 강화

```css
/* style.css에 추가 */
.web-item:hover .web-img img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.tech-badges img {
  display: inline-block;
  margin: 2px;
  border-radius: 3px;
}
```

### 프로젝트 하이라이트 배지

```html
<!-- 프로젝트 제목 옆에 추가 -->
<span class="badge-new">NEW</span>
<span class="badge-featured">FEATURED</span>
```

```css
.badge-new {
  background: #ff4444;
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 10px;
}

.badge-featured {
  background: #4CAF50;
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 10px;
}
```

---

## 📞 문제 해결

### 이미지가 표시되지 않을 때
1. 파일 경로 확인: `img/ui-matrix-main.png`
2. 파일명 대소문자 확인
3. 브라우저 캐시 삭제 (Ctrl + Shift + R)

### PDF가 열리지 않을 때
1. 파일 경로 확인: `img/프로세스페이지/UI_Matrix.pdf`
2. PDF 파일 크기 확인 (10MB 이하 권장)
3. GitHub Pages에 파일이 업로드되었는지 확인

### 레이아웃이 깨질 때
1. 기존 프로젝트 HTML 구조와 동일한지 확인
2. CSS 클래스명 확인
3. 브라우저 개발자 도구로 디버깅

---

완료!
