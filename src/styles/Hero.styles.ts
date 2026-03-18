import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 80vh; 
  position: relative;
  overflow: hidden;
  margin: 0; 
  padding: 0;
  background-color: #fafafa;
`;

export const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%; /* 핵심 수정: 좌측 여백 15% 강제 적용 */
  padding-right: 15%;
  box-sizing: border-box;
  
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center;
`;

export const MainCopy = styled.h1`
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 24px 0;
  color: #111;
  letter-spacing: -0.01em;
`;

export const Highlight = styled.span` color: #00D1B2; `;

export const SubCopy = styled.p` 
  font-size: clamp(1rem, 1.5vw, 1.2rem); 
  color: #666; 
  max-width: 650px; 
  line-height: 1.6; 
  margin: 0;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: 80px;
  left: 15%; /* 텍스트와 세로선 일치 */
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 999; 

  button {
    background: none; 
    border: none; 
    cursor: pointer;
    font-size: 1rem; 
    font-weight: 700; 
    color: #999;
    padding: 5px 10px;
    transition: 0.2s;
    &:hover { color: #00D1B2; }
  }
`;

export const SlideDots = styled.div` display: flex; gap: 8px; `;

export const Dot = styled.div<{ $active: boolean }>`
  width: ${props => props.$active ? '24px' : '8px'};
  height: 8px;
  background: ${props => props.$active ? '#00D1B2' : '#ddd'};
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
`;

export const ScrollIndicator = styled.div`
  position: absolute; 
  bottom: 30px; 
  left: 15%; /* 텍스트와 세로선 일치 */
  color: #ccc; 
  font-size: 0.8rem; 
  font-weight: 700;
  z-index: 999;
`;