import React, { useEffect, useState } from "react";
import {
  Target,
  Lightbulb,
  Building,
  Award,
  Zap,
  Building2,
} from "lucide-react";
import pppd from "../assets/pppd2.pdf";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import ValuesSection from "../components/ValuesSection";
// Schools & Academies
import {useNavigate} from 'react-router-dom';
import app from '../assets/business/app.png'
import lab from '../assets/business/lab.png'
import { motion } from 'framer-motion';
const About = () => {
    const { t, i18n } = useTranslation();

  const projects = [
    {
      id: "educational",
      name: t("about.projects.educational"),
      icon: <Award />,
    
    },
    {
      id: "residential",
      name: t("about.projects.residential"),
      icon: <Building2 />,
     
    },
    {
      id: "largeFacilities",
      name: t("about.projects.largeFacilities"),
      icon: <Building2 />,
     
    },
  ];
  const isRTL = i18n.language === "ar";
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
const navigate = useNavigate();
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
    setCurrentImgIdx(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <div
      className="min-h-screen bg-white overflow-x-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header Section */}
      <section className="relative py-24 bg-maincolor text-white overflow-hidden">
 <div className="absolute inset-0 z-0">
    <span className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></span>
    <span className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full animate-float-delay"></span>
    <span className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-float-slow"></span>
    <span className="absolute bottom-10 left-20 w-16 h-16 bg-white/15 rounded-full animate-float"></span>
  </div>


        <div className="container mx-auto px-4 relative z-10">
          <h1
            className="text-4xl md:text-7xl font-extrabold mb-6"
            data-aos="fade-down"
          >
            {t("about.header.title")}
          </h1>
          <p
            className={`text-lg md:text-2xl max-w-3xl opacity-90 leading-relaxed ${isRTL ? "border-r-4 pr-6"  : "border-l-4 pl-6"}   border-secendcolor `}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            {t("about.header.desc")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t("about.stats", { returnObjects: true }).map((stat, idx) => (
            <div
              key={idx}
              className={`p-8 border-b-8 border-secendcolor bg-white shadow-xl rounded-xl hover:-translate-y-2 transition-transform duration-300`}
              data-aos="zoom-in-up"
              data-aos-delay={idx * 200}
            >
              <h3 className="text-maincolor text-4xl font-black mb-2">
                {stat.title}
              </h3>
              <p className="text-therrtcolor font-bold text-lg">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div
            className="flex flex-col items-center text-center md:items-start md:text-left gap-6 bg-white p-10 rounded-2xl shadow-sm"
            data-aos="fade-right"
          >
            <div className="bg-maincolor p-5 rounded-2xl shadow-lg shadow-maincolor/30">
              <Lightbulb className="text-secendcolor w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-maincolor">
              {t("about.vision.title")}
            </h2>
            <p
              className={`text-gray-600 leading-relaxed text-lg text-${
                isRTL ? "right" : "left"
              }`}
            >
              {t("about.vision.desc")}
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center md:items-start md:text-left gap-6 bg-white p-10 rounded-2xl shadow-sm"
            data-aos="fade-left"
          >
            <div className="bg-therrtcolor p-5 rounded-2xl shadow-lg shadow-therrtcolor/30">
              <Target className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-maincolor">
              {t("about.mission.title")}
            </h2>
            <p
              className={`text-gray-600 leading-relaxed text-lg text-${
                isRTL ? "right" : "left"
              }`}
            >
              {t("about.mission.desc")}
            </p>
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
          
          <h2 className="text-2xl md:text-4xl font-black text-maincolor mb-4 leading-tight">
            {t("about.certification.subtitle")}
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            {t("about.certification.desc.part1")}{" "}
            <span className="text-maincolor font-bold underline decoration-secendcolor decoration-2 underline-offset-4">
              {t("about.certification.desc.highlight")}
            </span>{" "}
            {t("about.certification.desc.part2")}
          </p>
        </div>
      </div>
    </div>
<span className="block text-center mb-2">
  <a 
    href={pppd}  // ضع هنا رابط ملف الـ PDF
    target="_blank"            // يفتح في تاب جديدة
    rel="noopener noreferrer"  // حماية
  className="inline-block bg-maincolor text-white font-bold uppercase text-sm tracking-[0.2em] rounded-3xl px-6 py-3
               hover:bg-maincolor/80 transition-colors duration-200
               animate-pulse-glow"
  >  
    {t("about.certification.title")}
  </a>
</span>

    {/* الجزء السفلي: الخبرة التجارية (بطاقات صغيرة) */}
    <div
      className="grid md:grid-cols-2 gap-8"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* بطاقة الخبرة */}
      <div className="group bg-maincolor p-10 rounded-[2rem] text-white shadow-2xl hover:scale-[1.02] transition-transform duration-500">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-white/10 rounded-xl group-hover:bg-secendcolor transition-colors">
            <Zap className="text-white" size={30} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t("about.expertise.title")}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {t("about.expertise.desc")}
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
            <h3 className="text-2xl font-bold mb-4">
              {t("about.innovation.title")}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("about.innovation.desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 px-4 md:px-16">

  {/* بطاقة 1 */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-maincolor/30 hover:scale-105 transition-transform duration-500"
  >
    <img src={lab} alt="Lab" className="w-full h-96 object-cover" />
    <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4">
      <h3 className="text-white text-xl md:text-2xl font-bold">
 </h3>
    </div>
  </motion.div>

  {/* بطاقة 2 */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-maincolor/30 hover:scale-105 transition-transform duration-500"
  >
    <img src={app} alt="App" className="w-full h-96 object-cover" />
    <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4">
      <h3 className="text-white text-xl md:text-2xl font-bold">
      </h3>
    </div>
  </motion.div>

</div>
      </section>
      {/* Grid Projects Section */}
      <section className="py-24 bg-maincolor text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-aos="zoom-out">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
                {t("about.whoWeServe.title")}

            </h2>
            <div className="w-32 h-2 bg-secendcolor mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8" data-aos="fade-up-right">
              <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-secendcolor">
                <p className="text-xl opacity-90 leading-relaxed italic">
                   {t("about.whoWeServe.quote")}

                </p>
              </div>
              <p className="text-lg opacity-80">
           {t("about.whoWeServe.desc")}

              </p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                {projects.map((item, idx) => (
                  <div
                    key={idx}
                
                   onClick={() => {
            navigate(`/projects#${item.id}`);
        
                    }}
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
  {t("about.whoWeServe.viewGallery")}
                          <ChevronRight
                            size={14}
                            className="transform group-hover:translate-x-1 transition-transform"
                          />
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
          {t("about.solarTiming.title")}{" "}
          <span className="text-secendcolor">{t("about.solarTiming.highlight")}</span>{" "}
          {t("about.solarTiming.title2")}
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            {t("about.solarTiming.desc1.part1")}
            <span className="font-bold text-maincolor">{t("about.solarTiming.desc1.highlight")}</span>
          </p>
          <p>
            {t("about.solarTiming.desc2.part1")}
            <span className="text-green-600 font-bold">{t("about.solarTiming.desc2.highlight")}</span>
            {t("about.solarTiming.desc2.part2")}
          </p>
        </div>

        {/* Warranty Badge */}
        <div className="mt-10 p-6 bg-white rounded-2xl shadow-xl border-l-8 border-maincolor flex items-center gap-6">
          <Award className="text-secendcolor w-12 h-12 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-maincolor text-xl">{t("about.solarTiming.warranty.title")}</h4>
            <p className="text-sm text-gray-500">{t("about.solarTiming.warranty.desc")}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6" data-aos="fade-left">
        {[
          { title: t("about.solarTiming.features.turnkey.title"), desc: t("about.solarTiming.features.turnkey.desc"), icon: <Zap /> },
          { title: t("about.solarTiming.features.custom.title"), desc: t("about.solarTiming.features.custom.desc"), icon: <Building /> },
          { title: t("about.solarTiming.features.config.title"), desc: t("about.solarTiming.features.config.desc"), icon: <Target /> },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-secendcolor transition-all group"
          >
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
          <path
            fill="#FFFFFF"
            d="M44.7,-76.4C58.1,-69.2,69.2,-57.1,76.5,-43.3C83.8,-29.5,87.3,-14.7,86.1,-0.7C84.8,13.3,78.8,26.5,70.5,38.6C62.2,50.7,51.6,61.7,39,69.5C26.4,77.3,13.2,82,0.4,81.3C-12.4,80.6,-24.8,74.5,-36.4,66.1C47.9,57.7,-58.7,47.1,-66.9,34.9C-75.1,22.7,-80.8,8.9,-80,4.6C-79.1,-18.1,-71.8,-31.2,-62.1,-41.8C-52.5,-52.4,-40.5,-60.5,-28.1,-68.2C-15.6,-75.9,-2.8,-83.1,11,-85C24.8,-86.9,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 italic">{t("about.solarTiming.commitment.title")}</h3>
        <p className="text-xl text-white/80 leading-relaxed mb-8">
          {t("about.solarTiming.commitment.desc.part1")}
          <span className="text-secendcolor font-bold">{t("about.solarTiming.commitment.desc.highlight")}</span>
          {t("about.solarTiming.commitment.desc.part2")}
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">{t("about.solarTiming.commitment.tags.rooftop")}</span>
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">{t("about.solarTiming.commitment.tags.ground")}</span>
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">{t("about.solarTiming.commitment.tags.small")}</span>
          <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold">{t("about.solarTiming.commitment.tags.large")}</span>
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
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full text-black shadow-lg"
            >
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
                  <button
                    onClick={prevImage}
                    className="absolute left-4 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all"
                  >
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
