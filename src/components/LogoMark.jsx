import React from 'react';

const LOGO_URL = 'https://base44.app/api/apps/6a21b8605426a2a9bf55a069/files/mp/public/6a21b8605426a2a9bf55a069/09e003b7e_foerderverein-nlz-f95-logo.png';

export default function LogoMark({ className = 'h-10 w-auto' }) {
  return (
    <img
      src={LOGO_URL}
      alt="Förderverein Fortuna Düsseldorf NLZ Logo"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}