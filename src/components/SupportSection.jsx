import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Star, Crown, Trophy, Dumbbell, Users, Shirt, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SPONSOR_TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    priceMonthly: '20',
    priceYearly: '240',
    color: 'from-amber-700 to-amber-900',
    borderColor: 'border-amber-700/40',
    icon: Shield,
    impact: '3 Trainingsbälle pro Jahr',
    benefits: ['Spenderurkunde', 'Vereinsnewsletter', 'Jahresbericht der Nachwuchsarbeit', 'Einladung zu Förderveranstaltungen'],
  },
  {
    id: 'silber',
    name: 'Silber',
    priceMonthly: '35',
    priceYearly: '420',
    color: 'from-gray-400 to-gray-600',
    borderColor: 'border-gray-400/40',
    icon: Star,
    impact: '7 Trainingseinheiten Coaching',
    benefits: ['Alle Bronze-Vorteile', 'Eingliederung in die Förderarbeit (auf freiwilliger Basis)'],
  },
  {
    id: 'gold',
    name: 'Gold',
    priceMonthly: '50',
    priceYearly: '600',
    color: 'from-yellow-500 to-yellow-700',
    borderColor: 'border-yellow-500/40',
    icon: Crown,
    impact: 'Komplette Ausrüstung für zwei Spieler',
    benefits: ['Alle Silber-Vorteile', 'Namentliche Nennung in der Mitgliederzeitschrift (optional)'],
    featured: true,
  },
  {
    id: 'platin',
    name: 'Platin',
    priceMonthly: '70',
    priceYearly: '840',
    color: 'from-slate-300 to-slate-500',
    borderColor: 'border-slate-300/40',
    icon: Trophy,
    impact: '1 Stipendium für einen Nachwuchsspieler',
    benefits: ['Alle Gold-Vorteile', 'Namensnennung an der Fördertafel', 'Persönlicher Ansprechpartner', 'Jahresbericht exklusiv'],
  },
];

const TIER_ORDER = { bronze: 0, silber: 1, gold: 2, platin: 3 };

const IMPACT_ITEMS = [
  { icon: Dumbbell, tierId: 'bronze', label: '3 Trainingsbälle', desc: 'für die Jugendmannschaften' },
  { icon: Users, tierId: 'silber', label: '7 Coaching-Einheiten', desc: 'durch Spitzentrainer' },
  { icon: Shirt, tierId: 'gold', label: 'Komplette Ausrüstung', desc: 'für zwei Nachwuchsspieler' },
  { icon: GraduationCap, tierId: 'platin', label: 'Stipendium', desc: 'für ein junges Talent' },
];

export default function SupportSection() {
  const [selectedTier, setSelectedTier] = useState('gold');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="support" ref={ref} className="relative py-24 md:py-32 bg-pitch-black overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20" />
      
      {/* Angled red accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-victory-red" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-victory-red/[0.03] skew-x-[-12deg] translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Werden Sie Teil der Zukunft</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Unter<span className="text-victory-red">stützung</span>
          </h2>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed mb-6">
            Zwei Wege, die Nachwuchsarbeit von Fortuna Düsseldorf zu stärken: 
            Werden Sie Mitglied oder unterstützen Sie uns als Spender.
          </p>
          <Link
            to="/foerderbereiche"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] uppercase text-victory-red hover:text-white transition-colors duration-300"
          >
            Alle Förderbereiche entdecken <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Level 1: Mitglied werden */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-white/40">Ebene 1 — Die Basis</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
          <div className="relative border border-white/15 bg-white/[0.03] p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-10 -right-10 pointer-events-none">
              <span className="font-display text-[12rem] leading-none text-white/[0.02] font-bold">01</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white mb-3">
                  Mitglied <span className="text-victory-red">werden</span>
                </h3>
                <p className="font-body text-white/50 leading-relaxed max-w-xl mb-5">
                  Die Mitgliedschaft ist die Basis unserer Arbeit. Jedes Mitglied stärkt die Nachwuchsarbeit 
                  und wird Teil der Fortuna-Familie.
                </p>
                <ul className="space-y-2.5">
                  {['Vereinsnewsletter', 'Mitgliedsurkunde', 'Einladung zur Jahresversammlung', 'Stimme auf der Mitgliederversammlung'].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-victory-red mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-white/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 md:text-right">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-victory-red/80 mb-2">Mindestbeitrag</p>
                <div className="flex items-baseline gap-2 md:justify-end mb-1">
                  <span className="font-display text-5xl text-white">5€</span>
                  <span className="font-body text-white/40">/ Monat</span>
                </div>
                <p className="font-body text-sm text-white/40 mb-6">oder 60€ / Jahr</p>
                <Link
                  to="/mitgliedsantrag"
                  className="inline-flex items-center px-8 py-4 bg-victory-red text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-all duration-300"
                >
                  <span className="skew-x-[6deg]">Mitglied werden</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Level 2: Sponsor werden */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-white/40">Ebene 2 — Spenden</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-10">
            <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white">
              Spender <span className="text-victory-red">werden</span>
            </h3>
            <p className="font-body text-sm text-white/40 sm:ml-auto">
              Reine Förderung — eigenständig zur Mitgliedschaft.
            </p>
          </div>

          {/* Impact Meter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {IMPACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = TIER_ORDER[selectedTier] >= TIER_ORDER[item.tierId];
              return (
                <div
                  key={item.label}
                  className={`p-5 border transition-all duration-500 ${
                    isActive
                      ? 'border-victory-red/40 bg-victory-red/10'
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-3 transition-colors duration-500 ${isActive ? 'text-victory-red' : 'text-white/20'}`} />
                  <p className={`font-display text-sm uppercase tracking-wider mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/30'}`}>
                    {item.label}
                  </p>
                  <p className={`font-body text-xs transition-colors duration-500 ${isActive ? 'text-white/60' : 'text-white/20'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Sponsor Tiers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPONSOR_TIERS.map((tier, i) => {
              const Icon = tier.icon;
              const isSelected = selectedTier === tier.id;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative cursor-pointer transition-all duration-500 group ${
                    isSelected
                      ? 'border-2 border-victory-red bg-white/[0.06] scale-[1.02]'
                      : `border ${tier.borderColor} bg-white/[0.02] hover:bg-white/[0.04]`
                  } ${tier.featured && !isSelected ? 'ring-1 ring-yellow-500/20' : ''}`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-victory-red text-white font-display text-[9px] tracking-[0.2em] uppercase">
                      Beliebteste Wahl
                    </div>
                  )}

                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-sm bg-gradient-to-br ${tier.color} flex items-center justify-center mb-5`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-1">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-display text-3xl text-white">{tier.priceMonthly}€</span>
                      <span className="font-body text-sm text-white/40">/ Monat</span>
                    </div>
                    <p className="font-body text-xs text-white/30 mb-5">oder {tier.priceYearly}€ / Jahr</p>

                    <div className="border-t border-white/10 pt-5 mb-5">
                      <p className="font-body text-xs text-victory-red/80 uppercase tracking-wider mb-1">Ihre Wirkung</p>
                      <p className="font-body text-sm text-white/70">{tier.impact}</p>
                    </div>

                    <ul className="space-y-2.5">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-victory-red mt-2 flex-shrink-0" />
                          <span className="font-body text-sm text-white/60">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`mt-6 w-full py-3 font-display text-xs tracking-[0.15em] uppercase transition-all duration-300 skew-x-[-4deg] ${
                        isSelected
                          ? 'bg-victory-red text-white hover:bg-red-700'
                          : 'border border-white/20 text-white/70 hover:border-white/40'
                      }`}
                    >
                      <span className="skew-x-[4deg] inline-block">Auswählen</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-6 font-body text-xs text-white/40 leading-relaxed max-w-2xl">
            Die Spenden in den Kategorien Bronze, Silber, Gold und Platin werden als freiwillige Spenderleistung per SEPA-Lastschrift eingezogen. Freiwillige Spenden ohne Kategorie sind jederzeit möglich. Das Auftreten als Spender schließt keine Mitgliedschaft ein; diese ist separat zu beantragen.
          </p>
        </div>
      </div>
    </section>
  );
}