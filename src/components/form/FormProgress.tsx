import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export const FormProgress: React.FC<FormProgressProps> = ({ currentStep, totalSteps, steps }) => {
  const percentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="mb-10 select-none">
      {/* Mobile view: simple progress bar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-brand-navy">
            {steps[currentStep]}
          </span>
          <span className="text-xs font-semibold text-text-secondary">
            الخطوة {currentStep + 1} من {totalSteps}
          </span>
        </div>
        <div className="w-full h-2 bg-border rounded-full overflow-hidden" dir="ltr">
          <div 
            className="h-full bg-brand-mint transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Desktop view: visual stepper with animation */}
      <div className="hidden md:block relative px-2">
        {/* Connection progress bar background line */}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" dir="ltr">
          <motion.div 
            className="h-full bg-brand-mint"
            initial={{ width: '0%' }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </div>
        
        {/* Stepper nodes */}
        <div className="relative z-10 flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            
            return (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isCompleted ? '#67caad' : isActive ? '#ffffff' : '#ffffff',
                    borderColor: isCompleted ? '#67caad' : isActive ? '#1b3250' : '#dbe3ea',
                    scale: isActive ? 1.15 : 1
                  }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs transition-all duration-200",
                    isCompleted ? "text-white" : isActive ? "text-brand-navy shadow-[0_0_15px_rgba(103,202,173,0.25)] border-brand-navy" : "text-text-secondary/70"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" strokeWidth={3} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </motion.div>
                
                <span 
                  className={cn(
                    "text-xs font-semibold mt-2.5 transition-colors duration-200 text-center whitespace-nowrap",
                    isActive ? "text-brand-navy font-bold scale-105" : isCompleted ? "text-brand-mint" : "text-text-secondary/70"
                  )}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
