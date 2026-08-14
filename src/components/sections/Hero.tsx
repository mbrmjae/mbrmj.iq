import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Bug, CheckCircle2, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConcept = () => {
    document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 bg-[#0A1118] overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="hero-glow hero-glow-mint absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full" />
        <div className="hero-glow hero-glow-navy absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* On mobile: single column. On xl: two columns */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-16 xl:items-center gap-12">

          {/* ── LEFT / TEXT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-center xl:text-right"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-5 tracking-tight leading-normal text-transparent bg-clip-text bg-gradient-to-l from-white via-white/90 to-white/70">
              اختبر بيئة العمل البرمجية قبل أول وظيفة
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 font-light">
              برنامج تطبيقي مكثّف لمدة أسبوعين، تنضم خلاله إلى مشروع Backend قائم، تحلل متطلبات العميل، تصلح الأخطاء، تطور الميزات، تختبر الحل، وتعرض عملك كما يحدث داخل فرق البرمجيات الحقيقية.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center xl:justify-start">
              <Button size="lg" variant="secondary" onClick={scrollToRegistration} className="w-full sm:w-auto shadow-[0_0_20px_rgba(103,202,173,0.3)] hover:shadow-[0_0_30px_rgba(103,202,173,0.5)] transition-shadow">
                قدّم طلبك الآن
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 backdrop-blur-sm" onClick={scrollToConcept}>
                اكتشف تجربة البرنامج
              </Button>
            </div>

            <div className="flex flex-wrap justify-center xl:justify-start gap-x-6 gap-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-mint/80 shrink-0" />
                <span>14 يوماً</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-mint/80 shrink-0" />
                <span>4 لقاءات ومراجعات</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-mint/80 shrink-0" />
                <span>مشروع عملي</span>
              </div>
            </div>

            <p className="text-xs text-white/30 mt-6 font-light">
              * تجربة تعليمية تحاكي العمل داخل Startup وليست وظيفة أو مشروعاً حكومياً حقيقياً.
            </p>
          </motion.div>

          {/* ── RIGHT / IDE COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5 w-full"
          >
            {/* Limited Spots Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-mint/15 text-brand-mint text-sm font-bold border border-brand-mint/30 shadow-[0_0_25px_rgba(103,202,173,0.25)] hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-mint" />
              </span>
              الدفعة الأولى | 10 مقاعد فقط
            </div>

            {/* macOS IDE Window */}
            <div
              dir="ltr"
              className="w-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-[#0d1117] border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Title Bar */}
              <div className="h-11 bg-[#161b22] border-b border-white/5 flex items-center px-4 relative shrink-0">
                <div className="flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-white/40 font-mono">
                  <Terminal className="w-3 h-3 mr-2 opacity-50" /> main.py — mbrmj-backend
                </div>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-[1.8] text-[#c9d1d9] overflow-hidden relative">
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none z-10" />

                <div><span className="text-[#ff7b72]">from</span> fastapi <span className="text-[#ff7b72]">import</span> FastAPI, Depends, HTTPException</div>
                <div><span className="text-[#ff7b72]">from</span> sqlalchemy.orm <span className="text-[#ff7b72]">import</span> Session</div>
                <div className="mt-2"><span className="text-[#ff7b72]">from</span> .database <span className="text-[#ff7b72]">import</span> get_db</div>
                <br />
                <div><span className="text-[#d2a8ff]">@app</span>.post(<span className="text-[#a5d6ff]">"/reports/"</span>, status_code=<span className="text-[#79c0ff]">201</span>)</div>
                <div><span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">create_report</span>(report: ReportCreate, db: Session = Depends(get_db)):</div>
                <div className="pl-6 mt-1 text-[#8b949e]"># TODO: Fix validation logic. Missing location data causes 500 error.</div>
                <div className="pl-6 opacity-50 line-through decoration-[#ff7b72]">user_id = get_current_user(db)</div>
                <div className="pl-6 mt-1"><span className="text-[#ff7b72]">if not</span> report.location_lat <span className="text-[#ff7b72]">or not</span> report.location_lng:</div>
                <div className="pl-12"><span className="text-[#ff7b72]">raise</span> HTTPException(status_code=<span className="text-[#79c0ff]">400</span>, detail=<span className="text-[#a5d6ff]">"Location required"</span>)</div>
                <div className="pl-6 mt-1"><span className="text-[#ff7b72]">return</span> crud.create_report(db=db, report=report)</div>
              </div>

              {/* Status Bar */}
              <div className="border-t border-white/5 bg-[#161b22] px-4 py-2 flex items-center justify-between text-[10px] text-white/40 font-mono">
                <div className="flex items-center gap-2 text-[#ff7b72]">
                  <Bug className="w-3 h-3" /> BUG-402 · Missing location validation
                </div>
                <div className="flex items-center gap-1.5 text-brand-mint">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint" />
                  </span>
                  CI/CD · All tests passed
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
