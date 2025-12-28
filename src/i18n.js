import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          Aboutt: "About",
          careerss: "Careers",
          contacts: "Contact",
          services: "Services",
          solarEnergy: "Solar Energy",
          smartBuilding: "Smart Buildings",
          energySaving: "Energy Savings",
          energyStorag: "Energy Storage",
           "heroBadge": "Sustainable Energy Solutions",
   
           "energySavings": {
    "badge": "Sustainable Efficiency",
    "heroTitle": "Energy",
    "heroHighlight": "Savings",
    "heroDesc": "We assist commercial and industrial clients to  Our solutions maximize power efficiencies and decrease overall energy expenses.",
    "partnerCard": {
      "title": "Your Energy Partner",
      "quote": "While others address current needs, we provide innovative solutions effective for years to come."
    },
    "cards": {
      "audit": {
        "title": "Energy Audit",
        "desc": "Systematic analysis of energy use to identify, quantify, and report on opportunities for improved performance."
      },
      "iso": {
        "title": "EnMS ISO 50001",
        "desc": "We help achieve ISO 50001 standards, enabling you to take actions based on established EnMS targets."
      },
      "tech": {
        "title": "Saving Tech",
        "desc": "Advanced technologies producing measurable savings up to 30% in compressed air, boilers, and HVAC systems."
      }
    }
  },
           "solar": {
    "hero": {
      "title": "Solar Energy",
      "subtitle": "Sustainable power solutions tailored for a cleaner and brighter future."
    },
    "infoBlock": {
      "title": "Solar Power Systems",
      "desc": "Whether you are looking for a small solar power system to supplement your home electricity usage or you're looking to power a large commercial property, there is a solar system that will fit your needs. Solar power is clean, renewable, and very available, making it a relatively inexpensive and attractive choice for everyone."
    },
    "services": {
      "pvHome": "PV systems for homes",
      "pvCommercial": "PV systems for commercials",
      "solarPumping": "Solar Pumping systems",
      "streetLights": "Solar street lights",
      "waterPumping": "Solar Water Pumping",
      "waterHeating": "Solar Water Heating"
    },
    "whyChoose": {
      "title": "Why Ecotech Solar?",
      "desc": "We provide end-to-end solar solutions, from initial consultation to professional installation and technical support. Our systems are designed to maximize efficiency and provide long-term energy savings for residential and industrial sectors.",
      "features": [
        "High-Efficiency PV Panels",
        "Smart Energy Management",
        "Expert Engineering Team"
      ],
      "greenBadge": "100% Green Energy"
    }
  },
  "heroTitle1": "Empowering The Future With",
  "heroTitle2": "Green Tech",
  "heroDesc": "We provide cutting-edge solar energy and smart building solutions to help you save energy and protect the environment.",
  "ourServices": "Our Services",
  "contactUs": "Contact Us",

  "whoWeAre": "Who We Are",
  "whoTitle1": "Leading the",
  "whoTitle2": "Green Energy",
  "whoTitle3": "Revolution Since 2018",
  "whoDesc": "Ecotech for Green Solutions is a leading Renewable Energy company in the region. Founded as a Joint Stock Company, we started with a clear vision to transform how energy is delivered to our communities.",

  "founded": "Founded",
  "currentCapital": "Current Capital",
  "targetCapital": "Target Capital",

  "visionTitle": "Our Vision",
  "visionText": "To be the first Egyptian brand to change people's view of renewable energy and make it part of daily life - not a luxury, but an investment in the future",

  "missionTitle": "Our Mission",
  "missionText": "We are building a clean energy future by providing smart, practical, and reliable solar energy solutions bridging technology and sustainability and empowering every home and business to be self-reliant in generating its own energy"
, "servicesTitle": "Our Specialized Solutions",
"contact": {
    "hero": {
      "title": "Let's Connect",
      "subtitle": "Have a project in mind or need technical support? Our team of renewable energy experts is here to help you transition to a greener future."
    },
    "info": {
      "sectionTitle": "Contact Information",
      "locationTitle": "Our Location",
      "locationDesc": "20th St. behind Green Plaza, Green Towers, Tower 17, Floor 11, Smouha, Alexandria, Egypt",
      "callUsTitle": "Call Us",
      "sales": "Sales:",
      "support": "Support:",
      "emailTitle": "Email Support",
      "emailAddress": "info@ecotecheg.com",
      "workingHours": "Sun - Thu: 9:00 AM - 5:00 PM"
    },
    "form": {
      "sectionTitle": "Send us a message",
      "subtitle": "We'll get back to you within 24 hours.",
      "fullName": "Full Name",
      "fullNamePlaceholder": "John Doe",
      "email": "Email Address",
      "emailPlaceholder": "john@example.com",
      "subject": "Subject",
      "subjectPlaceholder": "How can we help?",
      "message": "Message",
      "messagePlaceholder": "Tell us about your project...",
      "submit": "Send Message"
    }
  },
  "solarItems": {
    "home": "PV systems for homes",
    "commercial": "PV systems for commercials",
    "pumping": "Solar Pumping systems",
    "street": "Solar street lights"
  },

  "smartItems": {
    "automation": "Building Automation",
    "security": "Monitoring & Security",
    "media": "Media & Entertainments",
    "network": "Networking"
  },

  "savingItems": {
    "management": "Energy management",
    "audit": "Energy Audits/monitoring",
    "optimization": "Energy optimization",
    "iso": "EnMS ISO 50001"
  },

  "storageItems": {
    "deep": "Deep-cycle Batteries",
    "green": "Green Batteries",
    "li": "Li-ion Batteries",
    "mega": "Mega Batteries"
  },
 "careers": {
    "header": {
      "title": "Join Our Team",
      "subtitle": "Be part of the green energy revolution. Submit your application below."
    },
    "form": {
      "name": "Your Name (required)",
      "namePlaceholder": "Enter your full name",
      "email": "Your Email (required)",
      "emailPlaceholder": "name@example.com",
      "phone": "Your Phone (required)",
      "phonePlaceholder": "01xxxxxxxxx",
      "attachCV": "Attach Your CV (required)",
      "clickUpload": "Click to upload",
      "orDrag": "or drag and drop",
      "fileTypes": "PDF, DOC, DOCX (Max 5MB)",
      "moreDetails": "More Details",
      "textareaPlaceholder": "Tell us more about your experience...",
      "submit": "Send Application"
    },
    "footer": "Ecotech is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment."
  },
  "readMore": "Read More",
  "partners": {
    "title": "Our Trusted",
    "highlight": "Suppliers & Partners",
    "description": "We are proud to partner with leading organizations across Egypt to drive the renewable energy transition."
  },
   "essence": {
    "sectionTitle": "Our Essence",
    "headline": "Energy That’s Smart, Yet Human.",
    "points": [
      {
        "title": "Accessible Innovation",
        "desc": "Sustainable technology becomes a simple and easy part of everyone's daily life."
      },
      {
        "title": "Understandable Power",
        "desc": "We break the complexity of solar energy, making it smart and innovative, yet accessible to everyone."
      }
    ],
    "cta": "DISCOVER OUR WORLD",
    "highlightMain": "Smart",
    "highlightSecondary": "Human",
    "tooltip": "EcoTech is changing the game in Egypt's energy market."
  }
,
 "valuesSection": {
    "header": {
      "subtitle": "Our Core Principles",
      "title": "Values That Drive Change"
    },
    "values": {
      "innovation": {
        "title": "Innovation",
        "desc": "Continuous development and the truly intelligent use of technology, not just superficially."
      },
      "simplicity": {
        "title": "Simplicity",
        "desc": "Making solar energy easy and understandable for everyone."
      },
      "trust": {
        "title": "Trust",
        "desc": "High-quality implementation and transparent dealings."
      },
      "sustainability": {
        "title": "Sustainability",
        "desc": "Our goal is a cleaner environment and a longer life."
      },
      "connection": {
        "title": "Connection",
        "desc": "Connecting people, technology, and nature in a balanced relationship."
      }
    }
  },
 "footer": {
    "brandDesc": "Innovating the digital landscape with sustainable solutions and premium technical excellence.",
    "contactHub": "Contact Hub",
    "availability": "Availability",
    "sales": "Sales",
    "support": "Support",
    "email": "info@ecotecheg.com",
    "phone": "+20 3 426 4787",
    "workingHours": [
      { "days": "Sun - Thu", "time": "9:00 am - 5:00 pm", "status": "Active" },
      { "days": "Fri - Sat", "time": "Day Off", "status": "Closed" }
    ],
    "timeZone": "Egypt Standard Time",
    "links": [
      { "title": "home", "path": "/" },
      { "title": "about", "path": "/about" },
      { "title": "contact", "path": "/contact" }
    ]
  },
  "about": {
     "projects": {
      "educational": "Educational Institutions",
      "residential": "Residential Projects",
      "largeFacilities": "Large Facilities"
    },
     "solarTiming": {
      "title": "The Best Time to",
      "highlight": "Go Solar",
      "title2": "is Now.",
      "desc1": {
        "part1": "Some Egyptian business owners may think the initial costs are too high.",
        "highlight": "there’s never been a better time to switch."
      },
      "desc2": {
        "part1": "Today’s solar technology is more efficient than ever, and many government initiatives are available to offset installation costs. With Ecotech, you’ll see a",
        "highlight": "return on your investment quickly",
        "part2": ", no matter your industry."
      },
      "warranty": {
        "title": "Industry-Leading Warranties",
        "desc": "We stand by our products and workmanship with a reputation of excellence."
      },
      "features": {
        "turnkey": {
          "title": "Turnkey Installations",
          "desc": "Complete, ready-to-use solutions for small businesses."
        },
        "custom": {
          "title": "Custom Solar Systems",
          "desc": "Uniquely designed energy infrastructures for larger facilities."
        },
        "config": {
          "title": "Configuration Options",
          "desc": "From rooftop systems to ground-mounted installations."
        }
      },
      "commitment": {
        "title": "\"Helping small businesses and commercial clients choose the right solar energy solution.\"",
        "desc": {
          "part1": "Ecotech has been committed to ",
          "highlight": "quality products, excellent service and superior workmanship.",
          "part2": " Whether it's a rooftop or ground-mounted system, we meet your space considerations with precision."
        },
        "tags": {
          "rooftop": "Rooftop Systems",
          "ground": "Ground Mounted",
          "small": "Small Business Turnkey",
          "large": "Large Facility Custom"
        }
      }
    },
    "header": {
      "title": "About Our Company",
      "desc": "Ecotech for Green Solutions is a leading Renewable Energy pioneer, driving Egypt's transition to sustainable power since 2018."
    },
    "stats": [
      { "title": "2018", "desc": "Founded as a Joint Stock Company" },
      { "title": "5M EGP", "desc": "Initial Capital Funding" },
      { "title": "50M EGP", "desc": "Plan for the next 5 years" }
    ],
    "vision": {
      "title": "Our Vision",
      "desc": "To be the first Egyptian brand to change people's view of renewable energy and make it part of daily life."
    },
    "mission": {
      "title": "Our Mission",
      "desc": "We are building a clean energy future by providing smart and reliable solar energy solutions."
    },
       "certification": {
      "title": "Official Certification",
      "subtitle": "Authorized by the Egyptian Ministry of Electricity and Renewable Energy",
      "desc": {
        "part1": "We are officially licensed for the",
        "highlight": "supply, installation, operation, and maintenance",
        "part2": "of solar PV systems, ensuring full compliance with the public grid standards."
      }
    },
    "expertise": {
      "title": "Tailored Solutions",
      "desc": "Our expertise is ideal for all types of businesses looking to offset their energy cost with the most efficient, uniquely tailored solar solutions."
    },
    "innovation": {
      "title": "Legacy of Innovation",
      "desc": "With a deep legacy in the industry and a continued passion for innovation, we’re bringing back the highest quality service to commercial installations."
    },
    "projectsSection": {
      "title": "Who We Serve",
      "quote": "\"With Ecotech commercial solar system solutions, no matter what industry you’re in, you’ll see a return on your investment quickly\"",
      "desc": "With Ecotech solutions, you empower your business to be self-reliant in generating its own energy.",
      "viewGallery": "View Gallery",
      "projectLabel": "Project"
    },
     "whoWeServe": {
      "title": "Who We Serve",
      "quote": "\"With Ecotech commercial solar system solutions, no matter what industry you’re in, you’ll see a return on your investment quickly\"",
      "desc": "With Ecotech solutions, you empower your business to be self-reliant in generating its own energy.",
      "viewGallery": "View Gallery"
    },
    "businessValue": {
      "title": "The Best Time to Go Solar is Now.",
      "desc": [
        "Some Egyptian business owners may think the initial costs are too high. In fact, there’s never been a better time to switch.",
        "Today’s solar technology is more efficient than ever, and many government initiatives are available to offset installation costs. With Ecotech, you’ll see a return on your investment quickly, no matter your industry."
      ],
      "warranty": {
        "title": "Industry-Leading Warranties",
        "desc": "We stand by our products and workmanship with a reputation of excellence."
      },
      "solutions": [
        { "title": "Turnkey Installations", "desc": "Complete, ready-to-use solutions for small businesses." },
        { "title": "Custom Solar Systems", "desc": "Uniquely designed energy infrastructures for larger facilities." },
        { "title": "Configuration Options", "desc": "From rooftop systems to ground-mounted installations." }
      ],
      "banner": {
        "quote": "\"Helping small businesses and commercial clients choose the right solar energy solution.\"",
        "desc": "Ecotech has been committed to quality products, excellent service and superior workmanship. Whether it's a rooftop or ground-mounted system, we meet your space considerations with precision.",
        "tags": [
          "Rooftop Systems",
          "Ground Mounted",
          "Small Business Turnkey",
          "Large Facility Custom"
        ]
      }

    },
    "solarTypes": {
    "badge": "Sustainable Solutions",
    "titleMain": "3 TYPES OF",
    "titleHighlight": "SOLAR SYSTEMS",
    "footerNote": "💡 Solar power is clean, renewable, and very available, making it an attractive choice for everyone.",
    "systems": {
      "onGrid": {
        "title": "On-Grid Solar System",
        "description": "Allowing you to feed unused solar energy directly into the power grid, where you will receive financial incentive from the electricity company."
      },
      "offGrid": {
        "title": "Off-Grid Solar System",
        "description": "Stand-alone solar power systems are incredibly useful in areas with limited (or completely unavailable) utilities."
      },
      "hybrid": {
        "title": "Hybrid Solar System",
        "description": "The best of both worlds by building a solar system that only uses traditional utility power as a backup. Rather than funneling excess energy back, you store it."
      }
    }
  }
,
"energyStorage": {
    "hero": {
      "badge": "Uninterrupted Power Solutions",
      "titleMain": "Energy",
      "titleHighlight": "Storage",
      "description": "Power doesn’t have to stop when the sun goes down. Our <0>advanced storage solutions</0> ensure you have a reliable energy supply 24/7."
    },
    "batteries": {
      "deepCycle": {
        "title": "Deep-cycle Batteries",
        "desc": "Designed for deep discharge cycles, perfect for consistent off-grid solar storage."
      },
      "green": {
        "title": "Green Batteries",
        "desc": "Environmentally friendly storage solutions with sustainable materials."
      },
      "liIon": {
        "title": "Li-ion Batteries",
        "desc": "High-density Lithium-ion tech for faster charging and longer life spans."
      },
      "mega": {
        "title": "Mega Batteries",
        "desc": "Large-scale energy storage systems for industrial and municipal projects."
      }
    },
    "cta": {
      "title": "Ready to Scale",
      "highlight": "Up?",
      "description": "Our engineers can calculate the exact storage capacity required for your industrial or residential facility.",
      "button": "Get Technical Advice"
    }
  },
    "solarSteps": {
    "title": "5 Simple Steps",
    "highlight": "To Go Solar",
    "description": "We make it easy to switch to solar. Our dedicated team will handle everything from start to finish. We’ll even assign a solar consultant engineer to your project who will guide you through the process and keep you informed about what’s happening every step of the way. It all begins with a quick consultation.",
    "cta": {
      "title": "Ready to start your journey?",
      "button": "Request a Free Consultation"
    },
    "steps": {
      "consultation": {
        "title": "CONSULTATION",
        "desc": "We’ll take a look at your energy needs, and tell you how much you can save by going solar. Simple and free."
      },
      "design": {
        "title": "DESIGN",
        "desc": "We’ll visit your home to examine your roof and measurements. Our engineers will design a custom system to shrink your bills."
      },
      "paperwork": {
        "title": "PAPERWORK",
        "desc": "Your Account Manager handles all permits, paperwork, and financing. You just sit back and relax."
      },
      "installation": {
        "title": "INSTALLATION",
        "desc": "Panels up and ready in about 48 hours. Once finished, we’ll show you how to manage your new system."
      },
      "activation": {
        "title": "ACTIVATION",
        "desc": "Once the utility gives approval, you can start generating your own clean, renewable energy."
      },
      "smartBuildings": {
    "hero": {
      "badge": "Future of Living",
      "titleMain": "Smart",
      "titleHighlight": "Buildings"
    },
    "cta": {
      "title": "Ready to transform your space?",
      "desc": "Our experts tailor solutions to your specific architectural needs.",
      "button": "Contact Experts"
    },
    "services": {
      "automation": {
        "title": "Building Automation",
        "desc": "Complete control over lighting, HVAC, and building systems for maximum efficiency."
      },
      "security": {
        "title": "Monitoring & Security",
        "desc": "Advanced surveillance and security protocols to keep your premises safe 24/7."
      },
      "media": {
        "title": "Media & Entertainments",
        "desc": "Integrated audio-visual solutions for a seamless entertainment experience."
      },
      "networking": {
        "title": "Networking",
        "desc": "Robust and high-speed infrastructure for reliable connectivity across the facility."
      },
      "metering": {
        "title": "Smart Metering",
        "desc": "Precise energy tracking and smart metering to monitor consumption in real-time."
      }
    }
  }
    }
  }
  }
        }
      },
      ar: {
        translation: {
          home: "الرئيسية",
          Aboutt: "من نحن",
          careerss: "الوظائف",
          contacts: "تواصل معنا",
          services: "خدماتنا",
          solarEnergy: "الطاقة الشمسية",
          smartBuilding: "المباني الذكية",
          energySaving: "توفير الطاقة",
          energyStorag: "تخزين الطاقة",
          "energySavings": {
    "badge": "كفاءة مستدامة",
    "heroTitle": "توفير",
    "heroHighlight": "الطاقة",
    "heroDesc": "نحن نساعد العملاء في القطاعات التجارية والصناعية على خفض تكاليف التشغيل. حلولنا تزيد من كفاءة الطاقة وتقلل نفقات الطاقة الإجمالية."
,
    "partnerCard": {
      "title": "شريكك في الطاقة",
      "quote": "بينما يلبي الآخرون الاحتياجات الحالية، نحن نقدم حلولاً مبتكرة فعالة لسنوات قادمة."
    },
    "cards": {
      "audit": {
        "title": "تدقيق الطاقة",
        "desc": "تحليل منهجي لاستخدام الطاقة لتحديد وقياس والإبلاغ عن فرص تحسين الأداء."
      },
      "iso": {
        "title": "نظام ISO 50001",
        "desc": "نساعد في تحقيق معايير ISO 50001، مما يتيح لك اتخاذ إجراءات بناءً على أهداف نظام إدارة الطاقة المحدد."
      },
      "tech": {
        "title": "تقنيات التوفير",
        "desc": "تقنيات متقدمة تحقق توفيراً ملموساً يصل إلى 30% في أنظمة الهواء المضغوط والغلايات والتكييف."
      }
    }
  },
          "smartBuildings": {
    "hero": {
      "badge": "مستقبل الحياة",
      "titleMain": "المباني",
      "titleHighlight": "الذكية"
    },
    "cta": {
      "title": "هل أنت مستعد لتحويل مساحتك؟",
      "desc": "يقوم خبراؤنا بتصميم حلول مخصصة لتلبية احتياجاتك المعمارية المحددة.",
      "button": "تواصل مع الخبراء"
    },
    "services": {
      "automation": { "title": "أتمتة المباني", "desc": "تحكم كامل في الإضاءة، والتدفئة والتهوية وتكييف الهواء، وأنظمة المباني لتحقيق أقصى قدر من الكفاءة." },
      "security": { "title": "المراقبة والأمن", "desc": "بروتوكولات مراقبة وأمن متقدمة للحفاظ على أمان منشأتك على مدار الساعة طوال أيام الأسبوع." },
      "media": { "title": "الوسائط والترفيه", "desc": "حلول سمعية وبصرية متكاملة لتجربة ترفيهية سلسة." },
      "networking": { "title": "الشبكات", "desc": "بنية تحتية قوية وعالية السرعة لاتصال موثوق في جميع أنحاء المنشأة." },
      "metering": { "title": "العدادات الذكية", "desc": "تتبع دقيق للطاقة وعدادات ذكية لمراقبة الاستهلاك في الوقت الفعلي." }
    }
  },
          "solarSteps": {
    "title": "5 خطوات بسيطة",
    "highlight": "للتحول للطاقة الشمسية",
    "description": "نحن نسهل عليك الانتقال إلى الطاقة الشمسية. سيتولى فريقنا المتخصص كل شيء من البداية إلى النهاية. سنقوم بتعيين مهندس استشاري لمشروعك يوجهك خلال العملية ويبقيك على اطلاع بكل ما يحدث. كل شيء يبدأ باستشارة سريعة.",
    "cta": {
      "title": "هل أنت مستعد لبدء رحلتك؟",
      "button": "اطلب استشارة مجانية"
    },
    "steps": {
      "consultation": { "title": "الاستشارة", "desc": "سنلقي نظرة على احتياجاتك من الطاقة، ونخبرك بمدى التوفير الذي يمكنك تحقيقه. عملية بسيطة ومجانية." },
      "design": { "title": "التصميم", "desc": "سنقوم بزيارة منزلك لفحص السطح والقياسات. سيصمم مهندسونا نظاماً مخصصاً لتقليل فواتيرك." },
      "paperwork": { "title": "الأوراق الرسمية", "desc": "يتولى مدير حسابك جميع التصاريح والأوراق والتمويل. ما عليك سوى الاسترخاء." },
      "installation": { "title": "التركيب", "desc": "الألواح تصبح جاهزة خلال 48 ساعة تقريباً. بمجرد الانتهاء، سنوضح لك كيفية إدارة نظامك الجديد." },
      "activation": { "title": "التفعيل", "desc": "بمجرد حصولنا على موافقة شركة الكهرباء، يمكنك البدء في توليد طاقتك النظيفة والمتجددة." }
    }
  },
          "energyStorage": {
    "hero": {
      "badge": "حلول طاقة غير منقطعة",
      "titleMain": "تخزين",
      "titleHighlight": "الطاقة",
      "description": "لا يجب أن تتوقف الطاقة عندما تغرب الشمس. تضمن <0>حلول التخزين المتقدمة</0> لدينا حصولك على إمداد موثوق للطاقة على مدار الساعة."
    },
    "batteries": {
      "deepCycle": { "title": "بطاريات الدورة العميقة", "desc": "مصممة لدورات التفريغ العميق، وهي مثالية لتخزين الطاقة الشمسية المستقرة خارج الشبكة." },
      "green": { "title": "البطاريات الخضراء", "desc": "حلول تخزين صديقة للبيئة تعتمد على مواد مستدامة." },
      "liIon": { "title": "بطاريات الليثيوم", "desc": "تقنية الليثيوم أيون عالية الكثافة لشحن أسرع وعمر افتراضي أطول." },
      "mega": { "title": "البطاريات العملاقة", "desc": "أنظمة تخزين طاقة واسعة النطاق للمشاريع الصناعية والبلدية." }
    },
    "cta": {
      "title": "مستعد للتوسع",
      "highlight": "الآن؟",
      "description": "يمكن لمهندسينا حساب سعة التخزين الدقيقة المطلوبة لمنشأتك الصناعية أو السكنية.",
      "button": "احصل على استشارة فنية"
    }
  },
  "solarTypes": {
    "badge": "حلول مستدامة",
    "titleMain": "3 أنواع من",
    "titleHighlight": "الأنظمة الشمسية",
    "footerNote": "💡 الطاقة الشمسية نظيفة ومتجددة ومتوفرة بكثرة، مما يجعلها خياراً جذاباً للجميع.",
    "systems": {
      "onGrid": {
        "title": "نظام متصل بالشبكة",
        "description": "يسمح لك بتغذية الطاقة الشمسية غير المستخدمة مباشرة في شبكة الكهرباء، حيث ستتلقى حافزاً مالياً من شركة الكهرباء."
      },
      "offGrid": {
        "title": "نظام منفصل عن الشبكة",
        "description": "أنظمة الطاقة الشمسية المستقلة مفيدة بشكل لا يصدق في المناطق ذات المرافق المحدودة (أو غير المتوفرة تماماً)."
      },
      "hybrid": {
        "title": "نظام هجين",
        "description": "أفضل ما في العالمين من خلال بناء نظام شمسي يستخدم طاقة المرافق التقليدية فقط كنسخة احتياطية، بدلاً من توجيه الطاقة الزائدة، تقوم بتخزينها."
      }
    }
  }
,

      "solar": {
    "hero": {
      "title": "الطاقة الشمسية",
      "subtitle": "حلول طاقة مستدامة مصممة لمستقبل أنظف وأكثر إشراقًا."
    },
    "infoBlock": {
      "title": "أنظمة الطاقة الشمسية",
      "desc": "سواء كنت تبحث عن نظام طاقة شمسية صغير لتعزيز استهلاك منزلك للكهرباء أو ترغب في تشغيل منشأة تجارية كبيرة، هناك نظام شمسي يناسب احتياجاتك. الطاقة الشمسية نظيفة ومتجددة ومتاحة بشكل كبير، مما يجعلها خيارًا اقتصاديًا وجذابًا للجميع."
    },
    "services": {
      "pvHome": "أنظمة الطاقة الشمسية للمنازل",
      "pvCommercial": "أنظمة الطاقة الشمسية للتجارية",
      "solarPumping": "أنظمة الضخ الشمسي",
      "streetLights": "أضواء الشوارع الشمسية",
      "waterPumping": "ضخ المياه بالطاقة الشمسية",
      "waterHeating": "تسخين المياه بالطاقة الشمسية"
    },
    "whyChoose": {
      "title": "لماذا Ecotech Solar؟",
      "desc": "نقدم حلول شمسية شاملة، من الاستشارة الأولية إلى التركيب الاحترافي والدعم الفني. أنظمتنا مصممة لتعظيم الكفاءة وتوفير وفورات طويلة الأجل في الطاقة للقطاعات السكنية والصناعية.",
      "features": [
        "ألواح شمسية عالية الكفاءة",
        "إدارة ذكية للطاقة",
        "فريق هندسي خبير"
      ],
      "greenBadge": "100% طاقة خضراء"
    }
  },
          "contact": {
    "hero": {
      "title": "تواصل معنا",
      "subtitle": "هل لديك مشروع أو تحتاج لدعم فني؟ فريق خبراء الطاقة المتجددة لدينا هنا لمساعدتك على التحول إلى مستقبل أكثر خضرة."
    },
    "info": {
      "sectionTitle": "معلومات الاتصال",
      "locationTitle": "موقعنا",
      "locationDesc": "الشارع 20 خلف جرين بلازا، الأبراج الخضراء، البرج 17، الطابق 11، سموحة، الإسكندرية، مصر",
      "callUsTitle": "اتصل بنا",
      "sales": "المبيعات:",
      "support": "الدعم:",
      "emailTitle": "البريد الإلكتروني",
      "emailAddress": "info@ecotecheg.com",
      "workingHours": "الأحد - الخميس: 9:00 ص - 5:00 م"
    },
    "form": {
      "sectionTitle": "أرسل لنا رسالة",
      "subtitle": "سنرد عليك خلال 24 ساعة.",
      "fullName": "الاسم الكامل",
      "fullNamePlaceholder": "جون دو",
      "email": "البريد الإلكتروني",
      "emailPlaceholder": "john@example.com",
      "subject": "الموضوع",
      "subjectPlaceholder": "كيف يمكننا المساعدة؟",
      "message": "الرسالة",
      "messagePlaceholder": "أخبرنا عن مشروعك...",
      "submit": "إرسال الرسالة"
    }
  },
           "careers": {
    "header": {
      "title": "انضم إلى فريقنا",
      "subtitle": "كن جزءًا من ثورة الطاقة الخضراء. قدّم طلبك أدناه."
    },
    "form": {
      "name": "الاسم الكامل (مطلوب)",
      "namePlaceholder": "أدخل اسمك الكامل",
      "email": "البريد الإلكتروني (مطلوب)",
      "emailPlaceholder": "name@example.com",
      "phone": "رقم الهاتف (مطلوب)",
      "phonePlaceholder": "01xxxxxxxxx",
      "attachCV": "إرفاق السيرة الذاتية (مطلوب)",
      "clickUpload": "انقر للتحميل",
      "orDrag": "أو اسحب وأسقط",
      "fileTypes": "PDF, DOC, DOCX (الحد الأقصى 5 ميغابايت)",
      "moreDetails": "مزيد من التفاصيل",
      "textareaPlaceholder": "أخبرنا المزيد عن خبرتك...",
      "submit": "إرسال الطلب"
    },
    "footer": "شركة Ecotech توفّر فرص عمل متساوية للجميع. نحن نحتفل بالتنوع ونلتزم بخلق بيئة شاملة."
  },
          "valuesSection": {
    "header": {
      "subtitle": "مبادئنا الأساسية",
      "title": "القيم التي تدفع التغيير"
    },
    "values": {
      "innovation": {
        "title": "الابتكار",
        "desc": "التطوير المستمر والاستخدام الذكي للتكنولوجيا، وليس بشكل سطحي فقط."
      },
      "simplicity": {
        "title": "البساطة",
        "desc": "جعل الطاقة الشمسية سهلة ومفهومة للجميع."
      },
      "trust": {
        "title": "الثقة",
        "desc": "تنفيذ عالي الجودة وتعاملات شفافة."
      },
      "sustainability": {
        "title": "الاستدامة",
        "desc": "هدفنا هو بيئة أنظف وحياة أطول."
      },
      "connection": {
        "title": "الاتصال",
        "desc": "ربط الناس والتكنولوجيا والطبيعة في علاقة متوازنة."
      }
    }
  },
            "essence": {
    "sectionTitle": "جوهرنا",
    "headline": "طاقة ذكية، وإنسانية في الوقت ذاته.",
    "points": [
      {
        "title": "ابتكار متاح للجميع",
        "desc": "تصبح التكنولوجيا المستدامة جزءًا بسيطًا وسهلًا من حياة الجميع اليومية."
      },
      {
        "title": "طاقة مفهومة",
        "desc": "نحن نبسط تعقيدات الطاقة الشمسية، مما يجعلها ذكية ومبتكرة، لكنها متاحة للجميع."
      }
    ],
    "cta": "اكتشف عالمنا",
    "highlightMain": "ذكية",
    "highlightSecondary": "إنسانية",
    "tooltip": "شركة EcoTech تغير قواعد اللعبة في سوق الطاقة المصري."
  }
,
  "heroBadge": "حلول الطاقة المستدامة",
  "heroTitle1": "تمكين المستقبل من خلال",
  "heroTitle2": "التكنولوجيا الخضراء",
  "heroDesc": "نقدم حلول الطاقة الشمسية والمباني الذكية المتطورة لمساعدتك على توفير الطاقة وحماية البيئة.",
  "ourServices": "خدماتنا",
  "contactUs": "تواصل معنا",

  "whoWeAre": "من نحن",
  "whoTitle1": "قيادة",
  "whoTitle2": "ثورة الطاقة الخضراء",
  "whoTitle3": "منذ عام 2018",
  "whoDesc": "إيكوتك للحلول الخضراء هي شركة رائدة في مجال الطاقة المتجددة في المنطقة. تأسست كشركة مساهمة برؤية واضحة لتغيير طريقة تقديم الطاقة لمجتمعاتنا.",

  "founded": "تأسست",
  "currentCapital": "رأس المال الحالي",
  "targetCapital": "رأس المال المستهدف",

  "visionTitle": "رؤيتنا",
  "visionText": "أن نكون أول علامة تجارية مصرية تغير نظرة الناس للطاقة المتجددة وتجعلها جزءًا من الحياة اليومية، ليست رفاهية بل استثمار في المستقبل",

  "missionTitle": "مهمتنا",
  "missionText": "نبني مستقبلًا نظيفًا للطاقة من خلال تقديم حلول طاقة شمسية ذكية وعملية وموثوقة تربط بين التكنولوجيا والاستدامة وتمكّن كل منزل وشركة من الاعتماد على نفسه في إنتاج الطاقة"
,
 "servicesTitle": "حلولنا المتخصصة",
  "solarItems": {
    "home": "أنظمة الطاقة الشمسية للمنازل",
    "commercial": "أنظمة الطاقة الشمسية للمشروعات",
    "pumping": "أنظمة ضخ المياه بالطاقة الشمسية",
    "street": "إنارة الشوارع بالطاقة الشمسية"
  },


  "smartItems": {
    "automation": "أتمتة المباني",
    "security": "المراقبة والأمن",
    "media": "الوسائط والترفيه",
    "network": "الشبكات"
  },

  
  "savingItems": {
    "management": "إدارة الطاقة",
    "audit": "مراجعة ومراقبة الطاقة",
    "optimization": "تحسين استهلاك الطاقة",
    "iso": "نظام إدارة الطاقة ISO 50001"
  },

  "storageItems": {
    "deep": "بطاريات التفريغ العميق",
    "green": "بطاريات صديقة للبيئة",
    "li": "بطاريات ليثيوم أيون",
    "mega": "بطاريات ضخمة"
  },

  "readMore": "اقرأ المزيد",
  "partners": {
    "title": "شركاؤنا",
    "highlight": "والموردون الموثوقون",
    "description": "نفخر بشراكتنا مع كبرى المؤسسات في جميع أنحاء مصر لدعم التحول إلى الطاقة المتجددة."
  }
 ,
  "footer": {
    "brandDesc": "نبتكر المشهد الرقمي بحلول مستدامة وتفوق تقني متميز.",
    "contactHub": "مركز التواصل",
    "availability": "ساعات العمل",
    "sales": "المبيعات",
    "support": "الدعم",
    "email": "info@ecotecheg.com",
    "phone": "+20 3 426 4787",
    "workingHours": [
      { "days": "الأحد - الخميس", "time": "9:00 ص - 5:00 م", "status": "Active" },
      { "days": "الجمعة - السبت", "time": "عطلة", "status": "Closed" }
    ],
    "timeZone": "توقيت مصر الرسمي",
    "links": [
      { "title": "الرئيسية", "path": "/" },
      { "title": "من نحن", "path": "/about" },
      { "title": "اتصل بنا", "path": "/contact" }
    ]
  },
   "about": {
        "projects": {
      "educational": "المؤسسات التعليمية",
      "residential": "المشاريع السكنية",
      "largeFacilities": "المرافق الكبيرة"
    }
,
     "whoWeServe": {
      "title": "من نخدم",
      "quote": "\"مع حلول Ecotech للطاقة الشمسية التجارية، بغض النظر عن مجالك، ستلاحظ عائد استثمارك بسرعة\"",
      "desc": "مع حلول Ecotech، يمكنك تمكين عملك ليكون مكتفيًا ذاتيًا في توليد الطاقة.",
      "viewGallery": "عرض المعرض"
    },
     "solarTiming": {
      "title": "أفضل وقت",
      "highlight": "لتحويل الطاقة الشمسية",
      "title2": "هو الآن.",
      "desc1": {
        "part1": "قد يعتقد بعض أصحاب الأعمال المصريين أن التكاليف الأولية مرتفعة للغاية.",
        "highlight": "لم يكن هناك وقت أفضل للتحويل."
      },
      "desc2": {
        "part1": "تكنولوجيا الطاقة الشمسية اليوم أكثر كفاءة من أي وقت مضى، وهناك العديد من المبادرات الحكومية لتقليل تكاليف التركيب. مع Ecotech، ستلاحظ",
        "highlight": "عائد استثمارك بسرعة",
        "part2": "، بغض النظر عن مجال عملك."
      },

      "warranty": {
        "title": "ضمانات رائدة في الصناعة",
        "desc": "نحن نلتزم بمنتجاتنا وجودة عملنا مع سمعة ممتازة."
      },
      "features": {
        "turnkey": {
          "title": "تركيبات جاهزة",
          "desc": "حلول كاملة جاهزة للاستخدام للأعمال الصغيرة."
        },
        "custom": {
          "title": "أنظمة شمسية مخصصة",
          "desc": "بُنى تحتية للطاقة مصممة خصيصاً للمنشآت الكبيرة."
        },
        "config": {
          "title": "خيارات التكوين",
          "desc": "من الأنظمة على الأسطح إلى التركيبات الأرضية."
        }
      },
      "commitment": {
        "title": "\"مساعدة الشركات الصغيرة والعملاء التجاريين على اختيار الحل الأمثل للطاقة الشمسية.\"",
        "desc": {
          "part1": "تلتزم Ecotech بـ ",
          "highlight": "منتجات عالية الجودة، وخدمة ممتازة، وعمل متقن.",
          "part2": " سواء كان النظام على السطح أو مركبًا على الأرض، نلبي متطلبات مساحتك بدقة."
        },
        "tags": {
          "rooftop": "أنظمة على السطح",
          "ground": "تركيب أرضي",
          "small": "حلول جاهزة للأعمال الصغيرة",
          "large": "أنظمة مخصصة للمنشآت الكبيرة"
        }
      }
    },
    "header": {
      "title": "عن شركتنا",
      "desc": "شركة Ecotech للحلول الخضراء هي رائدة في مجال الطاقة المتجددة، تقود تحول مصر نحو الطاقة المستدامة منذ عام 2018."
    },
    "stats": [
      { "title": "2018", "desc": "تأسست كشركة مساهمة" },
      { "title": "5 مليون جنيه", "desc": "رأس المال الأولي" },
      { "title": "50 مليون جنيه", "desc": "خطة السنوات الخمس القادمة" }
    ],
    "vision": {
      "title": "رؤيتنا",
      "desc": "أن نكون أول علامة تجارية مصرية تغير نظرة الناس للطاقة المتجددة وتجعلها جزءًا من حياتهم اليومية."
    },
    "mission": {
      "title": "مهمتنا",
      "desc": "نبني مستقبلًا نظيفًا للطاقة من خلال تقديم حلول طاقة شمسية ذكية وموثوقة."
    },
    "certification": {
      "title": "الشهادة الرسمية",
      "subtitle": "معتمد من وزارة الكهرباء والطاقة المتجددة المصرية",
      "desc": {
        "part1": "نحن مرخصون رسميًا لـ",
        "highlight": "توريد وتركيب وتشغيل وصيانة",
        "part2": "أنظمة الطاقة الشمسية، مع ضمان الامتثال الكامل لمعايير الشبكة العامة."
      }
    },
    "expertise": {
      "title": "حلول مخصصة",
      "desc": "خبرتنا مثالية لجميع أنواع الشركات الراغبة في خفض تكلفة الطاقة من خلال حلول شمسية فعّالة وفريدة مصممة خصيصًا."
    },
    "innovation": {
      "title": "إرث الابتكار",
      "desc": "بفضل إرثنا العميق في الصناعة وشغفنا المستمر بالابتكار، نقدم أعلى مستويات الخدمة للمشاريع التجارية."
    },
    "projectsSection": {
      "title": "من نخدم",
      "quote": "\"مع حلول Ecotech للطاقة الشمسية التجارية، مهما كان مجال عملك، سترى عائد استثمارك بسرعة\"",
      "desc": "مع حلول Ecotech، تمكّن عملك من الاعتماد على نفسه في توليد الطاقة.",
      "viewGallery": "عرض المعرض",
      "projectLabel": "مشروع"
    },
    "businessValue": {
      "title": "أفضل وقت لتحويل الطاقة الشمسية هو الآن.",
      "desc": [
        "قد يظن بعض أصحاب الأعمال في مصر أن التكاليف الأولية مرتفعة للغاية. في الواقع، لم يكن هناك وقت أفضل للتحويل.",
        "تكنولوجيا الطاقة الشمسية اليوم أكثر كفاءة من أي وقت مضى، وهناك العديد من المبادرات الحكومية لتعويض تكاليف التركيب. مع Ecotech، سترى عائد استثمارك بسرعة، بغض النظر عن مجال عملك."
      ],
      "warranty": {
        "title": "ضمانات رائدة في الصناعة",
        "desc": "نقف وراء منتجاتنا وجودة عملنا مع سمعة ممتازة."
      },
      "solutions": [
        { "title": "تركيبات جاهزة", "desc": "حلول كاملة وجاهزة للاستخدام للشركات الصغيرة." },
        { "title": "أنظمة شمسية مخصصة", "desc": "بنى تحتية طاقية مصممة خصيصًا للمرافق الكبيرة." },
        { "title": "خيارات التكوين", "desc": "من الأنظمة على الأسطح إلى التركيبات الأرضية." }
      ],
      "banner": {
        "quote": "\"مساعدة الشركات الصغيرة والعملاء التجاريين على اختيار الحل الشمسي المناسب.\"",
        "desc": "تلتزم Ecotech بالمنتجات عالية الجودة والخدمة الممتازة والعمل المتقن. سواء كانت أنظمة على السطح أو أرضية، نلبي احتياجات مساحتك بدقة.",
        "tags": [
          "أنظمة على الأسطح",
          "تركيب أرضي",
          "حلول جاهزة للشركات الصغيرة",
          "حلول مخصصة للمرافق الكبيرة"
        ]
      }
    }
  } 

}

        
      }
    },
  lng: savedLang,

    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
