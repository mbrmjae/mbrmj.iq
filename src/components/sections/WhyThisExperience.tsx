import React, { useRef, useState, useEffect, MouseEvent } from 'react';
import { Monitor, Terminal, GitBranch, MessageSquare, Users, Rocket, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '../ui/Button';

const cards = [
  {
    title: 'هذه محاكاة… مش كورس',
    icon: Monitor,
    content: 'ما رح تجلس تشاهد مدرّب يكتب الكود وتكرر الخطوات خلفه. رح تدخل مشروعًا قائمًا كمطوّر جديد، تستلم متطلبات ومهام، تواجه أخطاء، تتخذ قرارات، وتعرض النتيجة.',
    comparison: {
      course: 'في الكورس: تشاهد ثم تطبّق',
      simulation: 'في المحاكاة: تستلم، تحلل، تنفّذ وتبرر قراراتك',
    },
    highlight: true,
  },
  {
    title: 'أنت المطوّر، مش المشاهد',
    icon: Terminal,
    content: 'من أول يوم، رح تتعامل مع المشروع بنفسك: تفهم الكود الموجود، تعيد إنتاج الأخطاء، تبحث عن السبب، وتطوّر الميزات المطلوبة.',
  },
  {
    title: 'مشروع قائم… مش خطوات جاهزة',
    icon: GitBranch,
    content: 'بدل ما تبدأ مشروعًا تعليميًا مكررًا من الصفر، رح تنضم إلى كود موجود مسبقًا وتتعلم كيف تفهمه وتعمل عليه مثل ما يحدث داخل الشركات.',
  },
  {
    title: 'تجربة تقدر تحكي عنها',
    icon: MessageSquare,
    content: 'في الـCV والمقابلات، ما رح تقول فقط إنك حضرت دورة. رح تقدر تشرح المشروع، المشكلة التي واجهتك، كيف حللتها، والقرارات التي اتخذتها.',
  },
  {
    title: 'متابعة حقيقية لأن المقاعد محدودة',
    icon: Users,
    content: 'الدفعة الأولى متاحة لـ10 طلاب فقط، حتى يحصل كل مشارك على متابعة، مراجعة للكود، وملاحظات تساعده يتحسن فعليًا.',
  },
  {
    title: 'لا تنتظر أول وظيفة حتى تبدأ',
    icon: Rocket,
    content: 'أغلب الخريجين ينتظرون أول وظيفة حتى يكتسبوا الخبرة، لكنك تقدر تبدأ من الآن بتجربة مصممة لتقربك من طريقة العمل الحقيقية.',
  },
];

export const WhyThisExperience: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6,
      }
    );

    Array.from(container.children).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollSnapType = 'none';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = 'x mandatory';
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const nextCard = () => {
    if (activeIndex < cards.length - 1) scrollToCard(activeIndex + 1);
  };

  const prevCard = () => {
    if (activeIndex > 0) scrollToCard(activeIndex - 1);
  };

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 tracking-tight">
          ليش هذي التجربة راح تكون خطوتك الأهم؟
        </h2>
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
          لأنك غالبًا ما تحتاج كورس برمجة جديد… تحتاج فرصة تطبّق فيها اللي تعلمته داخل مشروع يحاكي بيئة العمل الحقيقية.
        </p>
      </div>

      <div className="relative max-w-[1400px] mx-auto group">
        {/* Navigation Arrows for Desktop */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 xl:px-8 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevCard}
            disabled={activeIndex === 0}
            aria-label="السابق"
            className="pointer-events-auto w-12 h-12 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-brand-navy disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={nextCard}
            disabled={activeIndex === cards.length - 1}
            aria-label="التالي"
            className="pointer-events-auto w-12 h-12 rounded-full bg-white border border-border shadow-lg flex items-center justify-center text-brand-navy disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 md:px-12 hide-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            scrollSnapType: isDragging ? 'none' : 'x mandatory',
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              data-index={index}
              className={`shrink-0 w-[85vw] sm:w-[320px] md:w-[380px] lg:w-[420px] snap-center rounded-3xl p-8 flex flex-col gap-6 select-none transition-all duration-300 border ${
                card.highlight
                  ? 'bg-brand-mint/10 border-brand-mint/30 shadow-[0_8px_30px_rgb(103,202,173,0.15)]'
                  : 'bg-white border-border shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    card.highlight ? 'bg-brand-mint text-brand-navy shadow-md shadow-brand-mint/20' : 'bg-surface border border-border text-brand-navy'
                  }`}
                >
                  <card.icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-navy leading-tight">
                  {card.title}
                </h3>
              </div>

              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                {card.content}
              </p>

              {card.comparison && (
                <div className="mt-auto pt-6 border-t border-brand-mint/20 flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-gray-300 mt-2 shrink-0" />
                    <p className="text-base">{card.comparison.course}</p>
                  </div>
                  <div className="flex items-start gap-3 text-brand-navy font-bold">
                    <span className="w-2 h-2 rounded-full bg-brand-mint mt-2 shrink-0" />
                    <p className="text-base">{card.comparison.simulation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-2 pb-4" aria-hidden="true">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-brand-navy' : 'w-2 bg-border hover:bg-gray-400'
              }`}
              aria-label={`الذهاب إلى البطاقة ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 text-center max-w-3xl">
        <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(27,50,80,0.15)] relative overflow-hidden">
          {/* Subtle glow in CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mint/10 blur-[50px] rounded-full pointer-events-none -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-heading font-bold mb-10 leading-relaxed">
              أنت ما تحتاج <span className="text-brand-mint">Tutorial</span> آخر… <br className="hidden md:block" />
              تحتاج أول تجربة عمل تجهزك للواقع.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-lg font-bold px-12 rounded-xl shadow-lg shadow-brand-mint/20"
              onClick={scrollToRegistration}
            >
              احجز مقعدك مجانًا
            </Button>
          </div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};
