import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, maxLength, onChange, value, defaultValue, ...props }, ref) => {
    const id = props.id || props.name;
    const [charCount, setCharCount] = useState(
      (value as string)?.length || (defaultValue as string)?.length || 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) onChange(e);
    };
    
    // Update count if value changes externally
    useEffect(() => {
      if (value !== undefined) {
        setCharCount(String(value).length);
      }
    }, [value]);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-sm font-semibold text-brand-navy">
            {label}
            {props.required && <span className="text-danger mr-1">*</span>}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          maxLength={maxLength}
          className={cn(
            "flex min-h-[125px] w-full rounded-xl border-2 border-border bg-surface px-4 py-3 text-sm transition-all duration-200",
            "placeholder:text-text-secondary/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-mint/10 focus-visible:border-brand-mint",
            "disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            error && "border-danger focus-visible:ring-danger/10 focus-visible:border-danger",
            className
          )}
          {...props}
        />
        <div className="flex justify-between items-start mt-1">
          <div className="flex-1">
            {error && (
              <p className="text-sm font-medium text-danger mt-0.5" role="alert" aria-live="polite">{error}</p>
            )}
          </div>
          {(maxLength || charCount > 0) && (
            <p className="text-xs text-text-secondary/70 ml-4 whitespace-nowrap font-medium">
              {charCount} {maxLength && `/ ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
