import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 0,
    title: 'Deerlink',
    description: '밸런스게임·투표·주관식 링크 하나로 공유하는 그룹 의견 비교 플랫폼',
    longDescription:
      '커스텀 도메인(deerlink.kr)에서 실서비스 중인 그룹 의견 비교 플랫폼입니다. 밸런스게임·투표·주관식을 링크 하나로 공유하면 모두가 답할 때까지 서로의 선택은 비밀이며, 응답 완료 후 한꺼번에 공개되어 그룹 내 시각 차이를 직관적으로 비교할 수 있습니다. 회원가입 없는 익명 참여 구조와 URL 기반 방 식별, 검색엔진 최적화(OG/sitemap/robots)까지 직접 기획·개발·운영하고 있습니다.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'LibSQL', 'TailwindCSS 4', 'Base UI'],
    githubUrl: 'https://github.com/ckdduf138/deerlink',
    demoUrl: 'https://deerlink.kr',
    period: '2026.01 - 진행 중',
    featured: true,
    category: 'team',
    highlights: [
      '회원가입 없는 익명 참여 구조 설계, URL 기반 방 식별 및 세션 관리 구현',
      '실시간 결과 공개 로직 구현 (모든 참여자 응답 완료 후 일괄 공개)',
      'OG 태그·sitemap·robots.txt 설정으로 검색엔진 최적화 완비',
      '커스텀 도메인(deerlink.kr) 배포 및 실서비스 운영 중',
    ],
  },
  {
    id: 1,
    title: 'Algorithm Canvas',
    description: 'React + TypeScript + visx로 구현한 알고리즘 인터랙티브 시각화 플랫폼',
    longDescription:
      'ICPC 본선 경험을 바탕으로 설계한 알고리즘 학습 플랫폼입니다. 자료구조 3종(스택·큐·힙), 정렬 4종, 그래프 3종(BFS·DFS·최단경로) 등 총 10종의 알고리즘을 시각화합니다. visx 기반 커스텀 SVG 렌더링으로 대규모 노드 애니메이션 성능을 최적화하여, 복잡한 알고리즘을 텍스트가 아닌 시각적 흐름으로 이해할 수 있도록 UX에 집중했습니다.',
    techStack: ['TypeScript', 'React', 'visx', 'styled-components', 'Vercel'],
    githubUrl: 'https://github.com/ckdduf138/algorithmcanvas',
    demoUrl: 'https://algorithm-canvas.vercel.app/',
    period: '2024.03 - 2024.10',
    featured: true,
    category: 'solo',
    highlights: [
      '총 10종 알고리즘 시각화 구현 (자료구조 3종, 정렬 4종, 그래프 3종)',
      'visx 기반 커스텀 SVG 렌더링 최적화로 대규모 노드 애니메이션 성능 개선',
      'ICPC 본선 경험을 바탕으로 알고리즘 학습 UX 직접 설계',
    ],
  },
  {
    id: 3,
    title: 'LPick',
    description: 'Next.js 15 + TypeScript + Zustand 기반 LP·음향 기기 커뮤니티 플랫폼',
    longDescription:
      'LP와 음향 기기를 사랑하는 5명의 팀이 함께 만든 커뮤니티 플랫폼입니다. 프론트엔드 전반을 담당하여 Zustand로 전역 상태를 설계해 불필요한 리렌더링을 제거했고, Storybook으로 공통 컴포넌트 문서화 체계를 구축해 팀 내 재사용성을 높였습니다. Next.js 15 App Router 기반 SSR 환경에서 검색 기능과 게시글·댓글 시스템을 구현했습니다.',
    techStack: ['Next.js 15', 'TypeScript', 'Zustand', 'TailwindCSS', 'Storybook'],
    githubUrl: 'https://github.com/ckdduf138/lpick-frontend',
    period: '2024.06 - 2025.01',
    featured: true,
    category: 'team',
    highlights: [
      '팀(5명) 협업 · 프론트엔드 전반 담당',
      'Zustand로 전역 상태 설계, Redux 대비 보일러플레이트 없이 경량 상태 관리',
      'Storybook으로 공통 컴포넌트 문서화 및 팀 내 재사용 체계 구축',
      '게시글 및 댓글 CRUD, 검색·필터링 기능 구현',
      'Next.js 15 App Router 기반 SSR 개발',
    ],
  },
  {
    id: 5,
    title: 'FoodLog',
    description: 'Next.js 15 + PWA + IndexedDB(Dexie.js) 기반 오프라인 지원 음식 기록 앱',
    longDescription:
      '위치, 사진, 별점, 가격, 메모까지 한 곳에서 관리하는 음식 기록 다이어리입니다. PWA 적용으로 모바일 홈화면 설치 및 오프라인 캐싱을 구현했으며, IndexedDB + Dexie.js로 서버 없이 로컬 데이터를 영구 저장합니다. Kakao Map API 연동으로 위치 기반 음식점 기록 기능도 제공합니다.',
    techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'IndexedDB', 'Dexie.js', 'PWA', 'Kakao Map API'],
    githubUrl: 'https://github.com/ckdduf138/foodlog',
    demoUrl: 'https://foodlog-five.vercel.app',
    period: '2024.08 - 진행 중',
    featured: true,
    category: 'solo',
    highlights: [
      'PWA 적용으로 모바일 홈화면 설치 및 오프라인 캐싱 구현',
      'IndexedDB + Dexie.js로 서버 없이 로컬 데이터 영구 저장',
      'Kakao Map API 연동으로 위치 기반 음식점 기록 기능 구현',
    ],
  },
  {
    id: 6,
    title: 'WebPocket',
    description: '설치 없이 웹앱을 앱처럼 사용하는 웹앱 디렉토리 플랫폼',
    longDescription:
      '좋아하는 웹사이트를 설치 없이 앱처럼 사용할 수 있는 웹앱 디렉토리 서비스입니다. 카테고리별 웹앱 탐색, 사용자 직접 등록, 홈 화면 추가(PWA) 기능을 제공하며 팀 프로젝트로 진행 중입니다.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'TailwindCSS 4', 'Vercel'],
    githubUrl: 'https://github.com/ckdduf138/frontend',
    demoUrl: 'https://webpocket.vercel.app/',
    period: '2026.01 - 진행 중',
    featured: true,
    category: 'team',
    highlights: [
      '카테고리별 웹앱 검색 및 필터링 UI 구현',
      '사용자 웹사이트 직접 등록(업로드) 기능',
      'PWA 지원 — 홈 화면 추가 및 네이티브 앱처럼 실행',
      'Next.js 16 App Router 기반 SSR 페이지 구성',
      'TailwindCSS 4 기반 반응형 UI 설계',
    ],
  },
  {
    id: 4,
    title: 'Reportory',
    description: '데일리 리포트 작성 및 관리 도구',
    longDescription:
      '매일의 업무를 간편하게 기록하고 히스토리를 관리할 수 있는 웹 애플리케이션입니다. 직관적인 UI와 로컬 스토리지 기반 데이터 관리로 빠른 작성 경험을 제공합니다.',
    techStack: ['TypeScript', 'React', 'TailwindCSS', 'Vercel'],
    githubUrl: 'https://github.com/ckdduf138/reportory',
    demoUrl: 'https://reportory.vercel.app',
    period: '2024.07 - 2024.09',
    featured: true,
    category: 'solo',
    highlights: [
      '로컬스토리지 기반 오프라인 데이터 관리',
      '버전 관리 및 업데이트 히스토리 시스템',
      'SEO 최적화 및 메타데이터 개선',
      '직관적인 리포트 작성 UX 설계',
    ],
  },
  {
    id: 2,
    title: 'SwiftMind',
    description: '긍정·부정 문장 변환 서비스',
    longDescription:
      '부정적인 문장을 긍정적으로 변환해주는 AI 기반 웹 서비스입니다. 사용자가 텍스트를 입력하면 자연어 처리를 통해 긍정적인 표현으로 재구성해 제공합니다.',
    techStack: ['TypeScript', 'React'],
    githubUrl: 'https://github.com/ckdduf138/swiftmind',
    demoUrl: 'https://swiftmind.vercel.app',
    period: '2024.04 - 2024.04',
    featured: false,
    category: 'solo',
    highlights: [
      'AI 기반 문장 감성 변환 기능',
      '직관적인 입력/출력 인터페이스',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
