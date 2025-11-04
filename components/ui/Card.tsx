import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'testimonial' | 'benefit' | 'modality';
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  hoverable = false 
}) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  
  const variantStyles = {
    default: 'bg-white shadow-md border border-gray-100',
    testimonial: 'bg-white shadow-lg p-6',
    benefit: 'bg-white shadow-md p-8 text-center',
    modality: 'bg-white shadow-lg relative overflow-hidden',
  };
  
  const hoverStyles = hoverable 
    ? 'transition-all duration-300 hover:shadow-2xl hover:scale-105' 
    : '';
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
