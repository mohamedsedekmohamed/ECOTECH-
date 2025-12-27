import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Search, 
  TrendingDown, 
  FileCheck2, 
  Cpu,
  ArrowRight,
  Zap,
  Leaf
} from 'lucide-react';
import Enr from '../../assets/energy.jpeg';
const EnergySavings = () => {
  const features = [
    { title: "Energy Management", icon: <BarChart3 className="w-5 h-5" /> },
    { title: "Energy Monitoring", icon: <Search className="w-5 h-5" /> },
    { title: "Optimization", icon: <TrendingDown className="w-5 h-5" /> },
    { title: "ISO 50001", icon: <FileCheck2 className="w-5 h-5" /> },
    { title: "Savings Tech", icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Section (Hero-like) */}
      <section className="bg-maincolor pt-24 pb-40 px-6 relative overflow-hidden">
        {/* العناصر الديكورية الخلفية */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secendcolor/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
 <div className="absolute inset-0 opacity-40">
          <img 
            src={Enr} 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secendcolor text-xs font-bold tracking-widest uppercase mb-6 border border-white/10 backdrop-blur-sm">
                  <Leaf className="w-4 h-4" /> Sustainable Efficiency
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] mb-8">
                  Energy <br />
                  <span className="text-therrtcolor">Savings</span>
                </h2>
                <p className="text-blue-50/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                  We assist commercial and industrial clients to <span className="text-white font-medium">reduce operating costs</span>. 
                  Our solutions maximize power efficiencies and decrease overall energy expenses.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-2/5 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="text-secendcolor" /> Your Energy Partner
              </h3>
              <p className="text-blue-100/60 leading-relaxed text-sm italic">
                "While others address current needs, we provide innovative solutions effective for years to come."
              </p>
              <div className="mt-8 flex gap-2">
                <div className="h-1 w-12 bg-secendcolor rounded-full"></div>
                <div className="h-1 w-4 bg-white/20 rounded-full"></div>
                <div className="h-1 w-4 bg-white/20 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Features Bar & Detailed Cards */}
      <section className="container mx-auto px-6 -mt-24 pb-24 relative z-20">
        
        {/* Quick Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
  {features.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.05 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group relative flex flex-col items-center justify-center p-8 bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-secendcolor/40 hover:bg-white transition-all duration-300"
    >
      {/* خلفية مخفية تظهر عند الحوم (Hover) */}
      <div className="absolute inset-0 bg-gradient-to-br from-secendcolor/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity" />

      {/* دائرة الأيقونة */}
      <div className="relative mb-4 w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-maincolor group-hover:bg-maincolor group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-inner">
        {item.icon}
      </div>

      {/* النص */}
      <span className="relative z-10 text-[11px] font-black text-maincolor/70 group-hover:text-maincolor uppercase tracking-[0.15em] text-center leading-tight">
        {item.title}
      </span>

      {/* مؤشر سفلي صغير */}
      <div className="absolute bottom-4 w-1 h-1 bg-secendcolor rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[3] transition-all duration-300" />
    </motion.div>
  ))}
</div>

        {/* Detailed Solutions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Energy Audit",
              desc: "Systematic analysis of energy use to identify, quantify, and report on opportunities for improved performance.",
              icon: <Search />,
              color: "bg-therrtcolor"
            },
            {
              title: "EnMS ISO 50001",
              desc: "We help achieve ISO 50001 standards, enabling you to take actions based on established EnMS targets.",
              icon: <FileCheck2 />,
              color: "bg-maincolor"
            },
            {
              title: "Saving Tech",
              desc: "Advanced technologies producing measurable savings up to 30% in compressed air, boilers, and HVAC systems.",
              icon: <Cpu />,
              color: "bg-secendcolor"
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12 }}
              className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-2xl shadow-slate-200/60 relative overflow-hidden transition-all duration-500"
            >
              <div className={`w-14 h-14 ${card.color} ${card.color === 'bg-secendcolor' ? 'text-maincolor' : 'text-white'} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                {card.icon}
              </div>
              
              <h4 className="text-2xl font-black text-maincolor mb-4 uppercase tracking-tight flex items-center gap-2">
                {card.title}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-secendcolor" />
              </h4>
              
              <p className="text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>

              {/* Decorative Number */}
              <span className="absolute -bottom-6 -right-4 text-9xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnergySavings;