import React, { useEffect, useRef } from 'react';
import { ArrowRight, Rocket, Eye } from 'lucide-react';

/* ─────────────────────────────────────────────
   Scroll-reveal — fires once when el enters viewport
────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('sr-in'); io.unobserve(el); } },
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
   Values list data
────────────────────────────────────────────── */
const VALUES = [
  { title: 'Affordability',      desc: 'Fair, transparent pricing that fits real business budgets — no enterprise markups.' },
  { title: 'Transparency',       desc: 'Clear timelines, honest updates, and no surprises at the invoice.' },
  { title: 'Innovation',         desc: 'Practical use of modern tech — only when it actually helps you grow.' },
  { title: 'Customer Focus',     desc: 'We treat every client\'s business like it\'s our own. Calls answered, problems solved.' },
  { title: 'Quality',            desc: 'Clean code, tested builds, and designs that hold up under real use.' },
  { title: 'Long-Term Support',  desc: 'We\'re still here six months later — for updates, questions, and what comes next.' },
];

/* ─────────────────────────────────────────────
   Main component
────────────────────────────────────────────── */
export default function AboutUsPage({ onOpenQuote }) {
  return (
    <article id="aboutus" className="about-page">

      {/* ── Global styles ──────────────────────────────── */}
      <style>{`
        /* reveal animation */
        .sr-wrap{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;}
        .sr-wrap.sr-in{opacity:1;transform:none;}

        /* image zoom */
        .img-frame{overflow:hidden;}
        .img-frame img{width:100%;height:100%;object-fit:cover;display:block;
          transition:transform .7s ease;}
        .img-frame:hover img{transform:scale(1.03);}

        /* blue left-border value row */
        .value-row{border-left:3px solid #1fa7c6;padding-left:1.25rem;
          transition:border-color .2s;}
        .value-row:hover{border-color:#4f75d9;}
      `}</style>

      {/* ════════════════════════════════════════════════
          1. HERO — editorial left-aligned, photo framed cleanly
      ════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#f0f6f8] via-[#f4f9fb] to-[#e6eff3] overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20 border-b border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left ─ copy */}
            <div className="lg:col-span-6 flex flex-col justify-center">

              <SR>
                <h1 className="text-[#072635] text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-snug sm:leading-[1.35] tracking-normal mb-5">
                  Empowering Businesses Through Honest,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#4f75d9] to-[#8274ff]">Human Technology.</span>
                </h1>
              </SR>

              <SR delay={60}>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
                  We build websites, software and digital strategies for small businesses
                  across India — at prices that actually make sense.
                </p>
              </SR>

              <SR delay={120}>
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 text-white font-semibold text-sm px-7 py-3.5 rounded-full w-fit transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-cyan-500/25"
                >
                  <span>Let's talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </SR>
            </div>

            {/* Right ─ Clean Framed Office Photo with Logo */}
            <SR delay={90} className="lg:col-span-6">
              <div className="relative w-full max-w-lg lg:max-w-none mx-auto rounded-3xl overflow-hidden border border-[#d2e5ed] shadow-xl shadow-slate-300/30 bg-slate-900 group aspect-[16/11]">
                <img
                  src="/about-hero-office-logo.jpg"
                  alt="Udyvexa corporate office with illuminated 3D logo and brand name"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle light sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-white/10 pointer-events-none" />
              </div>
            </SR>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2.  01 — WHY WE STARTED (story)
      ════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left ─ section marker */}
            <SR className="lg:col-span-3">
              <span
                className="block text-[7rem] font-extrabold leading-none select-none"
                style={{ color: '#d5e6ec', letterSpacing: '-0.04em' }}
              >01</span>
              <div className="flex items-start gap-3 mt-2">
                <div className="w-0.5 bg-[#1fa7c6] shrink-0 mt-1" style={{ height: '3rem' }} />
                <h2 className="text-[#072635] text-xl font-bold leading-snug">
                  Why we started
                </h2>
              </div>
            </SR>

            {/* Right ─ story text */}
            <div className="lg:col-span-9">
              <SR delay={80}>
                <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6 max-w-3xl">
                  We started Udyvexa because we saw too many small businesses in Hyderabad
                  paying too much for too little. Agencies charged enterprise prices for
                  templated work. We decided to do it differently — honest work, fair
                  prices, and long-term relationships.
                </p>
                <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-3xl">
                  Today, we serve businesses across India — from local consultancies in
                  Hyderabad to growing startups looking to establish their digital identity.
                  Every project we take on is treated like it's our own business on the line.
                </p>
              </SR>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3.  02 — MISSION & VISION (asymmetric typographic cards)
      ════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f0f6f8] border-t border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section tag */}
          <SR>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[#d5e6ec] text-5xl font-extrabold select-none leading-none">02</span>
              <div className="w-0.5 h-8 bg-[#1fa7c6]" />
              <h2 className="text-[#072635] text-xl font-bold">Purpose &amp; Horizon</h2>
            </div>
          </SR>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

            {/* Mission card */}
            <SR className="h-full flex flex-col">
              <div className="bg-white border border-[#d2e5ed] rounded-2xl p-7 sm:p-9 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                {/* Top Header: Highlighted Title & Rocket SVG */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#072635] tracking-tight">
                    Our Mission
                  </h3>
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0284c7] shadow-xs shrink-0">
                    <Rocket className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Main Statement with Quotation Marks */}
                <div className="my-auto py-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-3xl sm:text-4xl font-serif text-[#0284c7] font-bold leading-none select-none shrink-0 mt-0.5">
                      &ldquo;
                    </span>
                    <p className="text-[#072635] text-xl sm:text-2xl font-bold leading-relaxed italic">
                      To make reliable, professional and affordable digital solutions accessible to small and medium businesses.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </SR>

            {/* Vision card */}
            <SR delay={100} className="h-full flex flex-col">
              <div

                className="rounded-2xl p-7 sm:p-9 h-full flex flex-col justify-between shadow-lg bg-[#072635] border border-cyan-500/20"
              >
                {/* Top Header: Highlighted Title & Eye SVG */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    Our Vision
                  </h3>
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-cyan-300 shadow-xs shrink-0">
                    <Eye className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Main Statement (Clean without quotes) */}
                <div className="my-auto py-6">
                  <p className="text-white text-xl sm:text-2xl font-bold leading-relaxed">
                    To become the most trusted technology partner for growing businesses in India — through innovation, affordability, and relationships that last.
                  </p>
                </div>
              </div>
            </SR>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4.  03 — VALUES (2-col magazine layout)
      ════════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-[#d2e5ed]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section tag */}
          <SR>
            <div className="flex items-center gap-4 mb-14">
              <span className="text-[#d5e6ec] text-5xl font-extrabold select-none leading-none">03</span>
              <div className="w-0.5 h-8 bg-[#1fa7c6]" />
              <h2 className="text-[#072635] text-xl font-bold">What we stand for</h2>
            </div>
          </SR>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left ─ workspace photo */}
            <SR className="lg:col-span-5">
              <div
                className="img-frame rounded-2xl overflow-hidden shadow-md border border-[#d2e5ed] sticky top-24"
                style={{ aspectRatio: '1/1' }}
              >
                <img
                  src="/about-workspace.jpg"
                  alt="Designer workspace with wireframe sketches"
                />
              </div>
            </SR>

            {/* Right ─ values list */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {VALUES.map(({ title, desc }, i) => (
                <SR key={title} delay={i * 55}>
                  <div className="value-row">
                    <h3 className="text-[#072635] text-base font-bold mb-1">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5.  CTA — horizontal navy strip, no gimmicks
      ════════════════════════════════════════════════ */}
      <section className="bg-[#0b2559] border-t border-[#12316e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

            {/* Left — Heading & Response time commitment */}
            <SR>
              <div>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
                  Ready to start your project?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2 font-normal">
                  We respond within 24 hours.
                </p>
              </div>
            </SR>

            {/* Right — Action Button */}
            <SR delay={80} className="shrink-0">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#0066f6] hover:bg-[#0052cc] shadow-lg shadow-blue-950/40
                           text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full
                           transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Start the conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </SR>
          </div>
        </div>
      </section>

    </article>
  );
}
