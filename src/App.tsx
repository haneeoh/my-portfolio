// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import GridLayout from './pages/GridLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<GridLayout />} />
        <Route path="/projects" element={<GridLayout />} />
        <Route path="/project/:id" element={<GridLayout />} />
        <Route path="/contact" element={<GridLayout />} />
      </Routes>
    </>
  );
}

export default App;