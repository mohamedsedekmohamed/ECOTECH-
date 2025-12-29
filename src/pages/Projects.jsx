import React, { useEffect } from 'react';
import { Award, Building2, MapPin, Zap, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // افترضت أنك تستخدم i18n بناءً على كودك

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

const Projects = () => {
  const { t } = useTranslation();
const { hash } = useLocation();

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
          <div 
            className="absolute inset-0 -top-10 blur-3xl rounded-full h-64 w-64 mx-auto -z-10 opacity-10"
            style={{ backgroundColor: colors.main }}
          ></div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
             <span style={{ color: colors.main }} className="italic">{t("OurSolarLegacy")}</span> 
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
{t("Deliveringclean")}          </p>
        </div>

        {projectsData.map((section, idx) => (
          <div key={idx} id={section.id} className="mb-32 scroll-mt-24">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-l-8 pl-6" 
                 style={{ borderColor: colors.secondary }}>
              <div>
                <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-[0.2em] text-sm"
                     style={{ color: colors.main }}>
                  {React.cloneElement(section.icon, { style: { color: colors.main }, size: 24 })}
                  <span>{section.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase">
                   {section.category}
                </h2>
              </div>
              <div className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter bg-slate-100 text-slate-500">
                {section.items.length} {t("SuccessfulInstallations")}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.items.map((project, pIdx) => (
                <div 
                  key={pIdx} 
                  className="group bg-white rounded-[2.5rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-slate-50"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                  {/* العميل - Client (الجزء الجديد) */}
  
                    {/* Bottom Info */}
                    <div className="absolute bottom-6 left-8 right-8 text-white">
                       <div className="flex items-center gap-2 mb-2 opacity-80 uppercase text-[10px] font-bold tracking-[0.2em]" style={{ color: colors.secondary }}>
                        <MapPin size={14} />
                        {project.location}
                      </div>
                      <h3 className="text-xl font-bold leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Details Area */}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div className="space-y-4 mb-8">
                      {/* Scope Detail */}
                      {/* <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 group-hover:bg-white group-hover:ring-1 transition-all"
                           style={{ '--tw-ring-color': colors.main }}>
                        <div className="flex items-center gap-3">
                          <Activity size={18} style={{ color: colors.main }} />
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Scope</span>
                        </div>
                        <span className="text-xs font-black text-slate-800">{project.scope}</span>
                      </div> */}
  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 group-hover:bg-white group-hover:ring-1 transition-all"
         style={{ '--tw-ring-color': colors.secondary }}>
      <div className="flex items-center gap-2">
        <Building2 size={18} style={{ color: colors.secondary }} />
      <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tight">Client</span>
      </div>
      <span className="text-xs font-bold text-slate-700">{project.client}</span>
    </div>

                      {/* Energy Detail */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 group-hover:bg-white group-hover:ring-1 transition-all"
                           style={{ '--tw-ring-color': colors.third }}>
                        <div className="flex items-center gap-3">
                          <Zap size={18} style={{ color: colors.third }} />
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Yield</span>
                        </div>
                        <span className="text-xs font-black text-slate-800" style={{ color: colors.third }}>{project.annualGen}</span>
                      </div>
                    </div>

                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;