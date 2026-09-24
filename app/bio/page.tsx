import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Links | Açaí de Lei',
  description: 'Peça seu Açaí de Lei pelo cardápio, WhatsApp, iFood ou 99Food. Acompanhe também no Instagram.',
  openGraph: {
    title: 'Links | Açaí de Lei',
    description: 'Cardápio, WhatsApp, iFood, 99Food e Instagram do Açaí de Lei.',
    images: [{ url: 'https://acai-de-lei-penha.jvictor-franci.chatgpt.site/acai-morango.jpg', width: 1216, height: 2160, alt: 'Copo real do Açaí de Lei' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Links | Açaí de Lei',
    description: 'Todos os canais de pedido do Açaí de Lei.',
    images: ['https://acai-de-lei-penha.jvictor-franci.chatgpt.site/acai-morango.jpg'],
  },
};

const links = [
  { label: 'PEDIR NO CARDÁPIO', detail: 'Pedido direto · InstaDelivery', href: 'https://instadelivery.com.br/acaideleipenha', mark: '01', primary: true },
  { label: 'CHAMAR NO WHATSAPP', detail: 'Fala com a gente', href: 'https://wa.me/5521992569632', mark: '02' },
  { label: 'PEDIR NO IFOOD', detail: 'Açaí de Lei · Penha', href: 'https://www.ifood.com.br/delivery/rio-de-janeiro-rj/acai-de-lei---penha-penha-circular/656ecddb-9a72-4c9a-a306-1e6bbbc8d1a8?UTM_Medium=share', mark: '03' },
  { label: 'PEDIR NO 99FOOD', detail: 'Mais uma forma de pedir', href: 'https://oia.99app.com/dlp9/dhjLr5?area=BR', mark: '04' },
  { label: 'VER NOSSO INSTAGRAM', detail: '@acaideleio', href: 'https://www.instagram.com/acaideleio/', mark: '05' },
];

export default function BioPage() {
  return (
    <main className="bio-page">
      <div className="bio-shell">
        <a href="/" className="bio-back">← VOLTAR PARA O SITE</a>
        <div className="bio-profile">
          <img src="/brand-logo.png" alt="Logo oficial do Açaí de Lei no Instagram" />
          <span>DELIVERY · PENHA, RJ</span>
          <h1>AÇAÍ <em>DE LEI.</em></h1>
          <p>Puxa a cadeira e pede um de lei. O seu momento mais gostoso começa aqui.</p>
        </div>
        <div className="bio-links">
          {links.map(link => <a key={link.mark} className={link.primary ? 'bio-link primary' : 'bio-link'} href={link.href} target="_blank" rel="noopener noreferrer"><span className="bio-num">{link.mark}</span><span className="bio-link-copy"><strong>{link.label}</strong><small>{link.detail}</small></span><span className="bio-arrow">↗</span></a>)}
        </div>
        <div className="bio-photo"><img src="/acai-morango.jpg" alt="Copo de açaí real do Açaí de Lei" /><div><span>O MELHOR PLANO</span><strong>É PEDIR UM<br />DE LEI.</strong></div></div>
        <p className="bio-footer">AÇAÍ DE LEI · PENHA E REGIÃO · RIO DE JANEIRO</p>
      </div>
    </main>
  );
}
