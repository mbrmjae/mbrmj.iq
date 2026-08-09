import React, { useId } from 'react';
import { cn } from '../../lib/utils';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const reactId = useId();
    const generatedId = id || reactId;
    
    return (
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
            type="radio"
            id={generatedId}
            ref={ref}
            className="peer sr-only"
            {...props}
          />
          <div className="w-5 h-5 border-2 rounded-full border-border bg-surface transition-colors peer-checked:border-brand-navy peer-focus-visible:ring-2 peer-focus-visible:ring-brand-navy group-hover:border-brand-navy"></div>
          <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-navy pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
        <span className="text-sm font-semibold text-text-primary leading-tight pt-0.5">
          {label}
        </span>
      </label>
    );
  }
);
Radio.displayName = 'Radio';
