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
    tag: 'Websites',
    icon: Monitor,
    iconBg: 'bg-blue-50 border border-blue-100',
    iconColor: 'text-brand-600',
    title: 'Website Development',
    description: 'Professional, responsive and affordable websites for businesses, consultancies and institutions.',
    checklist: [
      'Business Websites',
      'E-commerce Websites',
      'Landing Pages',
      'Website Redesign',
      'Website Maintenance',
    ],
    serviceValue: 'Website Development',
  },
  {
    id: 'digital-marketing',
    tag: 'Marketing',
    icon: Megaphone,
    iconBg: 'bg-rose-50 border border-rose-100',
    iconColor: 'text-rose-600',
    title: 'Digital Marketing',
    description: 'Grow your business with result-oriented digital marketing strategies.',
    checklist: [
      'Search Engine Optimization (SEO)',
      'Google Ads',
      'Social Media Marketing',
      'Lead Generation',
      'Online Reputation Management',
    ],
    serviceValue: 'Digital Marketing',
  },
  {
    id: 'software-development',
    tag: 'Custom Software',
    icon: Code2,
    iconBg: 'bg-emerald-50 border border-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Software Development',
    description: 'Custom software solutions to improve your business operations.',
    checklist: [
      'Business Software',
      'Web Applications',
      'Mobile Applications',
      'CRM & Automation Tools',
      'API Integrations',
    ],
    serviceValue: 'Software Development',
  },
  {
    id: 'education-consultancy',
    tag: 'Education CRM',
    icon: GraduationCap,
    iconBg: 'bg-purple-50 border border-purple-100',
    iconColor: 'text-purple-600',
    title: 'Education Consultancy Solutions',
    description: 'Websites and digital solutions for school and college admission consultancies.',
    checklist: [
      'Consultancy Websites',
      'Enquiry & Lead Management',
      'Admissions CRM',
      'Student Application Systems',
      'Digital Marketing for Admissions',
    ],
    serviceValue: 'Education Consultancy Solutions',
  },
];

export default function ServicesPage({ onOpenQuote }) {
  return (
    <div id="services" className="services-page bg-white min-h-screen">
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
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <SR>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Simple Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-sky-600">
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
      <section className="py-14 sm:py-18 lg:py-24 bg-slate-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Responsive 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {SERVICES_DATA.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <SR key={service.id} delay={index * 60} className="h-full flex flex-col">
                  <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300 p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Header: SVG Icon & Category Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 ${service.iconBg}`}
                        >
                          <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                        </div>
                        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                          {service.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-brand-600 transition-colors">
                        {service.title}
                      </h2>

                      {/* Matter / Description */}
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* 5 Capability Checkpoints */}
                      <ul className="space-y-2.5 mb-8">
                        {service.checklist.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-brand-600 border border-blue-100 flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </span>
                            <span className="text-sm font-medium text-slate-700">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action: Get Started → (Right Aligned) */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-end">
                      <button
                        onClick={() => onOpenQuote(service.serviceValue)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-md shadow-brand-500/20 transition-all duration-200 group-hover:shadow-brand-500/35"
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
