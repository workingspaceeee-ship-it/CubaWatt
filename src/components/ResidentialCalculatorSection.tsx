import React, { useState, useId } from 'react';
import { Language, translations, t as tr } from '../i18n/translations';
import {
  Home,
  Shield,
  Layers,
  MapPin,
  BedDouble,
  Maximize2,
  Lock,
  ArrowRight,
  Sun,
  BatteryCharging,
  Zap,
  CheckCircle2,
  Sparkles,
  Info,
  Check,
  Building,
  Smartphone,
  CheckCircle,
} from 'lucide-react';

import heroCalculatorBg from '../assets/images/30.jpg';
import rightColPhoto from '../assets/images/31.jpg';

interface ResidentialCalculatorSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const ResidentialCalculatorSection: React.FC<ResidentialCalculatorSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const isEs = lang === 'es';
  const t = translations[lang];

  // Wizard States
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Step 1 States: Property Info
  const [propertyType, setPropertyType] = useState<string>('single-family');
  const [homeSize, setHomeSize] = useState<string>('1,500-2,000');
  const [numBedrooms, setNumBedrooms] = useState<string>('3');
  const [location, setLocation] = useState<string>('Havana');
  const [ownership, setOwnership] = useState<string>('own');
  const [specialConsiderations, setSpecialConsiderations] = useState<string>('');

  // Step 2 States: Appliances
  const [appliances, setAppliances] = useState([
    { id: 'led_lights', name: 'LED Lights (4-6 Bulbs)', watts: 100, hours: 8, checked: true, icon: '💡' },
    { id: 'refrigerator', name: 'Refrigerator / Freezer', watts: 180, hours: 24, checked: true, icon: '🧊', cyclic: true },
    { id: 'fans', name: 'Standing / Ceiling Fans (2x)', watts: 120, hours: 10, checked: true, icon: '🌀' },
    { id: 'tv_wifi', name: 'Smart TV & WiFi Router', watts: 150, hours: 6, checked: true, icon: '📺' },
    { id: 'water_pump', name: 'Water Pump (1/2 HP)', watts: 500, hours: 1, checked: false, icon: '🚰' },
    { id: 'split_ac', name: 'Split AC Unit (9k BTU)', watts: 1000, hours: 8, checked: false, icon: '❄️' },
  ]);

  // Step 3 States: Backup Time
  const [backupHours, setBackupHours] = useState<number>(12);

  // Step 4 States: Existing Equipment
  const [existingEquip, setExistingEquipment] = useState({
    none: true,
    solar: false,
    battery: false,
    inverter: false,
    generator: false,
  });

  const handleToggleEquipment = (key: keyof typeof existingEquip) => {
    if (key === 'none') {
      setExistingEquipment({
        none: true,
        solar: false,
        battery: false,
        inverter: false,
        generator: false,
      });
    } else {
      setExistingEquipment((prev) => ({
        ...prev,
        none: false,
        [key]: !prev[key],
      }));
    }
  };

  const handleApplianceToggle = (id: string) => {
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, checked: !app.checked } : app))
    );
  };

  const handleApplianceHoursChange = (id: string, hours: number) => {
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, hours: Math.max(0.5, Math.min(24, hours)) } : app))
    );
  };

  // Calculations for Step 5: Results (Synchronized with Kilowaa Cuban Solar Sizing Engine)
  // 1. Daily & Monthly Consumption
  const dailyKwh = appliances.reduce((sum, app) => {
    if (!app.checked) return sum;
    const factor = app.cyclic ? 0.5 : 1.0;
    return sum + (app.watts * app.hours * factor) / 1000;
  }, 0);
  const monthlyKwh = Math.round(dailyKwh * 30);

  // 2. Kilowaa Solar Sizing: system_kW = (Daily kWh / Peak Sun Hours) / Performance Ratio
  // Cuba regional average: PSH = 5.3 hrs/day, Performance Ratio = 0.78 (efficiency & temperature losses)
  const PSH = 5.3;
  const PERFORMANCE_RATIO = 0.78;
  const solarKw = dailyKwh > 0 ? Math.max(1.1, Math.round(((dailyKwh / PSH) / PERFORMANCE_RATIO) * 10) / 10) : 0;
  
  // Daily and Monthly estimated generation
  const dailyGenKwh = Math.round(solarKw * PSH * PERFORMANCE_RATIO * 10) / 10;
  const monthlyGenKwh = Math.round(dailyGenKwh * 30);

  // Solar Panel Count based on Tier-1 550W modules
  const PANEL_WATTS = 550;
  const numPanels = solarKw > 0 ? Math.ceil((solarKw * 1000) / PANEL_WATTS) : 0;

  // 3. Battery Capacity Sizing: battery_kWh = (Nighttime / Critical Load kWh) / Battery Depth of Discharge (DoD 0.88)
  const BATTERY_DOD = 0.88;
  const criticalNightRatio = backupHours / 24;
  const batteryKwh = dailyKwh > 0 ? Math.max(2.5, Math.round(((dailyKwh * criticalNightRatio) / BATTERY_DOD) * 10) / 10) : 0;

  // 4. Inverter Sizing
  const peakActiveWatts = appliances.reduce((sum, app) => (app.checked ? sum + app.watts : sum), 0);
  const rawInverter = (peakActiveWatts * 1.25) / 1000;
  let inverterKw = 3.5;
  if (rawInverter > 7.0) inverterKw = 10.0;
  else if (rawInverter > 5.0) inverterKw = 8.0;
  else if (rawInverter > 4.0) inverterKw = 6.0;
  else if (rawInverter > 2.8) inverterKw = 5.0;
  else if (dailyKwh === 0) inverterKw = 0;

  let tier = 'Essential';
  let tierColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  if (dailyKwh > 8.0) {
    tier = 'Whole Home';
    tierColor = 'text-indigo-600 bg-indigo-50 border-indigo-200';
  } else if (dailyKwh > 3.5) {
    tier = 'Family';
    tierColor = 'text-blue-600 bg-blue-50 border-blue-200';
  }

  const selectIdSize = useId();
  const selectIdBeds = useId();
  const selectIdLoc = useId();
  const selectIdOwner = useId();

  return (
    <section id="residential-calculator-section" className="w-full bg-[#FAFCFF] border-t border-slate-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden flex items-end min-h-[360px] md:min-h-[420px] lg:aspect-[1440/480] pb-8 sm:pb-10">
        {/* Full-bleed background photo of Cuban home at dusk spanning 100% viewport */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCalculatorBg}
            alt="Cuban home at dusk with family outside"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle light transparent gradient for text legibility without high-contrast shadows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(7, 19, 38, 0.78) 0%, rgba(7, 19, 38, 0.45) 45%, rgba(7, 19, 38, 0.1) 70%, transparent 90%)',
            }}
          />
        </div>

        {/* Content Area - Full-width padding synced with edge-to-edge framework */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black text-white tracking-tight leading-tight mb-2.5 drop-shadow-sm">
              {tr("What Does Your Home Need to Keep Running?")}
            </h2>

            {/* Subtitle */}
            <p className="text-slate-100 text-sm sm:text-base md:text-lg font-medium max-w-xl leading-relaxed mb-6 drop-shadow-xs">
              {tr("Tell us what you want to power and CubaWatt™ will do the math.")}
            </p>

            {/* 3 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl">
              
              {/* Badge 1 */}
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{tr("Reliable Power")}</h4>
                  <p className="text-[10px] text-slate-200 mt-0.5 leading-normal font-normal">{tr("For the things that matter most")}</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{tr("Simple & Fast")}</h4>
                  <p className="text-[10px] text-slate-200 mt-0.5 leading-normal font-normal">{tr("A few questions, real answers")}</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white">{tr("Personalized Results")}</h4>
                  <p className="text-[10px] text-slate-200 mt-0.5 leading-normal font-normal">{tr("Right-sized for your home")}</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 5-STEP PROGRESS TRACKER */}
      {/* ========================================================================= */}
      <div className="bg-white border-y border-slate-100 py-3 sm:py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-2">
            
            {/* Horizontal Line Connector (Desktop) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0 hidden md:block" />

            {/* Step 1 */}
            <button
              onClick={() => setCurrentStep(1)}
              className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-2 bg-white md:px-3 text-left md:text-center group flex-1 focus:outline-hidden cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border transition-all ${
                  currentStep === 1
                    ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-md'
                    : currentStep > 1
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-500'
                }`}
              >
                {currentStep > 1 ? <Check className="w-5 h-5" /> : '1'}
              </div>
              <div>
                <h4 className={`text-xs font-black tracking-tight leading-tight ${currentStep === 1 ? 'text-[#E61C24]' : 'text-[#0B1F3A]'}`}>
                  {t.calculator.step1Title}
                </h4>
                <p className="text-[10px] text-slate-500 hidden md:block leading-tight mt-0.5 font-normal">
                  {t.calculator.step1Subtitle}
                </p>
              </div>
            </button>

            {/* Step 2 */}
            <button
              onClick={() => setCurrentStep(2)}
              className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-2 bg-white md:px-3 text-left md:text-center group flex-1 focus:outline-hidden cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border transition-all ${
                  currentStep === 2
                    ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-md'
                    : currentStep > 2
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-500'
                }`}
              >
                {currentStep > 2 ? <Check className="w-5 h-5" /> : '2'}
              </div>
              <div>
                <h4 className={`text-xs font-black tracking-tight leading-tight ${currentStep === 2 ? 'text-[#E61C24]' : 'text-[#0B1F3A]'}`}>
                  {t.calculator.step2Title}
                </h4>
                <p className="text-[10px] text-slate-500 hidden md:block leading-tight mt-0.5 font-normal">
                  {t.calculator.step2Subtitle}
                </p>
              </div>
            </button>

            {/* Step 3 */}
            <button
              onClick={() => setCurrentStep(3)}
              className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-2 bg-white md:px-3 text-left md:text-center group flex-1 focus:outline-hidden cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border transition-all ${
                  currentStep === 3
                    ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-md'
                    : currentStep > 3
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-500'
                }`}
              >
                {currentStep > 3 ? <Check className="w-5 h-5" /> : '3'}
              </div>
              <div>
                <h4 className={`text-xs font-black tracking-tight leading-tight ${currentStep === 3 ? 'text-[#E61C24]' : 'text-[#0B1F3A]'}`}>
                  {t.calculator.step3Title}
                </h4>
                <p className="text-[10px] text-slate-500 hidden md:block leading-tight mt-0.5 font-normal">
                  {t.calculator.step3Subtitle}
                </p>
              </div>
            </button>

            {/* Step 4 */}
            <button
              onClick={() => setCurrentStep(4)}
              className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-2 bg-white md:px-3 text-left md:text-center group flex-1 focus:outline-hidden cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border transition-all ${
                  currentStep === 4
                    ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-md'
                    : currentStep > 4
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'bg-slate-50 border-slate-300 text-slate-500'
                }`}
              >
                {currentStep > 4 ? <Check className="w-5 h-5" /> : '4'}
              </div>
              <div>
                <h4 className={`text-xs font-black tracking-tight leading-tight ${currentStep === 4 ? 'text-[#E61C24]' : 'text-[#0B1F3A]'}`}>
                  {t.calculator.step4Title}
                </h4>
                <p className="text-[10px] text-slate-500 hidden md:block leading-tight mt-0.5 font-normal">
                  {t.calculator.step4Subtitle}
                </p>
              </div>
            </button>

            {/* Step 5 */}
            <button
              onClick={() => setCurrentStep(5)}
              className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-2 bg-white md:px-3 text-left md:text-center group flex-1 focus:outline-hidden cursor-pointer"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border transition-all ${
                  currentStep === 5
                    ? 'bg-[#E61C24] border-[#E61C24] text-white shadow-md'
                    : 'bg-slate-50 border-slate-300 text-slate-500'
                }`}
              >
                5
              </div>
              <div>
                <h4 className={`text-xs font-black tracking-tight leading-tight ${currentStep === 5 ? 'text-[#E61C24]' : 'text-[#0B1F3A]'}`}>
                  {t.calculator.step5Title}
                </h4>
                <p className="text-[10px] text-slate-500 hidden md:block leading-tight mt-0.5 font-normal">
                  {t.calculator.step5Subtitle}
                </p>
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CALCULATOR INTERFACE & SIDEBAR GRID */}
      {/* ========================================================================= */}
      <div className="bg-[#F8FAFC] pt-3 pb-10 sm:pb-14">
        <div className="w-full pl-4 sm:pl-6 lg:pl-10 pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: INTERACTIVE FORM CARD (65% DESKTOP) */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6 sm:p-8">
              
              {/* STEP 1: PROPERTY INFORMATION */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  
                  {/* Header Indicator */}
                  <div>
                    <span className="text-[11px] font-black tracking-wider text-[#E61C24] uppercase block mb-1">
                      {tr(`STEP 1 OF 5`, `PASO 1 DE 5`, `5 में से चरण 1`)}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">
                      {tr("Property Information")}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-0.5 font-normal">
                      {tr("Let's start with a few details about your home.")}
                    </p>
                  </div>

                  {/* Property Type Radio Option Cards */}
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] block mb-3">
                      {tr("PROPERTY TYPE")}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      
                      {/* Option 1 */}
                      <label
                        className={`flex flex-col items-center justify-between p-4 rounded-xl border text-center cursor-pointer transition-all duration-200 ${
                          propertyType === 'single-family'
                            ? 'border-[#E61C24] bg-[#FFF5F5] ring-1 ring-[#E61C24]/10'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="property-type"
                          value="single-family"
                          checked={propertyType === 'single-family'}
                          onChange={() => setPropertyType('single-family')}
                          className="sr-only"
                        />
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-xs mb-2">
                          <Home className="w-5 h-5 text-[#0B1F3A]" />
                        </div>
                        <span className="text-xs font-bold text-[#0B1F3A]">
                          {tr("Single-Family Home")}
                        </span>
                        <div
                          className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center mt-3 ${
                            propertyType === 'single-family'
                              ? 'border-[#E61C24] bg-[#E61C24]'
                              : 'border-slate-300'
                          }`}
                        >
                          {propertyType === 'single-family' && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </label>

                      {/* Option 2 */}
                      <label
                        className={`flex flex-col items-center justify-between p-4 rounded-xl border text-center cursor-pointer transition-all duration-200 ${
                          propertyType === 'townhouse'
                            ? 'border-[#E61C24] bg-[#FFF5F5] ring-1 ring-[#E61C24]/10'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="property-type"
                          value="townhouse"
                          checked={propertyType === 'townhouse'}
                          onChange={() => setPropertyType('townhouse')}
                          className="sr-only"
                        />
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-xs mb-2">
                          <Building className="w-5 h-5 text-[#0B1F3A]" />
                        </div>
                        <span className="text-xs font-bold text-[#0B1F3A]">{tr("Townhouse")}</span>
                        <div
                          className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center mt-3 ${
                            propertyType === 'townhouse'
                              ? 'border-[#E61C24] bg-[#E61C24]'
                              : 'border-slate-300'
                          }`}
                        >
                          {propertyType === 'townhouse' && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </label>

                      {/* Option 3 */}
                      <label
                        className={`flex flex-col items-center justify-between p-4 rounded-xl border text-center cursor-pointer transition-all duration-200 ${
                          propertyType === 'apartment'
                            ? 'border-[#E61C24] bg-[#FFF5F5] ring-1 ring-[#E61C24]/10'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="property-type"
                          value="apartment"
                          checked={propertyType === 'apartment'}
                          onChange={() => setPropertyType('apartment')}
                          className="sr-only"
                        />
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-xs mb-2">
                          <Building className="w-5 h-5 text-[#0B1F3A]" />
                        </div>
                        <span className="text-xs font-bold text-[#0B1F3A]">{tr("Multi-Family / Apartment")}</span>
                        <div
                          className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center mt-3 ${
                            propertyType === 'apartment'
                              ? 'border-[#E61C24] bg-[#E61C24]'
                              : 'border-slate-300'
                          }`}
                        >
                          {propertyType === 'apartment' && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </label>

                    </div>
                  </div>

                  {/* Form Inputs Grid (2x2 Dropdown Selectors) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Size */}
                    <div>
                      <label htmlFor={selectIdSize} className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] block mb-2">
                        {tr("Home Size")}
                      </label>
                      <div className="relative">
                        <select
                          id={selectIdSize}
                          value={homeSize}
                          onChange={(e) => setHomeSize(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-sm font-bold text-[#0B1F3A] focus:outline-hidden"
                        >
                          <option value="Under 1,000">{tr("Under 1,000 sq ft")}</option>
                          <option value="1,000-1,500">{tr("1,000 – 1,500 sq ft")}</option>
                          <option value="1,500-2,000">{tr("1,500 – 2,000 sq ft")}</option>
                          <option value="2,000-3,000">{tr("2,000 – 3,000 sq ft")}</option>
                          <option value="Over 3,000">{tr("Over 3,000 sq ft")}</option>
                        </select>
                        <Maximize2 className="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div>
                      <label htmlFor={selectIdBeds} className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] block mb-2">
                        {tr("Number of Bedrooms")}
                      </label>
                      <div className="relative">
                        <select
                          id={selectIdBeds}
                          value={numBedrooms}
                          onChange={(e) => setNumBedrooms(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-sm font-bold text-[#0B1F3A] focus:outline-hidden"
                        >
                          <option value="1">{tr("1 Bedroom")}</option>
                          <option value="2">{tr("2 Bedrooms")}</option>
                          <option value="3">{tr("3 Bedrooms")}</option>
                          <option value="4">{tr("4 Bedrooms")}</option>
                          <option value="5+">{tr("5+ Bedrooms")}</option>
                        </select>
                        <BedDouble className="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor={selectIdLoc} className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] block mb-2">
                        {tr("Location in Cuba")}
                      </label>
                      <div className="relative">
                        <select
                          id={selectIdLoc}
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-sm font-bold text-[#0B1F3A] focus:outline-hidden"
                        >
                          <option value="Havana">{tr("Havana (La Habana)")}</option>
                          <option value="Matanzas">{tr("Matanzas (Varadero)")}</option>
                          <option value="Artemisa">{tr("Artemisa / Pinar del Río")}</option>
                          <option value="Villa Clara">{tr("Villa Clara (Santa Clara)")}</option>
                          <option value="Santiago">{tr("Santiago de Cuba")}</option>
                          <option value="Holguin">{tr("Holguín")}</option>
                        </select>
                        <MapPin className="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Ownership */}
                    <div>
                      <label htmlFor={selectIdOwner} className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] block mb-2">
                        {tr("Property Ownership")}
                      </label>
                      <div className="relative">
                        <select
                          id={selectIdOwner}
                          value={ownership}
                          onChange={(e) => setOwnership(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-sm font-bold text-[#0B1F3A] focus:outline-hidden"
                        >
                          <option value="own">{tr("I own this property")}</option>
                          <option value="family-own">{tr("My family owns this property")}</option>
                          <option value="rent">{tr("I rent this property")}</option>
                        </select>
                        <Home className="w-4.5 h-4.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                  </div>

                  {/* Special Considerations Textarea */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-black uppercase tracking-wider text-[#0B1F3A]">
                        {tr("Any special considerations? (Optional)")}
                      </label>
                      <span className="text-[10px] text-slate-400">{specialConsiderations.length}/300</span>
                    </div>
                    <textarea
                      maxLength={300}
                      rows={3}
                      value={specialConsiderations}
                      onChange={(e) => setSpecialConsiderations(e.target.value)}
                      placeholder={tr("e.g. additional buildings, pool, home office, medical equipment, etc.")}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                    />
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold px-6 py-3.5 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer text-sm"
                    >
                      <span>{tr("Continue to Appliances")}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 2: APPLIANCES */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  
                  {/* Header Indicator */}
                  <div>
                    <span className="text-[11px] font-black tracking-wider text-[#E61C24] uppercase block mb-1">
                      {tr(`STEP 2 OF 5`, `PASO 2 DE 5`, `5 में से चरण 2`)}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">
                      {tr("What do you want to power?")}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-0.5 font-normal">
                      {tr("Select typical appliances you wish to protect during rotational blackouts.")}
                    </p>
                  </div>

                  {/* Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {appliances.map((app) => (
                      <div
                        key={app.id}
                        className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                          app.checked
                            ? 'bg-white border-[#E61C24]/30 shadow-xs ring-1 ring-[#E61C24]/10'
                            : 'bg-[#F8FAFC] border-slate-200 opacity-80'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={app.checked}
                              onChange={() => handleApplianceToggle(app.id)}
                              className="w-5 h-5 rounded-md accent-[#E61C24] cursor-pointer"
                            />
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{app.icon}</span>
                              <span className="text-xs sm:text-sm font-extrabold text-[#0B1F3A] leading-tight">
                                {tr(app.name)}
                              </span>
                            </div>
                          </label>
                          <span className="bg-slate-100 text-slate-600 font-bold text-[10px] px-2 py-0.5 rounded-sm">
                            {app.watts}W
                          </span>
                        </div>

                        {app.checked && (
                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                            <span className="text-[10px] text-slate-500 font-bold">{tr("Hrs/day:")}</span>
                            <div className="flex items-center gap-2">
                              <input
                                type="range"
                                min={1}
                                max={24}
                                step={1}
                                value={app.hours}
                                onChange={(e) => handleApplianceHoursChange(app.id, Number(e.target.value))}
                                className="w-24 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E61C24]"
                              />
                              <span className="text-xs font-black text-[#0B1F3A] w-12 text-right">
                                {app.hours}{tr("h")}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="border border-slate-300 text-slate-700 font-bold px-5 py-3 rounded-full hover:bg-slate-50 active:scale-95 cursor-pointer text-sm"
                    >
                      {tr("← Back")}
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold px-6 py-3.5 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer text-sm"
                    >
                      <span>{tr("Continue to Backup Time")}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 3: BACKUP TIME */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  
                  {/* Header Indicator */}
                  <div>
                    <span className="text-[11px] font-black tracking-wider text-[#E61C24] uppercase block mb-1">
                      {tr(`STEP 3 OF 5`, `PASO 3 DE 5`, `5 में से चरण 3`)}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">
                      {tr("Blackout Backup Autonomy")}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-0.5 font-normal">
                      {tr("Select how many hours you need stored power when the utility grid is down.")}
                    </p>
                  </div>

                  {/* Option Slider */}
                  <div className="bg-[#FFF5F5] border border-[#E61C24]/10 rounded-2xl p-6 text-center max-w-xl mx-auto">
                    <span className="text-xs font-black uppercase text-slate-500 block mb-2">
                      {tr("TARGET BATTERY AUTONOMY")}
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-[#E61C24] mb-4">
                      {backupHours} {tr("Hours")}
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={24}
                      step={2}
                      value={backupHours}
                      onChange={(e) => setBackupHours(Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E61C24]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500 mt-3 font-semibold">
                      <span>{tr("4h (Short Outages)")}</span>
                      <span>{tr("12h (Standard Cuba - Overnight)")}</span>
                      <span>{tr("24h (Full Continuous)")}</span>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="border border-slate-300 text-slate-700 font-bold px-5 py-3 rounded-full hover:bg-slate-50 active:scale-95 cursor-pointer text-sm"
                    >
                      {tr("← Back")}
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold px-6 py-3.5 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer text-sm"
                    >
                      <span>{tr("Continue to Equipment")}</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 4: EXISTING EQUIPMENT */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  
                  {/* Header Indicator */}
                  <div>
                    <span className="text-[11px] font-black tracking-wider text-[#E61C24] uppercase block mb-1">
                      {tr(`STEP 4 OF 5`, `PASO 4 DE 5`, `5 में से चरण 4`)}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">
                      {tr("Do you have existing equipment?")}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-0.5 font-normal">
                      {tr("We can integrate with your current solar setup, panels, battery arrays, or generators to optimize pricing.")}
                    </p>
                  </div>

                  {/* Checklist options */}
                  <div className="space-y-3 max-w-xl mx-auto">
                    
                    {/* None */}
                    <label
                      onClick={() => handleToggleEquipment('none')}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer select-none transition-all ${
                        existingEquip.none
                          ? 'bg-[#FFF5F5] border-[#E61C24] font-black'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0B1F3A]">{tr("No, I am starting completely from scratch")}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${existingEquip.none ? 'border-[#E61C24] bg-[#E61C24]' : 'border-slate-300'}`}>
                        {existingEquip.none && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </label>

                    {/* Solar Panels */}
                    <label
                      onClick={() => handleToggleEquipment('solar')}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer select-none transition-all ${
                        existingEquip.solar
                          ? 'bg-[#FFF5F5] border-[#E61C24] font-black'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0B1F3A]">{tr("Yes, I have existing Solar Panels installed")}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${existingEquip.solar ? 'border-[#E61C24] bg-[#E61C24]' : 'border-slate-300'}`}>
                        {existingEquip.solar && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </label>

                    {/* Battery */}
                    <label
                      onClick={() => handleToggleEquipment('battery')}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer select-none transition-all ${
                        existingEquip.battery
                          ? 'bg-[#FFF5F5] border-[#E61C24] font-black'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0B1F3A]">{tr("Yes, I have batteries (lead-acid or lithium)")}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${existingEquip.battery ? 'border-[#E61C24] bg-[#E61C24]' : 'border-slate-300'}`}>
                        {existingEquip.battery && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </label>

                    {/* Generator */}
                    <label
                      onClick={() => handleToggleEquipment('generator')}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer select-none transition-all ${
                        existingEquip.generator
                          ? 'bg-[#FFF5F5] border-[#E61C24] font-black'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0B1F3A]">{tr("Yes, I own a backup diesel/gas Generator")}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${existingEquip.generator ? 'border-[#E61C24] bg-[#E61C24]' : 'border-slate-300'}`}>
                        {existingEquip.generator && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </label>

                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="border border-slate-300 text-slate-700 font-bold px-5 py-3 rounded-full hover:bg-slate-50 active:scale-95 cursor-pointer text-sm"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(5)}
                      className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold px-6 py-3.5 rounded-full flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer text-sm"
                    >
                      <span>Show Sizing Results</span>
                      <Sparkles className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 5: RESULTS */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  
                  {/* Header Indicator */}
                  <div>
                    <span className="text-[11px] font-black tracking-wider text-[#E61C24] uppercase block mb-1">
                      {tr(`STEP 5 OF 5`, `PASO 5 DE 5`, `5 में से चरण 5`)}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight">
                      {tr("Your Sizing Estimate")}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-0.5 font-normal">
                      {tr("Based on your property size, selected appliance loads, and outage backup hours.")}
                    </p>
                  </div>

                  {/* Dashboard Grid - Kilowaa Sizing Output Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                    {/* Recommended System Capacity */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          {tr("System Capacity")}
                        </span>
                        <Sun className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-amber-600">{solarKw.toFixed(1)}</span>
                        <span className="text-xs font-bold text-slate-500">kWp</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {numPanels} {tr("Panels (550W Tier-1)")}
                      </span>
                    </div>

                    {/* Daily & Monthly Generation */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          {tr("Estimated Generation")}
                        </span>
                        <Zap className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-[#0B1F3A]">{dailyGenKwh.toFixed(1)}</span>
                        <span className="text-xs font-bold text-slate-500">kWh / {tr("day")}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {tr(`~${monthlyGenKwh} kWh/mo (5.3 PSH)`, `~${monthlyGenKwh} kWh/mes (5.3 HSP)`, `~${monthlyGenKwh} kWh/माह (5.3 PSH)`)}
                      </span>
                    </div>

                    {/* Recommended Battery Capacity */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          {tr("Battery Storage")}
                        </span>
                        <BatteryCharging className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-emerald-600">{batteryKwh.toFixed(1)}</span>
                        <span className="text-xs font-bold text-slate-500">kWh</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {tr("LiFePO4 (88% DoD, ")}{backupHours}h)
                      </span>
                    </div>

                    {/* Daily Consumption */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          {tr("Daily Consumption")}
                        </span>
                        <Zap className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-[#0B1F3A]">{dailyKwh.toFixed(2)}</span>
                        <span className="text-xs font-bold text-slate-500">kWh / {tr("day")}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {tr(`~${monthlyKwh} kWh / month`, `~${monthlyKwh} kWh / mes`, `~${monthlyKwh} kWh / माह`)}
                      </span>
                    </div>

                    {/* Hybrid Inverter size */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          {tr("Hybrid Inverter")}
                        </span>
                        <Layers className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-blue-600">{inverterKw.toFixed(1)}</span>
                        <span className="text-xs font-bold text-slate-500">kW</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {tr("Split-Phase 120/240V")}
                      </span>
                    </div>

                    {/* Solar Panel Count */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          {tr("Estimated Panels")}
                        </span>
                        <Sun className="w-4 h-4 text-amber-500" />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-amber-600">{numPanels}</span>
                        <span className="text-xs font-bold text-slate-500">{tr("Modules")}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-1">
                        {tr("550W Tier-1 Monocrystalline")}
                      </span>
                    </div>

                  </div>

                  {/* Recommendation Package */}
                  <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#E61C24]/10 flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-black tracking-wider block">{tr("Recommended Tier")}</span>
                      <h4 className="text-lg font-black text-[#0B1F3A] mt-0.5">{tr(tier)} {tr("Package")}</h4>
                      <p className="text-xs text-slate-600 font-normal">{tr("Sized to protect critical loads during extensive rotational blackouts.")}</p>
                    </div>
                    <button
                      onClick={onOpenQuote}
                      className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold text-xs px-5 py-3 rounded-lg shadow-sm transition-all"
                    >
                      {tr("Get Quote for This System →")}
                    </button>
                  </div>

                  {/* Restart Buttons */}
                  <div className="flex justify-start">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-bold text-slate-500 hover:text-[#0B1F3A] transition-colors"
                    >
                      {tr("← Start Sizing Calculator Over")}
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* RIGHT COLUMN: INFORMATION SIDEBAR CARD (35% DESKTOP) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6 pr-4 sm:pr-6 lg:pr-8">
              
              {/* Photo & Content Box wrapper */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs">
                
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={rightColPhoto}
                    alt="Solar home panel installation entrance in Cuba"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content Body (Soft Blue Background) */}
                <div className="p-6 sm:p-7 bg-blue-50/50">
                  <h4 className="text-lg font-black text-[#0B1F3A] tracking-tight leading-snug mb-3">
                    {tr("A More Reliable Home in Cuba")}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed mb-6 font-normal">
                    {tr("This calculator provides a preliminary estimate based on typical usage and CubaWatt™ systems. Results help you understand your options and are not a final quote. Our team will confirm details and recommend the best solution for your home.")}
                  </p>

                  {/* 3 Feature Bullets */}
                  <div className="space-y-4 pt-4 border-t border-slate-200/60">
                    
                    {/* Bullet 1 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-xs">
                        <CheckCircle className="w-4 h-4 text-[#0B1F3A]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-[#0B1F3A]">
                          {tr("Quick & Easy")}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-normal font-normal">
                          {tr("Just a few simple questions")}
                        </p>
                      </div>
                    </div>

                    {/* Bullet 2 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-xs">
                        <Sparkles className="w-4 h-4 text-[#0B1F3A]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-[#0B1F3A]">
                          {tr("Personalized for Your Home")}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-normal font-normal">
                          {tr("See recommended system size")}
                        </p>
                      </div>
                    </div>

                    {/* Bullet 3 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-xs">
                        <Shield className="w-4 h-4 text-[#0B1F3A]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-[#0B1F3A]">
                          {tr("No Obligation")}
                        </h5>
                        <p className="text-[11px] text-slate-500 leading-normal font-normal">
                          {tr("Get your estimate, then talk to our team when you're ready")}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. VALUE PROPOSITION BAR */}
      {/* ========================================================================= */}
      <div className="bg-white border-t border-slate-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Column 1 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#0B1F3A]">{tr("Designed for Cuban Homes")}</h4>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed font-normal">{tr("Solutions built for real Cuban conditions.")}</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#0B1F3A]">{tr("Power What Matters")}</h4>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed font-normal">{tr("Keep your home comfortable, connected and secure.")}</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#0B1F3A]">{tr("Clean, Renewable Energy")}</h4>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed font-normal">{tr("Reduce generator use and fuel costs.")}</p>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#0B1F3A]">{tr("Expert Support")}</h4>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed font-normal">{tr("Our team is with you every step of the way.")}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
