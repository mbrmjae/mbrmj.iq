import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Terminal, Code2, Database, Braces, Cpu } from 'lucide-react';
import { Button } from '../ui/Button';

export const Eligibility: React.FC = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="eligibility" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-mint/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Floating Coding Icons Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.04 }} 
          animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
          className="absolute text-brand-mint top-[15%] right-[5%] md:right-[10%] rotate-12"
        >
          <Terminal className="w-20 h-20 md:w-32 md:h-32" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.04 }} 
          animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} 
          className="absolute text-brand-mint bottom-[15%] right-[15%] md:right-[25%] -rotate-6"
        >
          <Code2 className="w-24 h-24 md:w-40 md:h-40" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.02 }} 
          animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} 
          className="absolute text-white top-[40%] left-[2%] md:left-[5%] rotate-45"
        >
          <Database className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.04 }} 
          animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} 
          className="absolute text-white bottom-[10%] left-[10%] md:left-[15%] -rotate-12"
        >
          <Braces className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.03 }} 
          animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }} 
          className="absolute text-brand-mint top-[5%] left-[20%] md:left-[30%] rotate-6"
        >
          <Cpu className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white tracking-tight">هل هذا البرنامج مناسب لك؟</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Not Suitable Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#121c2b]/80 backdrop-blur-xl border border-danger/10 rounded-3xl p-8 lg:p-10 hover:border-danger/30 transition-colors shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-danger/5 blur-[40px] rounded-full"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">غير مناسب لك إذا كنت:</h3>
            </div>
            
            <ul className="space-y-5">
              {[
                'من يبحث عن محاضرات فقط دون تنفيذ',
                'من لا يستطيع الالتزام بالمهام الأسبوعية',
                'من يريد نسخ الحلول دون فهمها',
                'من يتوقع أن تقوم أدوات الذكاء الاصطناعي بالعمل كاملاً عنه'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-danger/70 shrink-0"></div>
                  <span className="text-white/70 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Suitable Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            className="bg-[#121c2b]/80 backdrop-blur-xl border border-brand-mint/20 rounded-3xl p-8 lg:p-10 hover:border-brand-mint/40 transition-colors shadow-[0_0_30px_rgba(103,202,173,0.05)] hover:shadow-[0_0_40px_rgba(103,202,173,0.1)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-brand-mint/10 blur-[50px] rounded-full group-hover:bg-brand-mint/20 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-brand-mint/10 flex items-center justify-center text-brand-mint border border-brand-mint/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">البرنامج مناسب لك إذا كنت:</h3>
            </div>
            
            <ul className="space-y-5 relative z-10">
              {[
                'طلاب هندسة البرمجيات وعلوم الحاسب وتقنية المعلومات والذكاء الاصطناعي وهندسة الحاسب',
                'الخريجين الجدد',
                'من يعرف أساسيات البرمجة لكنه يواجه صعوبة في بناء مشروع واقعي',
                'من يريد الانتقال من متابعة Tutorials إلى التنفيذ العملي',
                'من يستطيع الالتزام بالمهام والمراجعات لمدة أسبوعين',
                'من لديه Laptop مناسب للتطوير'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-mint shrink-0 shadow-[0_0_5px_rgba(103,202,173,0.5)]"></div>
                  <span className="text-white/90 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        <div className="text-center">
          <Button onClick={scrollToRegistration} size="lg" className="px-12 shadow-[0_0_20px_rgba(103,202,173,0.2)] hover:shadow-[0_0_30px_rgba(103,202,173,0.4)]">
            قدّم طلبك الآن
          </Button>
        </div>
      </div>
    </section>
  );
};
