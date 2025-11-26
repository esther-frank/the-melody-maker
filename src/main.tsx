import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.tsx'
import About from './pages/About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/care-homes" element={<div>Care Homes Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
)
