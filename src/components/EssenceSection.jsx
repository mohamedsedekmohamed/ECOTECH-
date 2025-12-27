import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiGlobe, FiSmile } from "react-icons/fi";
import OIP from "../assets/OIP.webp";
import { useNavigate } from "react-router-dom";
const EssenceSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
      {/* خلفية نصية ضخمة باهتة لإعطاء لمسة عصرية */}
      <div className="absolute top-10 left-0 text-[15rem] font-black text-slate-200/50 leading-none select-none pointer-events-none">
        GAME CHANGER
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب الأيسر: الصور المتداخلة (Visual Action) */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              className="relative z-20 overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white w-4/5 h-[400px]"
            >
              <img 
                src={OIP}
                alt="Solar Innovation" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-5 z-30 bg-[var(--color-maincolor)] p-8 rounded-[2.5rem] shadow-xl text-white max-w-[280px]"
            >
              <FiZap className="text-4xl text-[var(--color-secendcolor)] mb-4" />
              <p className="font-bold text-lg leading-snug">
                EcoTech is changing the game in Egypt's energy market.
              </p>
            </motion.div>

            {/* عنصر ديكور أخضر ليرمز للاستدامة */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-therrtcolor)] rounded-full blur-[80px] opacity-20"></div>
          </div>

          {/* الجانب الأيمن: المحتوى النصي */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[var(--color-therrtcolor)] font-black tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-10 h-[2px] bg-[var(--color-therrtcolor)]"></span> Our Essence
            </h4>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              Energy That’s <span className="text-[var(--color-maincolor)]">Smart</span>, Yet <span className="text-[var(--color-secendcolor)]">Human</span>.
            </h2>

            <div className="space-y-8">
              {/* النقطة الأولى */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-[var(--color-maincolor)] text-2xl group-hover:bg-[var(--color-maincolor)] group-hover:text-white transition-all duration-300">
                  <FiGlobe />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Accessible Innovation</h3>
                  <p className="text-slate-500 font-medium">Sustainable technology becomes a simple and easy part of everyone's daily life.</p>
                </div>
              </div>

              {/* النقطة الثانية */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-[var(--color-therrtcolor)] text-2xl group-hover:bg-[var(--color-therrtcolor)] group-hover:text-white transition-all duration-300">
                  <FiSmile />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Understandable Power</h3>
                  <p className="text-slate-500 font-medium">We break the complexity of solar energy, making it smart and innovative, yet accessible to everyone.</p>
                </div>
              </div>
            </div>

            {/* زر الأكشن (CTA) */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={()=>navigate("/about")}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-5 bg-slate-900/40 text-white font-black rounded-2xl shadow-2xl hover:bg-[var(--color-maincolor)] transition-colors flex items-center gap-4 group"
            >
              DISCOVER OUR WORLD 
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