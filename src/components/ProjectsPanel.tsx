// src/components/ProjectsPanel.tsx
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { FiExternalLink, FiYoutube, FiGlobe, FiChevronLeft, FiChevronRight, FiX, FiPlus, FiMinus } from 'react-icons/fi';
import { projectData, type Project } from '../data/projects';
import * as S from '../styles/Panels.styles';

const IMG_LIMIT = 15;

const IMAGE_LABELS = [
  '메인 대시보드', '실시간 랭킹 페이지', '마이페이지 — 투자 내역',
  '매매 화면', '차트 분석 뷰', '유저 프로필', '설정 페이지',
  '모바일 메인', '모바일 랭킹', '모바일 마이페이지',
  '리더보드', '알림 센터', '시즌 결과', '온보딩', '로딩 화면',
];

function getLabel(index: number): string {
  return IMAGE_LABELS[index] || `Screen ${index + 1}`;
}

interface Props {
  selectedProject: Project | null;
  onOpenProject: (id: number) => void;
  onBack: () => void;
}

export default function ProjectsPanel({ selectedProject, onOpenProject, onBack }: Props) {
  const navigate = useNavigate();
  const [modalImg, setModalImg] = useState<number | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const project = selectedProject;

  useEffect(() => {
    document.body.style.overflow = modalImg !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalImg]);

  useEffect(() => {
    if (modalImg === null || !project) return;
    const imgs = project.images.slice(0, IMG_LIMIT);
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && modalImg < imgs.length - 1) setModalImg(modalImg + 1);
      if (e.key === 'ArrowLeft' && modalImg > 0) setModalImg(modalImg - 1);
      if (e.key === 'Escape') setModalImg(null);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [modalImg, project]);


  const nextProject = () => {
    if (!project) return;
    const idx = projectData.findIndex((p) => p.id === project.id);
    if (idx < projectData.length - 1) navigate(`/project/${projectData[idx + 1].id}`);
  };

  const getLinkVariant = (url: string) =>
    url.includes('youtube') ? ('youtube' as const) : ('primary' as const);

  /* ═══ 리스트 모드 ═══ */
  if (!project) {
    return (
      <S.ProjList>
        {projectData.map((p) => (
          <S.ProjItem key={p.id} onClick={() => onOpenProject(p.id)}>
            <div>
              <S.ProjTitle className="proj-title">{p.title}</S.ProjTitle>
              <S.ProjMeta>{p.techStack.join(' · ')} — {p.period}</S.ProjMeta>
            </div>
            <S.ProjArrow className="proj-arrow">→</S.ProjArrow>
          </S.ProjItem>
        ))}
      </S.ProjList>
    );
  }

  /* ═══ 디테일 모드 ═══ */
  const images = project.images.slice(0, IMG_LIMIT);
  const hasLinks = project.github || project.link;
  const hasTrouble = project.troubleshooting && project.troubleshooting.length > 0;
  const projIdx = projectData.findIndex((p) => p.id === project.id);
  const hasNext = projIdx < projectData.length - 1;

  return (
    <>
      <S.DetailWrap>
        <S.DetailTop>
          <S.OverviewRow>
            <S.OverviewText>{project.description}</S.OverviewText>
            {hasLinks && (
              <S.LinkRow>
                {project.github && (
                  <S.LinkPill href={project.github} target="_blank" rel="noreferrer" $variant="default">
                    <FiExternalLink size={10} /> GitHub
                  </S.LinkPill>
                )}
                {project.link && (
                  <S.LinkPill href={project.link} target="_blank" rel="noreferrer" $variant={getLinkVariant(project.link)}>
                    {project.link.includes('youtube')
                      ? <><FiYoutube size={10} /> Demo</>
                      : <><FiGlobe size={10} /> Visit</>
                    }
                  </S.LinkPill>
                )}
              </S.LinkRow>
            )}
          </S.OverviewRow>
        </S.DetailTop>

        <S.GalleryArea>
          {images.map((imgUrl, i) => (
            <S.GalleryItem key={i} onClick={() => setModalImg(i)}>
              <S.GalleryLabel className="gallery-label">{getLabel(i)}</S.GalleryLabel>
              <img src={imgUrl} alt={`${project.title} ${i + 1}`} loading="lazy" />
              <S.GalleryNum>{i + 1}</S.GalleryNum>
            </S.GalleryItem>
          ))}
        </S.GalleryArea>

        <S.DetailBottom>
          <S.DetailBtn
            onClick={() => navigate(`/project/${projectData[projIdx - 1].id}`)}
            style={{ visibility: projIdx > 0 ? 'visible' : 'hidden' }}
          >
            ← Prev
          </S.DetailBtn>
          <S.DetailBtn onClick={onBack}>All projects</S.DetailBtn>
          <S.DetailBtn
            onClick={nextProject}
            style={{ visibility: hasNext ? 'visible' : 'hidden' }}
          >
            Next →
          </S.DetailBtn>
        </S.DetailBottom>
      </S.DetailWrap>

      {/* ═══ 모바일: Troubleshooting 바텀시트 ═══ */}
      {hasTrouble && createPortal(
        <>
          {/* + 버튼 (시트 닫혀있을 때) */}
          {!sheetOpen && (
            <S.MobileTroubleBtn $open={false} onClick={() => setSheetOpen(true)}>
              <FiPlus />
            </S.MobileTroubleBtn>
          )}

          {/* 백드롭 */}
          {sheetOpen && (
            <S.MobileTroubleBackdrop onClick={() => setSheetOpen(false)} />
          )}

          {/* 바텀 시트 */}
          <S.MobileTroubleSheet $open={sheetOpen}>
            {/* − 버튼 (시트 안 우측 상단) */}
            <S.MobileTroubleBtn $open={true} onClick={() => setSheetOpen(false)}>
              <FiMinus />
            </S.MobileTroubleBtn>

            <S.TroubleSideLabel>Troubleshooting</S.TroubleSideLabel>
            {project.troubleshooting!.map((t, i) => (
              <S.TroubleBlock key={i}>
                <S.TroubleNum>{String(i + 1).padStart(2, '0')}</S.TroubleNum>
                <S.TroubleTitle>{t.title}</S.TroubleTitle>
                <S.TroubleProb>
                  <S.TroubleTag $isProblem>Problem</S.TroubleTag>
                  <S.TroubleText>{t.problem}</S.TroubleText>
                </S.TroubleProb>
                <S.TroubleSol>
                  <S.TroubleTag>Solution</S.TroubleTag>
                  <S.TroubleText>{t.solution}</S.TroubleText>
                </S.TroubleSol>
              </S.TroubleBlock>
            ))}
          </S.MobileTroubleSheet>
        </>,
        document.body
      )}

      {/* ═══ 이미지 모달 ═══ */}
      {modalImg !== null && createPortal(
        <S.ModalOverlay onClick={() => setModalImg(null)}>
          <S.ModalClose aria-label="닫기" onClick={() => setModalImg(null)}><FiX /></S.ModalClose>
          {modalImg > 0 && (
            <S.ModalArrow style={{ left: 16 }} aria-label="이전"
              onClick={(e) => { e.stopPropagation(); setModalImg(modalImg - 1); }}>
              <FiChevronLeft size={32} />
            </S.ModalArrow>
          )}
          <S.ModalLabel>{getLabel(modalImg)}</S.ModalLabel>
          <S.ModalImage src={images[modalImg]} alt={`${project.title} ${modalImg + 1}`}
            onClick={(e) => e.stopPropagation()} />
          <S.ModalCounter>{modalImg + 1} / {images.length}</S.ModalCounter>
          {modalImg < images.length - 1 && (
            <S.ModalArrow style={{ right: 16 }} aria-label="다음"
              onClick={(e) => { e.stopPropagation(); setModalImg(modalImg + 1); }}>
              <FiChevronRight size={32} />
            </S.ModalArrow>
          )}
        </S.ModalOverlay>,
        document.body
      )}
    </>
  );
}