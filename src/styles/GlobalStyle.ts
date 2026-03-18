import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 💡 0. 외부 폰트 소스 불러오기 (이게 있어야 폰트가 제대로 나와요!) */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Inter:wght@400;500;600&display=swap');

  /* 1. 기본 여백 및 폰트 설정 */
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh; /* 💡 100%보다는 100vh가 바닥까지 꽉 채워줘서 안정적이에요 */
    scroll-behavior: smooth;
    
    /* 💡 기본 폰트를 프리텐다드로 고정 */
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #111; /* 💡 #333보다 조금 더 진한 블랙이 요즘 트렌드라 살짝 눌러줬어요 */
    
    /* 💡 마감을 매끈하게 다듬기 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* 💡 모바일에서 텍스트 크기 자동 조절 방지 */
    -webkit-text-size-adjust: none;
  }

  /* 2. 박스 모델 설정 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* 💡 모든 요소에 폰트 상속 (가끔 인풋이나 버튼이 엇나갈 때가 있어서 필수!) */
    font-family: inherit;
  }

  /* 💡 [추가] 제목 전용 폰트 설정 (Jakarta Sans의 힙한 감성) */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', 'Pretendard', sans-serif;
    font-weight: 800;
    letter-spacing: -0.03em; /* 💡 자간을 조여야 제목이 엣지 있어 보여요 */
    line-height: 1.2;
  }

  /* 3. 링크 기본 스타일 제거 */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  /* 4. 버튼 기본 스타일 제거 */
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    outline: none; /* 💡 포커스 시 생기는 파란 테두리 제거 */
  }

  /* 5. 리스트 기호 제거 */
  ul, li {
    list-style: none;
  }

  /* 💡 이미지 마감 (인테리어 사진이 예쁘게 나오도록!) */
  img {
    max-width: 100%;
    display: block;
    -webkit-user-drag: none; /* 💡 사진 드래그 방지 */
  }

  /* 💡 텍스트 드래그 색상 */
  ::selection {
    background-color: #00D1B2;
    color: #fff;
  }

  /* 💡 스크롤바 커스텀 (인테리어 잡지 같은 슬림한 느낌) */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

export default GlobalStyle;