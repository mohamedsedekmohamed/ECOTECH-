import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Search, 
  TrendingDown, 
  FileCheck2, 
  Cpu,
  ArrowRight
} from 'lucide-react';

const EnergySavings = () => {
  const features = [
    { title: "Energy Management", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Energy Audits/monitoring", icon: <Search className="w-6 h-6" /> },
    { title: "Energy Optimization", icon: <TrendingDown className="w-6 h-6" /> },
    { title: "EnMS ISO 50001", icon: <FileCheck2 className="w-6 h-6" /> },
    { title: "Energy Savings Tech", icon: <Cpu className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        
        {/* الجزء العلوي: العنوان والمقدمة */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl font-black text-maincolor uppercase leading-tight mb-6"
            >
              Energy <span className="text-therrtcolor">Savings</span>
            </motion.h2>
            <div className="w-20 h-2 bg-secendcolor rounded-full mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              We assist commercial, industrial, and municipal clients to help reduce operating costs. 
              Our solutions help maximize power consumption efficiencies and decrease power costs.
            </p>
          </div>
          
          <div className="lg:w-1/2 bg-maincolor p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-2xl font-bold mb-4">Your Go-To Energy Partner</h3>
            <p className="text-blue-50/80 leading-relaxed mb-6">
              While others address current needs, we provide innovative solutions effective for years to come. 
              We offer a full array of products and services to address all your energy needs.
            </p>
          </div>
        </div>

        {/* شبكة المميزات السريعة */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-secendcolor/50 transition-colors group">
              <div className="text-maincolor group-hover:scale-110 transition-transform mb-3">
                {item.icon}
              </div>
              <span className="text-xs font-black text-maincolor uppercase tracking-tighter text-center">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* حلولنا التفصيلية */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Energy Audit */}
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <div className="w-12 h-12 bg-therrtcolor text-white rounded-xl flex items-center justify-center mb-6">
              <Search />
            </div>
            <h4 className="text-xl font-black text-maincolor mb-4 uppercase">Energy Audit</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Systematic analysis of energy use to identify, quantify, and report on opportunities for improved performance.
            </p>
          </motion.div>

          {/* ISO 50001 */}
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <div className="w-12 h-12 bg-maincolor text-white rounded-xl flex items-center justify-center mb-6">
              <FileCheck2 />
            </div>
            <h4 className="text-xl font-black text-maincolor mb-4 uppercase">EnMS ISO 50001</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              We help achieve ISO 50001 standards, enabling you to take actions to improve energy performance based on EnMS targets.
            </p>
          </motion.div>

          {/* Saving Technologies */}
          <motion.div whileHover={{ y: -10 }} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <div className="w-12 h-12 bg-secendcolor text-maincolor rounded-xl flex items-center justify-center mb-6">
              <Cpu />
            </div>
            <h4 className="text-xl font-black text-maincolor mb-4 uppercase">Saving Tech</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Advanced technologies producing measurable savings up to 30% in compressed air, boilers, and HVAC systems.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EnergySavings