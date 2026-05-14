import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 0,
    title: 'Deerlink',
    description: '커스텀 도메인에서 실운영 중인 음성 기반 커뮤니티 플랫폼',
    longDescription:
      'Next.js 16과 Prisma를 활용한 음성 기반 커뮤니티 플랫폼으로, 실제 커스텀 도메인에서 서비스 중입니다. LibSQL + Prisma 어댑터로 엣지 데이터베이스를 구축하고, Base UI와 Tailwind CSS 4로 현대적인 UI를 구현했습니다. QR 코드 공유, 실시간 상호작용 등 풍부한 기능을 제공합니다.',
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'LibSQL', 'TailwindCSS 4', 'Base UI'],
    githubUrl: 'https://github.com/ckdduf138/deerlink',
    demoUrl: 'https://deerlink.vercel.app',
    period: '2025.01 - 진행 중',
    featured: true,
    category: 'solo',
    highlights: [
      '커스텀 도메인 기반 실서비스 운영',
      'Next.js 16 App Router 기반 SSR 구현',
      'Prisma + LibSQL 엣지 데이터베이스 구축',
      'QR 코드 기반 실시간 공유 기능',
      'TailwindCSS 4 기반 모던 UI 설계',
    ],
  },
  {
    id: 1,
    title: 'Algorithm Canvas',
    description: 'React + TypeScript + visx로 구현한 알고리즘 인터랙티브 시각화 플랫폼',
    longDescription:
      'ICPC 본선 경험을 바탕으로 설계한 알고리즘 학습 플랫폼입니다. 스택·큐·힙 등 자료구조와 BFS/DFS/최단경로 등 그래프 알고리즘 총 N종을 시각화합니다. visx 기반 커스텀 SVG 렌더링으로 대규모 노드 애니메이션 성능을 최적화하여, 복잡한 알고리즘을 텍스트가 아닌 시각적 흐름으로 이해할 수 있도록 UX에 집중했습니다.',
    techStack: ['TypeScript', 'React', 'visx', 'styled-components', 'Vercel'],
    githubUrl: 'https://github.com/ckdduf138/algorithmcanvas',
    demoUrl: 'https://algorithm-canvas.vercel.app/',
    period: '2024.03 - 2024.10',
    featured: true,
    category: 'solo',
    highlights: [
      '스택·큐·힙 등 자료구조와 BFS/DFS/최단경로 등 그래프 알고리즘 총 N종 시각화 구현',
      'visx 기반 커스텀 SVG 렌더링 최적화로 대규모 노드 애니메이션 성능 개선',
      'ICPC 본선 경험을 바탕으로 알고리즘 학습 UX 직접 설계',
    ],
  },
    {
    id: 3,
    title: 'LPick',
    description: 'Next.js 15 + TypeScript + Zustand 기반 LP·음향 기기 커뮤니티 플랫폼',
    longDescription:
      'LP와 음향 기기를 사랑하는 5명의 팀이 함께 만든 커뮤니티 플랫폼입니다. Next.js 15 App Router 기반 SSR 개발에서 검색 기능과 커뮤니티 게시글·댓글 시스템을 구현했으며, Zustand로 복잡한 전역 상태를 효율적으로 관리하여 불필요한 리렌더링을 제거했습니다. Storybook으로 공통 컴포넌트를 문서화하여 팀 협업 생산성을 극대화했습니다.',
    techStack: ['Next.js 15', 'TypeScript', 'Zustand', 'TailwindCSS', 'Storybook'],
    githubUrl: 'https://github.com/ckdduf138/lpick-frontend',
    period: '2024.06 - 2025.01',
    featured: true,
    category: 'team',
    highlights: [
      '팀(5명) 협업 · 전역 상태 관리 설계 및 불필요한 리렌더링 제거',
      'Zustand로 검색 상태와 필터링 로직 관리',
      '게시글 및 댓글 CRUD 기능 구현',
      'Storybook으로 공통 컴포넌트 문서화 및 재사용 체계 구축',
      'Next.js 15 App Router 기반 SSR 개발',
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

];

export const featuredProjects = projects.filter((p) => p.featured);
