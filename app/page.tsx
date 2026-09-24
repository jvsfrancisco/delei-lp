import Palco from './components/Palco';
import SeloJanela from './components/SeloJanela';
import { HeroCopy, PageShell } from './components/sections';
import { directOrder, external } from './components/links';

export default function Home() {
  return (
    <PageShell
      hero={
        <section className="hero pa-hero" aria-labelledby="hero-title">
          <HeroCopy />
          <SeloJanela />
        </section>
      }
      reel={
        <section className="pa-montagem" id="montagem" aria-labelledby="montagem-title">
          <header className="pa-montagem-head">
            <h2 id="montagem-title">Lovezin no Arpoador, montado na sua frente.</h2>
            <p>400 ml, dupla camada de creme de morango, Nutella de verdade e morango fresco do fundo ao topo.</p>
          </header>
          <Palco />
          <a className="btn pa-cta" href={directOrder} {...external}>Quero um Lovezin</a>
        </section>
      }
    />
  );
}
