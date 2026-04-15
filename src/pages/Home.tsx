import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { projectData } from '../data/projects';

// ─── Nav ───────────────────────────────────────────────────────────────────

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

const NavBrand = styled.button`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #141414;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.5rem;
`;

const NavLink = styled(Link)`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a8075;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #141414;
  }
`;

// ─── Hero ──────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  min-height: calc(100vh - 100px);
  border-bottom: 1px solid #e8e4de;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem) clamp(2rem, 4vw, 4rem);
`;

const HeroMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const HeroBadge = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a09585;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 13vw, 17rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 0.88;
  color: #141414;
`;

const HeroTitleAccent = styled.span`
  font-style: italic;
  color: #c05c3a;
`;

const HeroBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: clamp(2rem, 4vw, 3rem);
  border-top: 1px solid #e8e4de;
  margin-top: clamp(2rem, 4vw, 3rem);
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const HeroDesc = styled.p`
  font-size: clamp(0.875rem, 1.3vw, 1rem);
  line-height: 1.75;
  color: #8a8075;
  max-width: 420px;
`;

const HeroScrollBtn = styled.button`
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #141414;
  padding-bottom: 2px;
  border-bottom: 1.5px solid #141414;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: #c05c3a;
    border-color: #c05c3a;
  }
`;

// ─── Collection grid ────────────────────────────────────────────────────────

const CollectionSection = styled.section`
  padding: clamp(2rem, 4vw, 4rem) clamp(1.5rem, 4vw, 4rem);
  border-bottom: 1px solid #e8e4de;
`;

const CollectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
`;

const CollectionHeaderLabel = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #141414;
`;

const CollectionCount = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #a09585;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #e8e4de;
  border: 1px solid #e8e4de;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.article`
  background: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover img {
    transform: scale(1.04);
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const HoverBtn = styled.div`
  background: #fff;
  color: #141414;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.75rem 1.75rem;
  white-space: nowrap;
`;

const ProductImage = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  aspect-ratio: 5 / 4;
  position: relative;
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
`;

const ProductPlaceholderNum = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 1;
  color: rgba(255, 255, 255, 0.15);
  user-select: none;
`;

const ProductInfo = styled.div`
  padding: 1rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
`;

const ProductCategory = styled.div`
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a09585;
`;

const ProductTitle = styled.h3`
  font-size: clamp(0.875rem, 1.5vw, 1.0625rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #141414;
  line-height: 1.3;
`;

const ProductStack = styled.div`
  font-size: 0.6875rem;
  color: #a09585;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const ViewAllRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ViewAllBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #141414;
  padding: 0.875rem 2rem;
  border: 1.5px solid #141414;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: #141414;
    color: #fff;
  }
`;

// ─── Footer ────────────────────────────────────────────────────────────────

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

// ─── Component ─────────────────────────────────────────────────────────────

export default function Home() {
  const navigate = useNavigate();
  const collectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ─ Nav ─ */}
      <Nav>
        <NavBrand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          hanee oh
        </NavBrand>
        <NavLinks>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/info">Info</NavLink>
        </NavLinks>
      </Nav>

      {/* ─ Hero ─ */}
      <HeroSection>
        <HeroMain>
          <HeroBadge>Frontend Developer — Seoul, KR</HeroBadge>
          <HeroTitle>
            hanee<br />
            <HeroTitleAccent>oh.</HeroTitleAccent>
          </HeroTitle>
        </HeroMain>
        <HeroBottom>
          <HeroDesc>
            7년간 공간을 설계하고 시공해 온 시선으로, 이제는 웹을 만듭니다.<br />
            도면의 치수가 픽셀이 되고, 동선이 사용자 경험이 됩니다.
          </HeroDesc>
          <HeroScrollBtn onClick={() => collectionRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            View Collection ↓
          </HeroScrollBtn>
        </HeroBottom>
      </HeroSection>

      {/* ─ Collection ─ */}
      <CollectionSection ref={collectionRef}>
        <CollectionHeader>
          <CollectionHeaderLabel>Collection</CollectionHeaderLabel>
          <CollectionCount>{projectData.length} items</CollectionCount>
        </CollectionHeader>
        <ProductGrid>
          {projectData.slice(0, 3).map((p, i) => {
            const hasImage = p.images.length > 0;
            return (
              <ProductCard key={p.id} onClick={() => navigate(`/project/${p.id}`)}>
                <ProductImage $color={p.placeholderColor}>
                  {hasImage ? (
                    <ProductImg src={p.images[0]} alt={p.title} />
                  ) : (
                    <ProductPlaceholderNum>0{i + 1}</ProductPlaceholderNum>
                  )}
                  <HoverOverlay>
                    <HoverBtn>View Detail</HoverBtn>
                  </HoverOverlay>
                </ProductImage>
                <ProductInfo>
                  <ProductCategory>{p.category} — {p.period}</ProductCategory>
                  <ProductTitle>{p.title}</ProductTitle>
                  <ProductStack>{p.techStack.slice(0, 3).join(' · ')}</ProductStack>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductGrid>
        <ViewAllRow>
          <ViewAllBtn to="/collection">View All Collection →</ViewAllBtn>
        </ViewAllRow>
      </CollectionSection>

      {/* ─ Footer ─ */}
      <Footer>
        <span>© 2025 hanee oh</span>
        <span>Seoul, KR</span>
      </Footer>
    </>
  );
}
