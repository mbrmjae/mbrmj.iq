import React from 'react';
import { motion } from 'motion/react';
import { FileText, Search, Mail, Rocket } from 'lucide-react';

export const ApplicationProcess: React.FC = () => {
  const steps = [
    { icon: <FileText className="w-6 h-6" />, title: 'تعبئة طلب الانضمام' },
    { icon: <Search className="w-6 h-6" />, title: 'مراجعة الطلبات' },
    { icon: <Mail className="w-6 h-6" />, title: 'التواصل مع المقبولين' },
    { icon: <Rocket className="w-6 h-6" />, title: 'إرسال تعليمات الانطلاق والمستودع' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-navy">كيف تنضم إلى الدفعة الأولى؟</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            عدد المقاعد محدود إلى 10 طلاب لضمان جودة المتابعة والمراجعة.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center max-w-[150px] relative z-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-brand-navy mb-4 relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-mint text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h3 className="font-semibold text-text-primary text-sm">{step.title}</h3>
              </motion.div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block w-full h-[2px] bg-border mt-8 relative max-w-[100px]">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-border"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
