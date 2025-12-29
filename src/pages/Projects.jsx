import React, { useEffect, useState } from 'react';
import { Award, Building2, MapPin, Zap, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // افترضت أنك تستخدم i18n بناءً على كودك
import { PiSolarPanelBold } from "react-icons/pi";
import { HiUser } from "react-icons/hi";

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
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-24 relative">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
             <span style={{ color: colors.main }} className="italic">{t("OurSolarLegacy")}</span> 
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">{t("Deliveringclean")}</p>
        </div>

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
                  // 2. جعل الكارت قابل للضغط لفتح التفاصيل
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

                  {/* 3. عرض زر بسيط بدلاً من كل التفاصيل */}
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
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">Project Name</h4>
            <p className="text-lg sm:text-xl font-extrabold text-[#004a61] leading-tight">{selectedProject.title}</p>
          </div>

          {/* Client */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <HiUser size={16} className="text-maincolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">Client</h4>
            <p className="text-lg sm:text-xl font-extrabold text-red-700 leading-tight">{selectedProject.client}</p>
          </div>

          {/* Location */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <MapPin size={16} className="text-therrtcolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">Location</h4>
            <p className="text-base sm:text-lg font-bold text-slate-700 leading-tight">{selectedProject.location}</p>
          </div>

          {/* Scope of Work */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <AiOutlineAim size={16} className="text-black sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">Scope of Work</h4>
            <p className="text-base sm:text-lg font-bold text-slate-700 leading-tight">{selectedProject.scope}</p>
          </div>

          {/* Annual Generation */}
          <div className="relative pl-8 sm:pl-12">
            <div className="absolute -left-[17px] sm:-left-[26px] top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center">
              <Zap size={16} className="text-maincolor sm:w-[20px]" />
            </div>
            <h4 className="text-slate-500 font-bold text-[10px] sm:text-sm uppercase tracking-widest">Annual Generation</h4>
            <p className="text-xl sm:text-2xl font-black text-[#004a61] leading-tight">{selectedProject.annualGen}</p>
          </div>

        </div>
      </div>
       <button 
        onClick={() => setSelectedProject(null)}
        className="absolute bottom-4 right-4 z-50 bg-red-600 backdrop-blur-sm hover:bg-red-500 hover:text-white text-white rounded-[6px] p-2 shadow-lg transition-all"
      >
Close
      </button>

    </div>
  </div>
)}
    </div>
  );
};

export default Projects;