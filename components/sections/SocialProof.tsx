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
    beforeImage: '/images/testimonials/testimonial1.jpg',
    afterImage: '/images/testimonials/testimonial1(1).jpg',
  },
  {
    id: 2,
    name: 'Thaise',
    result: '-9kg em 30 dias',
    rating: 5,
    testimonial: 'Em apenas 30 dias consegui resultados que nunca imaginei! A equipe da Estiga Total é incrível, me motivaram todos os dias. Estou muito feliz com minha transformação!',
    beforeImage: '/images/testimonials/testimonial2.jpg',
    afterImage: '/images/testimonials/testimonial2(1).jpg',
  },
];

const SocialProof: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tight">
            Transformações <span className="text-secondary-orange">Reais</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Veja os resultados de quem treina na Estiga Total
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 sm:pb-16 pt-6 px-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="w-[calc(100vw-3rem)] max-w-md snap-center flex-shrink-0"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-5 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`rounded-full transition-all duration-500 ease-out transform ${
                  activeSlide === index
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

      <div className="p-6 lg:p-6">
        <div className="flex items-center justify-between mb-2 lg:mb-3">
          <h3 className="text-lg lg:text-xl font-bold text-primary">{testimonial.name}</h3>
          <div className="flex gap-0.5 lg:gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-secondary-orange text-sm lg:text-sm" />
            ))}
          </div>
        </div>

        <div className="mb-3 lg:mb-4">
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
