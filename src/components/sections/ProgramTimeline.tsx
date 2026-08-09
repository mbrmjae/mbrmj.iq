import React from 'react';
import { motion } from 'motion/react';
import { timelineSteps } from '../../config/programContent';
import { FileDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const ProgramTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-brand-navy">رحلتك خلال أسبوعين</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            يتطلب البرنامج تخصيص 6 ساعات أسبوعيًا على الأقل، إلى جانب حضور جلسات المراجعة.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute right-[19px] md:right-1/2 md:translate-x-[1px] top-4 bottom-4 w-0.5 bg-brand-mint/30"></div>
          
          <div className="flex flex-col gap-12">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute right-0 md:right-1/2 md:translate-x-1/2 w-10 h-10 rounded-full bg-brand-navy border-4 border-surface flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 pr-16 md:pr-0 ${isEven ? 'md:pr-16 text-right' : 'md:pl-16 md:text-left text-right'}`}
                  >
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold mb-3 text-text-primary">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PDF Download Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto bg-[#0A1118]/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mint/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-mint/10 transition-colors duration-500"></div>

          <div className="flex-1 text-center md:text-right relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">اطلع على خطة العمل المفصلة</h3>
            <p className="text-white/70 leading-relaxed mb-8 font-light">
              حمّل الخطة التفصيلية للبرنامج لمعرفة المهام اليومية، أوقات جلسات المراجعة المباشرة، والمخرجات المطلوبة منك خطوة بخطوة.
            </p>
            <a href={`${import.meta.env.BASE_URL}assets/2WeeksPlan.pdf`} download="Mbrmj_2Weeks_Plan.pdf" className="inline-block">
              <Button size="lg" className="flex items-center gap-2 px-8">
                <FileDown className="w-5 h-5" />
                تحميل الخطة (PDF)
              </Button>
            </a>
          </div>
          
          <div className="w-full sm:w-2/3 md:w-5/12 shrink-0 relative z-10">
            <div className="absolute inset-0 bg-brand-mint/10 blur-xl rounded-xl group-hover:bg-brand-mint/20 transition-colors duration-500"></div>
            <img 
              src={`${import.meta.env.BASE_URL}assets/Plan_Cover.png`} 
              alt="غلاف خطة الأسبوعين" 
              className="relative z-10 w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:-translate-y-2 group-hover:rotate-2 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
