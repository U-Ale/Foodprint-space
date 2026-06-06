
function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Alimentando a próxima geração da exploração espacial</h1>

          <p>
            A Source Code desenvolveu uma solução que integra cultivo
            inteligente, monitoramento de estoque e impressão 3D de alimentos
            para missões espaciais de longa duração.
          </p>

          <button className="btn-principal">
            Conhecer a Solução
          </button>
        </div>
      </section>

      {/* J - DESAFIO */}
      <section className="problema">
        <h2>Os Desafios das Missões Espaciais</h2>

        <div className="cards">

          <div className="card">
            <h3>🚀 Missões de Longa Duração</h3>
            <p>
              Astronautas precisam de alimentação constante durante viagens
              espaciais prolongadas.
            </p>
          </div>

          <div className="card">
            <h3>📦 Armazenamento Limitado</h3>
            <p>
              O espaço disponível para transportar alimentos é extremamente
              reduzido.
            </p>
          </div>

          <div className="card">
            <h3>🌍 Sustentabilidade</h3>
            <p>
              É necessário produzir alimentos utilizando poucos recursos e com
              o menor impacto possível.
            </p>
          </div>

        </div>
      </section>

      {/* A - SOLUÇÃO */}
      <section className="solucao">
        <h2>Nossa Solução</h2>

        <div className="cards">

          <div className="card">
            <h3>🌱 Cultivo Inteligente</h3>
            <p>
              Monitoramento de soja, ervilha, grão-de-bico e micoproteína em
              tempo real.
            </p>
          </div>

          <div className="card">
            <h3>📊 Controle de Estoque</h3>
            <p>
              Gestão automática dos recursos disponíveis para produção dos
              alimentos.
            </p>
          </div>

          <div className="card">
            <h3>🖨️ Impressora 3D Alimentar</h3>
            <p>
              Produção personalizada de refeições para atender as necessidades
              dos astronautas.
            </p>
          </div>

        </div>
      </section>

      {/* M - FUNCIONAMENTO */}
      <section className="fluxo">
        <h2>Como Funciona</h2>

        <div className="fluxo-container">
          <div>🌱 Cultivo</div>
          <span>→</span>

          <div>📦 Estoque</div>
          <span>→</span>

          <div>🖨️ Impressão 3D</div>
          <span>→</span>

          <div>🍽️ Refeição</div>
        </div>
      </section>

      {/* A - CHAMADA FINAL */}
      <section className="cta">
        <h2>
          Tecnologia, sustentabilidade e inovação para alimentar o futuro da
          exploração espacial.
        </h2>

        <button className="btn-principal">
          Explorar Plataforma
        </button>
      </section>

    </main>
  );
}

export default Home;