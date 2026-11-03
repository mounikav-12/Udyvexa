import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

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
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'shadow-md shadow-slate-200/60 py-3.5 backdrop-blur-md bg-white/95 border-b border-[#d2e5ed]'
            : 'py-4 bg-white/90 backdrop-blur-md border-b border-[#d2e5ed]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none"
            aria-label="Go to Home"
          >
            <Logo light={false} />
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
                      ? 'text-[#0284c7] font-semibold'
                      : 'text-slate-600 hover:text-[#0284c7]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1fa7c6] to-[#8274ff] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 active:scale-95 text-white font-medium text-sm shadow-md shadow-cyan-500/20 transition-all duration-200 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#072635] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#d2e5ed] px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-50 text-[#0284c7] font-semibold border border-cyan-200'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-[#d2e5ed]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#1fa7c6] via-[#4f75d9] to-[#8274ff] hover:opacity-95 text-white font-medium text-sm shadow-md shadow-cyan-500/20"
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
