import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

export default function EinmaligeSpende({ onRequest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-white/40">Ebene 3 — Einmalig</span>
        <div className="flex-1 h-[1px] bg-white/10" />
      </div>

      <div className="relative border border-white/15 bg-white/[0.03] p-8 md:p-10 overflow-hidden">
        <div className="absolute -top-10 -right-10 pointer-events-none">
          <span className="font-display text-[12rem] leading-none text-white/[0.02] font-bold">03</span>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-victory-red to-red-700 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white">
                Einmalige <span className="text-victory-red">Spende</span>
              </h3>
            </div>
            <p className="font-body text-white/50 leading-relaxed max-w-xl">
              Ohne Bindung, ohne Mitgliedschaft: Jede einmalige Spende fließt direkt in die Nachwuchsarbeit
              des Leistungszentrums. Wir freuen uns über jeden Betrag — sprechen Sie uns einfach an.
            </p>
            <Link
              to="/foerderbereiche"
              className="inline-flex items-center gap-2 mt-5 font-display text-xs tracking-[0.2em] uppercase text-victory-red hover:text-white transition-colors duration-300"
            >
              Alle Förderbereiche entdecken <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-shrink-0 md:text-right">
            <button
              type="button"
              onClick={onRequest}
              className="inline-flex items-center px-8 py-4 bg-victory-red text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-all duration-300"
            >
              <span className="skew-x-[6deg]">Einmalige Spende anfragen</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}