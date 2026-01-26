import React, { useEffect, useState } from "react";
import { 
  Upload, Send, User, Mail, Phone, MapPin, 
  Briefcase, GraduationCap, Calendar, DollarSign, 
  Link as LinkIcon, BookOpen, Heart, Landmark, FileText, ChevronDown 
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import cap from '../assets/business/cap.jpeg'
const Careers = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [formData, setFormData] = useState({
    name: "", qualification_id: "", city_id: "", job_id: "",
    birth_date: "", graduate_date: "", address: "", phone: "",
    experiences: "", current_job: "", courses: "", expected_salary: "",
    university: "", collage: "", marital: "", upload_cv: null, link: ""
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 ">
        
        {/* Header */}
      <div className="flex flex-col md:flex-row
       justify-center gap-10 items-center mb-12"
        data-aos="fade-down">

  <div >

  <h1 className="text-4xl font-black text-maincolor mb-4">{t("careers.header.title")}</h1>
  <p className="text-therrtcolor font-medium">{t("careers.header.subtitle")}</p>
  <div className="w-24 h-1 bg-secendcolor mx-auto mt-4 rounded-full"></div>
  </div>

  {/* الصور على اليمين واليسار */}
 
  <img 
    src={cap} 
    alt="Cap" 
    className="w-50  h-40  shadow-lg rounded-2xl object-cover transition-transform duration-500 hover:scale-105" // يمين مائلة مع ظل وحركة
  />

</div>


        {/* Form Container */}
        <div className="bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 border border-gray-100" data-aos="zoom-in">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* حقول البيانات - نمرر t مباشرة للترجمة */}
            <Field 
              label={t("careers.form.name")} 
              placeholder={t("careers.form.namePlaceholder")}
              name="name" value={formData.name} onChange={handleChange} Icon={User} lang={i18n.language} required 
            />
            
            <Field 
              label={t("careers.form.phone")} 
              placeholder={t("careers.form.phonePlaceholder")}
              name="phone" type="tel" value={formData.phone} onChange={handleChange} Icon={Phone} lang={i18n.language} required 
            />

            <SelectField 
              label={t("careers.form.city")} 
              name="city_id" value={formData.city_id} onChange={handleChange} Icon={MapPin} lang={i18n.language} 
              options={[{id: 1, name: t("careers.form.cities.cairo")}, {id: 2, name: t("careers.form.cities.alex")}]} 
            />

            <SelectField 
              label={t("careers.form.marital")} 
              name="marital" value={formData.marital} onChange={handleChange} Icon={Heart} lang={i18n.language} 
              options={[{id: 'single', name: t("careers.form.status.single")}, {id: 'married', name: t("careers.form.status.married")}]} 
            />

            <Field label={t("careers.form.birthDate")} name="birth_date" type="date" value={formData.birth_date} onChange={handleChange} Icon={Calendar} lang={i18n.language} />
            <Field label={t("careers.form.address")} name="address" value={formData.address} onChange={handleChange} Icon={MapPin} lang={i18n.language} />

            <SelectField 
                label={t("careers.form.qualification")} 
                name="qualification_id" value={formData.qualification_id} onChange={handleChange} Icon={GraduationCap} lang={i18n.language}
                options={[{id: 1, name: t("careers.form.edu.bachelor")}]}
            />

            <Field label={t("careers.form.university")} name="university" value={formData.university} onChange={handleChange} Icon={Landmark} lang={i18n.language} />
            <Field label={t("careers.form.college")} name="collage" value={formData.collage} onChange={handleChange} Icon={BookOpen} lang={i18n.language} />
            <Field label={t("careers.form.graduateDate")} name="graduate_date" type="date" value={formData.graduate_date} onChange={handleChange} Icon={Calendar} lang={i18n.language} />

            <Field label={t("careers.form.salary")} name="expected_salary" type="number" value={formData.expected_salary} onChange={handleChange} Icon={DollarSign} lang={i18n.language} />
            <Field label={t("careers.form.portfolio")} name="link" type="url" value={formData.link} onChange={handleChange} Icon={LinkIcon} lang={i18n.language} placeholder="https://..." />

            <TextareaField 
              label={t("careers.form.experiences")} 
              placeholder={t("careers.form.textareaPlaceholder")}
              name="experiences" value={formData.experiences} onChange={handleChange} Icon={FileText} lang={i18n.language} 
            />

            {/* ملف السيرة الذاتية */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-maincolor/80">{t("careers.form.attachCV")}</label>
              <div className="relative border-2 border-dashed border-gray-200 rounded-2xl p-8 bg-gray-50/50 hover:bg-maincolor/5 transition-colors cursor-pointer text-center group">
                <input type="file" name="upload_cv" onChange={handleChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2 group-hover:text-secendcolor transition-colors" />
                <p className="text-sm text-gray-500">
                  {formData.upload_cv ? <span className="text-maincolor font-bold">{formData.upload_cv.name}</span> : t("careers.form.clickUpload")}
                </p>
              </div>
            </div>

            <div className="md:col-span-2 pt-6 text-center">
              <button type="submit" className="w-full md:w-auto px-12 py-4 bg-maincolor text-white font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto uppercase">
                <Send className="w-5 h-5" />
                {t("careers.form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- المكونات الفرعية المعدلة لتقبل الترجمة ---

function Field({ label, placeholder, name, type="text", value, onChange, Icon, lang, ...props }) {
  const isRTL = lang === "ar";
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-bold text-maincolor/80">{label}</label>
      <div className="relative">
        <Icon className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 transform -translate-y-1/2 ${value ? "text-secendcolor" : "text-gray-400"} w-5 h-5 transition-colors`} />
        <input
          name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
          className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-maincolor/20 outline-none transition-all`}
          {...props}
        />
      </div>
    </div>
  );
}

function TextareaField({ label, placeholder, name, value, onChange, Icon, lang, ...props }) {
  const isRTL = lang === "ar";
  return (
    <div className="flex flex-col md:col-span-2">
      <label className="mb-2 text-sm font-bold text-maincolor/80">{label}</label>
      <div className="relative">
        <Icon className={`absolute ${isRTL ? "right-4" : "left-4"} top-5 ${value ? "text-secendcolor" : "text-gray-400"} w-5 h-5`} />
        <textarea
          name={name} value={value} onChange={onChange} placeholder={placeholder} rows={3}
          className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-maincolor/20 outline-none transition-all resize-none`}
          {...props}
        />
      </div>
    </div>
  );
}

function SelectField({ label, name, value, onChange, Icon, options=[], lang, ...props }) {
  const isRTL = lang === "ar";
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-bold text-maincolor/80">{label}</label>
      <div className="relative">
        <Icon className={`absolute ${isRTL ? "right-4" : "left-4"} top-1/2 transform -translate-y-1/2 ${value ? "text-secendcolor" : "text-gray-400"} w-5 h-5 z-10`} />
        <select
          name={name} value={value} onChange={onChange}
          className={`w-full ${isRTL ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 bg-gray-50/50 border border-gray-200 rounded-2xl appearance-none focus:ring-2 focus:ring-maincolor/20 outline-none cursor-pointer`}
          {...props}
        >
          <option value="">{isRTL ? `اختر ${label}` : `Select ${label}`}</option>
          {options.map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
        </select>
        <ChevronDown className={`absolute ${isRTL ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none`} />
      </div>
    </div>
  );
}

export default Careers;