import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import s8 from '../assets/s8.jpg'

const Carousel = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div
      className="py-20 bg-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* عنوان القسم */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-maincolor text-4xl md:text-5xl font-black mb-4">
            {t("partners.title")}{" "}
            <span className="text-secendcolor">
              {t("partners.highlight")}
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-red-800 rounded-full"></div>

          <p className="mt-4 text-gray-500 font-medium max-w-xl">
            {t("partners.description")}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient */}
        <div
          className={`absolute inset-y-0 ${isRTL ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"} 
          from-white to-transparent w-20 md:w-40 z-10 pointer-events-none`}
        />
        <div
          className={`absolute inset-y-0 ${isRTL ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l"} 
          from-white to-transparent w-20 md:w-40 z-10 pointer-events-none`}
        />

        <HorizontalScrollCarousel isRTL={isRTL} />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({ isRTL }) => {
  return (
    <div className="flex overflow-hidden group">
      <motion.div
        className="flex gap-8 py-4 px-4" 
        animate={{
        
          x: isRTL ? ["0%", "100%"] : ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        }}
        // هذا السطر يضمن أن الحاوية تبدأ من الطرف الصحيح عند التحميل
        style={{ display: "flex", width: "max-content" }}
      >
        {/* نكرر المصفوفة مرتين فقط كافية للحلقة المستمرة */}
        {[...cards, ...cards].map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </motion.div>
    </div>
  );
};
const Card = ({ card }) => {
  return (
    <div className="relative h-[180px] w-[180px] md:h-[220px] md:w-[220px] flex-shrink-0 overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-2xl hover:border-secendcolor/50 transition-all duration-500 group cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-full h-full transition-transform duration-500 scale-90 group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-secendcolor scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default Carousel;

const cards = [
  { url: s1, id: 1 },
  { url: s2, id: 2 },
  { url: s3, id: 3 },
  { url: s4, id: 4 },
  { url: s5, id: 5 },
  { url: s6, id: 6 },
  { url: s7, id: 7 },
  { url: s8, id: 8 },
];
