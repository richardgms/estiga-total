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
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Elisangela',
    videoUrl: '/videos/testimonials/testimonial-1.mp4',
    posterUrl: '/videos/testimonials/poster-1.jpg',
  },
  {
    id: 2,
    name: 'Luana',
    videoUrl: '/videos/testimonials/testimonial-2.mp4',
    posterUrl: '/videos/testimonials/poster-2.jpg',
  },
];

const VideoTestimonials: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  const pauseOtherVideos = useCallback((currentVideo: HTMLVideoElement) => {
    videoRefs.current.forEach((video) => {
      if (video !== currentVideo) {
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
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-black overflow-hidden">
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

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 sm:pb-16 pt-6 px-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              className="w-[calc(100vw-3rem)] max-w-md snap-center flex-shrink-0"
            >
              <VideoCard
                testimonial={testimonial}
                videoRefs={videoRefs}
                onPlayOtherVideos={pauseOtherVideos}
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {videoTestimonials.map((testimonial) => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <p className="text-center text-sm text-gray-400 mb-2 px-6">
            ← Arraste para ver mais →
          </p>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 sm:pb-16 pt-4 px-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="w-[calc(100vw-3rem)] max-w-md snap-center flex-shrink-0"
              >
                <VideoCard testimonial={testimonial} videoRefs={sectionRef.current ? (sectionRef.current as any).videoRefs : undefined} />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-5 sm:mt-8">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`rounded-full transition-all duration-500 ease-out transform ${
                  activeSlide === index
                    ? 'w-10 h-2.5 bg-secondary-orange scale-110 shadow-lg shadow-secondary-orange/50'
                    : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-500 hover:scale-110'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
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

const VideoCard: React.FC<{
  testimonial: VideoTestimonial;
  videoRefs: React.MutableRefObject<HTMLVideoElement[]>;
  onPlayOtherVideos: (currentVideo: HTMLVideoElement) => void;
}> = ({ testimonial, videoRefs, onPlayOtherVideos }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRefs.current.push(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        videoRefs.current = videoRefs.current.filter((video) => video !== videoRef.current);
      }
    };
  }, [videoRefs]);

  const handlePlay = () => {
    if (videoRef.current) {
      onPlayOtherVideos(videoRef.current);
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
          className="w-full h-full object-cover video-fullscreen-fix"
          onPlay={handlePlay}
        >
          <source src={testimonial.videoUrl} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 lg:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-secondary-orange transition-colors duration-300">{testimonial.name}</h3>
          <div className="flex gap-0.5 lg:gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-secondary-orange text-sm lg:text-base" />
            ))}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          Assista ao depoimento completo e veja como a Estiga Total transformou a vida de {testimonial.name}.
        </p>
      </div>
    </div>
  );
};

    return () => {
      if (videoRef.current) {
        videoRefs.current = videoRefs.current.filter((video) => video !== videoRef.current);
      }
    };
  }, [videoRefs]);

  const handlePlay = () => {
    videoRefs.current.forEach((video) => {
      if (video !== videoRef.current) {
        video.pause();
      }
    });
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
          className="w-full h-full object-cover video-fullscreen-fix"
          onPlay={handlePlay}
        >
          <source src={testimonial.videoUrl} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6 lg:p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-secondary-orange transition-colors duration-300">{testimonial.name}</h3>
          <div className="flex gap-0.5 lg:gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-secondary-orange text-sm lg:text-base" />
            ))}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          Assista ao depoimento completo e veja como a Estiga Total transformou a vida de {testimonial.name}.
        </p>
      </div>
    </div>
  );
};

export default VideoTestimonials;
