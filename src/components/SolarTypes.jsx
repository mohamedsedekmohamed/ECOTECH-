import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Share2, CloudOff, BatteryMedium } from 'lucide-react';

const SolarTypes = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const systems = [
    {
      id: "01",
      title: t("solarTypes.systems.onGrid.title"),
      description: t("solarTypes.systems.onGrid.description"),
      icon: <Share2 className="w-8 h-8" />,
      accent: "var(--color-maincolor)",
    },
    {
      id: "02",
      title: t("solarTypes.systems.offGrid.title"),
      description: t("solarTypes.systems.offGrid.description"),
      icon: <CloudOff className="w-8 h-8" />,
      accent: "var(--color-secendcolor)",
    },
    {
      id: "03",
      title: t("solarTypes.systems.hybrid.title"),
      description: t("solarTypes.systems.hybrid.description"),
      icon: <BatteryMedium className="w-8 h-8" />,
      accent: "var(--color-therrtcolor)",
    }
  ];

  return (
    <section 
      className="py-24 bg-maincolor overflow-hidden" 
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 relative">
         <div className="absolute inset-0 z-0">
    <span className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></span>
    <span className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full animate-float-delay"></span>
    <span className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-float-slow"></span>
    <span className="absolute bottom-10 left-20 w-16 h-16 bg-white/15 rounded-full animate-float"></span>
  </div>

        {/* العناوين الرئيسية */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, tracking: "0.1em" }}
            whileInView={{ opacity: 1, tracking: "0.3em" }}
            className="text-white font-bold uppercase text-sm block"
          >
            {t("solarTypes.badge")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-6"
          >
            {t("solarTypes.titleMain")} <span className="text-therrtcolor">{t("solarTypes.titleHighlight")}</span>
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
              className="relative group bg-white rounded-[2.5rem] p-10 shadow-xl shadow-white/5 border border-slate-100 overflow-hidden"
            >
              {/* رقم الخلفية التزييني - تعديل الموضع حسب اللغة */}
              <span className={`absolute -top-4 ${isRTL ? "-left-2" : "-right-2"} text-9xl font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none`}>
                {item.id}
              </span>

              {/* الأيقونة */}
              <div 
                style={{ backgroundColor: item.accent }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform ${isRTL ? "group-hover:-rotate-12" : "group-hover:rotate-12"} transition-transform duration-500`}
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

              {/* خط تزييني سفلي */}
              <div 
                style={{ backgroundColor: item.accent }}
                className={`absolute bottom-0 ${isRTL ? "right-0" : "left-0"} h-1.5 w-0 group-hover:w-full transition-all duration-500`} 
              />
            </motion.div>
          ))}
        </div>

        {/* نص توضيحي إضافي */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-8 bg-white/5 rounded-3xl border border-white/10"
        >
          <p className="text-white font-bold">
            {t("solarTypes.footerNote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarTypes;