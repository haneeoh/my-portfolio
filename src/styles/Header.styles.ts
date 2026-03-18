import styled from 'styled-components';

export const FloatingNav = styled.nav`
  position: fixed;
  right: 20px;
  bottom: 50%;
  transform: translateY(50%);
  
  /* 💡 흰 배경에서 가장 예쁜 '리얼 글래스' 마감 */
  background: rgba(255, 255, 255, 0.3); /* 💡 투명도를 확 낮춰서 뒤가 비치게 */
  backdrop-filter: blur(15px); 
  -webkit-backdrop-filter: blur(15px);
  
  /* 💡 테두리: 흰 배경에서 구획을 나눠주는 아주 연한 그레이 라인 */
  border: 1px solid rgba(0, 0, 0, 0.05); 
  
  padding: 24px 14px;
  border-radius: 40px;
  /* 💡 쉐도우: 시커먼 그림자 삭제! 아주 연한 미스트 쉐도우 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03); 
  
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: row;
    right: 50%;
    bottom: 30px;
    transform: translateX(50%);
    padding: 12px 24px;
    gap: 20px;
  }
`;

export const NavItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* 💡 포인트 컬러: 흰 배경에서도 선명한 '네온 민트' (#00D1B2) 딱 하나만! */
  color: ${props => props.$isActive ? '#00D1B2' : '#999'};
  
  svg { 
    font-size: 1.3rem;
    transition: all 0.2s ease;
  }
  
  span { 
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.65rem; 
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    opacity: ${props => props.$isActive ? 1 : 0.6};
  }
  
  &:hover { 
    color: #00D1B2; /* 💡 호버도 동일한 민트로 통일 */
    transform: translateY(-2px);
  }

  /* 💡 포인트 컬러와 동일한 민트 점 */
  &::after {
    content: '';
    width: 4px; height: 4px;
    background: #00D1B2;
    border-radius: 50%;
    display: ${props => props.$isActive ? 'block' : 'none'};
    margin-top: 4px;
  }
`;

export const MiniPopup = styled.div`
  position: absolute;
  right: calc(100% + 15px);
  top: 50%;
  transform: translateY(-50%);
  
  /* 💡 배경: 비치지 않는 깔끔한 연그레이 (#f8f8f8) */
  background: #f8f8f8; 
  padding: 12px;
  border-radius: 12px;
  
  /* 💡 [보수] 위쪽 테두리 및 이상한 색깔 쉐도우 싹 삭제! */
  border: 1px solid rgba(0, 0, 0, 0.05); 
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); 
  
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 160px;
  width: max-content;
  z-index: 1100;

  /* 💡 [보수] 삼각형 - 이제 진짜 잘 보이게 위치랑 색상 확실히 고정 */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -8px; 
    transform: translateY(-50%);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid #f8f8f8; /* 배경색이랑 똑같이! */
  }

  @media (max-width: 768px) {
    right: auto;
    left: 50%;
    bottom: calc(100% + 20px);
    transform: translateX(-50%);
    &::after {
      right: auto;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #f8f8f8;
      border-bottom: none;
    }
  }
`;

export const PopupItem = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #555;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  display: flex;
  align-items: center;
  justify-content: space-between; 
  /* 💡 [핵심] 글자와 화살표 사이 최소 간격(20px) 확보! */
  gap: 20px; 

  &::after {
    content: '→';
    opacity: 0;
    transition: all 0.2s ease;
    transform: translateX(-5px);
    /* 💡 화살표가 글자에 너무 붙지 않게 한 번 더 밀어주기 */
    margin-left: auto; 
  }

  &:hover { 
    color: #00D1B2;
    background: rgba(0, 209, 178, 0.05);
    
    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;