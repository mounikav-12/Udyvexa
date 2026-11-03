import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {showTooltip && (
        <div className="relative bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-2xl border border-[#d2e5ed] flex items-center gap-2 animate-bounce duration-1000">
          <span>👋 Have a question? Chat with our team!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 focus:outline-none"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-b border-r border-[#d2e5ed] rotate-45"></div>
        </div>
      )}

      <a
        href="https://wa.me/919876543210?text=Hi%20Udyvexa%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
