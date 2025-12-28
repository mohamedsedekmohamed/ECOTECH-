import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiLayout, FiShield, FiZap } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const values = [
  { key: "innovation", icon: <FiCpu />, color: "var(--color-maincolor)" },
  { key: "simplicity", icon: <FiLayout />, color: "var(--color-secendcolor)" },
  { key: "trust", icon: <FiShield />, color: "var(--color-maincolor)" },
  { key: "sustainability", icon: <FiCpu />, color: "var(--color-therrtcolor)" },
  { key: "connection", icon: <FiZap />, color: "var(--color-secendcolor)" },
];

const ValuesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* عناصر خلفية تجميلية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-maincolor)] opacity-5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-therrtcolor)] opacity-5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[var(--color-maincolor)] font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            {t("valuesSection.header.subtitle")}
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter"
          >
            {t("valuesSection.header.title")}
          </motion.h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2rem] border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] group"
            >
              {/* Icon Box */}
              <div 
                style={{ backgroundColor: `${val.color}15`, color: val.color }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              >
                {val.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                {t(`valuesSection.values.${val.key}.title`)}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {t(`valuesSection.values.${val.key}.desc`)}
              </p>

              {/* Decorative Line */}
              <div 
                style={{ backgroundColor: val.color }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
