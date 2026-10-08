import React, { useState } from 'react';
import { Language } from '../../i18n/translations';
import { X, Copy, Check, Download, FileCode, ExternalLink } from 'lucide-react';

interface HtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const HtmlExportModal: React.FC<HtmlExportModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CubaWatt™ | Power Your Family or Business in Cuba — From Anywhere</title>
  <meta name="description" content="CubaWatt™ manages the entire process — solar, batteries, sourcing, delivery coordination, installation, and support.">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .glow-map { filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.85)); }
  </style>
</head>
<body class="bg-[#f8fafc] text-slate-900 antialiased">

  <!-- NAVBAR -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Brand Logo -->
        <a href="#" class="flex flex-col select-none">
          <div class="flex items-baseline font-black tracking-tight text-3xl font-sans">
            <span class="text-[#E52535] font-black tracking-tighter">C</span>
            <span class="text-[#0B2545] font-extrabold tracking-tighter">uba</span>
            <span class="text-[#E52535] font-black">Watt</span>
            <span class="text-[#E52535] text-sm ml-0.5 font-bold">™</span>
          </div>
          <div class="text-[9px] font-bold tracking-[0.22em] text-slate-500 uppercase -mt-1">
            SOLAR | BATTERY | ENERGY SOLUTIONS
          </div>
        </a>

        <!-- Desktop Navigation Links with data-i18n -->
        <nav class="hidden xl:flex items-center space-x-5 text-[13.5px] font-medium text-slate-700">
          <a href="#home" class="text-[#0E336A] font-semibold border-b-2 border-[#0E336A] pb-1" data-i18n="nav.home">Home</a>
          <a href="#about" class="hover:text-[#0E336A] transition-colors" data-i18n="nav.about">About Us</a>
          <a href="#services" class="hover:text-[#0E336A] transition-colors" data-i18n="nav.services">Services</a>
          <a href="#residential" class="hover:text-[#0E336A] transition-colors" data-i18n="nav.residential">Residential</a>
          <a href="#commercial" class="hover:text-[#0E336A] transition-colors" data-i18n="nav.commercial">Commercial</a>
          <a href="#contact" class="hover:text-[#0E336A] transition-colors" data-i18n="nav.contact">Contact Us</a>
          <a href="#compliance" class="text-xs text-slate-500 hover:text-[#0E336A] border-l pl-4 border-slate-200" data-i18n="nav.compliance">U.S. Regulatory Compliance</a>
        </nav>

        <!-- Right Side: Language Switcher & Quote CTA -->
        <div class="flex items-center space-x-3">
          <!-- Language Toggle Switcher -->
          <div class="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-semibold">
            <button id="lang-en-btn" onclick="setLanguage('en')" class="px-2.5 py-1 rounded-full transition-all bg-[#0E336A] text-white shadow-xs">EN</button>
            <button id="lang-es-btn" onclick="setLanguage('es')" class="px-2.5 py-1 rounded-full transition-all text-slate-600 hover:text-slate-900">ES</button>
          </div>
          <button class="bg-[#E52535] hover:bg-[#C91A2A] text-white text-sm font-bold px-5 py-2.5 rounded-md transition-all shadow-sm" data-i18n="nav.getQuote">
            Get a Quote →
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section id="home" class="relative min-h-[560px] flex items-center bg-[#071326] overflow-hidden">
    <!-- Visual Image Montage & Atmospheric Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 opacity-40 mix-blend-luminosity">
        <div class="lg:col-span-7 h-full bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80')"></div>
        <div class="lg:col-span-5 h-full bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')"></div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#030d1d]/95 via-[#0a1e3b]/85 to-[#051124]/90"></div>
      
      <!-- Glowing Cuba Map SVG -->
      <div class="absolute top-6 right-4 lg:right-24 w-[320px] md:w-[460px] lg:w-[560px] opacity-75 pointer-events-none glow-map">
        <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
          <path d="M 30,120 C 45,110 65,95 90,88 C 120,80 150,85 180,82 C 210,79 240,75 270,78 C 300,81 330,90 350,96 C 370,102 390,118 410,120 C 425,122 445,116 455,108 C 440,118 420,132 390,132 C 365,132 345,122 320,116 C 290,110 260,106 230,108 C 200,110 170,116 140,122 C 110,128 80,134 55,136 C 40,137 32,130 30,120 Z" stroke="#F59E0B" stroke-width="3.2" fill="rgba(245, 158, 11, 0.1)"></path>
          <path d="M 380,110 C 420,90 440,80 475,88" stroke="#FDE047" stroke-width="2.8" stroke-dasharray="6 4"></path>
          <circle cx="110" cy="85" r="4.5" fill="#FFFBEB"></circle>
          <circle cx="390" cy="120" r="4" fill="#FFFBEB"></circle>
        </svg>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
      <div class="max-w-3xl">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight mb-5">
          <span data-i18n="hero.titlePart1">Power Your Family or Business in Cuba — </span>
          <span class="text-[#E52535] font-black" data-i18n="hero.titleHighlight">From Anywhere</span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed mb-8 max-w-2xl" data-i18n="hero.subtitle">
          CubaWatt™ manages the entire process — solar, batteries, sourcing, delivery coordination, installation, and support — so you can provide reliable power to the people and places that matter most in Cuba.
        </p>

        <!-- 2 Action Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3.5 pt-2">
          <!-- 1. Get a Quote -->
          <button class="flex items-center justify-center gap-2 bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all shadow-lg" data-i18n="hero.btnQuote">
            📄 Get a Quote →
          </button>
          <!-- 2. How It Works -->
          <button class="flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#071930] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-blue-400/20 transition-all shadow-md" data-i18n="hero.btnHowItWorks">
            ▶ How It Works
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- TWO CATEGORY CARDS SECTION -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      
      <!-- Residential Card -->
      <div id="residential" class="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 bg-slate-900 h-[340px] sm:h-[380px]">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80')"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
        
        <div class="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-lg border border-white/80 shadow-lg">
          <h2 class="text-2xl sm:text-[26px] font-extrabold text-[#0D3B75] tracking-tight mb-2" data-i18n="cards.resTitle">Residential</h2>
          <p class="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-3" data-i18n="cards.resDesc">
            Reliable solar and battery solutions for homes in Cuba, so your family can stay comfortable and connected.
          </p>
          <a href="#contact" class="inline-flex items-center gap-1 text-[#E52535] font-bold text-sm" data-i18n="cards.resLink">Learn More →</a>
        </div>
      </div>

      <!-- Commercial Card -->
      <div id="commercial" class="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 bg-slate-900 h-[340px] sm:h-[380px]">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80')"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
        
        <div class="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-lg border border-white/80 shadow-lg">
          <h2 class="text-2xl sm:text-[26px] font-extrabold text-[#0D3B75] tracking-tight mb-2" data-i18n="cards.comTitle">Commercial</h2>
          <p class="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-3" data-i18n="cards.comDesc">
            Dependable energy solutions for businesses in Cuba, helping you keep operations running and people productive.
          </p>
          <a href="#contact" class="inline-flex items-center gap-1 text-[#E52535] font-bold text-sm" data-i18n="cards.comLink">Learn More →</a>
        </div>
      </div>

    </div>
  </section>

  <!-- PROCESS SECTION: HOW CUBAWATT WORKS -->
  <section class="py-14 sm:py-20 bg-white border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#0E336A] tracking-tight mb-2.5 font-sans" data-i18n="process.title">
          How CubaWatt™ Works
        </h2>
        <p class="text-slate-600 text-sm sm:text-base font-medium" data-i18n="process.subtitle">
          A simple, end-to-end process to bring reliable power to Cuba.
        </p>
      </div>

      <!-- 5 Steps Flow -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 text-center items-start">
        
        <!-- Step 1 -->
        <div class="flex flex-col items-center">
          <div class="relative mb-4">
            <span class="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#E52535] text-white text-xs font-black flex items-center justify-center">1</span>
            <div class="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-2xl">💬</div>
          </div>
          <h3 class="text-base font-bold text-[#0E336A] mb-2" data-i18n="process.step1.title">Consult & Plan</h3>
          <p class="text-xs text-slate-600 max-w-[200px]" data-i18n="process.step1.desc">Tell us what you need. We design the right solution for your home or business.</p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center">
          <div class="relative mb-4">
            <span class="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#0E336A] text-white text-xs font-black flex items-center justify-center">2</span>
            <div class="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-2xl">📦</div>
          </div>
          <h3 class="text-base font-bold text-[#0E336A] mb-2" data-i18n="process.step2.title">Source & Prepare</h3>
          <p class="text-xs text-slate-600 max-w-[200px]" data-i18n="process.step2.desc">We source high-quality solar panels, batteries and equipment, and prepare everything for delivery to Cuba.</p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center">
          <div class="relative mb-4">
            <span class="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#0E336A] text-white text-xs font-black flex items-center justify-center">3</span>
            <div class="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-2xl">🚢</div>
          </div>
          <h3 class="text-base font-bold text-[#0E336A] mb-2" data-i18n="process.step3.title">Coordinate Delivery</h3>
          <p class="text-xs text-slate-600 max-w-[200px]" data-i18n="process.step3.desc">We manage logistics and coordinate delivery to Cuba.</p>
        </div>

        <!-- Step 4 -->
        <div class="flex flex-col items-center">
          <div class="relative mb-4">
            <span class="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#0E336A] text-white text-xs font-black flex items-center justify-center">4</span>
            <div class="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-2xl">👷</div>
          </div>
          <h3 class="text-base font-bold text-[#0E336A] mb-2" data-i18n="process.step4.title">Installation</h3>
          <p class="text-xs text-slate-600 max-w-[200px]" data-i18n="process.step4.desc">Our experienced team handles installation and commissioning.</p>
        </div>

        <!-- Step 5 -->
        <div class="flex flex-col items-center">
          <div class="relative mb-4">
            <span class="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#0E336A] text-white text-xs font-black flex items-center justify-center">5</span>
            <div class="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-2xl">🎧</div>
          </div>
          <h3 class="text-base font-bold text-[#0E336A] mb-2" data-i18n="process.step5.title">Ongoing Support</h3>
          <p class="text-xs text-slate-600 max-w-[200px]" data-i18n="process.step5.desc">We provide continued support to keep your system running reliably for the long term.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- TRUST BANNER -->
  <section class="relative bg-[#071a33] text-white py-12 border-t-4 border-[#E52535]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-5">
          <div class="w-12 h-1 bg-[#E52535] rounded-full mb-3"></div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3" data-i18n="trust.title">A Trusted Partner from Start to Finish</h2>
          <p class="text-slate-300 text-xs sm:text-sm font-light leading-relaxed" data-i18n="trust.desc">
            CubaWatt™ delivers complete, reliable energy solutions with hands-on support, so you can provide power to the people and places that matter most in Cuba.
          </p>
        </div>
        <div class="lg:col-span-7">
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div class="p-2"><div class="text-2xl mb-1">⚙️</div><span class="text-xs font-semibold" data-i18n="trust.f1">Professional System Design</span></div>
            <div class="p-2"><div class="text-2xl mb-1">📦</div><span class="text-xs font-semibold" data-i18n="trust.f2">High-Quality Equipment</span></div>
            <div class="p-2"><div class="text-2xl mb-1">🚢</div><span class="text-xs font-semibold" data-i18n="trust.f3">Coordinated Logistics</span></div>
            <div class="p-2"><div class="text-2xl mb-1">🔧</div><span class="text-xs font-semibold" data-i18n="trust.f4">Expert Installation</span></div>
            <div class="p-2"><div class="text-2xl mb-1">🎧</div><span class="text-xs font-semibold" data-i18n="trust.f5">Ongoing Support</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- JAVASCRIPT i18n MECHANISM -->
  <script>
    const translations = {
      en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.services": "Services",
        "nav.residential": "Residential",
        "nav.commercial": "Commercial",
        "nav.residentialCalc": "Residential Calculator",
        "nav.commercialCalc": "Commercial Calculator",
        "nav.contact": "Contact Us",
        "nav.compliance": "U.S. Regulatory Compliance",
        "nav.getQuote": "Get a Quote →",
        "hero.titlePart1": "Power Your Family or Business in Cuba — ",
        "hero.titleHighlight": "From Anywhere",
        "hero.subtitle": "CubaWatt™ manages the entire process — solar, batteries, sourcing, delivery coordination, installation, and support — so you can provide reliable power to the people and places that matter most in Cuba.",
        "hero.btnQuote": "📄 Get a Quote →",
        "hero.btnHowItWorks": "▶ How It Works",
        "hero.btnResCalc": "🏠 Residential Calculator",
        "hero.btnComCalc": "🏢 Commercial Calculator",
        "cards.resTitle": "Residential",
        "cards.resDesc": "Reliable solar and battery solutions for homes in Cuba, so your family can stay comfortable and connected.",
        "cards.resLink": "Learn More →",
        "cards.comTitle": "Commercial",
        "cards.comDesc": "Dependable energy solutions for businesses in Cuba, helping you keep operations running and people productive.",
        "cards.comLink": "Learn More →",
        "process.title": "How CubaWatt™ Works",
        "process.subtitle": "A simple, end-to-end process to bring reliable power to Cuba.",
        "process.step1.title": "Consult & Plan",
        "process.step1.desc": "Tell us what you need. We design the right solution for your home or business.",
        "process.step2.title": "Source & Prepare",
        "process.step2.desc": "We source high-quality solar panels, batteries and equipment, and prepare everything for delivery to Cuba.",
        "process.step3.title": "Coordinate Delivery",
        "process.step3.desc": "We manage logistics and coordinate delivery to Cuba.",
        "process.step4.title": "Installation",
        "process.step4.desc": "Our experienced team handles installation and commissioning.",
        "process.step5.title": "Ongoing Support",
        "process.step5.desc": "We provide continued support to keep your system running reliably for the long term.",
        "trust.title": "A Trusted Partner from Start to Finish",
        "trust.desc": "CubaWatt™ delivers complete, reliable energy solutions with hands-on support, so you can provide power to the people and places that matter most in Cuba.",
        "trust.f1": "Professional System Design",
        "trust.f2": "High-Quality Equipment",
        "trust.f3": "Coordinated Logistics",
        "trust.f4": "Expert Installation",
        "trust.f5": "Ongoing Support"
      },
      es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre Nosotros",
        "nav.services": "Servicios",
        "nav.residential": "Residencial",
        "nav.commercial": "Comercial",
        "nav.residentialCalc": "Calculadora Residencial",
        "nav.commercialCalc": "Calculadora Comercial",
        "nav.contact": "Contáctenos",
        "nav.compliance": "Cumplimiento Regulatorio EE.UU.",
        "nav.getQuote": "Cotizar Ahora →",
        "hero.titlePart1": "Energía para su Familia o Negocio en Cuba — ",
        "hero.titleHighlight": "Desde Cualquier Lugar",
        "hero.subtitle": "CubaWatt™ gestiona todo el proceso — energía solar, baterías, abastecimiento, coordinación de envíos, instalación y soporte — para que usted brinde energía confiable a las personas y lugares que más importan en Cuba.",
        "hero.btnQuote": "📄 Cotizar Ahora →",
        "hero.btnHowItWorks": "▶ Cómo Funciona",
        "hero.btnResCalc": "🏠 Calculadora Residencial",
        "hero.btnComCalc": "🏢 Calculadora Comercial",
        "cards.resTitle": "Residencial",
        "cards.resDesc": "Soluciones solares y de baterías confiables para hogares en Cuba, para que su familia se mantenga cómoda y conectada.",
        "cards.resLink": "Conozca Más →",
        "cards.comTitle": "Comercial",
        "cards.comDesc": "Soluciones energéticas seguras para negocios en Cuba, ayudándole a mantener sus operaciones activas y productivas.",
        "cards.comLink": "Conozca Más →",
        "process.title": "Cómo Funciona CubaWatt™",
        "process.subtitle": "Un proceso integral y sencillo para llevar energía confiable a Cuba.",
        "process.step1.title": "Consultoría y Planificación",
        "process.step1.desc": "Cuéntenos sus necesidades. Diseñamos la solución adecuada para su hogar o negocio.",
        "process.step2.title": "Suministro y Preparación",
        "process.step2.desc": "Adquirimos paneles solares, baterías y equipos de primera calidad, y preparamos todo para su envío a Cuba.",
        "process.step3.title": "Coordinación de Entrega",
        "process.step3.desc": "Gestionamos la logística y coordinamos la entrega segura a Cuba.",
        "process.step4.title": "Instalación Profesional",
        "process.step4.desc": "Nuestro equipo técnico experimentado se encarga de la instalación y puesta en marcha.",
        "process.step5.title": "Soporte Continuo",
        "process.step5.desc": "Ofrecemos soporte técnico continuo para mantener su sistema operando de manera confiable a largo plazo.",
        "trust.title": "Un Socio de Confianza de Principio a Fin",
        "trust.desc": "CubaWatt™ ofrece soluciones integrales de energía con respaldo directo, para que usted brinde electricidad a quienes más importan en Cuba.",
        "trust.f1": "Diseño de Sistema Profesional",
        "trust.f2": "Equipos de Alta Calidad",
        "trust.f3": "Logística Coordinada",
        "trust.f4": "Instalación Experta",
        "trust.f5": "Soporte Continuo"
      }
    };

    function setLanguage(lang) {
      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerText = dict[key];
        }
      });
      // Toggle button styles
      const btnEn = document.getElementById('lang-en-btn');
      const btnEs = document.getElementById('lang-es-btn');
      if (lang === 'en') {
        btnEn.className = 'px-2.5 py-1 rounded-full transition-all bg-[#0E336A] text-white shadow-xs';
        btnEs.className = 'px-2.5 py-1 rounded-full transition-all text-slate-600 hover:text-slate-900';
      } else {
        btnEs.className = 'px-2.5 py-1 rounded-full transition-all bg-[#0E336A] text-white shadow-xs';
        btnEn.className = 'px-2.5 py-1 rounded-full transition-all text-slate-600 hover:text-slate-900';
      }
      document.documentElement.lang = lang;
    }
  </script>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cubawatt-landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0E336A] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <FileCode className="w-4 h-4" />
            <span>Standalone Export</span>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight">
            Copy-Paste Ready Standalone HTML / CSS / JS
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1 font-light">
            Complete self-contained HTML5 file with embedded Tailwind CSS, semantic data-i18n attributes, full English & Spanish translation dictionaries, and interactive language switcher.
          </p>
        </div>

        {/* Actions bar */}
        <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-600">cubawatt-landing-page.html (Semantic HTML5 + i18n JS)</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="bg-[#0E336A] hover:bg-[#092244] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire HTML'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="bg-[#E52535] hover:bg-[#C91A2A] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="p-6 max-h-[60vh] overflow-y-auto bg-slate-900 text-slate-100 font-mono text-xs">
          <pre className="whitespace-pre-wrap leading-relaxed selection:bg-blue-600 selection:text-white">
            {standaloneHtmlCode}
          </pre>
        </div>

      </div>
    </div>
  );
};
