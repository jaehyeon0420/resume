import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "배재현",
    role: "AI 엔지니어",
    email: "qowogus0420@gmail.com",
    github : "https://github.com/jaehyeon0420"    
  },
  about: {
    mainTitle: "3년의 백엔드 기본기 위에 최신 AI 기술로 실무적인 솔루션을 제작하는 AI 엔지니어입니다.",
    sections: [
      {
        title: "근거를 바탕으로 한 기술적 의사결정",
        content: "기술적 화려함보다 조직의 성장에 기여하는 실질적인 아키텍처를 설계합니다. 상용 SW의 오픈소스 전환 및 프로세스 자동화 등 구체적인 성과를 통해 기술의 가치를 증명해 왔습니다. 기존 백엔드 역량에 안주하지 않고 LLM과 LangGraph 등 AI 기술을 실무 생산성에 이식하는 혁신을 지속하고 있으며, 동료들과 스터디를 통해 더 단단한 기술적 근거를 쌓아가는 중입니다."
      }
    ]
  },
  experience: [
    {
      company: "(주)KH정보교육원",
      role: "NCS 기반 자바 웹 개발자 양성과정 강사",
      period: "Jun. 2024 - Jul. 2025",
      description: [
        "Java 프로그래밍부터 Spring Framework, Mybatis, Oracle DB 등 웹 개발 전반에 걸친 커리큘럼을 설계·지도",
        "React <> Spring Boot 프로젝트 기반 수업을 통해 학생들이 현업에서 바로 활용할 수 있는 역량을 갖추도록 지도",
        "학생들의 학습 동기 부여와 진로 상담을 통해 교육 효과 극대화",
        "교육 자료 및 실습 예제 지속적으로 업데이트하여 최신 기술 트렌드 반영",
        "교육 과정에서 학생들의 학습 동기 부여를 위해 다양한 교육 자료 및 실습 예제 제공",
        
      ]
    },
    {
      company: "(주)한국신용카드결제",
      role: "연구소 개발팀 ",
      period: "Sep. 2020 - Apr. 2024",
      description: [
        "ActiveX 종속적인 Wisegrid 기반 레거시 시스템을 IBSheet로 전환하여 크로스 브라우징 환경 구축 및 웹 표준 준수",
        "Jennifer APM을 활용한 주기적 SQL 성능 분석 및 인덱스 최적화를 통해 주요 슬로우 쿼리 응답 속도를 평균 30% 개선",
        "과거 데이터 기반 E2E 배송 자동화 시스템을 구축하여, 본사 검수 리소스를 월평균 15시간 이상 절감하고 오배송 및 재고 누락률 0% 달성",
        "폐쇄망·레거시 환경에서 기술 부채를 분석하고 호환 가능한 구조로 전환을 주도, 목표 지향적인 기술 개선 실현",
        "FIDO 표준 기반 생체·간편 인증 시스템으로 전환을 통해 사용자 이탈률 감소 및 전체 유저 90% 이상이 전환하여 로그인 관련 CS 건수 15% 감소",
        "WebLogic 기반 레거시 WAS를 Apache Tomcat으로 마이그레이션하여 경량 오픈소스 아키텍처를 구축하고, 연간 상용 라이선스 비용을 100% 절감",
        "MEAP(Morpheus) 기반 하이브리드 앱 개발 및 스토어 배포·운영을 전담하여, 모바일 전산 환경의 유지보수 효율성 및 서비스 연속성을 확보"
      ]
    }
  ],
  education: [
    {
      institution: "러닝스푼즈",
      degree: "내 서비스에 딱맞는 AI 에이전트 만들기 : RAG, LangGraph, LLM 파인튜닝",
      period: "Feb. 2026 - Mar. 2026",
      description: "사설 교육 수료"
    },
    {
      institution: "Microsoft AI School",
      degree: "AI 엔지니어 양성과정",
      period: "Sep. 2025 - Feb. 2026",
      description: "KDT 과정 수료"
    },
    {
      institution: "KH정보교육원",
      degree: "디지털 웹 컨버전스 자바(JAVA) 기반 웹 개발자 양성과정",
      period: "Jan. 2020 - Jul. 2020",
      description: "국민내일배움카드 훈련과정 수료"
    }
  ],
  skills: [
    {
      category: "Strong",
      items: [
        "Java / Javascript / ReactJS / Spring Boot / Mybatis / Oracle"
      ]
    },
    {
      category: "Knowledgeable",
      items: [
        "Python / FastAPI / LangChain / LangGraph / PostgreSQL / Redis / Apache Tomcat / Electron"
      ]
    },
    {
      category: "ETC",
      items: [
        "Jenkins / GitHub Actions / Docker / Azure / Figma"
      ]
    },
  ],
  projects: [
    {
      title: "AI 기반 상표권 침해 모니터링 시스템",
      company: "Microsoft AI School",
      period: "Jan. 2026 - Feb. 2026 (20 Days)",
      description: [
        "sLLM 및 임베딩 모델 파인튜닝, LangGraph 기반 RAG 시스템 아키텍처 설계",
        "MNRL을 활용한 임베딩 모델 파인튜닝으로, Positive 데이터셋만으로 상표 분류 Accuracy를 **85%에서 93%로 개선**",
        "Azure ML 16GB VRAM의 제한된 환경에서 QLoRA 기법을 적용, 하이퍼파라미터(Batch size, Learning Rate 등) 최적화를 통해 법률 도메인 특화 sLLM의 **Training Loss 1.2 수렴** 및 안정적 학습 달성",
        "LangGraph 기반의 Corrective RAG를 구현하여 검색 결과의 적절성을 자가 검증하고, 저품질 보고서 생성을 원천 차단하여 시스템 신뢰도 확보",
        "대용량 테이블 파티셔닝 및 데이터 라이프사이클 관리를 도입하여 데이터 누적 방지 및 쿼리 성능 유지",
        "DB 내 미보유 판례 발생 시 국가법령정보센터 API를 호출하는 실시간 Fallback 로직을 구현하여 답변의 근거 및 최신성 확보"
      ],
      blogLink: "https://github.com/jaehyeon0420/tip-project"
    },
    {
      title: "사내 정형/비정형 데이터 통합 Advanced RAG 시스템",
      company: "Microsoft AI School",
      period: "Dec. 2025 - Jan. 2026 (8 Days)",
      description: [
        "백엔드 리드 및 AI 시스템 아키텍처 설계, 서비스 기획",
        "ONNX-int8 양자화를 통한 모델 경량화를 수행하여, CPU 환경에서도 청크당 **추론 속도를 0.3초로 단축**",
        "KURE-v1 임베딩 모델을 도입하여 한국어 도메인 특화 문서 검색 **정확도를 30% 이상 향상**",
        "시스템 아키텍처 설계 및 기술 스택 선정을 주도하고, 모듈형 개발 방식을 도입하여 팀원 간 업무 분배 및 코드 통합 프로세스 효율화",
        "Redis 기반의 시맨틱 캐시 계층을 설계하여 반복되는 유사 질의에 대한 응답 지연 시간을 최소화하고 시스템 부하 최소화",
        "Azure Container Apps 기반의 통합 애플리케이션 배포를 통해 트래픽 기반 Auto-scaling 및 고가용성 확보"
      ],
      blogLink: "https://github.com/jaehyeon0420/deepnexus"
    },
    {
      title: "차량 파손 부위 판별 및 수리비 예측 서비스",
      company: "Microsoft AI School",
      period: "Nov. 2025 - Nov. 2025 (8 Days)",
      description: [
        "백엔드 개발 및 DevOps 리드",
        "Azure VM 환경에 Jenkins 기반의 전 자동 배포 파이프라인을 구축하여, **수동 배포 공수 0건** 유지 및 서비스 배포 안정성 확보",
        "Spring Boot(비즈니스 로직)와 FastAPI(AI 모델 추론)를 분리한 디커플링 아키텍처를 구축하여, PoC 단계의 빈번한 모델 교체 및 독립적 성능 검증 환경 확보",
        "JWT(Access/Refresh Token) 기반의 인증 로직을 설계하여, Stateless 환경에서의 보안성을 강화하고 사용자 세션 관리 효율화"
      ],
      blogLink: "https://github.com/jaehyeon0420/snapQ-spring"
    },
    {
      title: "인프라 비용 절감을 위한 서버 교체",
      company: "(주)한국신용카드결제",
      period: "May. 2023 - May. 2023",
      description: [
        "Apache Tomcat 서버 구축",
        "Linux 환경에 Apache Tomcat 인프라를 구축하여 상용 SW(WebLogic) 라이선스 **비용 100% 제거**",
        "Apache와 Tomcat 간 mod_jk 커넥터 연동 및 workers.properties 최적화를 통해 WAS 인스턴스별 트래픽 분산 처리",
        "SSL/TLS 인증서 도입을 통해 데이터 전송 구간 보안성을 확보하고 웹 표준 보안 규정 준수",
        "WAS 인스턴스 간 Session Clustering을 구현하여 특정 노드 Fault 시에도 사용자 컨텍스트가 유지되는 무중단 시스템 구축"
      ]
    },
    {
      title: "FIDO 표준 기반 간편 로그인 시스템 구축",
      company: "(주)한국신용카드결제",
      period: "Feb. 2022 - Apr. 2022",
      description: [
        "FIDO 서버 통신 및 인증 라이프사이클 백엔드 로직 개발",
        "FIDO 서버와의 통신을 통한 인증 수단(패턴, PIN, 지문, Face ID)의 등록·수정·삭제 로직 전담 개발하여 전체 유저의 90% 이상이 간편 로그인으로 전환, 로그인 관련 **CS 건수 15% 감소**에 기여",
        "멀티 모달 인증 정보와 인증 이력 관리를 위한 데이터베이스 모델링 수행",
        "간편 로그인 수단별 라이프사이클 관리 및 사용자별 인증 상태 동기화 API 설계"
      ]
    },
    {
      title: "과거 데이터 기반 E2E 배송 자동화 시스템 구축",
      company: "(주)한국신용카드결제",
      period: "Sep. 2021 - Oct. 2021",
      description: [
        "자동 발주 시스템 구축",
        "Spring Batch 기반으로 최근 3개월 대리점별 사용량 추출 및 분석 -> 사용 가능 건수 계산 -> 신청 -> 배송 요청으로 이어지는 프로세스 자동화",
        "기존 수동 프로세스 대비 본사 담당자 업무 시간 **월평균 15시간 이상 절감**",
        "데이터 기반 자동 발주를 통해 사람에 의한 오배송 및 재고 **누락율 0%**로 업무 누락 방지"
      ]
    }
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Jan. 2026"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Oct. 2025"
    }
  ],
  awards : [
    {
      name: "Microsoft AI School 우수 프로젝트상 수상",
      issuer: "AI 기반 상표권 침해 모니터링 시스템 우수 프로젝트 선정",
      date: "Feb. 2026"
    },
    {
      name: "학생 리더 장학금 수여",
      issuer: "2018년도 2학기 교내 학생회 장학금 수여",
      date: "Jan. 2019"
    },
    {
      name: "한길 우수 인재 장학금 수여",
      issuer: "교내 멘토링 프로그램 우수 멘토 선정",
      date: "Jul. 2018"
    },
    {
      name: "성적 우수 장학금",
      issuer: "2014년 1학기 성적 우수 장학금 수여",
      date: "Aug. 2014"
    },
  ],
  contacts: [
    {
      type: "Email",
      value: "qowogus0420@gmail.com",
      url: "mailto:qowogus0420@gmail.com"
    },
    {
      type: "GitHub",
      value: "jaehyeon0420",
      url: "https://github.com/jaehyeon0420"
    },
    {
      type: "LinkedIn",
      value: "JaeHyeon Bae",
      url: "https://www.linkedin.com/in/jaehyeon-bae-445a09384/"
    },
    {
      type: "Website",
      value: "https://velog.io/@qowo0420/posts",
      url: "https://velog.io/@qowo0420/posts"
    }
  ]
};
