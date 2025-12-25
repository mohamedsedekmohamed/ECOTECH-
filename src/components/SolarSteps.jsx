import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessagesSquare, 
  Ruler, 
  FileText, 
  Construction, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const SolarSteps = () => {
  const navigate = useNavigate();
  const steps = [
    {
      id: 1,
      title: "CONSULTATION",
      desc: "We’ll take a look at your energy needs, and tell you how much you can save by going solar. Simple and free.",
      icon: <MessagesSquare />,
      color: "var(--color-maincolor)"
    },
    {
      id: 2,
      title: "DESIGN",
      desc: "We’ll visit your home to examine your roof and measurements. Our engineers will design a custom system to shrink your bills.",
      icon: <Ruler />,
      color: "var(--color-secendcolor)"
    },
    {
      id: 3,
      title: "PAPERWORK",
      desc: "Your Account Manager handles all permits, paperwork, and financing. You just sit back and relax.",
      icon: <FileText />,
      color: "var(--color-therrtcolor)"
    },
    {
      id: 4,
      title: "INSTALLATION",
      desc: "Panels up and ready in about 48 hours. Once finished, we’ll show you how to manage your new system.",
      icon: <Construction />,
      color: "var(--color-maincolor)"
    },
    {
      id: 5,
      title: "ACTIVATION",
      desc: "Once the utility gives approval, you can start generating your own clean, renewable energy.",
      icon: <Zap />,
      color: "var(--color-secendcolor)"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-maincolor mb-6 uppercase tracking-tighter"
          >
            5 Simple Steps <br /> <span className="text-therrtcolor">To Go Solar</span>
          </motion.h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            We make it easy to switch. Our dedicated team handles everything from start to finish, 
            guided by a <span className="text-maincolor font-bold">solar consultant engineer</span> every step of the way.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* الخط الواصل بين الخطوات (للدسكتوب) */}
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
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-maincolor font-black text-xs">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-maincolor mb-4 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  {/* علامة اكتمال الخطوة تظهر عند الـ Hover */}
                  <motion.div 
                    className="mt-6 text-therrtcolor opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <CheckCircle2 size={24} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Footer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 bg-maincolor p-10 rounded-[3rem] text-center text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secendcolor/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-secendcolor/20 transition-all" />
          <h4 className="text-2xl font-bold mb-4 relative z-10">Ready to start your journey?</h4>
          <button onClick={()=>navigate("/contact")} className="bg-secendcolor text-maincolor px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform relative z-10 shadow-lg">
            Request a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolarSteps;