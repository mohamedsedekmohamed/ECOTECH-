import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Careers from "./pages/Careers";
import ScrollToTop from "./components/ScrollToTop"; // استيراد المكون الجديد
import EnergySavings from "./pages/Services/EnergySavings";
import EnergyStorage from "./pages/Services/EnergyStorage";
import SolarEnergy from "./pages/Services/SolarEnergy";
import SmartBuildings from "./pages/Services/SmartBuildings";
function App() {
  return (
    <Router>
      {/* نضع المكون هنا ليعمل عند كل انتقال */}
      <ScrollToTop /> 
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/services/solar-energy" element={<SolarEnergy />} />
        <Route path="/services/smart-buildings" element={<SmartBuildings />} />
        <Route path="/services/energy-savings" element={<EnergySavings />} />
        <Route path="/services/energy-storage" element={<EnergyStorage />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

