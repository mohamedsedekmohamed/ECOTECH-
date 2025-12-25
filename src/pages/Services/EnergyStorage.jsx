import React from 'react';
import { motion } from 'framer-motion';
import { BatteryMedium, Leaf, Zap, Database, ArrowRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const EnergyStorage = () => {
  const navigate = useNavigate();
  const batteries = [
    {
      title: "Deep-cycle Batteries",
      desc: "Designed for deep discharge cycles, perfect for consistent off-grid solar storage.",
      icon: <BatteryMedium className="w-8 h-8" />,
      color: "var(--color-maincolor)"
    },
    {
      title: "Green Batteries",
      desc: "Environmentally friendly storage solutions with sustainable materials.",
      icon: <Leaf className="w-8 h-8" />,
      color: "var(--color-therrtcolor)"
    },
    {
      title: "Li-ion Batteries",
      desc: "High-density Lithium-ion tech for faster charging and longer life spans.",
      icon: <Zap className="w-8 h-8" />,
      color: "var(--color-secendcolor)"
    },
    {
      title: "Mega Batteries",
      desc: "Large-scale energy storage systems for industrial and municipal projects.",
      icon: <Database className="w-8 h-8" />,
      color: "var(--color-maincolor)"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* خلفية تزيينية خفيفة */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-maincolor/5 rounded-l-[10rem] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black text-maincolor uppercase tracking-tight"
            >
              Energy <span className="text-therrtcolor">Storage</span>
            </motion.h2>
            <p className="mt-6 text-slate-600 text-lg font-medium leading-relaxed">
              Power doesn’t have to stop when the sun goes down. Our advanced storage solutions ensure you have a reliable energy supply 24/7.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white border-2 border-maincolor text-maincolor px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-maincolor hover:text-white transition-all shadow-xl shadow-maincolor/10"
         onClick={()=>{navigate('/contact')}}
         >
            <Info  className="w-5 h-5" /> For More Information
          </motion.button>
        </div>

        {/* شبكة البطاريات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {batteries.map((battery, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[3rem] shadow-xl shadow-maincolor/5 border border-slate-100 flex flex-col h-full transition-all"
            >
              {/* أيقونة البطارية */}
              <div 
                style={{ backgroundColor: battery.color }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform"
              >
                {battery.icon}
              </div>

              <h3 className="text-xl font-black text-maincolor mb-4">
                {battery.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {battery.desc}
              </p>

             
            </motion.div>
          ))}
        </div>

        {/* الجزء السفلي الترويجي */}
        <div className="mt-20 p-8 bg-maincolor rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-secendcolor/5 opacity-50" />
          <div className="relative z-10">
            <h4 className="text-2xl font-bold">Need help choosing the right storage?</h4>
            <p className="text-blue-100/70">Our engineers can calculate the exact capacity you need.</p>
          </div>
          <button onClick={()=>{navigate('/contact')}} className="relative z-10 bg-secendcolor text-maincolor px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors">
            Get Technical Advice
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnergyStorage;
