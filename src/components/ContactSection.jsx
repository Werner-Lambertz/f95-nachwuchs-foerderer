import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Vielen Dank! Ihre Nachricht wurde gesendet.');
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-stadium-concrete overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Sprechen Sie uns an</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-pitch-black">
            Kon<span className="text-victory-red">takt</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Haben Sie Fragen zum Förderverein oder möchten Sie sich engagieren? 
                Wir freuen uns über Ihre Nachricht.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Adresse', value: 'Flinger Broich 87\n40235 Düsseldorf' },
                { icon: Mail, label: 'E-Mail', value: 'info@fv-f95.de' },
                { icon: Phone, label: 'Telefon', value: '+49 211 XXXXXXX' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-pitch-black flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-victory-red" />
                    </div>
                    <div>
                      <p className="font-display text-xs tracking-[0.2em] uppercase text-pitch-black mb-1">{item.label}</p>
                      <p className="font-body text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vereinsdaten */}
            <div className="p-6 bg-pitch-black mt-8">
              <p className="font-display text-xs tracking-[0.2em] uppercase text-victory-red mb-3">Vereinsdaten</p>
              <div className="space-y-2 font-body text-sm text-white/60">
                <p>Förderverein Fortuna Düsseldorf</p>
                <p>Leistungszentrum e.V.</p>
                <p className="pt-2 border-t border-white/10">Vereinsregister: VR XXXXX</p>
                <p>Amtsgericht Düsseldorf</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-pure-oxygen p-6 md:p-8 border border-pitch-black/5 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-display text-[10px] tracking-[0.2em] uppercase text-pitch-black mb-2 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ihr Name"
                    required
                    className="rounded-none border-pitch-black/20 focus:border-victory-red font-body text-sm"
                  />
                </div>
                <div>
                  <label className="font-display text-[10px] tracking-[0.2em] uppercase text-pitch-black mb-2 block">E-Mail</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    className="rounded-none border-pitch-black/20 focus:border-victory-red font-body text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="font-display text-[10px] tracking-[0.2em] uppercase text-pitch-black mb-2 block">Betreff</label>
                <Input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Worum geht es?"
                  required
                  className="rounded-none border-pitch-black/20 focus:border-victory-red font-body text-sm"
                />
              </div>
              <div>
                <label className="font-display text-[10px] tracking-[0.2em] uppercase text-pitch-black mb-2 block">Nachricht</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ihre Nachricht..."
                  required
                  rows={6}
                  className="rounded-none border-pitch-black/20 focus:border-victory-red font-body text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto px-10 py-4 bg-victory-red text-white font-display text-xs tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-all duration-300 disabled:opacity-50 flex items-center gap-3"
              >
                <span className="skew-x-[6deg] inline-flex items-center gap-2">
                  {sending ? 'Wird gesendet...' : 'Nachricht senden'}
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}