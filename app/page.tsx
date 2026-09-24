const directOrder = 'https://instadelivery.com.br/acaideleipenha';
const whatsapp = 'https://wa.me/5521992569632';
const instagram = 'https://www.instagram.com/acaideleio/';

const cupSizes = [
  ['DE LEVE', '300 ml'],
  ['DE BOA', '400 ml'],
  ['DE LEI', '500 ml'],
  ['DE RESPONSA', '770 ml'],
  ['DE PATRÃO', '1 litro'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Açaí de Lei, início">
          <img src="/brand-logo.png" alt="Logo Açaí de Lei: cadeira de bar" />
          <span>AÇAÍ <strong>DE LEI</strong></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#filme">O REEL</a>
          <a href="#copos">OS COPOS</a>
          <a href="/bio">LINKS</a>
        </nav>
        <a className="nav-cta" href={directOrder} target="_blank" rel="noopener noreferrer">PEDIR AGORA <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> DELIVERY NA PENHA, RJ</div>
          <h1 id="hero-title">AÇAÍ<br /><em>DE LEI.</em></h1>
          <p className="hero-lead">PUXA A CADEIRA.<br />A GENTE LEVA O AÇAÍ.</p>
          <p className="hero-small">O copo caprichado que chega no seu ritmo. Da primeira colherada até a última: sem caô.</p>
          <div className="hero-actions">
            <a className="button button-cream" href={directOrder} target="_blank" rel="noopener noreferrer">ESCOLHER MEU COPO <span>↗</span></a>
            <a className="hero-reel-link" href="#filme">VER O REEL <span>↓</span></a>
          </div>
          <div className="hero-index"><span>01 / 04</span><span>DE LEI É SER DO SEU JEITO</span></div>
        </div>
        <div className="hero-photo">
          <img src="/acai-morango.jpg" alt="Copo real do Açaí de Lei com morangos, creme e açaí" fetchPriority="high" />
          <div className="photo-corner"><span>REAL, CREMOSO,<br />DE LEI.</span><b>✦</b></div>
          <div className="hero-photo-caption">FOTO DO @ACAIDELEIO</div>
        </div>
      </section>

      <div className="ribbon" aria-hidden="true">
        <div>PUXA A CADEIRA ✳ PEDE UM DE LEI ✳ PUXA A CADEIRA ✳ PEDE UM DE LEI ✳ PUXA A CADEIRA ✳ PEDE UM DE LEI ✳</div>
      </div>

      <section className="reel-section" id="filme" aria-labelledby="reel-title">
        <div className="reel-intro">
          <span className="section-kicker">02 / O REEL QUE É A NOSSA CARA</span>
          <h2 id="reel-title">DE LEI EM<br /><em>QUALQUER</em><br />CENÁRIO.</h2>
          <p>Da calçada pro seu sofá. O sabor acompanha você onde o dia pedir uma pausa.</p>
          <a href="https://www.instagram.com/p/Dcy8noepw07/" target="_blank" rel="noopener noreferrer" className="underlink">ASSISTIR NO INSTAGRAM <span>↗</span></a>
          <div className="reel-detail">
            <img src="/acai-colorido.webp" alt="Copo de açaí com complementos coloridos do feed do Açaí de Lei" loading="lazy" />
            <span>O COPÃO<br />QUE ROUBA<br />A CENA.</span>
          </div>
        </div>
        <div className="reel-stage">
          <div className="reel-frame">
            <iframe
              title="Reel De lei em vários cenários, de @acaideleio"
              src="https://www.instagram.com/p/Dcy8noepw07/embed/"
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p>VÍDEO ORIGINAL DE <a href={instagram} target="_blank" rel="noopener noreferrer">@ACAIDELEIO ↗</a></p>
        </div>
      </section>

      <section className="copos" id="copos" aria-labelledby="copos-title">
        <div className="copos-heading">
          <span className="section-kicker">03 / FEITO PRA DAR VONTADE</span>
          <h2 id="copos-title">OLHA ESSE<br /><em>CAPRICHO.</em></h2>
          <p>Foto real, copo real. Escolhe a sua combinação no cardápio e deixa o resto com a gente.</p>
        </div>
        <div className="photo-grid">
          <figure className="photo-card tall">
            <img src="/acai-banana.jpg" alt="Açaí com banana, leite em pó e granola" loading="lazy" />
            <figcaption><span>01 / BANANA &amp; GRANOLA</span><strong>DO JEITO QUE VOCÊ GOSTA.</strong></figcaption>
          </figure>
          <figure className="photo-card short">
            <img src="/acai-classico.jpg" alt="Açaí com confeitos coloridos e leite em pó" loading="lazy" />
            <figcaption><span>02 / SEM ECONOMIZAR</span><strong>CAPRICHO DE LEI.</strong></figcaption>
          </figure>
          <figure className="photo-card short">
            <img src="/acai-colorido.webp" alt="Açaí com creme, confeitos e calda" loading="lazy" />
            <figcaption><span>03 / COPO COLORIDO</span><strong>HOJE PODE.</strong></figcaption>
          </figure>
        </div>
        <a className="button button-wine" href={directOrder} target="_blank" rel="noopener noreferrer">VER O CARDÁPIO <span>↗</span></a>
      </section>

      <section className="montagem" aria-labelledby="montagem-title">
        <div className="montagem-photo">
          <img src="/acai-morango.jpg" alt="Copo de açaí com morangos frescos" loading="lazy" />
          <div>GOSTOU? <b>PEDE UM DE LEI.</b></div>
        </div>
        <div className="montagem-copy">
          <span className="section-kicker">A MONTAGEM DE VERDADE</span>
          <h2 id="montagem-title">CAMADA<br />POR CAMADA.<br /><em>SEM PRESSA.</em></h2>
          <p>Quer ver o copo ganhar forma? O Lovezin no Arpoador mostra a montagem real, com creme de morango, Nutella e morangos do fundo ao topo.</p>
          <a className="button button-outline" href="https://www.instagram.com/acaideleio/reel/DchD5chhsVI/" target="_blank" rel="noopener noreferrer">VER A MONTAGEM <span>↗</span></a>
        </div>
      </section>

      <section className="sizes" aria-labelledby="sizes-title">
        <div className="sizes-top"><span className="section-kicker">04 / TEM UM TAMANHO PRA VOCÊ</span><h2 id="sizes-title">QUAL É A SUA<br /><em>VONTADE?</em></h2></div>
        <div className="size-list">
          {cupSizes.map(([name, volume], index) => <div className="size-item" key={name}><span>{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><em>{volume}</em></div>)}
        </div>
        <p>Confira opções e preços atualizados no cardápio.</p>
        <a className="button button-cream" href={directOrder} target="_blank" rel="noopener noreferrer">PEDIR PELO CARDÁPIO <span>↗</span></a>
      </section>

      <footer className="footer">
        <div className="footer-top"><img src="/brand-logo.png" alt="Logo do Açaí de Lei" /><h2>PUXA A CADEIRA.<br /><em>PEDE UM DE LEI.</em></h2></div>
        <div className="footer-links"><a href={whatsapp} target="_blank" rel="noopener noreferrer">WHATSAPP ↗</a><a href={instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a><a href="/bio">TODOS OS LINKS ↗</a></div>
        <div className="footer-bottom"><span>© 2026 AÇAÍ DE LEI</span><span>DELIVERY NA PENHA E REGIÃO · RJ</span></div>
      </footer>
    </main>
  );
}
