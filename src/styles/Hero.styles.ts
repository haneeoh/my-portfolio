import styled, { keyframes } from 'styled-components';

// --- 애니메이션 정의 ---
export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- 스타일 정의 ---
export const HeroContainer = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 5% 0 5%; 
  box-sizing: border-box;
  position: relative; /* ScrollIndicator 위치 잡기용 */
  
  background-color: #fafafa;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
`;

export const MainCopy = styled.h1`
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 800;
  color: #111;
  line-height: 1.2;
  margin: 0 0 24px 0;
  letter-spacing: -0.02em;
  
  animation: ${fadeUp} 1s ease-out forwards;
`;

export const Highlight = styled.span`
  color: #0066ff;
`;

export const SubCopy = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  color: #555;
  line-height: 1.6;
  margin: 0;
  
  opacity: 0; 
  animation: ${fadeUp} 1s ease-out 0.3s forwards;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  font-weight: 600;
  color: #999;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  opacity: 0;
  animation: ${fadeUp} 1s ease-out 0.8s forwards;
`;