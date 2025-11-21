'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { FaStar } from 'react-icons/fa';

interface VideoTestimonial {
  id: number;
  name: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Elisangela',
    videoUrl: '/videos/testimonials/testimonial-1.mp4',
    posterUrl: '/videos/testimonials/poster-1.jpg',
    description: 'Assista ao depoimento completo e veja como a Estiga Total transformou a vida de Elisangela.',
  },
  {
    id: 2,
    name: 'Luana',
    videoUrl: '/videos/testimonials/testimonial-2.mp4',
    posterUrl: '/videos/testimonials/poster-2.jpg',
    description: 'Assista ao depoimento completo e veja como a Estiga Total transformou a vida de Luana.',
  },
  {
    id: 3,
    name: 'Thiago',
    videoUrl: '/videos/testimonials/testimonial-3.mp4',
    posterUrl: '/videos/testimonials/poster-3.jpg',
    description: 'Assista ao depoimento completo e veja como a Estiga Total transformou a vida de Thiago.',
  },
  {
    id: 4,
    name: 'Fábio',
    videoUrl: '/videos/testimonials/testimonial-4.mp4',
    posterUrl: '/videos/testimonials/poster-4.jpg',
    description: 'Assista ao depoimento completo e veja como a Estiga Total transformou a vida de Fábio.',
  },
];

const VideoTestimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0); // 0 = primeira página (vídeos 1-2), 1 = segunda página (vídeos 3-4)
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const pauseOtherVideos = useCallback((currentVideo: HTMLVideoElement) => {
    videoRefs.current.forEach((video) => {
      if (video && video !== currentVideo) {
        video.pause();
      }
    });
  }, []);

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
      threshold: 0.5,
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
    <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,0,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Ouça Quem Já <span className="text-secondary-orange">Transformou</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Depoimentos reais de quem treina na Estiga Total
          </p>
        </div>

        <div className="hidden lg:block mb-12">
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              {/* Botão Esquerda */}
              <button
                onClick={() => setDesktopPage(0)}
                disabled={desktopPage === 0}
                className={`p-4 rounded-full transition-all duration-300 flex-shrink-0 ${desktopPage === 0
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
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

              {/* Grid com 2 vídeos por página */}
              <div className="grid grid-cols-2 gap-6 py-2 max-w-4xl w-full">
                {videoTestimonials
                  .slice(desktopPage * 2, desktopPage * 2 + 2)
                  .map((testimonial, index) => (
                    <VideoCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      onPlay={pauseOtherVideos}
                      videoRefs={videoRefs}
                      index={desktopPage * 2 + index}
                    />
                  ))}
              </div>

              {/* Botão Direita */}
              <button
                onClick={() => setDesktopPage(1)}
                disabled={desktopPage === 1}
                className={`p-4 rounded-full transition-all duration-300 flex-shrink-0 ${desktopPage === 1
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
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
                className={`h-2 rounded-full transition-all duration-300 ${desktopPage === 0 ? 'w-8 bg-secondary-orange' : 'w-2 bg-gray-600'
                  }`}
              />
              <div
                className={`h-2 rounded-full transition-all duration-300 ${desktopPage === 1 ? 'w-8 bg-secondary-orange' : 'w-2 bg-gray-600'
                  }`}
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden relative">
          <p className="text-center text-sm text-secondary-orange mb-2 px-6">
            ← Arraste para ver mais →
          </p>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 sm:pb-10 pt-4 px-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="w-[calc(100vw-3rem)] max-w-md snap-center flex-shrink-0 py-2"
              >
                <VideoCard
                  testimonial={testimonial}
                  onPlay={pauseOtherVideos}
                  videoRefs={videoRefs}
                  index={index}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-2 sm:mt-3">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`rounded-full transition-all duration-500 ease-out transform ${activeSlide === index
                  ? 'w-10 h-2.5 bg-secondary-orange scale-110 shadow-lg shadow-secondary-orange/50'
                  : 'w-2.5 h-2.5 bg-gray-400 hover:bg-gray-300 hover:scale-110'
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

interface VideoCardProps {
  testimonial: VideoTestimonial;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  onPlay: (currentVideo: HTMLVideoElement) => void;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ testimonial, videoRefs, onPlay, index }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const refs = videoRefs.current;
    if (videoRef.current) {
      refs[index] = videoRef.current;
    }

    return () => {
      refs[index] = null;
    };
  }, [videoRefs, index]);

  const handlePlay = () => {
    if (videoRef.current) {
      onPlay(videoRef.current);
    }
  };

  return (
    <div className="group relative bg-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-800 hover:border-secondary-orange/50 hover:shadow-secondary-orange/20 hover:-translate-y-2 max-w-md mx-auto lg:max-w-none">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      {/* Video Player */}
      <div className="relative aspect-square overflow-hidden bg-black">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          playsInline
          poster={testimonial.posterUrl}
          className="w-full h-full object-cover object-[center_20%] video-fullscreen-fix"
          onPlay={handlePlay}
        >
          <source src={testimonial.videoUrl} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 lg:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-secondary-orange transition-colors duration-300">
            {testimonial.name}
          </h3>
          <div className="flex gap-0.5 lg:gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-secondary-orange text-sm lg:text-base" />
            ))}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          {testimonial.description}
        </p>
      </div>
    </div>
  );
};

export default VideoTestimonials;
