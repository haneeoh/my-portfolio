import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from '../styles/Hero.styles';

const slides = [
  {
    title: <>오프라인의 디테일을<br /><S.Highlight>웹 브라우저</S.Highlight> 위에 짓습니다.</>,
    sub: "7년간 공간을 기획해 온 시선으로 사용자 중심의 직관적인 UI/UX를 구현하는 프론트엔드 개발자 오하늬입니다."
  },
  {
    title: <>도면의 <S.Highlight>치수</S.Highlight>가<br />이제는 코드의 <S.Highlight>픽셀</S.Highlight>이 됩니다.</>,
    sub: "정교한 설계가 공간의 가치를 바꾸듯, 논리적인 구조로 웹의 사용자 경험을 설계합니다."
  },
  {
    title: <>넘치는 <S.Highlight>아이디어</S.Highlight>를<br />하나의 화면에 응축합니다.</>,
    sub: "ADHD에서 비롯된 폭발적인 몰입력과 창의성은 복잡한 문제를 해결하는 저만의 가장 큰 무기입니다."
  }
];

const pageVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 }
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      // 💡 애니메이션 진행 중일 때는 화면이 내려가지 않도록 휠 스크롤을 완벽히 차단
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (isScrollingDown && current < slides.length - 1) {
        e.preventDefault(); 
        if (Math.abs(e.deltaY) > 30) {
          setIsAnimating(true);
          setCurrent(prev => prev + 1);
        }
      } else if (isScrollingUp && current > 0) {
        e.preventDefault();
        if (Math.abs(e.deltaY) > 30) {
          setIsAnimating(true);
          setCurrent(prev => prev - 1);
        }
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, [current, isAnimating]);

  return (
    <S.HeroContainer id="about" ref={heroRef}>
      <AnimatePresence>
        <motion.div
          key={current}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)} // 💡 잠금이 확실히 풀리도록 motion.div에 직접 부여
          style={{ 
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            top: 0,
            left: 0
          }}
        >
          <S.HeroSlide>
            <S.MainCopy>{slides[current].title}</S.MainCopy>
            <S.SubCopy>{slides[current].sub}</S.SubCopy>
          </S.HeroSlide>
        </motion.div>
      </AnimatePresence>

      <S.SliderControls>
        <button 
          type="button"
          onClick={() => {
            if (!isAnimating && current > 0) {
              setIsAnimating(true);
              setCurrent(current - 1);
            }
          }}
        >
          Prev
        </button>
        <S.SlideDots>
          {slides.map((_, i) => (
            <S.Dot 
              key={i} 
              $active={i === current} 
              onClick={() => {
                if (!isAnimating && i !== current) {
                  setIsAnimating(true);
                  setCurrent(i);
                }
              }} 
            />
          ))}
        </S.SlideDots>
        <button 
          type="button"
          onClick={() => {
            if (!isAnimating && current < slides.length - 1) {
              setIsAnimating(true);
              setCurrent(current + 1);
            }
          }}
        >
          Next
        </button>
      </S.SliderControls>

      <S.ScrollIndicator>Scroll Down ↓</S.ScrollIndicator>
    </S.HeroContainer>
  );
}