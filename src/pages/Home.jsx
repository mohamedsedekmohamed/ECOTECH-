import mainpic from '../assets/mainpic.jpeg';
import Carousel from '../components/Carousel';
import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Target, Rocket, ShieldCheck, TrendingUp } from "lucide-react";
import EssenceSection from '../components/EssenceSection'
export default function Home() {
  const stats = [
    { label: "Founded", value: "2018", icon: ShieldCheck },
    { label: "Current Capital", value: "5M EGP", icon: TrendingUp },
    { label: "Target Capital", value: "50M EGP", icon: Target },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={mainpic} 
            alt="Ecotech Main" 
            className="w-full h-full object-cover"
          />
          {/* طبقة تظليل متدرجة تجعل النص واضحاً */}
          <div className="absolute inset-0 bg-gradient-to-r from-maincolor/90 to-maincolor/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-secendcolor/20 text-secendcolor px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 border border-secendcolor/30">
                <Zap className="w-4 h-4" /> Sustainable Energy Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Empowering The Future With <span className="text-secendcolor">Green Tech</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              We provide cutting-edge solar energy and smart building solutions to help you save energy and protect the environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services/solar-energy" 
                className="bg-secendcolor text-maincolor px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Our Services <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Clients Carousel Section */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="w-full">
          <Carousel />
        </div>
      </section>
      
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="inline-block px-4 py-1 rounded-full bg-secendcolor/10 text-secendcolor font-bold text-sm mb-6 tracking-widest uppercase">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-maincolor mb-8 leading-tight">
              Leading the <span className="text-secendcolor">Green Energy</span> Revolution Since 2018
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ecotech for Green Solutions is a leading Renewable Energy company in the region. 
              Founded as a Joint Stock Company, we started with a clear vision to transform 
              how energy is delivered to our communities.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <stat.icon className="w-6 h-6 text-secendcolor mb-2" />
                  <div className="text-xl font-bold text-maincolor">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Cards (Vision & Mission) */}
          <div className="lg:w-1/2 grid gap-8" data-aos="fade-left">
            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-maincolor text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="bg-secendcolor p-3 rounded-xl w-fit mb-6 shadow-lg shadow-secendcolor/20">
                  <Rocket className="w-6 h-6 text-maincolor" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed italic text-lg">
                  "To be the first Egyptian brand to change people's view of renewable energy and make it part of daily life - not a luxury, but an investment in the future"
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white border-2 border-gray-100 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secendcolor/5 rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="bg-maincolor p-3 rounded-xl w-fit mb-6 shadow-lg shadow-maincolor/20">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-maincolor mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  "We are building a clean energy future by providing smart, practicable, and reliable solar energy solutions bridging technology and sustainability and empowering every home and business to be self-reliant in generating it's own energy"
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
<ServicesSection/>
<EssenceSection/>
    </div>
  );
}