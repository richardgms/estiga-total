'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { FaClock } from 'react-icons/fa';

const CTAFinal: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/structure/estrutura6.jpg"
          alt="Estiga Total Academia - Estrutura"
          fill
          className="object-cover object-center"
          quality={85}
          sizes="100vw"
        />
        {/* Overlays de gradiente para contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Gradientes decorativos sutis */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,0,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de Urgência */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-orange/10 border border-secondary-orange/30 rounded-full mb-6 sm:mb-8">
            <FaClock className="text-secondary-orange text-sm" />
            <span className="text-sm font-semibold text-secondary-orange uppercase tracking-wide">
              Vagas Limitadas
            </span>
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Pronto para Sua{' '}
            <span className="text-secondary-orange">Transformação?</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-10 sm:mb-12 font-medium drop-shadow-lg">
            Agende agora sua aula experimental grátis!
          </p>

          {/* Botão CTA */}
          <div className="mb-6 sm:mb-8">
            <Button
              variant="primary-orange"
              size="large"
              showWhatsAppIcon
              href={getWhatsAppLink('Olá! Quero agendar minha aula experimental GRÁTIS na Estiga Total!')}
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300"
            >
              Quero Minha Aula Grátis
            </Button>
          </div>

          {/* Texto de Urgência */}
          <p className="text-sm sm:text-base text-gray-400 flex items-center justify-center gap-2">
            <FaClock className="text-secondary-orange" />
            <span>Vagas limitadas por horário</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
