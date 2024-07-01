import AboutSection from "./Componets/AboutSection";
import Project from "./Pages/Project";
import Navbar from "./Componets/Navbar";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


export default function App() {
  return (
    <>
      {/* <AboutSection/> */}
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<AboutSection />} />
            <Route path="/Projects" element={<Project/>}/>
          </Routes>
      </Router>
    </>
  )
}