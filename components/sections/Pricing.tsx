'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { FaCheck } from 'react-icons/fa';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Plano Mensal',
      price: 79,
      period: 'mês',
      popular: false,
      benefits: [
        'Todas as 6 modalidades',
        'Avaliação física gratuita',
        'Sem taxa de matrícula',
        'Aulas ilimitadas',
        'Horários flexíveis',
        'Equipamentos modernos'
      ],
      message: 'Olá! Quero conhecer o Plano Mensal da Estiga Total!'
    },
    {
      name: 'Plano Clube+',
      price: 49,
      period: 'mês',
      popular: true,
      highlight: '1 ano de treino garantido',
      savings: 'Economia de R$ 310 comparado ao plano mensal',
      benefits: [
        '1 ano de treino garantido',
        'Avaliação física gratuita',
        'Todas as 6 modalidades inclusas',
        'Traga um amigo a cada 30 dias',
        'Primeira e última: R$ 1,00',
        '10x de R$ 49,00 demais meses'
      ],
      message: 'Olá! Quero conhecer o Plano Clube+ da Estiga Total!'
    },
    {
      name: 'Plano Semestral',
      price: 69,
      period: 'mês',
      popular: false,
      highlight: '6 meses de compromisso',
      benefits: [
        'Todas as 6 modalidades',
        'Avaliação física gratuita',
        'Sem taxa de matrícula',
        'Aulas ilimitadas',
        'Horários flexíveis',
        'Preço fixo por 6 meses'
      ],
      message: 'Olá! Quero conhecer o Plano Semestral da Estiga Total!'
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,0,0.15),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Título */}
        <div className="text-center mb-20 sm:mb-28">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Planos que Cabem <span className="text-secondary-orange">no Seu Bolso</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Sem taxa de matrícula. Todas as modalidades inclusas.
          </p>
        </div>

        {/* Grid de planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.popular ? 'lg:scale-110 lg:z-10' : ''
              }`}
            >
              {/* Card do plano */}
              <div
                className={`group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 hover:-translate-y-2 p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'border-secondary-orange/50 shadow-secondary-orange/30 bg-white/15'
                    : 'border-white/20 hover:border-secondary-orange/50'
                }`}
              >
                {/* Badge "Mais Popular" */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-orange text-white px-4 sm:px-6 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap">
                    MAIS POPULAR
                  </div>
                )}

                {/* Gradiente hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Título do plano */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Highlight (opcional) */}
                  {plan.highlight && (
                    <p className="text-sm text-secondary-orange font-semibold mb-4">
                      {plan.highlight}
                    </p>
                  )}

                  {/* Preço */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-black text-secondary-orange">
                        R$ {plan.price}
                      </span>
                      <span className="text-xl text-gray-300">/{plan.period}</span>
                    </div>
                    {plan.savings && (
                      <p className="text-sm text-gray-400 mt-2">
                        *{plan.savings}
                      </p>
                    )}
                  </div>

                  {/* Benefícios */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-secondary-orange mt-1 flex-shrink-0" />
                        <span className="text-gray-200 text-sm sm:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="primary-orange"
                    size="medium"
                    href={getWhatsAppLink(plan.message)}
                    className="w-full"
                  >
                    Assinar Agora
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Tem dúvidas sobre os planos? Fale com nossa equipe!
          </p>
          <Button
            variant="primary-orange"
            size="medium"
            showWhatsAppIcon
            href={getWhatsAppLink('Olá! Quero conhecer os planos da Estiga Total!')}
            className="text-base px-8 py-3 shadow-2xl hover:shadow-secondary-orange/30 font-bold whitespace-nowrap"
          >
            Fale com Nossa Equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
