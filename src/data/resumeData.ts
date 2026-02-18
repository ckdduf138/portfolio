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
  '사용자 경험을 개발자의 책임으로 바라보는 프론트엔드 개발자입니다. ' +
  'TypeScript · React · Next.js 기반으로 총 1년 3개월의 실무 경험과 ' +
  '알고리즘 시각화 플랫폼 · PWA · SSR 등 다양한 사이드 프로젝트를 보유하고 있습니다. ' +
  '어떤 UI 배치가 더 직관적인지, 어떤 인터랙션이 더 자연스러운지를 먼저 고민하며 개발합니다.';

// ── 경력 ───────────────────────────────────────────────────────────────────────
export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  type: string;
  siteUrl?: string;
  tasks: string[];
}

export const experiences: ExperienceData[] = [
  {
    company: '스윙크 (Swink)',
    role: '프론트엔드 개발자',
    period: '2022.12 – 2024.02',
    type: '산업기능요원',
    siteUrl: 'http://swink.co.kr/html/',
    tasks: [
      '메가스터디(엘리하이) · 웅진씽크빅 · EBS · 아이스크림 미디어 납품용 유아·초등 대상 국어/수학 웹 게임 콘텐츠 3종을 Cocos Creator + TypeScript로 단독 개발',
      '씬(Scene) 전환 · 타이머 · 점수 집계 등 게임 핵심 흐름을 설계하고, Cocos Creator의 컴포넌트 라이프사이클(onLoad · start · update)을 활용해 게임 상태를 모듈 단위로 분리 관리',
      'Cocos Creator의 Prefab 기능으로 정답·오답 피드백 UI(이펙트 애니메이션, 팝업, 효과음 트리거)를 재사용 가능한 컴포넌트로 설계 — 각 씬에서 일관된 UX를 유지하면서 반복 구현을 제거',
      '버튼·진행바·결과 팝업 등 공통 UI 요소를 Prefab으로 추출해 다음 콘텐츠 제작 시 즉시 재활용할 수 있는 개발 구조를 확립 — 콘텐츠당 초기 구성 시간 단축',
      '클라이언트 검수 단계에서 접수된 피드백을 반영해 수정 배포를 완료하고 최종 납품 승인 획득',
    ],
  },
  {
    company: '넥솔시스템 (Nexol System)',
    role: '프론트엔드 개발자',
    period: '2021.12 – 2022.12',
    type: '산업기능요원',
    siteUrl: 'https://www.nexol.co.kr',
    tasks: [
      '기존에 종이로 처리하던 사내 품의서·결재 프로세스를 웹으로 전환 — Vue.js + Spring Boot 기반으로 신규 개발',
      '다단계 결재선 구성, 첨부파일 체인 연결, 결재 이력 타임라인 조회 등 복잡한 업무 로직을 분석해 직관적인 UI로 구조화 — 기존 종이 서식의 흐름을 유지하면서 디지털 전환 완성',
      'Vue.js + Play Framework 기반 사내 그룹웨어 유지보수 및 신규 기능 개발 — 10개 이상의 화면을 혼자 담당',
      'MSSQL 2008 → 2019 버전 업그레이드 시 기존 코드에서 쓰던 구형 조인 문법(*= 등)이 2019에서 동작하지 않아, 전체 쿼리를 검토하고 표준 LEFT JOIN 구문으로 일괄 수정',
      'Spring Boot REST API와 연동되는 백오피스 화면을 신규 구축하고, 유지보수 비용이 높은 레거시 코드를 리팩토링해 모듈 구조와 코드 가독성을 개선',
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
