# 🏢 해달프로그래밍 공식 홈페이지

> **기술로 가치를, 교육으로 미래를 만듭니다**

해달프로그래밍의 공식 홈페이지입니다. 회사 소개, 포트폴리오, 서비스 안내, 문의 기능을 제공하는 현대적인 웹사이트입니다.

## 📋 목차

- [✨ 주요 기능](#-주요-기능)
- [🛠 기술 스택](#-기술-스택)  
- [📁 프로젝트 구조](#-프로젝트-구조)
- [🚀 설치 및 실행](#-설치-및-실행)
- [⚙️ 환경변수 설정](#️-환경변수-설정)
- [📱 반응형 디자인](#-반응형-디자인)
- [🔒 보안 기능](#-보안-기능)
- [📊 데이터 시각화](#-데이터-시각화)
- [🔧 빌드 및 배포](#-빌드-및-배포)
- [📝 개발 가이드](#-개발-가이드)

## ✨ 주요 기능

### 🎯 핵심 섹션
- **Hero Section**: 회사 소개 및 브랜딩
- **포트폴리오**: 카테고리별 필터링 가능한 프로젝트 쇼케이스
- **비즈니스**: 핵심 서비스 소개 (비즈니스 스프린트, 개발자 교육, 신규 서비스 기획)
- **문의하기**: reCAPTCHA 보안이 적용된 문의 폼

### 🔧 인터랙티브 요소
- **포트폴리오 필터링**: 행사/교육/SI솔루션별 프로젝트 분류
- **Chart.js 시각화**: 프로젝트 경험을 도넛 차트로 표시
- **부드러운 스크롤**: 내비게이션 링크 클릭 시 부드러운 스크롤
- **반응형 디자인**: 모바일/태블릿/데스크탑 최적화

### 🛡️ 보안 기능
- **reCAPTCHA v2**: 스팸 방지를 위한 로봇 검증
- **환경변수 관리**: API 키 안전한 관리
- **Zapier 연동**: 문의 폼 자동 처리

## 🛠 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: CSS Grid, Flexbox, 커스텀 속성
- **JavaScript (ES6+)**: 모던 자바스크립트
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크

### 외부 라이브러리
- **Chart.js**: 데이터 시각화 (도넛 차트)
- **Google reCAPTCHA v2**: 스팸 방지
- **Google Fonts**: Noto Sans KR 한글 폰트

### 개발 도구
- **Node.js**: 빌드 시스템
- **dotenv**: 환경변수 관리
- **live-server**: 로컬 개발 서버

### 배포 및 CI/CD
- **Vercel**: 정적 사이트 호스팅
- **Zapier**: 문의 폼 자동화
- **Git**: 버전 관리

## 📁 프로젝트 구조

```
/
├── 📄 index.html              # 메인 페이지
├── 📄 config.js               # 환경변수 설정 (빌드 시 생성)
├── 📄 package.json            # NPM 설정
├── 📄 build.js                # 빌드 스크립트
├── 📄 deploy.sh               # 배포 스크립트
├── 📄 vercel.json             # Vercel 배포 설정
├── 📄 .env                    # 환경변수 (Git 제외)
├── 📄 .env.example            # 환경변수 예시
├── 📄 .gitignore              # Git 무시 목록
├── 📄 README.md               # 프로젝트 문서
├── 📄 README_ENV.md           # 환경변수 설정 가이드
├── 📂 references/             # 포트폴리오 상세 페이지
│   ├── 📄 list.html           # 포트폴리오 목록
│   ├── 📄 detail.html         # 포트폴리오 상세
│   └── 📄 data.js             # 포트폴리오 데이터
└── 📂 node_modules/           # NPM 의존성 (Git 제외)
```

## 🚀 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/haedalprogramming/home.git
cd home
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
```bash
cp .env.example .env
# .env 파일을 편집하여 실제 API 키 입력
```

### 4. 빌드 실행
```bash
npm run build
```

### 5. 로컬 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## ⚙️ 환경변수 설정

### 필수 환경변수

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 사이트 키 | `6LeQiPkrAAAAAIVXSY9S...` |
| `ZAPIER_WEBHOOK_URL` | Zapier 웹훅 엔드포인트 | `https://hooks.zapier.com/...` |

### 설정 방법

#### 로컬 개발
1. `.env.example`을 `.env`로 복사
2. 실제 API 키 값으로 수정  
3. `npm run build` 실행

#### Vercel 배포
1. Vercel 대시보드 → Settings → Environment Variables
2. 위 환경변수들을 Production/Preview/Development에 모두 추가
3. 배포 시 자동으로 빌드 과정에서 주입

### reCAPTCHA 설정
1. [Google reCAPTCHA 콘솔](https://www.google.com/recaptcha/admin) 접속
2. 새 사이트 추가
3. reCAPTCHA v2 > "로봇이 아닙니다" 체크박스 선택
4. 도메인 추가: `localhost`, `yourdomain.com`
5. 사이트 키를 환경변수에 설정

## 📱 반응형 디자인

### 브레이크포인트
- **모바일**: `< 768px`
- **태블릿**: `768px ~ 1024px` (md)
- **데스크탑**: `> 1024px` (lg)

### 주요 반응형 요소
- **내비게이션**: 모바일에서 햄버거 메뉴
- **그리드 레이아웃**: 1열 → 2열 → 3열 자동 조정
- **폰트 크기**: 뷰포트에 따른 동적 조정
- **간격 및 패딩**: 화면 크기별 최적화

## 🔒 보안 기능

### reCAPTCHA v2 보안
- **스팸 방지**: 로봇 검증으로 자동화된 스팸 차단
- **사용자 친화적**: "로봇이 아닙니다" 체크박스 방식
- **환경변수 관리**: 사이트 키 안전한 관리

### 환경변수 보안
- **Git 제외**: `.env` 파일은 저장소에 포함되지 않음
- **빌드 시 주입**: 런타임에 동적으로 설정값 로드
- **키 마스킹**: 로그에서 API 키 일부만 표시

### CORS 및 데이터 보안
- **no-cors 모드**: Zapier 전송 시 브라우저 CORS 정책 준수
- **HTTPS 강제**: 프로덕션에서 보안 연결만 허용

## 📊 데이터 시각화

### Chart.js 도넛 차트
- **데이터 소스**: 포트폴리오 카테고리별 프로젝트 수
- **시각화 유형**: 반응형 도넛 차트
- **상호작용**: 호버 시 상세 정보 표시
- **접근성**: 키보드 내비게이션 지원

### 포트폴리오 필터링
- **실시간 필터링**: JavaScript 기반 클라이언트 사이드 필터링
- **카테고리**: 전체, 행사, 교육, SI/솔루션
- **정렬**: 날짜 기준 최신순 정렬
- **애니메이션**: 부드러운 전환 효과

## 🔧 빌드 및 배포

### 빌드 프로세스
1. **환경변수 로드**: `.env` 파일에서 설정값 읽기
2. **config.js 생성**: JavaScript 객체로 설정값 주입
3. **검증**: 필수 환경변수 확인
4. **최적화**: 프로덕션 준비

### 배포 플랫폼

#### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

#### 기타 정적 호스팅
- **Netlify**: drag & drop 배포
- **GitHub Pages**: 정적 파일 호스팅
- **AWS S3**: S3 + CloudFront

### CI/CD 파이프라인
1. **Git Push**: 코드 변경사항 푸시
2. **자동 빌드**: Vercel이 자동으로 빌드 실행
3. **환경변수 주입**: 설정된 환경변수 자동 적용
4. **배포**: 빌드 성공 시 자동 배포
5. **알림**: 슬랙/이메일 배포 상태 알림

## 📝 개발 가이드

### 코드 스타일
- **들여쓰기**: 공백 4칸
- **네이밍**: camelCase (JavaScript), kebab-case (CSS)
- **주석**: JSDoc 스타일 함수 문서화
- **일관성**: Prettier/ESLint 설정 준수

### 새 포트폴리오 추가
1. `references/data.js`에 프로젝트 데이터 추가
2. 카테고리별로 적절한 섹션에 배치
3. 이미지 및 링크 URL 업데이트
4. `detail.html`에서 새 ID 처리 확인

### 스타일 수정
- **CSS 변수**: `:root`에서 컬러 팔레트 관리
- **Tailwind**: 유틸리티 클래스 우선 사용
- **반응형**: 모바일 우선 접근법
- **성능**: CSS 최적화 및 압축

### 성능 최적화
- **이미지**: WebP 포맷 사용 권장
- **폰트**: font-display: swap 적용
- **JavaScript**: 코드 분할 및 지연 로딩
- **CDN**: 외부 라이브러리 CDN 활용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **이메일**: customer@haedal.io
- **웹사이트**: [haedalprogramming.com](https://haedalprogramming.com)
- **GitHub**: [@haedalprogramming](https://github.com/haedalprogramming)

---

<div align="center">
  <strong>해달프로그래밍</strong> | 기술로 가치를, 교육으로 미래를 만듭니다<br>
  <sub>© 2025 Haedal Programming Inc. All Rights Reserved.</sub>
</div>