// src/styles/Grid.styles.ts
import styled, { css } from 'styled-components';

const MINT = '#00D1B2';
const BORDER = '#e8e5de';

export const Grid = styled.div`
  width: 100%; height: 100vh; background: #faf8f5;
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 1.2fr 0.8fr;
  grid-template-rows: 52px 52px 1fr 1fr 1fr 40px;
  overflow: hidden;
  & > * { border-right: 0.5px solid ${BORDER}; border-bottom: 0.5px solid ${BORDER}; }
  & > *:nth-child(4n) { border-right: none; }
  & > *:nth-last-child(-n+4) { border-bottom: none; }
  @media (max-width: 768px) {
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 48px 42px 1fr 38px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}
`;

/* ═══ Row 1 ═══ */

export const CellLogo = styled.div`
  padding: 0 16px; display: flex; align-items: center;
  font-size: 14px; font-weight: 700; color: #111; letter-spacing: -0.02em;
`;

export const CellTitle = styled.div`
  padding: 0 20px; display: flex; align-items: center; overflow: hidden;
  @media (max-width: 768px) { display: none; }
`;

export const TitleText = styled.span`
  font-size: 13px; font-weight: 600; color: #111; letter-spacing: -0.01em;
  text-transform: uppercase; white-space: nowrap; transition: all 0.35s ease;
`;

export const CellNav = styled.div`
  grid-column: 3 / 5; padding: 0 16px;
  display: flex; align-items: center; justify-content: flex-end; gap: 20px;
  @media (max-width: 768px) { grid-column: 2/3; gap: 14px; padding: 0 14px; }
`;

export const NavBtn = styled.button<{ $active: boolean }>`
  font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
  color: ${({ $active }) => ($active ? MINT : '#bbb')};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: color 0.2s;
  &:hover { color: ${({ $active }) => ($active ? MINT : '#888')}; }
`;

/* ═══ Row 2 ═══ */

const MetaBase = css`
  padding: 0 16px; display: flex; align-items: center;
  @media (max-width: 768px) { padding: 0 14px; }
`;

export const MetaLabel = styled.div`${MetaBase} font-size:10px;color:#bbb;letter-spacing:0.1em;text-transform:uppercase;`;
export const MetaValue = styled.div`${MetaBase} font-size:12px;font-weight:600;color:#333;transition:all 0.3s;`;
export const MetaRight = styled.div`${MetaBase} font-size:10px;color:${MINT};justify-content:flex-end;letter-spacing:0.06em;font-weight:500;`;
export const MetaFar = styled.div`${MetaBase} font-size:10px;color:#bbb;justify-content:flex-end;`;

/* ═══ Row 3–5 ═══ */

export const SideLeft = styled.div`
  grid-row: 3 / 6; padding: 16px;
  display: flex; flex-direction: column; justify-content: flex-start;
  @media (max-width: 768px) { display: none; }
`;

export const SideLabel = styled.div`font-size:9px;color:#bbb;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:3px;`;
export const SideValue = styled.div`font-size:11px;color:#444;font-weight:600;margin-bottom:14px;`;

export const CenterWrap = styled.div`
  grid-column: 2 / 4; grid-row: 3 / 6; overflow: hidden; position: relative;
  @media (max-width: 768px) { grid-column: 1/3; grid-row: 3/4; }
`;

export const CenterTrack = styled.div<{ $index: number; $skip?: boolean }>`
  display: flex; height: 100%;
  transition: ${({ $skip }) => $skip ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'};
  transform: translateX(${({ $index }) => $index * -100}%);
`;

export const CenterPanel = styled.div`
  min-width: 100%; height: 100%; overflow: hidden;
  display: flex; flex-direction: column; justify-content: center;
  
  @media (max-width: 768px) {
    overflow-y: auto;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
  }
`;

export const SideRight = styled.div`
  grid-row: 3 / 6; padding: 16px 14px;
  display: flex; flex-direction: column; justify-content: flex-start;
  overflow-y: auto; scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  @media (max-width: 768px) { display: none; }
`;

export const SideBtn = styled.button`
  font-size:10px;color:#bbb;letter-spacing:0.06em;text-align:right;transition:color 0.2s;
  margin-bottom: 12px;
  &:hover{color:${MINT};}
`;

/* ═══ Row 6 ═══ */

export const FootLeft = styled.div`padding:0 16px;display:flex;align-items:center;font-size:9px;color:#ccc;`;
export const FootCenter = styled.div`
  grid-column:2/4;padding:0 16px;display:flex;align-items:center;justify-content:center;
  font-size:9px;color:${MINT};font-weight:500;letter-spacing:0.06em;
  @media(max-width:768px){grid-column:2/3;}
`;
export const FootRight = styled.div`padding:0 16px;display:flex;align-items:center;justify-content:flex-end;font-size:9px;color:#ccc;`;