// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 💡 이거 추가!
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 💡 BrowserRouter로 App을 감싸줍니다 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)