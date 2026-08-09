import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-brand-navy text-white hover:bg-brand-navy-dark',
      secondary: 'bg-brand-mint text-brand-navy hover:bg-brand-mint-dark hover:text-white',
      outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
      ghost: 'hover:bg-gray-100 text-text-primary',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = 'Button';
