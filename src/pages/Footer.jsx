import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-maincolor text-white py-20 font-sans relative overflow-hidden  ">
      {/* عناصر ديكورية خلفية لإعطاء عمق عصري */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-therrtcolor opacity-10 blur-[120px] rounded-full -mr-64 -mt-64 transition-all duration-700"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secendcolor opacity-[0.03] blur-[100px] rounded-full -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          
          {/* العمود الأول: الهوية الرقمية */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-block">
              <h2 className="text-5xl font-black tracking-tighter text-secendcolor drop-shadow-sm">
                ECOTECH
              </h2>
              <div className="h-1.5 w-1/2 bg-gradient-to-r from-therrtcolor to-transparent mt-1 rounded-full"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm font-light">
              Innovating the digital landscape with sustainable solutions and premium technical excellence.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: <FaFacebookF />, url: "https://facebook.com/ecotecheg" },
                { icon: <FaInstagram />, url: "https://instagram.com/ecotech.eg" },
                { icon: <FaTwitter />, url: "https://x.com/ecotecheg" }
              ].map((item, idx) => (
                <a key={idx} href={item.url} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secendcolor hover:text-maincolor hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* العمود الثاني: بيانات التواصل (تنسيق البطاقات الذكية) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-secendcolor text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-therrtcolor"></span> Contact Hub
            </h4>
            <div className="space-y-5">
              <div className="group flex items-start gap-4 p-4 rounded-3xl bg-white/5 border border-white/10 hover:border-therrtcolor/50 transition-all duration-300">
                <div className="p-3 rounded-2xl bg-therrtcolor/20 text-secendcolor group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt size={20} />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed pt-1">
                  20th St. behind Green Plaza, Green Towers, Tower 17, Floor 11, Smouha, Alexandria, Egypt.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-secendcolor font-black uppercase mb-1 tracking-wider">Sales</p>
                  <p className="text-sm font-semibold">+20 1276196600</p>
                </div>
                <div className="p-4 rounded-3xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-secendcolor font-black uppercase mb-1 tracking-wider">Support</p>
                  <p className="text-sm font-semibold">+20 155 154 6472</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-3 text-sm text-gray-300 italic">
                  <FaEnvelope className="text-secendcolor" />
                  <a href="mailto:info@ecotecheg.com" className="hover:text-white transition">info@ecotecheg.com</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <FaPhoneAlt className="text-secendcolor" />
                  <span>+20 3 426 4787</span>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الثالث: ساعات العمل (تنسيق حديث) */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-secendcolor text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-therrtcolor"></span> Availability
            </h4>
            <div className="bg-gradient-to-br from-white/10 to-transparent rounded-[32px] p-8 border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="space-y-4">
                {[
                  { days: "Sun - Thu", time: "9:00 am - 5:00 pm", status: "Active" },
                  { days: "Fri - Sat", time: "Day Off", status: "Closed" }
                ].map((slot, i) => (
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
                <span className="text-[10px] text-white  font-black tracking-[0.2em] uppercase">Egypt Standard Time</span>
              </div>
            </div>
          </div>

        </div>

        {/* التذييل السفلي */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-medium">
            © {new Date().getFullYear()} <span className="text-white font-black">ECOTECH</span>. All Rights Reserved.
          </div>
          <div className="flex gap-10">
           {['home', 'about', 'contact'].map((link,index) => (
  <Link
    key={index} 
    to={link}
    className="text-[10px] capitalize tracking-widest font-bold text-gray-500 hover:text-secendcolor transition-colors"
  >
    {link}
  </Link>
))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;