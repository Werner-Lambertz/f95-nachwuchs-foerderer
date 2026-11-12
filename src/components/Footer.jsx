import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGO_URL = 'https://base44.app/api/apps/6a21b8605426a2a9bf55a069/files/mp/public/6a21b8605426a2a9bf55a069/09e003b7e_foerderverein-nlz-f95-logo.png';

export default function Footer() {
  return (
    <footer className="bg-pitch-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="-mt-6 md:-mt-10">
            <Link to="/" className="inline-flex h-24 md:h-28 items-center mb-4">
              <img
                src={LOGO_URL}
                alt="Förderverein Fortuna Düsseldorf NLZ Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
            <p className="font-display text-[10px] tracking-[0.2em] uppercase text-white/40 mb-3">
              Förderverein Fortuna Düsseldorf Nachwuchsleistungszentrum e.V.
            </p>
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
              <Link to="/impressum" className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300">
                Datenschutz
              </Link>
              <Link to="/satzung" className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300">
                Satzung
              </Link>
              <Link to="/vorstand" className="block font-body text-sm text-white/40 hover:text-victory-red transition-colors duration-300">
                Vorstand
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-4 mt-2 -translate-y-[30px] flex flex-col sm:flex-row justify-between items-center gap-4">
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