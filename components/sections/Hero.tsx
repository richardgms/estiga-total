'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { FaCheckCircle, FaDumbbell } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.webp"
          alt="Estiga Total Academia - Estrutura moderna e equipamentos de última geração"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center lg:items-start lg:max-w-4xl text-center lg:text-left">
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-secondary-orange to-orange-600 text-white font-bold text-sm sm:text-base shadow-2xl border-2 border-white/20">
            <span className="tracking-wide">1 DIA GRÁTIS - Qualquer Modalidade</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-[1.1] tracking-tight">
            Sua melhor versão
            <span className="block text-secondary-orange mt-2">
              começa aqui
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 mb-10 max-w-3xl leading-relaxed font-medium drop-shadow-lg">
            Estrutura completa, profissionais qualificados e planos acessíveis em
            <span className="text-secondary-orange font-bold"> Santa Rita/PB</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mb-10">
            <Button
              variant="primary-orange"
              size="large"
              showWhatsAppIcon
              href={getWhatsAppLink('Olá! Quero agendar minha aula experimental GRÁTIS na Estiga Total!')}
              className="text-xl sm:text-2xl px-10 py-6 shadow-2xl hover:shadow-secondary-orange/30 font-bold"
            >
              Quero Minha Aula Grátis
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-secondary-orange/60 hover:bg-white/20 transition-all">
              <FaCheckCircle className="text-3xl text-secondary-orange flex-shrink-0" />
              <div className="text-left">
                <p className="text-white font-bold text-base">Sem Taxa</p>
                <p className="text-gray-300 text-sm">de Matrícula</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-secondary-orange/60 hover:bg-white/20 transition-all">
              <FaDumbbell className="text-3xl text-secondary-orange flex-shrink-0" />
              <div className="text-left">
                <p className="text-white font-bold text-base">6 Modalidades</p>
                <p className="text-gray-300 text-sm">Incluídas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-secondary-orange/60 hover:bg-white/20 transition-all">
              <FaCheckCircle className="text-3xl text-secondary-orange flex-shrink-0" />
              <div className="text-left">
                <p className="text-white font-bold text-base">Horários</p>
                <p className="text-gray-300 text-sm">Flexíveis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white text-4xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;
