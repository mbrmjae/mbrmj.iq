import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'عن البرنامج', href: '#problem' },
    { label: 'التجربة', href: '#concept' },
    { label: 'ما ستتعلمه', href: '#outcomes' },
    { label: 'رحلة الأسبوعين', href: '#timeline' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  const scrollToRegistration = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first input after a slight delay
      setTimeout(() => {
        const firstInput = element.querySelector('input, textarea') as HTMLElement;
        if (firstInput) {
          firstInput.focus();
        }
      }, 800);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 z-50 relative">
            <img 
              src={`${import.meta.env.BASE_URL}assets/mbrmj-logo.png`} 
              alt="Mbrmj Logo" 
              className={`h-8 transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert drop-shadow-md'}`}
              onError={(e) => {
                // Fallback text if image not found
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }}
            />
            <span className={`font-heading font-bold text-xl hidden ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>Mbrmj</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-brand-mint ${
                      isScrolled ? 'text-text-primary' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant={isScrolled ? 'primary' : 'secondary'}
              size="sm"
              onClick={scrollToRegistration}
            >
              قدّم طلبك
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 p-2 -mr-2 ${
              isScrolled || mobileMenuOpen ? 'text-brand-navy' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-surface pt-24 px-6 pb-6 flex flex-col md:hidden h-screen"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium text-text-primary mt-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Button className="w-full" size="lg" onClick={scrollToRegistration}>
                قدّم طلبك الآن
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
