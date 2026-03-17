import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../data/projects';

// 💡 S. 접두사 스타일 적용!
import * as S from '../styles/Home.styles';

export default function Home() {
  return (
    <S.HomeContainer>
      {/* 1. 고정 네비게이션 */}
      <Header />
      
      {/* 2. 자기소개 히어로 섹션 */}
      <div id="about">
        <Hero />
      </div>
      
      {/* 3. 프로젝트 리스트 섹션 */}
      <S.Section id="projects">
        <S.SectionTitle>Selected Projects</S.SectionTitle>
        <S.ProjectGrid>
          {projectData.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              role={project.role}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </S.ProjectGrid>
      </S.Section>

    </S.HomeContainer>
  );
}