import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

export default function StickySupport() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-pitch-black/95 backdrop-blur-md border-t border-white/10 py-3 px-6"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Heart className="w-4 h-4 text-victory-red flex-shrink-0" />
              <p className="font-body text-sm text-white/70 hidden sm:block">
                Werden Sie Mitglied und fördern Sie die nächste Generation.
              </p>
              <p className="font-body text-sm text-white/70 sm:hidden">
                Jetzt Mitglied werden
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#support"
                className="px-6 py-2 bg-victory-red text-white font-display text-[10px] tracking-[0.15em] uppercase skew-x-[-6deg] hover:bg-red-700 transition-colors"
              >
                <span className="skew-x-[6deg] inline-block">Unterstützen</span>
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="text-white/40 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}