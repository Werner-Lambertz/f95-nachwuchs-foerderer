import React from 'react';
import { Calendar, FileText, ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    date: '2026-10-24',
    dateLabel: '24.10.2026',
    source: 'NRZ Düsseldorf',
    title: 'Fortunas Talente brauchen mehr Unterstützung',
    excerpt: 'Der Förderverein für das Nachwuchsleistungszentrum muss sich neu aufstellen. Was die Verantwortlichen zur Situation bei den Rot-Weißen sagen.',
    url: 'https://base44.app/api/apps/6a21b8605426a2a9bf55a069/files/mp/public/6a21b8605426a2a9bf55a069/3a2296ca3_NRZ_DUS_Fortuna_Forderverein.pdf',
  },
];

const SORTED = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Schlagzeilen() {
  return (
    <div className="mt-16">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-[2px] bg-victory-red" />
        <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">In der Presse</span>
      </div>
      <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-8">
        Schlag<span className="text-victory-red">zeilen</span>
      </h2>
      <div className="space-y-0">
        {SORTED.map((a) => (
          <article key={a.title} className="py-6 border-t border-b border-white/10 -mt-px group">
            <div className="flex items-center gap-3 text-white/40 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-body text-xs tracking-wider">{a.dateLabel}</span>
              <span className="text-white/20">•</span>
              <span className="font-body text-xs tracking-wider">{a.source}</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-victory-red transition-colors duration-300 leading-tight">
              {a.title}
            </h3>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-3 max-w-2xl">{a.excerpt}</p>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.2em] uppercase text-victory-red hover:gap-3 transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5" /> Artikel lesen (PDF) <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}