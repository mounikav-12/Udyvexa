import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import QuoteModal from './components/QuoteModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Monitor,
  Megaphone,
  Code2,
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  Target,
  Eye,
  IndianRupee,
  Lightbulb,
  Handshake,
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Smooth scroll to top when changing views
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      {/* Main Header / Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <div>
            {/* Hero Section & Free Consultation */}
            <HeroSection
              onOpenQuote={() => setIsQuoteOpen(true)}
              onExploreServices={() => handleNavigate('services')}
            />

            {/* What's Scheduled Next Section */}
            <section className="py-16 bg-slate-50 border-t border-slate-200/60">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What's Scheduled Next
                  </h2>
                  <p className="text-sm text-slate-500 mt-2">
                    In accordance with our human pacing plan, today's foundational goals are complete. Here is the exact roadmap lined up for the upcoming days:
                  </p>
                </div>

                {/* Daily Roadmap Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Day 1 - Completed */}
                  <div className="bg-white p-5 rounded-2xl border-2 border-emerald-500 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-lg uppercase tracking-wider">
                      Done Today
                    </div>
                    <div className="text-xs font-bold text-emerald-600 mb-1 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Day 1 (Today)
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Foundation & Hero
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li>✓ Tech stack & Tailwind design tokens</li>
                      <li>✓ Sticky responsive Navbar & Topbar</li>
                      <li>✓ High-impact Hero & CTA values</li>
                      <li>✓ Functional Consultation Lead capture</li>
                      <li>✓ Full dark navy Footer & WhatsApp</li>
                    </ul>
                  </div>

                  {/* Day 2 - Next */}
                  <div className="bg-white p-5 rounded-2xl border border-brand-200 shadow-sm relative">
                    <div className="text-xs font-bold text-brand-600 mb-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Day 2 (Tomorrow)
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Home Showcase & Trust
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li>• 4 Core Services Grid & Cards</li>
                      <li>• 6 Industries We Serve modules</li>
                      <li>• "Why Choose Udyvexa" value pillars</li>
                      <li>• Bottom conversion banner & CTAs</li>
                    </ul>
                  </div>

                  {/* Day 3 */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm opacity-90">
                    <div className="text-xs font-bold text-slate-500 mb-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Day 3
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Dedicated Services Page
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li>• Deep dive: Website Development</li>
                      <li>• Deep dive: Digital Marketing</li>
                      <li>• Deep dive: Custom Software</li>
                      <li>• Deep dive: Education Consultancy</li>
                      <li>• Feature checklists & Quote links</li>
                    </ul>
                  </div>

                  {/* Day 4 */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm opacity-90">
                    <div className="text-xs font-bold text-slate-500 mb-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Day 4
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      About Us & Final Polish
                    </h3>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      <li>• Company Mission & Vision cards</li>
                      <li>• 6 Core Values icon badges</li>
                      <li>• Privacy Policy & Terms page</li>
                      <li>• Cross-device QA & performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Services Page Preview */}
        {activePage === 'services' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-3">
                Our Services
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Simple Technology Solutions for Real Businesses
              </h1>
              <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                We provide affordable and customized digital services to help businesses, startups, educational consultancies and institutions grow online.
              </p>
            </div>

            {/* 4 Pillars Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Website Development</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Professional, responsive and affordable websites for businesses, consultancies and institutions.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Business Websites</div>
                  <div className="flex items-center gap-2">✓ E-commerce Websites</div>
                  <div className="flex items-center gap-2">✓ Landing Pages & Redesign</div>
                </div>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="mt-5 inline-flex items-center gap-1.5 text-brand-600 font-semibold text-xs hover:text-brand-700"
                >
                  <span>Get Started</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Marketing</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Grow your business with result-oriented digital marketing strategies.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Search Engine Optimization (SEO)</div>
                  <div className="flex items-center gap-2">✓ Google Ads & Social Media</div>
                  <div className="flex items-center gap-2">✓ Lead Generation & ORM</div>
                </div>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="mt-5 inline-flex items-center gap-1.5 text-brand-600 font-semibold text-xs hover:text-brand-700"
                >
                  <span>Get Started</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Software Development</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Custom software solutions to improve your business operations.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Business & Web Applications</div>
                  <div className="flex items-center gap-2">✓ Mobile Applications</div>
                  <div className="flex items-center gap-2">✓ CRM & Automation Tools</div>
                </div>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="mt-5 inline-flex items-center gap-1.5 text-brand-600 font-semibold text-xs hover:text-brand-700"
                >
                  <span>Get Started</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Education Consultancy Solutions</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Websites and digital solutions for school and college admission consultancies.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">✓ Consultancy Portals</div>
                  <div className="flex items-center gap-2">✓ Enquiry & Admissions CRM</div>
                  <div className="flex items-center gap-2">✓ Student Application Systems</div>
                </div>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="mt-5 inline-flex items-center gap-1.5 text-brand-600 font-semibold text-xs hover:text-brand-700"
                >
                  <span>Get Started</span> <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* About Us Page Preview */}
        {activePage === 'about' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-3">
                About Udyvexa
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Empowering Businesses Through Affordable Technology
              </h1>
              <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                Udyvexa Software & Digital Technologies Pvt. Ltd. is a software and digital services company focused on helping small and medium-sized businesses, startups, educational consultancies and institutions establish and grow their digital presence.
              </p>
            </div>

            {/* Mission & Vision Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-3">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600">
                  To make reliable, professional and affordable digital solutions accessible to small and medium businesses.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600">
                  To become a trusted technology partner for growing businesses through innovation, affordability and long-term relationships.
                </p>
              </div>
            </div>

            {/* Core Values preview */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Our Values</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Affordability', icon: IndianRupee },
                  { name: 'Transparency', icon: ShieldCheck },
                  { name: 'Innovation', icon: Lightbulb },
                  { name: 'Customer Focus', icon: Users },
                  { name: 'Quality', icon: Award },
                  { name: 'Long-Term Support', icon: Handshake },
                ].map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">{val.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Contact Us Preview */}
        {activePage === 'contact' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900">Contact Udyvexa</h1>
              <p className="text-sm text-slate-500 mt-2">
                Have questions or want to discuss a project? Reach out directly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Office & Inquiries</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Udyvexa Software & Digital Technologies Pvt. Ltd.</strong><br />
                  Hyderabad, Telangana, India
                </p>
                <div className="pt-2 text-sm text-slate-700 space-y-2">
                  <div><strong>Phone:</strong> +91 98765 43210</div>
                  <div><strong>Email:</strong> info@udyvexa.com</div>
                  <div><strong>Hours:</strong> Mon – Sat: 9:30 AM – 6:30 PM</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md transition-all text-center"
                >
                  Request a Free Quote Now
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-all text-center"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Policy Preview */}
        {activePage === 'policy' && (
          <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Privacy Policy & Terms</h1>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              At Udyvexa Software & Digital Technologies Pvt. Ltd., we are committed to safeguarding the privacy of our visitors and clients. Any information submitted through our forms (including your name, phone number, and email address) is kept strictly confidential and used solely to communicate regarding requested services.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. For queries regarding our policies, please email info@udyvexa.com.
            </p>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Floating Action Button for WhatsApp */}
      <WhatsAppFloat />

      {/* Modal Dialog for Quote Requests */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
