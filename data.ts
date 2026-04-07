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
        title: "6명의 다양한 도메인 지식을 가진 동료들과 매주 AI 동향 세미나를 운영하여 변화하는 트렌드를 체화하고 있으며, 기존 백엔드 역량에 안주하지 않고 AI 엔지니어로서의 실무 투입 역량을 기르기 위해 지속적으로 학습하고 있습니다."
      }
    ]
  },
  experience: [
    {
      company: "(주)KH정보교육원 [2024.06 - 2025.07]",
      role: "NCS 기반 자바 웹 개발자 양성과정 강사",
      description: [
        "HTML5 / CSS3 / Javascript를 활용한 FrontEnd 강의",
        "Oracle SQL, 데이터베이스 모델링 및 정규화 강의",
        "Java / Spring Framework (IoC, DI, AOP, Interceptor) 강의",
        "JWT를 활용한 Stateless한 인증 환경 구축 강의",
        "Reactjs <> Spring Boot <> Oracle 연동 및 실무 프로젝트 강의" 
      ]
    },
    {
      company: "(주)한국신용카드결제 [2020.09 - 2024.04]",
      role: "연구소 개발팀 ",
      description: [
        "JSP 약 300개 페이지 ActiveX 종속성 제거 및 크로스 브라우징 환경 구축 : Wisegrid -> IBSheet",
        "Oracle SQL 분석 및 고도화를 통한 시스템 성능 개선",
        "반복 업무 Spring Batch 기반 배치 프로세스로 자동화하여 운영 효율 향상",
        "간편 인증(지문, FaceID, PIN, 패턴) 시스템 도입으로 전체 유저 90% 이상 전환",
        "오픈소스 기반 서버 구축하여 유지보수 비용 절감 (WebLogic -> Apache Tomcat)",
        "사용자 요구사항 기반 신규 비즈니스 로직 설계 및 구현"
      ]
    }
  ],
  education: [
    {
      institution: "러닝스푼즈 [AI 에이전트 만들기]",
      degrees: ["LLM 핵심 아키텍처(Transformer, BERT, GPT) 및 동작 원리 학습",
                "할루시네이션 억제 및 외부 지식 활용을 위한 RAG 시스템 구축",
                "멀티턴/멀티 쿼리 에이전트 개발 및 Function Calling 기반 도구 연동 실습",
                "도메인 데이터 최적화를 위한 임베딩/LLM 파인튜닝 및 멀티모달 RAG 구현"
      ],
      period: "2026.02 - 2026.03"
    },
    {
      institution: "Microsoft AI School [AI 엔지니어 양성 과정]",
      degrees: ["Azure OpenAI SDK 기반 RAG 모델 설계 및 API 연동을 통한 웹 애플리케이션 개발",
                "파이썬 데이터 분석 라이브러리 활용 및 Azure Machine Learning 기반의 머신러닝 모델 구축 및 배포",
                "Microsoft Azure 기반 클라우드 컴퓨팅 개념 이해 및 Docker를 활용한 가상화 환경 구성",
                "인공신경망 및 CNN 구조와 Azure Cognitive Services를 활용한 시각, 음성, 언어 지능형 서비스 구현"
      ],
      period: "2025.09 - 2026.02"
    },
    {
      institution: "KH정보교육원 [JAVA 웹 개발자 양성 과정]",
      degrees: ["NCS 기반 Java 웹 개발자 양성과정 수강"],
      period: "2020.01 - 2020.07"
    }
  ],
  skills: [
    {
      category: "Language",
      items: [
        "Python / Java / Javascript"
      ]
    },
    {
      category: "Backend",
      items: [
        "FastAPI / LangChain / LangGraph / Spring Boot / Mybatis"
      ]
    },
    {
      category: "Frontend",
      items: [
        "ReactJS / HTML5 / CSS3 / Electron"
      ]
    },
    {
      category: "Database",
      items: [
        "Oracle / PostgreSQL / Redis"
      ]
    },
    {
      category: "Infra & ETC",
      items: [
        "Jenkins / GitHub Actions / Docker / Azure / Figma"
      ]
    },
  ],
  projects: [
    {
      title: "경제 분석 보고서 멀티모달 RAG [2026.03 - 2026.03]",
      company: "개인 Project",
      description: [
        "데이터 전처리 파이프라인과 멀티모달 RAG 구축",
        "슬라이드별 차트 및 그래프 세부 이미지 추출 후, 300px 초과 이미지만 전처리 대상에 포함",
        "슬라이드 전체 이미지, 세부 이미지, OCR 텍스트 -> 마크다운과 평문으로 변환 및 ChormaDB 적재",
        "청크별 질문 2개를 LLM으로 자동 생성하여 평가 데이터 셋 구축",
        "길이 기반 청크 데이터 대비 Accuracy·Precision·Recall·MRR·NDCG·MAP @k(k=1,3,5,10) 전 지표 평균 18% 이상 향상"
      ],
      blogLink: "https://github.com/jaehyeon0420/Economy-Analysis-RAG"
    },
    {
      title: "AI 기반 상표권 침해 모니터링 시스템 [2026.01 - 2026.02]",
      company: "Microsoft AI School",
      description: [
        "sLLM, 임베딩 모델 파인튜닝, LangGraph 기반 RAG 시스템 아키텍처 설계",
        "리더보드 및 로컬 테스트 기반 파인튜닝 후보 모델 선정",
        "임베딩 모델 상표 분류 Accuracy@5를 85%에서 93%로 개선 (jina-embedding-v3)",
        "변리사 보고서 생성 sLLM RAGAS Faithfulness 점수 0.87 달성 (Qwen-2.5-7B)",
        "판례 검색 결과, sLLM 보고서 검증을 위해 LangGraph 기반 Corrective RAG 구축",
        "DB 미보유 판례 발생 시 국가법령정보센터 API Fallback 로직 구현",
        "일 2만 건 상표 테이블 월 단위 파티셔닝 및 3개월 경과 데이터 자동 삭제 스케줄링"
      ],
      blogLink: "https://github.com/jaehyeon0420/tip-project"
    },
    {
      title: "사내 정형/비정형 데이터 통합 Advanced RAG 시스템 [2025.12 - 2026.01]",
      company: "Microsoft AI School",
      description: [
        "백엔드 리드 및 AI 시스템 아키텍처 설계, 서비스 기획",
        "reranker 모델 양자화를 통해 추론 속도 단축 (7초->0.3초)",
        "DB Schema 정보로 GPT-4o 기반 Text-to-SQL 로직 구현",
        "90% 이상 유사 질의에 대해 0.1초 미만으로 응답 (Redis 시맨틱 캐싱)",
        "아키텍처 설계 : 정형/비정형 경로 설정 Routing, 시맨틱 캐싱, reranker 모델 도입"
      ],
      blogLink: "https://github.com/jaehyeon0420/deepnexus"
    },
    {
      title: "차량 파손 부위 판별 및 수리비 예측 서비스 [2025.11 - 2025.11]",
      company: "Microsoft AI School",
      description: [
        "백엔드 개발 및 DevOps 리드",
        "Jenkins를 이용하여 CI/CD 환경 구축 (on AzureVM)",
        "디커플링 아키텍처 구축 (Spring Boot, Fast API)",
        "서버리스 컨테이너 환경에 애플리케이션 배포 (Azure Container Apps)",
        "JWT 기반의 인증 로직을 설계하여, Stateless 환경에서의 보안성 강화"
      ],
      blogLink: "https://github.com/jaehyeon0420/snapQ-spring"
    },
    {
      title: "인프라 비용 절감을 위한 서버 교체 [2023.05 - 2023.05]",
      company: "(주)한국신용카드결제",
      description: [
        "Apache Tomcat 서버 구축",
        "WAS 라이선스 비용 제거(WebLogic -> Apache Tomcat)",
        "workers.properties 설정으로 WAS 인스턴스별 트래픽 분산 처리",
        "인스턴스 간 Session Clustering을 구축"
      ]
    },
    {
      title: "FIDO 표준 기반 간편 로그인 시스템 구축 [2022.02 - 2022.04]",
      company: "(주)한국신용카드결제",
      description: [
        "FIDO 서버 통신 및 인증 라이프사이클 백엔드 로직 개발",
        "인증 수단 등록, 수정, 삭제 백엔드 로직 전담 개발 (패턴, PIN, 지문, Face ID)",
        "인증 정보 및 인증 이력 관리를 위한 데이터베이스 모델링",
        "간편 로그인 수단별 라이프사이클 관리"
      ]
    },
    {
      title: "과거 데이터 기반 E2E 배송 자동화 시스템 구축 [2021.09 - 2021.10]",
      company: "(주)한국신용카드결제",
      description: [
        "자동 발주 시스템 구축",
        "Spring Batch 기반 전표 사용량 추출부터 배송 요청으로 이어지는 프로세스 자동화",
        "기존 수동 프로세스 대비 본사 담당자 업무 시간 월평균 15시간 이상 절감",
        "데이터 기반 자동 발주를 통해 사람에 의한 오배송 및 재고 누락율 0%로 업무 누락 방지"
      ]
    }
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2026.01"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2025.10"
    }
  ],
  awards : [
    {
      name: "Microsoft AI School 우수 프로젝트상 수상",
      issuer: "AI 기반 상표권 침해 모니터링 시스템 우수 프로젝트 선정",
      date: "2026.02"
    },
    {
      name: "학생 리더 장학금 수여",
      issuer: "2018년도 2학기 교내 학생회 장학금 수여",
      date: "2019.01"
    },
    {
      name: "한길 우수 인재 장학금 수여",
      issuer: "교내 멘토링 프로그램 우수 멘토 선정",
      date: "2018.07"
    },
    {
      name: "성적 우수 장학금",
      issuer: "2014년 1학기 성적 우수 장학금 수여",
      date: "2014.08"
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
    }
  ]
};
