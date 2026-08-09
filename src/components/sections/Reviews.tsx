import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    type: 'text',
    name: 'أحمد محمود',
    role: 'طالب هندسة برمجيات',
    content: 'التجربة كانت استثنائية! لأول مرة أتعامل مع كود حقيقي مكتوب من شخص آخر وأصلح فيه أخطاء. هذا البرنامج أعطاني ثقة كبيرة للتقديم على وظائف.',
    rating: 5,
  },
  {
    id: 2,
    type: 'image',
    src: `${import.meta.env.BASE_URL}assets/Feedback1.png`,
    alt: 'رسالة تقييم من متدرب عبر Discord'
  },
  {
    id: 3,
    type: 'text',
    name: 'سارة خالد',
    role: 'خريجة تقنية معلومات',
    content: 'كنت أضيع الكثير من الوقت في متابعة الدروس التعليمية بدون تطبيق حقيقي. محاكاة بيئة العمل هنا جعلتني أفهم كيف تعمل الشركات التقنية وكيف يتم تقسيم المهام.',
    rating: 5,
  },
  {
    id: 4,
    type: 'image',
    src: `${import.meta.env.BASE_URL}assets/Feedback2.png`,
    alt: 'رأي أحد المشاركين عبر منصة LinkedIn'
  },
  {
    id: 5,
    type: 'text',
    name: 'عمر ياسين',
    role: 'مطور واجهات خلفية مبتدئ',
    content: 'أفضل استثمار لوقتي! جلسات المراجعة (Code Reviews) كانت تفتح عيني على أخطاء برمجية لم أكن أنتبه لها. أنصح به أي شخص يريد تجاوز مرحلة الأساسيات.',
    rating: 5,
  },
  {
    id: 6,
    type: 'image',
    src: `${import.meta.env.BASE_URL}assets/Feedback3.png`,
    alt: 'تقييم إضافي من أحد المشاركين في البرنامج'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-brand-navy">تجارب من سبقوك</h2>
          <p className="text-lg text-text-secondary">
            آراء وانطباعات المشاركين الذين خاضوا تجربة محاكاة بيئة العمل.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid"
            >
              {review.type === 'text' ? (
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-4">
                     {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <p className="text-text-primary leading-relaxed mb-6">"{review.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-mint/20 flex items-center justify-center text-brand-mint font-bold text-sm">
                      {review.name?.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-navy">{review.name}</h4>
                      <span className="text-xs text-text-secondary">{review.role}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-border overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                  {/* Fallback styling for when images fail to load */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0 bg-gray-50">
                    <div className="mb-2 p-3 bg-gray-100 rounded-full">
                      <Star className="w-6 h-6 opacity-30 text-brand-yellow fill-brand-yellow" />
                    </div>
                    <span className="text-xs font-medium text-text-secondary">مساحة مخصصة لصورة التقييم</span>
                    <span className="text-[10px] text-text-secondary/60 mt-1">{review.src}</span>
                  </div>
                  
                  {/* The actual image tag (will cover the fallback once the image exists and loads) */}
                  <img 
                    src={review.src} 
                    alt={review.alt} 
                    className="w-full h-auto object-contain relative z-10 opacity-0 transition-opacity duration-300"
                    onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                    onError={(e) => e.currentTarget.classList.add('hidden')}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
