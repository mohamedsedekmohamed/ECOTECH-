import React, { useEffect, useState } from "react";
import { Target, Lightbulb, Building, Award, Zap, Building2 } from "lucide-react";
import {X, ChevronRight, ChevronLeft } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import ValuesSection from "../components/ValuesSection";
// Schools & Academies
import taybahAcad from '../assets/project/Taybah Academy.jpg';
import taybahInt from '../assets/project/Taybah International School.jpg';
import nobughBoys from '../assets/project/Nobugh Boys School.jpg';
import noboughAcad from '../assets/project/Nubough Academy.jpg';
import alRashid from '../assets/project/Al-Rashid Private School.png';    
import alOthman from '../assets/project/Al Othman Private School.jpeg';
import alQudsInt from '../assets/project/Al-Quds International School.jpg';
import jerusalemNursery from '../assets/project/Jerusalem Nursery.jpg';
import jerusalemLang from '../assets/project/Jerusalem School for Languages..jpg';
import alexLife from '../assets/project/Alex Life Private School.jpg';
import awalBitash from '../assets/project/Awal Al-Bitash School.jpg';
import brillianceGirls from '../assets/project/Brilliance GirlsSchool.jpg';
import brillianceLang from '../assets/project/Brilliance Language School.jpg';
import cityInt from '../assets/project/City International School.jpg';
import excellencePriv from '../assets/project/Excellence Private School.jpg';
import goldenSchool from '../assets/project/Golden School.png';
import smartSchool from '../assets/project/Smart School.jpg';
import zahraAwael from '../assets/project/Zahra Al-Awael Private School.jpeg';
import zahraMadaen from '../assets/project/Zahra Al-Madaen Private School.jpg';

// Villas & Others
import villa1 from '../assets/project/Villa Complex.png';
import villa2 from '../assets/project/Villa Complex 2.png';
import alexElec from '../assets/project/agmye.jpg';

const About = () => {
  
  const projects = [
    {
      name: "educational institutions",
      icon: <Award />,
      images: [
   [
  { img: taybahAcad, title: "Thebes Academy" },
  { img: taybahInt, title: "Tiba International School" },
  { img: noboughAcad, title: "Nobugh Academy" },
  { img: nobughBoys, title: "Nobogh Private School (Boys)" },
  { img: alOthman, title: "Al Othman Private School" },
  { img: alQudsInt, title: "El Quds International Schools - QIS" },
  { img: jerusalemNursery, title: "El QUDS Nursery" },
  { img: jerusalemLang, title: "El Quds Language School" },
  { img: alexLife, title: "Alex Life Language School" },
  { img: awalBitash, title: "Aweal El Betash Private School" },
  { img: goldenSchool, title: "Golden Language School" },
  { img: alRashid, title: "El Rashid Language Schools" },
  { img: smartSchool, title: "Smart International Schools" },
  { img: zahraAwael, title: "Awael Private School" },
  { img: zahraMadaen, title: "Zahret El-Madain Private School" },
  { img: brillianceGirls, title: "Brilliance Girls School" },
  { img: brillianceLang, title: "Brilliance Language School" },
  { img: cityInt, title: "City International School" }
]
 ]
    },
    {
      name: "Residential projects ",
      icon: <Building2 />,
      images: [
        { img: villa1, title: "Private Villa Complex - Phase 1" },
        { img: villa2, title: "Residential Villa Solar Rooftop" }
      ]
    },
    {
      name: "Large Facilities",
      icon: <Building2 />,
      images: [
     
        { img: alexElec, title: "Alexandria Electricity Distribution Building" },
      ]
    },
    
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Section */}
      <section className="relative py-24 bg-maincolor text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6" data-aos="fade-down">
            About Our Company
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl opacity-90 leading-relaxed border-l-4 border-secendcolor pl-6" data-aos="fade-right" data-aos-delay="300">
            Ecotech for Green Solutions is a leading Renewable Energy pioneer, 
            driving Egypt's transition to sustainable power since 2018.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secendcolor/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "2018", desc: "Founded as a Joint Stock Company", color: "border-secendcolor" },
            { title: "5M EGP", desc: "Initial Capital Funding", color: "border-therrtcolor" },
            { title: "50M EGP", desc: "Plan for the next 5 years", color: "border-maincolor" },
          ].map((stat, idx) => (
            <div key={idx} className={`p-8 border-b-8 ${stat.color} bg-white shadow-xl rounded-xl hover:-translate-y-2 transition-transform duration-300`} data-aos="zoom-in-up" data-aos-delay={idx * 200}>
              <h3 className="text-maincolor text-4xl font-black mb-2">{stat.title}</h3>
              <p className="text-therrtcolor font-bold text-lg">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 bg-white p-10 rounded-2xl shadow-sm" data-aos="fade-right">
            <div className="bg-maincolor p-5 rounded-2xl shadow-lg shadow-maincolor/30" data-aos="flip-left" data-aos-delay="400">
              <Lightbulb className="text-secendcolor w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-maincolor">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">To be the first Egyptian brand to change people's view of renewable energy and make it part of daily life.</p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 bg-white p-10 rounded-2xl shadow-sm" data-aos="fade-left">
            <div className="bg-therrtcolor p-5 rounded-2xl shadow-lg shadow-therrtcolor/30" data-aos="flip-right" data-aos-delay="400">
              <Target className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-maincolor">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">We are building a clean energy future by providing smart and reliable solar energy solutions.</p>
          </div>
        </div>
      </section>

      {/* Grid Projects Section */}
      <section className="py-24 bg-maincolor text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-aos="zoom-out">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Who We Serve</h2>
            <div className="w-32 h-2 bg-secendcolor mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8" data-aos="fade-up-right">
              <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-secendcolor">
                <p className="text-xl opacity-90 leading-relaxed italic">"Commercial solar systems offer a quick return on investment for any industry."</p>
              </div>
              <p className="text-lg opacity-80">With Ecotech solutions, you empower your business to be self-reliant in generating its own energy.</p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                {projects.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => { setSelectedProject(item); setCurrentImgIdx(0); }}
                    className="bg-white group hover:bg-secendcolor transition-all duration-500 p-8 rounded-2xl text-maincolor text-center shadow-lg cursor-pointer"
                  >
                      <div className="relative mb-6">
    <div className="absolute inset-0 bg-secendcolor/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center text-maincolor group-hover:bg-maincolor group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
      {React.cloneElement(item.icon, { size: 32 })}
    </div>
  </div>

  {/* النصوص */}
  <div className="space-y-2 text-center">
    <h4 className="font-black text-base md:text-xl text-maincolor tracking-tight transition-colors duration-300">
      {item.name}
    </h4>
    
    {/* خط التقدم التجميلي */}
    <div className="flex justify-center gap-1">
      <div className="h-1 w-8 bg-secendcolor rounded-full"></div>
      <div className="h-1 w-2 bg-maincolor/20 rounded-full group-hover:w-8 group-hover:bg-secendcolor/50 transition-all duration-500"></div>
    </div>

    {/* زر الإجراء الأنيق */}
    <div className="pt-4">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-green-700 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-gray-100 group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700 transition-all duration-500">
        View Gallery
        <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup / Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full text-black shadow-lg">
              <X size={24} />
            </button>

            <div className="relative h-[350px] md:h-[500px] bg-black flex items-center justify-center">
              <img 
                src={selectedProject.images[currentImgIdx].img} 
                alt={selectedProject.images[currentImgIdx].title}
                className="w-full h-full object-contain"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all">
                    <ChevronLeft size={32} />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all">
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>

            {/* عرض اسم الصورة المخصص تحتها */}
            <div className="p-8 bg-white text-center">
              <h3 className="text-2xl font-black text-maincolor mb-2">
                {selectedProject.images[currentImgIdx].title}
              </h3>
              <div className="flex justify-center items-center gap-2">
                  <span className="h-[2px] w-8 bg-secendcolor"></span>
                  <span className="text-therrtcolor font-bold uppercase text-sm tracking-widest">
                      {selectedProject.name} Project
                  </span>
                  <span className="h-[2px] w-8 bg-secendcolor"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      <ValuesSection />
    </div>
  );
};

export default About;