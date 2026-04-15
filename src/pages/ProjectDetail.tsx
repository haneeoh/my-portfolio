import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const NavBack = styled.button`
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

// ─── Breadcrumb ────────────────────────────────────────────────────────────

const Breadcrumb = styled.div`
  padding: 0.875rem clamp(1.5rem, 4vw, 4rem);
  border-bottom: 1px solid #e8e4de;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a09585;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const BreadcrumbSep = styled.span`
  color: #ddd8d0;
`;

const BreadcrumbLink = styled.button`
  color: #a09585;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #141414;
  }
`;

// ─── Split layout ──────────────────────────────────────────────────────────

const SplitLayout = styled.div`
  display: flex;
  min-height: calc(100vh - 52px - 36px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResizeHandle = styled.div`
  width: 1px;
  background: #e8e4de;
  cursor: col-resize;
  flex-shrink: 0;
  position: relative;
  transition: background 0.15s;

  &::after {
    content: '';
    position: absolute;
    inset: 0 -8px;
  }

  &:hover {
    background: #c05c3a;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// ─── Left: image panel ─────────────────────────────────────────────────────

const ImagePanel = styled.div`
  position: sticky;
  top: 88px;
  height: calc(100vh - 88px);
  flex-shrink: 0;
  padding: clamp(1rem, 2vw, 1.5rem);

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    height: 65vw;
    width: 100% !important;
    border-bottom: 1px solid #e8e4de;
    padding: 0.75rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImagePlaceholder = styled.div<{ $color: string }>`
  width: 100%;
  height: 100%;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: flex-end;
  padding: clamp(1.5rem, 3vw, 3rem);
`;

const PlaceholderLabel = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const ImageNav = styled.div`
  position: absolute;
  bottom: clamp(1rem, 2vw, 1.5rem);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const ImgArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: #141414;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  z-index: 2;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #fff;
  }
`;

const ImgArrowLeft = styled(ImgArrow)`
  left: 0.75rem;
`;

const ImgArrowRight = styled(ImgArrow)`
  right: 0.75rem;
`;

// ─── Modal ─────────────────────────────────────────────────────────────────

const ModalOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(250, 248, 245, 0.72);
  backdrop-filter: blur(28px) saturate(1.4);
  -webkit-backdrop-filter: blur(28px) saturate(1.4);
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 clamp(1.5rem, 4vw, 4rem);
  height: 52px;
  border-bottom: 1px solid #e8e4de;
  flex-shrink: 0;
`;

const ModalCounter = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a09585;
`;

const ModalTitle = styled.div`
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #141414;
`;

const ModalClose = styled.button`
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a8075;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #141414;
  }
`;

const ModalBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: clamp(1.5rem, 3vw, 3rem);
`;

const ModalImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
`;

const ModalArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #e8e4de;
  color: #141414;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  cursor: pointer;
  z-index: 2;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: #141414;
    color: #c05c3a;
  }
`;

const ModalArrowLeft = styled(ModalArrow)`
  left: clamp(1rem, 2vw, 2rem);
`;

const ModalArrowRight = styled(ModalArrow)`
  right: clamp(1rem, 2vw, 2rem);
`;

const ModalBottom = styled.div`
  height: 52px;
  border-top: 1px solid #e8e4de;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const ImgNavBtn = styled.button<{ $active?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)'};
  cursor: pointer;
  transition: background 0.2s;
`;

// ─── Right: detail panel ───────────────────────────────────────────────────

const DetailPanel = styled.div`
  flex: 1;
  overflow-y: auto;
  min-width: 0;
`;

const DetailInner = styled.div`
  padding: clamp(2rem, 4vw, 4rem) clamp(1.75rem, 3.5vw, 3.5rem);
`;

const CollectionNum = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a09585;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h1`
  font-size: clamp(1.375rem, 2.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: #141414;
  margin-bottom: 0.5rem;
`;

const ProductSubtitle = styled.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a09585;
  margin-bottom: 2rem;
`;


// Specs
const SpecRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.625rem 0;
  border-bottom: 1px solid #f0ece6;

  &:first-child {
    border-top: 1px solid #f0ece6;
  }
`;

const SpecLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a09585;
`;

const SpecValue = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #141414;
  text-align: right;
  max-width: 60%;
`;

// Links
const LinksWrap = styled.div`
  margin: 1.75rem 0;
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.875rem 0;
  border-bottom: 1px solid #e8e4de;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #141414;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #c05c3a;
  }
`;

// Accordion
const AccordionItem = styled.div`
  border-bottom: 1px solid #e8e4de;
`;

const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #141414;
  cursor: pointer;
  text-align: left;
  transition: color 0.15s;

  &:hover {
    color: #c05c3a;
  }
`;

const AccordionIcon = styled.span<{ $open: boolean }>`
  font-size: 1.125rem;
  font-weight: 300;
  color: #a09585;
  transform: ${({ $open }) => ($open ? 'rotate(45deg)' : 'none')};
  transition: transform 0.2s;
  line-height: 1;
`;

const AccordionBody = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};
  padding-bottom: 1.5rem;
`;

const OverviewText = styled.p`
  font-size: 0.875rem;
  line-height: 1.85;
  color: #3a3530;

  & + & {
    margin-top: 1rem;
  }
`;

const TroubleBlock = styled.div`
  padding: 1.25rem 0;
  border-top: 1px solid #f0ece6;

  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const TroubleTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #141414;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const TroubleTag = styled.span<{ $problem?: boolean }>`
  display: inline-block;
  font-size: 0.5625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.25rem 0.625rem;
  background: ${({ $problem }) => ($problem ? '#fff0eb' : '#f0f5ee')};
  color: ${({ $problem }) => ($problem ? '#c05c3a' : '#4a7a5a')};
  margin-bottom: 0.5rem;
`;

const TroubleText = styled.p`
  font-size: 0.8125rem;
  line-height: 1.75;
  color: #3a3530;
  margin-bottom: 1rem;
`;

// ─── Accordion state helper ─────────────────────────────────────────────────

function Accordion({
  label,
  children,
  defaultOpen = false,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <AccordionItem>
      <AccordionHeader onClick={() => setOpen((v) => !v)}>
        {label}
        <AccordionIcon $open={open}>+</AccordionIcon>
      </AccordionHeader>
      <AccordionBody $open={open}>{children}</AccordionBody>
    </AccordionItem>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === Number(id));
  const index = projectData.findIndex((p) => p.id === Number(id));

  const [imgIndex, setImgIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [leftWidth, setLeftWidth] = useState(60);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pct = ((e.clientX - rect.left) / rect.width) * 100;
      // right panel min 40%, left panel min 25%
      setLeftWidth(Math.min(70, Math.max(30, pct)));
    };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImgIndex(0);
  }, [id]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowLeft')
        setImgIndex((i) => (i - 1 + (project?.images.length ?? 1)) % (project?.images.length ?? 1));
      if (e.key === 'ArrowRight')
        setImgIndex((i) => (i + 1) % (project?.images.length ?? 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, project]);

  if (!project) {
    navigate('/');
    return null;
  }

  const hasImages = project.images.length > 0;
  const hasTrouble = (project.troubleshooting?.length ?? 0) > 0;

  return (
    <>
      {/* ─ Nav ─ */}
      <Nav>
        <NavBrand onClick={() => navigate('/')}>hanee oh</NavBrand>
        <NavBack onClick={() => navigate('/')}>← Collection</NavBack>
      </Nav>

      {/* ─ Breadcrumb ─ */}
      <Breadcrumb>
        <BreadcrumbLink onClick={() => navigate('/')}>hanee oh</BreadcrumbLink>
        <BreadcrumbSep>/</BreadcrumbSep>
        <BreadcrumbLink onClick={() => navigate('/collection')}>Collection</BreadcrumbLink>
        <BreadcrumbSep>/</BreadcrumbSep>
        <span>{project.title}</span>
      </Breadcrumb>

      {/* ─ Split layout ─ */}
      <SplitLayout ref={containerRef}>
        {/* Left: image */}
        <ImagePanel style={{ width: `${leftWidth}%` }}>
          <ImageWrapper>
            {hasImages ? (
              <>
                <ProjectImg
                  src={project.images[imgIndex]}
                  alt={`${project.title} ${imgIndex + 1}`}
                  onClick={() => setModalOpen(true)}
                  style={{ cursor: 'zoom-in' }}
                />
                {project.images.length > 1 && (
                  <>
                    <ImgArrowLeft
                      onClick={() =>
                        setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)
                      }
                    >
                      ←
                    </ImgArrowLeft>
                    <ImgArrowRight
                      onClick={() =>
                        setImgIndex((i) => (i + 1) % project.images.length)
                      }
                    >
                      →
                    </ImgArrowRight>
                    <ImageNav>
                      {project.images.slice(0, 8).map((_, i) => (
                        <ImgNavBtn
                          key={i}
                          $active={i === imgIndex}
                          onClick={() => setImgIndex(i)}
                        />
                      ))}
                    </ImageNav>
                  </>
                )}
              </>
            ) : (
              <ImagePlaceholder $color={project.placeholderColor}>
                <PlaceholderLabel>{project.subtitle}</PlaceholderLabel>
              </ImagePlaceholder>
            )}
          </ImageWrapper>
        </ImagePanel>

        <ResizeHandle onMouseDown={() => { isDragging.current = true; }} />

        {/* Right: details */}
        <DetailPanel>
          <DetailInner>
            <CollectionNum>
              Collection {String(index + 1).padStart(2, '0')} — {project.category}
            </CollectionNum>
            <ProductTitle>{project.title}</ProductTitle>
            <ProductSubtitle>{project.subtitle}</ProductSubtitle>

            {/* Specs */}
            <SpecRow>
              <SpecLabel>Role</SpecLabel>
              <SpecValue>{project.role}</SpecValue>
            </SpecRow>
            {project.team && (
              <SpecRow>
                <SpecLabel>Team</SpecLabel>
                <SpecValue>{project.team}</SpecValue>
              </SpecRow>
            )}
            <SpecRow>
              <SpecLabel>Period</SpecLabel>
              <SpecValue>{project.period}</SpecValue>
            </SpecRow>
            <SpecRow>
              <SpecLabel>Stack</SpecLabel>
              <SpecValue>{project.techStack.join(', ')}</SpecValue>
            </SpecRow>

            {/* Links */}
            {(project.link || project.github) && (
              <LinksWrap>
                {project.link && (
                  <LinkBtn href={project.link} target="_blank" rel="noreferrer">
                    {project.link.includes('youtube') ? 'YouTube' : 'Visit Site'}
                    <span>↗</span>
                  </LinkBtn>
                )}
                {project.github && (
                  <LinkBtn href={project.github} target="_blank" rel="noreferrer">
                    View on GitHub <span>↗</span>
                  </LinkBtn>
                )}
              </LinksWrap>
            )}

            {/* Accordion */}
            <Accordion label="Overview" defaultOpen>
              {project.description.split('\n\n').map((para, i) => (
                <OverviewText key={i}>{para}</OverviewText>
              ))}
            </Accordion>

            {hasTrouble && (
              <Accordion label="Troubleshooting">
                {project.troubleshooting!.map((t, i) => (
                  <TroubleBlock key={i}>
                    <TroubleTitle>{t.title}</TroubleTitle>
                    <TroubleTag $problem>Problem</TroubleTag>
                    <TroubleText>{t.problem}</TroubleText>
                    <TroubleTag>Solution</TroubleTag>
                    <TroubleText>{t.solution}</TroubleText>
                  </TroubleBlock>
                ))}
              </Accordion>
            )}
          </DetailInner>
        </DetailPanel>
      </SplitLayout>

      {/* ─ Modal ─ */}
      {hasImages && (
        <ModalOverlay $open={modalOpen} onClick={() => setModalOpen(false)}>
          <ModalTop onClick={(e) => e.stopPropagation()}>
            <ModalCounter>
              {String(imgIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
            </ModalCounter>
            <ModalTitle>{project.title}</ModalTitle>
            <ModalClose onClick={() => setModalOpen(false)}>Close ×</ModalClose>
          </ModalTop>

          <ModalBody onClick={(e) => e.stopPropagation()}>
            <ModalImg
              src={project.images[imgIndex]}
              alt={`${project.title} ${imgIndex + 1}`}
            />
            {project.images.length > 1 && (
              <>
                <ModalArrowLeft
                  onClick={() =>
                    setImgIndex((i) => (i - 1 + project.images.length) % project.images.length)
                  }
                >
                  ←
                </ModalArrowLeft>
                <ModalArrowRight
                  onClick={() =>
                    setImgIndex((i) => (i + 1) % project.images.length)
                  }
                >
                  →
                </ModalArrowRight>
              </>
            )}
          </ModalBody>

          {project.images.length > 1 && (
            <ModalBottom onClick={(e) => e.stopPropagation()}>
              {project.images.slice(0, 8).map((_, i) => (
                <ImgNavBtn
                  key={i}
                  $active={i === imgIndex}
                  onClick={() => setImgIndex(i)}
                  style={{ background: i === imgIndex ? '#141414' : '#d8d2ca' }}
                />
              ))}
            </ModalBottom>
          )}
        </ModalOverlay>
      )}
    </>
  );
}
