import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Startseite', href: '#hero' },
  { label: 'Neuigkeiten', href: '#news' },
  { label: 'Unterstützung', href: '#support' },
  { label: 'Über uns', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed top bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-pitch-black/95 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-victory-red flex items-center justify-center skew-x-[-6deg]">
              <span className="font-display text-white font-bold text-lg skew-x-[6deg]">F95</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-white text-sm tracking-[0.2em] uppercase leading-tight">Förderverein Fortuna Düsseldorf</p>
              <p className="font-body text-white/60 text-[10px] tracking-[0.15em] uppercase">Leistungszentrum e.V.</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="font-display text-xs tracking-[0.2em] uppercase text-white/70 hover:text-victory-red transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#support')}
              className="ml-4 px-6 py-2.5 bg-victory-red text-white font-display text-xs tracking-[0.2em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-colors"
            >
              <span className="skew-x-[6deg] inline-block">Jetzt unterstützen</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-victory-red flex flex-col"
          >
            <div className="flex justify-between items-center p-6">
              <div className="w-10 h-10 bg-pitch-black flex items-center justify-center skew-x-[-6deg]">
                <span className="font-display text-white font-bold text-lg skew-x-[6deg]">F95</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => scrollTo(item.href)}
                  className="text-left py-3 md:py-4 border-b border-white/20 last:border-0 group"
                >
                  <span className="font-display text-3xl md:text-6xl lg:text-8xl uppercase tracking-wider text-white/90 group-hover:text-pitch-black transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}