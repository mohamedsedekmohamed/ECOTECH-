import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiGlobe, FiSmile } from "react-icons/fi";
import OIP from "../assets/OIP.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import banner from '../assets/business/banner.png'

const EssenceSection = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative py-24  px-1 lg:px-6 bg-slate-50 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* خلفية نصية ضخمة باهتة */}
      <div className="absolute top-10 left-0 text-[15rem] font-black text-slate-200/50 leading-none select-none pointer-events-none">
        GAME CHANGER
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid  lg:grid-cols-2 gap-16 items-center">

          {/* الجانب الأيسر: الصور المتداخلة */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              className="relative z-20 overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white w-4/5 h-[400px]"
            >
              <img 
                src={banner}
                alt="Solar Innovation" 
                className="w-full h-full "
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-0 lg:-right-5 z-30 bg-[var(--color-maincolor)] p-8 rounded-[2.5rem] shadow-xl text-white max-w-[280px]"
            >
              <FiZap className="text-4xl text-[var(--color-secendcolor)] mb-4" />
              <p className="font-bold text-lg leading-snug">{t("essence.tooltip")}</p>
            </motion.div>

            {/* عنصر ديكور أخضر */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-therrtcolor)] rounded-full blur-[80px] opacity-20"></div>
          </div>

          {/* الجانب الأيمن: المحتوى النصي */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[var(--color-therrtcolor)] px-2 font-black tracking-widest uppercase mb-4 flex items-center gap-2 ">
              <span className="w-10 h-[2px] bg-[var(--color-therrtcolor)]"></span> {t("essence.sectionTitle")}
            </h4>
            <h2 className="text-5xl md:text-6xl px-2 font-black text-slate-900 leading-[1.1] mb-8">
              {t("essence.headline").split(t("essence.highlightMain")).map((part, i, arr) => (
                <>
                  {part}
                  {i < arr.length - 1 && <span className="text-[var(--color-maincolor)]">{t("essence.highlightMain")}</span>}
                </>
              ))}
              {/* {t("essence.headline").includes(t("essence.highlightSecondary")) && (
                <span className="text-[var(--color-secendcolor)]">{t("essence.highlightSecondary")}</span>
              )} */}
            </h2>

            <div className="space-y-8 px-2">
              {t("essence.points", { returnObjects: true }).map((point, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl
                    ${idx === 0 ? "text-[var(--color-maincolor)] group-hover:bg-[var(--color-maincolor)] group-hover:text-white" : ""}
                    ${idx === 1 ? "text-[var(--color-therrtcolor)] group-hover:bg-[var(--color-therrtcolor)] group-hover:text-white" : ""} transition-all duration-300`}>
                    {idx === 0 ? <FiGlobe /> : <FiSmile />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                    <p className="text-slate-500 font-medium">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* زر الأكشن */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={()=>navigate("/about")}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-5 mx-1 bg-slate-900/40 text-white font-black rounded-2xl shadow-2xl hover:bg-[var(--color-maincolor)] transition-colors flex items-center gap-4 group"
            >
              {t("essence.cta")}
              <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-secendcolor)] group-hover:text-slate-900 transition-colors">
                →
              </span>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EssenceSection;
