import React, { useEffect } from "react";
import { Target, Lightbulb, ShieldCheck, Award, Zap, Building2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import ValuesSection from "../components/ValuesSection";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back", 
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Section */}
      <section className="relative py-24 bg-maincolor text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 
            className="text-4xl md:text-7xl font-extrabold mb-6" 
            data-aos="fade-down"
          >
            About Our Company
          </h1>
          <p 
            className="text-lg md:text-2xl max-w-3xl opacity-90 leading-relaxed border-l-4 border-secendcolor pl-6" 
            data-aos="fade-right" 
            data-aos-delay="300"
          >
            Ecotech for Green Solutions is a leading Renewable Energy pioneer, 
            driving Egypt's transition to sustainable power since 2018.
          </p>
        </div>
        {/* Background Decoration */}
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
            <div 
              key={idx}
              className={`p-8 border-b-8 ${stat.color} bg-white shadow-xl rounded-xl hover:-translate-y-2 transition-transform duration-300`}
              data-aos="zoom-in-up" 
              data-aos-delay={idx * 200}
            >
              <h3 className="text-maincolor text-4xl font-black mb-2">{stat.title}</h3>
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
            <div className="bg-maincolor p-5 rounded-2xl shadow-lg shadow-maincolor/30" data-aos="flip-left" data-aos-delay="400">
              <Lightbulb className="text-secendcolor w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-maincolor">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
To be the first Egyptian brand to change people's view of renewable energy and make it part of daily life - not a luxury, but an investment in the future.

            </p>
          </div>

          <div 
            className="flex flex-col items-center text-center md:items-start md:text-left gap-6 bg-white p-10 rounded-2xl shadow-sm" 
            data-aos="fade-left"
          >
            <div className="bg-therrtcolor p-5 rounded-2xl shadow-lg shadow-therrtcolor/30" data-aos="flip-right" data-aos-delay="400">
              <Target className="text-white w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-maincolor">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
             We are building a clean energy future by providing smart, practicable, and reliable solar energy solutions bridging technology and sustainability and empowering every home and business to be self-reliant in generating it's own energy
            </p>
          </div>
        </div>
      </section>

      {/* Authorization Section */}
      <section className="py-24 container mx-auto px-4 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="inline-block px-6 py-2 bg-therrtcolor/10 text-therrtcolor font-black rounded-full mb-6 uppercase tracking-widest text-sm">
              Certified & Authorized
            </div>
            <h2 className="text-4xl font-black text-maincolor mb-8 leading-tight">Expertise You Can <br/><span className="text-therrtcolor">Trust Blindly</span></h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Ecotech is authorized by the <strong className="text-maincolor">Egyptian Ministry of Electricity and Renewable Energy</strong>. 
              We are official partners in shaping Egypt's green future through professional PV systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Installation", "Operation", "Maintenance", "Grid Connection"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-maincolor" data-aos="fade-up" data-aos-delay={i * 100}>
                  <Zap className="text-secendcolor w-5 h-5" /> {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative" data-aos="zoom-in-left">
             <div className="absolute inset-0 bg-secendcolor rounded-3xl rotate-3 scale-105 opacity-20"></div>
             <div className="relative bg-white p-12 rounded-3xl border-2 border-maincolor/10 shadow-2xl">
                <Award className="w-16 h-16 text-secendcolor mb-6" />
                <blockquote className="text-2xl font-bold text-maincolor italic leading-snug">
                  “ We understand the solar industry and the needs of businesses, schools, and public organizations better than anybody ”
                </blockquote>
             </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-maincolor text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-aos="zoom-out">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Who We Serve</h2>
            <div className="w-32 h-2 bg-secendcolor mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8" data-aos="fade-up-right">
              <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-secendcolor">
                <p className="text-xl opacity-90 leading-relaxed italic">
                  "Today’s solar technology is more efficient than ever, and many government initiatives are available to offset the cost of installation."
                </p>
              </div>
              <p className="text-lg opacity-80">
                With Ecotech commercial solar system solutions, no matter what industry you’re in, you’ll see a return on your investment quickly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Small Businesses", icon: <Building2 />  },
                { name: "Large Facilities", icon: <Building2 /> },
                { name: "Rooftop Systems", icon: <Zap /> },
                { name: "Schools", icon: <Award /> },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  data-aos="flip-up" 
                  data-aos-delay={idx * 150}
                  className="bg-white group hover:bg-secendcolor transition-all duration-500 p-8 rounded-2xl text-maincolor text-center shadow-lg cursor-pointer"
                >
                  <div className="mb-4 flex justify-center text-maincolor group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-sm md:text-base uppercase tracking-tight">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ValuesSection/>
    </div>
  );
};

export default About;