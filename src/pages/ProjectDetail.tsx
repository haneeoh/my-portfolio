import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResizableBox, type ResizeCallbackData } from 'react-resizable';
import 'react-resizable/css/styles.css'; 
import { projectData } from '../data/projects';
import { FiExternalLink, FiYoutube, FiMaximize2, FiGlobe, FiChevronLeft, FiChevronRight, FiX, FiPlus } from 'react-icons/fi';

import * as S from '../styles/ProjectDetail.styles';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [leftWidth, setLeftWidth] = useState(window.innerWidth * 0.5);
  const [currentImgIndex, setCurrentImgIndex] = useState<number | null>(null);
  const [isContentOpen, setIsContentOpen] = useState(false);

  const project = projectData.find((p) => String(p.id) === id);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setLeftWidth(window.innerWidth * 0.5);
        setIsContentOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [id]);

  useEffect(() => {
    if (!project || !project.images) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentImgIndex === null) return;
      if (e.key === 'ArrowLeft' && currentImgIndex > 0) {
        setCurrentImgIndex(prev => (prev !== null ? prev - 1 : null));
      } 
      else if (e.key === 'ArrowRight' && currentImgIndex < (project.images?.length ?? 0) - 1) {
        setCurrentImgIndex(prev => (prev !== null ? prev + 1 : null));
      } 
      else if (e.key === 'Escape') {
        setCurrentImgIndex(null);
        setIsContentOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImgIndex, project, id]);

  if (!project) return <S.Loading>Loading Project...</S.Loading>;

  const onResize = (_e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
    setLeftWidth(size.width);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImgIndex !== null && currentImgIndex > 0) setCurrentImgIndex(currentImgIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImgIndex !== null && currentImgIndex < (project.images?.length || 0) - 1) setCurrentImgIndex(currentImgIndex + 1);
  };

  const isMobile = windowWidth <= 1024;

  return (
    <S.PageWrapper>
      <S.DetailHero>
        <div className="hero-content">
          <S.Title>{project.title}</S.Title>
          <S.LinkGroup>
            {project.github && <S.IconButton href={project.github} target="_blank"><FiExternalLink /> GitHub</S.IconButton>}
            {project.link && (
              <S.IconButton href={project.link} target="_blank" $primary>
                {project.link.includes('youtube') ? <><FiYoutube /> View Demo</> : <><FiGlobe /> Visit Site</>}
              </S.IconButton>
            )}
          </S.LinkGroup>
        </div>
      </S.DetailHero>

      <S.InfoGrid>
        <S.InfoBlock><S.InfoLabel>Role</S.InfoLabel><S.InfoValue>{project.role}</S.InfoValue></S.InfoBlock>
        <S.InfoBlock><S.InfoLabel>Tech Stack</S.InfoLabel><S.InfoValue>{project.techStack.join(' · ')}</S.InfoValue></S.InfoBlock>
        <S.InfoBlock><S.InfoLabel>Category</S.InfoLabel><S.InfoValue>Portfolio Project</S.InfoValue></S.InfoBlock>
      </S.InfoGrid>

      <S.SplitContainer>
        {isMobile && isContentOpen && <S.MobileBackdrop onClick={() => setIsContentOpen(false)} />}

        {!isMobile ? (
          <ResizableBox
            width={leftWidth}
            height={750}
            axis="x"
            resizeHandles={['e']}
            onResize={onResize}
            minConstraints={[300, 750]}
            maxConstraints={[windowWidth * 0.8, 750]}
          >
            <S.LeftScrollArea>
              <S.ImageStack>
                {project.images?.map((imgUrl, index) => (
                  <div key={index} style={{ position: 'relative' }}>
                    <S.ProjectImg src={imgUrl} alt={`Detail ${index + 1}`} onClick={() => setCurrentImgIndex(index)} />
                    <S.PageNumber>{index + 1} / {project.images?.length}</S.PageNumber>
                  </div>
                ))}
              </S.ImageStack>
              <S.ZoomHint><FiMaximize2 /> Click to expand</S.ZoomHint>
            </S.LeftScrollArea>
          </ResizableBox>
        ) : (
          <S.LeftScrollArea>
            {/* 💡 버튼 위치를 S.PageWrapper 바깥이나 하단으로 옮기기 위해 여기서 뺍니다. */}
            <S.ImageStack>
              {project.images?.map((imgUrl, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <S.ProjectImg src={imgUrl} alt={`Detail ${index + 1}`} onClick={() => setCurrentImgIndex(index)} />
                  <S.PageNumber>{index + 1} / {project.images?.length}</S.PageNumber>
                </div>
              ))}
            </S.ImageStack>
          </S.LeftScrollArea>
        )}

        <S.RightContentArea $isOpen={isContentOpen}>
          <S.SectionTitle>Project Overview</S.SectionTitle>
          <S.DescriptionText>{project.description}</S.DescriptionText>
          {project.troubleshooting?.map((t, i) => (
            <S.TroubleCard key={i}>
              <S.TroubleTitle>{t.title}</S.TroubleTitle>
              <S.TroubleBox $isProblem><S.TroubleLabel $isProblem>Problem</S.TroubleLabel>{t.problem}</S.TroubleBox>
              <S.TroubleBox><S.TroubleLabel>Solution</S.TroubleLabel>{t.solution}</S.TroubleBox>
            </S.TroubleCard>
          ))}
        </S.RightContentArea>
      </S.SplitContainer>

      {/* 💡 모바일 전용 토글 버튼: 이제 화면 하단 내비게이션 근처로 배치됩니다. */}
      {isMobile && (
        <S.MobileToggleButton onClick={() => setIsContentOpen(!isContentOpen)}>
          {isContentOpen ? <FiX /> : <FiPlus />}
        </S.MobileToggleButton>
      )}

      {currentImgIndex !== null && (
        <S.ModalOverlay onClick={() => setCurrentImgIndex(null)}>
          <S.CloseBtn><FiX /></S.CloseBtn>
          {currentImgIndex > 0 && (
            <S.ArrowBtn style={{ left: '20px' }} onClick={handlePrev}>
              <FiChevronLeft size={40} />
            </S.ArrowBtn>
          )}
          <S.ModalImage src={project.images?.[currentImgIndex]} alt="Enlarged view" />
          {currentImgIndex < (project.images?.length ?? 0) - 1 && (
            <S.ArrowBtn style={{ right: '20px' }} onClick={handleNext}>
              <FiChevronRight size={40} />
            </S.ArrowBtn>
          )}
          <S.ModalCounter>{currentImgIndex + 1} / {project.images?.length}</S.ModalCounter>
        </S.ModalOverlay>
      )}
    </S.PageWrapper>
  );
}