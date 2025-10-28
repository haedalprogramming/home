/**
 * =====================================================
 * 해달프로그래밍 포트폴리오 데이터베이스
 * =====================================================
 * 
 * 해달프로그래밍이 수행한 프로젝트들의 상세 정보를 담고 있는 
 * JavaScript 객체 데이터베이스입니다.
 * 
 * 구조:
 * - events: 행사 기획 및 운영 프로젝트
 * - education: 교육 및 트레이닝 프로젝트  
 * - projects: SI/솔루션 개발 프로젝트
 * 
 * 각 프로젝트는 다음 정보를 포함:
 * - 기본 정보 (제목, 날짜, 고객사, 기간 등)
 * - 프로젝트 개요 및 목표
 * - 사용 기술 스택
 * - 주요 성과 및 결과
 * - 고객 증언 (해당 시)
 * 
 * @author 해달프로그래밍
 * @version 1.0.0
 * @since 2025-10-28
 */

const references = {
  
  // ===============================================
  // 행사 기획 및 운영 프로젝트
  // ===============================================
  events: [
    {
      // 전국 대학생 해커톤 - 2025년 주요 성과 프로젝트
      id: 'hackathon-2025',
      title: '전국 대학생 해커톤',
      category: '행사',
      date: '2025년 3월',
      client: '한국소프트웨어진흥협회',
      duration: '3일',
      participants: '200명',
      thumbnail: '🗓️',
      summary: '전국 규모의 대학생 대상 해커톤을 주최하여 IT 인재 발굴 및 네트워킹 기회를 제공했습니다.',
      overview: '전국 50개 대학에서 선발된 200명의 대학생들이 참가한 대규모 해커톤 행사입니다. AI, IoT, 블록체인 등 최신 기술을 활용한 혁신적인 프로젝트들이 진행되었습니다.',
      objectives: [
        '대학생 IT 인재 발굴 및 육성',
        '산학 협력 네트워킹 기회 제공',
        '혁신적인 기술 아이디어 발굴',
        '참가자 간 기술 교류 촉진'
      ],
      process: [
        '행사 기획 및 스폰서 유치',
        '참가자 모집 및 선발 (전국 50개 대학)',
        '멘토링 프로그램 구성',
        '3일간 집중 개발 진행',
        '심사 및 시상식 진행'
      ],
      results: [
        '총 45개 팀 프로젝트 완성',
        '상위 10개 팀 기업 인턴십 연계',
        '참가자 만족도 95% 달성',
        '후속 창업 팀 3개 배출'
      ],
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker'],
      images: [
        { caption: '해커톤 개막식', url: '#' },
        { caption: '멘토링 세션', url: '#' },
        { caption: '팀별 개발 현장', url: '#' },
        { caption: '시상식', url: '#' }
      ],
      articles: [
        { title: '전국 대학생 해커톤 성료... 혁신 아이디어 200개 팀 참가', url: 'https://example.com/hackathon-news1', source: '테크뉴스' },
        { title: '해달프로그래밍 주최 해커톤, 창업 연계 프로그램 주목', url: 'https://example.com/hackathon-news2', source: '스타트업데일리' }
      ]
    },
    {
      // 개발자 컨퍼런스 - 커뮤니티 활성화 프로젝트
      id: 'devcon-2025',
      title: '개발자 컨퍼런스 2025',
      category: '행사',
      date: '2025년 7월',
      client: '자체 주최',
      duration: '2일',
      participants: '500명',
      thumbnail: '🗓️',
      summary: '최신 기술 트렌드를 공유하고 개발자 커뮤니티 활성화를 위한 대규모 컨퍼런스를 기획 및 운영했습니다.',
      overview: '국내외 유명 연사들이 참여한 개발자 컨퍼런스로, AI, 클라우드, DevOps 등 다양한 주제의 세션이 진행되었습니다.',
      objectives: [
        '최신 기술 트렌드 공유',
        '개발자 커뮤니티 활성화',
        '국내외 기술 교류 촉진',
        '주니어 개발자 성장 지원'
      ],
      process: [
        '컨퍼런스 주제 선정 및 연사 섭외',
        '온/오프라인 하이브리드 행사 기획',
        '참가자 등록 시스템 구축',
        '2일간 40개 세션 진행',
        '네트워킹 파티 및 부대행사 운영'
      ],
      results: [
        '총 500명 참가 (온라인 2000명)',
        '40개 기술 세션 성공적 진행',
        '참가자 만족도 92%',
        '유튜브 조회수 10만회 달성'
      ],
      technologies: ['Next.js', 'Vercel', 'Streaming', 'WebRTC', 'GraphQL'],
      images: [
        { caption: '메인 키노트', url: '#' },
        { caption: '기술 세션', url: '#' },
        { caption: '네트워킹 행사', url: '#' },
        { caption: '전시 부스', url: '#' }
      ]
    }
  ],
  
  // ===============================================
  // 교육 및 트레이닝 프로젝트
  // ===============================================
  education: [
    {
      // 기업 맞춤형 AI 교육 - S전자 성공 사례
      id: 's-electronics-ai',
      title: 'S전자 AI 기술 교육',
      category: '교육',
      date: '2025년 2월',
      client: 'S전자',
      duration: '2주 (80시간)',
      participants: '30명',
      thumbnail: '📚',
      summary: 'S전자 임직원을 대상으로 2주간 AI 기술 심화 워크샵을 진행하여 실무 역량을 강화했습니다.',
      overview: 'S전자 연구개발 부서 임직원들을 대상으로 진행한 AI 기술 심화 교육 프로그램입니다. 이론과 실습을 병행하여 실무에 즉시 적용 가능한 역량을 배양했습니다.',
      objectives: [
        'AI/ML 기초 이론 습득',
        '딥러닝 프레임워크 활용 능력 향상',
        '실무 프로젝트 적용 능력 배양',
        '팀 단위 AI 프로젝트 수행'
      ],
      curriculum: [
        '1주차: Python 기초 및 데이터 분석',
        '1주차: 머신러닝 기초 이론 및 실습',
        '2주차: 딥러닝 이론 및 TensorFlow/PyTorch',
        '2주차: 컴퓨터 비전 및 자연어 처리',
        '2주차: 팀 프로젝트 및 발표'
      ],
      results: [
        '참가자 전원 수료',
        '5개 AI 프로젝트 프로토타입 개발',
        '교육 만족도 98%',
        '후속 심화 교육 계약 체결'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter', 'scikit-learn', 'OpenCV'],
      testimonials: [
        {
          name: '김OO 책임연구원',
          content: '실무에 바로 적용할 수 있는 실용적인 교육이었습니다.'
        },
        {
          name: '이OO 선임연구원',
          content: '체계적인 커리큘럼과 우수한 강사진 덕분에 많이 배웠습니다.'
        }
      ]
    },
    {
      // 차세대 개발자 육성 - 마이스터고 교육
      id: 'meister-fullstack',
      title: '소프트웨어 마이스터고 기술 교육',
      category: '교육',
      date: '2025년 4월',
      client: '대덕소프트웨어마이스터고',
      duration: '40시간',
      participants: '25명',
      thumbnail: '📚',
      summary: '40시간 과정의 웹 풀스택 개발 교육을 통해 예비 개발자들의 기술 스택 향상에 기여했습니다.',
      overview: '소프트웨어 마이스터고 3학년 학생들을 대상으로 진행한 웹 풀스택 개발 집중 교육 프로그램입니다.',
      objectives: [
        '웹 개발 전반적인 이해',
        '프론트엔드/백엔드 통합 개발 능력',
        '협업 도구 활용 능력 향상',
        '포트폴리오 프로젝트 완성'
      ],
      curriculum: [
        'HTML/CSS/JavaScript 기초',
        'React.js를 활용한 SPA 개발',
        'Node.js와 Express.js 백엔드 개발',
        'MongoDB 데이터베이스 활용',
        '개인 프로젝트 개발 및 배포'
      ],
      results: [
        '참가자 100% 프로젝트 완성',
        'GitHub 포트폴리오 구축',
        '우수 학생 3명 인턴십 연계',
        '학교 측 높은 만족도'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
      testimonials: [
        {
          name: '박OO 학생',
          content: '실제 현업에서 사용하는 기술을 배울 수 있어 좋았습니다.'
        }
      ]
    },
    {
      // 일반인 대상 AI 리터러시 교육
      id: 'ai-liberal-arts',
      title: 'AI 교양 교육 프로그램',
      category: '교육',
      date: '2025년 6월',
      client: '다수 기관',
      duration: '8시간',
      participants: '200명+',
      thumbnail: '📚',
      summary: '비전공자를 위한 AI 기초 및 활용법에 대한 8시간 교양 교육을 다수 기관에서 진행했습니다.',
      overview: '일반인과 비전공자들이 AI를 이해하고 활용할 수 있도록 설계된 교양 교육 프로그램입니다.',
      objectives: [
        'AI 기본 개념 이해',
        '일상생활에서의 AI 활용법 습득',
        'AI 윤리와 사회적 영향 이해',
        '간단한 AI 도구 사용법 학습'
      ],
      curriculum: [
        'AI의 역사와 발전 과정',
        '머신러닝과 딥러닝의 이해',
        'ChatGPT 등 AI 도구 활용법',
        'AI 윤리와 미래 전망'
      ],
      results: [
        '누적 교육 인원 200명 이상',
        '평균 만족도 94%',
        '5개 기관 정기 교육 계약',
        '교육 콘텐츠 표준화'
      ],
      institutions: ['A대학교', 'B도서관', 'C문화센터', 'D기업', 'E공공기관'],
      testimonials: [
        {
          name: '일반 수강생',
          content: 'AI가 어렵게만 느껴졌는데 쉽게 설명해주셔서 이해가 잘 되었습니다.'
        }
      ]
    }
  ],
  
  // ===============================================
  // SI/솔루션 개발 프로젝트
  // ===============================================
  projects: [
    {
      // 스타트업 모바일 앱 개발 - 라이크코리안
      id: 'likekorean-app',
      title: '스타트업 \'라이크코리안\' 앱 개발',
      category: 'SI/솔루션',
      date: '2024년 10월 - 2025년 3월',
      client: '라이크코리안',
      duration: '6개월',
      teamSize: '5명',
      thumbnail: '💻',
      summary: '외국인 관광객을 위한 실시간 통역 및 여행 정보 제공 앱의 기획, 개발, 운영을 총괄했습니다.',
      overview: '한국을 방문하는 외국인 관광객들을 위한 종합 여행 도우미 앱입니다. 실시간 통역, 관광지 정보, 맛집 추천 등의 기능을 제공합니다.',
      features: [
        '실시간 음성/텍스트 번역 (10개 언어 지원)',
        'AR 기반 길찾기 및 관광 정보',
        '맛집/숙소 추천 시스템',
        '문화 체험 프로그램 예약',
        '긴급 상황 대응 시스템'
      ],
      techStack: {
        frontend: ['React Native', 'TypeScript', 'Redux'],
        backend: ['Node.js', 'Express', 'PostgreSQL'],
        ai: ['Google Cloud Translation API', 'TensorFlow Lite'],
        infra: ['AWS', 'Docker', 'CI/CD']
      },
      results: [
        '출시 3개월 만에 다운로드 5만 건 달성',
        '일일 활성 사용자 1만명',
        '앱스토어 평점 4.8/5.0',
        '시리즈 A 투자 유치 성공'
      ],
      challenges: [
        '다국어 지원을 위한 효율적인 아키텍처 설계',
        '오프라인 상황에서도 작동하는 핵심 기능 구현',
        '배터리 소모 최소화를 위한 최적화'
      ]
    },
    {
      // 대규모 금융 SI 프로젝트
      id: 'fintech-si',
      title: '핀테크 기업 SI 시스템 구축',
      category: 'SI/솔루션',
      date: '2025년 1월 - 2025년 5월',
      client: 'F핀테크',
      duration: '5개월',
      teamSize: '8명',
      thumbnail: '💻',
      summary: '보안성과 확장성을 고려한 차세대 금융 거래 시스템을 성공적으로 구축하였습니다.',
      overview: '기존 레거시 시스템을 마이크로서비스 아키텍처 기반의 차세대 시스템으로 전환하는 대규모 SI 프로젝트입니다.',
      features: [
        '실시간 거래 처리 시스템',
        '다단계 보안 인증 체계',
        '빅데이터 기반 이상거래 탐지',
        '오픈뱅킹 API 연동',
        '실시간 대시보드 및 리포팅'
      ],
      techStack: {
        frontend: ['Vue.js', 'Nuxt.js', 'TypeScript'],
        backend: ['Java Spring Boot', 'Kafka', 'Redis'],
        database: ['Oracle', 'MongoDB', 'Elasticsearch'],
        infra: ['Kubernetes', 'Jenkins', 'Prometheus']
      },
      results: [
        '시스템 응답속도 80% 개선',
        '동시 처리 가능 트랜잭션 10배 증가',
        '시스템 다운타임 99.9% 감소',
        '운영 비용 40% 절감'
      ],
      security: [
        'PCI-DSS 인증 획득',
        '금융보안원 보안성 심의 통과',
        '24/7 보안 모니터링 체계 구축'
      ]
    },
    {
      // AI 기반 물류 최적화 솔루션
      id: 'logistics-automation',
      title: '물류 자동화 솔루션 개발',
      category: 'SI/솔루션',
      date: '2025년 3월 - 2025년 7월',
      client: 'L물류',
      duration: '5개월',
      teamSize: '6명',
      thumbnail: '💻',
      summary: '머신러닝 기반의 재고 예측 및 자동 발주 시스템을 개발하여 물류 효율을 30% 개선했습니다.',
      overview: '대규모 물류센터의 재고 관리와 배송 최적화를 위한 AI 기반 자동화 솔루션입니다.',
      features: [
        'ML 기반 수요 예측 시스템',
        '자동 발주 및 재고 최적화',
        '실시간 물류 추적 시스템',
        'IoT 센서 연동 창고 관리',
        '배송 경로 최적화 알고리즘'
      ],
      techStack: {
        frontend: ['React', 'D3.js', 'Material-UI'],
        backend: ['Python', 'FastAPI', 'Celery'],
        ai: ['TensorFlow', 'scikit-learn', 'Prophet'],
        database: ['PostgreSQL', 'InfluxDB', 'Redis']
      },
      results: [
        '재고 회전율 30% 개선',
        '재고 부족/과잉 현상 70% 감소',
        '물류 처리 시간 25% 단축',
        '연간 운영비 2억원 절감'
      ],
      innovations: [
        '계절성을 고려한 수요 예측 모델',
        '실시간 최적 배송 경로 계산',
        'IoT 기반 자동 재고 실사 시스템'
      ]
    }
  ]
};

// ES6 모듈 export (detail.html에서 import하여 사용)
export default references;