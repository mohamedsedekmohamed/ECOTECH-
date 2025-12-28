import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { 
  Search, 
  FileCheck2, 
  Cpu,
  Zap,
  Leaf
} from 'lucide-react';
import Enr from '../../assets/energy.jpeg';

const EnergySavings = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const cards = [
    {
      title: t("energySavings.cards.audit.title"),
      desc: t("energySavings.cards.audit.desc"),
      icon: <Search />,
      color: "bg-therrtcolor"
    },
    {
      title: t("energySavings.cards.iso.title"),
      desc: t("energySavings.cards.iso.desc"),
      icon: <FileCheck2 />,
      color: "bg-maincolor"
    },
    {
      title: t("energySavings.cards.tech.title"),
      desc: t("energySavings.cards.tech.desc"),
      icon: <Cpu />,
      color: "bg-secendcolor"
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      {/* 1. Header Section */}
      <section className="bg-maincolor pt-24 pb-40 px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-[500px] h-[500px] bg-secendcolor/5 rounded-full blur-[120px] ${isRTL ? '-ml-48' : '-mr-48'} -mt-48`}></div>
        
        <div className="absolute inset-0 opacity-40">
          <img 
            src={Enr} 
            alt="Solar Panels" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className={`lg:w-3/5 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-secendcolor text-xs font-bold tracking-widest uppercase mb-6 border border-white/10 backdrop-blur-sm">
                  <Leaf className="w-4 h-4" /> {t("energySavings.badge")}
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] mb-8">
                  {t("energySavings.heroTitle")} <br />
                  <span className="text-therrtcolor">{t("energySavings.heroHighlight")}</span>
                </h2>
                <p className="text-blue-50/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                  <Trans i18nKey="energySavings.heroDesc">
  {t('energySavings.heroDesc')}
                  </Trans>
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-2/5 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Zap className="text-secendcolor" /> {t("energySavings.partnerCard.title")}
              </h3>
              <p className="text-blue-100/60 leading-relaxed text-sm italic">
                "{t("energySavings.partnerCard.quote")}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Solutions Cards */}
      <section className="container mx-auto px-6 -mt-24 pb-24 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
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
              </h4>
              
              <p className="text-slate-500 leading-relaxed font-medium">
                {card.desc}
              </p>

              {/* Decorative Number - Adjusted for RTL */}
              <span className={`absolute -bottom-6 ${isRTL ? '-left-4' : '-right-4'} text-9xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}>
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