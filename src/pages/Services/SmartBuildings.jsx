import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShieldCheck, 
  Tv, 
  Network, 
  Gauge, 
  ArrowUpRight 
} from 'lucide-react';

const SmartBuildings = () => {
  const smartServices = [
    {
      title: "Building Automation",
      icon: <Cpu className="w-8 h-8" />,
      desc: "Complete control over lighting, HVAC, and building systems for maximum efficiency.",
      color: "var(--color-maincolor/)"
    },
    {
      title: "Monitoring & Security",
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: "Advanced surveillance and security protocols to keep your premises safe 24/7.",
      color: "var(--color-secendcolor)"
    },
    {
      title: "Media & Entertainments",
      icon: <Tv className="w-8 h-8" />,
      desc: "Integrated audio-visual solutions for a seamless entertainment experience.",
      color: "var(--color-therrtcolor)"
    },
    {
      title: "Networking",
      icon: <Network className="w-8 h-8" />,
      desc: "Robust and high-speed infrastructure for reliable connectivity across the facility.",
      color: "var(--color-maincolor)"
    },
    {
      title: "Smart Metering",
      icon: <Gauge className="w-8 h-8" />,
      desc: "Precise energy tracking and smart metering to monitor consumption in real-time.",
      color: "var(--color-secendcolor)"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* العناوين */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-maincolor uppercase tracking-tighter">
              Smart <span className="text-therrtcolor">Buildings</span>
            </h2>
            <p className="mt-4 text-slate-600 font-medium">
              We integrate cutting-edge technology to make your buildings more intelligent, secure, and energy-efficient.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-10 bg-slate-200"></div>
        </div>

        {/* شبكة الخدمات الذكية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white p-10 rounded-[3rem] shadow-xl shadow-maincolor/5 border border-slate-100 overflow-hidden"
            >
              {/* أيقونة تفاعلية */}
              <div 
                style={{ color: service.color }}
                className="mb-8 p-4 bg-slate-50 w-fit rounded-2xl group-hover:bg-maincolor/40 group-hover:text-white transition-all duration-500"
              >
                {service.icon}
              </div>

              {/* المحتوى */}
              <h3 className="text-2xl font-black text-maincolor mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-secendcolor transition-all" />
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium">
                {service.desc}
              </p>

              {/* تأثير تزييني خلفي */}
              <div 
                className="absolute -right-8 -bottom-8 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
            </motion.div>
          ))}
          
          {/* كارت إضافي للمشاريع المخصصة */}
          <motion.div 
            className="p-10 rounded-[3rem] bg-maincolor text-white flex flex-col justify-center items-center text-center border-4 border-dashed border-secendcolor/30"
          >
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <button className="bg-secendcolor text-maincolor px-8 py-3 rounded-xl font-black uppercase text-sm hover:scale-105 transition-transform">
              Contact Experts
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartBuildings;
