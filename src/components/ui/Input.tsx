import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    const id = props.id || props.name;
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-brand-navy">
            {label}
            {props.required && <span className="text-danger mr-1">*</span>}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "flex h-12 w-full rounded-xl border-2 border-border bg-surface px-4 py-3 text-sm transition-all duration-200",
            "file:border-0 file:bg-transparent file:text-sm file:font-semibold",
            "placeholder:text-text-secondary/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-mint/10 focus-visible:border-brand-mint",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-danger focus-visible:ring-danger/10 focus-visible:border-danger",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm font-medium text-danger mt-0.5" role="alert" aria-live="polite">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
