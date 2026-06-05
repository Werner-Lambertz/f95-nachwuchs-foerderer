import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, X } from 'lucide-react';

const FEATURED_ITEM = {
  id: 1,
  date: '20. Mai 2026',
  category: 'Erfolg',
  title: 'U17 holt den Niederrheinpokal',
  excerpt: 'Ein weiterer großartiger Erfolg für unsere Jugendabteilung — die U17 holt den Niederrheinpokal nach einem packenden Finale erfolgreich.',
  fullText: `Vor 419 Zuschauern im Paul-Janes-Stadion schlugen unsere U19-Jungs die SG Unterrath mit 5:1. Von Beginn an übernahmen sie die Spielkontrolle und belohnten sich früh mit der Führung. Bis zur 10. Minute stand es bereits 2:0. Auch im Anschluss blieb F95 das gefährlichere Team und ließ defensiv nichts zu. Kurz vor dem Pausenpfiff kam es zum dritten Treffer.

Nach dem Seitenwechsel war es zunächst die SG Unterrath, die etwas besser aus der Kabine kam und per Foulelfmeter auf 1:3 verkürzte (54.). Doch die Fortuna schüttelte den Gegentreffer schnell ab und stellte nur sieben Minuten später den alten Abstand wieder her. In der 84. Minute setzte unsere U19 mit dem 5:1 den Schlusspunkt. Damit stand am Ende ein verdienter Erfolg und der Titelgewinn im Niederrheinpokal! Für eine Fortuna-U19 war es in diesem Wettbewerb der erste Pokalsieg seit 2019.`,
};

const NEWS_ITEMS = [
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
  const [openItem, setOpenItem] = useState(null);

  return (
    <section id="news" ref={ref} className="relative py-24 md:py-32 bg-stadium-concrete overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-40" />
      
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
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Aktuelles</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-pitch-black">
            Neuig<span className="text-victory-red">keiten</span>
          </h2>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="max-w-3xl mx-auto bg-pitch-black group cursor-pointer" onClick={() => setOpenItem(FEATURED_ITEM)}>
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={images[0]}
                alt={FEATURED_ITEM.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/30 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-block px-3 py-1 bg-victory-red text-white font-display text-[10px] tracking-[0.2em] uppercase skew-x-[-6deg]">
                  <span className="skew-x-[6deg] inline-block">{FEATURED_ITEM.category}</span>
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2 text-white/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-body text-xs tracking-wider">{FEATURED_ITEM.date}</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-white leading-tight group-hover:text-victory-red transition-colors duration-300">
                  {FEATURED_ITEM.title}
                </h3>
              </div>
            </div>
            <div className="p-6 border-t border-white/5">
              <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
                {FEATURED_ITEM.excerpt}
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); setOpenItem(FEATURED_ITEM); }}
                className="inline-flex items-center gap-2 font-display text-xs tracking-[0.15em] uppercase text-victory-red hover:gap-3 transition-all duration-300"
              >
                Weiterlesen <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Other articles scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {NEWS_ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[400px] snap-start group cursor-pointer"
            >
              <div className="relative h-48 md:h-56 overflow-hidden mb-4 bg-pitch-black">
                <img
                  src={images[(i + 1) % images.length]}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-victory-red text-white font-display text-[10px] tracking-[0.2em] uppercase skew-x-[-6deg]">
                    <span className="skew-x-[6deg] inline-block">{item.category}</span>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stadium-concrete to-transparent" />
              </div>

              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-body text-xs tracking-wider">{item.date}</span>
              </div>

              <h3 className="font-display text-xl uppercase tracking-tight text-pitch-black mb-3 group-hover:text-victory-red transition-colors duration-300 leading-tight">
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

      {/* Full article modal */}
      <AnimatePresence>
        {openItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-pitch-black/80 backdrop-blur-sm z-50"
              onClick={() => setOpenItem(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl top-1/2 -translate-y-1/2 z-50 bg-pure-oxygen shadow-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-pure-oxygen border-b border-stadium-concrete px-6 py-4 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-victory-red text-white font-display text-[10px] tracking-[0.2em] uppercase skew-x-[-6deg] mb-2">
                    <span className="skew-x-[6deg] inline-block">{openItem.category}</span>
                  </span>
                  <h2 className="font-display text-xl md:text-2xl uppercase tracking-tight text-pitch-black leading-tight">
                    {openItem.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-body text-xs">{openItem.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpenItem(null)}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-pitch-black/40 hover:text-pitch-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-6 space-y-4">
                {openItem.fullText.split('\n\n').map((para, i) => (
                  <p key={i} className="font-body text-[15px] text-pitch-black/80 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}