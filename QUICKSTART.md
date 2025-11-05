# 🚀 GLAM SEOUL 웹사이트 빠른 시작 가이드

## 📦 다운로드한 파일

축하합니다! Glam Seoul 웹사이트의 모든 파일이 준비되었습니다.

### 포함된 파일:
✅ HTML 파일 (index.html)
✅ CSS 스타일시트 2개
✅ JavaScript 파일
✅ Placeholder 이미지 14개
✅ README 문서

## 🎯 3단계로 시작하기

### 1️⃣ 로컬에서 테스트하기

**방법 A: 간단히 열기**
- `index.html` 파일을 더블클릭
- 웹 브라우저에서 바로 열립니다

**방법 B: 로컬 서버 실행 (권장)**
```bash
# glamseoul 폴더에서 실행
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

### 2️⃣ 콘텐츠 수정하기

**이미지 교체:**
1. `images/` 폴더의 파일들을 실제 사진으로 교체
2. 파일명을 동일하게 유지하거나 HTML에서 경로 수정

**텍스트 수정:**
1. `index.html` 파일을 텍스트 에디터로 열기
2. 원하는 텍스트를 찾아서 수정
3. 저장 후 브라우저에서 새로고침

**색상 변경:**
1. `css/style.css` 파일 열기
2. 맨 위 `:root` 섹션에서 색상 코드 변경
3. 저장 후 새로고침

### 3️⃣ 온라인 배포하기

**GitHub Pages (무료, 추천):**
1. GitHub 계정 생성
2. 새 repository 만들기
3. 모든 파일 업로드
4. Settings > Pages에서 활성화
5. `https://username.github.io/repo-name` 으로 접속

**Netlify (무료, 가장 쉬움):**
1. netlify.com 가입
2. "New site from Git" 클릭
3. glamseoul 폴더 드래그 앤 드롭
4. 자동으로 URL 생성됨

**일반 웹 호스팅:**
1. 호스팅 서비스 가입 (카페24, 가비아 등)
2. FTP 클라이언트로 연결
3. 모든 파일 업로드
4. 도메인 연결

## ✏️ 필수 수정 사항

배포 전에 꼭 수정하세요:

### 🔴 즉시 수정:
```html
<!-- Contact 섹션에서 -->
<a href="mailto:contact@glamseoul.com">   ← 실제 이메일로 변경
<p>Seoul, Republic of Korea</p>            ← 실제 주소로 변경
<a href="https://instagram.com/glamseoul_official">   ← 실제 SNS 계정
```

### 🟡 스토어 링크:
```html
<a href="#" class="store-btn">             ← # 을 실제 알리바바 링크로
<a href="#" class="store-btn">             ← # 을 실제 아마존 링크로
```

## 🖼️ 이미지 준비 가이드

### 권장 이미지 크기:

| 위치 | 크기 | 형식 |
|------|------|------|
| 히어로 배경 | 1920 x 1080 | JPG |
| 로고 | 500 x 500 | PNG |
| 제품 카테고리 | 600 x 600 | JPG |
| 비즈니스 섹션 | 800 x 600 | JPG |

### 이미지 최적화:
- 온라인 도구: tinypng.com, squoosh.app
- 품질 80-85% JPG로 저장
- 웹용으로 최적화하여 파일 크기 줄이기

## 🎨 브랜드 색상 커스터마이징

`css/style.css` 파일의 6-13번째 줄:

```css
:root {
    --primary-color: #ff69b4;      /* 핑크 → 원하는 색으로 */
    --primary-light: #ffb3d9;      /* 밝은 핑크 */
    --secondary-color: #87ceeb;    /* 하늘색 */
}
```

💡 색상 코드 찾기: colorhunt.co, coolors.co

## 📱 모바일 확인

브라우저 개발자 도구로 모바일 뷰 테스트:
- Chrome: F12 → 모바일 아이콘 클릭
- 다양한 기기 크기로 확인

## 🔍 SEO 최적화 (검색 노출)

`index.html` 6-7번째 줄 수정:

```html
<meta name="description" content="여기에 회사 설명 입력">
<meta name="keywords" content="K-Beauty, 화장품, 수출, 등등">
```

Google Search Console에 사이트 등록하기

## 💡 추가 기능 아이디어

나중에 추가하면 좋은 기능:
- [ ] 실제 제품 갤러리
- [ ] Contact 폼 (Google Forms 연동)
- [ ] 다국어 지원 (영어/한국어)
- [ ] 블로그 섹션
- [ ] 고객 후기
- [ ] 영상 소개
- [ ] FAQ 섹션

## 🆘 문제 해결

**이미지가 안 보여요**
- 파일 경로 확인 (`images/` 폴더에 있나요?)
- 파일명 대소문자 확인
- 브라우저 캐시 삭제 후 새로고침

**모바일에서 레이아웃이 깨져요**
- `responsive.css` 파일이 있나요?
- HTML에서 CSS 링크 확인

**스크롤 애니메이션이 작동 안 해요**
- `main.js` 파일이 있나요?
- 브라우저 콘솔(F12)에서 에러 확인

## 📞 전문가 도움이 필요한 경우

이런 작업은 웹 개발자 도움이 필요합니다:
- 실제 결제 시스템 연동
- 회원가입/로그인 기능
- 데이터베이스 연동
- 관리자 페이지
- 고급 SEO 설정

## ✨ 성공적인 런칭을 응원합니다!

궁금한 점이 있다면 웹 개발 커뮤니티에서 질문하세요:
- Stack Overflow (영어)
- OKKY (한국)
- 생활코딩 (한국)

---

**제작일**: 2025
**버전**: 1.0
**준비 완료**: ✅ 바로 사용 가능합니다!
