'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import { getWhatsAppLink, UnidadeKey } from '@/lib/whatsapp';

interface UnidadeData {
  id: UnidadeKey;
  name: string;
  shortName: string;
  address: string;
  neighborhood: string;
  whatsapp: string;
  googleMapsLink: string;
  iframeSrc: string;
}

const UNITS: UnidadeData[] = [
  {
    id: 'unidade1',
    name: 'Unidade 1 - Centro/Popular',
    shortName: 'Unidade 01',
    address: 'R. Venâncio Correia, 182',
    neighborhood: 'Bairro Popular, Santa Rita - PB',
    whatsapp: '(83) 99190-7740',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=R.+Venâncio+Correia,+182,+Santa+Rita,+PB',
    iframeSrc: 'https://maps.google.com/maps?q=R.+Venâncio+Correia,+182,+Bairro+Popular,+Santa+Rita+-+PB&output=embed',
  },
  {
    id: 'unidade2',
    name: 'Unidade 2 - Popular',
    shortName: 'Unidade 02',
    address: 'R. do Colégio, 164',
    neighborhood: 'Bairro Popular, Santa Rita - PB',
    whatsapp: '(83) 99420-6593',
    googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=R.+do+Colégio,+164,+Santa+Rita,+PB',
    iframeSrc: 'https://maps.google.com/maps?q=R.+do+Colégio,+164,+Bairro+Popular,+Santa+Rita+-+PB&output=embed',
  }
];

const Location = () => {
  const [activeUnit, setActiveUnit] = useState<UnidadeKey>('unidade1');
  
  const currentUnit = UNITS.find(u => u.id === activeUnit) || UNITS[0];
  const whatsappMessage = `Olá! Gostaria de visitar a ${currentUnit.name}. Qual o melhor horário?`;

  const infoCards = [
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      primary: currentUnit.address,
      secondary: currentUnit.neighborhood,
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
      primary: currentUnit.whatsapp,
      secondary: 'Atendimento rápido e direto',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden" id="localizacao">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,0,0.15),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Nossas <span className="text-secondary-orange">Unidades</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Agora com duas unidades em Santa Rita! Escolha a mais próxima e venha fazer sua aula experimental gratuita.
          </p>
        </div>

        {/* Unit Selector Tabs */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border-2 border-white/10">
            {UNITS.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setActiveUnit(unit.id)}
                className={`
                  relative px-6 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300
                  ${activeUnit === unit.id 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {activeUnit === unit.id && (
                  <div className="absolute inset-0 bg-secondary-orange rounded-xl -z-10 shadow-[0_0_20px_rgba(255,107,0,0.4)]" />
                )}
                <span className="relative z-10">{unit.shortName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Information Cards + Buttons */}
          <div className="space-y-6 flex flex-col h-full">
            {/* Information Cards */}
            <div className="space-y-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-secondary-orange/50 transition-all duration-300"
                  >
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-secondary-orange/20 transition-all duration-300">
                          <Icon className="text-3xl text-secondary-orange" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2 font-poppins">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-auto">
              <Button
                href={currentUnit.googleMapsLink}
                variant="primary-orange"
                size="medium"
                className="w-full justify-center shadow-2xl hover:shadow-secondary-orange/30 font-bold"
              >
                <FaDirections className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Como Chegar</span>
              </Button>
              <Button
                href={getWhatsAppLink(activeUnit, whatsappMessage)}
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
                <strong className="text-white font-bold">Inauguramos a Unidade 2!</strong> Já estamos funcionando a todo vapor no Bairro Popular (Rua do Colégio). Venha conhecer!
              </p>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="order-first lg:order-last min-h-[400px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full border-2 border-white/20 min-h-[400px]">
              <iframe
                src={currentUnit.iframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização da Estiga Total Academia - ${currentUnit.name}`}
                className="absolute inset-0"
                key={activeUnit} // Force re-render iframe on unit change
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
