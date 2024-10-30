import AboutSection from "./Componets/AboutSection";
import Project from "./Pages/Project";
import Navbar from "./Componets/Navbar";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from "./Pages/About";
import Footer from "./Componets/Footer";
import Certification from "./Pages/Certification";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      {/* <AboutSection/> */}
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<AboutSection />} />
            <Route path="/Projects" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/certificates" element={<Certification/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}