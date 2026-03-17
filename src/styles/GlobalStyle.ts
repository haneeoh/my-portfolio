import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 1. 기본 여백 및 폰트 설정 */
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    /* 💡 부드러운 스크롤 효과 (헤더 클릭 시 슥- 이동) */
    scroll-behavior: smooth;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 2. 박스 모델 설정 (인테리어 치수 계산할 때 필수!) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 3. 링크 기본 스타일 제거 */
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  /* 4. 버튼 기본 스타일 제거 */
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
  }

  /* 5. 리스트 기호 제거 */
  ul, li {
    list-style: none;
  }

  /* 💡 텍스트 드래그 색상 (하늬 님 포인트 컬러인 파란색으로!) */
  ::selection {
    background-color: #0066ff;
    color: #fff;
  }
`;

export default GlobalStyle;