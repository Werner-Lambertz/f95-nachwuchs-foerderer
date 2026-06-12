import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VORSTAND = [
  {
    rolle: 'Vorstandssprecher',
    name: 'Werner Lambertz',
    beschreibung: '',
  },
  {
    rolle: 'Schatzmeister',
    name: 'Hans-J. Krause',
    beschreibung: '',
  },
  {
    rolle: 'Protokollführer',
    name: 'Hans-J. Krause',
    beschreibung: 'in Aufgabenunion',
  },
  {
    rolle: 'Leiter des Leistungszentrums',
    name: 'Patrick Fabian',
    beschreibung: 'Geborenes Vorstandsmitglied',
  },
];

export default function Vorstand() {
  return (
    <div className="min-h-screen bg-pitch-black">
      {/* Top bar */}
      <div className="bg-pitch-black border-b border-white/5 px-6 md:px-16 py-4 sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3 group w-fit">
          <div className="w-8 h-8 bg-victory-red flex items-center justify-center skew-x-[-6deg]">
            <span className="font-display text-white font-bold text-sm skew-x-[6deg]">F95</span>
          </div>
          <span className="font-display text-white/60 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            ← Zurück zur Startseite
          </span>
        </Link>
      </div>

      {/* Header */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-victory-red" />
        <div className="absolute inset-0 grain-overlay opacity-20" />
        <div className="absolute -bottom-10 -right-10 pointer-events-none">
          <span className="font-display text-[16rem] leading-none text-white/[0.02] font-bold">F95</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Über uns</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Der <span className="text-victory-red">Vorstand</span>
          </h1>
          <p className="font-body text-white/50 leading-relaxed">
            Der Vorstand des Fördervereins Fortuna Düsseldorf Leistungszentrum e.V. leitet verantwortlich die Vereinsarbeit gemäß § 10 der Satzung.
          </p>
        </div>
      </div>

      {/* Vorstandsmitglieder */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-24 space-y-0">
        {VORSTAND.map((mitglied, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`py-8 border-b border-white/10 ${i === 0 ? 'border-t border-white/10' : ''}`}
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-victory-red/10 border border-victory-red/30 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-victory-red font-bold text-lg">{i + 1}</span>
              </div>
              <div className="flex-1">
                <p className="font-display text-[10px] tracking-[0.3em] uppercase text-victory-red mb-1">{mitglied.rolle}</p>
                <h2 className="font-display text-2xl uppercase tracking-tight text-white">
                  {mitglied.name || <span className="text-white/25">N. N.</span>}
                </h2>
                {mitglied.beschreibung && (
                  <p className="font-body text-sm text-white/40 mt-1">{mitglied.beschreibung}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Hinweis */}
        <div className="pt-10 pb-4 border-b border-white/5">
          <div className="p-6 bg-white/3 border border-white/10">
            <p className="font-display text-[10px] tracking-[0.25em] uppercase text-victory-red mb-2">Rechtliche Grundlage</p>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Jeweils zwei Vorstandsmitglieder im Sinne des § 26 BGB vertreten den Verein gerichtlich und außergerichtlich. 
              Die gewählten Vorstandsmitglieder werden für die Dauer von zwei Jahren bestimmt.
            </p>
          </div>
        </div>

        <p className="pt-8 font-body text-xs text-white/30 tracking-wider uppercase">
          Vorstandsbestellung gemäß § 10 der Satzung
        </p>
      </div>
    </div>
  );
}