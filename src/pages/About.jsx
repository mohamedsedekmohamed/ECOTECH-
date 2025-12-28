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
      name: "Educational Institutions",
      icon: <Award />,
      images: [
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
  { img: cityInt, title: "City International School" },
  { img: excellencePriv, title: "Excellence Private School" },
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
      {/*  */}
{/* New Design: Authorization & Expertise Section */}
<section className="py-24 relative overflow-hidden bg-white">
  {/* عناصر ديكورية في الخلفية */}
  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
    <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-maincolor"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secendcolor"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-6xl mx-auto">
      
      {/* الجزء العلوي: اعتماد الوزارة */}
      <div 
        className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <Building2 size={150} className="text-maincolor" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-b-4 border-secendcolor">
              <Award className="text-maincolor w-12 h-12" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <span className="text-secendcolor font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Official Certification</span>
            <h2 className="text-2xl md:text-4xl font-black text-maincolor mb-4 leading-tight">
              Authorized by the Egyptian Ministry of Electricity and Renewable Energy
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
              We are officially licensed for the <span className="text-maincolor font-bold underline decoration-secendcolor decoration-2 underline-offset-4">supply, installation, operation, and maintenance</span> of solar PV systems, ensuring full compliance with the public grid standards.
            </p>
          </div>
        </div>
      </div>

      {/* الجزء السفلي: الخبرة التجارية (بطاقات صغيرة) */}
      <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
        
        {/* بطاقة الخبرة */}
        <div className="group bg-maincolor p-10 rounded-[2rem] text-white shadow-2xl hover:scale-[1.02] transition-transform duration-500">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white/10 rounded-xl group-hover:bg-secendcolor transition-colors">
              <Zap className="text-white" size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Tailored Solutions</h3>
              <p className="text-white/80 leading-relaxed">
                Our expertise is ideal for all types of businesses looking to offset their energy cost with the most efficient, uniquely tailored solar solutions.
              </p>
            </div>
          </div>
        </div>

        {/* بطاقة الابتكار */}
        <div className="group bg-white border-2 border-maincolor p-10 rounded-[2rem] text-maincolor shadow-xl hover:scale-[1.02] transition-transform duration-500">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-maincolor/5 rounded-xl group-hover:bg-maincolor group-hover:text-white transition-all">
              <Lightbulb size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Legacy of Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                With a deep legacy in the industry and a continued passion for innovation, we’re bringing back the highest quality service to commercial installations.
              </p>
            </div>
          </div>
        </div>

      </div>
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
                <p className="text-xl opacity-90 leading-relaxed italic">"With Ecotech commercial solar system solutions, no matter what industry you’re in, you’ll see a return on your investment quickly"</p>
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
{/* Business Value & Solar Solutions Section */}
<section className="py-24 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4">
    
    {/* Part 1: Why Switch Now? (The Financial Argument) */}
    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
      <div className="relative" data-aos="fade-right">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-secendcolor/20 rounded-full blur-3xl"></div>
        <h2 className="text-3xl md:text-5xl font-black text-maincolor mb-8 leading-tight">
          The Best Time to <span className="text-secendcolor">Go Solar</span> is Now.
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Some Egyptian business owners may think the initial costs are too high. In fact, 
            <span className="font-bold text-maincolor"> there’s never been a better time to switch.</span>
          </p>
          <p>
            Today’s solar technology is more efficient than ever, and many government initiatives are available to offset installation costs. With Ecotech, you’ll see a 
            <span className="text-green-600 font-bold"> return on your investment quickly</span>, no matter your industry.
          </p>
        </div>
        
        {/* Warranty Badge */}
        <div className="mt-10 p-6 bg-white rounded-2xl shadow-xl border-l-8 border-maincolor flex items-center gap-6">
          <Award className="text-secendcolor w-12 h-12 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-maincolor text-xl">Industry-Leading Warranties</h4>
            <p className="text-sm text-gray-500">We stand by our products and workmanship with a reputation of excellence.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6" data-aos="fade-left">
        {[
          { title: "Turnkey Installations", desc: "Complete, ready-to-use solutions for small businesses.", icon: <Zap /> },
          { title: "Custom Solar Systems", desc: "Uniquely designed energy infrastructures for larger facilities.", icon: <Building /> },
          { title: "Configuration Options", desc: "From rooftop systems to ground-mounted installations.", icon: <Target /> }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-secendcolor transition-all group">
            <div className="flex items-start gap-5">
              <div className="p-3 bg-gray-50 rounded-lg text-maincolor group-hover:bg-maincolor group-hover:text-white transition-colors">
                {React.cloneElement(item.icon, { size: 28 })}
              </div>
              <div>
                <h3 className="font-bold text-xl text-maincolor mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Part 2: Commitment & Expertise (Horizontal Banner) */}
    <div 
      className="bg-maincolor rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden" 
      data-aos="zoom-in"
    >
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,69.2,-57.1,76.5,-43.3C83.8,-29.5,87.3,-14.7,86.1,-0.7C84.8,13.3,78.8,26.5,70.5,38.6C62.2,50.7,51.6,61.7,39,69.5C26.4,77.3,13.2,82,0.4,81.3C-12.4,80.6,-24.8,74.5,-36.4,66.1C47.9,57.7,-58.7,47.1,-66.9,34.9C-75.1,22.7,-80.8,8.9,-80,4.6C-79.1,-18.1,-71.8,-31.2,-62.1,-41.8C-52.5,-52.4,-40.5,-60.5,-28.1,-68.2C-15.6,-75.9,-2.8,-83.1,11,-85C24.8,-86.9,44.7,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 italic">
          "Helping small businesses and commercial clients choose the right solar energy solution."
        </h3>
        <p className="text-xl text-white/80 leading-relaxed mb-8">
          Ecotech has been committed to <span className="text-secendcolor font-bold">quality products, excellent service and superior workmanship.</span> Whether it's a rooftop or ground-mounted system, we meet your space considerations with precision.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">Rooftop Systems</span>
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">Ground Mounted</span>
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">Small Business Turnkey</span>
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">Large Facility Custom</span>
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