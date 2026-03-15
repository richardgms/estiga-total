import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/whatsapp';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-neutral py-10 md:py-10 overflow-hidden">
      <div className="absolute -top-48 -left-48 w-[40rem] h-[32rem] bg-secondary-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-[36rem] h-[30rem] bg-secondary-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[48rem] h-96 bg-secondary-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-md mx-auto mb-8 md:mb-12">
          <div className="text-center">
            <div className="mb-3 md:mb-4 flex justify-center">
              <Image
                src="/icons/wordmark.svg"
                alt="Estiga Total"
                width={180}
                height={28}
                className="w-auto h-7 md:h-8"
              />
            </div>
            <p className="text-gray-300 text-sm md:text-sm leading-relaxed mb-3 md:mb-4">
              Com duas unidades estrategicamente localizadas no <strong className="text-white font-bold">Bairro Popular</strong>, a Estiga Total é a opção ideal para moradores do <strong className="text-white font-bold">Centro</strong>, <strong className="text-white font-bold">Jardim Planalto</strong> e toda Santa Rita.
            </p>
            <div className="flex justify-center gap-3 mt-4 md:mt-6">
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
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-sm md:text-sm text-gray-400">
            <p className="text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">Estiga Total Academia</span> - Santa Rita - PB. Todos os direitos reservados.
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
