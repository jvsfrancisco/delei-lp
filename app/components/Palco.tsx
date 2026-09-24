'use client';

import { useEffect, useRef, useState } from 'react';
import { MONTAGEM_DURATION, chapterAt, chapters, stamp } from './links';
import { seekTo } from './media';

// Montagem como palco: o vídeo é o protagonista; o capítulo atual aparece grande
// ao lado e a linha do tempo tem uma marca por capítulo.
export default function Palco() {
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [t, setT] = useState(0);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const index = chapterAt(t);

  // Entrada em 3D: o palco "levanta" da mesa conforme a seção entra na tela.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.setProperty('--enter', '1'); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.75)));
      el.style.setProperty('--enter', p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  const play = (at?: number) => {
    const v = video.current;
    if (!v) return;
    if (at !== undefined) { seekTo(v, at); setT(at); }
    v.muted = false;
    v.play().catch(() => {});
    setStarted(true);
  };

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) play(); else v.pause();
  };

  const go = (delta: number) => {
    const next = Math.min(chapters.length - 1, Math.max(0, index + delta));
    play(chapters[next][0]);
  };

  return (
    <div className="pa-palco" ref={stage}>
      <div className="pa-legenda" aria-live="polite">
        <span className="pa-contador">{String(index + 1).padStart(2, '0')}<small>/{chapters.length}</small></span>
        <p key={index} className="pa-capitulo">{chapters[index][1]}</p>
      </div>

      <div className="pa-tela">
        <video
          ref={video}
          src="/video/montagem.mp4"
          poster="/video/montagem.jpg"
          preload="metadata"
          playsInline
          onTimeUpdate={e => setT(e.currentTarget.currentTime)}
          onPlay={() => { setPlaying(true); setStarted(true); }}
          onPause={() => setPlaying(false)}
          onClick={toggle}
          aria-label="Reel: montagem do Lovezin no Arpoador, do fundo ao topo"
        />
        {!started && (
          <button type="button" className="montagem-play" onClick={() => play()}>
            <span className="montagem-play-icon" aria-hidden="true" />
            Assistir com som · 34s
          </button>
        )}
      </div>

      <div className="pa-controles">
        <button type="button" className="pa-btn" onClick={() => go(-1)} aria-label="Capítulo anterior">‹</button>
        <button type="button" className="pa-btn pa-btn-play" onClick={toggle} aria-label={playing ? 'Pausar' : 'Tocar'}>{playing ? '❚❚' : '▶'}</button>
        <div className="pa-linha">
          <div className="pa-progresso" style={{ width: `${(t / MONTAGEM_DURATION) * 100}%` }} />
          {chapters.map(([at, label], i) => (
            <button
              key={at}
              type="button"
              className={i === index ? 'pa-marca is-active' : i < index ? 'pa-marca is-done' : 'pa-marca'}
              style={{ left: `${(at / MONTAGEM_DURATION) * 100}%` }}
              onClick={() => play(at)}
              aria-label={`${stamp(at)} ${label}`}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
        <button type="button" className="pa-btn" onClick={() => go(1)} aria-label="Próximo capítulo">›</button>
      </div>
    </div>
  );
}
