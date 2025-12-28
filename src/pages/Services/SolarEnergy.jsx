import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Battery, Lightbulb, Droplets, ThermometerSun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SolarTypes from '../../components/SolarTypes';
import SolarSteps from '../../components/SolarSteps';
import Solar from '../../assets/SolarEnergyhd.webp';

const SolarEnergy = () => {
  const { t } = useTranslation();

  const solarServices = [
    { title: t("solar.services.pvHome"), icon: <Sun className="w-6 h-6" /> },
    { title: t("solar.services.pvCommercial"), icon: <Zap className="w-6 h-6" /> },
    { title: t("solar.services.solarPumping"), icon: <Droplets className="w-6 h-6" /> },
    { title: t("solar.services.streetLights"), icon: <Lightbulb className="w-6 h-6" /> },
    { title: t("solar.services.waterPumping"), icon: <Battery className="w-6 h-6" /> },
    { title: t("solar.services.waterHeating"), icon: <ThermometerSun className="w-6 h-6" /> }
  ];

  const features = t("solar.whyChoose.features", { returnObjects: true });

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-maincolor">
        <div className="absolute inset-0 opacity-40">
          <img src={Solar} alt="Solar Panels" className="w-full h-full object-cover"/>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">
             <span className="text-secendcolor">{t("solar.hero.title")}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
            {t("solar.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Info Block */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-gray-100">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-maincolor mb-8 uppercase tracking-tight">{t("solar.infoBlock.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-5xl mx-auto font-medium">{t("solar.infoBlock.desc")}</p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solarServices.map((service, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-secendcolor/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-maincolor text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secendcolor transition-colors duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-maincolor mb-4 group-hover:text-secendcolor transition-colors">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Solar */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070" className="rounded-[3rem] shadow-2xl" alt="Ecotech Solar"/>
              <div className="absolute -bottom-10 -right-10 bg-secendcolor text-maincolor p-8 rounded-3xl font-black text-2xl shadow-xl hidden md:block">{t("solar.whyChoose.greenBadge")}</div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-black text-maincolor uppercase"> <span className="text-secendcolor">{t("solar.whyChoose.title")}</span></h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">{t("solar.whyChoose.desc")}</p>
            <div className="space-y-4 pt-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-maincolor font-bold">
                  <div className="w-6 h-6 bg-secendcolor/20 text-secendcolor rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 fill-current"/>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SolarTypes/>
      <SolarSteps/>
    </div>
  );
};

export default SolarEnergy;
