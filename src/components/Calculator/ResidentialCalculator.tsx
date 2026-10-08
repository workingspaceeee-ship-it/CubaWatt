import React, { useState, useId } from 'react';
import {
  Sun,
  BatteryCharging,
  Zap,
  Cpu,
  Clock,
  ShieldCheck,
  ArrowRight,
  Info,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Language, translations } from '../../i18n/translations';

interface ApplianceConfig {
  id: string;
  name: string;
  nameEs: string;
  nameHi?: string;
  icon: string;
  watts: number;
  defaultHours: number;
  dutyFactor?: number;
  enabled: boolean;
  hours: number;
  categoryNote?: string;
}

interface ResidentialCalculatorProps {
  lang: Language;
  onProceedToQuote: (calculatedData?: {
    dailyKwh: number;
    solarKw: number;
    batteryKwh: number;
    inverterKw: number;
    tier: string;
  }) => void;
  isModal?: boolean;
}

export const ResidentialCalculator: React.FC<ResidentialCalculatorProps> = ({
  lang,
  onProceedToQuote,
  isModal = false,
}) => {
  const t = translations[lang];

  // 1. Initial Appliance Database matching Caribbean solar engineering specifications
  const initialAppliances: ApplianceConfig[] = [
    {
      id: 'led_lights',
      name: 'LED Lights (4–6 Bulbs)',
      nameEs: 'Luces LED (4–6 Bombillos)',
      nameHi: 'एलईडी लाइट्स (4–6 बल्ब)',
      icon: '💡',
      watts: 100,
      defaultHours: 8,
      dutyFactor: 1.0,
      enabled: true,
      hours: 8,
      categoryNote: 'Interior & exterior illumination',
    },
    {
      id: 'refrigerator',
      name: 'Refrigerator / Freezer (Inverter/Standard)',
      nameEs: 'Refrigerador / Congelador (Inverter/Estándar)',
      nameHi: 'रेफ्रिजरेटर / फ्रीजर (इनवर्टर/मानक)',
      icon: '🧊',
      watts: 180,
      defaultHours: 24,
      dutyFactor: 0.5, // Cyclic ~50% duty factor = 2.16 kWh/day at 24h
      enabled: true,
      hours: 24,
      categoryNote: 'Continuous cyclic cooling (~50% duty cycle)',
    },
    {
      id: 'fans',
      name: 'Standing / Ceiling Fans (2x)',
      nameEs: 'Ventiladores de Pie / Techo (2x)',
      nameHi: 'स्टैंड / सीलिंग पंखे (2x)',
      icon: '🌀',
      watts: 120,
      defaultHours: 10,
      dutyFactor: 1.0,
      enabled: true,
      hours: 10,
      categoryNote: 'Dual continuous airflow comfort',
    },
    {
      id: 'tv_wifi',
      name: 'Smart TV & WiFi Router',
      nameEs: 'Smart TV y Router WiFi',
      nameHi: 'स्मार्ट टीवी व वाईफाई राउटर',
      icon: '📺',
      watts: 150,
      defaultHours: 6,
      dutyFactor: 1.0,
      enabled: true,
      hours: 6,
      categoryNote: 'Family entertainment & connectivity',
    },
    {
      id: 'water_pump',
      name: 'Water Pump (1/2 HP / Turbina)',
      nameEs: 'Bomba de Agua (1/2 HP / Turbina)',
      nameHi: 'पानी का पंप (1/2 HP / टर्बाइन)',
      icon: '🚰',
      watts: 500,
      defaultHours: 1,
      dutyFactor: 1.0,
      enabled: false,
      hours: 1,
      categoryNote: 'High inductive motor start load',
    },
    {
      id: 'split_ac',
      name: 'Split AC Unit (9,000 BTU Inverter)',
      nameEs: 'Aire Acondicionado Split (9,000 BTU Inverter)',
      nameHi: 'स्प्लिट एसी (9,000 BTU इनवर्टर)',
      icon: '❄️',
      watts: 1000,
      defaultHours: 8,
      dutyFactor: 1.0,
      enabled: false,
      hours: 8,
      categoryNote: 'Night cooling & climate comfort',
    },
  ];

  const [appliances, setAppliances] = useState<ApplianceConfig[]>(initialAppliances);
  const [autonomyHours, setAutonomyHours] = useState<number>(12);

  // Toggle appliance enable state
  const handleToggleAppliance = (id: string) => {
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, enabled: !app.enabled } : app))
    );
  };

  // Adjust operating hours
  const handleHoursChange = (id: string, newHours: number) => {
    const clamped = Math.max(0.5, Math.min(24, Math.round(newHours * 2) / 2));
    setAppliances((prev) =>
      prev.map((app) => (app.id === id ? { ...app, hours: clamped } : app))
    );
  };

  // ----------------------------------------------------------------------
  // TECHNICAL CALCULATION LOGIC & ACCURACY (PURE JAVASCRIPT)
  // Standard Caribbean solar engineering formulas
  // ----------------------------------------------------------------------

  // 1. Total Daily Energy Demand (kWh/day) & Monthly
  const dailyKwh = appliances.reduce((acc, app) => {
    if (!app.enabled) return acc;
    const factor = app.dutyFactor ?? 1.0;
    const appWh = app.watts * app.hours * factor;
    return acc + appWh / 1000;
  }, 0);
  const monthlyKwh = Math.round(dailyKwh * 30);

  // 2. Kilowaa Required Solar Panel Capacity (kWp):
  // system_kW = (Daily kWh / Peak Sun Hours) / Performance Ratio
  // Cuba regional average: PSH = 5.3 hours/day, Performance Ratio = 0.78
  const PEAK_SUN_HOURS = 5.3;
  const PERFORMANCE_RATIO = 0.78;
  const rawSolarKwp = dailyKwh > 0 ? (dailyKwh / PEAK_SUN_HOURS) / PERFORMANCE_RATIO : 0;
  const recommendedSolarKwp = dailyKwh > 0 ? Math.max(1.1, Math.round(rawSolarKwp * 10) / 10) : 0;
  
  // Generation estimates
  const dailyGenKwh = Math.round(recommendedSolarKwp * PEAK_SUN_HOURS * PERFORMANCE_RATIO * 10) / 10;
  const monthlyGenKwh = Math.round(dailyGenKwh * 30);

  // Number of modern 550W Tier-1 Monocrystalline Panels
  const PANEL_WATTS = 550;
  const numPanels =
    recommendedSolarKwp > 0
      ? Math.max(2, Math.ceil((recommendedSolarKwp * 1000) / PANEL_WATTS))
      : 0;

  // 3. Recommended Battery Storage (kWh)
  // battery_kWh = (Nighttime / Critical Load kWh) / Battery Depth of Discharge (DoD 0.88)
  const BATTERY_DOD = 0.88;
  const rawBatteryKwh = dailyKwh > 0 ? (dailyKwh * (autonomyHours / 24)) / BATTERY_DOD : 0;
  const recommendedBatteryKwh =
    dailyKwh > 0 ? Math.max(2.5, Math.ceil(rawBatteryKwh * 2) / 2) : 0;

  // 4. Hybrid Inverter Sizing (kW)
  // Max Instantaneous Peak Power (Watts of all active checked appliances) × 1.25 (Surge safety margin) / 1000
  const peakLoadWatts = appliances.reduce((acc, app) => {
    return app.enabled ? acc + app.watts : acc;
  }, 0);
  const rawInverterKw = peakLoadWatts > 0 ? (peakLoadWatts * 1.25) / 1000 : 0;
  // Standard market ratings: 3.5 kW, 5.0 kW, 6.0 kW, 8.0 kW, 10.0 kW
  let recommendedInverterKw = 3.5;
  if (rawInverterKw > 7.0) {
    recommendedInverterKw = 10.0;
  } else if (rawInverterKw > 5.0) {
    recommendedInverterKw = 8.0;
  } else if (rawInverterKw > 4.0) {
    recommendedInverterKw = 6.0;
  } else if (rawInverterKw > 2.8) {
    recommendedInverterKw = 5.0;
  } else if (dailyKwh === 0) {
    recommendedInverterKw = 0;
  }

  // 5. Dynamic Package Tier Recommendation Badge
  let tierBadge = {
    name: 'Essential',
    nameEs: 'Esencial',
    color: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
    description: 'Practical coverage for basic family needs',
  };
  if (dailyKwh > 8.0) {
    tierBadge = {
      name: 'Whole Home',
      nameEs: 'Hogar Completo',
      color: 'bg-indigo-500/10 text-indigo-700 border-indigo-300',
      description: 'Comprehensive high-power & climate capacity',
    };
  } else if (dailyKwh > 3.5) {
    tierBadge = {
      name: 'Family',
      nameEs: 'Familiar',
      color: 'bg-blue-500/10 text-blue-700 border-blue-300',
      description: 'Balanced power for whole family appliances',
    };
  }

  const selectId = useId();

  return (
    <div
      id="residential-calculator"
      className={`w-full bg-[#FAFCFF] ${
        isModal ? '' : 'py-12 sm:py-16 border-t border-slate-200'
      }`}
    >
      <div className={`${isModal ? 'p-0' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {/* Header Block */}
        {!isModal && (
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E61C24] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-[#E61C24]">
                CARIBBEAN SOLAR SIZING ENGINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight mb-3">
              Residential Solar & Battery Calculator
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Customize your household appliances and blackout backup hours. Our Caribbean solar
              algorithms compute real-time PV generation, LiFePO4 battery capacity, and hybrid
              inverter requirements calibrated for Cuba.
            </p>
          </div>
        )}

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT CARD: INPUTS & APPLIANCE CHECKLIST (50% DESKTOP) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-7">
            
            {/* Outage Autonomy Dropdown Setting */}
            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={selectId}
                  className="text-xs font-black uppercase tracking-wider text-[#0B1F3A] flex items-center gap-2"
                >
                  <Clock className="w-4 h-4 text-[#E61C24]" />
                  <span>Outage Autonomy Setting</span>
                </label>
                <span className="text-xs font-bold text-slate-500">
                  Target: <strong className="text-[#0B1F3A]">{autonomyHours} Hours</strong>
                </span>
              </div>

              <div className="relative">
                <select
                  id={selectId}
                  value={autonomyHours}
                  onChange={(e) => setAutonomyHours(Number(e.target.value))}
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm font-bold text-[#0B1F3A] focus:outline-hidden focus:ring-2 focus:ring-[#0B1F3A]/20 transition-all cursor-pointer"
                >
                  <option value={6}>6 Hours — Emergency Backup (Peak Blackout Hours)</option>
                  <option value={12}>12 Hours — Overnight Backup (Standard Cuba Rotation - Default)</option>
                  <option value={24}>24 Hours — Continuous Off-Grid Backup (Full Autonomy)</option>
                </select>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 font-normal">
                Determines how many hours your household can run solely on LiFePO4 stored battery power during grid failures.
              </p>
            </div>

            {/* Appliance Load Checklist */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#0B1F3A]">
                  Household Appliances
                </span>
                <span className="text-xs text-slate-500">
                  Toggle on/off & fine-tune daily hours
                </span>
              </div>

              {appliances.map((app) => (
                <div
                  key={app.id}
                  className={`p-4 rounded-xl border transition-all ${
                    app.enabled
                      ? 'bg-white border-[#0B1F3A]/30 shadow-xs ring-1 ring-[#0B1F3A]/10'
                      : 'bg-[#F8FAFC] border-[#E2E8F0] opacity-75'
                  }`}
                >
                  {/* Top row: Checkbox, Name, Wattage indicator */}
                  <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-3 cursor-pointer flex-1 select-none">
                      <input
                        type="checkbox"
                        checked={app.enabled}
                        onChange={() => handleToggleAppliance(app.id)}
                        className="w-5 h-5 rounded-md accent-[#0B1F3A] text-white cursor-pointer"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{app.icon}</span>
                        <div>
                          <div className="text-sm font-extrabold text-[#0B1F3A] leading-tight">
                            {lang === 'es' ? app.nameEs : app.name}
                          </div>
                          {app.categoryNote && (
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {app.categoryNote}
                            </div>
                          )}
                        </div>
                      </div>
                    </label>

                    {/* Wattage Badge */}
                    <div className="text-right shrink-0">
                      <span className="inline-block bg-slate-100 text-slate-700 text-xs font-black px-2.5 py-1 rounded-md border border-slate-200">
                        {app.watts}W
                      </span>
                    </div>
                  </div>

                  {/* Bottom row: Operating Hours Slider & Input */}
                  {app.enabled && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                      <div className="flex-1 flex items-center gap-3">
                        <span className="text-[11px] font-bold text-slate-600 whitespace-nowrap">
                          Operating:
                        </span>
                        <input
                          type="range"
                          min={1}
                          max={24}
                          step={1}
                          value={app.hours}
                          onChange={(e) => handleHoursChange(app.id, Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E61C24]"
                        />
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <input
                          type="number"
                          min={0.5}
                          max={24}
                          step={0.5}
                          value={app.hours}
                          onChange={(e) => handleHoursChange(app.id, Number(e.target.value))}
                          className="w-14 px-2 py-1 text-xs font-black text-center text-[#0B1F3A] bg-[#F8FAFC] border border-[#E2E8F0] rounded-md focus:outline-hidden"
                        />
                        <span className="text-xs font-bold text-slate-500">hrs/day</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Helper Note */}
            <div className="mt-6 p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#0B1F3A] shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-700 leading-relaxed">
                <strong>Cuba Duty Cycle Note:</strong> Refrigerators cycle on and off automatically (~50% duty factor = 2.16 kWh/day). Water pumps run intermittently for tank elevation. Split AC power requirements reflect modern inverter compressor efficiency.
              </p>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT CARD: RESULTS DASHBOARD & METRICS (50% DESKTOP) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Main Dark Dashboard Card */}
            <div className="bg-[#0B1F3A] text-white rounded-2xl shadow-xl border border-slate-800 p-6 sm:p-8 relative overflow-hidden">
              
              {/* Background Glow Accents */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header inside Dashboard */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                    ENGINEERING SIZING RESULTS
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Recommended System
                  </h3>
                </div>

                {/* Package Tier Badge */}
                <div
                  className={`px-3.5 py-1.5 rounded-full border text-xs font-black flex items-center gap-1.5 ${tierBadge.color}`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'es' ? tierBadge.nameEs : tierBadge.name} Package
                  </span>
                </div>
              </div>

              {/* 4 Primary Metric Cards */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                {/* 1. Total Daily Energy Demand */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4.5 backdrop-blur-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-slate-300">Daily Demand</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-white tracking-tight">
                      {dailyKwh.toFixed(2)}
                    </span>
                    <span className="text-xs font-bold text-slate-400">kWh / day</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Based on selected hours & duty cycles
                  </span>
                </div>

                {/* 2. Solar PV Capacity */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4.5 backdrop-blur-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-slate-300">Solar Array</span>
                    <Sun className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-amber-400 tracking-tight">
                      {recommendedSolarKwp.toFixed(1)}
                    </span>
                    <span className="text-xs font-bold text-slate-400">kWp</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1 font-semibold">
                    {numPanels}x 550W Tier-1 Mono Panels
                  </span>
                </div>

                {/* 3. Battery Storage Capacity */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4.5 backdrop-blur-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-slate-300">Battery Storage</span>
                    <BatteryCharging className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-emerald-400 tracking-tight">
                      {recommendedBatteryKwh.toFixed(1)}
                    </span>
                    <span className="text-xs font-bold text-slate-400">kWh</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1 font-semibold">
                    LiFePO4 (80% Depth-of-Discharge)
                  </span>
                </div>

                {/* 4. Hybrid Inverter Sizing */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4.5 backdrop-blur-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-slate-300">Hybrid Inverter</span>
                    <Cpu className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black text-blue-300 tracking-tight">
                      {recommendedInverterKw.toFixed(1)}
                    </span>
                    <span className="text-xs font-bold text-slate-400">kW</span>
                  </div>
                  <span className="text-[10px] text-slate-300 block mt-1 font-semibold">
                    110V/220V Split-Phase Pure Sine Wave
                  </span>
                </div>

              </div>

              {/* Turnkey Features Checklist */}
              <div className="relative z-10 pt-4 border-t border-white/10 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Guaranteed {autonomyHours}-hour continuous blackout autonomy at selected load
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Dual voltage 110V & 220V breaker panel integration for Cuban homes
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Full US export compliance, Havana customs clearance & certified local install
                  </span>
                </div>
              </div>

              {/* Primary Call-to-Action */}
              <div className="relative z-10 pt-2">
                <button
                  onClick={() =>
                    onProceedToQuote({
                      dailyKwh,
                      solarKw: recommendedSolarKwp,
                      batteryKwh: recommendedBatteryKwh,
                      inverterKw: recommendedInverterKw,
                      tier: tierBadge.name,
                    })
                  }
                  className="w-full bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base active:scale-98 cursor-pointer"
                >
                  <span>Get a Tailored Quote for This System →</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Engineering Disclaimer Card */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-4.5 text-slate-600 text-[11px] leading-relaxed shadow-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0B1F3A] block mb-0.5">
                  Engineering Calibration & Calculation Assumptions
                </strong>
                Calculations assume <strong>5.0 Peak Sun Hours (PSH)</strong> annual irradiance in Cuba,
                a <strong>25% system derating factor</strong> for cabling, thermal coefficients, and dust,
                and an <strong>80% Depth-of-Discharge (DoD)</strong> safety threshold on Grade-A
                Lithium Iron Phosphate (LiFePO4) battery cells to deliver 6,000+ cycle operational longevity.
                Actual production varies by roof angle, shading, and geographic orientation.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
