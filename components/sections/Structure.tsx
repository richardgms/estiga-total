'use client';

import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span: 1 | 2;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-1.jpg',
    alt: 'Estiga Total Academia - Equipamentos de Musculação em Santa Rita',
    span: 2,
  },
  {
    id: 2,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-2.jpg',
    alt: 'Estiga Total Academia - Área de Pesos Livres',
    span: 1,
  },
  {
    id: 3,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-3.jpg',
    alt: 'Estiga Total Academia - Máquinas Modernas',
    span: 1,
  },
  {
    id: 4,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-4.jpg',
    alt: 'Estiga Total Academia - Espaço Amplo',
    span: 2,
  },
  {
    id: 5,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-5.jpg',
    alt: 'Estiga Total Academia - Treino Funcional',
    span: 1,
  },
  {
    id: 6,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-6.jpg',
    alt: 'Estiga Total Academia - Ambiente Climatizado',
    span: 1,
  },
  {
    id: 7,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-7.jpg',
    alt: 'Estiga Total Academia - Halteres e Anilhas',
    span: 1,
  },
  {
    id: 8,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-8.png',
    alt: 'Estiga Total Academia - Esteiras e Cardio',
    span: 1,
  },
  {
    id: 9,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-9.jpg',
    alt: 'Estiga Total Academia - Área de Musculação',
    span: 1,
  },
  {
    id: 10,
    src: '/images/structure/academia-musculacao-santa-rita-equipamentos-10.png',
    alt: 'Estiga Total Academia - Visão Geral',
    span: 1,
  },
];

const GalleryItem: React.FC<{ image: GalleryImage }> = ({ image }) => {
  const spanClass = image.span === 2 ? 'row-span-2' : 'row-span-1';

  return (
    <div className={`relative ${spanClass} w-full rounded-xl overflow-hidden shadow-lg`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        quality={85}
        className="object-cover"
      />
    </div>
  );
};

const Structure: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            Conheça Nossa{' '}
            <span className="text-secondary-orange">Estrutura</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Equipamentos modernos e espaço completo para seu treino
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
          {galleryImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-12 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Optional: Features List Below Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-secondary-orange/10 rounded-full mb-4">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2 text-black">
              Equipamentos Modernos
            </h3>
            <p className="text-sm text-gray-600">
              Máquinas de última geração para todos os treinos
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-secondary-orange/10 rounded-full mb-4">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2 text-black">
              Espaço Amplo
            </h3>
            <p className="text-sm text-gray-600">
              Áreas dedicadas para musculação e aulas coletivas
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-secondary-orange/10 rounded-full mb-4">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-base sm:text-lg mb-2 text-black">
              Higienização Completa
            </h3>
            <p className="text-sm text-gray-600">
              Limpeza constante para sua segurança e bem-estar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;
