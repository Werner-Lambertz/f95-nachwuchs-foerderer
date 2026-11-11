import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, Flag, Newspaper, Mail, Calendar, BookOpen } from 'lucide-react';

const KAMPAGNEN = [
  {
    icon: Users,
    title: 'Family and Friends',
    text: 'Eltern der Spielerinnen und Spieler werden über die Ziele und Inhalte des Fördervereins informiert. Zugleich wird das persönliche Netzwerk der aktiven Mitglieder einbezogen.',
  },
  {
    icon: Star,
    title: 'Düsseldorfer Gesichter',
    text: 'Bekannte Persönlichkeiten mit Bezug zu Düsseldorf werden für die Arbeit des Fördervereins gewonnen und machen die Anliegen des Leistungszentrums sichtbar.',
  },
  {
    icon: Flag,
    title: 'F95 Fans',
    text: 'Die Zusammenarbeit mit den Fangruppierungen wird über den Supporter Club Düsseldorf gebündelt — von gemeinsamen Aktionen bis zur Verteilung von Mitgliedsanträgen.',
  },
  {
    icon: Newspaper,
    title: 'Medienarbeit',
    text: 'Der Förderverein arbeitet mit den Düsseldorfer Medien zusammen, um über Projekte, Fördermaßnahmen und Entwicklungen im Nachwuchsleistungszentrum zu berichten.',
  },
];

const KANAELE = [
  {
    icon: Newspaper,
    title: 'Neuigkeiten',
    text: 'Alle Meldungen und Berichte des Fördervereins, chronologisch archiviert.',
  },
  {
    icon: Mail,
    title: 'Vereinsnewsletter',
    text: 'Regelmäßige Informationen für Mitglieder und Unterstützer direkt per E-Mail.',
  },
  {
    icon: BookOpen,
    title: 'Mitgliederzeitschrift',
    text: 'Berichte aus der Förderarbeit — auf Wunsch mit namentlicher Nennung von Unterstützern.',
  },
  {
    icon: Calendar,
    title: 'Veranstaltungen',
    text: 'Ob Kurvenfest am Flinger Broich oder Saisoneröffnung — der Förderverein ist vor Ort präsent.',
  },
];

export default function Oeffentlichkeitsarbeit() {
  return (
    <div className="min-h-screen bg-pitch-black">
      {/* Top bar */}
      <div className="bg-pitch-black border-b border-white/5 px-6 md:px-16 py-4 sticky top-0 z-50 backdrop-blur-md">
        <Link to="/neuigkeiten" className="flex items-center gap-3 group w-fit">
          <div className="w-8 h-8 bg-victory-red flex items-center justify-center skew-x-[-6deg]">
            <span className="font-display text-white font-bold text-sm skew-x-[6deg]">F95</span>
          </div>
          <span className="font-display text-white/60 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            ← Zurück zu den Neuigkeiten
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
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Neuigkeiten</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4"
          >
            Öffentlichkeits<span className="text-victory-red">arbeit</span>
          </motion.h1>
          <p className="font-body text-white/50 leading-relaxed max-w-2xl">
            Wie der Förderverein über seine Arbeit informiert, Menschen erreicht und die Anliegen des
            Nachwuchsleistungszentrums in die Stadt trägt.
          </p>
        </div>
      </div>

      {/* Kampagnen */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-white/40">Kampagnen</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {KAMPAGNEN.map((k, i) => {
            const Icon = k.icon;
            return (
              <motion.div
                key={k.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative border border-white/10 bg-white/[0.03] p-7 hover:border-victory-red/40 hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="absolute -top-px left-0 w-0 h-[2px] bg-victory-red group-hover:w-full transition-all duration-500" />
                <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-victory-red to-red-700 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-display text-lg uppercase tracking-wider text-white mb-3 leading-tight">
                  {k.title}
                </h2>
                <p className="font-body text-sm text-white/55 leading-relaxed">{k.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Kanäle */}
      <div className="relative bg-pure-oxygen py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Unsere Kanäle</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-pitch-black mb-10">
            Wo Sie uns <span className="text-victory-red">finden</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {KANAELE.map((k) => {
              const Icon = k.icon;
              return (
                <div key={k.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 border border-pitch-black/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-victory-red" />
                  </div>
                  <div>
                    <p className="font-display text-sm uppercase tracking-wider text-pitch-black mb-1">{k.title}</p>
                    <p className="font-body text-sm text-pitch-black/60 leading-relaxed">{k.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Presse */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 grain-overlay opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
          <div className="border-l-4 border-victory-red bg-white/[0.03] p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-3">
              Presse &amp; <span className="text-victory-red">Medien</span>
            </h2>
            <p className="font-body text-white/50 leading-relaxed max-w-2xl mb-6">
              Sie berichten über den Düsseldorfer Nachwuchs oder planen einen Beitrag über den Förderverein?
              Wir vermitteln Ansprechpartner, Bildmaterial und Hintergründe zu unseren Projekten.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-victory-red text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-colors duration-300"
            >
              <span className="skew-x-[6deg] inline-flex items-center gap-2">
                Presseanfrage stellen <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          <div className="mt-10">
            <Link
              to="/neuigkeiten"
              className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] uppercase text-white/50 hover:text-victory-red transition-colors duration-300"
            >
              Alle Neuigkeiten ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}