'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Como funciona a aula experimental?',
    answer: 'Você pode testar qualquer modalidade por 1 dia grátis! Basta agendar pelo WhatsApp e trazer roupa confortável.',
  },
  {
    question: 'Preciso de avaliação médica?',
    answer: 'Recomendamos, mas não é obrigatório. Oferecemos avaliação física gratuita na matrícula.',
  },
  {
    question: 'Posso cancelar o plano?',
    answer: 'Sim! O Plano Clube+ tem fidelidade de 12 meses, mas outros planos são flexíveis.',
  },
  {
    question: 'Quais modalidades estão inclusas?',
    answer: 'Musculação, Aeróbox, Jump, Step, Fit Dance, Hit Box, Funcional e mais!',
  },
  {
    question: 'Tem estacionamento?',
    answer: 'Sim, temos área para estacionar veículos disponível.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="relative py-6 sm:py-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,107,0,0.05),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1 sm:mb-2">
            Perguntas{' '}
            <span className="text-secondary-orange">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Estiga Total
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-lg border-2 transition-colors duration-300 ${
                  isOpen
                    ? 'border-secondary-orange shadow-md'
                    : 'border-gray-200'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left focus:outline-none rounded-lg group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900 pr-2 group-hover:text-secondary-orange transition-colors duration-200">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-secondary-orange rotate-180'
                        : 'bg-secondary-orange/10 group-hover:bg-secondary-orange/20'
                    }`}
                  >
                    {isOpen ? (
                      <FaMinus className="w-2.5 h-2.5 text-white" />
                    ) : (
                      <FaPlus className="w-2.5 h-2.5 text-secondary-orange" />
                    )}
                  </div>
                </button>

                {/* Answer - Using CSS Grid for smooth height animation */}
                <div
                  id={`faq-answer-${index}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-gray-600 text-xs sm:text-sm mb-2">
            Ainda tem dúvidas?{' '}
            <span className="text-secondary-orange font-semibold">
              Fale conosco!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
