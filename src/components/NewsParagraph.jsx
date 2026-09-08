import React from 'react';

const LINKS = [
  { text: 'Supporters Club Düsseldorf', href: 'https://www.scd2003.de/' },
];

export default function NewsParagraph({ children: para }) {
  let parts = [para];
  for (const link of LINKS) {
    const next = [];
    for (const part of parts) {
      if (typeof part !== 'string') {
        next.push(part);
        continue;
      }
      const idx = part.indexOf(link.text);
      if (idx === -1) {
        next.push(part);
        continue;
      }
      next.push(part.slice(0, idx));
      next.push(
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-victory-red underline hover:no-underline"
        >
          {link.text}
        </a>
      );
      next.push(part.slice(idx + link.text.length));
    }
    parts = next;
  }
  return <>{parts}</>;
}