'use client';

import { useEffect, useState } from 'react';

// Atendimento das 11:00 às 23:59, horário do Rio.
const OPEN = 11 * 60;

function minutesInRio() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (type: string) => Number(parts.find(p => p.type === type)?.value ?? 0);
  return get('hour') * 60 + get('minute');
}

export default function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setOpen(minutesInRio() >= OPEN);
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return <span className="open-badge">11h às 23h59</span>;
  return (
    <span className={open ? 'open-badge is-open' : 'open-badge'}>
      <i aria-hidden="true" />
      {open ? 'Aberto' : 'Fechado'}
      <span className="open-badge-more">{open ? 'agora · até 23h59' : 'abre às 11h'}</span>
    </span>
  );
}
