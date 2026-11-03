import React, { useEffect, useRef } from 'react';
import {
  Monitor,
  Megaphone,
  Code2,
  GraduationCap,
  Check,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Scroll-reveal hook — activates on viewport entry
────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('sr-in');
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

function SR({ children, delay = 0, className = '' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`sr-wrap ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   4 Core Services Data with SVGs & Matter
────────────────────────────────────────────── */
const SERVICES_DATA = [
  {
    id: 'website-development',
    indexNum: '01',
    category: 'Web Architecture',
    badge: 'Lightning Fast',
    icon: Monitor,
    iconColor: 'text-[#0284c7]',
    iconRing: 'from-[#1fa7c6] via-[#0284c7] to-[#4f75d9]',
    gradientBorder: 'from-[#1fa7c6] via-[#4f75d9] to-[#8274ff]',
    glow: 'rgba(31, 167, 198, 0.16)',
    tagBg: 'bg-cyan-50/90 text-[#0284c7] border-cyan-200/80',
    checkBg: 'bg-cyan-50 text-[#0284c7] border-cyan-200',
    cardBg: 'bg-gradient-to-br from-white via-white to-cyan-50/70 border-cyan-200/90 hover:border-cyan-400',
    title: 'Website Development',
    description: 'Custom-crafted, lightning-fast modern websites engineered to turn visitors into paying clients.',
    checklist: [
      'High-Conversion Business Sites',
      'E-Commerce & Digital Stores',
      'Lead-Capture Landing Pages',
      'Modern UI/UX Redesigns',
      'Ongoing 24/7 Cloud Support',
    ],
    serviceValue: 'Website Development',
    trustNote: '⚡ 3-5 Days Turnaround Estimate',
  },
  {
    id: 'digital-marketing',
    indexNum: '02',
    category: 'Growth Engine',
    badge: 'ROI Focused',
    icon: Megaphone,
    iconColor: 'text-rose-600',
    iconRing: 'from-rose-500 via-rose-400 to-amber-400',
    gradientBorder: 'from-rose-500 via-pink-500 to-amber-400',
    glow: 'rgba(244, 63, 94, 0.16)',
    tagBg: 'bg-rose-50/90 text-rose-600 border-rose-200/80',
    checkBg: 'bg-rose-50 text-rose-600 border-rose-200',
    cardBg: 'bg-gradient-to-br from-white via-white to-rose-50/70 border-rose-200/90 hover:border-rose-400',
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that dominate search results and consistently generate inquiries.',
    checklist: [
      'Targeted Search Engine Optimization',
      'Google & Meta Ads (High ROAS)',
      'Social Media Brand Growth',
      'Direct B2B Lead Generation',
      'Online Reviews & Reputation',
    ],
    serviceValue: 'Digital Marketing',
    trustNote: '📈 Guaranteed Inquiries Strategy',
  },
  {
    id: 'software-development',
    indexNum: '03',
    category: 'Enterprise Core',
    badge: 'Cloud Native',
    icon: Code2,
    iconColor: 'text-[#4f75d9]',
    iconRing: 'from-[#4f75d9] via-[#6366f1] to-[#8274ff]',
    gradientBorder: 'from-[#4f75d9] via-[#6366f1] to-[#8274ff]',
    glow: 'rgba(79, 117, 217, 0.16)',
    tagBg: 'bg-indigo-50/90 text-[#4f75d9] border-indigo-200/80',
    checkBg: 'bg-indigo-50 text-[#4f75d9] border-indigo-200',
    cardBg: 'bg-gradient-to-br from-white via-white to-indigo-50/70 border-indigo-200/90 hover:border-indigo-400',
    title: 'Software Development',
    description: 'Custom enterprise web apps, automation systems, and scalable backends tailored to your workflow.',
    checklist: [
      'Custom Business ERP / CRM',
      'Full-Stack Cloud Web Apps',
      'Cross-Platform Mobile Apps',
      'Workflow Automation Bots',
      'Secure REST & GraphQL APIs',
    ],
    serviceValue: 'Software Development',
    trustNote: '🔒 Enterprise Architecture & Security',
  },
  {
    id: 'education-consultancy',
    indexNum: '04',
    category: 'EdTech CRM',
    badge: 'Automated Pipeline',
    icon: GraduationCap,
    iconColor: 'text-emerald-600',
    iconRing: 'from-teal-500 via-emerald-400 to-teal-400',
    gradientBorder: 'from-teal-500 via-emerald-400 to-teal-400',
    glow: 'rgba(16, 185, 129, 0.16)',
    tagBg: 'bg-emerald-50/90 text-emerald-700 border-emerald-200/80',
    checkBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    cardBg: 'bg-gradient-to-br from-white via-white to-emerald-50/70 border-emerald-200/90 hover:border-emerald-400',
    title: 'Education Consultancy Solutions',
    description: 'Specialized digital portals and admission CRM pipelines designed for school and college consultants.',
    checklist: [
      'Consultancy Web Portals',
      'Multi-Branch Lead Intake',
      'Student Application CRM',
      'Automated WhatsApp Follow-ups',
      'Targeted Admissions Marketing',
    ],
    serviceValue: 'Education Consultancy Solutions',
    trustNote: '🎓 Complete Portal Demo Available',
  },
];

export default function ServicesPage({ onOpenQuote }) {
  return (
    <div id="services" className="services-page bg-[#f0f6f8] min-h-screen text-slate-800">
      {/* ── Global Styles for Scroll Reveal ── */}
      <style>{`
        .sr-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .5s ease, transform .5s ease;
        }
        .sr-wrap.sr-in {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ════════════════════════════════════════════════
          1. HERO HEADER SECTION (Clean, Responsive, No Raster Images)
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20 bg-gradient-to-b from-[#f0f6f8] via-[#f4f9fb] to-[#e6eff3] border-b border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <SR>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#072635] tracking-tight leading-[1.2] mb-5">
              Simple Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-[#4f75d9] to-[#8274ff]">
                Solutions for Real Businesses
              </span>
            </h1>
          </SR>

          <SR delay={60}>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              We provide affordable and customized digital services to help businesses, startups, educational consultancies and institutions grow online.
            </p>
          </SR>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. FORMAL 4 CARDS (2 × 2 Grid on Laptop / Desktop)
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-[#d9edf7] via-[#ebf4f9] to-[#dfeaf6] border-t border-[#c6dfec]">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-300/25 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Responsive 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <SR key={service.id} delay={index * 60} className="h-full flex flex-col">
                  <div className={`backdrop-blur-md rounded-3xl border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden ${service.cardBg || 'bg-white/95 border-[#d2e5ed]'}`}>
                    
                    {/* Top Identity Gradient Accent Stripe */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradientBorder}`} />

                    {/* Subtle Radial Glow on Hover */}
                    <div
                      className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: service.glow }}
                    />

                    <div className="relative z-10">
                      
                      {/* Top Header Row: Index + Domain Badge + Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`relative p-[1.5px] rounded-2xl bg-gradient-to-br ${service.iconRing} shadow-sm group-hover:scale-105 transition-transform duration-300`}
                          >
                            <div className="w-11 h-11 rounded-[14px] bg-white flex items-center justify-center relative overflow-hidden">
                              <IconComponent className={`w-5 h-5 relative z-10 ${service.iconColor} stroke-[2.2]`} />
                            </div>
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-400">
                              {service.indexNum} / {service.category}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-black text-[#072635] tracking-tight group-hover:text-[#0284c7] transition-colors leading-tight">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border shadow-2xs whitespace-nowrap ${service.tagBg}`}>
                          {service.badge}
                        </span>
                      </div>

                      {/* Matter / Description */}
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* Structured 2-Column Capability Pills */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                        {service.checklist.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/80 border border-slate-100 group-hover:bg-white group-hover:border-[#d2e5ed] transition-colors"
                          >
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${service.checkBg}`}>
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </span>
                            <span className="text-xs font-semibold text-slate-700 leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action Bar: Trust Highlight + Get Started */}
                    <div className="pt-4 border-t border-[#edf4f7] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{service.trustNote}</span>
                      </div>

                      <button
                        onClick={() => onOpenQuote(service.serviceValue)}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all duration-200 group-hover:shadow-cyan-500/35 group-hover:shadow-lg self-end sm:self-auto"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                  </div>
                </SR>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
