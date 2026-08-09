import React from 'react';
import { motion } from 'motion/react';
import { learningOutcomes } from '../../config/programContent';
import { CheckCircle2 } from 'lucide-react';

export const LearningOutcomes: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-navy">ماذا ستتعلّم من التجربة؟</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            محاكاة بيئة العمل تضعك أمام تحديات لا تجدها في الدروس التقليدية. هذه بعض المهارات التي ستكتسبها بنهاية البرنامج:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto mb-16">
          {learningOutcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-mint shrink-0 mt-0.5" />
              <span className="text-text-primary font-medium">{outcome}</span>
            </motion.div>
          ))}
        </div>

        {/* Technology Strip */}
        <div className="border-t border-border pt-12 overflow-hidden">
          <h3 className="text-center text-sm font-semibold text-text-secondary uppercase tracking-wider mb-8">التقنيات المستخدمة في المشروع</h3>
          
          <div className="relative w-full max-w-6xl mx-auto flex overflow-hidden">
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee shrink-0 items-center w-[200%] gap-8 pr-8">
              {/* Double the array for infinite seamless scrolling effect */}
              {[
                { src: '/assets/python-logo.png', alt: 'Python' },
                { src: '/assets/fastapi.png', alt: 'FastAPI' },
                { src: '/assets/PostgreSQL-Logo.png', alt: 'PostgreSQL' },
                { src: '/assets/SQLAlchemy.jpg', alt: 'SQLAlchemy' },
                { src: '/assets/Pytest_logo.svg', alt: 'Pytest' },
                { src: '/assets/Swagger.png', alt: 'Swagger' },
                { src: '/assets/git_and_github_logo.png', alt: 'Git & GitHub' },
                
                // Repeated for seamless scroll
                { src: '/assets/python-logo.png', alt: 'Python' },
                { src: '/assets/fastapi.png', alt: 'FastAPI' },
                { src: '/assets/PostgreSQL-Logo.png', alt: 'PostgreSQL' },
                { src: '/assets/SQLAlchemy.jpg', alt: 'SQLAlchemy' },
                { src: '/assets/Pytest_logo.svg', alt: 'Pytest' },
                { src: '/assets/Swagger.png', alt: 'Swagger' },
                { src: '/assets/git_and_github_logo.png', alt: 'Git & GitHub' }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={tech.src} 
                    alt={tech.alt} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
