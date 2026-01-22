import React, { useEffect, useState } from 'react';
import { Award, Building2, MapPin, Zap, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // افترضت أنك تستخدم i18n بناءً على كودك
import { PiSolarPanelBold } from "react-icons/pi";
import { HiUser } from "react-icons/hi";
import { motion } from 'framer-motion';
import cvv from '../assets/business/cvv.png'
// استيراد الصور (نفس الصور التي قدمتها)
import taybahAcad from "../assets/project/Taybah Academy.jpg";
import taybahInt from "../assets/project/Taybah International School.jpg";
import nobughBoys from "../assets/project/Nobugh Boys School.jpg";
import noboughAcad from "../assets/project/Nubough Academy.jpg";
import alRashid from "../assets/project/Al-Rashid Private School.png";
import alOthman from "../assets/project/Al Othman Private School.jpeg";
import alQudsInt from "../assets/project/Al-Quds International School.jpg";
import jerusalemNursery from "../assets/project/Jerusalem Nursery.jpg";
import jerusalemLang from "../assets/project/Jerusalem School for Languages..jpg";
import alexLife from "../assets/project/Alex Life Private School.jpg";
import awalBitash from "../assets/project/Awal Al-Bitash School.jpg";
import brillianceGirls from "../assets/project/Brilliance GirlsSchool.jpg";
import brillianceLang from "../assets/project/Brilliance Language School.jpg";
import cityInt from "../assets/project/City International School.jpg";
import excellencePriv from "../assets/project/Excellence Private School.jpg";
import goldenSchool from "../assets/project/Golden School.png";
import smartSchool from "../assets/project/Smart School.jpg";
import zahraAwael from "../assets/project/Zahra Al-Awael Private School.jpeg";
import zahraMadaen from "../assets/project/Zahra Al-Madaen Private School.jpg";
import villa1 from "../assets/project/Villa Complex.png";
import villa2 from "../assets/project/Villa Complex 2.png";
import alexElec from "../assets/project/agmye.jpg";
import { useLocation } from 'react-router-dom';
import { AiOutlineAim } from "react-icons/ai";
import profile from '../assets/business/004.png'
const Projects = () => {
  const { t } = useTranslation();
const { hash } = useLocation();
const [selectedProject, setSelectedProject] = useState(null);
  const colors = {
    main: '#006584',
    secondary: '#ffd400',
    third: '#037235'
  };
 useEffect(() => {
  if (hash) {
    // إزالة علامة # للحصول على الـ ID فقط
    const targetId = hash.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
   
      setTimeout(() => {
        const headerOffset = 150;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100); 
    }
  }
}, [hash]);
  const projectsData = [
    {
      id: "educational",
      category: t("about.projects.educational"),
      icon: <Award className="w-8 h-8 text-blue-600" />,
      items: [
        //5
        { 
          img: taybahAcad, 
          title: "37 KW On grid Solar System", 
          location: "Alexandria , Egypt .", 
          scope: "Engineering, Procurement and Construction", 
          client:"Tiba Language Academy",
          annualGen: "73,260 KWh" 
        },
        //6
        { 
          img: taybahInt, 
          title: "18 KW On grid Solar System", 
          location: "Alexandria, Egypt", 
          scope: "Engineering, Procurement and Construction",
           client:"Tiba International School", 
          annualGen: "35,640 KWh" 
        },
        //3
        { 
          img: noboughAcad, 
          title: "65 KW On grid Solar System", 
          location: "New Miami, Alexandria.", 
          client:"Nobogh Academy",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "142,350 KWh" 
        },
        //4
        { 
          img: nobughBoys, 
          title: "70 KW On grid Solar System", 
          location: "New Miami, Alexandria.", 
          scope: "Engineering, Procurement and Construction  ",
         client:"Nobogh Boys School", 
          annualGen: "110 MWh" 
        },
        //18
        { 
          img: alOthman, 
          title: "55 KW On grid Solar System", 
          location: "Cairo , Egypt .", 
           client:"Al Othman Language schools",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "108,900 KWh" 
        },
      //7
        { 
          img: alQudsInt, 
          title: "37 KW On grid Solar System", 
          location: "New Miami, Alexandria.", 
         client:"AlQuds International School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "73,260 KWh" 
        },
//9
        { 
          img: jerusalemNursery, 
          title: "10 KW On grid Solar System", 
          location: "New Miami, Alexandria.", 
          scope: "Engineering, Procurement and Construction", 
         client:"AlQuds Language Nursery",
          annualGen: "19,800 KWh" 
        },
        //8
        { 
          img: jerusalemLang, 
          title: "66 KW On grid Solar System", 
          location: "New Miami, Alexandria.", 
         client:"AlQuds Language School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "130,680 KWh" 
        },
        //14
        { 
          img: alexLife, 
          title: "14 KW On grid Solar System", 
          location: "Agami, Alexandria.", 
          client:"Alex Life Language School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "27,720 KWh" 
        },
        //19
        { 
          img: awalBitash, 
          title: "19 KW On grid Solar System", 
          location: "Alexandria , Egypt .", 
          client:"Awael Elbitash School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "39,000 KWh" 
        },
        //15
        { 
          img: goldenSchool, 
          title: "25 KW On grid Solar System", 
          location: "Alexandria , Egypt .", 
         client:"Golden Language School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "49,500 KWh" 
        },
        //16
        { 
          img: alRashid, 
          title: "14 KW On grid Solar System", 
          location: "Agami, Alexandria.", 
           client:"Al-Rashid Language School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "27,720 KWh" 
        },
        //12
        { 
          img: smartSchool, 
          title: "20 KW On grid Solar System", 
          location: "Agami, Alexandria.", 
           client:"Smart Language School",
          scope: "Engineering, Procurement and Construction", 
          annualGen: "39,600 KWh" 
        },
        //20
        { 
          img: zahraAwael, 
         client:"Zahrat Elawael School",
          title: "18 KW On grid Solar System", 
          location: "Alexandria , Egypt .", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "35,640 KWh" 
        },
        //13
        { 
          img: zahraMadaen, 
         client:"Zahra El-Mdaaen School",
          title: "20 KW On grid Solar System", 
          location: "Damietta, Egypt .", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "39,600 KWh" 
        },
        //1
        { 
          img: brillianceGirls, 
        client:"Brilliance Language School",
          title: "100 KW On grid Solar System", 
          location: "Al Dawly Road, Alexandria.", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "200,750 KWh" 
        },
        //2
        { 
          img: brillianceLang, 
         client:"Brilliance American School",
          title: "142 KW On grid Solar System", 
          location: "Al Dawly Road, Alexandria.", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "285,100 KWh" 
        },
      //10  
        { 
          img: cityInt, 
           client:"City International School",
          title: "65 KW On grid Solar System", 
          location: "New Miami, Alexandria.", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "128,700 KWh" 
        },
        //11
        { 
          img: excellencePriv, 
         client:"Tamayoz Language School",
          title: "10 KW On grid Solar System", 
          location: "Agami, Alexandria.", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "19,800 KWh" 
        },
      ],
    },
    {
      id: "residential",
      category: t("about.projects.residential"),
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      items: [
        //21
        { 
          img: villa1, 
            client:"Villa Complex",
          title: "35 KW On grid Solar System", 
          location: "New Cairo", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "69,300 KWh" 
        },
        //22
        { 
          img: villa2, 
              client:"Villa Complex",

          title: "43 KW On grid Solar System", 
          location: "Alexandria", 
          scope: "Engineering, Procurement and Construction", 
          annualGen: "94,170 KWh" 
        },
      ],
    },
    {
      id: "largeFacilities",
      category: t("about.projects.largeFacilities"),
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      items: [
        //17
        {
          img: alexElec,
                    client:"Alexandria Electricity Distribution Company",

          title: "20 KW On grid Solar System",
          location: "Alexandria , Egypt .",
          scope: "Engineering, Procurement and Construction",
          annualGen: "39,600 KWh",
        },
      ],
    },
  ];

  return (
<div className="bg-[#fcfcfc] py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="mx-auto">

  {/* Hero Section */}
  <div className="relative text-center mb-32 flex flex-col items-center">

    {/* Decorative Background Circle */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-main/10 rounded-full blur-3xl z-0"></div>
    <div className="absolute -bottom-10 right-10 w-96 h-96 bg-therrtcolor/10 rounded-full blur-3xl z-0"></div>

    {/* Text */}
    <div className="relative z-10 max-w-3xl px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6"
      >
        <span style={{ color: colors.main }} className="italic">
          {t("OurSolarLegacy")}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-500 text-lg md:text-xl leading-relaxed"
      >
        {t("Deliveringclean")}
      </motion.p>
    </div>

    {/* الصور الكبيرة */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 w-full px-4 md:px-16">

      {/* بطاقة 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl shadow-maincolor/30 hover:scale-105 transition-transform duration-500"
      >
        <img src={profile} alt="Profile" className="w-full h-[500px] md:h-[600px] object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4">
          <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
          </h3>
        </div>
      </motion.div>

      {/* بطاقة 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl shadow-maincolor/30 hover:scale-105 transition-transform duration-500"
      >
        <img src={cvv} alt="CVV" className="w-full h-[500px] md:h-[600px] object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4">
          <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
          </h3>
        </div>
      </motion.div>

    </div>

  </div>

  {/* Projects Section */}
  {projectsData.map((section, idx) => (
    <div key={idx} id={section.id} className="mb-32 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-l-8 pl-6" style={{ borderColor: colors.secondary }}>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase">{section.category}</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {section.items.map((project, pIdx) => (
          <div 
            key={pIdx} 
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-slate-50"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-6 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2 opacity-80 uppercase text-[10px] font-bold tracking-[0.2em]" style={{ color: colors.secondary }}>
                  <MapPin size={14} /> {project.location}
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
              </div>
            </div>

            <div className="p-6 text-center">
              <button className="text-sm font-bold flex items-center justify-center gap-2 mx-auto transition-colors" style={{ color: colors.main }}>
                {t("View Details")} <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}

</div>


   {selectedProject && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
    <div 
      className="bg-white rounded-[1rem] sm:rounded-[1.5rem] max-w-5xl w-full max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      {/* زر الإغلاق - ثابت في الأعلى */}
      <button 
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-red-500 hover:text-white text-slate-500 rounded-full p-2 shadow-lg transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      {/* الجزء الأيسر: الصور - يأخذ مساحة أقل في الموبايل */}
      <div className="w-full md:w-1/2 bg-slate-100 p-4 sm:p-6 flex flex-col justify-center">
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-auto">
          <img src={selectedProject.img} className="w-full h-full object-cover" alt="Main" />
        </div>
      </div>

      {/* الجزء الأيمن: البيانات - مع مسافات مرنة */}
      <div className="w-full md:w-1/2 p-6 sm:p-10 bg-white flex flex-col justify-center">
        {/* نستخدم space-y-6 في الموبايل و space-y-10 في الشاشات الكبيرة */}
        <div className="relative border-l-2 border-slate-100 ml-4 sm:ml-6 space-y-6 sm:space-y-10">
          
          {/* Project Name */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <PiSolarPanelBold size={16} className="text-secendcolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{t("Project Name")}</h4>
            <p className="text-lg sm:text-xl font-extrabold text-[#004a61] leading-tight">{selectedProject.title}</p>
          </div>

          {/* Client */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <HiUser size={16} className="text-maincolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{t("Client")}</h4>
            <p className="text-lg sm:text-xl font-extrabold text-red-700 leading-tight">{selectedProject.client}</p>
          </div>

          {/* Location */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <MapPin size={16} className="text-therrtcolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{t("Location")}</h4>
            <p className="text-base sm:text-lg font-bold text-slate-700 leading-tight">{selectedProject.location}</p>
          </div>

          {/* Scope of Work */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <AiOutlineAim size={16} className="text-black sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{t("Scope of Work")}</h4>
            <p className="text-base sm:text-lg font-bold text-slate-700 leading-tight">{selectedProject.scope}</p>
          </div>

          {/* Annual Generation */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <Zap size={16} className="text-maincolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{t("AnnualGeneration")}</h4>
            <p className="text-xl sm:text-2xl font-black text-[#004a61] leading-tight">{selectedProject.annualGen}</p>
          </div>

        </div>
      </div>
       <button 
        onClick={() => setSelectedProject(null)}
        className="absolute bottom-4 right-4 z-50 bg-red-600 backdrop-blur-sm hover:bg-red-500 hover:text-white text-white rounded-[6px] p-2 shadow-lg transition-all"
      >
{t("Close")}
      </button>

    </div>
  </div>
)}
    </div>
  );
};

export default Projects;