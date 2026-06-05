import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden bg-pitch-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jugendakademie Training unter Flutlicht"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-pitch-black/80 to-transparent" />
        <div className="absolute inset-0 grain-overlay opacity-30" />
      </div>

      {/* Vertical running text */}
      <div className="absolute right-4 md:right-12 top-0 bottom-0 flex items-center pointer-events-none">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '-100%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="font-display text-[8rem] md:text-[14rem] text-white/[0.03] uppercase whitespace-nowrap"
          style={{ writingMode: 'vertical-rl' }}
        >
          FORTUNA DÜSSELDORF • LEISTUNGSZENTRUM • ZUKUNFT •
        </motion.div>
      </div>

      {/* F95 large watermark */}
      <div className="absolute bottom-0 left-0 pointer-events-none">
        <span className="font-display text-[20rem] md:text-[30rem] leading-none text-white/[0.02] font-bold">
          F95
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">
              Förderverein Fortuna Düsseldorf
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight text-white mb-6">
            Die Zukunft<br />
            <span className="text-victory-red">beginnt hier</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
            Gemeinsam fördern wir die nächste Generation des Düsseldorfer Fußballs. 
            Ihr Engagement macht den Unterschied.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#support"
              className="inline-flex items-center px-8 py-4 bg-victory-red text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-all duration-300 hover:scale-105"
            >
              <span className="skew-x-[6deg]">Mitglied werden</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:border-white/60 transition-all duration-300"
            >
              <span className="skew-x-[6deg]">Mehr erfahren</span>
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl"
        >
          {[
            { number: '270+', label: 'Nachwuchsspieler/-innen' },
            { number: '15', label: 'Profidebüts' },
            { number: '2010', label: 'Gegründet' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-victory-red/50 pl-4">
              <p className="font-display text-2xl md:text-3xl text-white font-bold">{stat.number}</p>
              <p className="font-body text-[11px] md:text-xs text-white/50 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}