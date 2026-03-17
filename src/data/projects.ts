// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  mainImage: string;      // 썸네일용 메인 이미지
  image: string[];      // 이미지 경로
  github?: string;    // 깃허브 주소 (선택사항)
  link?: string;      // 데모/유튜브 주소 (선택사항)
  troubleshooting?: { title: string; problem: string; solution: string; }[];
}
export const projectData = [
  {
    id: 1,
    title: "비트코인 모의투자 웹 서비스",
    role: "프론트엔드 파트장 / UI·UX 리드 / 메인페이지 및 마이페이지 제작",
    images: Array.from({ length: 41 }, (_, i) => `/images/project1/project1_${i + 1}.jpg`),
    github: "https://github.com/yourid/project1", // 💡 여기에 실제 주소 넣기
    link: "https://www.youtube.com/@user-wr8mk2fi9c",      // 💡 여기에 실제 주소 넣기
    description: "WebSocket과 SSE를 활용해 30분 주기로 갱신되는 유저 랭킹 및 변동 그래프를 실시간 동기화했습니다.\n\nREST API를 연동하여 개인정보 수정 및 투자 백데이터를 시각화하는 마이페이지를 구축했으며, 6인 개발 환경에서 공통 UI 가이드라인을 세우고 퍼블리싱을 총괄했습니다.",
    techStack: ['React', 'TypeScript', 'Styled-Components', 'WebSocket'],
    // 💡 여기에 트러블슈팅 데이터를 추가합니다!
    troubleshooting: [
      {
        title: "데이터 접근 권한에 따른 API 렌더링 최적화",
        problem: "랭킹 페이지와 마이페이지에서 '이전 시즌 랭킹'이라는 동일한 성격의 데이터를 호출해야 했습니다. 하지만 랭킹은 누구나 볼 수 있는 요약 정보이고, 마이페이지는 본인만 보는 상세 투자 내역이 포함되어야 해서 불필요한 데이터 페칭(Fetching)과 렌더링 지연이 발생했습니다.",
        solution: "백엔드 팀과 조율하여 목적에 맞게 두 개의 DTO(데이터 전송 객체)로 분리해줄 것을 요청하고 적용했습니다. 이를 통해 프론트엔드 단에서 불필요한 데이터를 필터링하는 과정을 생략하여 렌더링 효율과 보안을 동시에 높였습니다."
      },
      {
        title: "6인 협업 환경에서의 CSS 스타일 충돌 해결",
        problem: "6명이 동시에 각자의 페이지를 개발하다 보니 사전에 클래스명 네이밍 규칙을 정했음에도 병합(Merge) 과정에서 글로벌 스타일 충돌과 UI 파편화가 발생했습니다.",
        solution: "Styled-Components의 장점을 적극 활용하여 컴포넌트별로 스타일 스코프를 철저히 분리했습니다. 또한, 중복되는 버튼과 인풋 등의 UI 요소들을 공통 컴포넌트로 분리하여 팀원들에게 배포함으로써 전체적인 디자인 일관성을 확보했습니다."
      }
    ]
  },
  {
    id: 2,
    title: "인테리어 기업 공식 웹사이트 구축",
    role: "기획, UI/UX, 프론트엔드 및 백엔드 전체",
    image: "https://via.placeholder.com/800x600",
    link: "https://your-site.com",
    description: "사내 디자인 요구사항인 '미니멀리즘'을 반영하여, 가로/세로 그리드와 간결한 선만을 활용한 레이아웃 구조를 기획했습니다.\n\n시공 사례를 효과적으로 보여주기 위해 클릭 시 화면 사이즈에 맞춰 유동적으로 조절되는 커스텀 반응형 갤러리 뷰어(모달)를 직접 구현했으며, 배포까지 전 과정을 주도했습니다.",
    techStack: ['Astro', 'HTML/CSS', 'JavaScript'],
    // 2번 프로젝트는 아직 내용이 없으니 빈 배열로 둡니다
    troubleshooting: [] 
  }
];