import AboutSection from "./Componets/AboutSection";
import Navbar from "./Componets/Navbar";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="md:ml-36 md:mr-36 bg-white min-h-screen">
          <Navbar/>
          <AboutSection/>
      </div>
    </div>
  )
}