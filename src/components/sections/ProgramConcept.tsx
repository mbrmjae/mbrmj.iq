import React from 'react';
import { motion } from 'motion/react';
import { programFeatures } from '../../config/programContent';

export const ProgramConcept: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-navy">ليست دورة… بل محاكاة لمشروع حقيقي</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            يستلم كل طالب مستودعاً مستقلاً يحتوي على Starter Code يعمل جزئياً، مع أخطاء مقصودة ومتطلبات مفقودة ومهام تطويرية. تعمل بشكل فردي على حل المشكلات مع المشاركة في جلسات مراجعة مشتركة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-background hover:border-brand-mint/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-brand-mint group-hover:text-white transition-colors">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
