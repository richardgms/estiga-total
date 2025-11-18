'use client';

import React from 'react';
import { FaDumbbell, FaMusic, FaClock, FaChild } from 'react-icons/fa';
import { MdSportsGymnastics, MdSportsKabaddi, MdSelfImprovement } from 'react-icons/md';
import { GiBoxingGlove, GiWeightLiftingUp } from 'react-icons/gi';

interface Modality {
  title: string;
  icon: React.ReactNode;
  benefits: string[];
  availability?: string;
}

const modalities: Modality[] = [
  {
    title: 'Musculação',
    icon: <FaDumbbell className="text-4xl text-secondary-orange" />,
    benefits: [
      'Equipamentos modernos',
      'Acompanhamento profissional',
      'Treinos personalizados',
    ],
    availability: 'Disponível em todos os horários',
  },
  {
    title: 'Aeróbox',
    icon: <GiBoxingGlove className="text-4xl text-secondary-orange" />,
    benefits: [
      'Queima calorias intensiva',
      'Melhora condicionamento',
      'Defesa pessoal prática',
    ],
  },
  {
    title: 'Jump + Step',
    icon: <MdSportsGymnastics className="text-4xl text-secondary-orange" />,
    benefits: [
      'Exercício cardiovascular',
      'Fortalece pernas e core',
      'Aulas dinâmicas e divertidas',
    ],
  },
  {
    title: 'Fit Dance',
    icon: <FaMusic className="text-4xl text-secondary-orange" />,
    benefits: [
      'Dança e fitness combinados',
      'Queima calorias dançando',
      'Ambiente descontraído',
    ],
  },
  {
    title: 'Hit Box',
    icon: <MdSportsKabaddi className="text-4xl text-secondary-orange" />,
    benefits: [
      'Treino de alta intensidade',
      'Explosão muscular',
      'Técnicas de luta',
    ],
  },
  {
    title: 'Funcional',
    icon: <GiWeightLiftingUp className="text-4xl text-secondary-orange" />,
    benefits: [
      'Movimentos naturais do corpo',
      'Melhora equilíbrio e coordenação',
      'Treino completo',
    ],
  },
  {
    title: 'Pilates Solo',
    icon: <MdSelfImprovement className="text-4xl text-secondary-orange" />,
    benefits: [
      'Fortalecimento do core',
      'Melhora postura e flexibilidade',
      'Exercícios no solo',
    ],
  },
  {
    title: 'Funcional Kids',
    icon: <FaChild className="text-4xl text-secondary-orange" />,
    benefits: [
      'Atividades lúdicas',
      'Desenvolve coordenação motora',
      'Treinamento para crianças',
    ],
  },
];

const Modalities: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,0,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Escolha Seu <span className="text-secondary-orange">Treino</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Todas as modalidades inclusas no plano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {modalities.slice(0, 6).map((modality, index) => (
            <ModalityCard key={index} modality={modality} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-4 lg:mt-6">
          {modalities.slice(6).map((modality, index) => (
            <div key={index + 6} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <ModalityCard modality={modality} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ModalityCard: React.FC<{ modality: Modality }> = ({ modality }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-secondary-orange/50 hover:-translate-y-2 h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-center w-14 h-14 bg-secondary-orange/10 rounded-xl mb-4 group-hover:bg-secondary-orange/20 transition-colors duration-300">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {modality.icon}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white mb-4 group-hover:text-secondary-orange transition-colors duration-300">
          {modality.title}
        </h3>

        <ul className="space-y-2.5 flex-grow">
          {modality.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-orange/20 flex items-center justify-center mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-orange" />
              </div>
              <span className="text-gray-200 text-sm leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {modality.availability && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-gray-300 text-sm flex items-center gap-2">
              <FaClock className="text-secondary-orange" />
              {modality.availability}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modalities;
