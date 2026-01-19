import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.tsx'
import Landing from './pages/Landing.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Gallery from './pages/Gallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/care-homes" element={<div>Care Homes Page</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
)
