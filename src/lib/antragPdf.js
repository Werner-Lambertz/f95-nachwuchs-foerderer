import { jsPDF } from 'jspdf';

export function generateAntragPdf({ isSponsor, tier, form }) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentW = pageW - margin * 2;
  let y = 20;

  const title = isSponsor ? 'Spender-Antrag' : 'Mitgliedsantrag';
  const price = isSponsor
    ? (form.zahlungsrhythmus === 'Monatlich' ? `${tier.priceMonthly} EUR / Monat` : `${tier.priceYearly} EUR / Jahr`)
    : (form.zahlungsrhythmus === 'Monatlich' ? '5 EUR / Monat' : '60 EUR / Jahr');
  const today = new Date().toLocaleDateString('de-DE');
  const RED = [214, 0, 28];

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...RED);
  doc.text(title, margin, y);
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('Förderverein Fortuna Düsseldorf Leistungszentrum e.V.', margin, y);
  y += 6;
  doc.text(`Erstellt am: ${today}`, margin, y);
  y += 10;

  const sectionTitle = (label) => {
    if (y > 260) { doc.addPage(); y = 20; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...RED);
    doc.text(label, margin, y);
    y += 5;
    doc.setDrawColor(...RED);
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + contentW, y);
    y += 5;
  };
  const row = (label, value) => {
    if (y > 280) { doc.addPage(); y = 20; }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    doc.text(label, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text(String(value || '—'), margin + 55, y);
    y += 6;
  };

  sectionTitle('Unterstützungsart');
  row('Art:', isSponsor ? 'Spender' : 'Mitglied');
  if (isSponsor) row('Spendenstufe:', tier.name);
  row('Beitrag:', price);
  row('Zahlungsrhythmus:', form.zahlungsrhythmus);
  if (isSponsor) row('Wirkung:', tier.impact);
  y += 4;

  sectionTitle('Persönliche Daten');
  row('Anrede:', form.anrede);
  row('Vorname:', form.vorname);
  row('Nachname:', form.nachname);
  row('Geburtsdatum:', form.geburtsdatum);
  y += 4;

  sectionTitle('Adresse');
  row('Straße & Hausnummer:', form.strasse);
  row('PLZ:', form.plz);
  row('Ort:', form.ort);
  y += 4;

  sectionTitle('Kontaktdaten');
  row('E-Mail-Adresse:', form.email);
  row('Telefon:', form.telefon);
  y += 4;

  sectionTitle('Bankverbindung & SEPA-Lastschrift');
  row('Kontoinhaber:', form.kontoinhaber);
  row('IBAN:', form.iban);
  y += 4;

  sectionTitle('Zustimmungen');
  row('SEPA-Lastschriftmandat:', form.sepa ? 'Ja' : 'Nein');
  row('Vereinssatzung anerkannt:', form.satzung ? 'Ja' : 'Nein');
  row('Datenschutzerklärung:', form.datenschutz ? 'Ja' : 'Nein');
  y += 12;

  // Unterschrift
  if (y > 270) { doc.addPage(); y = 20; }
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text('Ort, Datum:', margin, y);
  doc.line(margin + 30, y, margin + 95, y);
  doc.text('Unterschrift:', margin + 105, y);
  doc.line(margin + 135, y, margin + contentW, y);

  const filename = `${title.replace(/\s/g, '_')}_${form.nachname || 'Antrag'}.pdf`;
  doc.save(filename);
}