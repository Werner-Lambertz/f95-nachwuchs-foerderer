import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TIMELINE = [
{
  year: '2010',
  title: 'Gründung des Fördervereins',
  desc: 'Engagierte Fans und Eltern schließen sich zusammen, um die Nachwuchsarbeit von Fortuna Düsseldorf nachhaltig zu stärken.'
},
{
  year: '2013',
  title: 'Eintragung in das Vereinsregister',
  desc: <>Der Förderverein erhält seine <a href="https://media.base44.com/files/public/6a21b8605426a2a9bf55a069/33d5b4a5f_101112SatzungFrdervereinEndfassungMitgliederbrief.pdf" target="_blank" rel="noopener noreferrer" className="text-victory-red underline hover:text-red-700 transition-colors">offizielle Satzung</a> und wird in das Vereinsregister eingetragen.</>
},
{
  year: '2013',
  title: 'Das Musical-Projekt',
  desc: '95 OLE - Das Düsseldorfer Fußballmusical für die ganze Familie - Der Förderverein richtet in Zusammenarbeit mit dem Schauspielhaus ein Musical aus.'
},
{
  year: '2014',
  title: 'Leistungszentrum wird Realität',
  desc: 'Das offizielle Leistungszentrum wird eröffnet — ein Meilenstein für die professionelle Jugendausbildung.'
},
{
  year: '2019',
  title: 'DFB-Zertifizierung',
  desc: 'Das Leistungszentrum erhält die Drei-Sterne-Zertifizierung des DFB und zählt damit zu den besten in Deutschland.'
},
{
  year: '2024',
  title: 'Digitalisierung & Expansion',
  desc: 'Investition in modernste Videoanalyse-Technologie und Ausbau des sportpsychologischen Betreuungskonzepts.'
},
{
  year: 'Heute',
  title: 'Die Zukunft gestalten',
  desc: "\xDCber 270 Nachwuchsspieler und Spielerinnen werden in unserem Leistungszentrum auf h\xF6chstem Niveau ausgebildet und betreut."
}];


export default function AboutSection({ facilityImage, teamImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-pure-oxygen overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-30" />

      {/* Large F95 watermark */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none">
        <span className="font-display text-[18rem] md:text-[28rem] leading-none text-pitch-black/[0.02] font-bold">
          F95
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-victory-red" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-victory-red">Unsere Geschichte</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-pitch-black">
            Über <span className="text-victory-red">uns</span>
          </h2>
        </motion.div>

        {/* Split layout: Timeline left, Images right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-stadium-concrete" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) =>
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative pl-10 group">
                
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-4 h-4 border-2 border-victory-red bg-pure-oxygen group-hover:bg-victory-red transition-colors duration-300" />
                  
                  <span className="font-display text-xs tracking-[0.3em] text-victory-red uppercase">{item.year}</span>
                  <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-pitch-black mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            
            <a href="https://www.f95.de/verein/nlz/ueberblick/" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden bg-pitch-black block group">
              <img
                src={facilityImage}
                alt="Trainingsanlage des Leistungszentrums"
                className="w-full h-64 md:h-80 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-pitch-black/80 to-transparent">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-white/80">Das Leistungszentrum</p>
              </div>
            </a>
            <div className="relative overflow-hidden bg-pitch-black">
              <img
                src={teamImage}
                alt="Mannschaftsgeist im Nachwuchszentrum"
                className="w-full h-48 md:h-60 object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-pitch-black/80 to-transparent">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-white/80">Gemeinsam stark</p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="p-6 md:p-8 bg-pitch-black">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-victory-red mb-3">Unsere Mission</p>
              <p className="font-body text-white/70 leading-relaxed text-[15px]">
                Wir schaffen die bestmöglichen Bedingungen für junge Talente, 
                damit sie ihren Traum vom Profifußball verwirklichen können — 
                sportlich, schulisch und menschlich.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}