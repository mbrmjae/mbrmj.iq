import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Check, X } from 'lucide-react';

export const Problem: React.FC = () => {
  const backgroundCodes = [
    `@app.post("/api/v1/tickets")\ndef create_ticket(ticket: TicketCreate, db: Session = Depends(get_db)):\n    if not ticket.title:\n        raise HTTPException(status_code=400, detail="Title required")\n    return crud.create_ticket(db, ticket)`,
    
    `class Ticket(Base):\n    __tablename__ = "tickets"\n    id = Column(Integer, primary_key=True, index=True)\n    status = Column(String, default="new")\n    created_at = Column(DateTime, default=datetime.utcnow)`,
    
    `git checkout -b fix/ticket-status-bug\ngit commit -m "fix(api): resolve incorrect status transition"\ngit push origin fix/ticket-status-bug`,
  
    `def test_ticket_creation(client):\n    response = client.post(\n        "/api/v1/tickets",\n        json={"title": "Broken street light", "type": "infrastructure"}\n    )\n    assert response.status_code == 200`,
    
    `SELECT t.id, t.status \nFROM tickets t \nWHERE t.status != 'closed' \nORDER BY t.created_at DESC;`
  ];

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="problem" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-20"></div>
      
      {/* Floating Code Snippets Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true" dir="ltr">
        {backgroundCodes.map((code, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.15, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 1 }}
            className={`absolute font-mono text-[10px] sm:text-xs md:text-sm whitespace-pre text-slate-400 leading-relaxed
              ${idx === 0 ? 'top-[5%] left-[2%] -rotate-2' : ''}
              ${idx === 1 ? 'top-[45%] right-[5%] rotate-3' : ''}
              ${idx === 2 ? 'bottom-[10%] left-[8%] rotate-1' : ''}
              ${idx === 3 ? 'top-[15%] right-[12%] -rotate-3' : ''}
              ${idx === 4 ? 'bottom-[25%] right-[30%] -rotate-1 hidden md:block' : ''}
            `}
          >
            {code}
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-brand-navy tracking-tight">تعلمت البرمجة… لكن هل جرّبت العمل كمطوّر؟</h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
              الدروس التعليمية تعلّمك كيف تبني مشاريع متوقعة من الصفر. لكن في الواقع، نادراً ما تبدأ من الصفر. العمل الحقيقي يتطلب قراءة كود كتبه غيرك، فهم متطلبات غير مكتملة، وتشخيص أخطاء غير واضحة.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            
            {/* Traditional Learning - Recessed Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 rounded-3xl p-8 lg:p-10 border border-border shadow-sm w-full lg:w-[45%] lg:-ml-6 z-0 transform lg:scale-95 transition-all"
            >
              <div className="flex items-center gap-3 mb-8 opacity-70">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-text-secondary">
                  <X className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-text-secondary">التعلم التقليدي (Tutorials)</h3>
              </div>
              <ul className="space-y-6">
                {[
                  'خطوات معروفة ومحددة مسبقاً',
                  'المشروع يُبنى من الصفر خطوة بخطوة',
                  'الحل دائماً موجود في نهاية الدرس',
                  'التركيز على كتابة الكود فقط'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 opacity-70">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></div>
                    <span className="text-text-secondary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mbrmj Simulation - Prominent Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-brand-navy rounded-3xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(27,50,80,0.15)] w-full lg:w-[55%] relative z-10 border border-brand-navy-dark overflow-hidden"
            >
              {/* Subtle inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-brand-mint/10 blur-[60px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-mint to-brand-mint-dark flex items-center justify-center text-white shadow-lg shadow-brand-mint/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">محاكاة Mbrmj</h3>
                </div>
                
                <ul className="space-y-6">
                  {[
                    'كود قائم يحتاج إلى فهم واستيعاب',
                    'متطلبات وتغييرات واقعية من العميل',
                    'أخطاء مخفية تحتاج إلى تحليل وتتبع',
                    'التركيز على اتخاذ القرار، الحل، والنتيجة'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-mint shrink-0 shadow-[0_0_8px_rgba(103,202,173,0.8)]"></div>
                      <span className="text-white/90 text-lg font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={scrollToRegistration} size="lg" className="px-10">
            أريد خوض هذه التجربة
          </Button>
        </div>
      </div>
    </section>
  );
};
