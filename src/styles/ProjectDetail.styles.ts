import styled from 'styled-components';

export const PageWrapper = styled.div` width: 100%; min-height: 100vh; padding-bottom: 100px; `;

export const DetailHero = styled.div`
  width: 100%; height: 40vh; background-color: #111; color: #fff;
  display: flex; align-items: flex-end; padding: 60px 5%;
  .hero-content {
    width: 100%; max-width: 1200px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: flex-end;
  }
`;

export const Title = styled.h1`
  font-size: clamp(1.8rem, 5vw, 3.5rem); /* 최소 크기를 2rem -> 1.8rem으로 살짝 하향 */
  margin: 0;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.02em; /* 💡 자간을 살짝 좁히면 제목이 더 묵직하고 고급스러워 보여요 */

  /* 📱 모바일 버전: 제목이 너무 길어질 수 있으니 더 줄임 */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* 💡 딱 적당히 눈에 띄면서 부담 없는 크기 */
    line-height: 1.3;
  }
`;
export const LinkGroup = styled.div` display: flex; gap: 12px; margin-bottom: 10px; `;

export const IconButton = styled.a<{ $primary?: boolean }>`
  display: flex; align-items: center; gap: 8px; padding: 12px 24px;
  border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 0.9rem;
  color: white; border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.3s ease;

  /* 1️⃣ 기본 배경색 설정 (주소 분석) */
  background: ${props => 
    props.href?.includes('youtube.com') ? '#FF0000' : // 유튜브는 레드
    props.$primary ? '#00D1B2' :                      // 기본은 민트
    'rgba(255,255,255,0.1)'                           // 나머지는 반투명
  };

  /* 2️⃣ 호버 시 배경색 설정 (여기가 포인트! 민트 침입 방지) */
  &:hover {
    transform: translateY(-3px);
    background: ${props => 
      props.href?.includes('youtube.com') ? '#CC0000' : // 유튜브는 더 진한 레드
      '#05BD9E'                                        // 나머지는 민트 계열
    };
  }

  /* 📱 모바일 버전 슬림 핏 */
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.8rem;
    gap: 6px;
  }
`;

export const InfoGrid = styled.div`
  max-width: 1200px; margin: 0 auto; padding: 40px 5%;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  border-bottom: 1px solid #eee;
`;

export const InfoBlock = styled.div` display: flex; flex-direction: column; gap: 5px; `;
export const InfoLabel = styled.span` font-size: 0.75rem; color: #999; font-weight: 700; text-transform: uppercase; `;
export const InfoValue = styled.span` font-size: 1rem; font-weight: 600; color: #333; `;

export const SplitContainer = styled.div`
  max-width: 1400px;
  margin: 50px auto;
  display: flex;
  height: 750px; /* PC 버전 고정 높이 */
  overflow: hidden;
  /* 💡 모바일 대응: 옆으로 나란히가 아니라 위아래로 쌓기! */
  @media (max-width: 1024px) {
    flex-direction: column; 
    height: auto; /* 높이 제한 해제 */
    position: block;
    box-shadow: none;
  }
`;

export const LeftScrollArea = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: auto;
  background: #f4f4f4;

  @media (max-width: 1024px) {
    width: 100% !important; /* ResizableBox 무시하고 꽉 채우기 */
    height: auto; /* 모바일에선 도면 영역을 화면의 절반만 차지하게 */
    overflow-y: visible; /* 💡 내부 스크롤 방지 */
    background: white; /* 모바일에선 깔끔하게 화이트로 가도 예뻐요 */
  }
`;

export const ImageStack = styled.div` display: flex; flex-direction: column; gap: 10px; padding: 20px; `;

export const ProjectImg = styled.img` 
  width: 100%; display: block; cursor: zoom-in; border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
`;

export const PageNumber = styled.span`
  position: absolute; bottom: 10px; right: 10px;
  background: rgba(0,0,0,0.5); color: white; padding: 2px 8px;
  border-radius: 10px; font-size: 0.7rem; pointer-events: none;
`;

export const RightContentArea = styled.div<{ $isOpen: boolean }>`
  flex: 1;
  padding: 50px;
  background: white;
  overflow-y: auto; /* 💡 여기서만 스크롤 가능 */

  @media (max-width: 1024px) {
    position: fixed; /* absolute보다 안정적 */
    bottom: 0; left: 0;
    width: 100%;
    height: 65vh; /* 💡 높이를 화면의 약 65%로 키움 */
    z-index: 90;
    border-radius: 30px 30px 0 0;
    padding: 40px 25px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(100%)'};
  }
`;


export const SectionTitle = styled.h3` font-size: 1.6rem; margin-bottom: 25px; color: #111; `;
export const DescriptionText = styled.p` line-height: 1.8; color: #555; margin-bottom: 50px; `;

export const TroubleCard = styled.div` margin-bottom: 30px; padding: 25px; background: #fdfdfd; border: 1px solid #efefef; border-radius: 15px; `;
export const TroubleTitle = styled.h4` margin-top: 0; font-size: 1.1rem; `;
export const TroubleBox = styled.div<{ $isProblem?: boolean }>`
  padding: 15px; border-radius: 8px; margin-top: 10px; font-size: 0.95rem;
  background: ${props => props.$isProblem ? '#fff5f5' : '#f0f7ff'};
  border-left: 4px solid ${props => props.$isProblem ? '#ff6b6b' : '#00D1B2'};
`;
export const TroubleLabel = styled.div<{ $isProblem?: boolean }>` font-weight: 800; font-size: 0.8rem; color: ${props => props.$isProblem ? '#ff6b6b' : '#00D1B2'}; margin-bottom: 5px; `;

export const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.95); z-index: 5000;
  display: flex; justify-content: center; align-items: center;
`;

export const ModalImage = styled.img` max-width: 85%; max-height: 85%; object-fit: contain; box-shadow: 0 0 50px rgba(0,0,0,0.5); `;
export const ArrowBtn = styled.button`
  position: absolute; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: white; cursor: pointer; padding: 20px;
  opacity: 0.5; transition: 0.3s; &:hover { opacity: 1; color: #00D1B2; }
`;

export const CloseBtn = styled.div` position: absolute; top: 30px; right: 30px; color: white; cursor: pointer; font-size: 2rem; opacity: 0.7; &:hover { opacity: 1; } `;
export const ModalCounter = styled.div` position: absolute; bottom: 30px; color: white; font-size: 1.1rem; font-weight: 300; `;
export const ZoomHint = styled.div` padding: 20px; text-align: center; color: #999; font-size: 0.8rem; `;
export const Loading = styled.div` padding: 100px; text-align: center; font-size: 1.2rem; `;

// 💡 추가: 설명창 뒤 배경 (밖을 클릭하면 닫히게 하기 위해 필요)
export const MobileBackdrop = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 85; /* 설명창(90)보다 낮게 */
`;

/* 💡 2. 모바일 토글 버튼 사이즈 하향 조정 */
export const MobileToggleButton = styled.button`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    position: fixed;
    bottom: 110px; /* 💡 헤더(FloatingNav)랑 겹치지 않게 살짝 조정 */
    right: 20px;
    z-index: 100;
    
    /* 💡 [수정] 크기를 42px -> 36px로 줄여서 더 콤팩트하게 마감 */
    width: 36px;
    height: 36px;
    
    background: #00D1B2;
    color: white;
    border-radius: 50%;
    justify-content: center; 
    align-items: center;
    font-size: 1.1rem; /* 💡 아이콘 크기도 같이 살짝 줄임 */
    
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    border: 2px solid white; 
    transition: transform 0.2s active;
    
    &:active {
      transform: scale(0.9); /* 누를 때 쫀득한 반응감 추가 */
    }
  }
`;
