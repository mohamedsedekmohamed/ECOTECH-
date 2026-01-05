import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-maincolor text-white py-20 font-sans  relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* ديكورات خلفية */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-therrtcolor opacity-10 blur-[120px] rounded-full -mr-64 -mt-64 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secendcolor opacity-[0.03] blur-[100px] rounded-full -ml-32 -mb-32"></div>
 <div className="absolute inset-0 z-0">
    <span className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></span>
    <span className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-float-slow"></span>
    <span className="absolute bottom-10 left-20 w-16 h-16 bg-white/15 rounded-full animate-float"></span>
  </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

          {/* العمود الأول */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-block">
              <h2 className="text-5xl font-black tracking-tighter text-secendcolor drop-shadow-sm">ECOTECH</h2>
              <div className="h-1.5 w-1/2 bg-gradient-to-r from-therrtcolor to-transparent mt-1 rounded-full"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm font-light">
              {t("footer.brandDesc")}
            </p>
            <div className="flex gap-4 pt-2">
              {[{ icon: <FaFacebookF />, url: "https://facebook.com/ecotecheg" },
                { icon: <FaInstagram />, url: "https://instagram.com/ecotech.eg" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/ecotechegypt" }
              ].map((item, idx) => (
                <a key={idx} href={item.url} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secendcolor hover:text-maincolor hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-secendcolor text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-therrtcolor"></span> {t("footer.contactHub")}
            </h4>
            <div className="space-y-5">
              <div className="group flex items-start gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-therrtcolor/50 transition-all duration-300">
                <div className="p-3 rounded-2xl bg-therrtcolor/20 text-secendcolor group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pt-1">
                 {t("footerlocation")} 
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-secendcolor font-black uppercase mb-1 tracking-wider">{t("footer.sales")}</p>
                  <p className="text-sm font-semibold">+20 1276196600</p>
                  <p className="text-sm font-semibold">+20 1281958866 </p>
                  <p className="text-sm font-semibold">+20 1202426742</p>
                </div>
              
              </div>

              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-3 text-sm text-gray-300 italic">
                  <FaEnvelope className="text-secendcolor" />
                  <a href={`mailto:${t("footer.email")}`} className="hover:text-white transition">{t("footer.email")}</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <FaPhoneAlt className="text-secendcolor" />
                  <span> 034252270 </span>
                </div>
              </div>
            </div>
          </div>  

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-secendcolor text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-therrtcolor"></span> {t("footer.availability")}
            </h4>
            <div className="bg-gradient-to-br from-white/10 to-transparent rounded-[32px] p-8 border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="space-y-4">
                {t("footer.workingHours", { returnObjects: true }).map((slot, i) => (
                  <div key={i} className="flex justify-between items-center group">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{slot.days}</p>
                      <p className={`text-sm font-medium ${slot.status === 'Closed' ? 'text-red-400' : 'text-white'}`}>{slot.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${slot.status === 'Closed' ? 'bg-red-500' : 'bg-secendcolor'} shadow-[0_0_10px_rgba(255,212,0,0.5)]`}></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <span className="text-[10px] text-white font-black tracking-[0.2em] uppercase">{t("footer.timeZone")}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-medium">
            © {new Date().getFullYear()} <span className="text-white font-black">ECOTECH</span>. All Rights Reserved.
          </div>
          <div className="flex gap-10">
            {t("footer.links", { returnObjects: true }).map((link, index) => (
              <Link
                key={index} 
                to={link.path}
                className="text-[10px] capitalize tracking-widest font-bold text-gray-500 hover:text-secendcolor transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
