import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle'; // 💡 분리한 스타일 불러오기
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <>
      {/* 전역 스타일 시공 */}
      <GlobalStyle />
      
      {/* 상단 헤더 (모든 페이지 공통) */}
      <Header />

      <Routes>
        {/* 메인 홈 페이지 */}
        <Route path="/" element={<Home />} />
        
        {/* 프로젝트 상세 페이지 */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      {/* 하단 푸터 (모든 페이지 공통) */}
      <Footer />
    </>
  );
}

export default App;