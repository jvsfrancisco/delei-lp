'use client';

import { useEffect, useRef } from 'react';

// O vídeo dos cenários visto por uma janela redonda, com o anel "DE LEI"
// do adesivo girando em volta. Inclina em 3D seguindo o ponteiro.
export default function SeloJanela() {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = root.current;
    const v = video.current;
    if (!el || !v) return;
    v.muted = true;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { v.pause(); return; }
    v.play().catch(() => {});
    const host = el.closest('.hero') ?? el;
    const onMove = (e: Event) => {
      const { clientX, clientY } = e as PointerEvent;
      const r = el.getBoundingClientRect();
      const x = (clientX - (r.left + r.width / 2)) / r.width;
      const y = (clientY - (r.top + r.height / 2)) / r.height;
      el.style.setProperty('--ry', `${Math.max(-1, Math.min(1, x)) * 14}deg`);
      el.style.setProperty('--rx', `${Math.max(-1, Math.min(1, -y)) * 14}deg`);
    };
    const reset = () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); };
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', reset);
    return () => { host.removeEventListener('pointermove', onMove); host.removeEventListener('pointerleave', reset); };
  }, []);

  return (
    <div className="pa-janela-wrap hero-media" aria-hidden="true">
      <div className="pa-janela" ref={root}>
        <svg className="pa-anel" viewBox="0 0 400 400">
          <defs>
            <path id="pa-anel-path" d="M200,200 m-176,0 a176,176 0 1,1 352,0 a176,176 0 1,1 -352,0" />
          </defs>
          <circle cx="200" cy="200" r="198" fill="var(--wine)" />
          <text>
            <textPath href="#pa-anel-path" textLength="1100" lengthAdjust="spacing">DE LEI · DE LEI · DE LEI · DE LEI · DE LEI · DE LEI ·</textPath>
          </text>
        </svg>
        <div className="pa-janela-video">
          <video ref={video} src="/video/cenarios-suave.mp4" poster="/video/cenarios-suave.jpg" muted autoPlay loop playsInline preload="auto" />
        </div>
      </div>
    </div>
  );
}
