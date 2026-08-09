import React from 'react';

interface TickerLineProps {
  text: string;
  colorClasses: string;
  rotationClass: string;
  reverse?: boolean;
}

const TickerLine: React.FC<TickerLineProps> = ({ 
  text, 
  colorClasses, 
  rotationClass, 
  reverse = false 
}) => {
  // We duplicate the text enough times to ensure it fills the width of any screen
  const items = Array(15).fill(text);

  return (
    <div 
      dir="ltr"
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] py-4 shadow-xl flex overflow-hidden z-10 ${colorClasses} ${rotationClass}`}
    >
      <div 
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        <div className="flex w-max items-center gap-8 px-4">
          {items.map((item, idx) => (
            <span key={`first-${idx}`} dir="rtl" className="text-xl md:text-2xl font-heading font-bold whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
        <div className="flex w-max items-center gap-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`second-${idx}`} dir="rtl" className="text-xl md:text-2xl font-heading font-bold whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AnnouncementTicker: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[400px] sm:min-h-[450px] overflow-hidden bg-background flex flex-col items-center justify-between pb-4 sm:pb-8 mb-8 sm:mb-16 mt-16 pt-2 sm:pt-4" 
    >
      {/* Background line */}
      <TickerLine 
        text="سارع بحجز مقعدك ✦ التسجيل مجاني" 
        colorClasses="bg-brand-mint text-brand-navy"
        rotationClass="-rotate-[4deg] scale-110"
        reverse={false}
      />
      {/* Foreground line */}
      <TickerLine 
        text="سارع بحجز مقعدك ✦ التسجيل مجاني" 
        colorClasses="bg-brand-navy text-brand-mint"
        rotationClass="rotate-[4deg] scale-110"
        reverse={true}
      />

      {/* Top Content: Price & Offer */}
      <div className="relative z-20 flex flex-col items-center mt-0">
        <div className="flex items-center gap-6 text-5xl md:text-7xl font-heading font-black drop-shadow-sm">
          <span className="text-text-secondary/50 line-through decoration-danger decoration-[5px]">$500</span>
          <span className="text-brand-mint-dark">مجانًا</span>
        </div>
      </div>

      {/* Bottom Content: CTA Button */}
      <div className="relative z-20 mb-0 mt-auto">
        <a 
          href="#registration" 
          className="group inline-flex items-center justify-center gap-4 bg-brand-navy text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-heading font-bold text-xl sm:text-2xl shadow-xl shadow-brand-navy/20 hover:scale-105 hover:shadow-brand-navy/40 hover:bg-brand-navy-dark transition-all duration-300 ring-4 ring-brand-navy/20"
        >
          <span>احجز مقعدك المجاني</span>
          <svg className="w-6 h-6 sm:w-7 sm:h-7 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
