// 💡 스타일 자재들을 S라는 별명으로 가져옵니다.
import * as S from '../styles/Hero.styles';

export default function Hero() {
  return (
    <S.HeroContainer id="about"> {/* Header와 연결을 위해 id 추가 */}
      <S.MainCopy>
        오프라인의 디테일을<br />
        <S.Highlight>웹 브라우저</S.Highlight> 위에 짓습니다.
      </S.MainCopy>
      <S.SubCopy>
        7년간 공간을 기획해 온 시선으로<br />
        사용자 중심의 직관적인 UI/UX를 구현하는 프론트엔드 개발자 오하늬입니다.
      </S.SubCopy>
      
      <S.ScrollIndicator>Scroll Down ↓</S.ScrollIndicator>
    </S.HeroContainer>
  );
}