import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, ShieldCheck, Shirt, Users, Star, ArrowRight, Heart, Flag, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AREAS = [
  {
    id: 'turniere',
    icon: Trophy,
    category: 'Sport & Wettbewerb',
    title: 'Förderung von Turnieren',
    intro: 'Turniere sind das Herzstück der Nachwuchsentwicklung. Sie geben jungen Talenten die Möglichkeit, sich unter Wettkampfbedingungen zu beweisen, zu wachsen und Erfahrungen zu sammeln, die kein Training ersetzen kann.',
    items: [
      { label: 'Ausrichtung eigener Jugendturniere', desc: 'Wir finanzieren Organisation, Platzmieten und Schiedsrichter für selbst ausgerichtete Turniere am Leistungszentrum.' },
      { label: 'Reisekosten & Teilnahmegebühren', desc: 'Auswärtsfahrten zu überregionalen Turnieren in ganz Deutschland werden durch den Förderverein bezuschusst.' },
      { label: 'Internationale Begegnungen', desc: 'Freundschaftsturniere mit europäischen Partnerakademien fördern Weltoffenheit und fußballerischen Horizont.' },
      { label: 'Pokalwettbewerbe & DFB-Qualifikationen', desc: 'Anmeldungen und Vorbereitungslehrgänge für DFB-Pokal- und Verbandsebene werden unterstützt.' },
    ],
  },
  {
    id: 'antidiskriminierung',
    icon: ShieldCheck,
    category: 'Gesellschaft & Werte',
    title: 'Antidiskriminierung & Antisemitismus',
    intro: 'Fußball ist mehr als Sport — er ist ein Spiegel der Gesellschaft. Wir bekennen uns klar gegen jede Form von Diskriminierung und setzen mit konkreten Projekten Zeichen für ein offenes, vielfältiges und respektvolles Miteinander.',
    items: [
      { label: 'Bildungsworkshops im Leistungszentrum', desc: 'Regelmäßige Workshops sensibilisieren Spieler, Trainer und Eltern für Themen wie Rassismus, Antisemitismus und Ausgrenzung.' },
      { label: 'Kooperation mit NS-Dokumentationszentrum Düsseldorf', desc: 'Gemeinsame Besuche und Bildungsprojekte mit der Mahn- und Gedenkstätte Düsseldorf.' },
      { label: '"Bunt kickt gut" — Integrationsfußball', desc: 'Förderung von Projekten, die Nachwuchsspieler mit unterschiedlichem Hintergrund zusammenbringen.' },
      { label: 'Klares Regelwerk & Meldesystem', desc: 'Finanzierung eines anonymen Meldekanals für diskriminierende Vorfälle auf dem Trainingsgelände.' },
    ],
  },
  {
    id: 'ausstattung',
    icon: Shirt,
    category: 'Ausstattung & Infrastruktur',
    title: 'Mannschaftsausstattung',
    intro: 'Professionelle Ausrüstung ist kein Luxus — sie ist eine Grundvoraussetzung für optimale Trainings- und Wettkampfbedingungen. Der Förderverein stellt sicher, dass kein Talent aufgrund fehlender Ausrüstung zurückbleibt.',
    items: [
      { label: 'Trikots & Spielkleidung', desc: 'Alle Jugendmannschaften von der U9 bis zur U19 erhalten vollständige Spielausrüstung auf Profiniveau.' },
      { label: 'Trainingsausrüstung & Hütchen', desc: 'Bälle, Hütchen, Leibchen, Tore und Agilitätsleitern für den täglichen Trainingsbetrieb.' },
      { label: 'Torwartausrüstung', desc: 'Hochwertige Handschuhe, Torwartjerseys und spezialisiertes Trainingsmaterial für unsere Schlussleute.' },
      { label: 'Medizinisches Equipment', desc: 'Erste-Hilfe-Material, Eis- und Bandagenversorgung sowie physiotherapeutisches Zubehör.' },
    ],
  },
  {
    id: 'weitere',
    icon: Star,
    category: 'Weitere Förderprojekte',
    title: 'Weitere Schwerpunkte',
    intro: 'Neben den drei Kernbereichen engagieren wir uns in weiteren Feldern, die die ganzheitliche Entwicklung unserer Nachwuchsspieler fördern — als Fußballer und als Persönlichkeiten.',
    items: [
      { label: 'Schulförderung & duale Karriere', desc: 'Nachhilfeangebote und Kooperationen mit Schulen sichern die schulische Laufbahn neben dem Fußball.' },
      { label: 'Sportpsychologische Betreuung', desc: 'Finanzierung von Mentaltraining und psychologischer Begleitung für Leistungsdruck-Situationen.' },
      { label: 'Elternarbeit & Community-Events', desc: 'Informationsabende, Familienfeste und Begegnungen stärken das Gemeinschaftsgefühl rund ums Leistungszentrum.' },
      { label: 'Digitale Analyse-Tools', desc: 'Videoanalyse-Software und Wearables für ein datengestütztes, modernes Training.' },
    ],
  },
];

function AreaSection({ area, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = area.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id={area.id}
      className={`py-20 md:py-28 ${isEven ? 'bg-pitch-black' : 'bg-[#111111]'} relative overflow-hidden`}
    >
      <div className="absolute inset-0 grain-overlay opacity-20" />
      {/* Red accent stripe */}
      <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-1 h-full bg-victory-red/30`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className={`lg:col-span-2 ${!isEven ? 'lg:order-2' : ''}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-victory-red" />
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-victory-red">{area.category}</span>
            </div>
            <div className="w-12 h-12 bg-victory-red/10 border border-victory-red/30 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-victory-red" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight mb-6">
              {area.title}
            </h2>
            <p className="font-body text-[15px] text-white/50 leading-relaxed">
              {area.intro}
            </p>
          </div>

          {/* Right: Items */}
          <div className={`lg:col-span-3 ${!isEven ? 'lg:order-1' : ''}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {area.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="p-5 border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-victory-red/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-victory-red mt-2 flex-shrink-0" />
                    <h3 className="font-display text-base uppercase tracking-wide text-white group-hover:text-victory-red transition-colors duration-300">
                      {item.label}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-white/50 leading-relaxed pl-4">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Foerderbereiche() {
  return (
    <div className="min-h-screen bg-pitch-black">
      {/* Back nav */}
      <div className="bg-pitch-black border-b border-white/5 px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-victory-red flex items-center justify-center skew-x-[-6deg]">
            <span className="font-display text-white font-bold text-sm skew-x-[6deg]">F95</span>
          </div>
          <span className="font-display text-white/60 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            ← Zurück zur Startseite
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {AREAS.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="font-display text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-victory-red transition-colors"
            >
              {area.category}
            </a>
          ))}
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative py-24 md:py-32 bg-pitch-black overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-victory-red" />
        <div className="absolute -bottom-20 -right-20 pointer-events-none">
          <span className="font-display text-[18rem] leading-none text-white/[0.02] font-bold">F95</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">
              Förderverein Fortuna Düsseldorf Leistungszentrum e.V.
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9] mb-8">
            Unsere<br /><span className="text-victory-red">Förderbereiche</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10">
            Der Förderverein engagiert sich in vier zentralen Bereichen — von sportlicher Förderung 
            über gesellschaftliche Verantwortung bis hin zur optimalen Ausstattung unserer Mannschaften.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap gap-3">
            {AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <a
                  key={area.id}
                  href={`#${area.id}`}
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 hover:border-victory-red hover:text-white font-display text-[10px] tracking-[0.15em] uppercase transition-all duration-300 skew-x-[-4deg]"
                >
                  <span className="skew-x-[4deg] inline-flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5" />
                    {area.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Area sections */}
      {AREAS.map((area, i) => (
        <AreaSection key={area.id} area={area} index={i} />
      ))}

      {/* CTA section */}
      <div className="py-20 bg-victory-red relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-center">
          <Heart className="w-10 h-10 text-white/40 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            Unterstützen Sie unsere Projekte
          </h2>
          <p className="font-body text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Mit Ihrer Mitgliedschaft fließt Ihr Beitrag direkt in diese Förderbereiche und 
            macht einen echten Unterschied für junge Talente in Düsseldorf.
          </p>
          <Link
            to="/#support"
            className="inline-flex items-center gap-3 px-10 py-4 bg-pitch-black text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-black transition-all duration-300"
          >
            <span className="skew-x-[6deg] inline-flex items-center gap-2">
              Jetzt Mitglied werden <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-pitch-black border-t border-white/5 py-6 px-6 md:px-16 text-center">
        <p className="font-body text-xs text-white/30">
          © {new Date().getFullYear()} Förderverein Fortuna Düsseldorf Leistungszentrum e.V.
        </p>
      </div>
    </div>
  );
}