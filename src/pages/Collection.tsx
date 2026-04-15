import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { projectData } from '../data/projects';

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
  transition: color 0.15s;

  &:hover {
    color: #141414;
  }
`;

// ─── Page header ───────────────────────────────────────────────────────────

const PageHeader = styled.div`
  padding: clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem) 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PageTitle = styled.h1`
  font-size: clamp(1.75rem, 4vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #141414;
`;

const PageCount = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #a09585;
`;

// ─── Filter bar ────────────────────────────────────────────────────────────

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  padding: clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 4vw, 4rem);
  border-bottom: 1px solid #e8e4de;
`;

const FilterBtn = styled.button<{ $active: boolean }>`
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? '#141414' : '#a09585')};
  padding: 0.4rem 1rem;
  border-bottom: 1.5px solid ${({ $active }) => ($active ? '#141414' : 'transparent')};
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover {
    color: #141414;
  }

  &:first-child {
    padding-left: 0;
  }
`;

const FilterDivider = styled.span`
  color: #e8e4de;
  font-size: 0.75rem;
  padding: 0 0.25rem;
`;

// ─── Grid ──────────────────────────────────────────────────────────────────

const GridWrap = styled.div`
  padding: clamp(2rem, 4vw, 4rem) clamp(2rem, 6vw, 6rem);
`;

const Grid = styled.div`
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

// ─── Product card ──────────────────────────────────────────────────────────

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

const PlaceholderNum = styled.div`
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

// ─── Footer ────────────────────────────────────────────────────────────────

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem clamp(1.5rem, 4vw, 4rem);
  border-top: 1px solid #e8e4de;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a09585;
`;

// ─── Filter options ─────────────────────────────────────────────────────────

const FILTERS = ['All', 'Team Project', 'Personal Project'] as const;
type Filter = (typeof FILTERS)[number];

// ─── Component ─────────────────────────────────────────────────────────────

export default function Collection() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filtered =
    activeFilter === 'All'
      ? projectData
      : projectData.filter((p) => p.category === activeFilter);

  return (
    <>
      <Nav>
        <NavBrand to="/">hanee oh</NavBrand>
        <NavLinks>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/info">Info</NavLink>
        </NavLinks>
      </Nav>

      <PageHeader>
        <PageTitle>Collection</PageTitle>
        <PageCount>{filtered.length} items</PageCount>
      </PageHeader>

      <FilterBar>
        {FILTERS.map((f, i) => (
          <>
            {i > 0 && <FilterDivider key={`div-${f}`}>/</FilterDivider>}
            <FilterBtn
              key={f}
              $active={activeFilter === f}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </FilterBtn>
          </>
        ))}
      </FilterBar>

      <GridWrap>
        <Grid>
          {filtered.map((p, i) => {
            const hasImage = p.images.length > 0;
            return (
              <ProductCard key={p.id} onClick={() => navigate(`/project/${p.id}`)}>
                <ProductImage $color={p.placeholderColor}>
                  {hasImage ? (
                    <ProductImg src={p.images[0]} alt={p.title} />
                  ) : (
                    <PlaceholderNum>0{i + 1}</PlaceholderNum>
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
        </Grid>
      </GridWrap>

      <Footer>
        <span>© 2025 hanee oh</span>
        <span>Seoul, KR</span>
      </Footer>
    </>
  );
}
