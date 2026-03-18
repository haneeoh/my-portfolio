// src/components/BasePanel.tsx
import { useState } from 'react';
import * as S from '../styles/Panels.styles';

const SLIDES = [
  {
    quote: '오프라인의 디테일을<br/>웹 브라우저 위에 짓습니다.',
    sub: '7년간 공간을 기획해 온 시선으로 사용자 중심의 직관적인 UI/UX를 구현하는 프론트엔드 개발자 오하늬입니다.',
  },
  {
    quote: '도면의 치수가 이제는<br/>코드의 픽셀이 됩니다.',
    sub: '정교한 설계가 공간의 가치를 바꾸듯, 논리적인 구조로 웹의 사용자 경험을 설계합니다.',
  },
  {
    quote: '넘치는 아이디어를<br/>하나의 화면에 응축합니다.',
    sub: 'ADHD에서 비롯된 폭발적인 몰입력과 창의성은 복잡한 문제를 해결하는 저만의 가장 큰 무기입니다.',
  },
];

export default function BasePanel() {
  const [index, setIndex] = useState(0);

  return (
    <S.BaseWrap>
      <S.BaseQuote dangerouslySetInnerHTML={{ __html: SLIDES[index].quote }} />
      <S.BaseSub>{SLIDES[index].sub}</S.BaseSub>
      <S.Dots>
        {SLIDES.map((_, i) => (
          <S.Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
        ))}
      </S.Dots>
    </S.BaseWrap>
  );
}