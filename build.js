/**
 * 빌드 스크립트
 * =============
 * 
 * 환경변수를 config.js 파일에 주입하는 빌드 스크립트입니다.
 * 
 * 기능:
 * 1. .env 파일에서 환경변수 로드 (dotenv 사용)
 * 2. 환경변수 값을 config.js 파일에 주입
 * 3. 빌드 결과 출력 (보안을 위해 키는 일부만 표시)
 * 
 * 사용법:
 * - 로컬: npm run build
 * - Vercel: 자동 실행 (환경변수 자동 주입)
 * 
 * @author 해달프로그래밍
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// .env 파일 로드 (dotenv 패키지 사용)
// 로컬 개발 환경에서 .env 파일의 환경변수를 process.env에 로드
require('dotenv').config();

// 환경변수에서 값 읽기 (기본값 포함)
// RECAPTCHA_SITE_KEY: Google reCAPTCHA v2 사이트 키
const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_V2_SITE_KEY';
// ZAPIER_WEBHOOK_URL: 문의 폼 데이터 처리용 Zapier 웹훅 URL
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/20060834/uug3t4t/';

// config.js 파일 생성용 템플릿
// 런타임에 window.ENV 객체로 접근 가능한 형태로 생성
const configContent = `/**
 * 환경변수 설정 파일 (자동 생성됨)
 * =================================
 * 
 * ⚠️  이 파일은 build.js에 의해 자동 생성됩니다.
 * ⚠️  직접 수정하지 마세요. 빌드 시 덮어씌워집니다.
 * 
 * 생성 시각: ${new Date().toLocaleString('ko-KR')}
 */

// 환경변수에서 주입된 설정값
window.ENV = {
    RECAPTCHA_SITE_KEY: '${RECAPTCHA_SITE_KEY}',
    ZAPIER_WEBHOOK_URL: '${ZAPIER_WEBHOOK_URL}'
};`;

// config.js 파일에 내용 쓰기
fs.writeFileSync(path.join(__dirname, 'config.js'), configContent);

// 빌드 완료 메시지 출력
console.log('✅ 환경변수가 config.js에 성공적으로 주입되었습니다.');
console.log(`📍 RECAPTCHA_SITE_KEY: ${RECAPTCHA_SITE_KEY.substring(0, 10)}...`); // 보안을 위해 일부만 표시
console.log(`📍 ZAPIER_WEBHOOK_URL: ${ZAPIER_WEBHOOK_URL}`);
