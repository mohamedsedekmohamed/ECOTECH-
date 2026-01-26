import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MessagesSquare, 
  Ruler, 
  FileText, 
  Construction, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import man from '../assets/business/man.jpeg'

const SolarSteps = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  const steps = [
    {
      id: 1,
      title: t("solarSteps.steps.consultation.title"),
      desc: t("solarSteps.steps.consultation.desc"),
      icon: <MessagesSquare />,
      color: "var(--color-maincolor)"
    },
    {
      id: 2,
      title: t("solarSteps.steps.design.title"),
      desc: t("solarSteps.steps.design.desc"),
      icon: <Ruler />,
      color: "var(--color-secendcolor)"
    },
    {
      id: 3,
      title: t("solarSteps.steps.paperwork.title"),
      desc: t("solarSteps.steps.paperwork.desc"),
      icon: <FileText />,
      color: "var(--color-therrtcolor)"
    },
    {
      id: 4,
      title: t("solarSteps.steps.installation.title"),
      desc: t("solarSteps.steps.installation.desc"),
      icon: <Construction />,
      color: "var(--color-maincolor)"
    },
    {
      id: 5,
      title: t("solarSteps.steps.activation.title"),
      desc: t("solarSteps.steps.activation.desc"),
      icon: <Zap />,
      color: "var(--color-secendcolor)"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6">
     
     <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

  {/* Text Content */}
  <div className={`max-w-2xl ${isRTL ? "text-right" : "text-left"}`}>
    <motion.h2
      initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-black text-maincolor mb-6 uppercase tracking-tight leading-tight"
    >
      {t("solarSteps.title")} <br />
      <span className="text-therrtcolor">
        {t("solarSteps.highlight")}
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-slate-600 text-lg leading-relaxed font-medium"
    >
      {t("solarSteps.description")}
    </motion.p>
  </div>

  {/* Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full lg:w-1/2 flex justify-center"
  >
    <img
      src={man}
      alt="Solar Steps"
      className="max-w-md w-full rounded-3xl shadow-xl shadow-maincolor/30 hover:scale-105 transition-transform duration-500"
    />
  </motion.div>

</div>


        {/* Steps Grid */}
        <div className="relative my-3">
          {/* الخط الواصل - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:border-secendcolor/30 group-hover:shadow-2xl">
                  
                  {/* الدائرة والرقم */}
                  <div 
                    style={{ backgroundColor: step.color }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg relative"
                  >
                    {step.icon}
                    <span className={`absolute -top-3 ${isRTL ? "-left-3" : "-right-3"} w-8 h-8 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-maincolor font-black text-xs`}>
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-maincolor mb-4 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  <motion.div className="mt-6 text-therrtcolor opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 size={24} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 bg-maincolor p-10 rounded-[3rem] text-center text-white relative overflow-hidden group"
        >
          <div className={`absolute top-0 ${isRTL ? "left-0" : "right-0"} w-64 h-64 bg-secendcolor/10 rounded-full ${isRTL ? "-ml-20" : "-mr-20"} -mt-20 blur-3xl group-hover:bg-secendcolor/20 transition-all`} />
          <h4 className="text-2xl font-bold mb-4 relative z-10">{t("solarSteps.cta.title")}</h4>
          <button 
            onClick={() => navigate("/contact")} 
            className="bg-secendcolor text-maincolor px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform relative z-10 shadow-lg"
          >
            {t("solarSteps.cta.button")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarSteps;