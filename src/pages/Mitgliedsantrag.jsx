import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Star, Crown, Trophy, CheckCircle2, Send, ChevronDown, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

const SPONSOR_TIERS = [
  { id: 'bronze', name: 'Bronze', priceMonthly: '20', priceYearly: '240', icon: Shield, color: 'from-amber-700 to-amber-900', impact: '3 Trainingsbälle pro Jahr' },
  { id: 'silber', name: 'Silber', priceMonthly: '35', priceYearly: '420', icon: Star, color: 'from-gray-400 to-gray-600', impact: '7 Trainingseinheiten Coaching' },
  { id: 'gold', name: 'Gold', priceMonthly: '50', priceYearly: '600', icon: Crown, color: 'from-yellow-500 to-yellow-700', impact: 'Komplette Ausrüstung für zwei Spieler', featured: true },
  { id: 'platin', name: 'Platin', priceMonthly: '70', priceYearly: '840', icon: Trophy, color: 'from-slate-300 to-slate-500', impact: '1 Stipendium für einen Nachwuchsspieler' },
];

const ZAHLUNGSRHYTHMUS = ['Monatlich', 'Jährlich'];

export default function Mitgliedsantrag() {
  const [selectedLevel, setSelectedLevel] = useState('mitglied');
  const [selectedTier, setSelectedTier] = useState('gold');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    anrede: '',
    vorname: '',
    nachname: '',
    geburtsdatum: '',
    strasse: '',
    plz: '',
    ort: '',
    email: '',
    telefon: '',
    zahlungsrhythmus: 'Monatlich',
    iban: '',
    kontoinhaber: '',
    datenschutz: false,
    satzung: false,
    sepa: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.datenschutz || !form.satzung || !form.sepa) {
      toast.error('Bitte stimmen Sie allen Pflichtfeldern zu.');
      return;
    }
    setSending(true);
    const isSponsor = selectedLevel === 'sponsor';
    const tier = isSponsor ? SPONSOR_TIERS.find(t => t.id === selectedTier) : null;
    const stufeLabel = isSponsor ? `Spender (${tier.name})` : 'Mitglied';
    const price = isSponsor
      ? (form.zahlungsrhythmus === 'Monatlich' ? `${tier.priceMonthly}€ / Monat` : `${tier.priceYearly}€ / Jahr`)
      : (form.zahlungsrhythmus === 'Monatlich' ? '5€ / Monat' : '60€ / Jahr');
    const body = `
NEUER MITGLIEDSANTRAG
=====================

UNTERSTÜTZUNGSART
Art: ${isSponsor ? 'Spender' : 'Mitglied'}
Stufe: ${stufeLabel}
Beitrag: ${price}
Zahlungsrhythmus: ${form.zahlungsrhythmus}
${isSponsor ? `Wirkung: ${tier.impact}` : ''}

PERSÖNLICHE DATEN
Anrede: ${form.anrede}
Vorname: ${form.vorname}
Nachname: ${form.nachname}
Geburtsdatum: ${form.geburtsdatum}

ADRESSE
Straße: ${form.strasse}
PLZ: ${form.plz}
Ort: ${form.ort}

KONTAKTDATEN
E-Mail: ${form.email}
Telefon: ${form.telefon || '—'}

BANKVERBINDUNG
Kontoinhaber: ${form.kontoinhaber}
IBAN: ${form.iban}

ZUSTIMMUNGEN
SEPA-Lastschriftmandat: Ja
Vereinssatzung anerkannt: Ja
Datenschutzerklärung zugestimmt: Ja
    `.trim();

    await base44.functions.invoke('sendEmail', {
      subject: `Neuer Mitgliedsantrag: ${form.anrede} ${form.vorname} ${form.nachname} (${isSponsor ? 'Spender ' + tier.name : 'Mitglied'})`,
      body,
      from_name: `${form.vorname} ${form.nachname}`,
    });
    setSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSponsor = selectedLevel === 'sponsor';
  const tier = isSponsor ? SPONSOR_TIERS.find(t => t.id === selectedTier) : null;
  const TierIcon = tier ? tier.icon : Users;
  const summaryLabel = isSponsor ? `Spender ${tier.name}` : 'Mitglied';
  const summaryPrice = isSponsor
    ? (form.zahlungsrhythmus === 'Monatlich' ? `${tier.priceMonthly}€` : `${tier.priceYearly}€`)
    : (form.zahlungsrhythmus === 'Monatlich' ? '5€' : '60€');

  if (submitted) {
    return (
      <div className="min-h-screen bg-pitch-black flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-victory-red/10 border border-victory-red/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-victory-red" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Vielen <span className="text-victory-red">Dank!</span>
          </h1>
          <p className="font-body text-lg text-white/50 max-w-md leading-relaxed mb-8">
            Ihr Mitgliedsantrag ist eingegangen. Wir melden uns innerhalb von 3 Werktagen mit einer Bestätigung per E-Mail.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-victory-red text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-colors"
          >
            <span className="skew-x-[6deg]">Zurück zur Startseite</span>
          </Link>
        </motion.div>
      </div>
    );
  }

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
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Online-Beitritt</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white mb-4">
            Mitglieds<span className="text-victory-red">antrag</span>
          </h1>
          <p className="font-body text-white/50 leading-relaxed">
            Werden Sie Teil des Fördervereins Fortuna Düsseldorf Leistungszentrum e.V. und unterstützen Sie aktiv die Nachwuchsarbeit.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-6 md:px-16 pb-24 space-y-0">

        {/* 1. Unterstützungsart */}
        <section className="pb-12">
          <SectionTitle number="01" title="Unterstützungsart" dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setSelectedLevel('mitglied')}
              className={`relative p-5 text-left border transition-all duration-300 ${
                selectedLevel === 'mitglied'
                  ? 'border-victory-red bg-victory-red/10'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-victory-red to-red-700 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <p className="font-display text-base uppercase tracking-wider text-white">Mitglied</p>
              </div>
              <p className="font-body text-sm text-white/50">Die Basis — ab 5€ / Monat oder 60€ / Jahr</p>
            </button>
            <button
              type="button"
              onClick={() => setSelectedLevel('sponsor')}
              className={`relative p-5 text-left border transition-all duration-300 ${
                selectedLevel === 'sponsor'
                  ? 'border-victory-red bg-victory-red/10'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <p className="font-display text-base uppercase tracking-wider text-white">Spender</p>
              </div>
              <p className="font-body text-sm text-white/50">Ohne automatische Mitgliedschaft — ab 20€ / Monat</p>
            </button>
          </div>

          {selectedLevel === 'sponsor' && (
            <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SPONSOR_TIERS.map((t) => {
                const Icon = t.icon;
                const isSelected = selectedTier === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTier(t.id)}
                    className={`relative p-4 text-left border transition-all duration-300 ${
                      isSelected
                        ? 'border-victory-red bg-victory-red/10'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    {t.featured && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-victory-red text-white font-display text-[8px] tracking-widest uppercase">
                        Beliebt
                      </span>
                    )}
                    <div className={`w-8 h-8 rounded-sm bg-gradient-to-br ${t.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-display text-base uppercase tracking-wider text-white">{t.name}</p>
                    <p className="font-body text-sm text-white/50">{t.priceMonthly}€ / Monat</p>
                    <p className="font-body text-xs text-white/30">{t.priceYearly}€ / Jahr</p>
                  </button>
                );
              })}
            </div>
            <div className="mt-5 p-4 border border-victory-red/20 bg-victory-red/5">
              <p className="font-body text-sm text-white/60 leading-relaxed">
                <strong className="text-white/80">Hinweis zur Spende:</strong> Die Spenden in den Kategorien Bronze, Silber, Gold und Platin werden als freiwillige Spenderleistung per SEPA-Lastschrift eingezogen. Freiwillige Spenden ohne Kategorie sind jederzeit möglich — wenden Sie sich dazu gerne an den Förderverein.
              </p>
            </div>
            </>
          )}
        </section>

        {/* Light sections wrapper */}
        <div className="bg-white -mx-6 md:-mx-16 px-6 md:px-16 py-12 space-y-12">

        {/* Hinweis Antragsart */}
        <div className="flex items-center gap-4 p-4 border-l-4 border-victory-red bg-victory-red/5">
          {isSponsor && tier ? (
            <div className={`w-8 h-8 rounded-sm bg-gradient-to-br ${tier.color} flex items-center justify-center flex-shrink-0`}>
              <TierIcon className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-victory-red to-red-700 flex items-center justify-center flex-shrink-0">
              <TierIcon className="w-4 h-4 text-white" />
            </div>
          )}
          <div>
            <p className="font-display text-sm uppercase tracking-wider text-pitch-black">
              {isSponsor ? 'Spender-Antrag' : 'Mitgliedsantrag'}
            </p>
            <p className="font-body text-sm text-pitch-black/60">
              {isSponsor
                ? `Spendenstufe ${tier?.name} — ${form.zahlungsrhythmus === 'Monatlich' ? tier.priceMonthly + '€ / Monat' : tier.priceYearly + '€ / Jahr'}`
                : `Mitgliedsbeitrag — ${form.zahlungsrhythmus === 'Monatlich' ? '5€ / Monat' : '60€ / Jahr'}`}
            </p>
          </div>
        </div>

        {/* 2. Persönliche Daten */}
        <section>
          <SectionTitle number="02" title="Persönliche Daten" />
          <div className="space-y-4">
            <div>
              <LabelLight>Anrede *</LabelLight>
              <div className="relative">
                <select
                  name="anrede"
                  value={form.anrede}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 text-pitch-black font-body text-sm px-4 py-3 appearance-none focus:outline-none focus:border-victory-red transition-colors"
                >
                  <option value="" disabled>Bitte wählen</option>
                  <option value="Herr">Herr</option>
                  <option value="Frau">Frau</option>
                  <option value="Divers">Divers</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormFieldLight label="Vorname *" name="vorname" value={form.vorname} onChange={handleChange} placeholder="Max" required />
              <FormFieldLight label="Nachname *" name="nachname" value={form.nachname} onChange={handleChange} placeholder="Mustermann" required />
            </div>
            <FormFieldLight label="Geburtsdatum *" name="geburtsdatum" value={form.geburtsdatum} onChange={handleChange} type="date" required />
          </div>
        </section>

        {/* 3. Adresse */}
        <section>
          <SectionTitle number="03" title="Adresse" />
          <div className="space-y-4">
            <FormFieldLight label="Straße & Hausnummer *" name="strasse" value={form.strasse} onChange={handleChange} placeholder="Musterstraße 42" required />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <FormFieldLight label="PLZ *" name="plz" value={form.plz} onChange={handleChange} placeholder="40235" required />
              <div className="sm:col-span-2">
                <FormFieldLight label="Ort *" name="ort" value={form.ort} onChange={handleChange} placeholder="Düsseldorf" required />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Kontaktdaten */}
        <section>
          <SectionTitle number="04" title="Kontaktdaten" />
          <div className="space-y-4">
            <FormFieldLight label="E-Mail-Adresse *" name="email" value={form.email} onChange={handleChange} type="email" placeholder="max@beispiel.de" required />
            <FormFieldLight label="Telefon" name="telefon" value={form.telefon} onChange={handleChange} placeholder="+49 211 XXXXXXX" />
          </div>
        </section>

        {/* 5. Bankverbindung & SEPA */}
        <section>
          <SectionTitle number="05" title="Bankverbindung & SEPA-Lastschrift" />
          <div className="p-5 border border-gray-200 bg-gray-50 mb-5">
            <p className="font-body text-sm text-gray-600 leading-relaxed">
              Durch Angabe Ihrer Bankverbindung erteilen Sie dem Förderverein Fortuna Düsseldorf Leistungszentrum e.V. 
              ein SEPA-Lastschriftmandat. Der Beitrag wird entsprechend dem gewählten Zahlungsrhythmus von Ihrem Konto abgebucht.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <LabelLight>Zahlungsrhythmus *</LabelLight>
              <div className="relative">
                <select
                  name="zahlungsrhythmus"
                  value={form.zahlungsrhythmus}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 text-pitch-black font-body text-sm px-4 py-3 appearance-none focus:outline-none focus:border-victory-red transition-colors"
                >
                  {ZAHLUNGSRHYTHMUS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <FormFieldLight label="Kontoinhaber *" name="kontoinhaber" value={form.kontoinhaber} onChange={handleChange} placeholder="Max Mustermann" required />
            <FormFieldLight label="IBAN *" name="iban" value={form.iban} onChange={handleChange} placeholder="DE00 0000 0000 0000 0000 00" required />
          </div>
        </section>

        {/* 6. Zustimmungen */}
        <section>
          <SectionTitle number="06" title="Zustimmungen" />
          <div className="space-y-4">
            <CheckboxFieldLight
              name="sepa"
              checked={form.sepa}
              onChange={handleChange}
              label="Ich erteile dem Förderverein Fortuna Düsseldorf Leistungszentrum e.V. ein SEPA-Lastschriftmandat und ermächtige ihn, Zahlungen von meinem Konto einzuziehen. *"
            />
            <CheckboxFieldLight
              name="satzung"
              checked={form.satzung}
              onChange={handleChange}
              label="Ich habe die Vereinssatzung gelesen und erkenne sie als verbindlich an. *"
            />
            <CheckboxFieldLight
              name="datenschutz"
              checked={form.datenschutz}
              onChange={handleChange}
              label="Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der Datenschutzerklärung zu. *"
            />
          </div>
        </section>

        </div>

        {/* Summary & Submit */}
        <section className="border border-victory-red/20 bg-victory-red/5 p-6">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-victory-red mb-3">Zusammenfassung</p>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-sm bg-gradient-to-br ${isSponsor && tier ? tier.color : 'from-victory-red to-red-700'} flex items-center justify-center`}>
              <TierIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-white text-lg uppercase">{summaryLabel}</span>
            <span className="font-display text-victory-red text-lg ml-auto">{summaryPrice}{form.zahlungsrhythmus === 'Monatlich' ? ' / Monat' : ' / Jahr'}</span>
          </div>
          <p className="font-body text-sm text-white/40 mb-6">Zahlungsrhythmus: {form.zahlungsrhythmus}</p>

          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto px-10 py-4 bg-victory-red text-white font-display text-sm tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-all duration-300 flex items-center gap-3 disabled:opacity-50"
          >
            <span className="skew-x-[6deg] inline-flex items-center gap-2">
              {sending ? 'Wird gesendet...' : 'Mitgliedsantrag absenden'} <Send className="w-4 h-4" />
            </span>
          </button>
          <p className="font-body text-xs text-white/30 mt-3">* Pflichtfelder</p>
        </section>

      </form>
    </div>
  );
}

function SectionTitle({ number, title, dark }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-3xl text-victory-red/30 font-bold">{number}</span>
      <div>
        <div className="w-8 h-[2px] bg-victory-red mb-1" />
        <h2 className={`font-display text-xl uppercase tracking-wider ${dark ? 'text-white' : 'text-victory-red'}`}>{title}</h2>
      </div>
    </div>
  );
}

function Label({ children }) {
  return (
    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-white/60 mb-2 block">
      {children}
    </label>
  );
}

function LabelLight({ children }) {
  return (
    <label className="font-display text-[10px] tracking-[0.2em] uppercase text-pitch-black mb-2 block">
      {children}
    </label>
  );
}

function FormField({ label, name, value, onChange, type = 'text', placeholder, required }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/[0.03] border border-white/15 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-victory-red transition-colors placeholder:text-white/20"
      />
    </div>
  );
}

function FormFieldLight({ label, name, value, onChange, type = 'text', placeholder, required }) {
  return (
    <div>
      <LabelLight>{label}</LabelLight>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-gray-300 text-pitch-black font-body text-sm px-4 py-3 focus:outline-none focus:border-victory-red transition-colors placeholder:text-gray-400"
      />
    </div>
  );
}

function CheckboxField({ name, checked, onChange, label }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <div className={`w-5 h-5 flex-shrink-0 border mt-0.5 flex items-center justify-center transition-colors ${
        checked ? 'bg-victory-red border-victory-red' : 'border-white/20 bg-white/[0.02] group-hover:border-white/40'
      }`}>
        {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
        <input type="checkbox" name={name} checked={checked} onChange={onChange} className="sr-only" />
      </div>
      <span className="font-body text-sm text-white/50 leading-relaxed">{label}</span>
    </label>
  );
}

function CheckboxFieldLight({ name, checked, onChange, label }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <div className={`w-5 h-5 flex-shrink-0 border mt-0.5 flex items-center justify-center transition-colors ${
        checked ? 'bg-victory-red border-victory-red' : 'border-gray-300 bg-white group-hover:border-gray-500'
      }`}>
        {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
        <input type="checkbox" name={name} checked={checked} onChange={onChange} className="sr-only" />
      </div>
      <span className="font-body text-sm text-gray-600 leading-relaxed">{label}</span>
    </label>
  );
}