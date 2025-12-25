import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Battery, Lightbulb, Droplets, ThermometerSun, ArrowRight } from 'lucide-react';
import SolarTypes from '../../components/SolarTypes';
import SolarSteps from '../../components/SolarSteps';
import  Solar from '../../assets/SolarEnergyhd.webp'
const SolarEnergy = () => {
  // داتا الخدمات المستخرجة من الصور
  const solarServices = [
    { title: "PV systems for homes", icon: <Sun className="w-6 h-6" /> },
    { title: "PV systems for commercials", icon: <Zap className="w-6 h-6" /> },
    { title: "Solar Pumping systems", icon: <Droplets className="w-6 h-6" /> },
    { title: "Solar street lights", icon: <Lightbulb className="w-6 h-6" /> },
    { title: "Solar Water Pumping", icon: <Battery className="w-6 h-6" /> },
    { title: "Solar Water Heating", icon: <ThermometerSun className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-maincolor">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={Solar} 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase"
          >
            Solar <span className="text-secendcolor">Energy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-medium"
          >
            Sustainable power solutions tailored for a cleaner and brighter future.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-gray-100">
          
          {/* Information Block (From Image) */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-maincolor mb-8 uppercase tracking-tight">
              Solar Power Systems
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">
              Whether you are looking for a small solar power system to supplement your home electricity usage 
              or you're looking to power a large commercial property, there is a solar system that will fit your needs. 
              <span className="text-maincolor font-bold"> Solar power is clean, renewable, and very available</span>, 
              making it a relatively inexpensive and attractive choice for everyone.
            </p>
          </div>

          {/* Services Grid (From Image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solarServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-secendcolor/30 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-maincolor text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secendcolor transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-maincolor mb-4 group-hover:text-secendcolor transition-colors">
                  {service.title}
                </h3>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Solar Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070" 
                className="rounded-[3rem] shadow-2xl"
                alt="Ecotech Solar"
              />
              <div className="absolute -bottom-10 -right-10 bg-secendcolor text-maincolor p-8 rounded-3xl font-black text-2xl shadow-xl hidden md:block">
                100% Green <br /> Energy
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-black text-maincolor uppercase">
              Why Ecotech <span className="text-secendcolor">Solar</span>?
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              We provide end-to-end solar solutions, from initial consultation to professional installation 
              and technical support. Our systems are designed to maximize efficiency and provide long-term 
              energy savings for residential and industrial sectors.
            </p>
            <div className="space-y-4 pt-4">
              {['High-Efficiency PV Panels', 'Smart Energy Management', 'Expert Engineering Team'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-maincolor font-bold">
                  <div className="w-6 h-6 bg-secendcolor/20 text-secendcolor rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 fill-current" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SolarTypes/>
      <SolarSteps/>
    </div>
  );
};

export default SolarEnergy;