import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    titel: '1. Verantwortlicher',
    inhalt: [
      'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
      'Förderverein Fortuna Düsseldorf Leistungszentrum e.V.\nVertreten durch den Vorstandssprecher: Werner Lambertz\nDüsseldorf\nE-Mail: info@foerderverein-fortuna.de',
    ],
  },
  {
    titel: '2. Erhebung und Speicherung personenbezogener Daten',
    inhalt: [
      'Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Erfüllung unserer satzungsgemäßen Zwecke erforderlich ist oder Sie uns Ihre Einwilligung erteilt haben.',
      'Beim Besuch unserer Website werden durch den Hosting-Anbieter automatisch technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite) protokolliert. Diese Daten dienen ausschließlich der technischen Sicherheit und werden nicht zur Identifizierung einzelner Personen genutzt.',
    ],
  },
  {
    titel: '3. Mitgliedsanträge',
    inhalt: [
      'Wenn Sie über unsere Website einen Mitgliedsantrag stellen, erheben wir die dafür erforderlichen Angaben (Name, Anschrift, E-Mail-Adresse, Geburtsdatum, Bankverbindung). Diese Daten werden ausschließlich zur Bearbeitung Ihres Antrags, zur Verwaltung der Mitgliedschaft sowie zur Beitragseinziehung verwendet.',
      'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie § 26 BDSG.',
    ],
  },
  {
    titel: '4. Kontaktformular',
    inhalt: [
      'Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Eine Weitergabe dieser Daten an Dritte erfolgt nicht.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).',
    ],
  },
  {
    titel: '5. Weitergabe von Daten',
    inhalt: [
      'Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn Sie Ihre ausdrückliche Einwilligung dazu erteilt haben, die Weitergabe gesetzlich zulässig und für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist oder wir gesetzlich hierzu verpflichtet sind.',
    ],
  },
  {
    titel: '6. Cookies',
    inhalt: [
      'Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Eine Einwilligung ist für diese Cookies nicht erforderlich.',
    ],
  },
  {
    titel: '7. Ihre Rechte',
    inhalt: [
      'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:',
      '• Recht auf Auskunft (Art. 15 DSGVO)\n• Recht auf Berichtigung (Art. 16 DSGVO)\n• Recht auf Löschung (Art. 17 DSGVO)\n• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)\n• Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
      'Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte Kontaktadresse.',
    ],
  },
  {
    titel: '8. Beschwerderecht',
    inhalt: [
      'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist der Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf.',
    ],
  },
  {
    titel: '9. Datensicherheit',
    inhalt: [
      'Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten gegen Verlust, Zerstörung, Manipulation und unberechtigten Zugriff zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.',
    ],
  },
  {
    titel: '10. Aktualität und Änderungen',
    inhalt: [
      'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2024. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.',
    ],
  },
];

export default function Datenschutz() {
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
      <div className="relative py-16 md:py-24 overflow-hidden bg-pitch-black">
        <div className="absolute top-0 left-0 w-full h-1 bg-victory-red" />
        <div className="absolute inset-0 grain-overlay opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Rechtliches</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Daten<span className="text-victory-red">schutz</span>
          </h1>
          <p className="font-body text-white/50 leading-relaxed">
            Datenschutzerklärung des Fördervereins Fortuna Düsseldorf Leistungszentrum e.V. gemäß DSGVO.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-24 bg-white">
        {SECTIONS.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`py-8 border-b border-black/10 ${i === 0 ? 'border-t border-black/10' : ''}`}
          >
            <h2 className="font-display text-lg uppercase tracking-wider text-pitch-black mb-4">{section.titel}</h2>
            <div className="space-y-3">
              {section.inhalt.map((abs, j) => (
                <p key={j} className="font-body text-sm text-pitch-black/80 leading-relaxed whitespace-pre-line">{abs}</p>
              ))}
            </div>
          </motion.div>
        ))}

        <p className="pt-8 font-body text-xs text-pitch-black/40 tracking-wider uppercase">
          Stand: Juni 2024
        </p>
      </div>
    </div>
  );
}