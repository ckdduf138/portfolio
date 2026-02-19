// ─────────────────────────────────────────────────────────────────────────────
// 단일 데이터 소스 — 웹사이트와 이력서 HTML이 이 파일을 함께 사용합니다.
// 수정 후 `yarn build` 또는 `yarn generate:resume` 을 실행하면 이력서가 자동 갱신됩니다.
// ─────────────────────────────────────────────────────────────────────────────

// ── 개인 정보 ──────────────────────────────────────────────────────────────────
export const personalInfo = {
  name: '이창열',
  email: 'leecy0131@gmail.com',
  phone: '010-3801-2614',
  github: 'https://github.com/ckdduf138',
  githubHandle: 'ckdduf138',
  solvedac: 'https://solved.ac/profile/ckdduf138',
  portfolio: '/', // TODO: 배포 후 실제 URL로 교체 (예: https://changyeol.vercel.app)
};

// ── 프로필 요약 (이력서 Profile 섹션) ──────────────────────────────────────────
export const profileSummary =
  '교육형 게임 및 웹 서비스 프론트엔드 개발 경험 2년 이상 보유. ' +
  'TypeScript · React · Next.js 기반 프로젝트에서 사용자 경험 개선과 컴포넌트 설계에 주도적으로 기여한 개발자입니다. ' +
  '어떤 UI 배치가 더 직관적인지, 어떤 인터랙션이 더 자연스러운지를 먼저 고민하며 개발합니다.';

// ── 핵심역량 ──────────────────────────────────────────────────────────────────
export interface CoreStrength {
  icon: string;        // lucide icon name (string으로 전달, 컴포넌트에서 매핑)
  title: string;
  description: string;
}

export const coreStrengths: CoreStrength[] = [
  {
    icon: 'Layers',
    title: '풀사이클 프론트엔드',
    description:
      '기획 분석부터 컴포넌트 설계, 개발, 배포, 유지보수까지 전 과정을 수행한 경험. 단순 구현을 넘어 전체 흐름을 이해하고 설계합니다.',
  },
  {
    icon: 'Puzzle',
    title: '재사용 컴포넌트 설계',
    description:
      'Prefab · 공통 UI 라이브러리 구축으로 반복 구현을 제거, 신규 콘텐츠 초기 구성 시간을 단축한 경험. 확장성을 고려한 구조를 먼저 생각합니다.',
  },
  {
    icon: 'Boxes',
    title: '멀티 스택 적응력',
    description:
      'TypeScript · React · Next.js부터 Cocos Creator · Vue.js · Play Framework까지. 환경이 달라져도 핵심 원리를 바탕으로 빠르게 적응합니다.',
  },
  {
    icon: 'Wrench',
    title: '실무 문제 해결',
    description:
      'DB 마이그레이션, 레거시 쿼리 일괄 수정, 디지털 전환 등 현장에서 마주한 기술적 문제를 분석하고 직접 해결한 경험이 있습니다.',
  },
];

// ── 경력 ───────────────────────────────────────────────────────────────────────
export interface ExperienceProject {
  name: string;
  period?: string;
  clients?: string[];
  tech?: string[];
  tasks: string[];
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  type: string;
  siteUrl?: string;
  summary?: string;
  projects: ExperienceProject[];
}

export const experiences: ExperienceData[] = [
  {
    company: '스윙크 (Swink)',
    role: '프론트엔드 개발자',
    period: '2022.12 – 2024.02',
    type: '산업기능요원',
    siteUrl: 'http://swink.co.kr/html/',
    summary: 'Cocos Creator + TypeScript 기반 교육형 웹 게임 콘텐츠를 기획 분석부터 배포까지 개발',
    projects: [
      {
        name: '교육형 게임 콘텐츠 개발',
        period: '2022.12 – 2024.02',
        clients: ['메가스터디 초등 (엘리하이)', '웅진 키즈', 'EBS PLAY 세미', '아이스크림 미디어 (띵커벨)'],
        tech: ['Cocos Creator', 'TypeScript'],
        tasks: [
          '게임 기획안을 분석해 기능을 설계하고 Cocos Creator + TypeScript로 컴포넌트 단위 구현, 국어/수학 교육 게임 총 6종 개발 및 배포 완료 (납기 100% 준수)',
          '씬(Scene) 전환 · 타이머 · 점수 집계 등 핵심 게임 흐름을 모듈 단위로 분리 설계, Prefab 기반 피드백 UI(애니메이션 · 팝업 · 효과음)를 재사용 컴포넌트화하여 신규 씬 초기 구성 시간 약 40% 단축',
          '아이스크림 미디어(띵커벨) 게임 3종 개발 · 런칭 완료 및 클라이언트 검수 최종 승인 획득',
          '버튼 · 진행바 · 결과 팝업 등 공통 UI를 Prefab으로 추출해 다음 프로젝트에 즉시 재활용 가능한 컴포넌트 라이브러리 구축, 후속 콘텐츠 기초 개발 공수 절감',
        ],
      },
    ],
  },
  {
    company: '넥솔시스템 (Nexol System)',
    role: '프론트엔드 개발자',
    period: '2021.12 – 2022.12',
    type: '산업기능요원',
    siteUrl: 'https://www.nexol.co.kr',
    summary: 'Vue.js · Spring Boot · Play Framework 기반 사내 그룹웨어 신규 개발 및 유지보수',
    projects: [
      {
        name: '품의서 작성 페이지 개발',
        period: '2022.03 – 2022.12',
        tech: ['Spring Boot', 'jQuery', 'Vue.js'],
        tasks: [
          '종이 기반 품의서 결재 프로세스를 웹으로 전환, 품의서 작성 게시판 DB 설계부터 프론트엔드까지 전 과정 담당',
          '다단계 결재선 구성 · 첨부파일 체인 연결 · 결재 이력 타임라인 조회 등 복잡한 업무 로직을 분석해 직관적인 UI로 구조화, 기존 종이 서식의 흐름을 유지하며 디지털 전환 완성',
        ],
      },
      {
        name: '웹 유지보수 및 API 개발',
        period: '2021.12 – 2022.12',
        tech: ['Play Framework', 'jQuery', 'MSSQL'],
        tasks: [
          'MSSQL 2008 → 2019 DB 마이그레이션 수행, 구형 조인 문법(*= 등)을 표준 LEFT JOIN으로 전체 쿼리 일괄 수정하여 다운타임 없이 버전 업그레이드 완료',
          'Vue.js + Play Framework 기반 사내 그룹웨어 10개 이상 화면 유지보수 및 Spring Boot REST API 연동 백오피스 화면 신규 구축',
        ],
      },
    ],
  },
];

// ── 학력 ───────────────────────────────────────────────────────────────────────
export interface EducationData {
  school: string;
  major: string;
  period: string;
  status: string;
}

export const education: EducationData[] = [
  {
    school: '동양미래대학교',
    major: '컴퓨터공학과',
    period: '2025.03 – 2026.02',
    status: '졸업',
  },
  {
    school: '유한대학교',
    major: '컴퓨터소프트웨어공학과',
    period: '2020.03 – 2025.02',
    status: '졸업',
  },
];

// ── 기술 스택 (이력서용 카테고리) ────────────────────────────────────────────
export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { label: 'Languages',       skills: ['TypeScript', 'JavaScript'] },
  { label: 'Frameworks',      skills: ['React', 'Next.js', 'Vite'] },
  { label: 'Styling & State', skills: ['TailwindCSS', 'styled-components', 'SCSS', 'Zustand', 'React Query'] },
  { label: 'Tools & Deploy',  skills: ['Git', 'GitHub', 'Figma', 'Storybook', 'Vercel', 'Docker', 'GitHub Actions'] },
];

// ── 수상 및 활동 ───────────────────────────────────────────────────────────────
export interface AwardItem {
  title: string;
  year: string;
}

export const awards: AwardItem[] = [
  { title: 'ICPC Asia Seoul Regional 68th',                          year: '2021' },
  { title: '2025학년도 졸업작품 경진대회 4th',                          year: '2025' },
  { title: 'PS 스터디 운영 (알고리즘 대회 준비, UCPC · SCPC 참가)',    year: '2021 – 현재' },
  { title: '산업기능요원 복무 완료',                                     year: '2021.12 – 2023.02' },
];
