'use client';

import React from 'react';
import { FaCertificate, FaDumbbell, FaClock, FaUsers } from 'react-icons/fa';

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <FaCertificate className="text-5xl text-secondary-orange" />,
    title: 'Equipe Qualificada',
    description: 'Profissionais certificados e experientes. Acompanhamento personalizado em todas as modalidades.',
  },
  {
    id: 2,
    icon: <FaDumbbell className="text-5xl text-secondary-orange" />,
    title: 'Estrutura Completa',
    description: 'Equipamentos de última geração. Ambiente climatizado e higienizado.',
  },
  {
    id: 3,
    icon: <FaClock className="text-5xl text-secondary-orange" />,
    title: 'Flexibilidade de Horários',
    description: 'Seg a Sex: 05h às 22h | Sáb: 8h às 11h e 14h às 17h',
  },
  {
    id: 4,
    icon: <FaUsers className="text-5xl text-secondary-orange" />,
    title: 'Aulas Coletivas Inclusas',
    description: 'Mais de 6 modalidades no mesmo plano. Traga um amigo grátis a cada 30 dias.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,0,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Por que treinar na <span className="text-secondary-orange">Estiga Total?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença na sua jornada fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  return (
    <div className="group relative bg-black rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-secondary-orange/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary-orange/20 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {benefit.icon}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-secondary-orange transition-colors duration-300">
          {benefit.title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default Benefits;
