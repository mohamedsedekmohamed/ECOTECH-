import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { BatteryMedium, Leaf, Zap, Database, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import enr from '../../assets/EnergyStorage.webp';
import MockUp from '../../assets/business/MockUp.png'
const EnergyStorage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  const batteries = [
    {
      title: t("energyStorage.batteries.deepCycle.title"),
      desc: t("energyStorage.batteries.deepCycle.desc"),
      icon: <BatteryMedium className="w-8 h-8" />,
      color: "var(--color-maincolor)"
    },
    {
      title: t("energyStorage.batteries.green.title"),
      desc: t("energyStorage.batteries.green.desc"),
      icon: <Leaf className="w-8 h-8" />,
      color: "var(--color-therrtcolor)"
    },
    {
      title: t("energyStorage.batteries.liIon.title"),
      desc: t("energyStorage.batteries.liIon.desc"),
      icon: <Zap className="w-8 h-8" />,
      color: "var(--color-secendcolor)"
    },
    {
      title: t("energyStorage.batteries.mega.title"),
      desc: t("energyStorage.batteries.mega.desc"),
      icon: <Database className="w-8 h-8" />,
      color: "var(--color-maincolor)"
    }
  ];

  return (
    <div className="bg-white min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-maincolor">
        <div className="absolute inset-0">
          <img 
            src={enr} 
            alt="Energy Storage Systems" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-maincolor/90 via-maincolor/60 to-slate-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secendcolor/20 backdrop-blur-md text-secendcolor text-xs font-bold tracking-widest uppercase mb-8 border border-secendcolor/30">
                <Shield className="w-4 h-4" /> {t("energyStorage.hero.badge")}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.85] mb-8 tracking-tighter">
                {t("energyStorage.hero.titleMain")} <span className="text-secendcolor">{t("energyStorage.hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-blue-50/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                <Trans i18nKey="energyStorage.hero.description">
                   Power doesn’t have to stop... Our <span className="text-white font-bold">advanced storage solutions</span>
                </Trans>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Battery Grid */}
      <section className="relative -mt-24 pb-24 z-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {batteries.map((battery, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -15 }}
                className="group bg-white p-10 rounded-[3rem] shadow-2xl shadow-maincolor/10 border border-slate-100 flex flex-col transition-all duration-500 relative overflow-hidden"
              >
                {/* Decorative background circle - Adjusted for RTL */}
                <div className={`absolute ${isRTL ? "-left-6" : "-right-6"} -top-6 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50`} />

                <div 
                  style={{ backgroundColor: battery.color }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl relative z-10 group-hover:scale-110 ${isRTL ? "group-hover:-rotate-6" : "group-hover:rotate-6"} transition-all duration-500`}
                >
                  {battery.icon}
                </div>

                <div className={`relative z-10 flex-grow ${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl font-black text-maincolor mb-4 leading-tight">
                    {battery.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {battery.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`mt-20 p-12 bg-maincolor rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-10 text-white overflow-hidden relative shadow-2xl border-b-8 border-secendcolor`}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
            />
            
            <div className={`relative z-10 text-center flex  flex-col px-5  ${isRTL ? "lg:justify-start" : "lg:justify-end" } `}>
              <h4 className="text-3xl md:text-4xl font-black mb-4 uppercase italic tracking-tighter">
                {t("energyStorage.cta.title")} <span className="text-secendcolor text-not-italic">{t("energyStorage.cta.highlight")}</span>
              </h4>
              <p className="text-blue-100/70 text-lg  font-light">
                {t("energyStorage.cta.description")}
              </p>
            <button 
              onClick={() => navigate('/contact')} 
              className="relative z-10 bg-secendcolor mt-10 text-maincolor px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl"
            >
              {t("energyStorage.cta.button")}
            </button>
            </div>
 <img src={MockUp} alt="MockUp" className="w-full h-full lg:w-1/2 lg:h-1/2 
 rounded-2xl
 " />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnergyStorage;