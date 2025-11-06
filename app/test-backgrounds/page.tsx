'use client';

import React from 'react';

const TestBackgrounds: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <h1 className="relative z-10 text-9xl font-black text-black">1</h1>
      </section>

      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(0,0,0,0.015) 40px,
              rgba(0,0,0,0.015) 80px
            )`
          }}
        />
        <h1 className="relative z-10 text-9xl font-black text-black">2</h1>
      </section>

      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #fff5f0 50%, #ffffff 100%)'
        }}
      >
        <h1 className="relative z-10 text-9xl font-black text-black">3</h1>
      </section>

      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-zinc-200/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary-orange/3 rounded-full blur-3xl" />
        </div>
        <h1 className="relative z-10 text-9xl font-black text-black">4</h1>
      </section>

      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <h1 className="relative z-10 text-9xl font-black text-black">5</h1>
      </section>

      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f5f5f5" fillOpacity="0.5" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full rotate-180" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="#f5f5f5" fillOpacity="0.5" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <h1 className="relative z-10 text-9xl font-black text-black">6</h1>
      </section>

      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-20 w-72 h-48 bg-zinc-100 rounded-3xl blur-2xl opacity-40 rotate-12" />
          <div className="absolute bottom-1/3 right-32 w-64 h-56 bg-secondary-orange/10 rounded-3xl blur-2xl opacity-50 -rotate-6" />
          <div className="absolute top-1/2 left-1/2 w-80 h-40 bg-zinc-100 rounded-3xl blur-2xl opacity-30 rotate-45" />
        </div>
        <h1 className="relative z-10 text-9xl font-black text-black">7</h1>
      </section>

      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #fafafa 0%, #ffffff 50%, #fafafa 100%)'
        }}
      >
        <h1 className="relative z-10 text-9xl font-black text-black">8</h1>
      </section>
    </div>
  );
};

export default TestBackgrounds;
