import React from 'react';
import { Link } from 'react-router-dom';

export default function Impressum() {
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
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Rechtliches</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Impres<span className="text-victory-red">sum</span>
          </h1>
          <p className="font-body text-white/50 leading-relaxed">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-24 space-y-10">

        <Section title="Verantwortlicher">
          <p>Förderverein Fortuna Düsseldorf Leistungszentrum e.V.</p>
          <p>Flinger Broich 87</p>
          <p>40235 Düsseldorf</p>
        </Section>

        <Section title="Kontakt">
          <p>Telefon: +49 211 2380128</p>
          <p>E-Mail: <a href="mailto:info@fv-f95-nlz.de" className="text-victory-red hover:underline">info@fv-f95-nlz.de</a></p>
        </Section>

        <Section title="Vereinsregister">
          <p>Registergericht: Amtsgericht Düsseldorf</p>
          <p>Registernummer: VR 10317</p>
        </Section>

        <Section title="Vertretungsberechtigte Vorstandsmitglieder">
          <p>Jeweils zwei Vorstandsmitglieder im Sinne des § 26 BGB vertreten den Verein gerichtlich und außergerichtlich.</p>
          <p className="mt-2">
            Weitere Informationen finden Sie auf der{' '}
            <Link to="/vorstand" className="text-victory-red hover:underline">Vorstandsseite</Link>.
          </p>
        </Section>

        <Section title="Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV">
          <p>Förderverein Fortuna Düsseldorf Leistungszentrum e.V.</p>
          <p>Flinger Broich 87</p>
          <p>40235 Düsseldorf</p>
        </Section>

        <Section title="Haftungsausschluss">
          <p className="mb-3">
            <strong className="text-white/80">Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <p>
            <strong className="text-white/80">Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="py-8 border-b border-white/10 first:border-t first:border-white/10">
      <h2 className="font-display text-xl uppercase tracking-wider text-white mb-4">{title}</h2>
      <div className="font-body text-sm text-white/60 leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
}