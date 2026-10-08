import React from 'react';
import { Language, translations } from '../../i18n/translations';
import { X, CheckCircle2, MessageSquare, Package, Ship, HardHat, Headphones, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenQuote: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  lang,
  onOpenQuote,
}) => {
  const t = translations[lang];

  if (!isOpen) return null;

  const detailedSteps = [
    {
      num: 1,
      icon: MessageSquare,
      title:
        lang === 'es'
          ? 'Paso 1: Consulta de Ingeniería y Diseño Personalizado'
          : 'Step 1: Engineering Consultation & System Design',
      desc:
        lang === 'es'
          ? 'Evaluamos las cargas eléctricas de su hogar o negocio, los patrones de apagones en su municipio de Cuba y el espacio disponible en techo para diseñar un sistema solar y de baterías LiFePO4 equilibrado.'
          : 'We assess your home or business electrical loads, blackout patterns in your Cuban municipality, and roof space to engineer a perfectly balanced solar and LiFePO4 battery storage system.',
      features:
        lang === 'es'
          ? ['Cálculo de carga para refrigeradores, splits y equipos esenciales', 'Diagrama eléctrico unifilar a medida', 'Precios transparentes en USD con todo incluido']
          : ['Load calculation for refrigerators, split ACs & essentials', 'Custom single-line electrical diagram', 'Transparent USD pricing with all fees included'],
    },
    {
      num: 2,
      icon: Package,
      title:
        lang === 'es'
          ? 'Paso 2: Suministro de Equipos Tier-1 y Control de Calidad'
          : 'Step 2: Tier-1 Equipment Sourcing & Quality Testing',
      desc:
        lang === 'es'
          ? 'Adquirimos baterías de litio LiFePO4 Grado A (vida útil de más de 6,000 ciclos), paneles monocristalinos Tier-1, inversores híbridos de onda pura y protectores de sobretensión.'
          : 'We procure Grade-A LiFePO4 lithium batteries (6,000+ cycle life), Tier-1 monocrystalline solar panels, pure sine wave hybrid inverters, and heavy-duty surge protectors.',
      features:
        lang === 'es'
          ? ['Hardware probado previamente antes del embalaje', 'Estructuras de montaje resistentes al salitre marino', 'Garantía integral de equipamiento']
          : ['Pre-tested hardware before packaging', 'Anti-corrosion marine-grade mounting brackets', 'Comprehensive equipment warranty'],
    },
    {
      num: 3,
      icon: Ship,
      title:
        lang === 'es'
          ? 'Paso 3: Logística Marítima Directa y Despacho Aduanal'
          : 'Step 3: Direct Maritime Logistics & Customs Clearance',
      desc:
        lang === 'es'
          ? 'Gestionamos el flete marítimo directo a Cuba con pleno cumplimiento de OFAC y BIS. Gestionamos todos los trámites aduanales y coordinamos la entrega segura puerta a puerta en todas las provincias.'
          : 'We manage direct ocean freight to Cuba under full OFAC / BIS regulatory compliance. We handle all customs paperwork and coordinate secure door-to-door delivery across all provinces.',
      features:
        lang === 'es'
          ? ['Cumplimiento 100% legal con normativas OFAC 31 CFR § 515.582 / 515.584', 'Cero riesgo de confiscación ni aranceles imprevistos', 'Rastreo en tiempo real desde el puerto hasta la puerta']
          : ['100% legal OFAC 31 CFR § 515.582 / 515.584 compliance', 'Zero risk of confiscation or hidden tariffs', 'Live tracking from port to doorstep'],
    },
    {
      num: 4,
      icon: HardHat,
      title:
        lang === 'es'
          ? 'Paso 4: Instalación Certificada y Puesta en Marcha'
          : 'Step 4: Certified Local Installation & Commissioning',
      desc:
        lang === 'es'
          ? 'Nuestros ingenieros eléctricos y técnicos solares certificados en Cuba instalan las estructuras, cablean las protecciones DC/AC, configuran el inversor híbrido y prueban la transferencia automática ante apagones.'
          : 'Our experienced Cuban electrical engineers and certified solar technicians install the mounting rails, wire DC/AC safety disconnects, configure the hybrid inverter, and test backup automatic switchover.',
      features:
        lang === 'es'
          ? ['Transferencia instantánea sin cortes de energía', 'Puesta a tierra y protección contra descargas atmosféricas', 'Capacitación práctica para la familia o el personal']
          : ['Sub-second seamless transfer during blackouts', 'Grounding rod and lightning surge protection', 'Hands-on training for family or business staff'],
    },
    {
      num: 5,
      icon: Headphones,
      title:
        lang === 'es'
          ? 'Paso 5: Monitoreo Continuo y Soporte Local Garantizado'
          : 'Step 5: Ongoing Monitoring & Lifetime Local Support',
      desc:
        lang === 'es'
          ? 'Respaldamos cada sistema con soporte técnico continuo, inventario de repuestos en Cuba y línea directa de WhatsApp tanto para usted en el exterior como para su familia o equipo de trabajo en la isla.'
          : 'We stand behind every system with ongoing technical support, spare parts inventory in Cuba, and direct WhatsApp hotline assistance for both you abroad and your family or business team on the island.',
      features:
        lang === 'es'
          ? ['Línea de WhatsApp en inglés y español', 'Inventario de repuestos locales y servicio técnico rápido', 'Mantenimiento y revisión de salud de baterías']
          : ['Direct WhatsApp hotline in English & Spanish', 'In-country spare parts and rapid repair service', 'Annual maintenance and battery health check'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0E336A] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4" />
            <span>
              {lang === 'es'
                ? 'Proceso de Energía Limpia Llave en Mano'
                : 'Turnkey Clean Energy Process'}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {lang === 'es'
              ? 'Cómo Funciona CubaWatt™: Paso a Paso'
              : 'How CubaWatt™ Works: End-to-End'}
          </h3>
          <p className="text-slate-200 text-xs sm:text-sm mt-1 font-light">
            {lang === 'es'
              ? 'Desde el cálculo inicial hasta la instalación certificada en la isla y el respaldo técnico permanente.'
              : 'From initial sizing to certified on-island installation and ongoing technical support.'}
          </p>
        </div>

        {/* Steps List */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {detailedSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-[#0E336A]/30 transition-all shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E336A] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#E52535] uppercase tracking-wider block mb-1">
                      {lang === 'es' ? `Fase ${step.num} de 5` : `Phase ${step.num} of 5`}
                    </span>
                    <h4 className="text-lg font-black text-[#0B2545] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/80">
                      {step.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom Action */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center space-y-3">
            <h4 className="text-lg font-extrabold text-[#0B2545]">
              {lang === 'es' ? '¿Listo para asegurar energía para los suyos?' : 'Ready to secure power for your loved ones?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              {lang === 'es'
                ? 'Nuestros asesores responden a todas sus dudas sobre el proceso, embarques y licencias OFAC.'
                : 'Our advisors answer all your questions about the process, shipping, and OFAC licenses.'}
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="bg-[#E52535] hover:bg-[#C91A2A] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>{lang === 'es' ? 'Solicitar Propuesta Ahora' : 'Request a Proposal Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
