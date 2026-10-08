import React, { useState, useId } from 'react';
import { Language, translations } from '../i18n/translations';
import {
  Handshake,
  Settings,
  ShieldCheck,
  Home,
  Building,
  Headphones,
  Mail,
  Phone,
  Check,
  Lock,
  ArrowRight,
  Globe,
  MapPin,
  MessageSquare,
  Users,
} from 'lucide-react';

import heroContactBg from '../assets/images/39.jpg';
import cardHomeImg from '../assets/images/36.jpg';
import cardBusinessImg from '../assets/images/37.jpg';
import cardSupportImg from '../assets/images/Services.jpg';
import bottomBannerBg from '../assets/images/40.jpg';

interface ContactUsSectionProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenHowItWorks?: () => void;
}

export const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  lang,
  onOpenQuote,
  onOpenHowItWorks,
}) => {
  const t = translations[lang];

  // Contact Form States
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email && message) {
      setIsSubmitted(true);
    }
  };

  const selectIdCountry = useId();
  const selectIdProj = useId();

  return (
    <section id="contact-us-section" className="w-full bg-[#FAFCFF] border-t border-slate-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-[#071326] overflow-hidden flex items-end min-h-[480px] md:min-h-[540px] lg:aspect-[1376/600] pb-10 sm:pb-14">
        {/* Full-width background photo of solar technicians on Cuban rooftop */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroContactBg}
            alt={t.contactSection.altHero}
            className="w-full h-full object-cover object-center"
          />
          {/* Left side deep navy gradient overlay mask */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(7, 19, 38, 0.98) 0%, rgba(7, 19, 38, 0.88) 45%, rgba(7, 19, 38, 0.4) 75%, transparent 100%)',
            }}
          />
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-black text-white leading-[1.12] tracking-tight mb-3">
              {t.contactSection.title}
              <br />
              <span className="text-[#E61C24]">{t.contactSection.titleHighlight}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium max-w-xl leading-relaxed mb-8">
              {t.contactSection.subtitle}
            </p>

            {/* 3 Feature Badges */}
            <div className="flex flex-wrap gap-4 max-w-2xl">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5 bg-slate-900/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <Handshake className="w-4 h-4 text-[#E61C24] shrink-0" />
                <span className="text-[11px] font-black text-white tracking-wider uppercase">
                  {t.contactSection.badge1}
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5 bg-slate-900/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <Settings className="w-4 h-4 text-[#E61C24] shrink-0" />
                <span className="text-[11px] font-black text-white tracking-wider uppercase">
                  {t.contactSection.badge2}
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5 bg-slate-900/50 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#E61C24] shrink-0" />
                <span className="text-[11px] font-black text-white tracking-wider uppercase">
                  {t.contactSection.badge3}
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. PROJECT TYPE SELECTOR */}
      {/* ========================================================================= */}
      <section className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 bg-[#E61C24] rounded-full" />
            <span className="text-[#E61C24] font-black text-xs tracking-wider uppercase">
              {t.contactSection.helpLabel}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight mb-2">
            {t.contactSection.helpTitle}
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            {t.contactSection.helpSubtitle}
          </p>
        </div>

        {/* 3-Column Equal Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          
          {/* Card 1: Power a Home */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
              <img
                src={cardHomeImg}
                alt="Cuba residential solar home"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            
            {/* Curved Content Area */}
            <div className="flex-1 bg-white relative -mt-12 pt-10 px-6 pb-6 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-16 -translate-y-[98%] pointer-events-none">
                <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="w-full h-full fill-current text-white">
                  <path d="M0,20 C120,60 280,0 400,20 L400,60 L0,60 Z" />
                </svg>
              </div>

              {/* Floating Icon Badge */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-md z-20">
                <Home className="w-6 h-6 text-[#0B1F3A]" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-[#0B1F3A] mb-2 mt-2 leading-tight">
                  {t.contactSection.card1Title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {t.contactSection.card1Desc}
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={onOpenQuote}
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-[#E61C24] text-[#0B1F3A] hover:text-white border border-blue-100/60 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Power a Business */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
              <img
                src={cardBusinessImg}
                alt="Cuba commercial solar business"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            
            {/* Curved Content Area */}
            <div className="flex-1 bg-white relative -mt-12 pt-10 px-6 pb-6 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-16 -translate-y-[98%] pointer-events-none">
                <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="w-full h-full fill-current text-white">
                  <path d="M0,20 C120,60 280,0 400,20 L400,60 L0,60 Z" />
                </svg>
              </div>

              {/* Floating Icon Badge */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-md z-20">
                <Building className="w-6 h-6 text-[#0B1F3A]" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-[#0B1F3A] mb-2 mt-2 leading-tight">
                  {t.contactSection.card2Title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {t.contactSection.card2Desc}
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={onOpenQuote}
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-[#E61C24] text-[#0B1F3A] hover:text-white border border-blue-100/60 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Existing Customer Support */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
              <img
                src={cardSupportImg}
                alt="Cuba solar inverter servicing Support technician"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            
            {/* Curved Content Area */}
            <div className="flex-1 bg-white relative -mt-12 pt-10 px-6 pb-6 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-16 -translate-y-[98%] pointer-events-none">
                <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="w-full h-full fill-current text-white">
                  <path d="M0,20 C120,60 280,0 400,20 L400,60 L0,60 Z" />
                </svg>
              </div>

              {/* Floating Icon Badge */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-md z-20">
                <Headphones className="w-6 h-6 text-[#0B1F3A]" />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-[#0B1F3A] mb-2 mt-2 leading-tight">
                  {t.contactSection.card3Title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {t.contactSection.card3Desc}
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={onOpenQuote}
                  className="w-10 h-10 rounded-full bg-blue-50 hover:bg-[#E61C24] text-[#0B1F3A] hover:text-white border border-blue-100/60 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CONTACT FORM & DIRECT CONTACT INFO */}
      {/* ========================================================================= */}
      <div className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: PROJECT INFORMATION FORM (62% DESKTOP) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6 sm:p-8 flex flex-col justify-between">
              
              {isSubmitted ? (
                <div className="text-center py-16 px-4 space-y-4 my-auto animate-in fade-in">
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-[#0B1F3A]">{t.contactSection.formSuccessTitle}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-normal">
                    {t.contactSection.formSuccessDesc}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="text-xs font-bold text-[#E61C24] hover:underline"
                  >
                    {t.contactSection.formSuccessButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Form Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-8 h-1 bg-[#E61C24] rounded-full" />
                      <span className="text-[#E61C24] font-black text-[11px] tracking-wider uppercase">
                        {t.contactSection.formLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#0B1F3A] leading-tight">
                      {t.contactSection.formTitle}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] font-normal leading-relaxed mt-0.5">
                      {t.contactSection.formSubtitle}
                    </p>
                  </div>

                  {/* 2x3 Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                        {t.contactSection.formName}
                      </label>
                      <input
                        required
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor={selectIdCountry} className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                        {t.contactSection.formCountry}
                      </label>
                      <div className="relative">
                        <select
                          id={selectIdCountry}
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-xs font-bold text-[#0B1F3A] focus:outline-hidden"
                        >
                          <option value="">{t.common.select}</option>
                          <option value="United States">{t.contactSection.countries.us}</option>
                          <option value="Cuba">{t.contactSection.countries.cuba}</option>
                          <option value="Spain">{t.contactSection.countries.spain}</option>
                          <option value="Canada">{t.contactSection.countries.canada}</option>
                          <option value="Mexico">{t.contactSection.countries.mexico}</option>
                          <option value="Other">{t.contactSection.countries.other}</option>
                        </select>
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                        {t.contactSection.formEmail}
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@yourcompany.com"
                        className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                      />
                    </div>

                    {/* Phone or WhatsApp */}
                    <div>
                      <label className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                        {t.contactSection.formPhone}
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 305 555 1234"
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-xs font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Project Location */}
                    <div>
                      <label className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                        {t.contactSection.formLocation}
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="City, province, or specific address"
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-xs font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                        />
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor={selectIdProj} className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                        {t.contactSection.formProjectType}
                      </label>
                      <div className="relative">
                        <select
                          id={selectIdProj}
                          required
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 pl-10 text-xs font-bold text-[#0B1F3A] focus:outline-hidden"
                        >
                          <option value="">{t.common.select}</option>
                          <option value="Residential Solar">{t.contactSection.projectTypes.res}</option>
                          <option value="Commercial Solar">{t.contactSection.projectTypes.com}</option>
                          <option value="Customer Support">{t.contactSection.projectTypes.support}</option>
                          <option value="Other">{t.contactSection.projectTypes.other}</option>
                        </select>
                        <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="text-xs font-black text-[#0B1F3A] block mb-1.5">
                      {t.contactSection.formMessage}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contactSection.formMessagePlaceholder}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs font-medium text-[#0B1F3A] focus:outline-hidden placeholder-slate-400"
                    />
                  </div>

                  {/* Form Action Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <button
                      type="submit"
                      className="bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold py-3.5 px-7 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer text-sm"
                    >
                      <span>{t.contactSection.formTitle}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 text-slate-500 text-[10.5px]">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.common.secure}</span>
                    </div>
                  </div>

                </form>
              )}

            </div>

            {/* RIGHT COLUMN: DIRECT CONTACT INFO (38% DESKTOP) */}
            <div className="lg:col-span-4 bg-[#EBF5FF] rounded-2xl border border-blue-100 p-6 sm:p-7 flex flex-col justify-between h-full">
              
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <span className="text-[10px] font-black tracking-widest text-[#E61C24] block uppercase mb-1">
                    {t.contactSection.infoLabel}
                  </span>
                  <h3 className="text-lg font-black text-[#0B1F3A] leading-snug">
                    {t.contactSection.infoTitle}
                  </h3>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed font-normal">
                    {t.contactSection.infoSubtitle}
                  </p>
                </div>

                {/* 3 Contact Channels */}
                <div className="space-y-4 pb-6 border-b border-blue-200/50">
                  
                  {/* Email */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E61C24] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black uppercase text-slate-500">{t.contactSection.infoEmailTitle}</h5>
                      <span className="text-xs font-extrabold text-[#0B1F3A] block mt-0.5">info@cubawatt.com</span>
                      <p className="text-[10px] text-slate-500 leading-normal font-normal">{t.contactSection.infoEmailDesc}</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black uppercase text-slate-500">{t.contactSection.infoWhatsappTitle}</h5>
                      <span className="text-xs font-extrabold text-[#0B1F3A] block mt-0.5">+1 305 555 1234</span>
                      <p className="text-[10px] text-slate-500 leading-normal font-normal">{t.contactSection.infoWhatsappDesc}</p>
                    </div>
                  </div>

                  {/* Call */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0E336A] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-black uppercase text-slate-500">{t.contactSection.infoCallTitle}</h5>
                      <span className="text-xs font-extrabold text-[#0B1F3A] block mt-0.5">+1 305 555 1234</span>
                      <p className="text-[10px] text-slate-500 leading-normal font-normal">{t.contactSection.infoCallTime}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Sub-Card (A Partner You Can Trust) */}
              <div className="bg-white/80 border border-white rounded-xl p-4.5 mt-6">
                <h5 className="text-xs font-black text-[#0B1F3A] mb-3">{t.contactSection.trustTitle}</h5>
                
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{t.contactSection.trust1}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight">
                    <Users className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{t.contactSection.trust2}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight">
                    <Settings className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{t.contactSection.trust3}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{t.contactSection.trust4}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM CALL-TO-ACTION BANNER */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden min-h-[140px] flex items-center bg-slate-900 border-t border-white/5 py-10 sm:py-12">
        {/* Full-width Havana skyline background */}
        <div className="absolute inset-0 z-0">
          <img
            src={bottomBannerBg}
            alt={t.contactSection.altBottom}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#071326]/40 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl text-white">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              {t.contactSection.ctaTitle}
            </h3>
            <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed mt-1 font-normal">
              {t.contactSection.ctaDesc}
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="group flex items-center justify-center gap-2 bg-[#E61C24] hover:bg-[#C91A2A] text-white font-extrabold text-sm px-6 py-3.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer shrink-0 w-fit"
          >
            <span>{t.contactSection.ctaBtn}</span>
          </button>
        </div>
      </div>

    </section>
  );
};
