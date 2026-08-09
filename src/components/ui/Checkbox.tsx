import React, { useId } from 'react';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const reactId = useId();
    const generatedId = id || reactId;
    
    return (
      <div className="flex flex-col gap-1 w-full">
        <label 
          htmlFor={generatedId} 
          className={cn(
            "flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 bg-surface transition-all duration-200 select-none",
            "border-border hover:border-brand-mint/40 hover:bg-brand-navy/[0.01]",
            "has-[:checked]:border-brand-navy has-[:checked]:bg-brand-navy/[0.01] has-[:checked]:shadow-sm",
            className
          )}
        >
          <div className="relative flex items-center justify-center shrink-0">
            <input
              type="checkbox"
              id={generatedId}
              ref={ref}
              className="peer sr-only"
              {...props}
            />
            <div className="w-5 h-5 border-2 rounded border-border bg-surface transition-colors peer-checked:bg-brand-navy peer-checked:border-brand-navy group-hover:border-brand-navy"></div>
            <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
          </div>
          <span className="text-sm font-semibold text-text-primary leading-tight pt-0.5">
            {label}
          </span>
        </label>
        {error && <p className="text-sm font-medium text-danger mt-1">{error}</p>}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';
