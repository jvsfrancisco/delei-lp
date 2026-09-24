const covers = (ranges: TimeRanges, at: number) => {
  for (let i = 0; i < ranges.length; i++) if (ranges.start(i) <= at && at <= ranges.end(i)) return true;
  return false;
};

const pending = new WeakMap<HTMLVideoElement, () => void>();
const converting = new WeakSet<HTMLVideoElement>();

// Servidor sem suporte a Range: o navegador marca o vídeo como não pulável
// (seekable vazio) e qualquer salto volta para 0. Baixa o arquivo uma vez como
// blob, que é sempre pulável, e troca a fonte mantendo o estado de reprodução.
async function makeSeekable(video: HTMLVideoElement) {
  if (converting.has(video)) return;
  converting.add(video);
  const blob = await fetch(video.currentSrc).then(r => r.blob());
  const wasPlaying = !video.paused;
  video.src = URL.createObjectURL(blob);
  if (wasPlaying) video.play().catch(() => {});
}

// Pular para um tempo mesmo antes dos metadados ou num servidor sem Range.
export function seekTo(video: HTMLVideoElement, at: number) {
  pending.get(video)?.();
  const ready = () => video.readyState >= 1 && covers(video.seekable, at);
  if (ready()) { video.currentTime = at; return; }
  const events = ['loadedmetadata', 'progress', 'canplay'] as const;
  const stop = () => { events.forEach(e => video.removeEventListener(e, check)); pending.delete(video); };
  const check = () => {
    if (ready()) { stop(); video.currentTime = at; return; }
    // metadados carregados e nada pulável: servidor sem Range
    if (video.readyState >= 1 && !covers(video.seekable, Math.min(1, video.duration))) makeSeekable(video).catch(stop);
  };
  events.forEach(e => video.addEventListener(e, check));
  pending.set(video, stop);
  check();
}
