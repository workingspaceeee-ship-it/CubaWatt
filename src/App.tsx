/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useTranslation } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TrustBanner } from './components/TrustBanner';
import { AboutUsSection } from './components/AboutUsSection';
import { HowItWorksFullSection } from './components/HowItWorksFullSection';
import { ServicesSection } from './components/ServicesSection';
import { ResidentialFullSection } from './components/ResidentialFullSection';
import { CommercialFullSection } from './components/CommercialFullSection';
import { ResidentialCalculatorSection } from './components/ResidentialCalculatorSection';
import { CommercialCalculatorSection } from './components/CommercialCalculatorSection';
import { USRegulatoryComplianceSection } from './components/USRegulatoryComplianceSection';
import { ContactUsSection } from './components/ContactUsSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/Modals/QuoteModal';
import { ResidentialCalculatorModal } from './components/Modals/ResidentialCalculatorModal';
import { CommercialCalculatorModal } from './components/Modals/CommercialCalculatorModal';
import { HowItWorksModal } from './components/Modals/HowItWorksModal';
import { ComplianceModal } from './components/Modals/ComplianceModal';
import { HtmlExportModal } from './components/Modals/HtmlExportModal';
import { QuoteDispatcherModal } from './components/Modals/QuoteDispatcherModal';
import { FamilyAbroadModal } from './components/Modals/FamilyAbroadModal';

export default function App() {
  const { lang, setLang, t } = useTranslation();

  // Modal States
  const [dispatcherModalOpen, setDispatcherModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<'residential' | 'commercial'>('residential');
  const [resCalcOpen, setResCalcOpen] = useState(false);
  const [comCalcOpen, setComCalcOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);
  const [codeOpen, setCodeOpen] = useState(false);
  const [familyAbroadOpen, setFamilyAbroadOpen] = useState(false);

  // This handles the generic "Get a Quote" dispatcher
  const handleOpenQuote = () => {
    setDispatcherModalOpen(true);
  };

  // This handles specific quote requests (from category cards, etc.)
  const handleOpenQuoteForm = (type: 'residential' | 'commercial' = 'residential') => {
    setQuoteType(type);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenQuote={handleOpenQuote}
        onOpenResCalc={() => setResCalcOpen(true)}
        onOpenComCalc={() => setComCalcOpen(true)}
        onOpenCompliance={() => setComplianceOpen(true)}
        onOpenHowItWorks={() => setHowItWorksOpen(true)}
        onOpenCode={() => setCodeOpen(true)}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenQuote={handleOpenQuote}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
        />

        {/* 2. Residential & Commercial Visual Solution Cards */}
        <CategoryCards
          lang={lang}
          onOpenResModal={handleOpenQuote}
          onOpenComModal={handleOpenQuote}
        />

        {/* 3. How CubaWatt™ Works (5-Step Process) */}
        <ProcessTimeline
          lang={lang}
          onStepClick={(step) => setHowItWorksOpen(true)}
        />

        {/* 4. Trust Partner Bottom Banner */}
        <TrustBanner lang={lang} />

        {/* 5. About Us Full Page Section (Exact replica of 02_About_Us.png) */}
        <AboutUsSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
        />

        {/* 6. Services Full Page Section (Exact replica of 03_Services.png) */}
        <ServicesSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
        />

        {/* 7. How It Works Full Page Section (Exact replica of 08_How_It_Works.png) */}
        <HowItWorksFullSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* 8. Residential Solutions Full Page Section (Exact replica of 04_Residential.png) */}
        <ResidentialFullSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
          onOpenResCalc={() => setResCalcOpen(true)}
          onOpenFamilyAbroad={() => setFamilyAbroadOpen(true)}
        />

        {/* 9. Commercial Solutions Full Page Section (Exact replica of 05_Commercial.png) */}
        <CommercialFullSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
          onOpenComCalc={() => setComCalcOpen(true)}
        />

        {/* 10. Residential Sizing Wizard Section (Exact replica of 06_Residential_Calculator.png) */}
        <ResidentialCalculatorSection
          lang={lang}
          onOpenQuote={() => handleOpenQuoteForm('residential')}
        />

        {/* 11. Commercial Sizing Wizard Section (Exact replica of 07_Commercial_Calculator.png) */}
        <CommercialCalculatorSection
          lang={lang}
          onOpenQuote={() => handleOpenQuoteForm('commercial')}
        />

        {/* 12. U.S. Regulatory Compliance Full Page Section (Exact replica of 09_US_Regulatory_Compliance.png) */}
        <USRegulatoryComplianceSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* 13. Contact Us Full Page Section (Exact replica of 10_Contact_Us.png) */}
        <ContactUsSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
          onOpenHowItWorks={() => setHowItWorksOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenQuote={handleOpenQuote}
        onOpenCompliance={() => setComplianceOpen(true)}
        onOpenHowItWorks={() => setHowItWorksOpen(true)}
        onOpenCode={() => setCodeOpen(true)}
      />

      {/* Interactive Modals */}
      <QuoteDispatcherModal
        isOpen={dispatcherModalOpen}
        onClose={() => setDispatcherModalOpen(false)}
        lang={lang}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        lang={lang}
        initialSystemType={quoteType}
      />

      <ResidentialCalculatorModal
        isOpen={resCalcOpen}
        onClose={() => setResCalcOpen(false)}
        lang={lang}
        onProceedToQuote={() => handleOpenQuoteForm('residential')}
      />

      <CommercialCalculatorModal
        isOpen={comCalcOpen}
        onClose={() => setComCalcOpen(false)}
        lang={lang}
        onProceedToQuote={() => handleOpenQuoteForm('commercial')}
      />

      <HowItWorksModal
        isOpen={howItWorksOpen}
        onClose={() => setHowItWorksOpen(false)}
        lang={lang}
        onOpenQuote={() => handleOpenQuoteForm('residential')}
      />

      <ComplianceModal
        isOpen={complianceOpen}
        onClose={() => setComplianceOpen(false)}
        lang={lang}
      />

      <HtmlExportModal
        isOpen={codeOpen}
        onClose={() => setCodeOpen(false)}
        lang={lang}
      />

      <FamilyAbroadModal
        isOpen={familyAbroadOpen}
        onClose={() => setFamilyAbroadOpen(false)}
        lang={lang}
      />

    </div>
  );
}
