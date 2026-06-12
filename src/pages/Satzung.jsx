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
      'Ummeldungen in der Mitgliedschaft (von aktiver Mitgliedschaft auf Fördermitgliedschaft) müssen mit einer Frist von einem Monat zum Monatsende dem Vorstand schriftlich mitgeteilt werden, ohne dass dies die Beitragspflicht für das laufende Vereinsjahr berührt.',
      'Die Mitgliedschaft endet durch freiwilligen Austritt, Ausschluss, Tod des Mitglieds oder Verlust der Rechtsfähigkeit bei juristischen Personen.',
      'Die freiwillige Beendigung der Mitgliedschaft muss durch schriftliche Kündigung gegenüber dem Vorstand erklärt werden, dies ein Monat zum Monatsende.',
      'Der Ausschluss eines Mitglieds kann mit sofortiger Wirkung und aus wichtigem Grund dann ausgesprochen werden, wenn das Mitglied in grober Weise gegen die Satzung, Ordnungen, den Satzungszweck, die Vereinsinteressen oder die Philosophie des Fördervereins verstößt. Über den Ausschluss eines Mitglieds entscheidet der Vorstand mit einfacher Stimmenmehrheit.',
      'Auch ein Vorstandsmitglied kann mit sofortiger Wirkung und aus wichtigem Grund ausgeschlossen werden. Das Vorstandsmitglied nimmt in diesem Fall an der Abstimmung teil.',
      'Dem auszuschließenden Mitglied ist unter Fristsetzung von zwei Wochen Gelegenheit zu geben, sich vor dem Vereinsausschuss zu den erhobenen Vorwürfen zu äußern.',
      'Bei Beendigung der Mitgliedschaft, gleich aus welchem Grund, erlöschen alle Ansprüche aus dem Mitgliedsverhältnis. Eine Rückgewähr von Beiträgen, Spenden oder sonstigen Unterstützungsleistungen ist grundsätzlich ausgeschlossen. Der Anspruch des Vereins auf rückständige Beitragsforderungen bleibt hiervon unberührt.',
    ],
  },
  {
    nr: '§ 6',
    titel: 'Mitgliedsbeiträge',
    inhalt: [
      'Für die Höhe der jährlichen Mitgliedsbeiträge, Förderbeiträge, Aufnahmegebühren und Umlagen ist die jeweils gültige Beitragsordnung maßgeblich, die von der Mitgliederversammlung beschlossen wird.',
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
      {
        text: 'Oberstes Organ des Vereins ist die Mitgliederversammlung, sie hat insbesondere folgende Aufgaben:',
        bullets: [
          'die Jahresberichte entgegenzunehmen,',
          'den Vorstand zu entlasten,',
          'im Wahljahr den Vorstand zu wählen,',
          'über die Satzung, Änderungen der Satzung sowie die Auflösung des Vereins zu bestimmen,',
          'die Kassenprüfer zu wählen, die weder dem Vorstand noch einem von dem Vorstand berufenen Gremium angehören und nicht Angestellte des Vereins sein dürfen.',
        ],
      },
      { text: 'Eine ordentliche Mitgliederversammlung wird vom Vorstand des Vereins nach Bedarf, mindestens aber einmal im Geschäftsjahr, nach Möglichkeit im ersten Halbjahr des Geschäftsjahres, einberufen. Die Einladung erfolgt einen Monat vorher schriftlich durch den Vorstand mit Bekanntgabe der vorläufig festgesetzten Tagesordnung an die dem Verein zuletzt bekannte Mitgliedsadresse.' },
      {
        text: 'Die Tagesordnung der ordentlichen Mitgliederversammlung hat insbesondere folgende Punkte zu umfassen:',
        bullets: [
          'Bericht des Vorstands',
          'Bericht des Schatzmeisters',
          'Entlastung des Vorstands',
          'Wahl von zwei Kassenprüfern',
          'Genehmigung des vom Vorstand vorzulegenden Haushaltsvorschlages für das laufende Geschäftsjahr',
          'Festsetzung der Beiträge/Umlagen für das laufende Geschäftsjahr bzw. zur Verabschiedung von Beitragsordnungen',
          'Beschlussfassung über vorliegende Anträge.',
        ],
      },
      { text: 'Anträge der Mitglieder zur Tagesordnung sind spätestens zwei Wochen vor der Mitgliederversammlung beim Vereinsvorstand schriftlich einzureichen. Nachträglich eingereichte Tagesordnungspunkte müssen den Mitgliedern rechtzeitig vor Beginn der Mitgliederversammlung mitgeteilt werden.' },
      { text: 'Spätere Anträge – auch während der Mitgliederversammlung eingereichte Anträge – müssen auf die Tagesordnung gesetzt werden, wenn in der Mitgliederversammlung die Mehrheit der erschienenen stimmberechtigten Mitglieder der Behandlung der Anträge aufgrund von Dringlichkeit zustimmt (Dringlichkeitsanträge).' },
      { text: 'Der Vorstand hat eine außerordentliche Mitgliederversammlung unverzüglich einzuberufen, wenn es das Interesse des Vereins erfordert oder wenn die Einberufung von mindestens einem Drittel der erschienenen stimmberechtigten Vereinsmitglieder, dies schriftlich unter Angabe des Zwecks und der Gründe, vom Vorstand verlangt wird.' },
      { text: 'Der Vorsitzende oder sein Stellvertreter leitet die Mitgliederversammlung. Auf Vorschlag des Vorsitzenden kann die Mitgliederversammlung einen besonderen Versammlungsleiter bestimmen.' },
      { text: 'Beschlüsse der Mitgliederversammlung werden in einem Protokoll innerhalb von zwei Monaten nach der Mitgliederversammlung niedergelegt und von einem vertretungsberechtigten Vorstandsmitglied sowie dem Protokollführer unterzeichnet. Das Protokoll kann von jedem Mitglied auf der Geschäftsstelle eingesehen werden.' },
    ],
  },
  {
    nr: '§ 9',
    titel: 'Stimmrecht/Beschlussfähigkeit',
    inhalt: [
      'Stimmberechtigt sind ordentliche Mitglieder, also aktive Mitglieder und Fördermitglieder sowie Ehrenmitglieder. Jedes Mitglied hat mit Vollendung des 16. Lebensjahres eine Stimme, die nur persönlich ausgeübt werden darf. Eine Stimmrechtsübertragung ist ausgeschlossen.',
      'Die Mitgliederversammlung ist ohne Rücksicht auf die Anzahl der erschienenen Mitglieder beschlussfähig.',
      'Die Mitgliederversammlung fasst ihre Beschlüsse mit einfacher Mehrheit. Stimmenthaltungen und ungültige Stimmen bleiben außer Betracht. Bei Stimmengleichheit gilt der gestellte Antrag als abgelehnt.',
      'Abstimmungen in der Mitgliederversammlung sind nur dann schriftlich und geheim durchzuführen, wenn dies auf Verlangen der einfachen Mehrheit der an der Beschlussfassung teilnehmenden Mitglieder ausdrücklich verlangt wird.',
      'Für Satzungsänderungen und Beschlüsse zur Auflösung des Vereins ist eine Dreiviertel-Mehrheit der erschienenen Stimmberechtigten erforderlich, bei Zweckänderungen des Vereins ist die Zustimmung aller Mitglieder erforderlich. Die Zustimmung nicht erschienener Mitglieder ist schriftlich einzuholen.',
      'Satzungsänderungen werden allen Vereinsmitgliedern schriftlich mitgeteilt.',
    ],
  },
  {
    nr: '§ 10',
    titel: 'Der Vorstand',
    inhalt: [
      'Vorstand im Sinne des § 26 BGB sind der Vorstandssprecher, der Schatzmeister und der Protokollführer. Diese werden ins Vereinsregister eingetragen.',
      'Zusätzliche Mitglieder des Vorstands als geborene Mitglieder des Vorstands sind der aktuelle Leiter des Leistungszentrums und ein aus dem Vorstand des Vereins Fortuna Düsseldorf 1895 e.V. berufenes Vorstandsmitglied.',
      'Nicht geborene Mitglieder des Vorstands werden von der Mitgliederversammlung für die Dauer von zwei Jahren gewählt. Die unbegrenzte Wiederwahl von Vorstandsmitgliedern ist zulässig. Nach Fristablauf bleiben die Vorstandsmitglieder bis zum Amtsantritt ihrer Nachfolger im Amt.',
      'Der Vorstand leitet verantwortlich die Vereinsarbeit. Er kann sich eine Geschäftsordnung geben, kann Mitglieder dazu bitten, besondere Aufgaben zu übernehmen oder kann Ausschüsse für deren Bearbeitung einsetzen.',
      'Jeweils zwei Vorstandsmitglieder im Sinne des § 26 BGB vertreten den Verein gerichtlich und außergerichtlich.',
      'Die Vorstandschaft beschließt mit einfacher Stimmenmehrheit. Der Vorstand ist beschlussfähig, wenn mindestens zwei Mitglieder anwesend sind oder einer Beschlussfassung im schriftlichen Umlaufverfahren zustimmen. Bei Stimmengleichheit gilt der Antrag als abgelehnt.',
      'Beschlüsse des Vorstands werden in einem Sitzungsprotokoll niedergelegt und von mindestens zwei vertretungsberechtigten Vorstandsmitgliedern unterzeichnet.',
      'Scheidet ein Vorstandsmitglied vor Ablauf seiner Wahlzeit aus, ist der Vorstand berechtigt, ein kommissarisches Vorstandsmitglied zu berufen. Auf diese Weise bestimmte Vorstandsmitglieder bleiben bis zur nächsten Mitgliederversammlung im Amt.',
    ],
  },
  {
    nr: '§ 11',
    titel: 'Kassenprüfer',
    inhalt: [
      'Über die Jahresmitgliederversammlung sind zwei Kassenprüfer für die Dauer von zwei Jahren zu wählen.',
      'Die Kassenprüfung des Vereins ist jährlich durch zwei Kassenprüfer durchzuführen.',
      'Die Kassenprüfer haben die Aufgabe, Rechnungsbelege sowie deren ordnungsgemäße Verbuchung und die Mittelverwendung zu überprüfen sowie mindestens einmal jährlich den Kassenbestand des abgelaufenen Kalenderjahres festzustellen.',
      'Die Prüfung erstreckt sich nicht auf die Zweckmäßigkeit der vom Vorstand getätigten Ausgaben. Das Ergebnis der Prüfung ist schriftlich niederzulegen und zu unterzeichnen.',
      'Die Kassenprüfer haben die Mitgliederversammlung über das Ergebnis der Kassenprüfung zu unterrichten.',
      'Die Kassenprüfer dürfen nicht dem Vorstand angehören.',
      'Über das Ergebnis wird in der Mitgliederversammlung Bericht erstattet. Diese bestätigt den Bericht.',
    ],
  },
  {
    nr: '§ 12',
    titel: 'Auflösung des Vereins',
    inhalt: [
      'Bei Auflösung oder Aufhebung der Körperschaft oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen der Körperschaft an den Düsseldorfer Turn- und Sportverein Fortuna 1895 e.V., der es unmittelbar und ausschließlich für gemeinnützige Zwecke zu verwenden hat.',
    ],
  },
  {
    nr: '§ 13',
    titel: 'Liquidatoren',
    inhalt: [
      'Als Liquidatoren werden die im Amt befindlichen vertretungsberechtigten Vorstandsmitglieder bestimmt, soweit die Mitgliederversammlung nichts anderes abweichend beschließt.',
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
    <div className="min-h-screen bg-pitch-black select-none" onCopy={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()}>
      {/* Top bar */}
      <div className="bg-pitch-black border-b border-black/10 px-6 md:px-16 py-4 sticky top-0 z-50 backdrop-blur-md">
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
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-12 bg-white">
        <div className="border border-victory-red/30 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-victory-red" />
            <h2 className="font-display text-xl uppercase tracking-wider text-victory-red">Präambel</h2>
          </div>
          <div className="space-y-4">
            {PRAAMBEL.map((abs, i) => (
              <p key={i} className="font-body text-sm text-pitch-black/80 leading-relaxed">{abs}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Paragraphen */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 pb-24 space-y-0 bg-white">
        {PARAGRAPHEN.map((para, i) => (
          <div key={para.nr} className={`py-10 border-b border-black/10 ${i === 0 ? 'border-t border-black/10' : ''}`}>
            <div className="flex items-start gap-6">
              <span className="font-display text-victory-red text-2xl font-bold flex-shrink-0 w-12 pt-0.5">{para.nr}</span>
              <div className="flex-1">
                <h2 className="font-display text-xl uppercase tracking-wider text-pitch-black mb-5">{para.titel}</h2>
                <ol className="space-y-3">
                  {para.inhalt.map((abs, j) => {
                    const item = typeof abs === 'string' ? { text: abs } : abs;
                    return (
                      <li key={j} className="flex gap-3">
                        <span className="font-display text-victory-red/60 text-xs mt-1.5 flex-shrink-0">({j + 1})</span>
                        <div className="flex-1">
                          <p className="font-body text-sm text-pitch-black/80 leading-relaxed">{item.text}</p>
                          {item.bullets && (
                            <ul className="mt-2 space-y-1 pl-2">
                              {item.bullets.map((b, k) => (
                                <li key={k} className="flex gap-2">
                                  <span className="text-victory-red/50 text-xs mt-1.5 flex-shrink-0">•</span>
                                  <p className="font-body text-sm text-pitch-black/70 leading-relaxed">{b}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        ))}

        {/* Stand */}
        <p className="pt-8 font-body text-xs text-pitch-black/40 tracking-wider uppercase">
          Stand der Satzung: Düsseldorf, 2024
        </p>
      </div>
    </div>
  );
}