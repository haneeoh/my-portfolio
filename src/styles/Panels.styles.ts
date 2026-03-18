// src/styles/Panels.styles.ts
import styled, { css } from 'styled-components';

const MINT = '#00D1B2';
const BORDER = '#e8e5de';

/* ══════════════════════════════════════════════
   Base Panel
   ══════════════════════════════════════════════ */

export const BaseWrap = styled.div`padding: 0 24px;`;

export const BaseQuote = styled.div`
  font-size: clamp(17px, 2.4vw, 22px); font-weight: 600; color: #222;
  line-height: 1.6; letter-spacing: -0.01em;
`;

export const BaseSub = styled.div`
  font-size: 12px; color: #999; margin-top: 14px; line-height: 1.7; max-width: 440px;
`;

export const Dots = styled.div`display: flex; gap: 7px; margin-top: 18px;`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 7px; height: 7px; border-radius: 50%;
  background: ${({ $active }) => ($active ? MINT : '#ddd')};
  transition: background 0.25s;
  &:hover { background: ${({ $active }) => ($active ? MINT : '#bbb')}; }
`;

/* ══════════════════════════════════════════════
   Projects Panel — List
   ══════════════════════════════════════════════ */

export const ProjList = styled.div`
  padding: 0 24px; display: flex; flex-direction: column; justify-content: center; height: 100%;
`;

export const ProjItem = styled.div`
  padding: 16px 0; border-bottom: 0.5px solid ${BORDER}; cursor: pointer;
  display: flex; justify-content: space-between; align-items: center; transition: all 0.15s;
  &:first-child { border-top: 0.5px solid ${BORDER}; }
  &:hover { padding-left: 8px; }
  &:hover .proj-arrow { opacity: 1; color: ${MINT}; }
  &:hover .proj-title { color: ${MINT}; }
`;

export const ProjTitle = styled.div`font-size:15px;font-weight:600;color:#333;transition:color 0.2s;`;
export const ProjMeta = styled.div`font-size:11px;color:#999;margin-top:4px;letter-spacing:0.04em;`;
export const ProjArrow = styled.span`font-size:11px;color:#bbb;opacity:0;transition:all 0.2s;`;

/* ══════════════════════════════════════════════
   Projects Panel — Detail
   ══════════════════════════════════════════════ */

export const DetailWrap = styled.div`
  display: flex; flex-direction: column; height: 100%; position: relative;
`;

export const DetailTop = styled.div`
  padding: 14px 24px;
  border-bottom: 0.5px solid ${BORDER};
  flex-shrink: 0;
`;

export const OverviewRow = styled.div`
  display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;
`;

export const OverviewText = styled.div`
  font-size: 12px; color: #666; line-height: 1.7; flex: 1;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
`;

export const LinkRow = styled.div`display: flex; gap: 6px; flex-shrink: 0; align-items: flex-start;`;

export const LinkPill = styled.a<{ $variant?: 'default' | 'youtube' | 'primary' }>`
  display: inline-flex; align-items: center; gap: 4px; padding: 5px 14px;
  border-radius: 50px; text-decoration: none; font-size: 10px; font-weight: 600;
  letter-spacing: 0.04em; transition: all 0.2s; white-space: nowrap;
  ${({ $variant }) => {
    switch ($variant) {
      case 'youtube': return css`background:#FF0000;color:#fff;border:1px solid #FF0000;&:hover{background:#cc0000;}`;
      case 'primary': return css`background:${MINT};color:#fff;border:1px solid ${MINT};&:hover{background:#05BD9E;}`;
      default: return css`background:transparent;color:#555;border:1px solid #ddd;&:hover{border-color:#111;color:#111;}`;
    }
  }}
`;

/* ── 갤러리 ── */
export const GalleryArea = styled.div`
  flex: 1; overflow-x: auto; overflow-y: hidden;
  display: flex; align-items: center; gap: 10px; padding: 14px 24px;
  -webkit-overflow-scrolling: touch; scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  @media (min-width: 769px) {
    &:has(> *:hover) > * {
      transform: scale(0.85);
      opacity: 0.45;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    align-items: stretch;
    gap: 8px;
  }
`;

export const GalleryItem = styled.div`
  flex-shrink: 0; width: 200px; height: 140px;
  position: relative; cursor: pointer; border-radius: 3px; overflow: visible;
  transition: transform 0.35s ease, opacity 0.35s ease;

  @media (min-width: 769px) {
    &:hover {
      transform: scale(1.15) !important;
      opacity: 1 !important;
    }
    &:hover .gallery-label { opacity: 1; transform: translateY(0); }
  }

  img { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 3px; }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
  }
`;

export const GalleryLabel = styled.div`
  position: absolute; top: -22px; left: 0; right: 0;
  font-size: 10px; color: #555; font-weight: 500; letter-spacing: 0.02em;
  opacity: 0; transform: translateY(4px); transition: all 0.25s ease;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; pointer-events: none;
`;

export const GalleryNum = styled.span`
  position: absolute; bottom: 5px; right: 7px;
  font-size: 9px; color: rgba(255,255,255,0.7); font-weight: 500;
`;

/* ── Detail 하단 바 ── */
export const DetailBottom = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 6px 24px 10px; flex-shrink: 0; border-top: 0.5px solid ${BORDER};
`;

export const DetailBtn = styled.button`
  font-size: 10px; color: #bbb; letter-spacing: 0.06em; transition: color 0.2s;
  &:hover { color: ${MINT}; }
`;

export const DetailHint = styled.span`font-size: 9px; color: #ccc; letter-spacing: 0.06em;`;

/* ══════════════════════════════════════════════
   Troubleshooting — Right Side (desktop)
   ══════════════════════════════════════════════ */

export const TroubleSideLabel = styled.div`
  font-size: 10px; color: ${MINT}; letter-spacing: 0.12em; text-transform: uppercase;
  font-weight: 600; margin-bottom: 14px;
`;

export const TroubleBlock = styled.div`
  margin-bottom: 30px;
  &:last-child { margin-bottom: 0; }
`;

export const TroubleNum = styled.div`
  font-size: 9px; color: #bbb; letter-spacing: 0.08em; margin-bottom: 4px;
`;

export const TroubleTitle = styled.div`
  font-size: 12px; font-weight: 600; color: #222; margin-bottom: 10px; line-height: 1.4;
`;

export const TroubleProb = styled.div`
  padding: 10px; border-left: 2px solid #d4836b; margin-bottom: 6px;
`;

export const TroubleSol = styled.div`
  padding: 10px; border-left: 2px solid ${MINT}; margin-bottom: 6px;
`;

export const TroubleTag = styled.div<{ $isProblem?: boolean }>`
  font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;
  color: ${({ $isProblem }) => ($isProblem ? '#d4836b' : MINT)};
`;

export const TroubleText = styled.div`font-size: 12px; line-height: 1.7; color: #666;`;

/* ══════════════════════════════════════════════
   Troubleshooting — Mobile Bottom Sheet
   ══════════════════════════════════════════════ */

export const MobileTroubleBtn = styled.button<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${MINT};
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 300;
    z-index: 8000;
    border: none;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease, opacity 0.2s ease;

    ${({ $open }) => $open && css`
      position: absolute;
      bottom: auto;
      top: 14px;
      right: 14px;
      background: transparent;
      color: #999;
      box-shadow: none;
      font-size: 24px;
      &:hover { color: #111; }
    `}
  }
`;

export const MobileTroubleBackdrop = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 7999;
  }
`;

export const MobileTroubleSheet = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70vh;
    background: #faf8f5;
    border-radius: 20px 20px 0 0;
    z-index: 8000;
    padding: 48px 24px 24px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(100%)')};
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.1);
  }
`;

/* ══════════════════════════════════════════════
   Image Modal
   ══════════════════════════════════════════════ */

export const ModalOverlay = styled.div`
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px;
`;

export const ModalLabel = styled.div`
  font-size: 13px; color: rgba(255, 255, 255, 0.85); font-weight: 500; letter-spacing: 0.04em;
`;

export const ModalImage = styled.img`
  max-width: 80%; max-height: 75%; object-fit: contain; border-radius: 4px;
`;

export const ModalClose = styled.button`
  position: absolute; top: 24px; right: 24px; color: #fff; font-size: 1.6rem; opacity: 0.6;
  background: none; border: none; display: flex;
  &:hover { opacity: 1; }
`;

export const ModalArrow = styled.button`
  position: absolute; top: 50%; transform: translateY(-50%);
  background: none; border: none; color: #fff; padding: 16px; opacity: 0.4; transition: 0.2s;
  &:hover { opacity: 1; color: ${MINT}; }
`;

export const ModalCounter = styled.div`
  font-size: 12px; color: rgba(255, 255, 255, 0.5); font-weight: 300; letter-spacing: 0.05em;
`;

/* ══════════════════════════════════════════════
   Contact Panel
   ══════════════════════════════════════════════ */

export const ContactWrap = styled.div`
  padding: 0 24px; display: flex; flex-direction: column; justify-content: center; height: 100%;
`;

export const ContactRow = styled.div`
  display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 0.5px solid ${BORDER};
  &:first-child { border-top: 0.5px solid ${BORDER}; }
`;

export const ContactLabel = styled.span`font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #999;`;
export const ContactValue = styled.span`
  font-size: 13px; color: #333; font-weight: 600; transition: color 0.2s;
  &:hover { color: ${MINT}; }
`;