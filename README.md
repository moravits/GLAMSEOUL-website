# 🩵 GLAM SEOUL - K-Beauty Global Platform

한국의 프리미엄 뷰티 제품을 전 세계로 연결하는 온라인 플랫폼

## 📋 프로젝트 개요

Glam Seoul은 K-Beauty 전문 무역 및 유통 브랜드를 위한 프로페셔널 웹사이트입니다.
알리바바, 아마존 등 글로벌 온라인 플랫폼을 통한 럭셔리 한국 스킨케어 및 코스메틱 판매를 위해 제작되었습니다.

## 🎨 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에 최적화
- **현대적인 UI/UX**: 깔끔하고 전문적인 K-Beauty 브랜드 이미지
- **부드러운 애니메이션**: 스크롤 기반 페이드인 효과 및 카운터 애니메이션
- **SEO 최적화**: 검색 엔진 최적화를 위한 시맨틱 HTML
- **빠른 로딩**: 최적화된 이미지와 효율적인 코드 구조

## 📁 파일 구조

```
glamseoul/
│
├── index.html              # 메인 HTML 파일
│
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── responsive.css     # 반응형 스타일
│
├── js/
│   └── main.js           # JavaScript 기능
│
├── images/
│   ├── logo.png          # 로고
│   ├── hero-bg.jpg       # 히어로 섹션 배경
│   ├── about-bg.jpg      # About 섹션 배경
│   ├── business-1.jpg    # 비즈니스 이미지 1
│   ├── business-2.jpg    # 비즈니스 이미지 2
│   ├── business-3.jpg    # 비즈니스 이미지 3
│   ├── business-4.jpg    # 비즈니스 이미지 4
│   ├── brands-bg.jpg     # 브랜드 섹션 배경
│   ├── network-bg.jpg    # 네트워크 섹션 배경
│   └── products/
│       ├── skincare.jpg      # 스킨케어 카테고리
│       ├── makeup.jpg        # 메이크업 카테고리
│       ├── body-hair.jpg     # 바디&헤어 카테고리
│       ├── mens-care.jpg     # 남성 케어 카테고리
│       └── beauty-tools.jpg  # 뷰티 툴즈 카테고리
│
└── README.md             # 프로젝트 문서
```

## 🚀 시작하기

### 1. 파일 다운로드

모든 파일을 다운로드하여 웹 서버 디렉토리에 배치합니다.

### 2. 로컬 테스트

간단한 HTTP 서버로 테스트할 수 있습니다:

```bash
# Python 3가 설치된 경우
python3 -m http.server 8000

# Node.js가 설치된 경우
npx http-server
```

브라우저에서 `http://localhost:8000` 접속

### 3. 웹 호스팅 배포

- **GitHub Pages**: 무료 정적 웹사이트 호스팅
- **Netlify**: 간단한 드래그 앤 드롭 배포
- **Vercel**: 빠른 배포와 자동 HTTPS
- **일반 웹 호스팅**: FTP로 파일 업로드

## 🎯 섹션 설명

### 🏠 Home (Hero)
- 브랜드 메시지와 태그라인
- 눈길을 끄는 그라데이션 배경
- Call-to-action 버튼

### 🪞 About Us
- 회사 개요 및 비전
- 실적 통계 (애니메이션 카운터)
- 브랜드 가치 제안

### 💼 Business
- 4가지 핵심 사업 영역
- 각 사업의 주요 특징
- 호버 효과와 애니메이션

### 💎 Brands
- 자체 브랜드 라인
- 파트너 브랜드
- 프라이빗 라벨 서비스

### 🧴 Products
- 5가지 제품 카테고리
- 품질 인증 정보
- 카테고리별 아이콘

### 🌍 Global Network
- 주요 수출국
- 협력사 정보
- 유통 채널
- 인증 현황

### 💌 Contact
- 연락처 정보
- 이메일, 주소, SNS
- 온라인 스토어 링크

## 🎨 커스터마이징

### 색상 변경

`css/style.css` 파일의 CSS 변수를 수정:

```css
:root {
    --primary-color: #ff69b4;      /* 메인 컬러 */
    --primary-light: #ffb3d9;      /* 밝은 메인 컬러 */
    --secondary-color: #87ceeb;    /* 보조 컬러 */
    /* ... */
}
```

### 이미지 교체

`images/` 폴더의 placeholder 이미지를 실제 이미지로 교체:

- 권장 크기:
  - Hero 배경: 1920x1080px
  - Product 이미지: 600x600px
  - Business 이미지: 800x600px

### 텍스트 수정

`index.html` 파일에서 직접 텍스트를 수정할 수 있습니다.

### 링크 연결

Contact 섹션의 스토어 링크 업데이트:

```html
<a href="YOUR_ALIBABA_LINK" class="store-btn">
    <i class="fas fa-shopping-cart"></i>
    <span>Alibaba Store</span>
</a>
```

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **JavaScript (ES6+)**: Vanilla JS, Intersection Observer API
- **Font Awesome**: 아이콘
- **Google Fonts**: Noto Sans KR, Playfair Display

## 📱 반응형 브레이크포인트

- **Desktop**: 1025px 이상
- **Tablet**: 769px - 1024px
- **Mobile**: 768px 이하
- **Small Mobile**: 576px 이하

## ⚡ 성능 최적화

- 이미지 lazy loading
- CSS/JS 최소화 (프로덕션 배포 시)
- 효율적인 애니메이션 (transform, opacity 사용)
- Throttle/Debounce 적용된 스크롤 이벤트

## 🌐 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 할 일 목록

실제 비즈니스 사용을 위한 추가 작업:

- [ ] 실제 제품 이미지로 교체
- [ ] 회사 로고 업데이트
- [ ] 알리바바/아마존 스토어 링크 연결
- [ ] Google Analytics 추가
- [ ] 실제 이메일 주소 업데이트
- [ ] SNS 계정 연결
- [ ] Contact 폼 기능 추가
- [ ] 다국어 지원 (영어/한국어 전환)
- [ ] 제품 상세 페이지 추가
- [ ] FAQ 섹션 추가

## 🔐 보안 고려사항

프로덕션 배포 전:

- HTTPS 인증서 설정
- 스팸 방지를 위한 이메일 인코딩
- Contact 폼에 reCAPTCHA 추가
- CSP (Content Security Policy) 헤더 설정

## 📞 지원 및 문의

웹사이트 수정 또는 기능 추가가 필요하신 경우:

- 웹 개발자와 상담
- 호스팅 제공업체 기술 지원
- GitHub Issues (오픈소스로 공개한 경우)

## 📄 라이선스

이 템플릿은 Glam Seoul 비즈니스 용도로 제작되었습니다.

## 🎉 감사합니다!

Glam Seoul의 성공적인 글로벌 비즈니스를 응원합니다! 🇰🇷 ✨

---

**Version**: 1.0.0  
**Last Updated**: 2025  
**Developed for**: Glam Seoul K-Beauty Global Platform
