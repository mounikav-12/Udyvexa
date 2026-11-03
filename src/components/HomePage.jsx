import React, { useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import {
  Globe,
  Megaphone,
  Code2,
  GraduationCap,
  Store,
  Landmark,
  Rocket,
  Stethoscope,
  Utensils,
  IndianRupee,
  Sliders,
  Headphones,
  TrendingUp,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Scroll-reveal hook
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
   Data: 4 Core Services
────────────────────────────────────────────── */
const HOME_SERVICES = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Modern and responsive websites for businesses, consultancies, institutions and more.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    icon: Globe,
    iconBg: 'bg-cyan-50 text-[#0284c7]',
    serviceValue: 'Website Development',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'SEO, Google Ads, social media marketing and lead generation to bring more customers.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
    icon: Megaphone,
    iconBg: 'bg-rose-50 text-rose-600',
    serviceValue: 'Digital Marketing',
  },
  {
    id: 'software-dev',
    title: 'Software & App Development',
    description: 'Custom software, web applications and automation solutions for your business needs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    icon: Code2,
    iconBg: 'bg-indigo-50 text-[#4f75d9]',
    serviceValue: 'Software Development',
  },
  {
    id: 'edu-tech',
    title: 'Education Consultancy Solutions',
    description: 'Websites, admission enquiry systems and digital marketing for school and college admission consultancies.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    icon: GraduationCap,
    iconBg: 'bg-emerald-50 text-emerald-600',
    serviceValue: 'Education Consultancy Solutions',
  },
];

/* ─────────────────────────────────────────────
   Data: 6 Industries We Serve
────────────────────────────────────────────── */
const HOME_INDUSTRIES = [
  {
    id: 'smb',
    title: 'Small & Medium Businesses',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    icon: Store,
    badgeColor: 'bg-white text-[#0284c7] border-[#d2e5ed]',
  },
  {
    id: 'edu-consultancy',
    title: 'Education Consultancies',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    icon: GraduationCap,
    badgeColor: 'bg-white text-[#4f75d9] border-[#d2e5ed]',
  },
  {
    id: 'schools-colleges',
    title: 'Schools & Colleges',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
    icon: Landmark,
    badgeColor: 'bg-[#0c2e3d]/90 text-cyan-300 border-[#164d64]',
  },
  {
    id: 'startups',
    title: 'Startups & Entrepreneurs',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    icon: Rocket,
    badgeColor: 'bg-white text-amber-600 border-[#d2e5ed]',
  },
  {
    id: 'healthcare',
    title: 'Clinics & Healthcare',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    icon: Stethoscope,
    badgeColor: 'bg-white text-teal-600 border-[#d2e5ed]',
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Local Businesses',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    icon: Utensils,
    badgeColor: 'bg-white text-rose-600 border-[#d2e5ed]',
  },
];

/* ─────────────────────────────────────────────
   Data: Why Choose Udyvexa 4 Pillars
────────────────────────────────────────────── */
const WHY_CHOOSE_PILLARS = [
  {
    id: 'affordability',
    title: 'Affordable Solutions',
    desc: 'High-quality services at budget-friendly prices.',
    icon: IndianRupee,
    iconBg: 'bg-cyan-50 text-[#0284c7] border-cyan-100',
  },
  {
    id: 'customized',
    title: 'Customized Approach',
    desc: 'Solutions tailored to your business needs.',
    icon: Sliders,
    iconBg: 'bg-indigo-50 text-[#4f75d9] border-indigo-100',
  },
  {
    id: 'support',
    title: 'End-to-End Support',
    desc: 'From planning to launch and beyond.',
    icon: Headphones,
    iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    id: 'growth',
    title: 'Business Growth Focus',
    desc: 'Our solutions are designed to help you grow.',
    icon: TrendingUp,
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

export default function HomePage({ onOpenQuote, onNavigate }) {
  return (
    <div className="home-page bg-[#f0f6f8]">
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
          1. HERO SECTION & FREE CONSULTATION FORM
      ════════════════════════════════════════════════ */}
      <HeroSection
        onOpenQuote={() => onOpenQuote('Website Development')}
        onExploreServices={() => onNavigate('services')}
      />

      {/* ════════════════════════════════════════════════
          2. OUR SERVICES (Under One Roof)
      ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#e1eef5] via-[#edf5f9] to-[#e4edf5] border-t border-[#d2e5ed]">
        {/* Subtle Ambient Tech Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SR delay={30}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072635] tracking-normal leading-snug mb-4">
                Complete Digital Solutions{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#4f75d9] to-[#8274ff]">
                  Under One Roof
                </span>
              </h2>
            </SR>
            <SR delay={120}>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We provide affordable and customized technology solutions to help businesses grow online.
              </p>
            </SR>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {HOME_SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <SR key={service.id} delay={index * 60} className="h-full flex flex-col">
                  <div className="bg-white border border-[#d2e5ed] rounded-2xl shadow-sm hover:shadow-xl hover:border-[#1fa7c6] transition-all duration-300 flex flex-col justify-between h-full group">
                    {/* Media Thumbnail Container with Clean Floating Icon Badge */}
                    <div className="relative">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 rounded-t-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent pointer-events-none"></div>
                      </div>

                      {/* Floating Circle Icon Badge – Fully Unclipped, Crisp, and Prominent */}
                      <div className="absolute -bottom-5 left-5 z-10">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-white border border-[#d2e5ed] transition-transform duration-300 group-hover:scale-110">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${service.iconBg}`}
                          >
                            <IconComponent className="w-5 h-5 stroke-[2.3]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-8 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-lg font-bold text-[#072635] mb-2 group-hover:text-[#0284c7] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                          {service.description}
                        </p>
                      </div>

                      {/* Action */}
                      <div className="pt-3 border-t border-[#edf4f7] flex items-center justify-between">
                        <button
                          onClick={() => onOpenQuote(service.serviceValue)}
                          className="inline-flex items-center gap-1.5 text-[#0284c7] hover:text-[#0369a1] font-semibold text-xs transition-colors group/btn"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SR>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. INDUSTRIES WE SERVE
      ════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f0f6f8] border-t border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <SR delay={30}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072635] tracking-normal leading-snug">
                Technology Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#4f75d9] to-[#8274ff]">
                  Every Industry
                </span>
              </h2>
            </SR>
          </div>

          {/* 6 Industries Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 items-stretch">
            {HOME_INDUSTRIES.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <SR key={industry.id} delay={index * 50} className="h-full flex flex-col">
                  <div className="bg-white border border-[#d2e5ed] rounded-2xl shadow-xs hover:shadow-md hover:border-[#1fa7c6] transition-all duration-300 p-3 sm:p-4 flex flex-col items-center text-center h-full group">
                    {/* Media Thumbnail */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-slate-100">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                      
                      {/* Corner Icon */}
                      <div className="absolute bottom-2 left-2">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-md bg-white/95 border ${industry.badgeColor}`}
                        >
                          <IconComponent className="w-4 h-4 stroke-[2.2]" />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-[#072635] leading-snug group-hover:text-[#0284c7] transition-colors my-auto">
                      {industry.title}
                    </h3>
                  </div>
                </SR>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. WHY CHOOSE UDYVEXA (Pillars + Team Banner)
      ════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: 4 Value Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <SR delay={30}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072635] tracking-normal leading-snug">
                  Your Trusted Technology Partner
                </h2>
              </SR>

              <SR delay={120}>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  We focus on delivering quality, affordable and result-oriented solutions that help you achieve your business goals.
                </p>
              </SR>

              {/* 4 Pillars 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {WHY_CHOOSE_PILLARS.map((pillar, idx) => {
                  const IconComponent = pillar.icon;
                  return (
                    <SR key={pillar.id} delay={idx * 60}>
                      <div className="flex items-start gap-3.5 p-3.5 rounded-2xl border border-[#d2e5ed] bg-[#f8fafc] hover:bg-white hover:border-[#1fa7c6] hover:shadow-sm transition-all duration-200">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${pillar.iconBg}`}
                        >
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#072635] mb-1">
                            {pillar.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    </SR>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Team Card & Bottom Conversion Banner */}
            <SR delay={120} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#d2e5ed] bg-slate-900 group min-h-[420px] flex flex-col justify-between">
                {/* Background Team Photo */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Udyvexa team collaborating in Hyderabad"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/30"></div>

                {/* Top Right Bold Slogan Overlay */}
                <div className="relative p-6 sm:p-8 flex justify-end">
                  <div className="text-right">
                    <p className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight drop-shadow-md">
                      Build Your <br />
                      Digital Success <br />
                      <span className="text-sky-300">Together</span>
                    </p>
                  </div>
                </div>

                {/* Bottom Conversion Bar */}
                <div className="relative p-4 sm:p-6">
                  <div className="bg-[#072635]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-cyan-400/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                          Let's Grow Your Business Online
                        </h4>
                        <p className="text-cyan-100 text-xs">
                          Discuss your requirements with our team and get a customized solution.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenQuote('Custom Project')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-cyan-950/50 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </SR>

          </div>
        </div>
      </section>
    </div>
  );
}
