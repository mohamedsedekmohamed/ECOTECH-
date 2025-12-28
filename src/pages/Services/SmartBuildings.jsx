import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Cpu, 
  ShieldCheck, 
  Tv, 
  Network, 
  Gauge, 
  ChevronRight
} from 'lucide-react';
import sor from '../../assets/SmartBuildingshd.webp';

const SmartBuildings = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const smartServices = [
    {
      title: t("smartBuildings.services.automation.title"),
      icon: <Cpu className="w-8 h-8" />,
      desc: t("smartBuildings.services.automation.desc"),
      color: "var(--color-maincolor)"
    },
    {
      title: t("smartBuildings.services.security.title"),
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: t("smartBuildings.services.security.desc"),
      color: "var(--color-secendcolor)"
    },
    {
      title: t("smartBuildings.services.media.title"),
      icon: <Tv className="w-8 h-8" />,
      desc: t("smartBuildings.services.media.desc"),
      color: "var(--color-therrtcolor)"
    },
    {
      title: t("smartBuildings.services.networking.title"),
      icon: <Network className="w-8 h-8" />,
      desc: t("smartBuildings.services.networking.desc"),
      color: "var(--color-maincolor)"
    },
    {
      title: t("smartBuildings.services.metering.title"),
      icon: <Gauge className="w-8 h-8" />,
      desc: t("smartBuildings.services.metering.desc"),
      color: "var(--color-secendcolor)"
    }
  ];

  return (
    <div className="bg-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-maincolor">
        <div className="absolute inset-0">
          <img 
            src={sor} 
            alt="Smart Buildings" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maincolor/80 via-maincolor/40 to-slate-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-secendcolor uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              {t("smartBuildings.hero.badge")}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
              {t("smartBuildings.hero.titleMain")} <span className="text-secendcolor">{t("smartBuildings.hero.titleHighlight")}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="relative -mt-20 pb-24 z-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:border-secendcolor/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className={`absolute ${isRTL ? "-left-4" : "-right-4"} -top-4 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-secendcolor/10 transition-colors duration-500`} />

                <div 
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  className="mb-8 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500"
                >
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-maincolor mb-4 flex items-center justify-between">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Line Decoration */}
                <div className={`absolute bottom-0 ${isRTL ? "right-0" : "left-0"} h-1 bg-secendcolor w-0 group-hover:w-full transition-all duration-500`} />
              </motion.div>
            ))}
            
            {/* Custom Solution Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`p-10 rounded-[2.5rem] bg-maincolor text-white flex flex-col justify-between items-start relative overflow-hidden group shadow-2xl ${isRTL ? "text-right" : "text-left"}`}
            >
              <div className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} p-8 opacity-10`}>
                 <Network size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 leading-tight">{t("smartBuildings.cta.title")}</h3>
                <p className="text-slate-300 text-sm mb-8">{t("smartBuildings.cta.desc")}</p>
              </div>

              <button className="group flex items-center gap-3 bg-secendcolor text-maincolor px-6 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all w-full justify-center">
                {t("smartBuildings.cta.button")}
                <ChevronRight className={`w-4 h-4 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartBuildings;