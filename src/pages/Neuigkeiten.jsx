import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ChevronDown } from 'lucide-react';

const ALL_NEWS = [
  {
    id: 1,
    date: '2026-06-02',
    dateLabel: '02. Juni 2026',
    category: 'Förderung',
    title: 'Förderverein übernimmt neue Aufgaben',
    excerpt: 'Die im Zuge des erlittenen Abstiegs unserer Profis in die Dritte Liga auftretenden Engpässe werden vom Förderverein gesehen. Der Förderverein startet eine breit angelegte Mitgliederkampagne.',
    fullText: `Im Zuge des Abstiegs der Profimannschaft in die Dritte Liga entstehen finanzielle und organisatorische Engpässe, die sich auch auf das Leistungszentrum auswirken. Der Förderverein reagiert darauf mit einer breit angelegten Mitgliederkampagne und erweitert sein Förderprofil.

Ziel ist es, die Arbeit des Leistungszentrums weiterhin auf höchstem Niveau zu unterstützen und die Entwicklung der Jugendmannschaften zu sichern. Wir rufen alle Freunde und Unterstützer von Fortuna Düsseldorf dazu auf, Mitglied zu werden und gemeinsam diese wichtige Phase zu gestalten.`,
  },
  {
    id: 2,
    date: '2026-05-20',
    dateLabel: '20. Mai 2026',
    category: 'Erfolg',
    title: 'U19 holt den Niederrheinpokal',
    excerpt: 'Ein weiterer großartiger Erfolg für unsere Jugendabteilung — die U19 holt den Niederrheinpokal nach einem packenden Finale erfolgreich.',
    fullText: `Vor 419 Zuschauern im Paul-Janes-Stadion schlugen unsere U19-Jungs die SG Unterrath mit 5:1. Von Beginn an übernahmen sie die Spielkontrolle und belohnten sich früh mit der Führung. Bis zur 10. Minute stand es bereits 2:0. Auch im Anschluss blieb F95 das gefährlichere Team und ließ defensiv nichts zu. Kurz vor dem Pausenpfiff kam es zum dritten Treffer.

Nach dem Seitenwechsel war es zunächst die SG Unterrath, die etwas besser aus der Kabine kam und per Foulelfmeter auf 1:3 verkürzte (54.). Doch die Fortuna schüttelte den Gegentreffer schnell ab und stellte nur sieben Minuten später den alten Abstand wieder her. In der 84. Minute setzte unsere U19 mit dem 5:1 den Schlusspunkt. Damit stand am Ende ein verdienter Erfolg und der Titelgewinn im Niederrheinpokal! Für eine Fortuna-U19 war es in diesem Wettbewerb der erste Pokalsieg seit 2019.`,
  },
  {
    id: 3,
    date: '2026-06-17',
    dateLabel: '17. Juni 2026',
    category: 'Profis',
    title: 'Chance für Talente in der dritten Liga',
    excerpt: 'Der Abstieg der Profimannschaft in die Dritte Liga eröffnet Nachwuchstalenten aus dem Leistungszentrum neue Chancen auf Einsatzzeiten im Profikader.',
    fullText: `Der Abstieg von Fortuna Düsseldorf in die Dritte Liga ist sportlich schmerzhaft — doch er birgt auch eine Chance: Talente aus dem Leistungszentrum rücken näher an den Profikader heran und können wertvolle Spielpraxis auf höherem Niveau sammeln.

Der Förderverein sieht darin eine wichtige Entwicklungsmöglichkeit für die Nachwuchsspielerinnen und -spieler. Gerade in der dritten Liga sind junge Akteure gefragt, die mit Einsatz, Lernbereitschaft und Qualität überzeugen wollen.

Wir begleiten unsere Talente auf diesem Weg und unterstützen das Leistungszentrum dabei, die Brücke zwischen Jugend- und Profifußball so eng wie möglich zu gestalten.`,
  },
  {
    id: 4,
    date: '2026-04-14',
    dateLabel: '14. April 2026',
    category: 'Verein',
    title: 'Neuausrichtung des Fördervereins',
    excerpt: 'Der Förderverein definiert ein neues Arbeitsprofil und stellt sich den anstehenden Projekten.',
    fullText: `Der Förderverein Fortuna Düsseldorf Leistungszentrum e.V. unterstützt künftig aktiv den sogenannten „Plan B" — eine zusätzliche Karriereperspektive für alle Nachwuchsspielerinnen und -spieler des Leistungszentrums.

Der Fußball steht selbstverständlich weiterhin im Mittelpunkt. Doch der Förderverein ist überzeugt: Eine nachhaltige Förderung bedeutet, den jungen Menschen auch abseits des Platzes Perspektiven zu eröffnen.

Bei den jüngeren Spielerinnen und Spielern steht dabei die sozial-kulturelle Orientierung im Vordergrund. Werte wie Teamgeist, Verantwortungsbewusstsein, gesellschaftliches Engagement und kulturelle Bildung sollen frühzeitig gefestigt und gefördert werden.

Für die älteren Jahrgänge richtet sich der Blick gezielt auf die berufliche Zukunft: Der Förderverein unterstützt Maßnahmen, die den Weg in eine Berufsausbildung oder ein Studium begleiten und erleichtern. Damit soll sichergestellt werden, dass jede Nachwuchskraft — unabhängig vom sportlichen Werdegang — auf eine gesicherte Lebensperspektive bauen kann.

Der Plan B ist kein Rückzugsplan, sondern ein Zeichen von Stärke und Weitblick. Der Förderverein freut sich auf die enge Zusammenarbeit mit dem Leistungszentrum, den Familien und weiteren Partnern, um dieses Projekt mit Leben zu füllen.`,
  },
  {
    id: 5,
    date: '2025-04-28',
    dateLabel: '28. April 2025',
    category: 'Event',
    title: 'Jahreshauptversammlung 2025',
    excerpt: 'Die Jahreshauptversammlung des Fördervereins fand erfolgreich statt. Vorstand entlastet, Kassenprüfer gewählt.',
    fullText: `Die Jahreshauptversammlung 2025 des Fördervereins Fortuna Düsseldorf Leistungszentrum e.V. verlief in konstruktiver Atmosphäre. Der Vorstand legte Rechenschaft über das vergangene Geschäftsjahr ab und wurde einstimmig entlastet.

Der Kassenbericht zeigte eine solide finanzielle Basis. Die Mitglieder wählten zwei neue Kassenprüfer für die kommende Periode. Außerdem wurden erste Projekte für das Jahr 2026 vorgestellt und diskutiert.`,
  },
  {
    id: 6,
    date: '2025-07-01',
    dateLabel: '1. Juli 2025',
    category: 'Förderung',
    title: 'Neue Ausrüstung für U13 und U15',
    excerpt: 'Dank der Mitgliedsbeiträge und Spenden konnte der Förderverein neue Trainingsausrüstung für zwei Jugendmannschaften finanzieren.',
    fullText: `Pünktlich zum Start der neuen Saison hat der Förderverein die U13 und die U15 mit neuer Trainingsausrüstung ausgestattet. Finanziert wurde die Anschaffung vollständig aus Mitgliedsbeiträgen und Einzelspenden.

Die Mannschaften haben sich ausdrücklich für die Unterstützung bedankt. Für die Trainer ist hochwertige Ausrüstung ein wichtiger Baustein, um den Jugendlichen ein professionelles Trainingsumfeld zu bieten. Der Förderverein plant weitere Anschaffungen für die kommende Saison.`,
  },
  {
    id: 7,
    date: '2024-09-15',
    dateLabel: '15. September 2024',
    category: 'Verein',
    title: 'Gründungsversammlung des Fördervereins',
    excerpt: 'Der Förderverein Fortuna Düsseldorf Leistungszentrum e.V. wurde offiziell gegründet und ins Vereinsregister eingetragen.',
    fullText: `Am 15. September 2024 fand die Gründungsversammlung des Fördervereins Fortuna Düsseldorf Leistungszentrum e.V. statt. Die Anwesenden beschlossen die Satzung, wählten den ersten Vorstand und legten die Grundlagen für die Vereinsarbeit fest.

Der Verein wurde anschließend beim Amtsgericht Düsseldorf unter VR 10317 ins Vereinsregister eingetragen. Mit der Gründung beginnt ein neues Kapitel der organisierten Nachwuchsförderung für die Jugendabteilung von Fortuna Düsseldorf 1895 e.V.`,
  },
];

// Sort descending by date
const SORTED_NEWS = [...ALL_NEWS].sort((a, b) => new Date(b.date) - new Date(a.date));

const CATEGORIES = ['Alle', ...Array.from(new Set(ALL_NEWS.map(n => n.category)))];

export default function Neuigkeiten() {
  const [openItem, setOpenItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filtered = activeCategory === 'Alle'
    ? SORTED_NEWS
    : SORTED_NEWS.filter(n => n.category === activeCategory);

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
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Aktuelles</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Neuig<span className="text-victory-red">keiten</span>
          </h1>
          <p className="font-body text-white/50 leading-relaxed">
            Alle Beiträge und Meldungen des Fördervereins — chronologisch archiviert.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 pb-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 font-display text-[10px] tracking-[0.2em] uppercase transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-victory-red border-victory-red text-white'
                  : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Archive list */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 pb-24 space-y-0">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`py-7 border-b border-white/10 group ${i === 0 ? 'border-t border-white/10' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Date column */}
                <div className="flex-shrink-0 sm:w-36">
                  <div className="flex items-center gap-2 text-white/40">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-body text-xs tracking-wider">{item.dateLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-2.5 py-0.5 bg-victory-red/10 border border-victory-red/30 text-victory-red font-display text-[9px] tracking-[0.2em] uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-victory-red transition-colors duration-300 leading-tight">
                    {item.title}
                  </h2>
                  <p className="font-body text-sm text-white/50 leading-relaxed mb-3">{item.excerpt}</p>
                  {item.fullText && (
                    <button
                      onClick={() => setOpenItem(item)}
                      className="inline-flex items-center gap-1.5 font-display text-[10px] tracking-[0.2em] uppercase text-victory-red hover:gap-2.5 transition-all duration-300"
                    >
                      Weiterlesen <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
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
                    <span className="font-body text-xs">{openItem.dateLabel}</span>
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
                  <p key={i} className="font-body text-[15px] text-pitch-black/80 leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}