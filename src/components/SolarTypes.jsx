import React from 'react';
import { motion } from 'framer-motion';
import { Share2, CloudOff, BatteryMedium, ArrowUpRight } from 'lucide-react';

const SolarTypes = () => {
  const systems = [
    {
      id: "01",
      title: "On-Grid Solar System",
      description: "Allowing you to feed unused solar energy directly into the power grid, where you will receive financial incentive from the electricity company.",
      icon: <Share2 className="w-8 h-8" />,
      accent: "var(--color-maincolor)",
    },
    {
      id: "02",
      title: "Off-Grid Solar System",
      description: "Stand-alone solar power systems are incredibly useful in areas with limited (or completely unavailable) utilities.",
      icon: <CloudOff className="w-8 h-8" />,
      accent: "var(--color-secendcolor)",
    },
    {
      id: "03",
      title: "Hybrid Solar System",
      description: "The best of both worlds by building a solar system that only uses traditional utility power as a backup. Rather than funneling excess energy back, you store it.",
      icon: <BatteryMedium className="w-8 h-8" />,
      accent: "var(--color-therrtcolor)",
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* العناوين الرئيسية */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, tracking: "0.1em" }}
            whileInView={{ opacity: 1, tracking: "0.3em" }}
            className="text-maincolor font-bold uppercase text-sm"
          >
            Sustainable Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-maincolor mt-4 mb-6"
          >
            3 TYPES OF <span className="text-therrtcolor">SOLAR SYSTEMS</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-secendcolor mx-auto rounded-full" />
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {systems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group bg-white rounded-[2.5rem] p-10 shadow-xl shadow-maincolor/5 border border-slate-100 overflow-hidden"
            >
              {/* رقم الخلفية التزييني */}
              <span className="absolute -top-4 -right-2 text-9xl font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none">
                {item.id}
              </span>

              {/* الأيقونة مع لون الأكسنت الخاص بها */}
              <div 
                style={{ backgroundColor: item.accent }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-12 transition-transform duration-500"
              >
                {item.icon}
              </div>

              {/* المحتوى */}
              <h3 className="text-2xl font-black text-maincolor mb-4 flex items-center gap-2">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-medium relative z-10">
                {item.description}
              </p>

              {/* خط تزييني سفلي يتمدد عند التمرير */}
              <div 
                style={{ backgroundColor: item.accent }}
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500" 
              />
            </motion.div>
          ))}
        </div>

        {/* نص توضيحي إضافي أسفل البطاقات */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-8 bg-maincolor/5 rounded-3xl border border-maincolor/10"
        >
          <p className="text-maincolor font-bold">
            💡 Solar power is clean, renewable, and very available, making it an attractive choice for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarTypes;