import React, { useState, useId } from 'react';
import { Language, translations, t as tr } from '../i18n/translations';
import {
  Building2,
  TrendingUp,
  Coins,
  ShieldCheck,
  Zap,
  Leaf,
  BarChart3,
  Sun,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Lock,
  Play,
  Briefcase,
  ShoppingBag,
  Cpu,
  Bed,
  HeartPulse,
  BookOpen,
  HelpCircle,
  Check,
  Info,
} from 'lucide-react';

import heroCalculatorBg from '../assets/images/33.jpg';
import rightColPhoto from '../assets/images/32.jpg';

interface CommercialCalculatorSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const CommercialCalculatorSection: React.FC<CommercialCalculatorSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const isEs = lang === 'es';
  const t = translations[lang];

  // Wizard Form States
  const [businessType, setBusinessType] = useState<string>('office');
  const [facilitySize, setFacilitySize] = useState<string>('10k-25k');

  const [operatingHours, setOperatingHours] = useState<string>('8-12');
  const [backupObjective, setBackupObjective] = useState<string>('essential');
  const [existingInfrastructure, setExistingInfrastructure] = useState<string>('generator');
  
  // Step 4 Checklist State
  const [equipment, setEquipment] = useState({
    computers: true,
    lighting: true,
    hvac: false,
    refrigeration: false,
    production: false,
    medical: false,
    elevators: false,
    water_pumps: false,
    security: true,
  });

  const [otherEquipment, setOtherEquipment] = useState<string>('');
  const [showProfileResults, setShowProfileResults] = useState<boolean>(false);

  // Scroll lock effect
  React.useEffect(() => {
    // Basic interaction detection: if not on default values, lock scroll
    const isInteracting = businessType !== 'office' || facilitySize !== '10k-25k' || operatingHours !== '8-12';
    if (isInteracting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [businessType, facilitySize, operatingHours]);

  const handleToggleEquipment = (key: keyof typeof equipment) => {
    setEquipment((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Sizing and Engineering Calculation Logic for Commercial Profile (Kilowaa Cuban Commercial Sizing Model)
  // 1. Base consumption by business type (commercial baseline kWh/day)
  let baseDailyKwh = 45;
  if (businessType === 'manufacturing') baseDailyKwh = 140;
  else if (businessType === 'healthcare') baseDailyKwh = 110;
  else if (businessType === 'hospitality') baseDailyKwh = 95;
  else if (businessType === 'retail') baseDailyKwh = 60;
  else if (businessType === 'education') baseDailyKwh = 50;

  // 2. Facility Size scaling
  let sizeFactor = 1.0;
  if (facilitySize === 'under-5k') sizeFactor = 0.6;
  else if (facilitySize === '5k-10k') sizeFactor = 0.9;
  else if (facilitySize === '10k-25k') sizeFactor = 1.5;
  else if (facilitySize === '25k-50k') sizeFactor = 2.8;
  else if (facilitySize === 'over-50k') sizeFactor = 4.5;

  // 3. Continuous Operating Hours factor (8h, 12h, 24/7)
  let hrsFactor = 1.0;
  if (operatingHours === 'less-8') hrsFactor = 0.7;
  else if (operatingHours === '8-12') hrsFactor = 1.0;
  else if (operatingHours === '12-16') hrsFactor = 1.45;
  else if (operatingHours === '24-7') hrsFactor = 2.2;

  // 4. Critical equipment add-on load (HVAC, refrigeration, servers/IT, water pumps, medical, elevators)
  let equipmentLoadAddon = 0;
  if (equipment.hvac) equipmentLoadAddon += 35;
  if (equipment.refrigeration) equipmentLoadAddon += 30;
  if (equipment.production) equipmentLoadAddon += 45;
  if (equipment.medical) equipmentLoadAddon += 40;
  if (equipment.elevators) equipmentLoadAddon += 25;
  if (equipment.water_pumps) equipmentLoadAddon += 18;
  if (equipment.computers) equipmentLoadAddon += 15;
  if (equipment.lighting) equipmentLoadAddon += 12;

  // Total Daily Demand (kWh/day) and Monthly Demand (kWh/month = Daily × 30)
  const dailyKwh = Math.round((baseDailyKwh * sizeFactor * hrsFactor) + equipmentLoadAddon);
  const monthlyKwh = Math.round(dailyKwh * 30);
  
  // Kilowaa System Sizing Formula:
  // system_kW = (Daily kWh / Peak Sun Hours) / Performance Ratio
  // Cuba regional average: PSH = 5.3 hours/day, Performance Ratio = 0.77 (commercial thermal derating & inverter efficiency)
  const COMMERCIAL_PSH = 5.3;
  const COMMERCIAL_PR = 0.77;
  const requiredSolarKw = Math.round(((dailyKwh / COMMERCIAL_PSH) / COMMERCIAL_PR) * 10) / 10;

  // Daily and Monthly estimated generation
  const dailyGenKwh = Math.round(requiredSolarKw * COMMERCIAL_PSH * COMMERCIAL_PR * 10) / 10;
  const monthlyGenKwh = Math.round(dailyGenKwh * 30);

  // Solar Panel Count based on 580W Tier-1 commercial modules
  const COMM_PANEL_WATTS = 580;
  const commercialNumPanels = Math.ceil((requiredSolarKw * 1000) / COMM_PANEL_WATTS);

  // Commercial Battery Capacity Sizing:
  // battery_kWh = (Nighttime / Critical Load kWh) / Battery Depth of Discharge (DoD 0.88)
  let criticalRatio = 0.55;
  if (backupObjective === 'essential') criticalRatio = 0.45;
  else if (backupObjective === 'extended') criticalRatio = 0.75;
  else if (backupObjective === 'full') criticalRatio = 1.0;

  const COMM_BATTERY_DOD = 0.88;
  const batteryKwh = Math.round(((dailyKwh * criticalRatio) / COMM_BATTERY_DOD) * 10) / 10;
  
  // 3-Phase Commercial Inverter Sizing
  const inverterKw = Math.round(requiredSolarKw * 0.95);

  const selectIdOther = useId();

  return (
    <section id="commercial-calculator-section" className="w-full bg-[#FAFCFF] border-t border-slate-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden flex items-end min-h-[360px] md:min-h-[420px] lg:aspect-[1440/480] pb-8 sm:pb-10">
        {/* Full-width background photo of commercial Cuban facility */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCalculatorBg}
            alt="Commercial Cuban facility with solar panel installation in Havana"
            className="w-full h-full object-cover object-bottom"
          />
          {/* Subtle light transparent gradient for text contrast without darkening the city panorama */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(7, 19, 38, 0.82) 0%, rgba(7, 19, 38, 0.55) 38%, rgba(7, 19, 38, 0.1) 65%, transparent 85%)',
            }}
          />
        </div>

        {/* Content Area */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            
            {/* Left Column Text */}
            <div className="max-w-2xl text-white">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-white leading-[1.12] tracking-tight mb-2.5 drop-shadow-sm">
                {tr("Tell Us How Your Business Uses Electricity.")}
              </h1>

              {/* Subtitle */}
              <p className="text-slate-100 text-sm sm:text-base md:text-lg font-medium max-w-xl leading-relaxed drop-shadow-xs">
                {tr("CubaWatt™ will create a preliminary energy profile for your facility.")}
              </p>
            </div>

            {/* Right Column Glassmorphic Horizontal Feature Badge Bar */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/30 shrink-0 lg:mb-1 shadow-2xl text-white px-3 sm:px-4 py-3 sm:py-3.5">
              <div className="grid grid-cols-3 divide-x divide-white/30 items-center">
                
                {/* Column 1: Reliable Power */}
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
                  <Zap className="w-6 h-6 text-white mb-2 stroke-[2.2] fill-white" />
                  <span className="text-xs sm:text-sm font-black text-white leading-tight tracking-tight">
                    {tr("Reliable Power")}
                  </span>
                </div>

                {/* Column 2: Lower Operating Costs */}
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
                  <Leaf className="w-6 h-6 text-white mb-2 stroke-[2.2] fill-white" />
                  <span className="text-xs sm:text-sm font-black text-white leading-tight tracking-tight">
                    {tr("Lower Operating Costs")}
                  </span>
                </div>

                {/* Column 3: Greater Independence */}
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
                  <BarChart3 className="w-6 h-6 text-white mb-2 stroke-[2.5]" />
                  <span className="text-xs sm:text-sm font-black text-white leading-tight tracking-tight">
                    {tr("Greater Independence")}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. 2-COLUMN COMMERCIAL CALCULATOR FORM GRID */}
      {/* ========================================================================= */}
      <div className="bg-[#F8FAFC] pt-3 pb-10 sm:pb-14">
        <div className="w-full pl-4 sm:pl-6 lg:pl-10 pr-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: MULTI-STEP FORM CONTAINER (62% DESKTOP) */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6 sm:p-8">
              <div className="space-y-8">
                
                {/* Step 1: Business Type */}
                <div className="relative pl-0">
                  <div>
                    <h3 className="text-base font-black text-[#0B1F3A] leading-tight">{tr("Business Type")}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 mb-4">{tr("What best describes your organization?")}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                      {[
                        { id: 'office', name: tr('Office / Prof.'), icon: Briefcase },
                        { id: 'retail', name: tr('Retail / Comm.'), icon: ShoppingBag },
                        { id: 'manufacturing', name: tr('Mfg / Ind.'), icon: Cpu },
                        { id: 'hospitality', name: tr('Hospitality'), icon: Bed },
                        { id: 'healthcare', name: tr('Healthcare'), icon: HeartPulse },
                        { id: 'education', name: tr('Education'), icon: BookOpen },
                        { id: 'other', name: tr('Other'), icon: HelpCircle },
                      ].map((type) => {
                        const IconComp = type.icon;
                        const isSelected = businessType === type.id;
                        return (
                          <label
                            key={type.id}
                            className={`flex flex-col items-center justify-between p-3 rounded-lg border text-center cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-500/10'
                                : 'border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="business-type"
                              value={type.id}
                              checked={isSelected}
                              onChange={() => setBusinessType(type.id)}
                              className="sr-only"
                            />
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1.5 ${isSelected ? 'text-blue-600 bg-white shadow-xs' : 'text-slate-500'}`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-black text-[#0B1F3A] leading-tight block break-words">
                              {type.name}
                            </span>
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center mt-2 ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 2: Facility Size */}
                <div className="relative pl-0">
                  <div>
                    <h3 className="text-base font-black text-[#0B1F3A] leading-tight">{tr("Facility Size")}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 mb-3">{tr("What is the approximate total area of your facility?")}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'under-5k', label: tr('< 5,000 ft²') },
                        { id: '5k-10k', label: tr('5,000 – 10,000 ft²') },
                        { id: '10k-25k', label: tr('10,000 – 25,000 ft²') },
                        { id: '25k-50k', label: tr('25,000 – 50,000 ft²') },
                        { id: 'over-50k', label: tr('> 50,000 ft²') },
                      ].map((size) => {
                        const isSelected = facilitySize === size.id;
                        return (
                          <label
                            key={size.id}
                            className={`px-4 py-2.5 rounded-full border text-xs font-bold cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="facility-size"
                              value={size.id}
                              checked={isSelected}
                              onChange={() => setFacilitySize(size.id)}
                              className="sr-only"
                            />
                            <span>{size.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 3: Operating Hours */}
                <div className="relative pl-0">
                  <div>
                    <h3 className="text-base font-black text-[#0B1F3A] leading-tight">{tr("Operating Hours")}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 mb-3">{tr("When is your facility typically in operation?")}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'less-8', label: tr('Less than 8 hours/day') },
                        { id: '8-12', label: tr('8–12 hours/day') },
                        { id: '12-16', label: tr('12–16 hours/day') },
                        { id: '24-7', label: tr('24/7 (Continuous)') },
                      ].map((hr) => {
                        const isSelected = operatingHours === hr.id;
                        return (
                          <label
                            key={hr.id}
                            className={`px-4 py-2.5 rounded-full border text-xs font-bold cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="operating-hours"
                              value={hr.id}
                              checked={isSelected}
                              onChange={() => setOperatingHours(hr.id)}
                              className="sr-only"
                            />
                            <span>{hr.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 4: Critical Equipment */}
                <div className="relative pl-0">
                  <div>
                    <h3 className="text-base font-black text-[#0B1F3A] leading-tight">{tr("Critical Equipment")}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 mb-4">{tr("What equipment or systems are essential to keep running? (Select all that apply)")}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { id: 'computers', label: tr('Computers / IT Systems') },
                        { id: 'lighting', label: tr('Lighting') },
                        { id: 'hvac', label: tr('HVAC (Air Conditioning)') },
                        { id: 'refrigeration', label: tr('Refrigeration') },
                        { id: 'production', label: tr('Production Equipment') },
                        { id: 'medical', label: tr('Medical Equipment') },
                        { id: 'elevators', label: tr('Elevators') },
                        { id: 'water_pumps', label: tr('Water Pumps') },
                        { id: 'security', label: tr('Security Systems') },
                      ].map((item) => {
                        const isChecked = equipment[item.id as keyof typeof equipment];
                        return (
                          <label
                            key={item.id}
                            className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                              isChecked
                                ? 'bg-blue-50/20 border-blue-500/30'
                                : 'bg-white border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleToggleEquipment(item.id as keyof typeof equipment)}
                                className="w-5 h-5 rounded-md accent-blue-600 cursor-pointer animate-in fade-in"
                              />
                              <span className="text-xs sm:text-sm font-extrabold text-slate-800">{item.label}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>

                    {/* Other Custom Input Field */}
                    <div className="mt-4 pt-3 flex flex-col sm:flex-row gap-3 items-stretch">
                      <div className="sm:w-1/3">
                        <span className="text-xs font-black uppercase text-slate-500 block mb-1">{tr("Known Kilowatt Consumption")}</span>
                        <input
                          type="text"
                          disabled
                          value={tr("Kilowatts (kW)")}
                          className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3.5 py-3 text-xs font-bold text-slate-500 outline-hidden"
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor={selectIdOther} className="text-xs font-black uppercase text-slate-500 block mb-1">{tr("Enter value")}</label>
                        <input
                          id={selectIdOther}
                          type="text"
                          value={otherEquipment}
                          onChange={(e) => setOtherEquipment(e.target.value)}
                          placeholder={tr("e.g., lab equipment, communications, server closet, etc.")}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-3.5 py-3 text-xs font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5: Backup Objective */}
                <div className="relative pl-0">
                  <div>
                    <h3 className="text-base font-black text-[#0B1F3A] leading-tight">{tr("Backup Objective")}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 mb-4">{tr("What is your primary goal for backup power?")}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'essential', title: tr('Essential systems only'), subtitle: tr('(critical loads)') },
                        { id: 'extended', title: tr('Extended backup'), subtitle: tr('(majority of facility)') },
                        { id: 'full', title: tr('Full facility backup'), subtitle: tr('(24/7 operation)') },
                      ].map((obj) => {
                        const isSelected = backupObjective === obj.id;
                        return (
                          <label
                            key={obj.id}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-500/10'
                                : 'border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="backup-objective"
                              value={obj.id}
                              checked={isSelected}
                              onChange={() => setBackupObjective(obj.id)}
                              className="sr-only"
                            />
                            <span className="text-xs font-black text-[#0B1F3A] block leading-tight">
                              {obj.title}
                            </span>
                            <span className="text-[10px] text-slate-500 block font-normal leading-normal mt-0.5">
                              {obj.subtitle}
                            </span>
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center mt-3 ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 6: Existing Infrastructure */}
                <div className="relative pl-0">
                  <div>
                    <h3 className="text-base font-black text-[#0B1F3A] leading-tight">{tr("Existing Infrastructure")}</h3>
                    <p className="text-slate-500 text-xs mt-0.5 mb-3">{tr("What best describes your current electrical and energy setup?")}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'utility', label: tr('Standard utility connection (UNE)') },
                        { id: 'generator', label: tr('Existing generator(s)') },
                        { id: 'solar', label: tr('Existing solar system') },
                        { id: 'none', label: tr('No existing system') },
                        { id: 'not_sure', label: tr('Not sure') },
                      ].map((infra) => {
                        const isSelected = existingInfrastructure === infra.id;
                        return (
                          <label
                            key={infra.id}
                            className={`px-4 py-2.5 rounded-full border text-xs font-bold cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="existing-infrastructure"
                              value={infra.id}
                              checked={isSelected}
                              onChange={() => setExistingInfrastructure(infra.id)}
                              className="sr-only"
                            />
                            <span>{infra.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Primary Sizing CTA Action Button */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <button
                    onClick={() => setShowProfileResults(true)}
                    className="w-full bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base active:scale-98 cursor-pointer"
                  >
                    <span>{tr("Generate My Commercial Energy Profile →")}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px]">
                    <Lock className="w-3.5 h-3.5 shrink-0" />
                    <span>{tr("Your information is secure and will only be used to create your preliminary energy profile")}</span>
                  </div>
                </div>

                {/* Dynamic Commercial Energy Profile Calculation Results Box */}
                {showProfileResults && (
                  <div className="bg-[#071326] text-white p-6 rounded-2xl border border-slate-800 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-slate-400 block mb-1">{tr("PRELIMINARY PROFILE REPORT")}</span>
                        <h4 className="text-lg font-black text-white">{tr("Estimated Commercial Requirements")}</h4>
                      </div>
                      <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-500/30 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                        {tr(businessType)} {tr("Facility Sizing")}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
                      
                      {/* recommended capacity */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block mb-1">
                          {tr("System Capacity")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-amber-400">{requiredSolarKw}</span>
                          <span className="text-[10px] font-bold text-slate-400">kWp</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {commercialNumPanels} {tr("Panels (580W Tier-1)")}
                        </span>
                      </div>

                      {/* estimated daily & monthly generation */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block mb-1">
                          {tr("Estimated Generation")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">{dailyGenKwh}</span>
                          <span className="text-[10px] font-bold text-slate-400">kWh/{tr("day")}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {tr(`~${monthlyGenKwh} kWh/mo (5.3 PSH)`, `~${monthlyGenKwh} kWh/mes (5.3 HSP)`, `~${monthlyGenKwh} kWh/माह (5.3 PSH)`)}
                        </span>
                      </div>

                      {/* battery storage */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block mb-1">
                          {tr("Battery Storage")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-emerald-400">{batteryKwh}</span>
                          <span className="text-[10px] font-bold text-slate-400">kWh</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {tr("Commercial LiFePO4 (88% DoD)")}
                        </span>
                      </div>

                      {/* demand */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block mb-1">
                          {tr("Daily Facility Load")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-white">{dailyKwh}</span>
                          <span className="text-[10px] font-bold text-slate-400">kWh/{tr("day")}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {tr(`~${monthlyKwh} kWh / month`, `~${monthlyKwh} kWh / mes`, `~${monthlyKwh} kWh / माह`)}
                        </span>
                      </div>

                      {/* 3-phase commercial inverter */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block mb-1">
                          {tr("3-Phase Inverter")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-blue-400">{inverterKw}</span>
                          <span className="text-[10px] font-bold text-slate-400">kW</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {tr("208V / 480V Commercial")}
                        </span>
                      </div>

                      {/* panel count */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block mb-1">
                          {tr("Estimated Panels")}
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-amber-400">{commercialNumPanels}</span>
                          <span className="text-[10px] font-bold text-slate-400">{tr("Modules")}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1">
                          {tr("580W Bifacial Tier-1")}
                        </span>
                      </div>

                    </div>

                    <div className="p-4 bg-blue-50/10 border border-blue-500/10 rounded-xl flex items-start gap-3">
                      <Info className="w-4.5 h-4.5 text-blue-300 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-200 leading-relaxed font-normal">
                        {tr("Engineering Consultation Recommended: For commercial facilities, precise energy mapping and transformer configurations are critical. Our specialized commercial engineers will run on-site grid diagnostics to optimize sizing and cost clearance.")}
                      </p>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button
                        onClick={onOpenQuote}
                        className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold text-xs px-6 py-3 rounded-lg shadow-sm transition-all"
                      >
                        {tr("Request Professional Consultation →")}
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: VALUE PROPOSITION CARD (38% DESKTOP) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6 pr-4 sm:pr-6 lg:pr-8">
              
              {/* Photo & Content Card Body */}
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs">
                
                {/* Top Photo: Restaurant exterior with rooftop solar panels */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={rightColPhoto}
                    alt="Cuba Commercial hotel or restaurant with solar panels"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 bg-white">
                  <h4 className="text-lg font-black text-[#0B1F3A] tracking-tight leading-snug mb-3">
                    {tr("Cleaner, More Reliable Power for Your Business")}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed mb-6 font-normal">
                    {tr("CubaWatt™ designs and delivers integrated solar and battery solutions for commercial facilities across Cuba — from offices and retail to industrial and hospitality. This calculator provides a preliminary energy profile based on your inputs.")}
                  </p>

                  {/* 3 Feature Bullets with blue icons */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    
                    {/* Bullet 1 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-[#0B1F3A]">
                          {tr("Preliminary Energy Profile")}
                        </h5>
                      </div>
                    </div>

                    {/* Bullet 2 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-[#0B1F3A]">
                          {tr("Tailored to Your Operation")}
                        </h5>
                      </div>
                    </div>

                    {/* Bullet 3 */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="text-xs font-black text-[#0B1F3A]">
                          {tr("Next Step: Professional Engineering")}
                        </h5>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Blue Banner with Hard Hat Icon */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-150 rounded-xl flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm font-black text-lg">
                      👷
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-[#0B1F3A] mb-0.5">
                        {tr("Final Design Follows Consultation")}
                      </h5>
                      <p className="text-[10px] text-slate-600 leading-relaxed font-normal">
                        {tr("This calculator provides a preliminary estimate. Final system design, equipment selection, and pricing will be developed after a consultation with our team and a detailed review of your facility.")}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
