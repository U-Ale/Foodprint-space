

function Home() {
  return (
    <main className="home">

      {/* A - HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1>Alimentando a próxima geração da exploração espacial</h1>

          <p>
            A Source Code desenvolveu uma solução que integra cultivo
            inteligente, monitoramento de estoque e impressão 3D de alimentos
            para missões espaciais de longa duração.
          </p>

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



            {/* A - NOSSA VISÃO */}
      <section className="visao">
        <h2>Nossa Visão</h2>

        <p>
          A exploração espacial enfrenta diversos desafios, e um dos mais
          importantes é garantir uma fonte contínua de alimentação para
          astronautas durante missões de longa duração.
        </p>

        <p>
          A Source Code propõe um ecossistema alimentar espacial baseado
          no cultivo de matérias-primas sustentáveis, monitoramento
          inteligente de recursos e impressão 3D de alimentos.
        </p>

        <p>
          Em vez de depender exclusivamente do envio constante de refeições
          da Terra, nossa solução permite transformar ingredientes produzidos
          e armazenados localmente em refeições personalizadas, reduzindo
          custos logísticos e aumentando a autonomia das missões.
        </p>
      </section>

      {/* M - BENEFÍCIOS */}
      <section className="beneficios">
        <h2>Benefícios da Solução</h2>

        <div className="cards">

          <div className="card">
            <h3>🚀 Autonomia Espacial</h3>
            <p>
              Menor dependência de reabastecimentos vindos da Terra.
            </p>
          </div>

          <div className="card">
            <h3>🌱 Produção Sustentável</h3>
            <p>
              Aproveitamento eficiente de matérias-primas cultivadas no espaço.
            </p>
          </div>

          <div className="card">
            <h3>📦 Redução de Custos</h3>
            <p>
              Menor necessidade de transportar alimentos prontos.
            </p>
          </div>

          <div className="card">
            <h3>🖨️ Nutrição Personalizada</h3>
            <p>
              Produção de refeições adaptadas às necessidades dos astronautas.
            </p>
          </div>

        </div>
      </section> 
      
      {/* A - CHAMADA FINAL */}
      <section className="cta">
        <h2>
          Não enviamos apenas alimentos para o espaço.
          Criamos um sistema capaz de produzi-los.
        </h2>


      </section>

    </main>
  );
}

export default Home;