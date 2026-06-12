import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-pitch-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-victory-red flex items-center justify-center skew-x-[-6deg]">
                <span className="font-display text-white font-bold text-lg skew-x-[6deg]">F95</span>
              </div>
              <div>
                <p className="font-display text-white text-sm tracking-[0.15em] uppercase">Förderverein Fortuna Düsseldorf</p>
                <p className="font-body text-white/40 text-[10px] tracking-[0.1em] uppercase">Leistungszentrum e.V.</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed">
              Gemeinsam für die Zukunft des Düsseldorfer Nachwuchsfußballs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-victory-red mb-4">Navigation</p>
            <div className="space-y-2">
              {['Startseite', 'Neuigkeiten', 'Unterstützung', 'Über uns', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item === 'Startseite' ? 'hero' : item === 'Neuigkeiten' ? 'news' : item === 'Unterstützung' ? '/mitgliedsantrag' : item === 'Über uns' ? 'about' : 'contact'}`}
                  className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-victory-red mb-4">Rechtliches</p>
            <div className="space-y-2">
              {['Impressum', 'Datenschutz'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <Link to="/satzung" className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300">
                Satzung
              </Link>
              <Link to="/vorstand" className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300">
                Vorstand
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30">
            © {new Date().getFullYear()} Förderverein Fortuna Düsseldorf Leistungszentrum e.V.
          </p>
          <p className="font-body text-xs text-white/30 flex items-center gap-1">
            Mit <Heart className="w-3 h-3 text-victory-red" /> für den Nachwuchs
          </p>
        </div>
      </div>
    </footer>
  );
}