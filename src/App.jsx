import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Login from "./Auth/Login";
import Careers from "./pages/Careers";
import ScrollToTop from "./components/ScrollToTop"; // استيراد المكون الجديد
import EnergySavings from "./pages/Services/EnergySavings";
import EnergyStorage from "./pages/Services/EnergyStorage";
import SolarEnergy from "./pages/Services/SolarEnergy";
import SmartBuildings from "./pages/Services/SmartBuildings";
import { useEffect, useState } from "react";
import Loading from './Loading'

import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Admin/Dashboard";
import Profile from "./Admin/Profile";
import AdminForm from "./Admin/AdminForm";
function App() {
    const [loading, setLoading] = useState(true);
const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='w-screen h-screen flex justify-center items-center  '>

    <Loading/>
      </div>
    );
  }
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        {/* 🟢 Layout الموقع */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/services/solar-energy" element={<SolarEnergy />} />
          <Route path="/services/smart-buildings" element={<SmartBuildings />} />
          <Route path="/services/energy-savings" element={<EnergySavings />} />
          <Route path="/services/energy-storage" element={<EnergyStorage />} />
        </Route>

      
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
        </Route>

       
         <Route
    path="/admin"
    element={<AdminLayout  isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated} />}
  >
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="profile" element={<Profile />} />
    <Route path="form" element={<AdminForm />} />
  </Route>

      </Routes>
    </Router>

  );
}

export default App;

