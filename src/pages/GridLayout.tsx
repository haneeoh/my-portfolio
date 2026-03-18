// src/pages/GridLayout.tsx
import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { projectData } from '../data/projects';
import * as G from '../styles/Grid.styles';
import * as S from '../styles/Panels.styles';

import BasePanel from '../components/BasePanel';
import ProjectsPanel from '../components/ProjectsPanel';
import ContactPanel from '../components/ContactPanel';

const PANELS = ['base', 'projects', 'contact'] as const;
type PanelType = (typeof PANELS)[number];

function panelFromPath(path: string): { panel: PanelType; projectId: number | null } {
  if (path.startsWith('/project/')) {
    const id = Number(path.split('/')[2]);
    return { panel: 'projects', projectId: isNaN(id) ? null : id };
  }
  if (path === '/projects') return { panel: 'projects', projectId: null };
  if (path === '/contact') return { panel: 'contact', projectId: null };
  return { panel: 'base', projectId: null };
}

export default function GridLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const { panel: activePanel, projectId } = panelFromPath(location.pathname);
  const project = projectId !== null ? projectData.find((p) => p.id === projectId) ?? null : null;
  const isDetail = activePanel === 'projects' && project !== null;
  const panelIndex = PANELS.indexOf(activePanel);

  const goPanel = useCallback((p: PanelType) => {
    if (p === 'base') navigate('/');
    else if (p === 'projects') navigate('/projects');
    else navigate('/contact');
  }, [navigate]);

  const openProject = useCallback((id: number) => navigate(`/project/${id}`), [navigate]);
  const backToList = useCallback(() => navigate('/projects'), [navigate]);

  const titleText = isDetail
    ? project?.title ?? ''
    : activePanel === 'base'
    ? 'Frontend developer'
    : activePanel === 'projects'
    ? 'Selected projects'
    : "Let's connect";

  const hasTrouble = isDetail && project?.troubleshooting && project.troubleshooting.length > 0;
  const currentYear = new Date().getFullYear();
  

  return (
<G.Grid >

      {/* ═══ Row 1 ═══ */}
      <G.CellLogo>hani oh</G.CellLogo>
      <G.CellTitle><G.TitleText>{titleText}</G.TitleText></G.CellTitle>
      <G.CellNav>
        {PANELS.map((p) => (
          <G.NavBtn key={p} $active={activePanel === p} onClick={() => goPanel(p)}>
            {p === 'base' ? 'Base' : p === 'projects' ? 'Projects' : 'Contact'}
          </G.NavBtn>
        ))}
      </G.CellNav>

      {/* ═══ Row 2 ═══ */}
      <G.MetaLabel>
        {isDetail ? 'Role' : activePanel === 'base' ? 'Role' : activePanel === 'projects' ? 'Count' : 'Location'}
      </G.MetaLabel>
      <G.MetaValue>
        {isDetail
          ? project?.role.split('/')[0]?.trim()
          : activePanel === 'base'
          ? 'Frontend lead'
          : activePanel === 'projects'
          ? `${projectData.length} projects`
          : 'Seoul, KR'}
      </G.MetaValue>
      <G.MetaRight>
        {isDetail ? project?.techStack.slice(0, 2).join(' · ') : ''}
      </G.MetaRight>
      <G.MetaFar>
        {isDetail ? project?.period : ''}
      </G.MetaFar>

      {/* ═══ Row 3–5 Left ═══ */}
      <G.SideLeft>
        {isDetail ? (
          <>
            <G.SideLabel>Team</G.SideLabel>
            <G.SideValue>{project?.team}</G.SideValue>
            <G.SideLabel>Period</G.SideLabel>
            <G.SideValue>{project?.period}</G.SideValue>
            <G.SideLabel>Stack</G.SideLabel>
            <G.SideValue>{project?.techStack.join(', ')}</G.SideValue>
          </>
        ) : activePanel === 'base' ? (
          <>
            <G.SideLabel>Experience</G.SideLabel>
            <G.SideValue>7 yrs</G.SideValue>
            <G.SideLabel>Background</G.SideLabel>
            <G.SideValue>Space planning</G.SideValue>
          </>
        ) : activePanel === 'projects' ? (
          <>
            <G.SideLabel>Status</G.SideLabel>
            <G.SideValue>Available</G.SideValue>
          </>
        ) : (
          <>
            <G.SideLabel>Status</G.SideLabel>
            <G.SideValue>Open to work</G.SideValue>
          </>
        )}
      </G.SideLeft>

      {/* ═══ Row 3–5 Center ═══ */}
      <G.CenterWrap>
        <G.CenterTrack $index={panelIndex}>
          <G.CenterPanel><BasePanel /></G.CenterPanel>
          <G.CenterPanel>
            <ProjectsPanel
            key={project?.id ?? 'list'}
              selectedProject={project}
              onOpenProject={openProject}
              onBack={backToList}
            />
          </G.CenterPanel>
          <G.CenterPanel><ContactPanel /></G.CenterPanel>
        </G.CenterTrack>
      </G.CenterWrap>

      {/* ═══ Row 3–5 Right — Troubleshooting (세로 스크롤) ═══ */}
      <G.SideRight>
        {isDetail && hasTrouble ? (
          <>
            <S.TroubleSideLabel>Troubleshooting</S.TroubleSideLabel>
            {project!.troubleshooting!.map((t, i) => (
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
          </>
        ) : isDetail ? (
          <G.SideBtn onClick={backToList}>← Back</G.SideBtn>
        ) : null}
      </G.SideRight>

      {/* ═══ Row 6 ═══ */}
      <G.FootLeft>© {currentYear}</G.FootLeft>
      <G.FootCenter>{isDetail ? 'scroll to explore →' : ''}</G.FootCenter>
      <G.FootRight>Seoul, KR</G.FootRight>
    </G.Grid>
  );
}