import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { FacebookIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onNavigate }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'policy', label: 'Privacy Policy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const serviceLinks = [
    { id: 'web-dev', label: 'Website Development' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'software-dev', label: 'Software Development' },
    { id: 'edu-tech', label: 'Education Consultancy Solutions' },
  ];

  return (
    <footer id="contact" className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Logo light={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Affordable websites, digital marketing, software solutions and education consultancy technology services designed to help small and growing businesses thrive online.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-brand-400 transition-colors text-slate-400 hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-brand-400 transition-colors text-slate-400 text-left hover:underline hover:underline-offset-4"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0 text-brand-400">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0 text-brand-400">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@udyvexa.com" className="hover:text-white transition-colors">
                  info@udyvexa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center flex-shrink-0 text-brand-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {CURRENT_YEAR} Udyvexa Software & Digital Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('policy')}
              className="hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('policy')}
              className="hover:text-slate-400 transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
