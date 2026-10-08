export type Language = 'en' | 'es';

export interface StepItem {
  num: number;
  title: string;
  desc: string;
}

export interface FeatureItem {
  title: string;
  subtitle: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface ApplicationItem {
  title: string;
  subtitle: string;
  desc: string;
}

export interface Translations {
  common: {
    getQuote: string;
    learnMore: string;
    howItWorks: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    secure: string;
    required: string;
    select: string;
    next: string;
    back: string;
    close: string;
    calculate: string;
    results: string;
    contactUs: string;
    consultation: string;
    ourProcess: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    residential: string;
    commercial: string;
    residentialCalc: string;
    commercialCalc: string;
    howItWorks: string;
    contact: string;
    compliance: string;
    standaloneCode: string;
    brandSubtext: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
    alt: string;
  };
  cards: {
    resTitle: string;
    resDesc: string;
    comTitle: string;
    comDesc: string;
    badgeSolar: string;
    altRes: string;
    altCom: string;
  };
  process: {
    title: string;
    subtitle: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
    step4: { title: string; desc: string };
    step5: { title: string; desc: string };
  };
  trust: {
    title: string;
    desc: string;
    f1: string;
    f2: string;
    f3: string;
    f4: string;
    f5: string;
  };
  aboutSection: {
    heroTitle: string;
    heroSubtitle: string;
    heroHighlight: string;
    storyLabel: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    step4Title: string;
    step4Desc: string;
  };
  howItWorksSection: {
    heroTitle1: string;
    heroTitle2: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    sectionTag: string;
    sectionTitle: string;
    sectionDesc: string;
    steps11: StepItem[];
    trustBannerTitle: string;
    trustBannerDesc: string;
    trustFeatures: FeatureItem[];
  };
  servicesSection: {
    heroTag: string;
    heroTitle: string;
    heroTitlePart1?: string;
    heroTitlePart2?: string;
    heroSubtitle: string;
    heroBtnProcess?: string;
    label: string;
    title: string;
    titleHighlight: string;
    desc: string;
    chooseTitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    f5Title: string;
    f5Desc: string;
  };
  residentialSection: {
    heroTitle: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    heroCalcBtn: string;
    bannerTag: string;
    bannerTitle: string;
    bannerP1: string;
    bannerP2: string;
    optionsTitle: string;
    optionsDesc: string;
    cardEssentialTitle: string;
    cardEssentialDesc: string;
    cardFamilyTitle: string;
    cardFamilyDesc: string;
    cardWholeHomeTitle: string;
    cardWholeHomeDesc: string;
    cardCustomHomeTitle: string;
    cardCustomHomeDesc: string;
    calcBannerTitle: string;
    calcBannerDesc: string;
    calcBannerBtn: string;
    abroadBannerTitle: string;
    abroadBannerDesc: string;
    abroadBannerBtn: string;
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
  };
  commercialSection: {
    heroTitle: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroSubtitle: string;
    heroCalcBtn: string;
    resilienceTag: string;
    resilienceTitle: string;
    resilienceDesc: string;
    benefits: BenefitItem[];
    designTag: string;
    designTitle: string;
    designDesc: string;
    designSteps: BenefitItem[];
    appTag: string;
    appTitle: string;
    appDesc: string;
    appBtn: string;
    applications: ApplicationItem[];
    label: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
  };
  complianceSection: {
    heroTitle: string;
    heroSubtitle: string;
    p1: string;
    p2: string;
    p3: string;
    approachTitle: string;
    approachDesc: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    qTitle: string;
    qDesc: string;
    qBtn: string;
    altHero: string;
    altApproach: string;
    altQuestions: string;
  };
  contactSection: {
    badge1: string;
    badge2: string;
    badge3: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    helpLabel: string;
    helpTitle: string;
    helpSubtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    formLabel: string;
    formTitle: string;
    formSubtitle: string;
    formName: string;
    formCountry: string;
    formEmail: string;
    formPhone: string;
    formLocation: string;
    formProjectType: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formSuccessButton: string;
    infoLabel: string;
    infoTitle: string;
    infoSubtitle: string;
    infoEmailTitle: string;
    infoEmailDesc: string;
    infoWhatsappTitle: string;
    infoWhatsappDesc: string;
    infoCallTitle: string;
    infoCallTime: string;
    trustTitle: string;
    trust1: string;
    trust2: string;
    trust3: string;
    trust4: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    altHero: string;
    altBottom: string;
    countries: {
      us: string;
      cuba: string;
      spain: string;
      canada: string;
      mexico: string;
      other: string;
    };
    projectTypes: {
      res: string;
      com: string;
      support: string;
      other: string;
    };
  };
  quoteModal: {
    title: string;
    subtitle: string;
    systemType: string;
    residential: string;
    commercial: string;
    province: string;
    provincePlaceholder: string;
    contactAbroad: string;
    contactCuba: string;
    fullName: string;
    email: string;
    phone: string;
    recipientName: string;
    recipientPhone: string;
    address: string;
    notes: string;
    notesPlaceholder: string;
    successTitle: string;
    successMsg: string;
    close: string;
    provinces: string[];
  };
  calculator: {
    resTitle: string;
    resSubtitle: string;
    comTitle: string;
    comSubtitle: string;
    blackoutHours: string;
    appliances: string;
    refrigerator: string;
    airConditioner: string;
    fans: string;
    wifiLighting: string;
    freezer: string;
    posComputer: string;
    medicalDevices: string;
    estimatedSpecs: string;
    solarPanels: string;
    batteryStorage: string;
    inverterSize: string;
    estCost: string;
    requestCustomQuote: string;
    step1Title: string;
    step1Subtitle: string;
    step2Title: string;
    step2Subtitle: string;
    step3Title: string;
    step3Subtitle: string;
    step4Title: string;
    step4Subtitle: string;
    step5Title: string;
    step5Subtitle: string;
  };
  complianceModal: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    close: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contact: string;
    disclaimer: string;
    rights: string;
    legal: string;
  };
  seo: {
    pageTitle: string;
    metaDescription: string;
  };
}

export const translations: Record<Language, Translations> = {
  // =========================================================================
  // ENGLISH (EN)
  // =========================================================================
  en: {
    common: {
      getQuote: "Get a Quote →",
      learnMore: "Learn More →",
      howItWorks: "How It Works",
      submit: "Submit",
      submitting: "Processing...",
      success: "Success",
      error: "Error",
      secure: "Your information is secure and private.",
      required: "Required",
      select: "Select option...",
      next: "Next",
      back: "Back",
      close: "Close Window",
      calculate: "Calculate System",
      results: "System Results",
      contactUs: "Contact Us",
      consultation: "Request Consultation",
      ourProcess: "Our Process",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      residential: "Residential",
      commercial: "Commercial",
      residentialCalc: "Residential Calculator",
      commercialCalc: "Commercial Calculator",
      howItWorks: "How It Works",
      contact: "Contact Us",
      compliance: "U.S. Regulatory Compliance",
      standaloneCode: "Export Standalone",
      brandSubtext: "SOLAR | BATTERY | ENERGY SOLUTIONS",
    },
    hero: {
      titleLine1: "Power Your Family or Business",
      titleLine2: "in Cuba — ",
      titleHighlight: "From Anywhere",
      subtitle: "CubaWatt™ manages the entire process — solar, batteries, sourcing, delivery coordination, installation, and support — so you can provide dependable power to the people and businesses that matter most.",
      badge: "Turnkey Clean Energy for Cuba",
      alt: "Power Your Family or Business in Cuba — From Anywhere",
    },
    cards: {
      resTitle: "Residential",
      resDesc: "Reliable solar and battery solutions for homes in Cuba, so your family can stay comfortable and connected.",
      comTitle: "Commercial",
      comDesc: "Dependable energy solutions for businesses in Cuba, helping you keep operations running through outages.",
      badgeSolar: "LiFePO4 Lithium & Tier-1 Solar",
      altRes: "Residential Solar Solutions in Cuba",
      altCom: "Commercial Solar Solutions in Cuba",
    },
    process: {
      title: "How CubaWatt™ Works",
      subtitle: "A simple, fully managed process from anywhere in the world.",
      step1: {
        title: "Initial Consultation",
        desc: "We discuss your energy needs, location in Cuba, and typical power usage.",
      },
      step2: {
        title: "System Design & Proposal",
        desc: "Our engineers prepare a right-sized solar and battery proposal with clear pricing.",
      },
      step3: {
        title: "Equipment Procurement",
        desc: "We source Tier-1 solar panels, LiFePO4 batteries, and inverters with warranties.",
      },
      step4: {
        title: "Shipping & Customs Clearance",
        desc: "We coordinate door-to-door maritime logistics under full U.S. and Cuban compliance.",
      },
      step5: {
        title: "Certified Installation & Support",
        desc: "Local certified electricians install and commission the system with warranty care.",
      },
    },
    trust: {
      title: "A Trusted Partner from Start to Finish",
      desc: "CubaWatt™ delivers more than just solar panels and batteries. We provide complete, end-to-end energy solutions with the experience, partnerships and on-the-ground coordination to make your project a success.",
      f1: "Professional System Design",
      f2: "High-Quality Sourced Equipment",
      f3: "Coordinated Logistics",
      f4: "Expert Installation",
      f5: "Ongoing Support",
    },
    aboutSection: {
      heroTitle: "Why CubaWatt™ Exists",
      heroSubtitle: "We created CubaWatt™ to simplify getting dependable solar and battery power to homes and businesses in Cuba —",
      heroHighlight: "including when the payer is abroad.",
      storyLabel: "OUR STORY",
      storyTitle: "Bridging the Distance with Reliable Energy",
      storyP1: "Families and businesses across Cuba face daily power interruptions that disrupt food refrigeration, work, and essential communication.",
      storyP2: "For those living abroad, navigating international logistics, currency transfers, and certified on-the-ground technicians was nearly impossible.",
      storyP3: "So we built CubaWatt™ — a fully integrated company designed to remove the barriers and coordinate every step.",
      step4Title: "Installation & Support",
      step4Desc: "Our experienced team handles installation and commissioning, with ongoing support.",
    },
    howItWorksSection: {
      heroTitle1: "A Simple Process. ",
      heroTitle2: "A ",
      heroTitleHighlight: "Complete Solution.",
      heroSubtitle: "From your first question to final installation, CubaWatt™ manages the process. We make it easy to bring reliable solar and battery power to Cuba. Our end-to-end approach handles every detail — design, permitting, sourcing, logistics, installation and support — so you can focus on what matters most.",
      sectionTag: "HOW IT WORKS",
      sectionTitle: "An Easy, End-to-End Process, Designed for Cuba.",
      sectionDesc: "CubaWatt™ combines modern technology, proven logistics, and local expertise to deliver dependable energy solutions anywhere in Cuba. Here's how it works:",
      steps11: [
        {
          num: 1,
          title: "Start the Conversation",
          desc: "Tell us about your home, business or organization. Our team listens to understand your goals, location and timeline, and answers your initial questions.",
        },
        {
          num: 2,
          title: "Define the Need",
          desc: "We assess your current energy challenges and future goals to determine the right solution size and features — whether it's for your home, business or larger organization.",
        },
        {
          num: 3,
          title: "Design the System",
          desc: "Our engineers create a custom solar and battery system tailored to your property, energy needs and budget, using high-quality, proven equipment.",
        },
        {
          num: 4,
          title: "Review the Proposal",
          desc: "We provide a clear, detailed proposal with system design, equipment, pricing and timeline so you know exactly what to expect — with no surprises.",
        },
        {
          num: 5,
          title: "Compliance Review",
          desc: "Our team manages the necessary export, import and U.S. regulatory requirements to ensure a smooth, compliant process from start to finish.",
        },
        {
          num: 6,
          title: "Procurement",
          desc: "We source premium solar panels, batteries and all system components from trusted global manufacturers, ensuring reliability, warranty support and long-term performance.",
        },
        {
          num: 7,
          title: "Logistics",
          desc: "We coordinate international shipping and handle customs clearance, working with trusted partners to deliver your equipment safely and on time to Cuba.",
        },
        {
          num: 8,
          title: "Installation",
          desc: "Our experienced local partners and trained installers set up your system with care, following industry best practices for safety, quality and long-term reliability.",
        },
        {
          num: 9,
          title: "Commissioning",
          desc: "We test and fine-tune the entire system to ensure everything is performing as designed. You'll receive a full walkthrough and training on system operation and care.",
        },
        {
          num: 10,
          title: "Confirmation",
          desc: "Your system is now live! You can enjoy clean, reliable power and greater energy independence, with the peace of mind that comes from a trusted partner.",
        },
        {
          num: 11,
          title: "Ongoing Support",
          desc: "We're here for the long term. Our team provides remote monitoring, technical support and service coordination to keep your system running reliably for years to come.",
        },
      ],
      trustBannerTitle: "A Trusted Partner from Start to Finish",
      trustBannerDesc: "CubaWatt™ delivers more than just solar panels and batteries. We provide complete, end-to-end energy solutions with the experience, partnerships and on-the-ground coordination to make your project a success.",
      trustFeatures: [
        { title: "Professional System Design", subtitle: "Right-sized solutions for real-world needs." },
        { title: "High-Quality Sourced Equipment", subtitle: "Reliable, proven brands and technology." },
        { title: "Coordinated Logistics", subtitle: "Expert delivery and customs coordination for Cuba." },
        { title: "Expert Installation", subtitle: "Skilled local partners and professional installation." },
        { title: "Ongoing Support", subtitle: "Continued assistance to keep your system running reliably." },
      ],
    },
    servicesSection: {
      heroTag: "INTEGRATED ENERGY SOLUTIONS FOR A BRIGHTER CUBA",
      heroTitle: "From Design to Delivery to Installation",
      heroTitlePart1: "From Design to",
      heroTitlePart2: "Delivery to Installation",
      heroSubtitle: "CubaWatt™ handles the entire project so the customer does not have to coordinate multiple vendors.",
      heroBtnProcess: "Our Process",
      label: "WHAT WE DO",
      title: "Complete Energy Solutions,",
      titleHighlight: "Tailored for Cuba.",
      desc: "CubaWatt™ provides comprehensive solar and battery solutions for residential and commercial customers. We manage every step of the process — system design, equipment procurement, logistics, installation, and ongoing support — making it easy to bring clean, reliable power to Cuba.",
      chooseTitle: "Why Choose CubaWatt™?",
      f1Title: "End-to-End Coordination",
      f1Desc: "From initial design to final installation, we manage the entire process seamlessly.",
      f2Title: "Quality Equipment",
      f2Desc: "Tier-1 solar panels, LiFePO4 batteries, and heavy-duty inverters built for tropical climates.",
      f3Title: "Regulatory Compliance",
      f3Desc: "Full adherence to U.S. export regulations and local Cuban import requirements.",
      f4Title: "Trusted Local Partners",
      f4Desc: "Experienced on-the-ground technicians ensuring safe, professional installations.",
      f5Title: "Remote Coordination",
      f5Desc: "Simple ordering and tracking whether you are in Miami, Madrid, Toronto, or Havana.",
    },
    residentialSection: {
      heroTitle: "Power for the People ",
      heroTitleHighlight: "You Care About.",
      heroSubtitle: "From anywhere in the world, you can help provide dependable energy for the home and family that matter most.",
      heroCalcBtn: "Residential Calculator",
      bannerTag: "RESIDENTIAL SOLUTIONS",
      bannerTitle: "Reliable Energy for Cuban Homes and Families",
      bannerP1: "CubaWatt™ helps families create a more comfortable, secure, and modern home environment with clean, dependable solar and battery systems. From lights and refrigeration to fans, water pumps, TVs, and internet — we design residential solutions that fit real home needs and daily life in Cuba.",
      bannerP2: "Whether you are supporting parents, children, or extended family, we make it simple to provide a system that brings reliability, comfort, and peace of mind to the people you care about most.",
      optionsTitle: "Residential System Options",
      optionsDesc: "Flexible solutions designed around real home needs — from essential power to complete whole-home systems.",
      cardEssentialTitle: "Essential",
      cardEssentialDesc: "A practical starting point that covers the most important household needs like lighting, phone and device charging, and small appliances.",
      cardFamilyTitle: "Family",
      cardFamilyDesc: "Provides reliable power for lighting, refrigeration, fans, TVs, internet equipment, and everyday appliances for a comfortable home environment.",
      cardWholeHomeTitle: "Whole Home",
      cardWholeHomeDesc: "A comprehensive solution designed to support most household needs, including kitchen appliances, multiple rooms, and extended backup outages.",
      cardCustomHomeTitle: "Custom Home",
      cardCustomHomeDesc: "A tailored system for larger homes or unique needs, designed around your family's specific goals and priorities.",
      calcBannerTitle: "Calculate the Right System for Your Family's Home",
      calcBannerDesc: "Use our Residential Calculator to get a personalized recommendation based on your home's needs, typical appliances, and goals. It's quick, easy, and designed to help you choose the right solution with confidence.",
      calcBannerBtn: "Residential Calculator →",
      abroadBannerTitle: "Arranging This for Family From Abroad?",
      abroadBannerDesc: "Many of our customers live in the United States, Canada, Spain, and throughout the world. We make it simple to support your family with dependable energy, even from a distance. Our team handles system design, equipment sourcing, delivery coordination, installation support, and ongoing assistance — so you can focus on what matters most: your family.",
      abroadBannerBtn: "Get a Quote →",
      label: "HOME SOLAR & BATTERIES",
      title: "Comfort and Peace of Mind at Home",
      p1: "Keep refrigerators running, food fresh, and fans circulating cool air through every blackout.",
      p2: "Maintain connectivity with WiFi and device charging so you can always stay in touch.",
      p3: "Protect delicate medical equipment and enjoy restful, uninterrupted nights.",
      f1Title: "Refrigeration & Fresh Food",
      f1Desc: "Prevent costly food spoilage with continuous battery backup.",
      f2Title: "Ventilation & Comfort",
      f2Desc: "Sleep comfortably with uninterrupted ceiling and standing fans.",
      f3Title: "Constant Connectivity",
      f3Desc: "Keep smartphones, laptops, and WiFi routers running 24/7.",
    },
    commercialSection: {
      heroTitle: "A Blackout Shouldn't Become a Shutdown.",
      heroTitleLine1: "A Blackout Shouldn't",
      heroTitleLine2: "Become a Shutdown.",
      heroSubtitle: "CubaWatt™ helps offices, retail businesses, hospitality properties, and professional facilities protect operations with solar and battery solutions.",
      heroCalcBtn: "Commercial Calculator",
      resilienceTag: "KEEP YOUR BUSINESS MOVING",
      resilienceTitle: "Why Commercial Energy Resilience Matters",
      resilienceDesc: "Unreliable power can mean lost revenue, disrupted operations, spoiled inventory, unhappy customers, and costly downtime. CubaWatt™ gives Cuban businesses the energy independence to stay productive, protect assets, and deliver consistent service — even when the grid goes down.",
      benefits: [
        {
          title: "Maintain Operations",
          desc: "Keep your business running through outages with instantaneous battery backup.",
        },
        {
          title: "Protect Revenue",
          desc: "Avoid lost sales, spoiled inventory, and idle staff during peak business hours.",
        },
        {
          title: "Strengthen Security",
          desc: "Keep critical systems, lighting, and access control online around the clock.",
        },
        {
          title: "Build a Sustainable Future",
          desc: "Lower operating costs and reduce dependence on expensive generator fuel.",
        },
      ],
      designTag: "TAILORED SOLUTIONS FOR EVERY BUSINESS",
      designTitle: "How CubaWatt™ Designs Around Operations",
      designDesc: "We take a consultative, site-specific approach to design solar and battery solutions that match your business goals, facility requirements, and critical loads — ensuring reliable power, efficient installation, and long-term value.",
      designSteps: [
        {
          title: "Site Assessment",
          desc: "We analyze your energy usage, critical systems, and facility layout.",
        },
        {
          title: "Right-Sized Design",
          desc: "Custom solar and battery systems built for your operations and budget.",
        },
        {
          title: "Seamless Integration",
          desc: "Designed to work with your existing electrical systems and business processes.",
        },
        {
          title: "Ongoing Support",
          desc: "Installation, training, monitoring, and local service you can count on.",
        },
      ],
      appTag: "COMMERCIAL APPLICATIONS",
      appTitle: "Powering a Stronger, More Productive Cuba",
      appDesc: "CubaWatt™ provides dependable, clean energy for a wide range of commercial and professional facilities.",
      appBtn: "Get a Commercial Consultation →",
      applications: [
        {
          title: "Offices",
          subtitle: "OFICINAS",
          desc: "Keep your team productive and your systems online without disruption.",
        },
        {
          title: "Retail Businesses",
          subtitle: "TIENDA",
          desc: "Protect sales, POS inventory systems, and customer shopping experience.",
        },
        {
          title: "Restaurants",
          subtitle: "RESTAURANTE",
          desc: "Keep kitchens, deep freezers, prep stations, and dining service running.",
        },
        {
          title: "Hospitality Properties",
          subtitle: "HOTEL",
          desc: "Deliver uninterrupted air conditioning, lighting, and comfort to your guests.",
        },
        {
          title: "Warehouses & Logistics",
          subtitle: "ALMACÉN",
          desc: "Maintain supply chain operations, lighting, cold storage, and inventory control.",
        },
        {
          title: "Professional Facilities",
          subtitle: "CLÍNICA",
          desc: "Support clinics, diagnostic labs, and other mission-critical operations.",
        },
      ],
      label: "COMMERCIAL SOLUTIONS",
      title: "Keep Your Business Running Smoothly",
      p1: "Blackouts should never force your doors to close or disrupt your customers.",
      p2: "Protect sensitive equipment, computers, point of sale, and refrigeration.",
      p3: "Maintain revenue and give your staff a stable, productive environment.",
      f1Title: "Operational Continuity",
      f1Desc: "Automatic switchover keeps lights and cash registers online without interruption.",
      f2Title: "Equipment Protection",
      f2Desc: "Pure sine wave power guards sensitive electronics against damaging grid surges.",
      f3Title: "Guest & Customer Satisfaction",
      f3Desc: "Ensure restaurants, guest houses, and stores remain welcoming at all hours.",
    },
    complianceSection: {
      heroTitle: "U.S. Regulatory Compliance",
      heroSubtitle: "Compliance is part of the CubaWatt™ process.",
      p1: "We operate in full accordance with applicable U.S. laws and regulations.",
      p2: "Including export controls and sanctions requirements, so you can move forward with confidence.",
      p3: "All equipment shipments strictly follow OFAC general license authorizations and BIS export guidelines.",
      approachTitle: "Our Approach to Compliance",
      approachDesc: "We take regulatory compliance seriously. From legal analysis to shipping documentation, our compliance team ensures every step meets U.S. Department of Commerce and Treasury requirements.",
      f1Title: "OFAC General License Alignment",
      f1Desc: "Operating under 31 CFR § 515.582 and related authorizations supporting independent private entrepreneurs and individuals in Cuba.",
      f2Title: "BIS Export Compliance",
      f2Desc: "Adherence to U.S. Department of Commerce Bureau of Industry and Security regulations for authorized renewable energy equipment.",
      f3Title: "Transparent Documentation",
      f3Desc: "Complete paper trail and customs verification for every item, eliminating border seizure risks.",
      f4Title: "Secure Financial Transactions",
      f4Desc: "All payments processed through authorized international banking channels with zero ambiguity.",
      qTitle: "Questions About Compliance?",
      qDesc: "Our legal and logistics specialists can walk you through our authorizations, documentation, and procedures.",
      qBtn: "Speak with Our Compliance Team →",
      altHero: "U.S. Regulatory Compliance Team",
      altApproach: "Solar panels on container shipment",
      altQuestions: "Logistics coordinators discussing customs paperwork",
    },
    contactSection: {
      badge1: "100% Turnkey Coordination",
      badge2: "OFAC & BIS Compliant",
      badge3: "Guaranteed Delivery & Installation",
      title: "Contact",
      titleHighlight: "CubaWatt™",
      subtitle: "Whether you have questions about equipment, need a custom system design, or are ready to begin, our team is here to assist you every step of the way.",
      helpLabel: "HOW WE CAN HELP",
      helpTitle: "Connect With Our Energy Specialists",
      helpSubtitle: "We provide personalized assistance for every project.",
      card1Title: "General Inquiries",
      card1Desc: "Learn more about our services, equipment, and how CubaWatt™ works.",
      card2Title: "Custom Quotes",
      card2Desc: "Tell us about your home or business for a tailored proposal and quote.",
      card3Title: "Partnership Opportunities",
      card3Desc: "Connect with us regarding local installation or distribution partnerships in Cuba.",
      formLabel: "SEND US A MESSAGE",
      formTitle: "Start the Conversation",
      formSubtitle: "Fill out the form below and an energy specialist will get back to you within 24 hours.",
      formName: "Full Name *",
      formCountry: "Your Country of Residence *",
      formEmail: "Email Address *",
      formPhone: "Phone / WhatsApp Number",
      formLocation: "Project Location in Cuba *",
      formProjectType: "Project Type *",
      formMessage: "How Can We Help? *",
      formMessagePlaceholder: "Tell us about your home, business, or specific power requirements in Cuba...",
      formSuccessTitle: "Message Received!",
      formSuccessDesc: "Thank you for reaching out. A CubaWatt™ specialist will review your information and contact you shortly.",
      formSuccessButton: "Send Another Message",
      infoLabel: "DIRECT CONTACT",
      infoTitle: "We're Here to Help",
      infoSubtitle: "Reach out directly through any of our channels.",
      infoEmailTitle: "Email Us",
      infoEmailDesc: "support@cubawatt.com — Responses within 24 hours.",
      infoWhatsappTitle: "WhatsApp Concierge",
      infoWhatsappDesc: "+1 (305) 555-0199 — Mon-Sat, 9AM to 7PM EST.",
      infoCallTitle: "Customer Care",
      infoCallTime: "Available Monday - Friday, 9am - 6pm EST",
      trustTitle: "Why Clients Trust CubaWatt™",
      trust1: "Full U.S. legal and export compliance.",
      trust2: "Transparent USD pricing with zero hidden surcharges.",
      trust3: "Safe delivery and certified installation across all Cuban provinces.",
      trust4: "Continuous post-installation support and equipment warranties.",
      ctaTitle: "Ready to Power What Matters Most?",
      ctaDesc: "Whether for your family's home or your growing business, CubaWatt™ is your trusted partner for modern, reliable energy.",
      ctaBtn: "Get Started Today →",
      altHero: "Solar engineers installing equipment on Cuban rooftop",
      altBottom: "Sunset over Havana skyline with warm glow",
      countries: {
        us: "United States",
        cuba: "Cuba",
        spain: "Spain",
        canada: "Canada",
        mexico: "Mexico",
        other: "Other Country",
      },
      projectTypes: {
        res: "Residential Home Solar",
        com: "Commercial Business System",
        support: "General Information & Inquiries",
        other: "Partnership / Other",
      },
    },
    quoteModal: {
      title: "Request a Custom Solar Quote",
      subtitle: "Provide your project details below. Our engineering team will prepare an exact proposal within 24 hours.",
      systemType: "System Type",
      residential: "Residential (Home)",
      commercial: "Commercial (Business)",
      province: "Target Province in Cuba",
      provincePlaceholder: "Select province...",
      contactAbroad: "Your Information (Purchaser Abroad)",
      contactCuba: "Recipient Information in Cuba",
      fullName: "Your Full Name",
      email: "Your Email Address",
      phone: "Your Phone / WhatsApp",
      recipientName: "Recipient Full Name in Cuba",
      recipientPhone: "Recipient Phone / WhatsApp",
      address: "Installation Address in Cuba",
      notes: "Specific Energy Needs",
      notesPlaceholder: "e.g. Need to run 1 refrigerator, lights, and WiFi...",
      successTitle: "Quote Request Received!",
      successMsg: "Thank you! We will contact you via WhatsApp and email with your personalized proposal.",
      successRef: "Submitted System Reference:",
      category: "Category:",
      targetProv: "Target Province:",
      deliveryCoord: "Delivery Coordination:",
      deliveryNote: "Door-to-door in Cuba with certified installation.",
      complianceHeader: "U.S. Regulatory Compliance:",
      complianceNote: "Equipment exported under OFAC / BIS 515.582 / 515.584 authorizations for independent private entities and families in Cuba.",
      close: "Close Window",
      provinces: [
        "Pinar del Río",
        "Artemisa",
        "La Habana (Havana)",
        "Mayabeque",
        "Matanzas (Varadero / Cárdenas)",
        "Cienfuegos",
        "Villa Clara (Santa Clara)",
        "Sancti Spíritus (Trinidad)",
        "Ciego de Ávila",
        "Camagüey",
        "Las Tunas",
        "Holguín",
        "Granma",
        "Santiago de Cuba",
        "Guantánamo",
        "Isla de la Juventud",
      ],
    },
    calculator: {
      resTitle: "Residential Solar & Storage Sizing Calculator",
      resSubtitle: "Estimate the exact solar panel capacity and battery backup required for your home in Cuba.",
      comTitle: "Commercial Solar & Backup Sizing Calculator",
      comSubtitle: "Calculate load requirements to keep your business operating during grid outages.",
      blackoutHours: "Expected Daily Blackout Duration",
      appliances: "Select Required Appliances & Loads",
      refrigerator: "Standard Refrigerator / Freezer",
      airConditioner: "Inverter Split Air Conditioner (12k BTU)",
      fans: "Ceiling & Standing Fans (2-3 units)",
      wifiLighting: "LED Lighting & WiFi Router",
      freezer: "Commercial Deep Freezer",
      posComputer: "POS, Computers & Sound System",
      medicalDevices: "Medical Equipment (CPAP / Oxygen)",
      estimatedSpecs: "Recommended System Configuration",
      solarPanels: "Solar Generation Capacity",
      batteryStorage: "LiFePO4 Lithium Battery Storage",
      inverterSize: "Hybrid Pure Sine Inverter",
      estCost: "Estimated Turnkey Equipment Package",
      requestCustomQuote: "Lock in This Configuration & Request Quote →",
      step1Title: "Property Info",
      step1Subtitle: "Where is the home located?",
      step2Title: "Appliances",
      step2Subtitle: "What do you need to power?",
      step3Title: "Backup Time",
      step3Subtitle: "How many hours of autonomy?",
      step4Title: "Existing Equipment",
      step4Subtitle: "What is already installed?",
      step5Title: "Results",
      step5Subtitle: "Your personalized system sizing",
    },
    complianceModal: {
      title: "U.S. Regulatory Compliance & OFAC Authorization",
      subtitle: "Operating with complete transparency, legal safety, and trade compliance.",
      p1: "CubaWatt™ operates under General Licenses authorized by the U.S. OFAC and BIS.",
      p2: "Clean energy equipment may be provided to support independent private businesses and individuals in Cuba.",
      p3: "All shipments comply strictly with regulations, ensuring reliable delivery and zero risk.",
      close: "Understood & Close",
    },
    footer: {
      tagline: "Empowering Cuban families and independent businesses with clean, resilient solar and battery power.",
      quickLinks: "Quick Navigation",
      contact: "Contact & Assistance",
      disclaimer: "CubaWatt™ is an independent energy solutions provider. All trade complies with U.S. laws.",
      rights: "All rights reserved. CubaWatt™ is a trademark.",
      legal: "Operations & Legal",
    },
    seo: {
      pageTitle: "CubaWatt™ | Power Your Family or Business in Cuba — From Anywhere",
      metaDescription: "CubaWatt™ delivers turnkey solar and battery solutions to Cuba with sourcing, delivery coordination, certified installation, and long-term support.",
    },
  },

  // =========================================================================
  // SPANISH (ES)
  // =========================================================================
  es: {
    common: {
      getQuote: "Cotizar Ahora →",
      learnMore: "Conozca Más →",
      howItWorks: "Cómo Funciona",
      submit: "Enviar",
      submitting: "Procesando...",
      success: "Éxito",
      error: "Error",
      secure: "Su información está segura y es confidencial.",
      required: "Requerido",
      select: "Seleccione una opción...",
      next: "Siguiente",
      back: "Atrás",
      close: "Cerrar Ventana",
      calculate: "Calcular Sistema",
      results: "Resultados del Sistema",
      contactUs: "Contáctenos",
      consultation: "Solicitar Consulta",
      ourProcess: "Nuestro Proceso",
    },
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      services: "Servicios",
      residential: "Residencial",
      commercial: "Comercial",
      residentialCalc: "Calculadora Residencial",
      commercialCalc: "Calculadora Comercial",
      howItWorks: "Cómo Funciona",
      contact: "Contáctenos",
      compliance: "Cumplimiento Regulatorio EE.UU.",
      standaloneCode: "Ver Código",
      brandSubtext: "SOLAR | BATERÍA | SOLUCIONES ENERGÉTICAS",
    },
    hero: {
      titleLine1: "Energía para su Familia o Negocio",
      titleLine2: "en Cuba — ",
      titleHighlight: "Desde Cualquier Lugar",
      subtitle: "CubaWatt™ gestiona todo el proceso — paneles solares, baterías, compras, logística aduanal, instalación y soporte — para que brinde energía continua y confiable a quienes más importan.",
      badge: "Energía Limpia Llave en Mano para Cuba",
      alt: "Energía para su Familia o Negocio en Cuba — Desde Cualquier Lugar",
    },
    cards: {
      resTitle: "Residencial",
      resDesc: "Soluciones solares y de baterías confiables para hogares en Cuba, para que su familia se mantenga cómoda y conectada durante los apagones.",
      comTitle: "Comercial",
      comDesc: "Soluciones energéticas seguras para negocios y mipymes en Cuba, ayudándole a mantener sus operaciones activas sin interrupciones.",
      badgeSolar: "Litio LiFePO4 y Paneles Tier-1",
      altRes: "Soluciones Solares Residenciales en Cuba",
      altCom: "Soluciones Energéticas Comerciales en Cuba",
    },
    process: {
      title: "Cómo Funciona CubaWatt™",
      subtitle: "Un proceso sencillo, totalmente coordinado desde cualquier parte del mundo.",
      step1: {
        title: "Consulta Inicial",
        desc: "Conversamos sobre sus necesidades de energía, ubicación en Cuba y electrodomésticos prioritarios.",
      },
      step2: {
        title: "Diseño y Propuesta Técnica",
        desc: "Nuestros ingenieros preparan una propuesta solar y de baterías a medida con precios transparentes.",
      },
      step3: {
        title: "Adquisición de Equipos",
        desc: "Suministramos paneles solares Tier-1, baterías de litio LiFePO4 e inversores híbridos con garantía.",
      },
      step4: {
        title: "Envío y Despacho Aduanal",
        desc: "Coordinamos el flete marítimo puerta a puerta bajo estricto cumplimiento normativo de EE.UU. y Cuba.",
      },
      step5: {
        title: "Instalación Certificada y Soporte",
        desc: "Electricistas locales certificados instalan y ponen en marcha el sistema con soporte permanente.",
      },
    },
    trust: {
      title: "Un Socio de Confianza de Principio a Fin",
      desc: "CubaWatt™ ofrece mucho más que paneles solares y baterías. Brindamos soluciones energéticas integrales con experiencia, alianzas y coordinación en el terreno para garantizar el éxito de su proyecto.",
      f1: "Diseño Profesional de Sistemas",
      f2: "Equipos de Primera Calidad",
      f3: "Logística y Envíos Coordinados",
      f4: "Instalación Especializada",
      f5: "Soporte Técnico Continuo",
    },
    aboutSection: {
      heroTitle: "Por Qué Existe CubaWatt™",
      heroSubtitle: "Creamos CubaWatt™ para facilitar el acceso a energía solar y de baterías confiable para hogares y negocios en Cuba —",
      heroHighlight: "incluso cuando el comprador reside en el extranjero.",
      storyLabel: "NUESTRA HISTORIA",
      storyTitle: "Acortando Distancias con Energía Confiable",
      storyP1: "Las familias y negocios en Cuba sufren apagones constantes que afectan la refrigeración de alimentos, el trabajo y la comunicación diaria.",
      storyP2: "Para los seres queridos en el exterior, coordinar compras internacionales, logística de envío e instaladores certificados resultaba sumamente complejo.",
      storyP3: "Por eso creamos CubaWatt™: una compañía integral diseñada para eliminar obstáculos y encargarse de cada paso con total garantía.",
      step4Title: "Instalación y Soporte",
      step4Desc: "Nuestro equipo experimentado se encarga de la instalación y puesta en marcha, con soporte técnico continuo.",
    },
    howItWorksSection: {
      heroTitle1: "Un Proceso Sencillo. ",
      heroTitle2: "Una ",
      heroTitleHighlight: "Solución Completa.",
      heroSubtitle: "Desde su primera pregunta hasta la instalación final, CubaWatt™ gestiona todo el proceso. Facilitamos llevar energía solar y baterías confiables a Cuba. Nuestro enfoque integral abarca diseño, trámites, equipos, envíos, instalación y soporte continuo.",
      sectionTag: "CÓMO FUNCIONA",
      sectionTitle: "Un Proceso Integral y Sencillo, Diseñado para Cuba.",
      sectionDesc: "CubaWatt™ combina tecnología de punta, logística comprobada y experiencia local para ofrecer soluciones energéticas confiables en cualquier provincia de Cuba:",
      steps11: [
        {
          num: 1,
          title: "Iniciar la Conversación",
          desc: "Cuéntenos sobre su hogar, negocio u organización. Nuestro equipo escucha para comprender sus metas, provincia y plazos, respondiendo todas sus consultas.",
        },
        {
          num: 2,
          title: "Definir la Necesidad",
          desc: "Evaluamos sus desafíos energéticos y electrodomésticos prioritarios para determinar la capacidad exacta que necesita su familia o emprendimiento.",
        },
        {
          num: 3,
          title: "Diseñar el Sistema",
          desc: "Nuestros ingenieros diseñan un sistema personalizado de paneles solares y baterías LiFePO4 adaptado a su presupuesto con equipos certificados.",
        },
        {
          num: 4,
          title: "Revisar la Propuesta",
          desc: "Le presentamos una propuesta clara y detallada con equipos, cotización final y cronograma exacto, sin costos ocultos ni sorpresas.",
        },
        {
          num: 5,
          title: "Revisión de Cumplimiento",
          desc: "Gestionamos los requisitos de exportación de EE.UU. y las normativas aplicables para asegurar un trámite legal, transparente y seguro.",
        },
        {
          num: 6,
          title: "Adquisición de Equipos",
          desc: "Suministramos paneles solares de alta eficiencia, baterías LiFePO4 de 6,000+ ciclos e inversores híbridos de fabricantes globales de primer nivel.",
        },
        {
          num: 7,
          title: "Logística y Envío",
          desc: "Coordinamos el flete marítimo internacional y los trámites de aduana para entregar los equipos de forma segura y puntual en Cuba.",
        },
        {
          num: 8,
          title: "Instalación",
          desc: "Técnicos locales experimentados y electricistas capacitados instalan su sistema siguiendo las mejores prácticas de seguridad y durabilidad.",
        },
        {
          num: 9,
          title: "Puesta en Marcha",
          desc: "Probamos y calibramos todo el sistema para asegurar su rendimiento óptimo. Recibirá una capacitación completa sobre el uso y cuidado del equipo.",
        },
        {
          num: 10,
          title: "Confirmación y Entrega",
          desc: "¡Su sistema está activo! Disfrute de electricidad limpia, refrigeración protegida y tranquilidad con el respaldo de un socio de confianza.",
        },
        {
          num: 11,
          title: "Soporte Continuo",
          desc: "Estamos aquí para acompañarle a largo plazo: soporte técnico, monitoreo y mantenimiento para que su inversión funcione a la perfección por años.",
        },
      ],
      trustBannerTitle: "Un Socio de Confianza de Principio a Fin",
      trustBannerDesc: "CubaWatt™ entrega mucho más que paneles solares y baterías. Brindamos soluciones completas llave en mano con experiencia, alianzas sólidas y presencia sobre el terreno en Cuba.",
      trustFeatures: [
        { title: "Diseño Profesional", subtitle: "Sistemas adaptados a las necesidades reales." },
        { title: "Equipos de Alta Calidad", subtitle: "Marcas y tecnologías probadas y garantizadas." },
        { title: "Logística Coordinada", subtitle: "Coordinación experta de envíos y aduanas para Cuba." },
        { title: "Instalación Experta", subtitle: "Socios locales certificados y montaje profesional." },
        { title: "Soporte Permanente", subtitle: "Asistencia continua para mantener su sistema al 100%." },
      ],
    },
    servicesSection: {
      heroTag: "SOLUCIONES ENERGÉTICAS INTEGRADAS PARA UNA CUBA MÁS FUERTE",
      heroTitle: "Desde el Diseño hasta la Entrega e Instalación",
      heroTitlePart1: "Desde el Diseño hasta la",
      heroTitlePart2: "Entrega e Instalación",
      heroSubtitle: "CubaWatt™ se encarga de todo el proyecto para que el cliente no tenga que coordinar con múltiples proveedores.",
      heroBtnProcess: "Nuestro Proceso",
      label: "LO QUE HACEMOS",
      title: "Soluciones Energéticas Completas,",
      titleHighlight: "Diseñadas para Cuba.",
      desc: "CubaWatt™ ofrece soluciones solares y de baterías llave en mano para clientes residenciales y comerciales. Gestionamos cada paso — diseño técnico, adquisición de equipos, logística marítima, instalación certificada y soporte continuo — facilitando llevar energía limpia y confiable a Cuba.",
      chooseTitle: "¿Por Qué Elegir CubaWatt™?",
      f1Title: "Coordinación de Extremo a Extremo",
      f1Desc: "Desde el primer cálculo de carga hasta la instalación final, coordinamos todo sin complicaciones.",
      f2Title: "Equipamiento de Primera Línea",
      f2Desc: "Paneles Tier-1, baterías LiFePO4 de grado A e inversores híbridos resistentes al clima tropical.",
      f3Title: "Cumplimiento Regulatorio Total",
      f3Desc: "Apego estricto a las normas de exportación de EE.UU. (OFAC / BIS) y regulaciones aduanales cubanas.",
      f4Title: "Técnicos Locales Calificados",
      f4Desc: "Electricistas experimentados en Cuba que garantizan instalaciones seguras y duraderas.",
      f5Title: "Gestión Remota Sencilla",
      f5Desc: "Ordene y supervise el avance cómodamente si vive en Miami, Madrid, Toronto o La Habana.",
    },
    residentialSection: {
      heroTitle: "Energía para las Personas ",
      heroTitleHighlight: "que Más le Importan.",
      heroSubtitle: "Desde cualquier lugar del mundo, usted puede asegurar energía limpia y continua para el hogar y la familia que más ama.",
      heroCalcBtn: "Calculadora Residencial",
      bannerTag: "SOLUCIONES RESIDENCIALES",
      bannerTitle: "Energía Confiable para Hogares y Familias en Cuba",
      bannerP1: "CubaWatt™ ayuda a las familias a crear un entorno hogareño cómodo, seguro y moderno con sistemas solares y de baterías limpios y fiables. Desde iluminación y refrigeración hasta ventiladores, bombas de agua, televisores e internet: diseñamos sistemas adaptados a la realidad cotidiana de Cuba.",
      bannerP2: "Ya sea que esté apoyando a sus padres, hijos o familiares en la isla, hacemos muy sencillo brindarles una solución que aporte tranquilidad y bienestar duradero.",
      optionsTitle: "Opciones de Sistemas Residenciales",
      optionsDesc: "Soluciones flexibles adaptadas a las necesidades reales de cada hogar: desde cargas esenciales hasta cobertura integral.",
      cardEssentialTitle: "Esencial",
      cardEssentialDesc: "Un punto de partida práctico que cubre lo indispensable: luces LED, carga de teléfonos y pequeños electrodomésticos.",
      cardFamilyTitle: "Familiar",
      cardFamilyDesc: "Energía confiable para iluminación, refrigerador, ventiladores, TV, internet y vida familiar diaria con total comodidad.",
      cardWholeHomeTitle: "Hogar Completo",
      cardWholeHomeDesc: "Una solución integral diseñada para sostener la mayoría de las necesidades: cocina, múltiples habitaciones y apagones prolongados.",
      cardCustomHomeTitle: "Hogar a Medida",
      cardCustomHomeDesc: "Un sistema diseñado específicamente para casas grandes o necesidades singulares, configurado según sus prioridades exactas.",
      calcBannerTitle: "Calcule el Sistema Ideal para el Hogar de su Familia",
      calcBannerDesc: "Utilice nuestra Calculadora Residencial para recibir una recomendación personalizada basada en sus electrodomésticos y horas de apagón. Es rápido, sencillo y le ayuda a elegir con total seguridad.",
      calcBannerBtn: "Calculadora Residencial →",
      abroadBannerTitle: "¿Está Coordinando Esto para su Familia Desde el Extranjero?",
      abroadBannerDesc: "Muchos de nuestros clientes viven en Estados Unidos, Canadá, España y otros países. Facilitamos el apoyo a su familia con energía continua, incluso a la distancia. Nuestro equipo se encarga del diseño, abastecimiento, envío, montaje y soporte.",
      abroadBannerBtn: "Cotizar Ahora →",
      label: "ENERGÍA SOLAR PARA HOGARES",
      title: "Comodidad y Paz Mental en Casa",
      p1: "Mantenga los refrigeradores encendidos, los alimentos frescos y los ventiladores funcionando durante cualquier apagón.",
      p2: "Conserve la conectividad con WiFi y recarga de teléfonos para mantenerse siempre en comunicación.",
      p3: "Proteja equipos médicos vitales y asegure un descanso nocturno fresco y tranquilo.",
      f1Title: "Refrigeración y Alimentos Frescos",
      f1Desc: "Evite pérdidas costosas de alimentos con respaldo ininterrumpido de baterías.",
      f2Title: "Ventilación y Confort",
      f2Desc: "Duerma fresco con ventiladores de techo y de pie funcionando toda la noche.",
      f3Title: "Conectividad Permanente",
      f3Desc: "Mantenga teléfonos móviles, laptops y routers WiFi activos las 24 horas.",
    },
    commercialSection: {
      heroTitle: "Un Apagón No Debería Convertirse en un Cierre.",
      heroTitleLine1: "Un Apagón No Debería",
      heroTitleLine2: "Convertirse en un Cierre.",
      heroSubtitle: "CubaWatt™ ayuda a oficinas, tiendas, restaurantes, hostales y clínicas en Cuba a proteger sus operaciones con energía solar y baterías.",
      heroCalcBtn: "Calculadora Comercial",
      resilienceTag: "MANTENGA SU NEGOCIO EN MARCHA",
      resilienceTitle: "Por Qué Importa la Resiliencia Energética Comercial",
      resilienceDesc: "La falta de electricidad provoca pérdidas de ingresos, interrupción de servicios, comida descompuesta y clientes insatisfechos. CubaWatt™ ofrece a las empresas cubanas la autonomía energética necesaria para producir sin pausas.",
      benefits: [
        {
          title: "Mantener Operaciones",
          desc: "Siga operando durante los apagones con respaldo instantáneo de baterías de litio.",
        },
        {
          title: "Proteger sus Ingresos",
          desc: "Evite ventas perdidas, inventario arruinado y empleados parados por falta de luz.",
        },
        {
          title: "Reforzar la Seguridad",
          desc: "Mantenga sistemas de cobro, cámaras, iluminación y control de acceso siempre en línea.",
        },
        {
          title: "Construir un Futuro Sostenible",
          desc: "Reduzca costos fijos y disminuya la dependencia del combustible caro para plantas.",
        },
      ],
      designTag: "SOLUCIONES A LA MEDIDA DE SU EMPRESA",
      designTitle: "Cómo Diseña CubaWatt™ en Función de su Operación",
      designDesc: "Adoptamos un enfoque consultivo y específico para dimensionar sistemas que respondan a sus cargas críticas, instalaciones y presupuesto.",
      designSteps: [
        {
          title: "Evaluación Técnica",
          desc: "Analizamos su consumo eléctrico, equipos críticos y distribución de la instalación.",
        },
        {
          title: "Diseño Preciso",
          desc: "Sistemas solares y de baterías optimizados para su presupuesto y objetivos comerciales.",
        },
        {
          title: "Integración Sin Fisuras",
          desc: "Diseñado para operar en armonía con su red eléctrica existente y rutinas de trabajo.",
        },
        {
          title: "Acompañamiento Continuo",
          desc: "Instalación profesional, entrenamiento del personal, monitoreo y servicio local.",
        },
      ],
      appTag: "APLICACIONES COMERCIALES",
      appTitle: "Impulsando una Cuba Más Fuerte y Productiva",
      appDesc: "CubaWatt™ suministra energía confiable y limpia para una amplia variedad de negocios y profesionales.",
      appBtn: "Solicitar Consulta Comercial →",
      applications: [
        {
          title: "Oficinas y Mipymes",
          subtitle: "OFICINAS",
          desc: "Mantenga a su equipo productivo y sus computadoras y servidores siempre activos.",
        },
        {
          title: "Comercios y Tiendas",
          subtitle: "TIENDA",
          desc: "Proteja ventas, sistemas de punto de venta (POS) y la experiencia de sus clientes.",
        },
        {
          title: "Restaurantes y Paladares",
          subtitle: "RESTAURANTE",
          desc: "Mantenga cocinas, cámaras de congelación y servicio de salón en marcha.",
        },
        {
          title: "Hostales y Hoteles",
          subtitle: "HOTEL",
          desc: "Ofrezca climatización, agua caliente y confort ininterrumpido a sus huéspedes.",
        },
        {
          title: "Almacenes y Logística",
          subtitle: "ALMACÉN",
          desc: "Garantice iluminación, refrigeración de productos y control de inventario.",
        },
        {
          title: "Clínicas y Laboratorios",
          subtitle: "CLÍNICA",
          desc: "Respalde consultorios, equipos de diagnóstico y operaciones de salud críticas.",
        },
      ],
      label: "SOLUCIONES PARA NEGOCIOS",
      title: "Mantenga su Negocio Operando Sin Pausas",
      p1: "Los apagones nunca deben obligarle a cerrar las puertas o detener el servicio a sus clientes.",
      p2: "Proteja equipos costosos, terminales de pago, iluminación y sistemas de refrigeración.",
      p3: "Asegure ingresos continuos y brinde a sus trabajadores un ambiente estable y productivo.",
      f1Title: "Continuidad Operativa",
      f1Desc: "La conmutación automática mantiene cajas registradoras y luces encendidas al instante.",
      f2Title: "Protección de Equipos",
      f2Desc: "La onda senoidal pura protege electrónicos sensibles contra sobretensiones de la red.",
      f3Title: "Satisfacción de Clientes",
      f3Desc: "Asegure que su restaurante, tienda o posada se mantenga acogedor a toda hora.",
    },
    complianceSection: {
      heroTitle: "Cumplimiento Regulatorio EE.UU.",
      heroSubtitle: "El cumplimiento es parte fundamental del proceso de CubaWatt™.",
      p1: "Operamos en total conformidad con las leyes y regulaciones aplicables de los Estados Unidos.",
      p2: "Incluyendo controles de exportación y normas de sanciones, para que avance con absoluta seguridad jurídica.",
      p3: "Todos los envíos se apegan a las autorizaciones de Licencias Generales de la OFAC y normas del BIS.",
      approachTitle: "Nuestro Enfoque de Cumplimiento",
      approachDesc: "Tomamos el cumplimiento regulatorio con la máxima seriedad. Desde el análisis legal hasta la documentación de embarque, nuestro equipo garantiza el apego a las normas del Departamento de Comercio y del Tesoro.",
      f1Title: "Alineación con Licencias Generales OFAC",
      f1Desc: "Operamos bajo 31 CFR § 515.582 y normativas complementarias de apoyo al sector privado independiente en Cuba.",
      f2Title: "Cumplimiento de Exportación BIS",
      f2Desc: "Apego a las regulaciones de la Oficina de Industria y Seguridad para equipos de energía renovable autorizados.",
      f3Title: "Documentación Transparente",
      f3Desc: "Expediente completo y validación aduanal para cada artículo, eliminando riesgos de retención.",
      f4Title: "Transacciones Financieras Seguras",
      f4Desc: "Todos los pagos se procesan a través de canales bancarios internacionales transparentes.",
      qTitle: "¿Preguntas Sobre el Cumplimiento Legal?",
      qDesc: "Nuestros especialistas jurídicos y logísticos pueden orientarle sobre nuestras autorizaciones y procedimientos.",
      qBtn: "Hablar con Nuestro Equipo de Cumplimiento →",
      altHero: "Equipo de cumplimiento normativo de CubaWatt",
      altApproach: "Cargamento de paneles solares para exportación",
      altQuestions: "Especialistas revisando documentación aduanal",
    },
    contactSection: {
      badge1: "Coordinación 100% Llave en Mano",
      badge2: "Conforme con OFAC y BIS",
      badge3: "Entrega e Instalación Garantizada",
      title: "Contactar a",
      titleHighlight: "CubaWatt™",
      subtitle: "Ya sea que tenga dudas sobre equipamiento, requiera un diseño a medida o esté listo para iniciar, nuestro equipo está a su disposición en cada etapa.",
      helpLabel: "CÓMO PODEMOS AYUDARLE",
      helpTitle: "Conéctese con Nuestros Especialistas en Energía",
      helpSubtitle: "Brindamos asistencia personalizada para cada proyecto.",
      card1Title: "Consultas Generales",
      card1Desc: "Conozca más sobre nuestros servicios, equipos y cómo funciona CubaWatt™.",
      card2Title: "Cotizaciones a Medida",
      card2Desc: "Comparta los datos de su hogar o negocio para recibir una propuesta exacta.",
      card3Title: "Oportunidades de Alianza",
      card3Desc: "Contáctenos para alianzas locales de instalación o distribución en Cuba.",
      formLabel: "ENVÍENOS UN MENSAJE",
      formTitle: "Inicie la Conversación",
      formSubtitle: "Complete el siguiente formulario y un especialista le responderá en menos de 24 horas.",
      formName: "Nombre Completo *",
      formCountry: "País Donde Reside *",
      formEmail: "Correo Electrónico *",
      formPhone: "Teléfono / WhatsApp",
      formLocation: "Ubicación del Proyecto en Cuba *",
      formProjectType: "Tipo de Proyecto *",
      formMessage: "¿Cómo Podemos Ayudarle? *",
      formMessagePlaceholder: "Cuéntenos sobre su vivienda, negocio o requerimientos de energía en Cuba...",
      formSuccessTitle: "¡Mensaje Recibido!",
      formSuccessDesc: "Gracias por contactarnos. Un especialista de CubaWatt™ revisará sus datos y se comunicará a la brevedad.",
      formSuccessButton: "Enviar Otro Mensaje",
      infoLabel: "CONTACTO DIRECTO",
      infoTitle: "Estamos para Ayudarle",
      infoSubtitle: "Comuníquese a través de cualquiera de nuestros canales oficiales.",
      infoEmailTitle: "Escríbanos por Correo",
      infoEmailDesc: "support@cubawatt.com — Respuesta en menos de 24 horas.",
      infoWhatsappTitle: "Atención por WhatsApp",
      infoWhatsappDesc: "+1 (305) 555-0199 — Lun a Sáb, 9AM a 7PM EST.",
      infoCallTitle: "Atención Telefónica",
      infoCallTime: "Disponible de Lunes a Viernes, 9am - 6pm EST",
      trustTitle: "¿Por Qué Confiar en CubaWatt™?",
      trust1: "Cumplimiento legal y de exportación 100% conforme a leyes de EE.UU.",
      trust2: "Precios transparentes en USD sin recargos imprevistos.",
      trust3: "Envío seguro e instalación certificada en todas las provincias cubanas.",
      trust4: "Soporte post-instalación continuo y garantías de fábrica directas.",
      ctaTitle: "¿Listo para Llevar Energía a Quienes Más Le Importan?",
      ctaDesc: "Ya sea para el hogar de su familia o su empresa, CubaWatt™ es su socio confiable para energía moderna.",
      ctaBtn: "Comenzar Hoy →",
      altHero: "Técnicos solares instalando en techo cubano",
      altBottom: "Skyline de La Habana al atardecer",
      countries: {
        us: "Estados Unidos",
        cuba: "Cuba",
        spain: "España",
        canada: "Canadá",
        mexico: "México",
        other: "Otro País",
      },
      projectTypes: {
        res: "Sistema Solar Residencial (Hogar)",
        com: "Sistema Comercial (Negocio / Mipyme)",
        support: "Información General y Consultas",
        other: "Alianzas / Otro",
      },
    },
    quoteModal: {
      title: "Solicite una Cotización Personalizada",
      subtitle: "Complete los detalles de su proyecto. Nuestro equipo técnico preparará una propuesta detallada en menos de 24 horas.",
      systemType: "Tipo de Sistema",
      residential: "Residencial (Hogar)",
      commercial: "Comercial (Negocio)",
      province: "Provincia de Instalación en Cuba",
      provincePlaceholder: "Seleccione provincia...",
      contactAbroad: "Sus Datos (Comprador en el Exterior)",
      contactCuba: "Datos del Destinatario en Cuba",
      fullName: "Su Nombre Completo",
      email: "Su Correo Electrónico",
      phone: "Su Teléfono / WhatsApp",
      recipientName: "Nombre del Destinatario en Cuba",
      recipientPhone: "Teléfono / WhatsApp en Cuba",
      address: "Dirección de Instalación en Cuba",
      notes: "Necesidades Energéticas Específicas",
      notesPlaceholder: "Ej: Necesito alimentar 1 refrigerador, luces, ventiladores y router WiFi...",
      successTitle: "¡Solicitud Recibida con Éxito!",
      successMsg: "¡Gracias! Le contactaremos por WhatsApp y correo electrónico con su propuesta técnica personalizada.",
      successRef: "Referencia de la Solicitud:",
      category: "Categoría:",
      targetProv: "Provincia Destino:",
      deliveryCoord: "Coordinación de Entrega:",
      deliveryNote: "Puerta a puerta en Cuba con instalación certificada.",
      complianceHeader: "Cumplimiento Regulatorio EE.UU.:",
      complianceNote: "Equipos exportados bajo autorizaciones OFAC / BIS 515.582 / 515.584 para entidades privadas independientes y familias en Cuba.",
      close: "Cerrar Ventana",
      provinces: [
        "Pinar del Río",
        "Artemisa",
        "La Habana (Havana)",
        "Mayabeque",
        "Matanzas (Varadero / Cárdenas)",
        "Cienfuegos",
        "Villa Clara (Santa Clara)",
        "Sancti Spíritus (Trinidad)",
        "Ciego de Ávila",
        "Camagüey",
        "Las Tunas",
        "Holguín",
        "Granma",
        "Santiago de Cuba",
        "Guantánamo",
        "Isla de la Juventud",
      ],
    },
    calculator: {
      resTitle: "Calculadora Solar Residencial",
      resSubtitle: "Estime con precisión la capacidad de paneles solares y baterías que su hogar necesita en Cuba.",
      comTitle: "Calculadora Solar para Negocios",
      comSubtitle: "Calcule las cargas necesarias para que su empresa continúe trabajando durante los apagones.",
      blackoutHours: "Horas Diarias Estimadas de Apagón",
      appliances: "Seleccione Electrodomésticos y Cargas Requeridas",
      refrigerator: "Refrigerador / Nevera Familiar",
      airConditioner: "Aire Acondicionado Split Inverter (12k BTU)",
      fans: "Ventiladores de Techo y Pie (2-3 unidades)",
      wifiLighting: "Iluminación LED y Router WiFi",
      freezer: "Congelador Comercial",
      posComputer: "Caja Registradora, Computadoras y Audio",
      medicalDevices: "Equipos Médicos (CPAP / Concentrador de Oxígeno)",
      estimatedSpecs: "Configuración Técnica Recomendada",
      solarPanels: "Capacidad de Generación Solar",
      batteryStorage: "Almacenamiento en Baterías LiFePO4",
      inverterSize: "Inversor Híbrido de Onda Senoidal Pura",
      estCost: "Paquete Estimado de Equipamiento Llave en Mano",
      requestCustomQuote: "Cotizar Esta Configuración Técnica →",
      step1Title: "Datos de la Propiedad",
      step1Subtitle: "¿Dónde se ubica la vivienda?",
      step2Title: "Electrodomésticos",
      step2Subtitle: "¿Qué equipos desea alimentar?",
      step3Title: "Horas de Respaldo",
      step3Subtitle: "¿Cuántas horas de autonomía necesita?",
      step4Title: "Equipamiento Actual",
      step4Subtitle: "¿Tiene algún equipo instalado?",
      step5Title: "Resultados",
      step5Subtitle: "Dimensionamiento personalizado de su sistema",
    },
    complianceModal: {
      title: "Cumplimiento Regulatorio y Autorizaciones OFAC",
      subtitle: "Operando con total transparencia, seguridad jurídica y apego al comercio exterior.",
      p1: "CubaWatt™ opera bajo Licencias Generales autorizadas por la OFAC y el BIS de los Estados Unidos.",
      p2: "Se autoriza expresamente el suministro de equipos de energía limpia para el sector privado y ciudadanos en Cuba.",
      p3: "Todos los envíos cumplen rigurosamente las normas EAR, garantizando una entrega segura y sin riesgos aduanales.",
      close: "Entendido y Cerrar",
    },
    footer: {
      tagline: "Empoderando a familias y negocios independientes cubanos con energía solar limpia, moderna y resiliente.",
      quickLinks: "Navegación Rápida",
      contact: "Contacto y Asistencia",
      disclaimer: "CubaWatt™ es un proveedor independiente de soluciones energéticas. Todo el comercio cumple estrictamente con las leyes de EE.UU.",
      rights: "Todos los derechos reservados. CubaWatt™ es una marca registrada.",
      legal: "Operaciones y Marco Legal",
    },
    seo: {
      pageTitle: "CubaWatt™ | Energía para su Familia o Negocio en Cuba — Desde Cualquier Lugar",
      metaDescription: "CubaWatt™ entrega soluciones solares y de baterías llave en mano para Cuba con compras directas, logística coordinada, instalación profesional y soporte continuo.",
    },
  },

  // =========================================================================
  // HINDI (HI)
  // =========================================================================
  hi: {
    common: {
      getQuote: "कोट प्राप्त करें →",
      learnMore: "और जानें →",
      howItWorks: "यह कैसे काम करता है",
      submit: "जमा करें",
      submitting: "प्रक्रिया जारी है...",
      success: "सफलता",
      error: "त्रुटि",
      secure: "आपकी जानकारी सुरक्षित और निजी है।",
      required: "आवश्यक",
      select: "विकल्प चुनें...",
      next: "आगे",
      back: "पीछे",
      close: "विंडो बंद करें",
      calculate: "सिस्टम की गणना करें",
      results: "सिस्टम परिणाम",
      contactUs: "हमसे संपर्क करें",
      consultation: "परामर्श का अनुरोध करें",
      ourProcess: "हमारी प्रक्रिया",
    },
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      residential: "आवासीय",
      commercial: "व्यावसायिक",
      residentialCalc: "आवासीय कैलकुलेटर",
      commercialCalc: "व्यावसायिक कैलकुलेटर",
      howItWorks: "यह कैसे काम करता है",
      contact: "संपर्क करें",
      compliance: "अमेरिकी विनियामक अनुपालन",
      standaloneCode: "कोड देखें",
      brandSubtext: "सौर | बैटरी | ऊर्जा समाधान",
    },
    hero: {
      titleLine1: "क्यूबा में अपने परिवार या व्यवसाय को",
      titleLine2: "ऊर्जावान बनाएं — ",
      titleHighlight: "कहीं से भी",
      subtitle: "CubaWatt™ पूरी प्रक्रिया का प्रबंधन करता है — सोलर पैनल, बैटरी, सोर्सिंग, डिलीवरी समन्वय, स्थापना और तकनीकी सहायता — ताकि आप उन लोगों और व्यवसायों को निर्बाध बिजली दे सकें जो आपके लिए सबसे महत्वपूर्ण हैं।",
      badge: "क्यूबा के लिए टर्नकी स्वच्छ ऊर्जा",
      alt: "क्यूबा में अपने परिवार या व्यवसाय को ऊर्जावान बनाएं — कहीं से भी",
    },
    cards: {
      resTitle: "आवासीय",
      resDesc: "क्यूबा में घरों के लिए भरोसेमंद सौर और बैटरी समाधान, ताकि आपका परिवार हमेशा आरामदायक और सुरक्षित रहे।",
      comTitle: "व्यावसायिक",
      comDesc: "क्यूबा में व्यवसायों के लिए विश्वसनीय ऊर्जा समाधान, जो ब्लैकआउट के दौरान भी संचालन चालू रखने में मदद करते हैं।",
      badgeSolar: "LiFePO4 लिथियम और टियर-1 सोलर",
      altRes: "क्यूबा में आवासीय सौर समाधान",
      altCom: "क्यूबा में व्यावसायिक सौर समाधान",
    },
    process: {
      title: "CubaWatt™ कैसे काम करता है",
      subtitle: "दुनिया में कहीं से भी एक सरल, पूर्णतः प्रबंधित प्रक्रिया।",
      step1: {
        title: "प्रारंभिक परामर्श",
        desc: "हम आपकी ऊर्जा आवश्यकताओं, क्यूबा में स्थान और सामान्य बिजली उपयोग पर चर्चा करते हैं।",
      },
      step2: {
        title: "सिस्टम डिजाइन और प्रस्ताव",
        desc: "हमारे इंजीनियर स्पष्ट मूल्य निर्धारण के साथ सही आकार का सौर और बैटरी प्रस्ताव तैयार करते हैं।",
      },
      step3: {
        title: "उपकरण खरीद",
        desc: "हम वारंटी के साथ टियर-1 सौर पैनल, LiFePO4 बैटरी और हाइब्रिड इनवर्टर मंगवाते हैं।",
      },
      step4: {
        title: "शिपिंग और सीमा शुल्क निकासी",
        desc: "हम पूर्ण अमेरिकी और क्यूबाई अनुपालन के तहत डोर-टू-डोर समुद्री लॉजिस्टिक्स का समन्वय करते हैं।",
      },
      step5: {
        title: "प्रमाणित स्थापना और सहायता",
        desc: "स्थानीय प्रमाणित इलेक्ट्रीशियन वारंटी देखभाल के साथ सिस्टम स्थापित और चालू करते हैं।",
      },
    },
    trust: {
      title: "शुरुआत से अंत तक एक विश्वसनीय साझेदार",
      desc: "CubaWatt™ केवल सौर पैनल और बैटरी से कहीं अधिक प्रदान करता है। हम आपके प्रोजेक्ट को सफल बनाने के लिए अनुभव, साझेदारी और जमीनी समन्वय के साथ संपूर्ण, एंड-टू-एंड ऊर्जा समाधान प्रदान करते हैं।",
      f1: "पेशेवर सिस्टम डिजाइन",
      f2: "उच्च गुणवत्ता वाले उपकरण",
      f3: "समन्वित लॉजिस्टिक्स",
      f4: "विशेषज्ञ स्थापना",
      f5: "निरंतर सहायता",
    },
    aboutSection: {
      heroTitle: "CubaWatt™ क्यों मौजूद है",
      heroSubtitle: "हमने क्यूबा में घरों और व्यवसायों तक भरोसेमंद सौर और बैटरी ऊर्जा पहुँचाना आसान बनाने के लिए CubaWatt™ बनाया — ",
      heroHighlight: "तब भी जब भुगतानकर्ता विदेश में हो।",
      storyLabel: "हमारी कहानी",
      storyTitle: "विश्वसनीय ऊर्जा के साथ दूरियों को मिटाना",
      storyP1: "क्यूबा भर में परिवार और व्यवसाय दैनिक बिजली कटौती का सामना करते हैं जिससे भोजन प्रशीतन, काम और आवश्यक संचार बाधित होता है।",
      storyP2: "विदेश में रहने वालों के लिए अंतरराष्ट्रीय लॉजिस्टिक्स, मुद्रा हस्तांतरण और प्रमाणित तकनीशियनों को संभालना लगभग असंभव था।",
      storyP3: "इसलिए हमने CubaWatt™ बनाया — बाधाओं को दूर करने और हर कदम का समन्वय करने के लिए डिजाइन की गई एक पूरी तरह से एकीकृत कंपनी।",
      step4Title: "स्थापना और सहायता",
      step4Desc: "हमारी अनुभवी टीम निरंतर सहायता के साथ स्थापना और कमीशनिंग का कार्य संभालती है।",
    },
    howItWorksSection: {
      heroTitle1: "एक सरल प्रक्रिया। ",
      heroTitle2: "एक ",
      heroTitleHighlight: "संपूर्ण समाधान।",
      heroSubtitle: "आपके पहले प्रश्न से लेकर अंतिम स्थापना तक, CubaWatt™ पूरी प्रक्रिया का प्रबंधन करता है। हम क्यूबा में विश्वसनीय सौर और बैटरी बिजली लाना आसान बनाते हैं। हमारा एंड-टू-एंड दृष्टिकोण हर विवरण को संभालता है — डिजाइन, अनुमति, सोर्सिंग, लॉजिस्टिक्स, इंस्टॉलेशन और सपोर्ट — ताकि आप उस पर ध्यान केंद्रित कर सकें जो सबसे महत्वपूर्ण है।",
      sectionTag: "यह कैसे काम करता है",
      sectionTitle: "क्यूबा के लिए तैयार की गई एक आसान, एंड-टू-एंड प्रक्रिया।",
      sectionDesc: "CubaWatt™ क्यूबा में कहीं भी भरोसेमंद ऊर्जा समाधान प्रदान करने के लिए आधुनिक तकनीक, सिद्ध लॉजिस्टिक्स और स्थानीय विशेषज्ञता को जोड़ता है। यह इस तरह काम करता है:",
      steps11: [
        {
          num: 1,
          title: "बातचीत शुरू करें",
          desc: "हमें अपने घर, व्यवसाय या संगठन के बारे में बताएं। हमारी टीम आपके लक्ष्यों, स्थान और समय-सीमा को समझती है।",
        },
        {
          num: 2,
          title: "आवश्यकता को परिभाषित करें",
          desc: "हम सही समाधान आकार और सुविधाओं को निर्धारित करने के लिए आपकी वर्तमान ऊर्जा चुनौतियों और भविष्य के लक्ष्यों का आकलन करते हैं।",
        },
        {
          num: 3,
          title: "सिस्टम डिजाइन करें",
          desc: "हमारे इंजीनियर आपकी संपत्ति, ऊर्जा जरूरतों और बजट के अनुसार सिद्ध उपकरणों का उपयोग करके एक कस्टम सौर और बैटरी सिस्टम बनाते हैं।",
        },
        {
          num: 4,
          title: "प्रस्ताव की समीक्षा करें",
          desc: "हम सिस्टम डिजाइन, उपकरण, मूल्य निर्धारण और समय-सीमा के साथ एक स्पष्ट, विस्तृत प्रस्ताव प्रदान करते हैं ताकि कोई अप्रत्याशित आश्चर्य न हो।",
        },
        {
          num: 5,
          title: "अनुपालन समीक्षा",
          desc: "हमारी टीम शुरू से अंत तक सुचारू, अनुपालन प्रक्रिया सुनिश्चित करने के लिए आवश्यक निर्यात, आयात और अमेरिकी नियामक आवश्यकताओं का प्रबंधन करती है।",
        },
        {
          num: 6,
          title: "उपकरण खरीद",
          desc: "हम विश्वसनीयता और दीर्घकालिक प्रदर्शन सुनिश्चित करते हुए विश्वसनीय वैश्विक निर्माताओं से प्रीमियम सौर पैनल और बैटरी प्राप्त करते हैं।",
        },
        {
          num: 7,
          title: "लॉजिस्टिक्स",
          desc: "हम अंतरराष्ट्रीय शिपिंग का समन्वय करते हैं और क्यूबा में आपके उपकरण को सुरक्षित और समय पर पहुंचाने के लिए सीमा शुल्क निकासी का प्रबंधन करते हैं।",
        },
        {
          num: 8,
          title: "स्थापना",
          desc: "हमारे अनुभवी स्थानीय साझेदार और प्रशिक्षित इंस्टॉलर सुरक्षा और गुणवत्ता के सर्वोत्तम मानकों का पालन करते हुए सिस्टम स्थापित करते हैं।",
        },
        {
          num: 9,
          title: "कमीशनिंग",
          desc: "हम यह सुनिश्चित करने के लिए पूरे सिस्टम का परीक्षण और ट्यूनिंग करते हैं कि सब कुछ डिजाइन के अनुसार काम कर रहा है। आपको सिस्टम संचालन का प्रशिक्षण मिलता है।",
        },
        {
          num: 10,
          title: "पुष्टि एवं शुभारंभ",
          desc: "आपका सिस्टम अब सक्रिय है! आप एक विश्वसनीय साथी के साथ स्वच्छ, विश्वसनीय ऊर्जा और ऊर्जा स्वतंत्रता का आनंद ले सकते हैं।",
        },
        {
          num: 11,
          title: "निरंतर सहायता",
          desc: "हम दीर्घकालिक रूप से आपके साथ हैं। हमारी टीम आपके सिस्टम को वर्षों तक चालू रखने के लिए रिमोट मॉनिटरिंग और तकनीकी सहायता प्रदान करती है।",
        },
      ],
      trustBannerTitle: "शुरुआत से अंत तक एक विश्वसनीय साझेदार",
      trustBannerDesc: "CubaWatt™ केवल सोलर पैनल और बैटरी ही नहीं देता, बल्कि संपूर्ण ऊर्जा समाधान प्रदान करता है।",
      trustFeatures: [
        { title: "पेशेवर सिस्टम डिजाइन", subtitle: "वास्तविक दुनिया की जरूरतों के लिए सही आकार का समाधान।" },
        { title: "उच्च गुणवत्ता वाले उपकरण", subtitle: "विश्वसनीय, सिद्ध ब्रांड और तकनीक।" },
        { title: "समन्वित लॉजिस्टिक्स", subtitle: "क्यूबा के लिए विशेषज्ञ डिलीवरी और सीमा शुल्क समन्वय।" },
        { title: "विशेषज्ञ स्थापना", subtitle: "कुशल स्थानीय साझेदार और पेशेवर स्थापना।" },
        { title: "निरंतर सहायता", subtitle: "सिस्टम को विश्वसनीय रूप से चालू रखने के लिए निरंतर सहायता।" },
      ],
    },
    servicesSection: {
      heroTag: "उज्ज्वल क्यूबा के लिए एकीकृत ऊर्जा समाधान",
      heroTitle: "डिजाइन से लेकर डिलीवरी और स्थापना तक",
      heroTitlePart1: "डिजाइन से लेकर",
      heroTitlePart2: "डिलीवरी और स्थापना तक",
      heroSubtitle: "CubaWatt™ पूरे प्रोजेक्ट को संभालता है ताकि ग्राहक को कई विक्रेताओं के साथ समन्वय न करना पड़े।",
      heroBtnProcess: "हमारी प्रक्रिया",
      label: "हम क्या करते हैं",
      title: "संपूर्ण ऊर्जा समाधान,",
      titleHighlight: "क्यूबा के लिए विशेष रूप से अनुकूलित।",
      desc: "CubaWatt™ आवासीय और व्यावसायिक ग्राहकों के लिए व्यापक सौर और बैटरी समाधान प्रदान करता है। हम प्रक्रिया के हर चरण का प्रबंधन करते हैं — सिस्टम डिजाइन, उपकरण खरीद, लॉजिस्टिक्स, स्थापना और निरंतर सहायता।",
      chooseTitle: "CubaWatt™ क्यों चुनें?",
      f1Title: "एंड-टू-एंड समन्वय",
      f1Desc: "प्रारंभिक डिजाइन से लेकर अंतिम स्थापना तक, हम पूरी प्रक्रिया का सुचारू रूप से प्रबंधन करते हैं।",
      f2Title: "गुणवत्तापूर्ण उपकरण",
      f2Desc: "टियर-1 सौर पैनल, LiFePO4 बैटरी और उष्णकटिबंधीय मौसम के लिए बने इनवर्टर।",
      f3Title: "विनियामक अनुपालन",
      f3Desc: "अमेरिकी निर्यात नियमों और स्थानीय क्यूबाई आयात आवश्यकताओं का पूर्ण अनुपालन।",
      f4Title: "विश्वसनीय स्थानीय साझेदार",
      f4Desc: "सुरक्षित, पेशेवर स्थापना सुनिश्चित करने वाले अनुभवी जमीनी तकनीशियन।",
      f5Title: "रिमोट समन्वय",
      f5Desc: "चाहे आप मियामी, मैड्रिड, टोरंटो या हवाना में हों, सरल ऑर्डरिंग और ट्रैकिंग।",
    },
    residentialSection: {
      heroTitle: "उन लोगों के लिए ऊर्जा ",
      heroTitleHighlight: "जिनकी आप परवाह करते हैं।",
      heroSubtitle: "दुनिया में कहीं से भी, आप उस घर और परिवार के लिए भरोसेमंद ऊर्जा प्रदान कर सकते हैं जो आपके लिए सबसे महत्वपूर्ण है।",
      heroCalcBtn: "आवासीय कैलकुलेटर",
      bannerTag: "आवासीय समाधान",
      bannerTitle: "क्यूबाई घरों और परिवारों के लिए विश्वसनीय ऊर्जा",
      bannerP1: "CubaWatt™ स्वच्छ, भरोसेमंद सौर और बैटरी प्रणालियों के साथ परिवारों को अधिक आरामदायक, सुरक्षित और आधुनिक घरेलू वातावरण बनाने में मदद करता है। रोशनी और रेफ्रिजरेटर से लेकर पंखे, पानी के पंप, टीवी और इंटरनेट तक — हम वास्तविक जरूरतों के अनुरूप आवासीय समाधान डिजाइन करते हैं।",
      bannerP2: "चाहे आप माता-पिता, बच्चों या रिश्तेदारों का समर्थन कर रहे हों, हम एक ऐसा सिस्टम प्रदान करना आसान बनाते हैं जो आपके अपनों के जीवन में शांति और आराम लाता है।",
      optionsTitle: "आवासीय सिस्टम विकल्प",
      optionsDesc: "वास्तविक घरेलू जरूरतों के अनुसार लचीले समाधान — आवश्यक बैकअप से लेकर पूरे घर के सिस्टम तक।",
      cardEssentialTitle: "एसेंशियल (आवश्यक)",
      cardEssentialDesc: "एक व्यावहारिक शुरुआती बिंदु जो प्रकाश, फोन चार्जिंग और छोटे उपकरणों जैसी सबसे महत्वपूर्ण जरूरतों को पूरा करता है।",
      cardFamilyTitle: "फैमिली (परिवार)",
      cardFamilyDesc: "आरामदायक घरेलू माहौल के लिए रोशनी, रेफ्रिजरेशन, पंखे, टीवी, इंटरनेट और दैनिक उपकरणों के लिए विश्वसनीय बिजली प्रदान करता है।",
      cardWholeHomeTitle: "होल होम (पूरा घर)",
      cardWholeHomeDesc: "रसोई के उपकरणों, कई कमरों और लंबे ब्लैकआउट सहित अधिकांश घरेलू जरूरतों को समर्थन देने वाला एक व्यापक समाधान।",
      cardCustomHomeTitle: "कस्टम होम",
      cardCustomHomeDesc: "बड़े घरों या अद्वितीय जरूरतों के लिए एक विशेष रूप से तैयार किया गया सिस्टम, जो आपके परिवार के विशिष्ट लक्ष्यों के अनुसार डिजाइन किया गया है।",
      calcBannerTitle: "अपने परिवार के घर के लिए सही सिस्टम की गणना करें",
      calcBannerDesc: "अपने घर की जरूरतों, सामान्य उपकरणों और लक्ष्यों के आधार पर व्यक्तिगत सिफारिश पाने के लिए हमारे आवासीय कैलकुलेटर का उपयोग करें। यह त्वरित और आसान है।",
      calcBannerBtn: "आवासीय कैलकुलेटर →",
      abroadBannerTitle: "विदेश से परिवार के लिए व्यवस्था कर रहे हैं?",
      abroadBannerDesc: "हमारे कई ग्राहक संयुक्त राज्य अमेरिका, कनाडा, स्पेन और दुनिया भर में रहते हैं। हम दूर से भी आपके परिवार को भरोसेमंद ऊर्जा से सशक्त बनाना आसान बनाते हैं।",
      abroadBannerBtn: "कोट प्राप्त करें →",
      label: "घरेलू सोलर और बैटरी",
      title: "घर पर आराम और मन की शांति",
      p1: "हर ब्लैकआउट के दौरान रेफ्रिजरेटर चालू रखें, भोजन ताजा रखें और पंखे ठंडी हवा देते रहें।",
      p2: "वाईफाई और डिवाइस चार्जिंग के साथ संपर्क बनाए रखें ताकि आप हमेशा जुड़े रह सकें।",
      p3: "संवेदनशील चिकित्सा उपकरणों की सुरक्षा करें और शांतिपूर्ण, निर्बाध रातों का आनंद लें।",
      f1Title: "प्रशीतन और ताजा भोजन",
      f1Desc: "लगातार बैटरी बैकअप के साथ भोजन खराब होने से रोकें।",
      f2Title: "वेंटिलेशन और आराम",
      f2Desc: "बिना रुकावट के चलने वाले पंखों के साथ चैन की नींद सोएं।",
      f3Title: "निरंतर कनेक्टिविटी",
      f3Desc: "स्मार्टफोन, लैपटॉप और वाईफाई राउटर को 24/7 चालू रखें।",
    },
    commercialSection: {
      heroTitle: "बिजली कटौती को व्यवसाय बंदी नहीं बनना चाहिए।",
      heroTitleLine1: "बिजली कटौती को",
      heroTitleLine2: "व्यवसाय बंदी नहीं बनना चाहिए।",
      heroSubtitle: "CubaWatt™ सौर और बैटरी समाधानों के साथ कार्यालयों, खुदरा व्यवसायों, आतिथ्य और पेशेवर परिसरों को परिचालन जारी रखने में मदद करता है।",
      heroCalcBtn: "व्यावसायिक कैलकुलेटर",
      resilienceTag: "अपने व्यवसाय को गतिशील रखें",
      resilienceTitle: "व्यावसायिक ऊर्जा लचीलापन क्यों महत्वपूर्ण है",
      resilienceDesc: "अविश्वसनीय बिजली का अर्थ है राजस्व का नुकसान, बाधित संचालन, खराब माल और असंतुष्ट ग्राहक। CubaWatt™ क्यूबाई व्यवसायों को ग्रिड बंद होने पर भी उत्पादक बने रहने की ऊर्जा स्वतंत्रता देता है।",
      benefits: [
        {
          title: "संचालन बनाए रखें",
          desc: "तत्काल बैटरी बैकअप के साथ ब्लैकआउट के दौरान अपने व्यवसाय को चालू रखें।",
        },
        {
          title: "राजस्व की रक्षा करें",
          desc: "पीक व्यावसायिक घंटों के दौरान बिक्री के नुकसान और खाली बैठे कर्मचारियों से बचें।",
        },
        {
          title: "सुरक्षा मजबूत करें",
          desc: "महत्वपूर्ण प्रणालियों, प्रकाश व्यवस्था और सुरक्षा कैमरों को चौबीसों घंटे चालू रखें।",
        },
        {
          title: "स्थायी भविष्य बनाएं",
          desc: "परिचालन लागत कम करें और महंगे जनरेटर ईंधन पर निर्भरता घटाएं।",
        },
      ],
      designTag: "प्रत्येक व्यवसाय के लिए अनुकूलित समाधान",
      designTitle: "CubaWatt™ संचालन के अनुरूप कैसे डिजाइन करता है",
      designDesc: "हम आपके व्यावसायिक लक्ष्यों, परिसर की आवश्यकताओं और आवश्यक लोड से मेल खाने वाले सौर और बैटरी समाधान तैयार करने के लिए एक परामर्शदाता दृष्टिकोण अपनाते हैं।",
      designSteps: [
        {
          title: "साइट मूल्यांकन",
          desc: "हम आपके ऊर्जा उपयोग, महत्वपूर्ण प्रणालियों और परिसर लेआउट का विश्लेषण करते हैं।",
        },
        {
          title: "सही आकार का डिजाइन",
          desc: "आपके संचालन और बजट के अनुसार निर्मित कस्टम सौर और बैटरी सिस्टम।",
        },
        {
          title: "सहज एकीकरण",
          desc: "आपके मौजूदा विद्युत प्रणालियों और प्रक्रियाओं के साथ काम करने के लिए डिज़ाइन किया गया।",
        },
        {
          title: "निरंतर सहायता",
          desc: "स्थापना, प्रशिक्षण, निगरानी और स्थानीय सेवा जिस पर आप भरोसा कर सकते हैं।",
        },
      ],
      appTag: "व्यावसायिक अनुप्रयोग",
      appTitle: "एक मजबूत, अधिक उत्पादक क्यूबा को सशक्त बनाना",
      appDesc: "CubaWatt™ विभिन्न प्रकार के वाणिज्यिक और व्यावसायिक प्रतिष्ठानों के लिए भरोसेमंद, स्वच्छ ऊर्जा प्रदान करता है।",
      appBtn: "व्यावसायिक परामर्श प्राप्त करें →",
      applications: [
        {
          title: "कार्यालय",
          subtitle: "कार्यालय",
          desc: "अपनी टीम को उत्पादक और अपने सिस्टम को बिना किसी रुकावट के चालू रखें।",
        },
        {
          title: "खुदरा व्यवसाय",
          subtitle: "दुकान",
          desc: "बिक्री, पीओएस इन्वेंट्री सिस्टम और ग्राहकों के अनुभव को सुरक्षित रखें।",
        },
        {
          title: "रेस्तरां",
          subtitle: "रेस्तरां",
          desc: "रसोई, डीप फ्रीजर, फूड प्रेप और डाइनिंग सर्विस को लगातार चालू रखें।",
        },
        {
          title: "होटल और आतिथ्य",
          subtitle: "होटल",
          desc: "अपने मेहमानों को निर्बाध एयर कंडीशनिंग, प्रकाश व्यवस्था और आराम प्रदान करें।",
        },
        {
          title: "गोदाम और लॉजिस्टिक्स",
          subtitle: "गोदाम",
          desc: "सप्लाई चेन संचालन, लाइटिंग, कोल्ड स्टोरेज और इन्वेंट्री नियंत्रण बनाए रखें।",
        },
        {
          title: "पेशेवर प्रतिष्ठान",
          subtitle: "क्लिनिक",
          desc: "क्लिनिक, डायग्नोस्टिक लैब और अन्य मिशन-महत्वपूर्ण कार्यों का समर्थन करें।",
        },
      ],
      label: "व्यावसायिक समाधान",
      title: "अपने व्यवसाय को सुचारू रूप से चलाएं",
      p1: "बिजली कटौती से कभी भी आपकी दुकान बंद नहीं होनी चाहिए या ग्राहकों को लौटना नहीं चाहिए।",
      p2: "संवेदनशील उपकरण, कंप्यूटर, बिलिंग और रेफ्रिजरेशन की सुरक्षा करें।",
      p3: "राजस्व बनाए रखें और अपने कर्मचारियों को एक स्थिर, उत्पादक वातावरण दें।",
      f1Title: "परिचालन निरंतरता",
      f1Desc: "स्वचालित स्विचओवर बिना किसी रुकावट के रोशनी और कैश काउंटर चालू रखता है।",
      f2Title: "उपकरण संरक्षण",
      f2Desc: "प्योर साइन वेव पावर संवेदनशील इलेक्ट्रॉनिक्स को ग्रिड सर्ज से बचाती है।",
      f3Title: "ग्राहक संतुष्टि",
      f3Desc: "सुनिश्चित करें कि रेस्तरां, गेस्ट हाउस और स्टोर हर समय ग्राहकों के लिए खुले रहें।",
    },
    complianceSection: {
      heroTitle: "अमेरिकी विनियामक अनुपालन",
      heroSubtitle: "अनुपालन CubaWatt™ प्रक्रिया का एक अभिन्न अंग है।",
      p1: "हम लागू अमेरिकी कानूनों और विनियमों के पूर्ण अनुपालन में काम करते हैं।",
      p2: "निर्यात नियंत्रण और प्रतिबंध आवश्यकताओं सहित, ताकि आप पूरे विश्वास के साथ आगे बढ़ सकें।",
      p3: "सभी उपकरण शिपमेंट OFAC सामान्य लाइसेंस और BIS निर्यात दिशानिर्देशों का सख्ती से पालन करते हैं।",
      approachTitle: "अनुपालन के प्रति हमारा दृष्टिकोण",
      approachDesc: "हम विनियामक अनुपालन को अत्यंत गंभीरता से लेते हैं। कानूनी विश्लेषण से लेकर शिपिंग दस्तावेजों तक, हमारी टीम यह सुनिश्चित करती है कि हर कदम वाणिज्य और ट्रेजरी विभाग की आवश्यकताओं को पूरा करे।",
      f1Title: "OFAC सामान्य लाइसेंस संरेखण",
      f1Desc: "31 CFR § 515.582 और क्यूबा में स्वतंत्र निजी उद्यमियों का समर्थन करने वाले अधिकृत प्रावधानों के तहत संचालन।",
      f2Title: "BIS निर्यात अनुपालन",
      f2Desc: "अधिकृत नवीकरणीय ऊर्जा उपकरणों के लिए अमेरिकी वाणिज्य विभाग उद्योग और सुरक्षा ब्यूरो के नियमों का पालन।",
      f3Title: "पारदर्शी दस्तावेजीकरण",
      f3Desc: "हर वस्तु के लिए पूर्ण कागजी कार्रवाई और सीमा शुल्क सत्यापन, जिससे सीमा पर जब्ती का कोई जोखिम नहीं रहता।",
      f4Title: "सुरक्षित वित्तीय लेनदेन",
      f4Desc: "सभी भुगतान अधिकृत अंतरराष्ट्रीय बैंकिंग चैनलों के माध्यम से पूरी स्पष्टता के साथ संसाधित किए जाते हैं।",
      qTitle: "अनुपालन के बारे में कोई प्रश्न?",
      qDesc: "हमारे कानूनी और लॉजिस्टिक्स विशेषज्ञ आपको हमारे प्राधिकरणों, दस्तावेजों और प्रक्रियाओं की पूरी जानकारी दे सकते हैं।",
      qBtn: "हमारी अनुपालन टीम से बात करें →",
      altHero: "अमेरिकी विनियामक अनुपालन टीम",
      altApproach: "कंटेनर शिपमेंट पर सौर पैनल",
      altQuestions: "सीमा शुल्क कागजी कार्रवाई पर चर्चा करते लॉजिस्टिक्स समन्वयक",
    },
    contactSection: {
      badge1: "100% टर्नकी समन्वय",
      badge2: "OFAC और BIS अनुपालक",
      badge3: "गारंटीकृत डिलीवरी और स्थापना",
      title: "संपर्क करें",
      titleHighlight: "CubaWatt™",
      subtitle: "चाहे आपके पास उपकरणों के बारे में प्रश्न हों, कस्टम सिस्टम डिजाइन की आवश्यकता हो, या आप शुरू करने के लिए तैयार हों, हमारी टीम हर कदम पर आपकी मदद के लिए उपस्थित है।",
      helpLabel: "हम कैसे मदद कर सकते हैं",
      helpTitle: "हमारे ऊर्जा विशेषज्ञों से जुड़ें",
      helpSubtitle: "हम प्रत्येक परियोजना के लिए व्यक्तिगत सहायता प्रदान करते हैं।",
      card1Title: "सामान्य पूछताछ",
      card1Desc: "हमारी सेवाओं, उपकरणों और CubaWatt™ के काम करने के तरीके के बारे में और जानें।",
      card2Title: "कस्टम कोटेशन",
      card2Desc: "अनुकूलित प्रस्ताव और कोटेशन के लिए हमें अपने घर या व्यवसाय के बारे में बताएं।",
      card3Title: "साझेदारी के अवसर",
      card3Desc: "क्यूबा में स्थानीय स्थापना या वितरण साझेदारी के संबंध में हमसे संपर्क करें।",
      formLabel: "हमें एक संदेश भेजें",
      formTitle: "बातचीत शुरू करें",
      formSubtitle: "नीचे दिया गया फॉर्म भरें और एक ऊर्जा विशेषज्ञ 24 घंटे के भीतर आपसे संपर्क करेगा।",
      formName: "पूरा नाम *",
      formCountry: "आपका निवास देश *",
      formEmail: "ईमेल पता *",
      formPhone: "फ़ोन / व्हाट्सएप नंबर",
      formLocation: "क्यूबा में परियोजना का स्थान *",
      formProjectType: "परियोजना का प्रकार *",
      formMessage: "हम कैसे मदद कर सकते हैं? *",
      formMessagePlaceholder: "हमें अपने घर, व्यवसाय या क्यूबा में विशिष्ट बिजली आवश्यकताओं के बारे में बताएं...",
      formSuccessTitle: "संदेश प्राप्त हुआ!",
      formSuccessDesc: "संपर्क करने के लिए धन्यवाद। एक CubaWatt™ विशेषज्ञ जल्द ही आपकी जानकारी की समीक्षा कर आपसे संपर्क करेगा।",
      formSuccessButton: "दूसरा संदेश भेजें",
      infoLabel: "सीधा संपर्क",
      infoTitle: "हम सहायता के लिए तैयार हैं",
      infoSubtitle: "हमारे किसी भी माध्यम से सीधे संपर्क करें।",
      infoEmailTitle: "हमें ईमेल करें",
      infoEmailDesc: "support@cubawatt.com — 24 घंटे के भीतर जवाब।",
      infoWhatsappTitle: "व्हाट्सएप द्वारपाल",
      infoWhatsappDesc: "+1 (305) 555-0199 — सोम-शनि, सुबह 9 से शाम 7 बजे EST।",
      infoCallTitle: "ग्राहक सेवा",
      infoCallTime: "उपलब्ध सोमवार - शुक्रवार, सुबह 9 - शाम 6 EST",
      trustTitle: "ग्राहक CubaWatt™ पर भरोसा क्यों करते हैं",
      trust1: "पूर्ण अमेरिकी कानूनी और निर्यात अनुपालन।",
      trust2: "बिना किसी छिपे शुल्क के पारदर्शी USD मूल्य निर्धारण।",
      trust3: "प्रीमियम टियर-1 घटक और वारंटी सुरक्षा।",
      trust4: "स्थानीय क्यूबाई तकनीशियनों द्वारा पेशेवर स्थापना।",
      ctaTitle: "विश्वसनीय ऊर्जा की ओर पहला कदम उठाएं",
      ctaDesc: "आज ही हमारे विशेषज्ञों से संपर्क करें और एक संपूर्ण समाधान प्राप्त करें।",
      ctaBtn: "निःशुल्क परामर्श शेड्यूल करें →",
      altHero: "ऊर्जा सलाहकार फोन पर बात कर रहा है",
      altBottom: "परिवार सौर ऊर्जा से संचालित घर में खुश",
      countries: {
        us: "संयुक्त राज्य अमेरिका (USA)",
        cuba: "क्यूबा (Cuba)",
        spain: "स्पेन (Spain)",
        canada: "कनाडा (Canada)",
        mexico: "मेक्सिको (Mexico)",
        other: "अन्य देश",
      },
      projectTypes: {
        res: "आवासीय घरेलू सौर प्रणाली",
        com: "व्यावसायिक व्यवसाय प्रणाली",
        support: "सामान्य जानकारी और पूछताछ",
        other: "साझेदारी / अन्य",
      },
    },
    quoteModal: {
      title: "कस्टम सौर कोटेशन का अनुरोध करें",
      subtitle: "नीचे अपने प्रोजेक्ट का विवरण प्रदान करें। हमारी इंजीनियरिंग टीम 24 घंटे के भीतर एक सटीक प्रस्ताव तैयार करेगी।",
      systemType: "सिस्टम का प्रकार",
      residential: "आवासीय (घर)",
      commercial: "व्यावसायिक (व्यवसाय)",
      province: "क्यूबा में लक्षित प्रांत",
      provincePlaceholder: "प्रांत चुनें...",
      contactAbroad: "आपकी जानकारी (विदेश में खरीदार)",
      contactCuba: "क्यूबा में प्राप्तकर्ता की जानकारी",
      fullName: "आपका पूरा नाम",
      email: "आपका ईमेल पता",
      phone: "आपका फोन / व्हाट्सएप",
      recipientName: "क्यूबा में प्राप्तकर्ता का पूरा नाम",
      recipientPhone: "प्राप्तकर्ता का फोन / व्हाट्सएप",
      address: "क्यूबा में स्थापना का पता",
      notes: "विशिष्ट ऊर्जा जरूरतें",
      notesPlaceholder: "उदा. 1 फ्रिज, लाइट और वाईफाई चलाने की आवश्यकता...",
      successTitle: "कोटेशन अनुरोध प्राप्त हुआ!",
      successMsg: "धन्यवाद! हम आपके व्यक्तिगत प्रस्ताव के साथ व्हाट्सएप और ईमेल के माध्यम से आपसे संपर्क करेंगे।",
      successRef: "सबमिट किए गए सिस्टम का विवरण:",
      category: "श्रेणी:",
      targetProv: "लक्षित प्रांत:",
      deliveryCoord: "वितरण समन्वय:",
      deliveryNote: "प्रमाणित स्थापना के साथ क्यूबा में घर-घर वितरण।",
      complianceHeader: "अमेरिकी विनियामक अनुपालन:",
      complianceNote: "क्यूबा में स्वतंत्र निजी संस्थाओं और परिवारों के लिए OFAC / BIS 515.582 / 515.584 प्राधिकरणों के तहत निर्यात किए गए उपकरण।",
      close: "विंडो बंद करें",
      provinces: [
        "Pinar del Río",
        "Artemisa",
        "La Habana (Havana)",
        "Mayabeque",
        "Matanzas (Varadero / Cárdenas)",
        "Cienfuegos",
        "Villa Clara (Santa Clara)",
        "Sancti Spíritus (Trinidad)",
        "Ciego de Ávila",
        "Camagüey",
        "Las Tunas",
        "Holguín",
        "Granma",
        "Santiago de Cuba",
        "Guantánamo",
        "Isla de la Juventud",
      ],
    },
    calculator: {
      resTitle: "आवासीय सौर और स्टोरेज साइजिंग कैलकुलेटर",
      resSubtitle: "क्यूबा में अपने घर के लिए आवश्यक सौर पैनल क्षमता और बैटरी बैकअप का सटीक अनुमान लगाएं।",
      comTitle: "व्यावसायिक सौर और बैकअप साइजिंग कैलकुलेटर",
      comSubtitle: "ग्रिड आउटेज के दौरान अपने व्यवसाय को चालू रखने के लिए लोड आवश्यकताओं की गणना करें।",
      blackoutHours: "अपेक्षित दैनिक ब्लैकआउट अवधि",
      appliances: "आवश्यक उपकरण और लोड चुनें",
      refrigerator: "मानक रेफ्रिजरेटर / फ्रीजर",
      airConditioner: "इन्वर्टर स्प्लिट एसी (12k BTU)",
      fans: "सीलिंग और स्टैंडिंग पंखे (2-3 यूनिट)",
      wifiLighting: "एलईडी लाइटिंग और वाईफाई राउटर",
      freezer: "व्यावसायिक डीप फ्रीजर",
      posComputer: "पीओएस, कंप्यूटर और साउंड सिस्टम",
      medicalDevices: "चिकित्सा उपकरण (CPAP / ऑक्सीजन)",
      estimatedSpecs: "अनुशंसित सिस्टम कॉन्फ़िगरेशन",
      solarPanels: "सौर उत्पादन क्षमता",
      batteryStorage: "LiFePO4 लिथियम बैटरी स्टोरेज",
      inverterSize: "हाइब्रिड प्योर साइन वेव इनवर्टर",
      estCost: "अनुमानित टर्नकी उपकरण पैकेज",
      requestCustomQuote: "यह कॉन्फ़िगरेशन लॉक करें और कोटेशन का अनुरोध करें →",
      step1Title: "संपत्ति की जानकारी",
      step1Subtitle: "घर कहाँ स्थित है?",
      step2Title: "उपकरण",
      step2Subtitle: "आपको क्या चलाना है?",
      step3Title: "बैकअप समय",
      step3Subtitle: "कितने घंटे की स्वायत्तता चाहिए?",
      step4Title: "मौजूदा उपकरण",
      step4Subtitle: "पहले से क्या लगा है?",
      step5Title: "परिणाम",
      step5Subtitle: "आपका व्यक्तिगत सिस्टम साइजिंग",
    },
    complianceModal: {
      title: "अमेरिकी विनियामक अनुपालन और OFAC प्राधिकरण",
      subtitle: "पूर्ण पारदर्शिता, कानूनी सुरक्षा और व्यापार अनुपालन के साथ संचालन।",
      p1: "CubaWatt™ अमेरिकी OFAC और BIS द्वारा अधिकृत सामान्य लाइसेंस के तहत काम करता है।",
      p2: "क्यूबा में स्वतंत्र निजी व्यवसायों और नागरिकों को स्वच्छ ऊर्जा उपकरण की आपूर्ति की अनुमति है।",
      p3: "सभी शिपमेंट नियमों का कड़ाई से पालन करते हैं, जिससे सुरक्षित डिलीवरी और शून्य जोखिम सुनिश्चित होता है।",
      close: "समझ गया और बंद करें",
    },
    footer: {
      tagline: "क्यूबाई परिवारों और स्वतंत्र व्यवसायों को स्वच्छ, लचीली सौर और बैटरी ऊर्जा से सशक्त बनाना।",
      quickLinks: "त्वरित नेविगेशन",
      contact: "संपर्क और सहायता",
      disclaimer: "CubaWatt™ एक स्वतंत्र ऊर्जा समाधान प्रदाता है। सभी व्यापार अमेरिकी कानूनों का पालन करते हैं।",
      rights: "सर्वाधिकार सुरक्षित। CubaWatt™ एक ट्रेडमार्क है।",
      legal: "संचालन और कानूनी ढाँचा",
    },
    seo: {
      pageTitle: "CubaWatt™ | क्यूबा में अपने परिवार या व्यवसाय को ऊर्जावान बनाएं — कहीं से भी",
      metaDescription: "CubaWatt™ सोर्सिंग, डिलीवरी समन्वय, प्रमाणित स्थापना और दीर्घकालिक समर्थन के साथ क्यूबा के लिए टर्नकी सौर और बैटरी समाधान प्रदान करता है।",
    },
  },
};

// =========================================================================
// SIMPLE GLOBAL TRANSLATION HELPER & KEY-VALUE MAP
// =========================================================================

export const spanishTranslationsMap: Record<string, string> = {
  // Hero & General
  "What Does Your Home Need to Keep Running?": "¿Qué Necesita su Hogar para Seguir Funcionando?",
  "Tell us what you want to power and CubaWatt™ will do the math.": "Díganos qué desea respaldar y CubaWatt™ calculará la solución.",
  "Tell Us How Your Business Uses Electricity.": "Cuéntenos Cómo Utiliza la Electricidad su Empresa.",
  "CubaWatt™ will create a preliminary energy profile for your facility.": "CubaWatt™ creará un perfil energético preliminar para sus instalaciones.",
  "Reliable Power": "Energía Confiable",
  "For the things that matter most": "Para lo que más importa",
  "Simple & Fast": "Rápido y Sencillo",
  "A few questions, real answers": "Unas pocas preguntas, respuestas reales",
  "Personalized Results": "Resultados Personalizados",
  "Right-sized for your home": "A la medida de su hogar",
  "A More Reliable Home in Cuba": "Un Hogar Más Confiable en Cuba",
  "Designed for Cuban Homes": "Diseñado para Hogares Cubanos",
  "Power What Matters": "Energía para lo que Importa",
  "Clean, Renewable Energy": "Energía Limpia y Renovable",
  "Expert Support": "Soporte de Expertos",

  // Calculator Steps & Forms
  "Property Info": "Datos del Inmueble",
  "Type & size": "Tipo y tamaño",
  "Tell us about the property": "Cuéntenos sobre el inmueble",
  "What type of home or building needs backup solar power?": "¿Qué tipo de vivienda o edificio necesita respaldo solar?",
  "Single-Family Home": "Casa Unifamiliar",
  "Townhouse": "Casa Adosada",
  "Multi-Family / Apartment": "Apartamento / Multifamiliar",
  "Home Size": "Tamaño del Hogar",
  "Under 1,000 sq ft": "Menos de 1,000 pies²",
  "1,000 – 1,500 sq ft": "1,000 – 1,500 pies²",
  "1,500 – 2,000 sq ft": "1,500 – 2,000 pies²",
  "2,000 – 3,000 sq ft": "2,000 – 3,000 pies²",
  "Over 3,000 sq ft": "Más de 3,000 pies²",
  "Number of Bedrooms": "Número de Habitaciones",
  "1 Bedroom": "1 Habitación",
  "2 Bedrooms": "2 Habitaciones",
  "3 Bedrooms": "3 Habitaciones",
  "4 Bedrooms": "4 Habitaciones",
  "5+ Bedrooms": "5+ Habitaciones",
  "Location in Cuba": "Ubicación en Cuba",
  "Property Ownership": "Propiedad del Inmueble",
  "I own this property": "Soy propietario de este inmueble",
  "My family owns this property": "Mi familia es propietaria",
  "I rent this property": "Alquilo este inmueble",
  "Any special considerations? (Optional)": "¿Alguna consideración especial? (Opcional)",
  "e.g. additional buildings, pool, home office, medical equipment, etc.": "ej. construcciones adicionales, piscina, oficina, equipos médicos, etc.",
  "Continue to Appliances": "Continuar a Electrodomésticos",
  "What do you want to power?": "¿Qué desea alimentar?",
  "Select typical appliances you wish to protect during rotational blackouts.": "Seleccione los electrodomésticos habituales que desea proteger durante los apagones.",
  "Blackout Backup Autonomy": "Autonomía de Respaldo ante Apagones",
  "Select how many hours you need stored power when the utility grid is down.": "Seleccione cuántas horas de respaldo necesita cuando falla la red eléctrica.",
  "TARGET BATTERY AUTONOMY": "AUTONOMÍA DE BATERÍA OBJETIVO",
  "Hours": "Horas",
  "4h (Short Outages)": "4h (Apagones Cortos)",
  "12h (Standard Cuba - Overnight)": "12h (Rotación Estándar en Cuba - Nocturna)",
  "24h (Full Continuous)": "24h (Continuo Completo)",
  "Continue to Equipment": "Continuar a Equipos",
  "Continue to Backup Time": "Continuar a Tiempo de Respaldo",
  "Do you have existing equipment?": "¿Tiene equipos existentes?",
  "We can integrate with your current solar setup, panels, battery arrays, or generators to optimize pricing.": "Podemos integrar su sistema actual de paneles, baterías o generador para optimizar el costo.",
  "No, I am starting completely from scratch": "No, comienzo totalmente desde cero",
  "Yes, I have existing Solar Panels installed": "Sí, tengo paneles solares instalados",
  "Yes, I have batteries (lead-acid or lithium)": "Sí, tengo baterías (plomo o litio)",
  "Yes, I own a backup diesel/gas Generator": "Sí, poseo un generador de diésel o gasolina",
  "Show Sizing Results": "Ver Resultados del Dimensionamiento",
  "Your Sizing Estimate": "Su Estimación de Dimensionamiento",
  "Based on your property size, selected appliance loads, and outage backup hours.": "Basado en el tamaño del inmueble, cargas seleccionadas y horas de respaldo deseadas.",
  "Daily Demand": "Demanda Diaria",
  "Solar Panels": "Paneles Solares",
  "Solar Array": "Generación Solar",
  "Battery Storage": "Almacenamiento en Baterías",
  "Hybrid Inverter": "Inversor Híbrido",
  "Recommended Tier": "Nivel Recomendado",
  "Get Quote for This System →": "Cotizar Este Sistema →",
  "Get a Tailored Quote for This System →": "Obtener Cotización a Medida para Este Sistema →",

  // Commercial Calculator
  "Business Type": "Tipo de Empresa",
  "What best describes your organization?": "¿Qué describe mejor su organización?",
  "Office / Prof.": "Oficina / Profesional",
  "Retail / Comm.": "Comercio / Tienda",
  "Mfg / Ind.": "Industria / Manufactura",
  "Hospitality": "Hotelería y Turismo",
  "Healthcare": "Salud / Clínica",
  "Education": "Educación",
  "Other": "Otro",
  "Facility Size": "Tamaño de la Instalación",
  "What is the approximate total area of your facility?": "¿Cuál es el área aproximada de sus instalaciones?",
  "Operating Hours": "Horario de Operación",
  "When is your facility typically in operation?": "¿Cuándo opera habitualmente su instalación?",
  "Less than 8 hours/day": "Menos de 8 horas/día",
  "8–12 hours/day": "8 a 12 horas/día",
  "12–16 hours/day": "12 a 16 horas/día",
  "24/7 (Continuous)": "24/7 (Continuo)",
  "Critical Equipment": "Equipos Críticos",
  "What equipment or systems are essential to keep running? (Select all that apply)": "¿Qué equipos son indispensables para mantener operando? (Seleccione todos los que apliquen)",
  "Computers / IT Systems": "Computadoras / Servidores",
  "Lighting": "Iluminación",
  "HVAC (Air Conditioning)": "Climatización (Aire Acondicionado)",
  "Refrigeration": "Refrigeración Comercial",
  "Production Equipment": "Maquinaria de Producción",
  "Medical Equipment": "Equipamiento Médico",
  "Elevators": "Ascensores",
  "Water Pumps": "Bombas de Agua",
  "Security Systems": "Sistemas de Seguridad",
  "Backup Objective": "Objetivo de Respaldo",
  "What is your primary goal for backup power?": "¿Cuál es su objetivo principal de energía de respaldo?",
  "Essential systems only": "Solo sistemas esenciales",
  "Extended backup": "Respaldo extendido",
  "Full facility backup": "Respaldo total de la instalación",
  "Existing Infrastructure": "Infraestructura Existente",
  "What best describes your current electrical and energy setup?": "¿Cómo describiría su sistema eléctrico actual?",
  "Standard utility connection (UNE)": "Conexión estándar a la red (UNE)",
  "Existing generator(s)": "Generador(es) existente(s)",
  "Existing solar system": "Sistema solar existente",
  "No existing system": "Ningún sistema previo",
  "Not sure": "No estoy seguro",
  "Calculate Commercial Profile": "Calcular Perfil Comercial",

  // Common CTAs & Forms
  "Send Message →": "Enviar Mensaje →",
  "Your full name": "Su nombre completo",
  "City, province, or specific address": "Ciudad, provincia o dirección específica",
  "Get a Quote": "Solicitar Cotización",
  "How It Works": "Cómo Funciona",
  "Learn More →": "Más Información →",
  "LED Lights (4-6 Bulbs)": "Luces LED (4-6 Bombillas)",
  "Refrigerator / Freezer": "Refrigerador / Nevera",
  "Standing / Ceiling Fans (2x)": "Ventiladores (2 unidades)",
  "Smart TV & WiFi Router": "Smart TV y Router WiFi",
  "Water Pump (1/2 HP)": "Bomba de Agua (1/2 HP)",
  "Split AC Unit (9k BTU)": "Aire Acondicionado Split (9k BTU)",
};

export const hindiTranslationsMap: Record<string, string> = {
  // Hero & General
  "What Does Your Home Need to Keep Running?": "आपके घर को चालू रखने के लिए क्या चाहिए?",
  "Tell us what you want to power and CubaWatt™ will do the math.": "हमें बताएं कि आप क्या चलाना चाहते हैं और CubaWatt™ सटीक गणना करेगा।",
  "Tell Us How Your Business Uses Electricity.": "हमें बताएं कि आपका व्यवसाय बिजली का उपयोग कैसे करता है।",
  "CubaWatt™ will create a preliminary energy profile for your facility.": "CubaWatt™ आपके परिसर के लिए एक प्रारंभिक ऊर्जा प्रोफ़ाइल तैयार करेगा।",
  "Reliable Power": "विश्वसनीय ऊर्जा",
  "For the things that matter most": "उन चीजों के लिए जो सबसे ज्यादा मायने रखती हैं",
  "Simple & Fast": "सरल और तेज़",
  "A few questions, real answers": "कुछ प्रश्न, वास्तविक उत्तर",
  "Personalized Results": "व्यक्तिगत परिणाम",
  "Right-sized for your home": "आपके घर के लिए बिल्कुल सही आकार",
  "A More Reliable Home in Cuba": "क्यूबा में एक अधिक विश्वसनीय घर",
  "Designed for Cuban Homes": "क्यूबाई घरों के लिए डिज़ाइन किया गया",
  "Power What Matters": "ऊर्जा जो मायने रखती है",
  "Clean, Renewable Energy": "स्वच्छ, नवीकरणीय ऊर्जा",
  "Expert Support": "विशेषज्ञ सहायता",
  "COMMERCIAL RESILIENCE GUARANTEES": "व्यावसायिक लचीलापन गारंटी",
  "Lower Operating Costs": "कम परिचालन लागत",
  "Continuous operations during any blackout": "किसी भी ब्लैकआउट के दौरान निरंतर संचालन",
  "Hedge against costly diesel generator fuel": "महंगे डीजल जनरेटर ईंधन से बचाव",
  "U.S. Export Compliant": "अमेरिकी निर्यात अनुपालक",
  "Authorized OFAC general license transactions": "अधिकृत OFAC सामान्य लाइसेंस लेनदेन",

  // Calculator Steps & Forms
  "Property Info": "संपत्ति की जानकारी",
  "Type & size": "प्रकार और आकार",
  "Tell us about the property": "हमें संपत्ति के बारे में बताएं",
  "What type of home or building needs backup solar power?": "किस प्रकार के घर या इमारत को बैकअप सौर ऊर्जा की आवश्यकता है?",
  "Single-Family Home": "एकल-परिवार घर",
  "Townhouse": "टाउनहाउस",
  "Multi-Family / Apartment": "अपार्टमेंट / बहु-परिवार",
  "Home Size": "घर का आकार",
  "Under 1,000 sq ft": "1,000 वर्ग फुट से कम",
  "1,000 – 1,500 sq ft": "1,000 – 1,500 वर्ग फुट",
  "1,500 – 2,000 sq ft": "1,500 – 2,000 वर्ग फुट",
  "2,000 – 3,000 sq ft": "2,000 – 3,000 वर्ग फुट",
  "Over 3,000 sq ft": "3,000 वर्ग फुट से अधिक",
  "Number of Bedrooms": "कमरों की संख्या",
  "1 Bedroom": "1 कमरा",
  "2 Bedrooms": "2 कमरे",
  "3 Bedrooms": "3 कमरे",
  "4 Bedrooms": "4 कमरे",
  "5+ Bedrooms": "5+ कमरे",
  "Location in Cuba": "क्यूबा में स्थान",
  "Property Ownership": "संपत्ति का स्वामित्व",
  "I own this property": "मैं इस संपत्ति का मालिक हूँ",
  "My family owns this property": "मेरा परिवार इस संपत्ति का मालिक है",
  "I rent this property": "मैं इस संपत्ति को किराए पर लेता हूँ",
  "Any special considerations? (Optional)": "कोई विशेष आवश्यकता? (वैकल्पिक)",
  "e.g. additional buildings, pool, home office, medical equipment, etc.": "उदा. अतिरिक्त भवन, पूल, होम ऑफिस, चिकित्सा उपकरण, आदि।",
  "Continue to Appliances": "उपकरणों पर आगे बढ़ें",
  "What do you want to power?": "आप क्या चलाना चाहते हैं?",
  "Select typical appliances you wish to protect during rotational blackouts.": "उन विशिष्ट उपकरणों का चयन करें जिन्हें आप ब्लैकआउट के दौरान सुरक्षित रखना चाहते हैं।",
  "Blackout Backup Autonomy": "ब्लैकआउट बैकअप स्वायत्तता",
  "Select how many hours you need stored power when the utility grid is down.": "चुनें कि ग्रिड बंद होने पर आपको कितने घंटे बिजली चाहिए।",
  "TARGET BATTERY AUTONOMY": "लक्षित बैटरी बैकअप अवधि",
  "Hours": "घंटे",
  "4h (Short Outages)": "4 घंटे (छोटी कटौतियां)",
  "12h (Standard Cuba - Overnight)": "12 घंटे (क्यूबा मानक - रात भर)",
  "24h (Full Continuous)": "24 घंटे (पूर्ण निरंतर बैकअप)",
  "Continue to Equipment": "उपकरण चयन पर आगे बढ़ें",
  "Continue to Backup Time": "बैकअप समय पर आगे बढ़ें",
  "Do you have existing equipment?": "क्या आपके पास पहले से कोई उपकरण है?",
  "We can integrate with your current solar setup, panels, battery arrays, or generators to optimize pricing.": "मूल्य निर्धारण को अनुकूलित करने के लिए हम आपके वर्तमान सौर पैनल, बैटरी या जनरेटर के साथ एकीकृत कर सकते हैं।",
  "No, I am starting completely from scratch": "नहीं, मैं पूरी तरह से शुरुआत से शुरू कर रहा हूँ",
  "Yes, I have existing Solar Panels installed": "हाँ, मेरे पास पहले से सोलर पैनल लगे हैं",
  "Yes, I have batteries (lead-acid or lithium)": "हाँ, मेरे पास बैटरी (लेड-एसिड या लिथियम) है",
  "Yes, I own a backup diesel/gas Generator": "हाँ, मेरे पास बैकअप डीजल/गैस जनरेटर है",
  "Show Sizing Results": "साइजिंग परिणाम देखें",
  "Your Sizing Estimate": "आपका अनुमानित सिस्टम",
  "Based on your property size, selected appliance loads, and outage backup hours.": "आपकी संपत्ति के आकार, चयनित उपकरणों और बैकअप घंटों के आधार पर।",
  "Daily Demand": "दैनिक मांग",
  "Solar Panels": "सोलर पैनल",
  "Solar Array": "सोलर ऐरे",
  "Battery Storage": "बैटरी स्टोरेज",
  "Hybrid Inverter": "हाइब्रिड इन्वर्टर",
  "Recommended Tier": "अनुशंसित स्तर",
  "Get Quote for This System →": "इस सिस्टम के लिए कोट प्राप्त करें →",
  "Get a Tailored Quote for This System →": "इस सिस्टम के लिए अनुकूलित कोट प्राप्त करें →",

  // Commercial Calculator
  "Business Type": "व्यवसाय का प्रकार",
  "What best describes your organization?": "आपके संगठन का सबसे अच्छा वर्णन क्या करता है?",
  "Office / Prof.": "कार्यालय / पेशेवर",
  "Retail / Comm.": "खुदरा / वाणिज्यिक",
  "Mfg / Ind.": "विनिर्माण / उद्योग",
  "Hospitality": "होटल / आतिथ्य",
  "Healthcare": "स्वास्थ्य सेवा / क्लिनिक",
  "Education": "शिक्षा संस्थान",
  "Other": "अन्य",
  "Facility Size": "परिसर का आकार",
  "What is the approximate total area of your facility?": "आपके परिसर का अनुमानित कुल क्षेत्रफल कितना है?",
  "Operating Hours": "संचालन के घंटे",
  "When is your facility typically in operation?": "आपका परिसर आमतौर पर कब संचालित होता है?",
  "Less than 8 hours/day": "प्रतिदिन 8 घंटे से कम",
  "8–12 hours/day": "8–12 घंटे / दिन",
  "12–16 hours/day": "12–16 घंटे / दिन",
  "24/7 (Continuous)": "24/7 (निरंतर)",
  "Critical Equipment": "महत्वपूर्ण उपकरण",
  "What equipment or systems are essential to keep running? (Select all that apply)": "किन उपकरणों या प्रणालियों को चालू रखना आवश्यक है? (सभी लागू विकल्प चुनें)",
  "Computers / IT Systems": "कंप्यूटर / आईटी सिस्टम",
  "Lighting": "प्रकाश व्यवस्था (लाइटिंग)",
  "HVAC (Air Conditioning)": "एचवीएसी (एयर कंडीशनिंग)",
  "Refrigeration": "वाणिज्यिक प्रशीतन (रेफ्रिजरेशन)",
  "Production Equipment": "उत्पादन मशीनरी",
  "Medical Equipment": "चिकित्सा उपकरण",
  "Elevators": "लिफ्ट / एलिवेटर",
  "Water Pumps": "पानी के पंप",
  "Security Systems": "सुरक्षा प्रणालियाँ",
  "Backup Objective": "बैकअप का मुख्य उद्देश्य",
  "What is your primary goal for backup power?": "बैकअप पावर के लिए आपका प्राथमिक लक्ष्य क्या है?",
  "Essential systems only": "केवल आवश्यक प्रणालियाँ",
  "Extended backup": "विस्तारित बैकअप",
  "Full facility backup": "पूरे परिसर का पूर्ण बैकअप",
  "Existing Infrastructure": "मौजूदा बुनियादी ढाँचा",
  "What best describes your current electrical and energy setup?": "आपके वर्तमान विद्युत सेटअप का सबसे अच्छा वर्णन क्या है?",
  "Standard utility connection (UNE)": "मानक ग्रिड कनेक्शन (UNE)",
  "Existing generator(s)": "मौजूदा जनरेटर",
  "Existing solar system": "मौजूदा सौर प्रणाली",
  "No existing system": "कोई मौजूदा प्रणाली नहीं",
  "Not sure": "निश्चित नहीं",
  "Calculate Commercial Profile": "व्यावसायिक प्रोफ़ाइल की गणना करें",

  // Common CTAs & Forms
  "Send Message →": "संदेश भेजें →",
  "Your full name": "आपका पूरा नाम",
  "City, province, or specific address": "शहर, प्रांत या विशिष्ट पता",
  "Get a Quote": "कोट प्राप्त करें",
  "How It Works": "यह कैसे काम करता है",
  "Learn More →": "और जानें →",
  "LED Lights (4-6 Bulbs)": "एलईडी लाइट्स (4-6 बल्ब)",
  "Refrigerator / Freezer": "रेफ्रिजरेटर / फ्रीजर",
  "Standing / Ceiling Fans (2x)": "स्टैंडिंग / सीलिंग पंखे (2x)",
  "Smart TV & WiFi Router": "स्मार्ट टीवी और वाईफाई राउटर",
  "Water Pump (1/2 HP)": "पानी का पंप (1/2 HP)",
  "Split AC Unit (9k BTU)": "स्प्लिट एसी यूनिट (9k BTU)",
};

/**
 * Universal translation helper function supporting:
 * - Nested keys: t('common.getQuote')
 * - Direct phrase translation: t('Reliable Power')
 * - Explicit tri-lingual parameters: t(en, es, hi)
 */
export const t = (keyOrEn: string, esOrFallback?: string, hiOrFallback?: string): string => {
  let activeLang: Language = 'en';
  try {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_selected_language') || localStorage.getItem('preferred_language');
      if (saved === 'en' || saved === 'es' || saved === 'hi') {
        activeLang = saved as Language;
      } else if (document.documentElement.lang === 'es' || document.documentElement.lang === 'hi') {
        activeLang = document.documentElement.lang as Language;
      }
    }
  } catch (_) {}

  // 1. Try dot-notated key path resolution (e.g. 'common.getQuote' or 'hero.titleLine1')
  if (keyOrEn.includes('.')) {
    const parts = keyOrEn.split('.');
    let cur: any = translations[activeLang] || translations.en;
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p];
      } else {
        cur = undefined;
        break;
      }
    }
    if (typeof cur === 'string') return cur;
  }

  // 2. Active language resolution
  if (activeLang === 'es') {
    return esOrFallback || spanishTranslationsMap[keyOrEn] || keyOrEn;
  }
  if (activeLang === 'hi') {
    return hiOrFallback || hindiTranslationsMap[keyOrEn] || keyOrEn;
  }
  return keyOrEn;
};
