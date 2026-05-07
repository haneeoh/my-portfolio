import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Nav bar ───────────────────────────────────────────────────────────────

const NavBar = styled.header`
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

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavSlot = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a8075;
`;

const MenuBtn = styled.button`
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #141414;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #c05c3a;
  }
`;

// ─── Blob layer ────────────────────────────────────────────────────────────

const BlobLayer = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 200;
  filter: url(#goo);
  pointer-events: none;
`;

const BlobCircle = styled(motion.div)<{ $size: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: #141414;
  transform-origin: center;
`;

// ─── Menu overlay ──────────────────────────────────────────────────────────

const MenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 201;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(2rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem);
`;

const MenuHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1.5rem, 4vw, 4rem);
`;

const MenuBrand = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #fff;
`;

const CloseBtn = styled.button`
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #fff;
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const MenuItem = styled(motion.create(Link))`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.4rem 0;

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  &:hover {
    color: #c05c3a;
  }
`;

const MenuNum = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #c05c3a;
  margin-bottom: 0.5rem;
`;

// ─── Blob config ───────────────────────────────────────────────────────────

const BLOBS = [
  { style: { top: '-30%', right: '-15%' }, size: '85vmax', delay: 0 },
  { style: { top: '5%', right: '8%' }, size: '60vmax', delay: 0.06 },
  { style: { top: '-10%', left: '35%' }, size: '55vmax', delay: 0.11 },
  { style: { top: '30%', right: '-8%' }, size: '65vmax', delay: 0.09 },
  { style: { bottom: '-15%', right: '25%' }, size: '60vmax', delay: 0.17 },
  { style: { bottom: '5%', left: '-10%' }, size: '70vmax', delay: 0.14 },
];

const MENU_ITEMS = [
  { num: '01', label: 'Home', to: '/' },
  { num: '02', label: 'Collection', to: '/collection' },
  { num: '03', label: 'Info', to: '/info' },
];

// ─── Component ─────────────────────────────────────────────────────────────

interface NavProps {
  rightSlot?: React.ReactNode;
}

export default function Nav({ rightSlot }: NavProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* SVG Goo filter */}
      <svg style={{ position: 'fixed', width: 0, height: 0, zIndex: -1 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
            />
          </filter>
        </defs>
      </svg>

      <NavBar>
        <NavBrand onClick={() => navigate('/')}>hanee oh</NavBrand>
        <NavRight>
          {rightSlot && <NavSlot>{rightSlot}</NavSlot>}
          <MenuBtn onClick={() => setMenuOpen(true)}>Menu</MenuBtn>
        </NavRight>
      </NavBar>

      {/* Blob layer */}
      <AnimatePresence>
        {menuOpen && (
          <BlobLayer
            key="blobs"
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }}
          >
            {BLOBS.map((blob, i) => (
              <BlobCircle
                key={i}
                $size={blob.size}
                style={blob.style as React.CSSProperties}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{
                  scale: 1.5,
                  transition: { duration: 0.45, delay: i * 0.04, ease: [0.76, 0, 0.24, 1] },
                }}
                transition={{
                  delay: blob.delay,
                  duration: 0.55,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            ))}
          </BlobLayer>
        )}
      </AnimatePresence>

      {/* Menu content */}
      <AnimatePresence>
        {menuOpen && (
          <MenuOverlay
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ delay: 0.38, duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          >
            <MenuHeader>
              <MenuBrand>hanee oh</MenuBrand>
              <CloseBtn onClick={() => setMenuOpen(false)}>Close ×</CloseBtn>
            </MenuHeader>

            <MenuItems onClick={(e) => e.stopPropagation()}>
              {MENU_ITEMS.map((item, i) => (
                <MenuItem
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 + i * 0.07, duration: 0.4 }}
                >
                  <MenuNum>{item.num}</MenuNum>
                  {item.label}
                </MenuItem>
              ))}
            </MenuItems>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
