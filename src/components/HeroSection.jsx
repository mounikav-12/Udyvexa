import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  Monitor,
  Megaphone,
  Code2,
  GraduationCap,
  User,
  Phone,
  Mail,
  Briefcase,
  Lock,
  CheckCircle2,
  Star,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

export default function HeroSection({ onOpenQuote, onExploreServices }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const businessTypeRef = useRef(null);

  const validateField = (fieldName, rawValue) => {
    const val = (rawValue || '').trim();
    switch (fieldName) {
      case 'name': {
        if (!val) {
          return 'Please enter your name';
        }
        if (val.length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s.'-]+$/.test(val)) {
          return 'Name can only contain letters and spaces';
        }
        return '';
      }

      case 'phone': {
        if (!val) {
          return 'Please enter your phone number';
        }
        // Extract digits only
        const digitsOnly = val.replace(/\D/g, '');

        // Standard Indian formats: +91 9876543210 (12 digits), 09876543210 (11 digits), or 9876543210 (10 digits)
        let tenDigits = '';
        if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
          tenDigits = digitsOnly.slice(2);
        } else if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
          tenDigits = digitsOnly.slice(1);
        } else if (digitsOnly.length === 10) {
          tenDigits = digitsOnly;
        }

        if (tenDigits) {
          if (!/^[6-9]\d{9}$/.test(tenDigits)) {
            return 'Mobile number must start with 6, 7, 8, or 9';
          }
          return '';
        }

        // Allow international numbers between 10 and 15 digits
        if (digitsOnly.length >= 10 && digitsOnly.length <= 15) {
          return '';
        }

        return 'Please enter a valid 10-digit mobile number';
      }

      case 'email': {
        if (val) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
          if (!emailRegex.test(val)) {
            return 'Please enter a valid email address (e.g. name@company.com)';
          }
        }
        return '';
      }

      case 'businessType': {
        if (!val) {
          return 'Please select your business sector';
        }
        return '';
      }

      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    const nameErr = validateField('name', formData.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const businessTypeErr = validateField('businessType', formData.businessType);
    if (businessTypeErr) newErrors.businessType = businessTypeErr;

    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation if the field was already touched or currently has an error
    if (touched[field] || errors[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({
        ...prev,
        [field]: err,
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: err,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      name: true,
      phone: true,
      email: true,
      businessType: true,
    });

    const newErrors = validateAll();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus the first invalid field for seamless UX
      if (newErrors.name && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (newErrors.phone && phoneInputRef.current) {
        phoneInputRef.current.focus();
      } else if (newErrors.email && emailInputRef.current) {
        emailInputRef.current.focus();
      } else if (newErrors.businessType && businessTypeRef.current) {
        businessTypeRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessType: '',
      message: '',
    });
    setErrors({});
    setTouched({});
  };

  const featurePills = [
    {
      title: 'Modern Websites',
      icon: Monitor,
      bg: 'bg-white text-[#0284c7] border-[#d2e5ed] hover:border-[#1fa7c6] hover:shadow-md',
      iconBox: 'bg-cyan-50 text-[#0284c7]',
    },
    {
      title: 'Digital Marketing',
      icon: Megaphone,
      bg: 'bg-white text-rose-600 border-[#d2e5ed] hover:border-rose-400 hover:shadow-md',
      iconBox: 'bg-rose-50 text-rose-600',
    },
    {
      title: 'Custom Software',
      icon: Code2,
      bg: 'bg-white text-emerald-600 border-[#d2e5ed] hover:border-emerald-400 hover:shadow-md',
      iconBox: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Education Solutions',
      icon: GraduationCap,
      bg: 'bg-white text-[#7c3aed] border-[#d2e5ed] hover:border-purple-400 hover:shadow-md',
      iconBox: 'bg-purple-50 text-[#7c3aed]',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#f0f6f8] via-[#f4f9fb] to-[#e6eff3]">
      {/* ── Keyframe Animations & Transitions ── */}
      <style>{`
        @keyframes heroFadeUp {
          0% {
            opacity: 0;
            transform: translateY(22px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(14px, -14px);
          }
        }
        @keyframes floatReverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-12px, 12px);
          }
        }
        .hero-anim-1 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .hero-anim-2 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .hero-anim-3 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }
        .hero-anim-4 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
        }
        .hero-anim-5 {
          animation: heroFadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }
        .hero-anim-card {
          animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        .hero-float-1 {
          animation: floatSlow 12s ease-in-out infinite;
        }
        .hero-float-2 {
          animation: floatReverse 14s ease-in-out infinite;
        }
      `}</style>

      {/* Background Animated Glow Orbs & Subtle Tech Grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1fa7c6]/15 rounded-full blur-3xl pointer-events-none -z-10 hero-float-1" />
      <div className="absolute bottom-6 left-6 w-80 h-80 bg-[#8274ff]/10 rounded-full blur-3xl pointer-events-none -z-10 hero-float-2" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1fa7c610_1px,transparent_1px),linear-gradient(to_bottom,#1fa7c610_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Premium Tech Hero Background Image with Soft Ambient Blending */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <img
          src="/hero-tech-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f6f8]/90 via-[#f0f6f8]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#f0f6f8]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ════════════════════════════════════════════════
              LEFT COLUMN: Value Proposition, Feature Pills, CTAs, Trust Row
          ════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Headline */}
            <div className="hero-anim-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#072635] tracking-normal leading-[1.24]">
                Your Business <br />
                Our Technology <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#4f75d9] to-[#8274ff]">
                  Greater Growth
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="hero-anim-2">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                <strong className="text-[#072635] font-semibold">Udyvexa Software &amp; Digital Technologies Pvt. Ltd.</strong>{' '}
                provides websites, digital marketing and custom software solutions for businesses, startups, education consultancies and institutions with affordable and reliable technology services.
              </p>
            </div>

            {/* 4 Feature Highlights */}
            <div className="hero-anim-3 pt-1">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {featurePills.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default ${item.bg}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-xs ${item.iconBox || 'bg-[#0a2f42] text-cyan-400'}`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 leading-tight">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="hero-anim-4 flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 active:scale-95 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all duration-200 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-[#c5dce6] hover:border-[#1fa7c6] active:scale-95 text-[#072635] font-semibold text-sm sm:text-base shadow-xs transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Bottom Symmetrical Trust & Results Row */}
            <div className="hero-anim-5 pt-5 border-t border-[#d2e5ed]">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0284c7] shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-[#072635] leading-none">150+</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1 leading-none">Projects Delivered</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0 shadow-xs">
                    <Star className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-[#072635] leading-none">5.0 / 5.0</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1 leading-none">Client Rating</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-xs">
                    <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-[#072635] leading-none">100%</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1 leading-none">Verified Results</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ════════════════════════════════════════════════
              RIGHT COLUMN: "Get a Free Consultation" Lead Capture Card
          ════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 hero-anim-card">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-300/40 border border-[#d2e5ed] relative hover:shadow-2xl transition-all duration-300">
              
              {/* Card Header */}
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-[#072635] tracking-tight">
                  Get a Free Consultation
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Tell us about your business. We'll get back with the right solution.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#072635]">Enquiry Received!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#072635]">{formData.name}</strong>. Our technical consultant will analyze your requirement and contact you within 2 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-sm font-semibold text-[#0284c7] hover:underline font-semibold"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="hero-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                          errors.name && touched.name ? 'text-rose-400' : 'text-slate-400'
                        }`}
                      >
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        ref={nameInputRef}
                        id="hero-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        aria-invalid={!!(errors.name && touched.name)}
                        aria-describedby={errors.name && touched.name ? 'hero-name-error' : undefined}
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                          errors.name && touched.name
                            ? 'border-rose-300 bg-rose-50/50 text-rose-900 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                            : 'border-[#d2e5ed] bg-[#f8fafc] text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6]'
                        }`}
                      />
                    </div>
                    {errors.name && touched.name && (
                      <div
                        id="hero-name-error"
                        className="flex items-center gap-1.5 mt-1 text-rose-500 text-xs"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="hero-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                          errors.phone && touched.phone ? 'text-rose-400' : 'text-slate-400'
                        }`}
                      >
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        ref={phoneInputRef}
                        id="hero-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        aria-invalid={!!(errors.phone && touched.phone)}
                        aria-describedby={errors.phone && touched.phone ? 'hero-phone-error' : undefined}
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                          errors.phone && touched.phone
                            ? 'border-rose-300 bg-rose-50/50 text-rose-900 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                            : 'border-[#d2e5ed] bg-[#f8fafc] text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6]'
                        }`}
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <div
                        id="hero-phone-error"
                        className="flex items-center gap-1.5 mt-1 text-rose-500 text-xs"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                          errors.email && touched.email ? 'text-rose-400' : 'text-slate-400'
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        ref={emailInputRef}
                        id="hero-email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        aria-invalid={!!(errors.email && touched.email)}
                        aria-describedby={errors.email && touched.email ? 'hero-email-error' : undefined}
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all ${
                          errors.email && touched.email
                            ? 'border-rose-300 bg-rose-50/50 text-rose-900 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                            : 'border-[#d2e5ed] bg-[#f8fafc] text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6]'
                        }`}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <div
                        id="hero-email-error"
                        className="flex items-center gap-1.5 mt-1 text-rose-500 text-xs"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Business Type dropdown */}
                  <div>
                    <label htmlFor="hero-businessType" className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
                          errors.businessType && touched.businessType ? 'text-rose-400' : 'text-slate-400'
                        }`}
                      >
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <select
                        ref={businessTypeRef}
                        id="hero-businessType"
                        value={formData.businessType}
                        onChange={(e) => handleChange('businessType', e.target.value)}
                        onBlur={() => handleBlur('businessType')}
                        aria-invalid={!!(errors.businessType && touched.businessType)}
                        aria-describedby={errors.businessType && touched.businessType ? 'hero-businessType-error' : undefined}
                        className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${
                          errors.businessType && touched.businessType
                            ? 'border-rose-300 bg-rose-50/50 text-rose-900 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500'
                            : 'border-[#d2e5ed] bg-[#f8fafc] text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6]'
                        }`}
                      >
                        <option value="" className="bg-white text-slate-800">Select your business sector</option>
                        <option value="Small & Medium Business" className="bg-white text-slate-800">Small & Medium Business</option>
                        <option value="Education Consultancy" className="bg-white text-slate-800">Education Consultancy</option>
                        <option value="School / College / Institute" className="bg-white text-slate-800">School / College / Institute</option>
                        <option value="Startup & Entrepreneur" className="bg-white text-slate-800">Startup & Entrepreneur</option>
                        <option value="Clinic & Healthcare" className="bg-white text-slate-800">Clinic & Healthcare</option>
                        <option value="Restaurant & Local Store" className="bg-white text-slate-800">Restaurant & Local Business</option>
                        <option value="Other" className="bg-white text-slate-800">Other Category</option>
                      </select>
                    </div>
                    {errors.businessType && touched.businessType && (
                      <div
                        id="hero-businessType-error"
                        className="flex items-center gap-1.5 mt-1 text-rose-500 text-xs"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.businessType}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="hero-message" className="block text-xs font-semibold text-slate-700 mb-1">
                      How can we help you? <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="hero-message"
                      rows={2}
                      maxLength={500}
                      placeholder="Brief details about your project or requirement..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#d2e5ed] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] transition-all bg-[#f8fafc] focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 active:scale-[0.98] text-white font-semibold text-sm shadow-lg shadow-cyan-950/50 transition-all duration-200 disabled:opacity-70 group"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Safe Notice */}
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your information is confidential and safe with us.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
