import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { FacebookIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

export default function Navbar({ activePage = 'home', onNavigate, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'policy', label: 'Privacy Policy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-brand-navy text-slate-200 text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Direct Contacts */}
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>+91 98765 43210</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href="mailto:info@udyvexa.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>info@udyvexa.com</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-xs hidden md:inline">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all text-xs"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all text-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all text-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all text-xs"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 bg-white ${
          isScrolled
            ? 'sticky top-0 shadow-md py-3.5 backdrop-blur-md bg-white/95'
            : 'py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none"
            aria-label="Go to Home"
          >
            <Logo />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-[15px] font-medium transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-brand-600 font-semibold'
                      : 'text-slate-600 hover:text-brand-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-600 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-medium text-sm shadow-md shadow-brand-500/20 transition-all duration-200 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-50 text-brand-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm shadow-sm"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
