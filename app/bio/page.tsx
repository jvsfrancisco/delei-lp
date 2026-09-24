import type { Metadata } from 'next';
import OpenBadge from '../components/OpenBadge';
import QuazzCredito from '../components/QuazzCredito';
import { Cadeira, CadeiraSymbol } from '../components/Cadeira';
import { directOrder, external, food99, ifood, instagram, instagramHandle, tiktok, tiktokHandle, whatsapp } from '../components/links';

export const metadata: Metadata = {
  title: 'Links | Açaí de Lei',
  description: 'Peça seu Açaí de Lei pelo cardápio, WhatsApp, iFood ou 99Food. Acompanhe no Instagram e TikTok.',
  openGraph: {
    title: 'Links | Açaí de Lei',
    description: 'Cardápio, WhatsApp, iFood, 99Food, Instagram e TikTok do Açaí de Lei.',
    images: [{ url: 'https://acai-de-lei-penha.jvictor-franci.chatgpt.site/acai-morango.jpg', width: 1216, height: 2160, alt: 'Copo real do Açaí de Lei' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Links | Açaí de Lei',
    description: 'Todos os canais de pedido do Açaí de Lei.',
    images: ['https://acai-de-lei-penha.jvictor-franci.chatgpt.site/acai-morango.jpg'],
  },
};

const outros = [
  { label: 'iFood', href: ifood },
  { label: '99Food', href: food99 },
  { label: 'WhatsApp', href: whatsapp },
];

export default function BioPage() {
  return (
    <main className="bio">
      <CadeiraSymbol />
      <div className="bio-shell">
        <header className="bio-head">
          {/* o selo do adesivo: anel "DE LEI" girando em volta da foto */}
          <div className="bio-selo" aria-hidden="true">
            <svg viewBox="0 0 400 400">
              <defs>
                <path id="bio-anel" d="M200,200 m-176,0 a176,176 0 1,1 352,0 a176,176 0 1,1 -352,0" />
              </defs>
              <circle cx="200" cy="200" r="198" fill="var(--wine)" />
              <text>
                <textPath href="#bio-anel" textLength="1100" lengthAdjust="spacing">DE LEI · DE LEI · DE LEI · DE LEI · DE LEI · DE LEI ·</textPath>
              </text>
            </svg>
            <img src="/video/cenarios-suave.jpg" alt="" />
          </div>
          <h1>Açaí de Lei</h1>
          <p>Puxa a cadeira e pede um de lei.</p>
          <OpenBadge />
        </header>

        <a className="bio-pedir" href={directOrder} {...external}>
          <Cadeira className="bio-pedir-cadeira" />
          <span>
            <strong>Pedir no cardápio</strong>
            <small>Pedido direto, pelo InstaDelivery</small>
          </span>
        </a>

        <ul className="bio-canais" aria-label="Outros canais">
          {outros.map(c => <li key={c.label}><a href={c.href} {...external}>{c.label}</a></li>)}
        </ul>

        <a className="bio-lovezin" href="/#montagem">
          <img src="/video/montagem.jpg" alt="" />
          <span>
            <strong>Lovezin no Arpoador</strong>
            <small>Vê a montagem do copo, do fundo ao topo</small>
          </span>
        </a>

        <div className="bio-mais">
          <a href={instagram} {...external}>{instagramHandle} no Instagram</a>
          <a href={tiktok} {...external}>{tiktokHandle} no TikTok</a>
          <a href="/">Conhecer o site</a>
        </div>

        <p className="bio-info">Das 11h às 23h59 · Penha e região, Rio de Janeiro</p>

        <QuazzCredito />
      </div>
    </main>
  );
}
