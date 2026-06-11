import React from 'react';
import { Link } from 'react-router-dom';

const PARAGRAPHEN = [
  {
    nr: '§ 1',
    titel: 'Name, Sitz und Geschäftsjahr',
    inhalt: [
      'Der Verein führt den Namen „Förderverein Fortuna Düsseldorf Leistungszentrum e.V."',
      'Der Verein hat seinen Sitz in Düsseldorf und ist im Vereinsregister beim Amtsgericht Düsseldorf eingetragen.',
      'Das Geschäftsjahr ist das Kalenderjahr.',
    ],
  },
  {
    nr: '§ 2',
    titel: 'Zweckbestimmung',
    inhalt: [
      'Zweck des Vereins ist die Beschaffung von Mitteln zur Förderung des Sports und der Jugendhilfe. Es soll das Leistungszentrum von Fortuna Düsseldorf in ideeller, organisatorischer und finanzieller Weise unterstützt werden. Dabei gilt das Förderziel allen Jugendmannschaften.',
      'Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.',
      'Für die Erfüllung dieser satzungsgemäßen Zwecke sollen geeignete Mittel durch Mitgliedsbeiträge, Veranstaltungen, Spenden, Zuschüsse, Sponsoring und sonstige Zuwendungen eingesetzt werden.',
      'Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinn des Abschnitts „Steuerbegünstigte Zwecke" der Abgabenordnung in der jeweiligen gültigen Fassung. Er wird als Förderverein nach § 58 Nr. 1 AO tätig.',
      'Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.',
      'Mittel des Vereins dürfen nur für satzungsgemäße Zwecke verwendet werden. Die Mitglieder des Vereins erhalten in ihrer Eigenschaft als Mitglieder keine Zuwendungen aus Mitteln des Vereins.',
      'Der Verein ist politisch und konfessionell neutral.',
      'Die Ausübung von Ehrenämtern nach den Satzungsvorgaben erfolgt ehrenamtlich.',
    ],
  },
  {
    nr: '§ 3',
    titel: 'Mitgliedschaft',
    inhalt: [
      'Mitglied kann jede natürliche oder juristische Person, Personvereinigung werden, die bereit ist, Ziele und Satzungszwecke des Vereins nachhaltig zu fördern.',
      'Neben den aktiven Mitgliedern gibt es passive Mitglieder, die sich zwar nicht aktiv innerhalb des Vereins betätigen, jedoch die Ziele und auch den Zweck des Vereins in geeigneter Weise fördern und unterstützen.',
      'Zum Ehrenmitglied werden Mitglieder ernannt, die sich in besonderer Weise um den Verein verdient gemacht haben. Hierfür ist ein Beschluss der Mitgliederversammlung erforderlich.',
      'Ehrenmitglieder sind von der Beitragszahlung befreit, sie haben jedoch die gleichen Rechte und Pflichten wie ordentliche Mitglieder und können insbesondere an sämtlichen Veranstaltungen und Sitzungen teilnehmen.',
    ],
  },
  {
    nr: '§ 4',
    titel: 'Rechte und Pflichten der Mitglieder',
    inhalt: [
      'Die Mitglieder sind berechtigt, an allen angebotenen Veranstaltungen des Vereins teilzunehmen. Sie haben darüber hinaus das Recht, gegenüber dem Vorstand und der Mitgliederversammlung Anträge zu stellen. In der Mitgliederversammlung kann das Stimmrecht nur persönlich ausgeübt werden.',
      'Die Mitglieder sind verpflichtet, den Verein und den Vereinszweck – auch in der Öffentlichkeit – in ordnungsgemäßer Weise zu unterstützen und zu schützen.',
    ],
  },
  {
    nr: '§ 5',
    titel: 'Beginn und Ende der Mitgliedschaft',
    inhalt: [
      'Die Mitgliedschaft muss gegenüber dem Vorstand schriftlich beantragt werden. Über den schriftlichen Aufnahmeantrag entscheidet der Vorstand mit einfacher Stimmenmehrheit abschließend. Der Vorstand ist nicht verpflichtet, Ablehnungsgründe dem Antragsteller mitzuteilen, ein Aufnahmeanspruch ist ausgeschlossen.',
    ],
  },
  {
    nr: '§ 6',
    titel: 'Mitgliedsbeiträge',
    inhalt: [
      'Von den Mitgliedern werden Beiträge erhoben. Die Höhe und Fälligkeit der Beiträge werden durch die Mitgliederversammlung festgesetzt.',
      'Ehrenmitglieder sind von der Beitragspflicht befreit.',
      'Der Vorstand kann in begründeten Einzelfällen Beitragsstundungen oder -befreiungen gewähren.',
    ],
  },
  {
    nr: '§ 7',
    titel: 'Organe des Vereins',
    inhalt: [
      'Organe des Vereins sind die Mitgliederversammlung und der Vorstand.',
    ],
  },
  {
    nr: '§ 8',
    titel: 'Mitgliederversammlung',
    inhalt: [
      'Die ordentliche Mitgliederversammlung findet einmal jährlich statt. Sie wird vom Vorstand unter Bekanntgabe der Tagesordnung mit einer Frist von mindestens zwei Wochen schriftlich oder per E-Mail einberufen.',
      'Eine außerordentliche Mitgliederversammlung ist einzuberufen, wenn es das Interesse des Vereins erfordert oder wenn mindestens ein Drittel der Mitglieder dies schriftlich unter Angabe des Grundes verlangt.',
      'Die Mitgliederversammlung ist ohne Rücksicht auf die Anzahl der erschienenen Mitglieder beschlussfähig.',
      'Die Mitgliederversammlung beschließt mit einfacher Mehrheit der abgegebenen gültigen Stimmen. Stimmenthaltungen bleiben außer Betracht. Bei Stimmengleichheit gilt ein Antrag als abgelehnt.',
      'Zu den Aufgaben der Mitgliederversammlung gehören insbesondere: Wahl und Abberufung des Vorstands, Entgegennahme des Jahresberichts und der Jahresabrechnung, Entlastung des Vorstands, Festsetzung der Mitgliedsbeiträge sowie Satzungsänderungen und Auflösung des Vereins.',
    ],
  },
  {
    nr: '§ 9',
    titel: 'Vorstand',
    inhalt: [
      'Der Vorstand besteht aus dem 1. Vorsitzenden, dem 2. Vorsitzenden und dem Schatzmeister.',
      'Der Verein wird gerichtlich und außergerichtlich durch zwei Mitglieder des Vorstands gemeinsam vertreten.',
      'Der Vorstand wird von der Mitgliederversammlung auf die Dauer von zwei Jahren gewählt. Er bleibt bis zur Neuwahl im Amt.',
      'Scheidet ein Vorstandsmitglied vor Ablauf seiner Amtszeit aus, kann der verbleibende Vorstand für die restliche Amtszeit ein Ersatzmitglied bestellen.',
    ],
  },
  {
    nr: '§ 10',
    titel: 'Satzungsänderungen',
    inhalt: [
      'Satzungsänderungen bedürfen einer Mehrheit von drei Vierteln der in der Mitgliederversammlung abgegebenen gültigen Stimmen.',
      'Änderungen oder Ergänzungen der Satzung, die von der Registerbehörde oder dem Finanzamt vorgeschrieben werden, kann der Vorstand von sich aus vornehmen.',
    ],
  },
  {
    nr: '§ 11',
    titel: 'Auflösung des Vereins',
    inhalt: [
      'Die Auflösung des Vereins kann nur von einer zu diesem Zweck einberufenen außerordentlichen Mitgliederversammlung mit einer Mehrheit von drei Vierteln der abgegebenen gültigen Stimmen beschlossen werden.',
      'Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vereinsvermögen an den Fortuna Düsseldorf 1895 e.V., der es unmittelbar und ausschließlich für die Förderung des Jugendfußballs zu verwenden hat.',
    ],
  },
  {
    nr: '§ 12',
    titel: 'Protokoll',
    inhalt: [
      'Über die Beschlüsse der Mitgliederversammlung und des Vorstands ist ein Protokoll aufzunehmen, das vom Versammlungsleiter und dem Protokollführer zu unterzeichnen ist.',
    ],
  },
];

const PRAAMBEL = [
  'Der „Förderverein Fortuna Düsseldorf Leistungszentrum e.V." hat sich zum Ziel gesetzt, das Leistungszentrum der Fortuna Düsseldorf 1895 e.V. zu unterstützen. Nutznießer der Förderung sind alle Jugendmannschaften der Fortuna, derzeit beginnend bei der U9 bis einschließlich zur U23.',
  'Der Förderverein lässt sich in seinen Aktivitäten von Werten leiten, die im Konzept der Jugendabteilung formuliert sind: „In unserer Jugendarbeit steht der Mensch an erster Stelle. Als Sportler kann man gewinnen oder verlieren, aber wir sehen unsere wichtigste Aufgabe darin, jenseits von Gewinnen und Verlieren für eine positive menschliche Entwicklung unserer Kinder und Jugendlichen zu sorgen."',
  'Ziel der Förderung ist es, das Leistungszentrum darin zu unterstützen, auf exzellente Weise individuell und gleichzeitig teamorientiert fußballerisch auszubilden. Aber das ist nicht alles. Im Leistungszentrum gerät auch die ganzheitliche Entwicklung und Bildung des jungen Menschen in den Blickpunkt des Interesses. So soll auf der Basis eines positiven Menschen- und Weltbildes der geistige und kulturelle Horizont eines jeden jungen Spielers erweitert werden.',
  'Ziel des Fördervereins ist es also auch, für ein Grundklima im Leistungszentrum zu sorgen, in dem ein gleichberechtigter interkultureller Dialog stattfinden, zwischenmenschliche Toleranz geübt und multikulturelles Verständnis gelebt werden kann.',
  'Damit interessiert sich der Förderverein auch für die Auswahl und die Weiterbildung der Trainer: Denn dem einzelnen Trainer obliegt es, in den ihm anvertrauten Kindern und Jugendlichen Potentiale zu entdecken und individuell zu stützen, die Teamentwicklung in dem in dieser Präambel formulierten Verständnis zu fördern, und die einzelnen Jugendteams zu herausragenden Spitzenleistungen anzutreiben (siehe Anhang der Satzung: Aus dem Konzept der Jugendabteilung, S. 12-13).',
  'Daraus ergibt sich auch als ein weiteres Ziel des Leistungszentrums, die pädagogische Kompetenz der Trainer ständig zu kontrollieren und zu verbessern, die psychologische Kompetenz der Trainer zu erweitern und die Führungskompetenz der Trainer auf eine werteorientierte Basis zu stellen.',
];

export default function Satzung() {
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
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Über uns</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Sat<span className="text-victory-red">zung</span>
          </h1>
          <p className="font-body text-white/50 leading-relaxed">
            Satzung des Fördervereins Fortuna Düsseldorf Leistungszentrum e.V. — eingetragen im Vereinsregister des Amtsgerichts Düsseldorf, VR 10317.
          </p>
        </div>
      </div>

      {/* Präambel */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-12">
        <div className="border border-victory-red/20 bg-victory-red/5 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-victory-red" />
            <h2 className="font-display text-xl uppercase tracking-wider text-victory-red">Präambel</h2>
          </div>
          <div className="space-y-4">
            {PRAAMBEL.map((abs, i) => (
              <p key={i} className="font-body text-sm text-white/70 leading-relaxed">{abs}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Paragraphen */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-24 space-y-0">
        {PARAGRAPHEN.map((para, i) => (
          <div key={para.nr} className={`py-10 border-b border-white/10 ${i === 0 ? 'border-t border-white/10' : ''}`}>
            <div className="flex items-start gap-6">
              <span className="font-display text-victory-red text-2xl font-bold flex-shrink-0 w-12 pt-0.5">{para.nr}</span>
              <div className="flex-1">
                <h2 className="font-display text-xl uppercase tracking-wider text-white mb-5">{para.titel}</h2>
                <ol className="space-y-3">
                  {para.inhalt.map((abs, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="font-display text-victory-red/60 text-xs mt-1.5 flex-shrink-0">({j + 1})</span>
                      <p className="font-body text-sm text-white/60 leading-relaxed">{abs}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}

        {/* Stand */}
        <p className="pt-8 font-body text-xs text-white/30 tracking-wider uppercase">
          Stand der Satzung: Düsseldorf, 2024
        </p>
      </div>
    </div>
  );
}