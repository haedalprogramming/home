#!/bin/bash

# =====================================================
# 해달프로그래밍 홈페이지 배포 스크립트
# =====================================================
# 
# 이 스크립트는 환경변수를 확인하고 config.js를 생성합니다.
# 주로 CI/CD 파이프라인에서 사용됩니다.
#
# 사용법: ./deploy.sh
# 권한 설정: chmod +x deploy.sh
#
# @author 해달프로그래밍
# @version 1.0.0

echo "🚀 해달프로그래밍 홈페이지 배포 시작..."

# 필수 환경변수 확인
# ===================

echo "🔍 환경변수 확인 중..."

# reCAPTCHA 사이트 키 확인
if [ -z "$RECAPTCHA_SITE_KEY" ]; then
    echo "❌ RECAPTCHA_SITE_KEY 환경변수가 설정되지 않았습니다."
    echo "   Google reCAPTCHA 콘솔에서 사이트 키를 발급받아 설정해주세요."
    exit 1
fi

# Zapier 웹훅 URL 확인
if [ -z "$ZAPIER_WEBHOOK_URL" ]; then
    echo "❌ ZAPIER_WEBHOOK_URL 환경변수가 설정되지 않았습니다."
    echo "   Zapier에서 웹훅 URL을 생성하여 설정해주세요."
    exit 1
fi

echo "✅ 모든 환경변수가 올바르게 설정되었습니다."

# config.js 파일 생성
# ===================

echo "📝 config.js 파일 생성 중..."

# 현재 시각 기록
CURRENT_TIME=$(date '+%Y-%m-%d %H:%M:%S')

# config.js 파일 내용 생성 (Heredoc 사용)
cat > config.js << EOF
/**
 * 환경변수 설정 파일 (배포 스크립트로 생성됨)
 * ===============================================
 * 
 * ⚠️  이 파일은 deploy.sh에 의해 자동 생성됩니다.
 * ⚠️  직접 수정하지 마세요. 배포 시 덮어씌워집니다.
 * 
 * 생성 시각: ${CURRENT_TIME}
 */

// 환경변수에서 주입된 설정값 (배포 시점에 생성됨)
window.ENV = {
    RECAPTCHA_SITE_KEY: '${RECAPTCHA_SITE_KEY}',
    ZAPIER_WEBHOOK_URL: '${ZAPIER_WEBHOOK_URL}'
};
EOF

# 배포 완료 메시지
echo "✅ 환경변수가 config.js에 성공적으로 주입되었습니다."
echo "📍 RECAPTCHA_SITE_KEY: ${RECAPTCHA_SITE_KEY:0:10}..."  # 보안을 위해 처음 10자만 표시
echo "📍 ZAPIER_WEBHOOK_URL: ${ZAPIER_WEBHOOK_URL}"
echo "🎉 배포 준비가 완료되었습니다!"
