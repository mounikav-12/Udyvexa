import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import QuoteModal from './components/QuoteModal';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';


export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('Website Development');

  const handleOpenQuote = (service = 'Website Development') => {
    setQuoteService(service);
    setIsQuoteOpen(true);
  };

  // Sync with URL hash and handle redirects
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#aboutus' || hash === '#about') {
        setActivePage('about');
      } else if (hash === '#contact') {
        setActivePage('about');
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else if (hash === '#services') {
        setActivePage('services');
      } else if (hash === '#policy') {
        setActivePage('policy');
      } else if (hash === '#home' || hash === '') {
        setActivePage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Smooth scroll and handle #aboutus & contact us redirects
  const handleNavigate = (pageId) => {
    if (pageId === 'contact') {
      setActivePage('about');
      window.location.hash = 'contact';
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setActivePage(pageId);

    if (pageId === 'about') {
      window.location.hash = 'aboutus';
    } else if (pageId === 'home') {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = pageId;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f6f8] text-slate-800 font-sans selection:bg-[#1fa7c6] selection:text-white">
      {/* Main Header / Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote('Website Development')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onOpenQuote={handleOpenQuote}
            onNavigate={handleNavigate}
          />
        )}

        {/* Services Page – Full Dedicated Showcase Component */}
        {activePage === 'services' && (
          <ServicesPage onOpenQuote={handleOpenQuote} />
        )}

        {/* About Us Page – Full Premium Component (and Contact redirection) */}
        {activePage === 'about' && (
          <AboutUsPage onOpenQuote={() => handleOpenQuote('Custom Project')} />
        )}

        {/* Privacy Policy Preview */}
        {activePage === 'policy' && (
          <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl border border-[#d2e5ed] p-8 sm:p-10 shadow-lg">
              <h1 className="text-3xl font-extrabold text-[#072635] mb-4">Privacy Policy &amp; Terms</h1>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                At Udyvexa Software &amp; Digital Technologies Pvt. Ltd., we are committed to safeguarding the privacy of our visitors and clients. Any information submitted through our forms (including your name, phone number, and email address) is kept strictly confidential and used solely to communicate regarding requested services.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. For queries regarding our policies, please email <a href="mailto:info@udyvexa.com" className="text-[#0284c7] hover:underline font-medium">info@udyvexa.com</a>.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Modal Dialog for Quote Requests */}
      <QuoteModal
        key={`${quoteService}-${isQuoteOpen}`}
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialService={quoteService}
      />
    </div>
  );
}
