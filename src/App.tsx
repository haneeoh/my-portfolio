import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProjectDetail from './pages/ProjectDetail';
import Info from './pages/Info';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
