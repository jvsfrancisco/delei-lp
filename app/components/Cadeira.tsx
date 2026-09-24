import { CHAIR_H, CHAIR_PATH, CHAIR_VIEWBOX, CHAIR_W } from './chair-path';

// Perna traseira do meio (a mais "funda"). Numa pilha ela fica escondida dentro
// da cadeira de baixo, então sai das empilhadas. O corte segue a borda de baixo
// do assento (medida no traçado: y 519 em x 305 até y 529 em x 370), e a folga
// escura é redesenhada ao longo dele para o contorno do assento ficar contínuo.
const CORTE = { x1: 296, y1: 517.6, x2: 372, y2: 529.3 };
const PERNA_TRASEIRA = `M${CORTE.x1} ${CORTE.y1} L${CORTE.x2} ${CORTE.y2} L${CORTE.x2} 800 L${CORTE.x1} 800 Z`;

// O contorno na cor do fundo (--chair-gap) separa as cadeiras quando empilhadas.
const GAP = { stroke: 'var(--chair-gap, transparent)', strokeWidth: 26, strokeLinejoin: 'round' as const };

function ChairPath({ mask }: { mask?: string }) {
  return <path d={CHAIR_PATH} fillRule="evenodd" fill="currentColor" paintOrder="stroke" mask={mask} {...GAP} />;
}

export function CadeiraSymbol() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="cadeira" viewBox={CHAIR_VIEWBOX}>
        <ChairPath />
      </symbol>
      <symbol id="cadeira-empilhada" viewBox={CHAIR_VIEWBOX}>
        <mask id="sem-perna-traseira" maskUnits="userSpaceOnUse" x="0" y="0" width="800" height="1000">
          <rect width="800" height="1000" fill="#fff" />
          <path d={PERNA_TRASEIRA} fill="#000" />
        </mask>
        {/* folga sob o trecho cortado; o assento cobre a metade de cima, como no resto do contorno */}
        <path d={`M${CORTE.x1} ${CORTE.y1} L${CORTE.x2} ${CORTE.y2}`} fill="none" {...GAP} />
        <ChairPath mask="url(#sem-perna-traseira)" />
      </symbol>
    </svg>
  );
}

export function Cadeira({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox={`0 0 ${CHAIR_W} ${CHAIR_H}`} aria-hidden="true">
      <use href="#cadeira" width={CHAIR_W} height={CHAIR_H} />
    </svg>
  );
}

// Pilha de cadeiras de bar: cada uma encaixa um pouco acima da de baixo.
const STEP = 120;

export function PilhaDeCadeiras({ count, className }: { count: number; className?: string }) {
  const height = CHAIR_H + (count - 1) * STEP;
  return (
    <svg className={className} viewBox={`0 0 ${CHAIR_W} ${height}`} aria-hidden="true">
      {Array.from({ length: count }, (_, n) => (
        <use key={n} href={n === 0 ? '#cadeira' : '#cadeira-empilhada'} width={CHAIR_W} height={CHAIR_H} y={(count - 1 - n) * STEP} />
      ))}
    </svg>
  );
}
