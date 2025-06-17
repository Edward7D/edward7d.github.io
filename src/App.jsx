import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Peritos from './pages/Peritos';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import ProjectDetail from './pages/ProjectDetail';
 import ProjectFilter from './components/ProjectFilter'; 
import Especialidad from './pages/Especialidad';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Servicios' element={<Servicios />} />
        <Route path='/Peritos' element={<Peritos />} />
        <Route path='/Proyectos' element={<Proyectos />} />
        <Route path="/" element={<ProjectFilter />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
        <Route path="/especialidad/:id" element={<Especialidad />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
