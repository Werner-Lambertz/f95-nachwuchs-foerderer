import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, MapPin, GraduationCap, ArrowRight } from 'lucide-react';

const MEASURES = [
  {
    icon: Users,
    title: 'Teambuilding U17-Mädchen',
    text: 'Unsere U17-Mädchenmannschaft plant im Rahmen der Saisonvorbereitung ein Team-Building-Event. Die Kosten für diese Maßnahmen werden zum Teil durch den Förderverein übernommen.',
  },
  {
    icon: MapPin,
    title: 'Unterstützung zur Ausrichtung eines Trainingslagers',
    text: 'Die Mittel zur Saisonvorbereitung der Teams wurden aufgrund der unsicheren Finanzierung stark begrenzt. Damit die U10, wie geplant, das Trainingslager in Straelen aufnehmen kann, wurden die Fahrtkosten für die beteiligten Betreuer und Trainer durch einen Beitrag des Fördervereins übernommen.',
  },
  {
    icon: GraduationCap,
    title: 'Sicherung der B-Lizenz VIII/2026',
    text: 'Die in der Präambel der Satzung formulierte Aufgabe „die pädagogische Kompetenz der Trainer ständig zu kontrollieren und zu verbessern, die psychologische Kompetenz der Trainer zu erweitern und die Führungskompetenz der Trainer auf eine werteorientierte Basis zu stellen" erfordert die Hinwendung der Fördervereinsmaßnahmen zum Trainerteam. So konnten wir durch die Übernahme der Fortbildungskosten eines Trainers die Zielsetzung fördern.',
  },
];

export default function FoerdermassnahmenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="foerdermassnahmen" ref={ref} className="relative py-24 md:py-32 bg-pitch-black overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-20" />
      <div className="absolute top-0 left-0 w-full h-2 bg-victory-red" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-victory-red/[0.03] skew-x-[-12deg] -translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Aktuelle Fördermaßnahmen</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Förderverein übernimmt Kosten für <span className="text-victory-red">Fortbildung</span> und <span className="text-victory-red">Saisonvorbereitung</span>
          </h2>
          <p className="font-body text-lg text-white/50 max-w-3xl leading-relaxed mb-4">
            Sofort nach der schlechten Nachricht zum Abstieg der ersten Mannschaft hat der Förderverein seine Kräfte gebündelt und erste direkte Aktionen für die Mannschaften des NLZ eingeleitet.
          </p>
          <p className="font-body text-base text-white/40 max-w-3xl leading-relaxed">
            Allen Mannschaften wurde zugesagt, eine Förderung der Saisonvorbereitung durch den Förderverein zu übernehmen. Einige Maßnahmen lassen sich bereits exemplarisch darstellen:
          </p>
        </motion.div>

        {/* Measure cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEASURES.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="relative border border-white/10 bg-white/[0.03] p-7 hover:border-victory-red/40 hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="absolute -top-px left-0 w-0 h-[2px] bg-victory-red group-hover:w-full transition-all duration-500" />
                <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-victory-red to-red-700 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-lg uppercase tracking-wider text-white mb-3 leading-tight">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex items-center gap-3 text-white/40"
        >
          <ArrowRight className="w-4 h-4 text-victory-red" />
          <span className="font-body text-sm">Weitere Maßnahmen sind in Vorbereitung — der Förderverein bleibt am Ball.</span>
        </motion.div>
      </div>
    </section>
  );
}