'use client';

import React from 'react';
import { FaMusic, FaHeartbeat, FaChild } from 'react-icons/fa';
import { MdSportsGymnastics, MdSportsKabaddi, MdSelfImprovement } from 'react-icons/md';
import { GiBoxingGlove } from 'react-icons/gi';

interface ScheduleItem {
  time: string;
  modality: string;
}

interface DaySchedule {
  day: string;
  classes: ScheduleItem[];
}

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

const CollectiveClasses: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,0,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tight">
            Aulas <span className="text-secondary-orange">Coletivas</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Cronograma semanal completo - Todas inclusas no plano
          </p>
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
    </section>
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

export default CollectiveClasses;
