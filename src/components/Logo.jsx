import React from 'react';

export default function Logo({ light = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Modern Emblem */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0066f6] via-blue-500 to-[#38bdf8] p-[2px] shadow-sm">
        <div
          className="w-full h-full rounded-[14px] bg-white flex items-center justify-center relative overflow-hidden transition-colors"
        >
          <div className="absolute inset-0 bg-blue-50/50"></div>
          {/* Stylized 'U' symbol with tech curves */}
          <svg
            viewBox="0 0 36 36"
            className="w-7 h-7 relative z-10"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8V19C10 23.4183 13.5817 27 18 27C22.4183 27 26 23.4183 26 19V8"
              stroke="url(#uGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="18" cy="18" r="3" fill="#0066f6" />
            <defs>
              <linearGradient id="uGradient" x1="10" y1="8" x2="26" y2="27" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0066f6" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span
            className={`font-black tracking-tight text-xl leading-none font-sans ${
              light ? 'text-white' : 'text-[#072635]'
            }`}
          >
            UDYVEXA
          </span>
        </div>
        <span
          className={`text-[10px] sm:text-[11px] font-medium tracking-tight mt-0.5 leading-tight ${
            light ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Software &amp; Digital Technologies Pvt. Ltd.
        </span>
      </div>
    </div>
  );
}
