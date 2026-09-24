import type { ReactNode } from 'react';
import OpenBadge from './OpenBadge';
import OrderBar from './OrderBar';
import QuazzCredito from './QuazzCredito';
import { Cadeira, CadeiraSymbol, PilhaDeCadeiras } from './Cadeira';
import { channels, directOrder, external, instagram } from './links';

const cupSizes = [
  { name: 'De Leve', volume: '300 ml' },
  { name: 'De Boa', volume: '400 ml' },
  { name: 'De Lei', volume: '500 ml' },
  { name: 'De Responsa', volume: '770 ml' },
  { name: 'De Patrão', volume: '1 litro' },
];

const placas = ['Lovezin no Arpoador', 'Corrida no Maraca', 'Ninho a Beça', 'O Cria'];

export function Topbar() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Açaí de Lei, início">
        <span className="brand-seal"><img src="/brand-logo.png" alt="" /></span>
        Açaí de Lei
      </a>
      <OpenBadge />
      <nav className="topbar-channels" aria-label="Pedir por">
        {channels.slice(1, 3).map(c => <a key={c.key} href={c.href} {...external}>{c.label}</a>)}
      </nav>
      <a className="btn btn-small" href={directOrder} {...external}>Pedir</a>
    </header>
  );
}

// Os quatro canais logo na primeira tela.
export function Channels({ className = 'channels' }: { className?: string }) {
  return (
    <ul className={className} aria-label="Onde pedir">
      {channels.map(c => (
        <li key={c.key} className={c.key === 'cardapio' ? 'is-primary' : undefined}>
          <a href={c.href} {...external}>{c.key === 'cardapio' ? c.long : c.label}</a>
        </li>
      ))}
    </ul>
  );
}

export function HeroCopy() {
  return (
    <div className="hero-copy">
      <h1 id="hero-title">Puxa a cadeira.</h1>
      <p>A calçada agora é na sua porta. Açaí delivery na Penha e região, das 11h à meia-noite.</p>
      <Channels />
    </div>
  );
}

export function Manifesto() {
  return (
    <section className="manifesto" aria-label="Por que a cadeira">
      <Cadeira className="manifesto-chair" />
      <blockquote>
        <p>
          “A cadeira de plástico é a cara do RJ, representa o fim do expediente, o papo de calçada e o descanso
          merecido daquele dia caótico de condução lotada e trânsito parado. <mark>O Açaí de Lei nasce dessa mesma
          essência, sem frescura e com o sabor que a sua rotina pede.</mark>”
        </p>
        <footer>Do primeiro post da marca, 12 de agosto de 2026</footer>
      </blockquote>
    </section>
  );
}

export function Cardapio() {
  return (
    <section className="cardapio" aria-labelledby="cardapio-title">
      <h2 id="cardapio-title">No cardápio, o Rio dá nome ao copo.</h2>
      <ul className="placas">
        {placas.map(name => <li key={name} className="placa">{name}</li>)}
      </ul>
      <a className="text-link" href={directOrder} {...external}>O que vai em cada um está no cardápio</a>
      <div className="fotos">
        <img src="/acai-banana.jpg" alt="Açaí com banana em rodelas, leite em pó e granola" loading="lazy" />
        <img src="/acai-colorido.webp" alt="Açaí com creme, confeitos coloridos, jujubas e granulado" loading="lazy" />
        <img src="/acai-morango.jpg" alt="Mão segurando copo de açaí com morangos frescos" loading="lazy" />
        <img src="/acai-classico.jpg" alt="Açaí com confeitos coloridos, leite em pó e canudo de wafer" loading="lazy" />
      </div>
    </section>
  );
}

export function Tamanhos() {
  return (
    <section className="tamanhos" aria-labelledby="tamanhos-title">
      <h2 id="tamanhos-title">Empilha até onde a fome mandar.</h2>
      <ol className="pilhas">
        {cupSizes.map((size, i) => (
          <li key={size.name}>
            <PilhaDeCadeiras count={i + 1} />
            <strong>{size.name}</strong>
            <span>{size.volume}</span>
          </li>
        ))}
      </ol>
      <p className="tamanhos-note">Os preços de cada tamanho estão atualizados no <a href={directOrder} {...external}>cardápio</a>.</p>
    </section>
  );
}

export function Prova() {
  return (
    <section className="prova" aria-labelledby="prova-title">
      <h2 id="prova-title">Quando é bom, o cliente pede pra divulgar.</h2>
      <div className="chat" aria-label="Mensagem de um cliente no WhatsApp">
        <p className="bubble">Muito boooom<time>17:53</time></p>
        <p className="bubble">Te falar, tem algum textinho algo assim pra eu compartilhar no grupo do condomínio?<time>17:54</time></p>
      </div>
    </section>
  );
}

export function Pedir() {
  return (
    <section className="pedir" id="pedir" aria-labelledby="pedir-title">
      <h2 id="pedir-title">Bora pedir?</h2>
      <ul className="canais">
        {channels.map(c => (
          <li key={c.key}><a href={c.href} {...external}><strong>{c.key === 'cardapio' ? 'Cardápio direto' : c.label}</strong><span>{c.detail}</span></a></li>
        ))}
      </ul>
      <div className="pedir-info">
        <p>Das 11h às 23h59.<br />Entrega na Penha e região, Rio de Janeiro.</p>
        <p><a href={instagram} {...external}>@acaideleio</a> no Instagram</p>
      </div>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-linha">
        <span>© 2026 Açaí de Lei</span>
        <a href="/bio">Todos os links</a>
      </div>
      <QuazzCredito />
    </footer>
  );
}

// Esqueleto da página: o topo e a seção do reel entram por props.
export function PageShell({ hero, reel, className }: { hero: ReactNode; reel: ReactNode; className?: string }) {
  return (
    <main className={className}>
      <CadeiraSymbol />
      <Topbar />
      {hero}
      <Manifesto />
      {reel}
      <Cardapio />
      <Tamanhos />
      <Prova />
      <Pedir />
      <Rodape />
      <OrderBar />
    </main>
  );
}
