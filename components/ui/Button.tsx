import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-orange' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  showWhatsAppIcon?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary-orange',
    size = 'medium',
    showWhatsAppIcon = false,
    href,
    children,
    className = '',
    ...props
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

    const variantStyles = {
      'primary-orange': 'bg-secondary-orange text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
      'secondary': 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-neutral',
    };

    const sizeStyles = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
      <>
        {showWhatsAppIcon && <FaWhatsapp className="text-xl" />}
        {children}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
