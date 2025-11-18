'use client';

import React from 'react';
import { FaMapMarkerAlt, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';

const Location = () => {
  const googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=R.+Venâncio+Correia,+182,+Santa+Rita,+PB';
  const whatsappMessage = 'Olá! Gostaria de visitar a academia. Qual o melhor horário?';

  const infoCards = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      primary: 'R. Venâncio Correia, 182',
      secondary: 'Bairro Popular, Santa Rita - PB',
    },
    {
      icon: FaClock,
      title: 'Horários',
      primary: 'Segunda a Sexta: 05h às 22h',
      secondary: 'Sábado: 8h às 11h | 14h às 17h',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      primary: '(83) 99190-7740',
      secondary: 'Atendimento rápido e direto',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,0,0.15),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Visite Nossa <span className="text-secondary-orange">Academia</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos localizados no coração de Santa Rita. Venha conhecer nossa estrutura e fazer sua aula experimental gratuita!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Information Cards + Buttons */}
          <div className="space-y-6">
            {/* Information Cards */}
            <div className="space-y-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white/20 hover:border-secondary-orange/50"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-secondary-orange/20 transition-all duration-300">
                          <Icon className="text-3xl text-secondary-orange" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">
                          {card.title}
                        </h3>
                        <p className="text-lg sm:text-xl font-bold text-white mb-1">
                          {card.primary}
                        </p>
                        <p className="text-sm sm:text-base text-gray-200">
                          {card.secondary}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Button
                href={googleMapsLink}
                variant="primary-orange"
                size="medium"
                className="w-full justify-center shadow-2xl hover:shadow-secondary-orange/30 font-bold"
              >
                <FaDirections className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Como Chegar</span>
              </Button>
              <Button
                href={getWhatsAppLink(whatsappMessage)}
                variant="primary-orange"
                size="medium"
                showWhatsAppIcon
                className="w-full justify-center shadow-2xl hover:shadow-secondary-orange/30 font-bold"
              >
                <span>Falar no WhatsApp</span>
              </Button>
            </div>

            {/* Additional Info Badge */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm border-l-4 border-secondary-orange rounded-lg">
              <p className="text-sm text-gray-200">
                <strong className="text-white">Dica:</strong> Agende sua visita pelo WhatsApp e garanta atendimento personalizado com um de nossos consultores!
              </p>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-full lg:min-h-[600px] border-2 border-white/20">
              <iframe
                src="https://maps.google.com/maps?q=R.+Venâncio+Correia,+182,+Bairro+Popular,+Santa+Rita+-+PB&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Estiga Total Academia - R. Venâncio Correia, 182, Santa Rita - PB"
                className="absolute inset-0"
              />
              {/* Map Overlay for better visual */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
