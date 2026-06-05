import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Star, Crown, Trophy, Users, Dumbbell, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TIERS = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: '5',
    period: '/Monat',
    color: 'from-amber-700 to-amber-900',
    borderColor: 'border-amber-700/40',
    icon: Shield,
    impact: '1 Trainingsball pro Jahr',
    benefits: ['Vereinsnewsletter', 'Mitgliedsurkunde', 'Einladung zur Jahresversammlung'],
  },
  {
    id: 'silber',
    name: 'Silber',
    price: '15',
    period: '/Monat',
    color: 'from-gray-400 to-gray-600',
    borderColor: 'border-gray-400/40',
    icon: Star,
    impact: '3 Trainingseinheiten Coaching',
    benefits: ['Alle Bronze-Vorteile', 'Exklusive Trainingsbesuche', 'Vereinsschal'],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '30',
    period: '/Monat',
    color: 'from-yellow-500 to-yellow-700',
    borderColor: 'border-yellow-500/40',
    icon: Crown,
    impact: '1 komplette Ausrüstung für einen Spieler',
    benefits: ['Alle Silber-Vorteile', 'VIP-Bereich bei Jugendspielen', 'Signiertes Trikot'],
    featured: true,
  },
  {
    id: 'platin',
    name: 'Platin',
    price: '50',
    period: '/Monat',
    color: 'from-slate-300 to-slate-500',
    borderColor: 'border-slate-300/40',
    icon: Trophy,
    impact: '1 Stipendium für einen Nachwuchsspieler',
    benefits: ['Alle Gold-Vorteile', 'Namensnennung an der Fördertafel', 'Persönlicher Ansprechpartner', 'Jahresbericht exklusiv'],
  },
];

const IMPACT_ITEMS = [
  { icon: Users, amount: 5, label: 'Trainingsbälle', desc: 'für die Jugendmannschaften' },
  { icon: Dumbbell, amount: 15, label: 'Stunden Coaching', desc: 'durch Spitzentrainer' },
  { icon: GraduationCap, amount: 30, label: 'Komplette Ausrüstung', desc: 'für einen Nachwuchsspieler' },
  { icon: Heart, amount: 50, label: 'Stipendium', desc: 'für ein junges Talent' },
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
            Jeder Beitrag formt die Zukunft des Düsseldorfer Fußballs. 
            Wählen Sie Ihre Mitgliedschaft und sehen Sie die direkte Wirkung Ihrer Unterstützung.
          </p>
          <Link
            to="/foerderbereiche"
            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] uppercase text-victory-red hover:text-white transition-colors duration-300"
          >
            Alle Förderbereiche entdecken <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Impact Meter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-12"
        >
          {IMPACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const currentTier = TIERS.find(t => t.id === selectedTier);
            const isActive = parseInt(currentTier?.price || '0') >= item.amount;
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

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier, i) => {
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
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-display text-3xl text-white">{tier.price}€</span>
                    <span className="font-body text-sm text-white/40">{tier.period}</span>
                  </div>

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
      </div>
    </section>
  );
}