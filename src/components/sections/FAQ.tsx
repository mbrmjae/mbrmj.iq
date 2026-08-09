import React from 'react';
import { Accordion } from '../ui/Accordion';
import { faqData } from '../../config/programContent';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-navy">الأسئلة الشائعة</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqData} />
        </div>
      </div>
    </section>
  );
};
