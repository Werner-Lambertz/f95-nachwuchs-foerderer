import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

export default function Presseanfrage() {
  return (
    <div className="min-h-screen bg-pitch-black">
      {/* Top bar */}
      <div className="bg-pitch-black border-b border-white/5 px-6 md:px-16 py-4 sticky top-0 z-50 backdrop-blur-md">
        <Link to="/oeffentlichkeitsarbeit" className="flex items-center gap-3 group w-fit">
          <div className="w-8 h-8 bg-victory-red flex items-center justify-center skew-x-[-6deg]">
            <span className="font-display text-white font-bold text-sm skew-x-[6deg]">F95</span>
          </div>
          <span className="font-display text-white/60 text-xs tracking-[0.2em] uppercase group-hover:text-white transition-colors">
            ← Zurück zur Öffentlichkeitsarbeit
          </span>
        </Link>
      </div>

      <ContactSection
        id="presseanfrage"
        eyebrow="Für Redaktionen"
        headingLead="Presse"
        headingAccent="anfrage"
        intro="Sie berichten über den Düsseldorfer Nachwuchs oder planen einen Beitrag über den Förderverein? Wir vermitteln Ansprechpartner, Bildmaterial und Hintergründe zu unseren Projekten."
        subjectPrefix="Presseanfrage"
      />
    </div>
  );
}