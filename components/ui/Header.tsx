'use client';

import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/whatsapp';

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/40 shadow-2xl z-50 border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 relative z-10">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center transition-all hover:scale-105 active:scale-95"
            aria-label="Voltar ao topo"
          >
            <div className="text-2xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              ESTIGA TOTAL
            </div>
          </button>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-white">
              <FaMapMarkerAlt className="text-secondary-orange text-lg" />
              <span>Santa Rita/PB</span>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-secondary-orange to-orange-600 hover:from-secondary-orange/90 hover:to-orange-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
