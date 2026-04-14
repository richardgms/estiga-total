'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  result: string;
  rating: number;
  testimonial: string;
  beforeImage: string;
  afterImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Thaiz',
    result: '-10kg (74kg → 64kg)',
    rating: 5,
    testimonial: 'A Estiga Total mudou minha vida! Com o apoio da equipe, eliminei 10kg e conquistei a saúde que sempre quis. Me sinto incrível!',
    beforeImage: '/images/transformations/t1-before-compressed.webp',
    afterImage: '/images/transformations/t1-after-compressed.webp',
  },
  {
    id: 2,
    name: 'Thaise',
    result: '-9kg em 30 dias',
    rating: 5,
    testimonial: 'Em apenas 30 dias consegui resultados que nunca imaginei! A equipe da Estiga Total é incrível, me motivaram todos os dias. Estou muito feliz com minha transformação!',
    beforeImage: '/images/transformations/t2-before-compressed.webp',
    afterImage: '/images/transformations/t2-after-compressed.webp',
  },
  {
    id: 3,
    name: 'Adriana',
    result: '-18kg em 6 meses',
    rating: 5,
    testimonial: 'Perder 18kg em 6 meses parecia impossível, mas na Estiga Total eu consegui! A metodologia e o incentivo dos professores fizeram toda a diferença nessa jornada.',
    beforeImage: '/images/transformations/t3-before-compressed.webp',
    afterImage: '/images/transformations/t3-after-compressed.webp',
  },
  {
    id: 4,
    name: 'Ellis Vitória',
    result: '+11kg de massa em 8 meses',
    rating: 5,
    testimonial: 'Ganhei 11kg de massa muscular em 8 meses! A estrutura e os treinos personalizados da Estiga Total foram essenciais para eu alcançar meu objetivo de hipertrofia.',
    beforeImage: '/images/transformations/t4-before-compressed.webp',
    afterImage: '/images/transformations/t4-after-compressed.webp',
  },
];

const SocialProof: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0); // 0 = primeira página (1-2), 1 = segunda página (3-4)
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      setActiveSlide(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Debounced scroll handler
      let scrollTimeout: NodeJS.Timeout;
      const debouncedHandleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 50);
      };

      container.addEventListener('scroll', debouncedHandleScroll, { passive: true });
      return () => {
        clearTimeout(scrollTimeout);
        container.removeEventListener('scroll', debouncedHandleScroll);
      };
    }
  }, []);

  // IntersectionObserver para detecção precisa do slide ativo
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observerOptions = {
      root: container,
      threshold: 0.5, // Card é considerado ativo quando 50% está visível
      rootMargin: '0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = slideRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveSlide(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,0,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-3 tracking-tight">
            Transformações <span className="text-secondary-orange">Reais</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Veja os resultados de quem treina na Estiga Total
          </p>
        </div>

        {/* Desktop View - Carousel */}
        <div className="hidden lg:block mb-12">
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              {/* Botão Esquerda */}
              <button
                onClick={() => setDesktopPage(0)}
                disabled={desktopPage === 0}
                className={`p-4 rounded-full transition-all duration-300 flex-shrink-0 ${desktopPage === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-secondary-orange text-white hover:bg-orange-600 hover:scale-110 shadow-lg hover:shadow-secondary-orange/50'
                  }`}
                aria-label="Página anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Grid com 2 cards por página */}
              <div className="grid grid-cols-2 gap-6 py-2 max-w-4xl w-full">
                {testimonials
                  .slice(desktopPage * 2, desktopPage * 2 + 2)
                  .map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
              </div>

              {/* Botão Direita */}
              <button
                onClick={() => setDesktopPage(1)}
                disabled={desktopPage === 1}
                className={`p-4 rounded-full transition-all duration-300 flex-shrink-0 ${desktopPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-secondary-orange text-white hover:bg-orange-600 hover:scale-110 shadow-lg hover:shadow-secondary-orange/50'
                  }`}
                aria-label="Próxima página"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Indicadores de página */}
            <div className="flex justify-center gap-2 mt-6">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${desktopPage === 0 ? 'w-8 bg-secondary-orange' : 'w-2 bg-gray-300'
                  }`}
              />
              <div
                className={`h-2 rounded-full transition-all duration-300 ${desktopPage === 1 ? 'w-8 bg-secondary-orange' : 'w-2 bg-gray-300'
                  }`}
              />
            </div>
          </div>
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="lg:hidden relative">
          <p className="text-center text-sm text-gray-500 mb-2 px-6">
            ← Arraste para ver mais →
          </p>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 sm:pb-10 pt-4 px-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="w-[calc(100vw-3rem)] max-w-md snap-center flex-shrink-0 py-2"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-2 sm:mt-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`rounded-full transition-all duration-500 ease-out transform ${activeSlide === index
                  ? 'w-10 h-2.5 bg-secondary-orange scale-110 shadow-lg shadow-secondary-orange/50'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                aria-label={`Ir para depoimento ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary-orange/30 group max-w-md mx-auto lg:max-w-none">
      <div className="relative aspect-[3/5] lg:aspect-[3/4] overflow-hidden">
        <div className="absolute top-2 left-2 lg:top-3 lg:left-3 z-10 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 lg:px-3 lg:py-1.5 rounded-full transition-all duration-300">
          {showAfter ? 'DEPOIS' : 'ANTES'}
        </div>

        <div
          className="flex w-[200%] h-full transition-transform duration-700 ease-in-out"
          style={{ transform: showAfter ? 'translateX(-50%)' : 'translateX(0)' }}
        >
          <div className="relative w-1/2 h-full flex-shrink-0">
            <Image
              src={testimonial.beforeImage}
              alt={`${testimonial.name} - Antes`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative w-1/2 h-full flex-shrink-0">
            <Image
              src={testimonial.afterImage}
              alt={`${testimonial.name} - Depois`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="p-5 lg:p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg lg:text-xl font-bold text-primary">{testimonial.name}</h3>
          <div className="flex gap-0.5 lg:gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-secondary-orange text-sm lg:text-sm" />
            ))}
          </div>
        </div>

        <div className="mb-2 lg:mb-3">
          <span className="inline-block bg-gradient-to-r from-secondary-orange to-orange-600 text-white font-bold text-sm lg:text-lg px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow-md">
            {testimonial.result}
          </span>
        </div>

        <p className="text-gray-600 italic leading-relaxed text-sm lg:text-sm">
          {testimonial.testimonial}
        </p>
      </div>
    </div>
  );
};

export default SocialProof;
