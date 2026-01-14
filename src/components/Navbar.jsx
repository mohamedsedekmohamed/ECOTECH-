import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Mail, Menu, X, Globe, ChevronDown, Sun, Building, Leaf, BatteryCharging } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiProfileLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import sun from '../assets/sun.png';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // للحوائم المنسدلة
  const location = useLocation();

  
const serviceLinks = [
  { path: "/services/solar-energy", label: t("solarEnergy"), icon: Sun },
  // { path: "/services/smart-buildings", label: t("smartBuilding"), icon: Building },
  { path: "/services/energy-savings", label: t("energySaving"), icon: Leaf },
  { path: "/services/energy-storage", label: t("energyStorag"), icon: BatteryCharging },
];

 const navItems = [
  { path: "/", label: t("home"), icon: Home },
  { path: "/about", label: t("Aboutt"), icon: Info },
  { path: "/projects", label: t("Portfolio"), icon: AiOutlineFundProjectionScreen },
  { path: "/careers", label: t("careerss"), icon: RiProfileLine },
  { path: "/contact", label: t("contacts"), icon: Mail },
];


  const isActive = (path) => location.pathname === path;
  const isServiceActive = serviceLinks.some(link => location.pathname === link.path);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-therrtcolor/20 text-maincolor shadow-lg bg-white/95 backdrop-blur-sm">
      <div className="W-[90%] mx-auto px-2">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center  text-xl font-bold transition-colors hover:opacity-80">
            <img src={sun} alt="Logo" className="h-21 w-21 text-secendcolor" />
         <span className="inline text-2xl lg:text-4xl text-maincolor font-extrabold">ECOTECH</span>
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {navItems.slice(0, -1).map((item, index) => (
              <li key={item.path} data-aos="fade-up" data-aos-delay={index * 100}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 rounded-md px-2 py-2 text-base font-semibold transition-all duration-300 ${
                    isActive(item.path) ? "bg-maincolor text-white shadow-md" : "text-maincolor hover:bg-secendcolor/20"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Dropdown Services */}
            <li className="relative group" onClick={() => setServicesOpen(p=>!p)}  data-aos="fade-up" data-aos-delay={navItems.length * 135}>
              <button
                className={`flex items-center gap-2 rounded-md px-2 py-2 text-base font-semibold transition-all duration-300 ${
                  isServiceActive ? "bg-maincolor text-white shadow-md" : "text-maincolor hover:bg-secendcolor/20"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                {t("services")}
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* المنسدلة */}
              <div className={`absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-2xl border border-gray-100 transition-all duration-300 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
                <div className="py-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-maincolor hover:bg-secendcolor/20 transition-colors"
                    >
                      <link.icon className="h-4 w-4 text-therrtcolor" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* صفحة اتصل بنا */}
            <li data-aos="fade-up" data-aos-delay={300}>
              <Link
                to="/contact"
                className={`flex items-center gap-2 rounded-md px-2 py-2 text-base font-semibold transition-all duration-300 ${
                  isActive("/contact") ? "bg-maincolor text-white shadow-md" : "text-maincolor hover:bg-secendcolor/20"
                }`}
              >
                <Mail className="h-4 w-4" />
                {t("contacts")}
              </Link>
            </li>
          </ul>

          {/* Language & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
             onClick={() => {
    const lang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang); 

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }}
            className="flex items-center gap-2 rounded-md border border-maincolor/20 px-3 py-2 text-sm font-medium text-maincolor hover:bg-secendcolor transition-all">
              <Globe className="h-4 w-4" />   {i18n.language.toUpperCase()}

            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="rounded-md p-2 hover:bg-secendcolor/20 md:hidden">
              {isOpen ? <X className="h-6 w-6 text-maincolor" /> : <Menu className="h-6 w-6 text-maincolor" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-[500px] pb-4" : "max-h-0"}`}>
          <ul className="flex flex-col gap-1">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-2 py-3 text-maincolor font-semibold">
                <Home className="h-5 w-5" /> {t("Home")}
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-2 py-3 text-maincolor font-semibold">
                <Info className="h-5 w-5" /> {t("Aboutt")}
            </Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-2 py-3 text-maincolor font-semibold">
                <Info className="h-5 w-5" /> {t("Careers")}
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-2 py-3 text-maincolor font-semibold">
                <Info className="h-5 w-5" /> {t("projects")}
            </Link>
            
            {/* Services Mobile Accordion */}
            <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between px-4 py-3 text-maincolor font-semibold"
                >
                    <div className="flex items-center gap-3"><Briefcase className="h-5 w-5" /> {t("Services")}</div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                    <div className="bg-gray-50 rounded-lg mx-4 mb-2">
                        {serviceLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => {setIsOpen(false); setServicesOpen(false);}}
                                className="flex items-center gap-3 px-8 py-3 text-sm font-medium text-therrtcolor"
                            >
                                <link.icon className="h-4 w-4" /> {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 text-maincolor font-semibold">
                <Mail className="h-5 w-5" /> {t("contacts")}
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;