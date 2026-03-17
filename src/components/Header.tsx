import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiUser, FiFolder, FiMail } from 'react-icons/fi';
import { projectData } from '../data/projects';

import * as S from '../styles/Header.styles';

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [showPopup, setShowPopup] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const isMainPage = location.pathname === '/';
  const isProjectDetailPage = location.pathname.includes('/project/');

  // --- 💡 수정 포인트 1: 스크롤 감지 로직 통합 ---
  useEffect(() => {
    const handleScroll = () => {
      // 바닥 감지 공통 로직 (여유값 50px)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      // [상세 페이지일 때]
      if (isProjectDetailPage) {
        if (isAtBottom) {
          setActiveSection('contact'); // 바닥이면 Contact 불 켜기
        } else {
          setActiveSection('projects'); // 위로 올라오면 다시 Projects 불 켜기
        }
        return;
      }

      // [메인 페이지일 때]
      if (isMainPage) {
        if (isAtBottom) {
          setActiveSection('contact');
          return;
        }

        const sections = ['about', 'projects', 'contact'];
        let currentSection = 'about';

        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const screenMiddle = window.innerHeight / 2;
            if (rect.top <= screenMiddle && rect.bottom >= screenMiddle) {
              currentSection = id;
            }
          }
        });
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isMainPage, isProjectDetailPage]);

  const handleProjectLinkClick = () => {
    if (isMainPage) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setShowPopup(!showPopup);
    }
  };

  return (
    <S.FloatingNav>
      {/* 1. About 섹션 */}
      <S.NavItem 
        $isActive={isMainPage && activeSection === 'about'} 
        onClick={() => {
          if (isMainPage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            navigate('/');
            // 메인으로 갈 때는 상단으로 가도록 처리
            setTimeout(() => window.scrollTo(0, 0), 100);
          }
        }}
      >
        <FiUser /> <span>About</span>
      </S.NavItem>
      
      {/* 2. Projects 섹션 */}
      <S.NavItem 
        $isActive={activeSection === 'projects'} 
        onClick={handleProjectLinkClick}
        style={{ position: 'relative' }}
      >
        <FiFolder /> <span>Projects</span>
        
        {!isMainPage && showPopup && (
          <S.MiniPopup onClick={(e) => e.stopPropagation()}>
            {projectData.map(p => (
              <S.PopupItem key={p.id} onClick={() => {
                navigate(`/project/${p.id}`);
                setShowPopup(false);
                window.scrollTo(0, 0); 
              }}>
                {p.title}
              </S.PopupItem>
            ))}
          </S.MiniPopup>
        )}
      </S.NavItem>

      {/* 3. Contact 섹션 --- 💡 수정 포인트 2: 메인 안 가고 바닥으로 스크롤 --- */}
      <S.NavItem 
        $isActive={activeSection === 'contact'} 
        onClick={() => {
          if (isMainPage) {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          } else {
            // 상세 페이지에서는 그냥 현재 페이지의 맨 아래로!
            window.scrollTo({ 
              top: document.documentElement.scrollHeight, 
              behavior: 'smooth' 
            });
          }
        }}
      >
        <FiMail /> <span>Contact</span>
      </S.NavItem>
    </S.FloatingNav>
  );
}