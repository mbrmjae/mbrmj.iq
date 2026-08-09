import React from 'react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const scrollToRegistration = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const firstInput = element.querySelector('input, textarea') as HTMLElement;
        if (firstInput) {
          firstInput.focus();
        }
      }, 800);
    }
  };

  return (
    <footer className="bg-brand-navy text-white">
      {/* Final CTA Section */}
      <div className="py-24 px-6 md:px-12 text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">مستعد لتخوض تجربة العمل البرمجي الحقيقية؟</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            إذا كنت مستعدًا للتعلّم من مشروع قائم، مواجهة المشكلات، واتخاذ قراراتك كمطوّر، فقد تكون هذه التجربة خطوتك القادمة.
          </p>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto" onClick={scrollToRegistration}>
            قدّم طلبك للدفعة الأولى
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}assets/mbrmj-logo.png`} 
                alt="Mbrmj" 
                width="87"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 brightness-0 invert opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-white/70 max-w-sm">
              نتعلم البرمجة من خلال تجربة العمل الحقيقي.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/70">
              <li><a href="#problem" className="hover:text-brand-mint transition-colors">عن البرنامج</a></li>
              <li><a href="#timeline" className="hover:text-brand-mint transition-colors">رحلة الأسبوعين</a></li>
              <li><a href="#faq" className="hover:text-brand-mint transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/50 text-sm gap-4">
          <p>© 2026 Mbrmj. جميع الحقوق محفوظة.</p>
          <p className="text-center md:text-left">مشروع خدمتي العراق والجهة العميلة في السيناريو افتراضيان لأغراض التعلم.</p>
        </div>
      </div>
    </footer>
  );
};
