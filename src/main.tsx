import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.tsx'
import Landing from './pages/Landing.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Gallery from './pages/Gallery.tsx'
import CareHomes from './pages/CareHomes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/care-homes" element={<CareHomes />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
