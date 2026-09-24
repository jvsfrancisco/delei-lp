'use client';

import { useEffect, useState } from 'react';
import { channels, external } from './links';

// Barra fixa no celular: aparece quando os canais do topo saem da tela,
// para iFood e 99 nunca ficarem a mais de um toque.
export default function OrderBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.querySelector('.hero .channels');
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={show ? 'order-bar is-visible' : 'order-bar'} aria-label="Pedir agora">
      {channels.map(c => (
        <a key={c.key} href={c.href} className={c.key === 'cardapio' ? 'is-primary' : undefined} tabIndex={show ? undefined : -1} {...external}>
          {c.label}
        </a>
      ))}
    </nav>
  );
}
