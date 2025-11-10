'use client';

import React from 'react';
import { FaDumbbell, FaMusic, FaHeartbeat, FaClock, FaRunning, FaChild } from 'react-icons/fa';
import { MdSportsGymnastics, MdSportsKabaddi, MdFitnessCenter, MdSelfImprovement } from 'react-icons/md';
import { GiBoxingGlove, GiWeightLiftingUp } from 'react-icons/gi';

interface ScheduleItem {
  time: string;
  modality: string;
}

interface DaySchedule {
  day: string;
  classes: ScheduleItem[];
}

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

const schedule: DaySchedule[] = [
  {
    day: 'Segunda-feira',
    classes: [
      { time: '17h', modality: 'Step' },
      { time: '19h', modality: 'Hit Box' },
    ],
  },
  {
    day: 'Terça-feira',
    classes: [
      { time: '17h', modality: 'Pilates Solo' },
      { time: '18h', modality: 'Funcional Kids' },
      { time: '19h', modality: 'Fit Dance' },
    ],
  },
  {
    day: 'Quarta-feira',
    classes: [
      { time: '06h', modality: 'Hit Box' },
      { time: '17h', modality: 'Jump' },
      { time: '19h', modality: 'Aeróbox' },
    ],
  },
  {
    day: 'Quinta-feira',
    classes: [
      { time: '19h', modality: 'Fit Dance' },
    ],
  },
  {
    day: 'Sexta-feira',
    classes: [
      { time: '06h', modality: 'Hit Box' },
      { time: '17h', modality: 'Hit Box' },
    ],
  },
];

const modalityIcons: { [key: string]: React.ReactNode } = {
  'Aeróbox': <GiBoxingGlove className="text-2xl text-secondary-orange" />,
  'Jump + Step': <MdSportsGymnastics className="text-2xl text-secondary-orange" />,
  'Fit Dance': <FaMusic className="text-2xl text-secondary-orange" />,
  'Hit Box': <MdSportsKabaddi className="text-2xl text-secondary-orange" />,
  'Step': <MdSportsGymnastics className="text-2xl text-secondary-orange" />,
  'Jump': <MdSportsGymnastics className="text-2xl text-secondary-orange" />,
  'Pilates Solo': <MdSelfImprovement className="text-2xl text-secondary-orange" />,
  'Funcional Kids': <FaChild className="text-2xl text-secondary-orange" />,
};

const Modalities: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,0,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            Escolha Seu <span className="text-secondary-orange">Treino</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Todas as modalidades inclusas no plano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {modalities.slice(0, 6).map((modality, index) => (
            <ModalityCard key={index} modality={modality} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-4 lg:mt-6 mb-16">
          {modalities.slice(6).map((modality, index) => (
            <div key={index + 6} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <ModalityCard modality={modality} />
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-neutral-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Aulas <span className="text-secondary-orange">Coletivas</span>
            </h3>
            <p className="text-base text-neutral-600">Cronograma semanal completo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {schedule.slice(0, 3).map((daySchedule, index) => (
              <ScheduleCard key={index} daySchedule={daySchedule} index={index} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-5 mt-4 lg:mt-5">
            {schedule.slice(3).map((daySchedule, index) => (
              <div key={index + 3} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
                <ScheduleCard daySchedule={daySchedule} index={index + 3} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ModalityCard: React.FC<{ modality: Modality }> = ({ modality }) => {
  return (
    <div className="group relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black rounded-2xl p-6 overflow-hidden shadow-xl hover:shadow-secondary-orange/20 transition-all duration-500 hover:-translate-y-1 h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-orange/5 rounded-full blur-3xl transform translate-x-24 -translate-y-24" />

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
              <span className="text-zinc-300 text-sm leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {modality.availability && (
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <p className="text-zinc-400 text-sm flex items-center gap-2">
              <FaClock className="text-secondary-orange" />
              {modality.availability}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ScheduleCard: React.FC<{ daySchedule: DaySchedule; index: number }> = ({ daySchedule, index }) => {
  return (
    <div className="group relative bg-gradient-to-br from-secondary-orange/10 to-secondary-orange/5 rounded-xl p-4 md:p-5 border border-secondary-orange/20 hover:border-secondary-orange/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base sm:text-lg font-bold text-black">
          {daySchedule.day}
        </h4>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-secondary-orange animate-pulse" />
          <span className="text-sm text-neutral-500 font-medium">{daySchedule.classes.length} aulas</span>
        </div>
      </div>

      <div className="space-y-2.5 min-h-[140px] flex flex-col justify-center">
        {daySchedule.classes.map((classItem, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-white/50 rounded-lg p-2.5 hover:bg-white/80 transition-colors duration-200">
            <div className="flex-shrink-0 w-9 h-9 bg-black rounded-lg flex items-center justify-center">
              {modalityIcons[classItem.modality] || <FaHeartbeat className="text-lg text-secondary-orange" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-secondary-orange">{classItem.time}</span>
                <span className="text-neutral-400 text-xs">•</span>
                <span className="text-xs font-semibold text-black truncate">{classItem.modality}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modalities;
