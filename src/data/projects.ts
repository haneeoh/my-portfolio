export interface Project {
  id: number;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  techStack: string[];
  images: string[];
  placeholderColor: string;
  github?: string;
  link?: string;
  period?: string;
  team?: string;
  category?: string;
  troubleshooting?: { title: string; problem: string; solution: string }[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: '비트코인 모의투자 웹 서비스',
    subtitle: 'REAL-TIME INVESTMENT SIMULATOR',
    role: '프론트엔드 파트장 / UI·UX 리드',
    period: '2024.09 – 11',
    team: '6명 (FE 3 · BE 3)',
    category: 'Team Project',
    placeholderColor: '#1C2635',
    images: Array.from({ length: 10 }, (_, i) => `/images/project1/project1_${i + 1}.jpg`),
    github: 'https://github.com/yourid/project1',
    link: 'https://www.youtube.com/@user-wr8mk2fi9c',
    description:
      'WebSocket과 SSE를 활용해 30분 주기로 갱신되는 유저 랭킹 및 변동 그래프를 실시간 동기화했습니다.\n\nREST API를 연동하여 개인정보 수정 및 투자 백데이터를 시각화하는 마이페이지를 구축했으며, 6인 개발 환경에서 공통 UI 가이드라인을 세우고 퍼블리싱을 총괄했습니다.',
    techStack: ['React', 'TypeScript', 'Styled-Components', 'WebSocket', 'SSE'],
    troubleshooting: [
      {
        title: '데이터 접근 권한에 따른 API 렌더링 최적화',
        problem:
          "랭킹 페이지와 마이페이지에서 '이전 시즌 랭킹'이라는 동일한 성격의 데이터를 호출해야 했습니다. 하지만 랭킹은 누구나 볼 수 있는 요약 정보이고, 마이페이지는 본인만 보는 상세 투자 내역이 포함되어야 해서 불필요한 데이터 페칭과 렌더링 지연이 발생했습니다.",
        solution:
          '백엔드 팀과 조율하여 목적에 맞게 두 개의 DTO로 분리해줄 것을 요청하고 적용했습니다. 이를 통해 프론트엔드 단에서 불필요한 데이터를 필터링하는 과정을 생략하여 렌더링 효율과 보안을 동시에 높였습니다.',
      },
      {
        title: '6인 협업 환경에서의 CSS 스타일 충돌 해결',
        problem:
          '6명이 동시에 각자의 페이지를 개발하다 보니 사전에 네이밍 규칙을 정했음에도 병합 과정에서 글로벌 스타일 충돌과 UI 파편화가 발생했습니다.',
        solution:
          'Styled-Components의 장점을 적극 활용하여 컴포넌트별로 스타일 스코프를 철저히 분리했습니다. 또한 중복되는 버튼과 인풋 등의 UI 요소들을 공통 컴포넌트로 분리하여 팀원들에게 배포함으로써 전체적인 디자인 일관성을 확보했습니다.',
      },
    ],
  },
  {
    id: 2,
    title: '인테리어 기업 공식 웹사이트',
    subtitle: 'OFFICIAL WEBSITE FOR INTERIOR STUDIO',
    role: '기획, UI/UX, 풀스택 개발',
    period: '2024.06 – 08',
    team: '1명 (Solo)',
    category: 'Personal Project',
    placeholderColor: '#2C3A2E',
    images: [],
    link: 'https://your-site.com',
    description:
      "사내 디자인 요구사항인 '미니멀리즘'을 반영하여, 가로/세로 그리드와 간결한 선만을 활용한 레이아웃 구조를 기획했습니다.\n\n시공 사례를 효과적으로 보여주기 위해 클릭 시 화면 사이즈에 맞춰 유동적으로 조절되는 커스텀 반응형 갤러리 뷰어(모달)를 직접 구현했으며, 배포까지 전 과정을 주도했습니다.",
    techStack: ['Astro', 'HTML/CSS', 'JavaScript'],
    troubleshooting: [],
  },
  {
    id: 4,
    title: '음악 스트리밍 대시보드',
    subtitle: 'MUSIC STREAMING ANALYTICS DASHBOARD',
    role: '프론트엔드 개발',
    period: '2024.03 – 05',
    team: '3명 (FE 2 · BE 1)',
    category: 'Team Project',
    placeholderColor: '#2A1F3D',
    images: [],
    description:
      '실시간 음악 스트리밍 데이터를 시각화하는 대시보드입니다. Chart.js를 활용해 재생 수, 지역별 통계, 시간대별 트렌드를 인터랙티브 그래프로 구현했습니다.\n\n무한 스크롤과 가상 리스트를 적용해 대용량 트랙 목록을 부드럽게 렌더링했으며, 다크모드 전환 기능을 구현했습니다.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Recoil'],
    troubleshooting: [],
  },
  {
    id: 5,
    title: '부동산 매물 검색 서비스',
    subtitle: 'REAL ESTATE SEARCH PLATFORM',
    role: 'UI 개발 / 지도 연동',
    period: '2023.11 – 2024.01',
    team: '4명 (FE 2 · BE 2)',
    category: 'Team Project',
    placeholderColor: '#1F3028',
    images: [],
    description:
      'Kakao Map API를 연동하여 매물 위치를 지도 위에 클러스터링으로 표시하는 부동산 검색 서비스입니다.\n\n필터 조건(가격, 면적, 층수)에 따라 지도와 리스트가 동시에 업데이트되는 연동 구조를 구현했으며, 즐겨찾기 및 최근 본 매물 기능을 로컬스토리지로 관리했습니다.',
    techStack: ['React', 'JavaScript', 'Kakao Map API', 'Zustand'],
    troubleshooting: [],
  },
  {
    id: 3,
    title: 'This Portfolio',
    subtitle: 'THE SITE YOU ARE LOOKING AT RIGHT NOW',
    role: '기획, 디자인, 개발',
    period: '2025.04',
    team: '1명 (Solo)',
    category: 'Personal Project',
    placeholderColor: '#C05C3A',
    images: [],
    description:
      '포트폴리오 자체를 하나의 작업물로. 인테리어 디자이너에서 프론트엔드 개발자로의 전환 스토리를 담은 싱글페이지 웹사이트입니다.\n\n테라코타 컬러 팔레트와 에디토리얼 타이포그래피를 기반으로 디자인 시스템을 직접 구성했습니다. 기획부터 디자인, 개발까지 전 과정을 단독으로 진행했습니다.',
    techStack: ['React', 'TypeScript', 'Vite', 'Styled-Components', 'Framer Motion'],
    troubleshooting: [],
  },
];
