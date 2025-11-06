'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
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
    name: 'Maria Silva',
    result: '-22kg em 6 meses',
    rating: 5,
    testimonial: 'Nunca imaginei que conseguiria emagrecer tanto! A equipe da Estiga Total me apoiou em cada etapa. Hoje me sinto mais confiante e saudável.',
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'João Santos',
    result: '+15kg de massa muscular',
    rating: 5,
    testimonial: 'Treino há 1 ano na Estiga e os resultados são incríveis! Profissionais qualificados e estrutura completa. Recomendo demais!',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Ana Paula',
    result: '-18kg em 8 meses',
    rating: 5,
    testimonial: 'Melhor decisão que tomei! Além de perder peso, ganhei qualidade de vida. As aulas coletivas são maravilhosas e motivadoras.',
    beforeImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop',
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
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,0,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-4 tracking-tight">
            Transformações <span className="text-secondary-orange">Reais</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Veja os resultados de quem treina na Estiga Total
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="lg:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-16 pt-6 px-6"
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

          <div className="flex justify-center gap-3 mt-8">
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

        <div className="text-center mt-12 px-4">
          <Button
            variant="primary-orange"
            size="medium"
            showWhatsAppIcon
            href={getWhatsAppLink('Olá! Quero minha transformação na Estiga Total!')}
            className="text-base px-6 py-3 shadow-2xl hover:shadow-secondary-orange/30 font-bold"
          >
            Quero Minha Transformação
          </Button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary-orange/30 group max-w-md mx-auto lg:max-w-none">
      <div className="grid grid-cols-2 gap-0">
        <div className="relative aspect-[3/5] lg:aspect-[3/4] overflow-hidden">
          <div className="absolute top-2 left-2 lg:top-3 lg:left-3 z-10 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 lg:px-3 lg:py-1.5 rounded-full">
            ANTES
          </div>
          <Image
            src={testimonial.beforeImage}
            alt={`${testimonial.name} - Antes`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>
        <div className="relative aspect-[3/5] lg:aspect-[3/4] overflow-hidden">
          <div className="absolute top-2 right-2 lg:top-3 lg:right-3 z-10 bg-secondary-orange text-white text-xs font-bold px-2 py-1 lg:px-3 lg:py-1.5 rounded-full">
            DEPOIS
          </div>
          <Image
            src={testimonial.afterImage}
            alt={`${testimonial.name} - Depois`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
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

export default SocialProof;
