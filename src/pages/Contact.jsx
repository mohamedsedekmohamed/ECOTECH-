import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import cardss from  '../assets/business/cardss.jpeg'
const Contact = () => {
  const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

const lang=i18n.language==="ar"
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
const phoneNumbers = [
  "+20-1276196600",
  "+20-1281958866",
  "+20-1202426742",
];
  return (
    <div className="min-h-screen bg-white relative" dir={lang?"rtl":"ltr"}>
      {/* Hero Section */}
   <section className="relative bg-maincolor py-24 md:py-32 text-white overflow-hidden">

  {/* Floating Shapes */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <span className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></span>
    <span className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full animate-float-delay"></span>
    <span className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-float-slow"></span>
    <span className="absolute bottom-10 left-20 w-16 h-16 bg-white/15 rounded-full animate-float"></span>
  </div>

  {/* Glow */}
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-therrtcolor/20 rounded-full blur-3xl z-0"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">

      {/* Text */}
      <div data-aos="fade-up" className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 leading-tight">
          {t("contact.hero.title")}
        </h1>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
          {t("contact.hero.subtitle")}
        </p>
      </div>

      {/* Image */}
      <div data-aos="fade-left" className="relative w-full lg:w-1/2 flex justify-center">
        <img
          src={cardss}
          alt="Contact Illustration"
          className="max-w-md w-full rounded-3xl shadow-2xl shadow-black/20"
        />
      </div>

    </div>
  </div>
</section>


      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-maincolor mb-8">
              {t("contact.info.sectionTitle")}
            </h2>

            <div className="grid gap-6">
              {/* Location */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-maincolor/5 transition-all duration-300 group">
                <div className="bg-white p-4 rounded-xl shadow-sm text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-maincolor text-lg mb-1">{t("contact.info.locationTitle")}</h4>
                  <p className="text-gray-600 leading-relaxed">{t("contact.info.locationDesc")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-maincolor/5 transition-all duration-300 group">
                <div className="bg-white p-4 rounded-xl shadow-sm text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-maincolor text-lg mb-1">{t("contact.info.callUsTitle")}</h4>
                  <div className="text-gray-600 space-y-1">
                  <div className={isRTL ? "text-right" : "text-left"}>
  {phoneNumbers.map((num, index) => (
    <p key={index} className="text-sm font-semibold">
      {isRTL ? num.replace("+", "") + "+" : num}
    </p>
  ))}
</div>
                  
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-maincolor/5 transition-all duration-300 group">
                <div className="bg-white p-4 rounded-xl shadow-sm text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-maincolor text-lg mb-1">{t("contact.info.emailTitle")}</h4>
                  <p className="text-gray-600">{t("contact.info.emailAddress")}</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="pt-8 border-t border-gray-100 flex gap-4 items-center text-maincolor/50 font-medium">
              <Clock className="w-5 h-5 text-therrtcolor" />
              <span>{t("contact.info.workingHours")}</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secendcolor/5 rounded-bl-full"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-maincolor mb-2">{t("contact.form.sectionTitle")}</h3>
                <p className="text-gray-500 mb-10">{t("contact.form.subtitle")}</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-maincolor/60 ml-1">{t("contact.form.fullName")}</label>
                      <input type="text" placeholder={t("contact.form.fullNamePlaceholder")} className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-secendcolor transition-all outline-none text-maincolor"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-maincolor/60 ml-1">{t("contact.form.email")}</label>
                      <input type="email" placeholder={t("contact.form.emailPlaceholder")} className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-secendcolor transition-all outline-none text-maincolor"/>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-maincolor/60 ml-1">{t("contact.form.subject")}</label>
                    <input type="text" placeholder={t("contact.form.subjectPlaceholder")} className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-secendcolor transition-all outline-none text-maincolor"/>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-maincolor/60 ml-1">{t("contact.form.message")}</label>
                    <textarea rows="5" placeholder={t("contact.form.messagePlaceholder")} className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-secendcolor transition-all outline-none text-maincolor resize-none"></textarea>
                  </div>

                  <button className="group w-full md:w-auto bg-maincolor text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-therrtcolor transition-all duration-300 shadow-lg shadow-maincolor/20 active:scale-95">
                    {t("contact.form.submit")}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative" data-aos="zoom-in">
        
        <iframe 
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3412.551!2d29.964483!3d31.205418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4e69b59535f%3A0x6b7798361730740a!2zMzHCsDEyJzE5LjUiTiAyOcKwNTcnNTIuMSJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"          className="w-full h-full grayscale contrast-125"
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-maincolor/10 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;
