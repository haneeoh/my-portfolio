// 💡 스타일 자재들을 S라는 별명으로 가져옵니다.
import * as S from '../styles/Footer.styles';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer id="contact">
      <S.ContactTitle>Let's Work Together</S.ContactTitle>
      <S.ContactSubText>
        7년의 공간 기획 경험을 바탕으로,<br />
        디테일이 살아있는 웹 서비스를 함께 만들고 싶습니다.
      </S.ContactSubText>
      
      <S.InfoGroup>
        <S.InfoLink href="mailto:hani.oh@example.com">
          Email: hani.oh@example.com
        </S.InfoLink>
        <S.InfoLink href="https://github.com/hanioh" target="_blank" rel="noreferrer">
          GitHub: github.com/hanioh
        </S.InfoLink>
      </S.InfoGroup>

      <S.Copyright>
        © {currentYear} Hani Oh. All rights reserved.
      </S.Copyright>
    </S.FooterContainer>
  );
}