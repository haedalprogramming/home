/**
 * 환경변수 설정 파일 예시
 * ======================
 * 
 * 이 파일은 config.js의 예시 템플릿입니다.
 * 실제 환경에서는 build.js가 .env 파일을 읽어 config.js를 생성합니다.
 * 
 * 보안상 실제 config.js는 Git에 포함되지 않습니다.
 */

// 환경변수에서 주입된 설정값 (예시)
window.ENV = {
    RECAPTCHA_SITE_KEY: 'YOUR_RECAPTCHA_V2_SITE_KEY_HERE',
    ZAPIER_WEBHOOK_URL: 'YOUR_ZAPIER_WEBHOOK_URL_HERE'
};
