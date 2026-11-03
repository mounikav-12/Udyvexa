import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, User, Phone, Mail, Lock } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = 'Website Development' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    budget: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Website Development',
      budget: '',
      details: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#d2e5ed] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Request a Free Quote</h3>
            <p className="text-xs text-cyan-100 mt-0.5">
              Customized, affordable pricing within 24 hours
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#072635]">Thank You!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Your quote request for <strong className="text-[#072635]">{formData.service}</strong> has been received. Our team will contact <strong className="text-[#072635]">{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 text-white text-sm font-semibold transition-all shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d2e5ed] bg-[#f8fafc] text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
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
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d2e5ed] bg-[#f8fafc] text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

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
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#d2e5ed] bg-[#f8fafc] text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Required Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#d2e5ed] bg-[#f8fafc] text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] focus:outline-none"
                  >
                    <option value="Website Development" className="bg-white text-slate-800">Website Development</option>
                    <option value="Digital Marketing" className="bg-white text-slate-800">Digital Marketing</option>
                    <option value="Software Development" className="bg-white text-slate-800">Software Development</option>
                    <option value="Education Consultancy Solutions" className="bg-white text-slate-800">Education Consultancy Solutions</option>
                    <option value="Custom Project" className="bg-white text-slate-800">Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#d2e5ed] bg-[#f8fafc] text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] focus:outline-none"
                  >
                    <option value="" className="bg-white text-slate-800">Select range</option>
                    <option value="Under ₹25,000" className="bg-white text-slate-800">Under ₹25,000</option>
                    <option value="₹25,000 - ₹50,000" className="bg-white text-slate-800">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000" className="bg-white text-slate-800">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+" className="bg-white text-slate-800">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a few lines about your objectives, timeline, or current website if any..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#d2e5ed] bg-[#f8fafc] text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 focus:border-[#1fa7c6] focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 text-white font-semibold text-sm shadow-md shadow-cyan-500/25 transition-all disabled:opacity-70"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs">
                <Lock className="w-3.5 h-3.5" />
                <span>Confidential. No spam, ever.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
