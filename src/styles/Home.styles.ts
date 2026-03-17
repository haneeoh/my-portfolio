import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  background-color: #f8f9fa;
`;

export const Section = styled.section`
  padding: 120px 5% 100px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  /* 태블릿/모바일 대응을 위해 패딩 조절 */
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 60px;
  position: relative;
  
  /* 제목 옆에 작은 점 하나 찍어주면 더 세련돼 보여요 (디테일!) */
  &::after {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #0066ff;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  /* 💡 그리드 시스템: 화면 크기에 맞춰 카드가 1줄에 1개~3개 유동적으로 변함 */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 40px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 아주 작은 폰에선 무조건 한 줄 */
    gap: 20px;
  }
`;