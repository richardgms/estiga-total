import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/whatsapp';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-neutral py-10 md:py-10 overflow-hidden">
      <div className="absolute -top-48 -left-48 w-[40rem] h-[32rem] bg-secondary-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-[36rem] h-[30rem] bg-secondary-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[48rem] h-96 bg-secondary-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="text-center md:text-left">
            <div className="mb-3 md:mb-4 flex justify-center md:justify-start">
              <Image
                src="/icons/wordmark.svg"
                alt="Estiga Total"
                width={180}
                height={28}
                className="w-auto h-7 md:h-8"
              />
            </div>
            <p className="text-gray-300 text-sm md:text-sm leading-relaxed mb-3 md:mb-4">
              Academia completa em Santa Rita/PB com estrutura moderna, profissionais qualificados e planos acessíveis.
            </p>
            <div className="flex justify-center md:justify-start gap-3 mt-4 md:mt-6">
              <a
                href="https://instagram.com/estigatotal.academia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary-orange/80 to-orange-600/80 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg hover:shadow-secondary-orange/40"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-lg hover:shadow-green-500/50"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:contents">
            <div className="text-left md:text-left">
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg text-secondary-orange">Contato</h4>
              <ul className="space-y-3 md:space-y-3 text-sm md:text-sm text-gray-300">
                <li>
                  <a
                    href="tel:+5583991907740"
                    className="flex items-center gap-2 hover:text-secondary-orange transition-colors group"
                  >
                    <FaPhone className="text-secondary-orange group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>(83) 99190-7740</span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-secondary-orange mt-0.5 flex-shrink-0" />
                  <span>Santa Rita/PB</span>
                </li>
              </ul>
            </div>

            <div className="text-left md:text-left">
              <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg text-secondary-orange">Horário</h4>
              <ul className="space-y-3 md:space-y-3 text-sm md:text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <FaClock className="text-secondary-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Seg-Sex</p>
                    <p>05:00-22:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FaClock className="text-secondary-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Sábado</p>
                    <p>08:00-11:00</p>
                    <p>14:00-17:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-left md:text-left">
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-lg text-secondary-orange">Modalidades</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-orange flex-shrink-0"></span>
                <span>Musculação</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-orange flex-shrink-0"></span>
                <span>Fit Dance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-orange flex-shrink-0"></span>
                <span>Jump + Step</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-orange flex-shrink-0"></span>
                <span>Aeróbox</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-orange flex-shrink-0"></span>
                <span>Hit Box</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-orange flex-shrink-0"></span>
                <span>Funcional</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-sm md:text-sm text-gray-400">
            <p className="text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">Estiga Total Academia</span> - Santa Rita/PB. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:gap-6 text-sm">
              <a href="#" className="hover:text-secondary-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary-orange transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
