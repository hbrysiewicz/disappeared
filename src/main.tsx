import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import News from './News.tsx'
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
