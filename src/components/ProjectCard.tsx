import { useNavigate } from 'react-router-dom';
// 💡 S 접두사 스타일 적용!
import * as S from '../styles/ProjectCard.styles';

interface ProjectCardProps {
  id: number;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  youtubeLink?: string;
  liveLink?: string;
}

export default function ProjectCard({ id, title, role, description, techStack }: ProjectCardProps) {
  const navigate = useNavigate();
  
  return (
    <S.CardContainer onClick={() => navigate(`/project/${id}`)}>
      <S.ImagePlaceholder>이미지가 들어갈 자리입니다</S.ImagePlaceholder>
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Role>{role}</S.Role>
        <S.Description>{description}</S.Description>
        
        <S.TagContainer>
          {techStack.map((tech, index) => (
            <S.Tag key={index}>{tech}</S.Tag>
          ))}
        </S.TagContainer>
      </S.ContentWrapper>
    </S.CardContainer>
  );
}