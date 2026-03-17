import styled from 'styled-components';

export const FloatingNav = styled.nav`
  position: fixed;
  top: auto%;
  transform: translateY(-50%);
  bottom: 30px; /* 모바일에선 오른쪽 중앙보다 아래쪽이 터치하기 편해요 */
  right: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 30px 20px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: row; /* 가로로 나열할 수도 있어요! 선택사항 */
    right: 50%;
    transform: translateX(50%); /* 하단 중앙으로 이동 */
    padding: 15px 25px;
    gap: 20px;
  }
`;

export const NavItem = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  /* 💡 활성화 상태일 때 파란색으로 고정 */
  color: ${props => props.$isActive ? '#0066ff' : '#333'};
  
  svg { 
    font-size: 1.5rem; 
    /* 활성화 시 아이콘 크기를 살짝 키워도 예뻐요 */
    transform: ${props => props.$isActive ? 'scale(1.1)' : 'scale(1)'};
  }
  
  span { 
    font-size: 0.8rem; 
    font-weight: 700; 
  }
  
  &:hover { 
    color: #0066ff;
    transform: translateY(-2px);
  }
`;

export const MiniPopup = styled.div`
  position: absolute;
  right: 120%; 
  top: 50%;
  transform: translateY(-50%);
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 160px;
  border: 1px solid #eee;
  
  /* [PC 버전] 삼각형 꼬리표 (오른쪽) */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -8px;
    transform: translateY(-50%);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid white;
  }

  /* 📱 [모바일 버전] 위로 솟아오르게 수정! */
  @media (max-width: 768px) {
    right: auto;
    top: auto;
    left: 50%;
    bottom: calc(100% + 20px); /* 버튼 위로 20px 띄움 */
    transform: translateX(-50%); /* 가로 중앙 정렬 */
    min-width: 180px; /* 터치하기 편하게 살짝 키움 */
    
    /* [모바일 버전] 삼각형 꼬리표 (아래쪽으로 이동) */
    &::after {
      right: auto;
      top: 100%; /* 팝업 아래쪽에 붙임 */
      left: 50%;
      transform: translateX(-50%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid white; /* 위쪽 화살표 모양 */
      border-bottom: none;
    }

    /* 슥 나타나는 애니메이션 */
    animation: popUp 0.3s ease-out;
  }

  @keyframes popUp {
    from {
      opacity: 0;
      transform: translate(-50%, 10px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

export const PopupItem = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
  cursor: pointer;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 4px;
  transition: 0.2s;
  
  &:hover { 
    color: #0066ff; 
    background: #f0f7ff;
  }
`;