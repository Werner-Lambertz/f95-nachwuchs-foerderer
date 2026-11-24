import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import LogoMark from '@/components/LogoMark';

const PLATIN_SPONSOREN = [
  {
    name: 'Forteng',
    logo: 'https://base44.app/api/apps/6a21b8605426a2a9bf55a069/files/mp/public/6a21b8605426a2a9bf55a069/f51c473f79400781c709d1b36d224bd9_forteng.png',
    url: 'https://www.forteng.de/',
    logoBg: 'bg-white',
    beschreibung: 'Platin-Spender des Fördervereins.',
  },
  {
    name: 'Stadtbäckerei',
    logo: 'https://base44.app/api/apps/6a21b8605426a2a9bf55a069/files/mp/public/6a21b8605426a2a9bf55a069/8a0d0ed3623e268da87b44452a4dbc39_scd-2003.png',
    url: 'https://www.scd2003.de/',
    logoBg: 'bg-pitch-black',
    beschreibung: 'Platin-Spender des Fördervereins.',
  },
];

export default function Foerdertafel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen bg-pitch-black">
      {/* Top bar */}
      <div className="bg-pitch-black border-b border-white/5 px-6 md:px-16 py-4 sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3 group w-fit">
          <LogoMark className="h-10 w-auto" />
          <span className="font-display text-white/60 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            ← Zurück zur Startseite
          </span>
        </Link>
      </div>

      <section ref={ref} className="relative px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14 md:mb-20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-victory-red" />
              <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Unsere Unterstützer</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white">
              Förder<span className="text-victory-red">tafel</span>
            </h1>
            <p className="font-body text-white/50 leading-relaxed max-w-2xl mt-6">
              Wir danken allen Unternehmen und Partnern, die die Nachwuchsarbeit des Leistungszentrums
              unterstützen. Hier finden Sie unsere Spender nach Stufen.
            </p>
          </motion.div>

          {/* Platin */}
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-5 h-5 text-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-white/40">Platin-Spender</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {PLATIN_SPONSOREN.map((sponsor, i) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="group block border border-white/15 bg-white/[0.03] p-8 md:p-10 hover:border-victory-red transition-colors duration-300"
              >
                <div className={`flex items-center justify-center h-40 md:h-48 px-8 py-6 mb-6 border border-white/10 ${sponsor.logoBg}`}>
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl uppercase tracking-tight text-white group-hover:text-victory-red transition-colors">
                      {sponsor.name}
                    </h2>
                    <p className="font-body text-sm text-white/40 mt-1">{sponsor.beschreibung}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-victory-red transition-colors shrink-0 mt-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}