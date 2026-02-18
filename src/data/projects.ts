import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Algorithm Canvas',
    description: '알고리즘 PS에 대한 열정에서 시작한 시각화 학습 플랫폼',
    longDescription:
      '직접 PS를 즐기며 알고리즘을 공부하던 중, "눈으로 보면 더 빨리 이해된다"는 생각에서 시작한 프로젝트입니다. 자료구조·정렬·그래프 등 다양한 알고리즘을 인터랙티브하게 시각화하여 직관적으로 학습할 수 있는 웹 플랫폼으로, 복잡한 알고리즘을 텍스트가 아닌 시각적 흐름으로 이해할 수 있도록 UX에 집중했습니다.',
    techStack: ['TypeScript', 'React', 'visx', 'styled-components', 'Vercel'],
    githubUrl: 'https://github.com/ckdduf138/algorithmcanvas',
    demoUrl: 'https://algorithm-canvas.vercel.app/',
    period: '2024.03 - 2024.10',
    featured: true,
    category: 'solo',
    highlights: [
      '자료구조(스택·큐·힙) 실시간 시각화 구현',
      '버블·삽입·선택·퀵 정렬 단계별 애니메이션',
      'BFS·DFS·최단경로 그래프 알고리즘 시각화',
      'visx 기반 커스텀 SVG 렌더링 최적화',
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
    id: 3,
    title: 'LPick',
    description: 'LP·음향 기기 커뮤니티 플랫폼',
    longDescription:
      'LP와 음향 기기를 사랑하는 사람들이 모이는 커뮤니티 플랫폼입니다. Next.js 15 App Router 기반으로 SSR과 다크모드, 카카오 소셜 로그인을 구현하고 팀 프로젝트로 진행했습니다.',
    techStack: ['Next.js 15', 'TypeScript', 'Zustand', 'TailwindCSS', 'Storybook'],
    githubUrl: 'https://github.com/ckdduf138/lpick-frontend',
    period: '2024.06 - 2025.01',
    featured: true,
    category: 'team',
    highlights: [
      'Next.js 15 App Router 기반 SSR 개발',
      'Zustand를 활용한 전역 상태 관리',
      '카카오 소셜 로그인/회원가입 구현',
      'LPTI 테스트 페이지 UI 설계 및 구현',
      'Storybook 기반 컴포넌트 문서화',
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
    id: 5,
    title: 'FoodLog',
    description: '음식 경험을 기록하는 PWA',
    longDescription:
      '위치, 사진, 별점, 가격, 메모까지 한 곳에서 관리하는 음식 기록 다이어리입니다. IndexedDB 기반 오프라인 지원과 PWA 설치 기능으로 앱처럼 사용할 수 있으며, 카카오 지도 API로 현재 위치 기반 음식점 검색도 지원합니다.',
    techStack: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'IndexedDB', 'Dexie.js', 'PWA', 'Kakao Map API'],
    githubUrl: 'https://github.com/ckdduf138/foodlog',
    demoUrl: 'https://foodlog-five.vercel.app',
    period: '2024.08 - 진행 중',
    featured: true,
    category: 'solo',
    highlights: [
      '카카오 지도 API 연동 · 현재 위치 기반 음식점 검색',
      'IndexedDB(Dexie.js) 기반 오프라인 데이터 저장',
      'PWA 적용 — 홈 화면 설치 및 오프라인 지원',
      '음식 CRUD · 별점 · 사진 · 통계 대시보드',
      'SEO 최적화 (OG, JSON-LD, Sitemap, Robots.txt)',
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
