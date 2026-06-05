import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import SupportSection from '../components/SupportSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StickySupport from '../components/StickySupport';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/6a21b8605426a2a9bf55a069/110b81c87_generated_05274896.png',
  player: 'https://media.base44.com/images/public/6a21b8605426a2a9bf55a069/fb96f9062_U19_Niederrheinpokal.jpg',
  facility: 'https://www.f95.de/media/files/fotos/news/2025-2026/August/20250815_HP_NLZ.png',
  football: 'https://media.base44.com/images/public/6a21b8605426a2a9bf55a069/76cae97f0_generated_d01aeead.png',
  team: 'https://media.base44.com/images/public/6a21b8605426a2a9bf55a069/cd04dcbf9_generated_70f9cb31.png',
  aerial: 'https://media.base44.com/images/public/6a21b8605426a2a9bf55a069/13cdf9784_generated_e6c7a3d0.png',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-pitch-black">
      <Navigation />
      <HeroSection heroImage={IMAGES.hero} />
      <NewsSection images={[IMAGES.facility, IMAGES.player, IMAGES.football, IMAGES.aerial]} />
      <SupportSection />
      <AboutSection facilityImage={IMAGES.facility} teamImage={IMAGES.team} />
      <ContactSection />
      <Footer />
      <StickySupport />
    </div>
  );
}