import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const NEWS_ITEMS = [
  {
    id: 1,
    date: '28. Mai 2026',
    category: 'Erfolg',
    title: 'U17 gewinnt Westdeutsche Meisterschaft',
    excerpt: 'Ein historischer Erfolg für unsere Jugendabteilung — die U17 sichert sich den Titel nach einem packenden Finale.',
  },
  {
    id: 2,
    date: '15. Mai 2026',
    category: 'Förderung',
    title: 'Neues Torwarttrainingszentrum eingeweiht',
    excerpt: 'Dank Ihrer Unterstützung konnte das modernste Torwarttrainingszentrum im Rheinland fertiggestellt werden.',
  },
  {
    id: 3,
    date: '2. Mai 2026',
    category: 'Profis',
    title: 'Drei Talente schaffen den Sprung in den Profikader',
    excerpt: 'Die Nachwuchsspieler Leon, Emre und Finn wurden in den Profikader von Fortuna Düsseldorf berufen.',
  },
  {
    id: 4,
    date: '18. April 2026',
    category: 'Event',
    title: 'Jahreshauptversammlung 2026',
    excerpt: 'Die diesjährige Hauptversammlung findet am 15. Juni im Paul-Janes-Stadion statt. Alle Mitglieder sind herzlich eingeladen.',
  },
];

export default function NewsSection({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="news" ref={ref} className="relative py-24 md:py-32 bg-stadium-concrete overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Aktuelles</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-pitch-black">
            Neuig<span className="text-victory-red">keiten</span>
          </h2>
        </motion.div>

        {/* Film-strip scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {NEWS_ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[440px] snap-start group cursor-pointer"
            >
              <div className="relative h-56 md:h-64 overflow-hidden mb-5 bg-pitch-black">
                <img
                  src={images[i % images.length]}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-victory-red text-white font-display text-[10px] tracking-[0.2em] uppercase skew-x-[-6deg]">
                    <span className="skew-x-[6deg] inline-block">{item.category}</span>
                  </span>
                </div>
                {/* Angled bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stadium-concrete to-transparent" />
              </div>

              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-body text-xs tracking-wider">{item.date}</span>
              </div>

              <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-pitch-black mb-3 group-hover:text-victory-red transition-colors duration-300 leading-tight">
                {item.title}
              </h3>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {item.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 font-display text-xs tracking-[0.15em] uppercase text-victory-red group-hover:gap-3 transition-all duration-300">
                Weiterlesen <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}