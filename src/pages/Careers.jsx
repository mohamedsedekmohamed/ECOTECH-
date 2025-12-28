import React, { useEffect } from "react";
import { Upload, Send, User, Mail, Phone, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t,i18n } = useTranslation();
const lang=i18n.language==="ar"
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16" dir={lang?"rtl":"ltr"}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-black text-maincolor mb-4">
            {t("careers.header.title")}
          </h1>
          <p className="text-therrtcolor font-medium">
            {t("careers.header.subtitle")}
          </p>
          <div className="w-24 h-1 bg-secendcolor mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100" data-aos="zoom-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-maincolor font-bold flex items-center gap-2">
                  <User className="w-4 h-4 text-secendcolor" /> {t("careers.form.name")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50"
                  placeholder={t("careers.form.namePlaceholder")}
                />
              </div>

              <div className="space-y-2">
                <label className="text-maincolor font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secendcolor" /> {t("careers.form.email")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50"
                  placeholder={t("careers.form.emailPlaceholder")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-maincolor font-bold flex items-center gap-2">
                <Phone className="w-4 h-4 text-secendcolor" /> {t("careers.form.phone")}
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50"
                placeholder={t("careers.form.phonePlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <label className="text-maincolor font-bold flex items-center gap-2">
                <Upload className="w-4 h-4 text-secendcolor" /> {t("careers.form.attachCV")}
              </label>
              <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-maincolor/5 transition-colors cursor-pointer group">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2 group-hover:text-maincolor transition-colors" />
                  <p className="text-sm text-gray-500">
                    <span className="text-maincolor font-bold">{t("careers.form.clickUpload")}</span> {t("careers.form.orDrag")}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{t("careers.form.fileTypes")}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-maincolor font-bold flex items-center gap-2">{t("careers.form.moreDetails")}</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50 resize-none"
                placeholder={t("careers.form.textareaPlaceholder")}
              ></textarea>
            </div>

            <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-maincolor text-white font-bold rounded-xl shadow-lg shadow-maincolor/30 hover:bg-maincolor/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t("careers.form.submit")}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center mt-8 text-gray-500 text-sm" data-aos="fade-up">
          {t("careers.footer")}
        </p>
      </div>
    </div>
  );
};

export default Careers;
