import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #e8e4de;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1.5rem, 4vw, 4rem);
  height: 52px;
`;

const NavBrand = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #141414;
`;

const NavLink = styled(Link)`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a8075;
  transition: color 0.15s;

  &:hover {
    color: #141414;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.5rem;
`;

// ─── About ─────────────────────────────────────────────────────────────────

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #e8e4de;
  min-height: 60vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionLeft = styled.div`
  padding: clamp(3rem, 6vw, 6rem) clamp(2rem, 4vw, 4rem);
  border-right: 1px solid #e8e4de;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #e8e4de;
  }
`;

const SectionLabel = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a09585;
  margin-bottom: 3rem;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Stat = styled.div``;

const StatNum = styled.div`
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: #141414;
`;

const StatDesc = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a09585;
  margin-top: 0.5rem;
  line-height: 1.7;
`;

const SectionRight = styled.div`
  padding: clamp(3rem, 6vw, 6rem) clamp(2rem, 4vw, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutPara = styled.p`
  font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
  line-height: 1.85;
  color: #3a3530;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StackTag = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 0.875rem;
  border: 1px solid #e8e4de;
  color: #8a8075;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: #c05c3a;
    color: #c05c3a;
  }
`;

// ─── Contact ───────────────────────────────────────────────────────────────

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #e8e4de;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactLeft = styled(SectionLeft)``;

const ContactRight = styled(SectionRight)`
  justify-content: flex-start;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  display: block;
  font-size: clamp(1.125rem, 2.5vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #141414;
  transition: color 0.15s;
  line-height: 1.3;

  &:hover {
    color: #c05c3a;
  }
`;

const ContactLinkMuted = styled(ContactLink)`
  color: #c8c0b5;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem clamp(1.5rem, 4vw, 4rem);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a09585;
`;

export default function Info() {
  return (
    <>
      <Nav>
        <NavBrand to="/">hanee oh</NavBrand>
        <NavLinks>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/info">Info</NavLink>
        </NavLinks>
      </Nav>

      {/* ─ About ─ */}
      <AboutSection>
        <SectionLeft>
          <SectionLabel>About</SectionLabel>
          <Stats>
            <Stat>
              <StatNum>7</StatNum>
              <StatDesc>Years<br />Interior Design<br />& Construction</StatDesc>
            </Stat>
            <Stat>
              <StatNum>2+</StatNum>
              <StatDesc>Years<br />Frontend<br />Development</StatDesc>
            </Stat>
          </Stats>
        </SectionLeft>
        <SectionRight>
          <AboutText>
            <AboutPara>
              공간을 설계할 때는 동선, 비율, 사용자의 경험을 먼저 생각했습니다.
              지금은 그 시선으로 웹을 만듭니다.
            </AboutPara>
            <AboutPara>
              설계와 시공을 모두 해온 경험 덕분에, 기획부터 실행까지
              혼자 끝낼 수 있습니다. 코드도 결국 공간을 짓는 일입니다.
            </AboutPara>
          </AboutText>
          <StackList>
            {['React', 'TypeScript', 'JavaScript', 'Styled-Components', 'Astro', 'Vite', 'WebSocket'].map((s) => (
              <StackTag key={s}>{s}</StackTag>
            ))}
          </StackList>
        </SectionRight>
      </AboutSection>

      {/* ─ Contact ─ */}
      <ContactSection>
        <ContactLeft>
          <SectionLabel>Contact</SectionLabel>
        </ContactLeft>
        <ContactRight>
          <ContactLink href="mailto:honey9473@gmail.com">
            honey9473@gmail.com
          </ContactLink>
          <ContactLinkMuted href="#" target="_blank" rel="noreferrer">
            github.com/haneeoh
          </ContactLinkMuted>
        </ContactRight>
      </ContactSection>

      <Footer>
        <span>© 2025 hanee oh</span>
        <span>Seoul, KR</span>
      </Footer>
    </>
  );
}
