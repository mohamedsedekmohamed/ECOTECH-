import React from 'react';
import { Sun, Building, Leaf, BatteryCharging, ArrowRight } from 'lucide-react';
import Energyp from '../assets/EnergyStorage.webp'
import solarp from '../assets/SolarEnergyhd.webp'
import smartp from '../assets/SmartBuildingshd.webp'
import Energyop from '../assets/energy.jpeg'
import { useNavigate } from 'react-router-dom';
const services = [
  {
    title: "Solar Energy",
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    items: ["PV systems for homes", "PV systems for commercials", "Solar Pumping systems", "Solar street lights"],
    image:  solarp,
    color: "bg-yellow-500",
    path: "/services/solar-energy"

  },
  {
    title: "Smart Buildings",
    icon: <Building className="w-8 h-8 text-blue-500" />,
    items: ["Building Automation", "Monitoring & Security", "Media & Entertainments", "Networking"],
    image: smartp,
    color: "bg-blue-500",
    path: "/services/smart-buildings"
  },
  {
    title: "Energy Savings",
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    items: ["Energy management", "Energy Audits/monitoring", "Energy optimization", "EnMS ISO 50001"],
    image: Energyop,
    color: "bg-green-500",
    path: "/services/energy-savings"
  },
  {
    title: "Energy Storage",
    icon: <BatteryCharging className="w-8 h-8 text-red-500" />,
    items: ["Deep-cycle Batteries", "Green Batteries", "Li-ion Batteries", "Mega Batteries"],
    image: Energyp,
    color: "bg-red-500",
    path: "/services/energy-storage"
  }
];

const ServicesSection = () => {
    const navigator = useNavigate();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center text-[#004a99] mb-16">Our Specialized Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="h-40 bg-gray-200 relative">
                <div className="absolute inset-0 bg-[#004a99]/20 group-hover:bg-transparent transition-colors"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#004a99] mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color}`}></div> {item}
                    </li>
                  ))}
                </ul>
                <button onClick={()=>navigator(service.path)} className="flex items-center gap-2 text-[#004a99] font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;