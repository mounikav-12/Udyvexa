import React, { useState } from 'react';
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
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export default function HeroSection({ onOpenQuote, onExploreServices }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const featurePills = [
    {
      title: 'Modern Websites',
      icon: Monitor,
      bg: 'bg-blue-50 text-brand-600 border-blue-100',
    },
    {
      title: 'Digital Marketing',
      icon: Megaphone,
      bg: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      title: 'Custom Software',
      icon: Code2,
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Education Solutions',
      icon: GraduationCap,
      bg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: Main Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Your Business <br />
              Our Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-sky-500">
                Greater Growth
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              <strong className="text-slate-800 font-semibold">Udyvexa Software & Digital Technologies Pvt. Ltd.</strong>{' '}
              provides websites, digital marketing and custom software solutions for businesses, startups, education consultancies and institutions with affordable and reliable technology services.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {featurePills.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border bg-white shadow-sm hover:shadow transition-shadow ${item.bg}`}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-white shadow-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold text-sm sm:text-base shadow-lg shadow-brand-500/25 transition-all duration-200 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium text-sm sm:text-base shadow-sm transition-all hover:border-slate-400"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Hero Visual Card (Integrated) */}
            <div className="relative pt-6 max-w-xl">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-card bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Udyvexa team collaborating on digital technologies"
                  className="w-full h-48 sm:h-56 object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>

                {/* Floating "Helping Businesses Go Digital" Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-white/50 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-none">
                      Helping Businesses
                    </div>
                    <div className="text-[10px] text-brand-600 font-medium">Go Digital Today</div>
                  </div>
                </div>

                {/* Visual Arrow Steps in overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Ideas
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">Strategies</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">Solutions</span>
                  <span className="text-slate-400">→</span>
                  <span className="bg-brand-600 px-2.5 py-1 rounded-full font-bold">Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: "Get a Free Consultation" Lead Capture Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200/90 relative">
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Get a Free Consultation
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Tell us about your business. We'll get back with the right solution.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Enquiry Received!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our technical consultant will analyze your requirement and contact you within 2 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          businessType: '',
                          message: '',
                        });
                      }}
                      className="text-sm font-semibold text-brand-600 hover:text-brand-700 underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50/40 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Business Type dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Type <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <select
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50/40 focus:bg-white"
                      >
                        <option value="">Select your business sector</option>
                        <option value="Small & Medium Business">Small & Medium Business</option>
                        <option value="Education Consultancy">Education Consultancy</option>
                        <option value="School / College / Institute">School / College / Institute</option>
                        <option value="Startup & Entrepreneur">Startup & Entrepreneur</option>
                        <option value="Clinic & Healthcare">Clinic & Healthcare</option>
                        <option value="Restaurant & Local Store">Restaurant & Local Business</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      How can we help you? <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief details about your project or requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all bg-slate-50/40 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-[0.98] text-white font-semibold text-sm shadow-md shadow-brand-500/25 transition-all duration-200 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Safe Notice */}
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs pt-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your information is safe with us.</span>
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
