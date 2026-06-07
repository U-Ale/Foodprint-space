function Producao() {
  return (
    <main className="producao">

      <section className="producao-hero">
        <h1>Centro de Produção Espacial</h1>

        <p>
          Monitoramento em tempo real das matérias-primas utilizadas pela
          impressora 3D alimentar da Source Code.
        </p>
      </section>

      <section>

        <h2>Estado dos Cultivos</h2>

        <div className="producao-grid">

          <div className="producao-card">
            <h3>🌱 Ervilha</h3>
            <p>Estoque: 850 kg</p>
            <p>Status: Estável</p>
          </div>

          <div className="producao-card">
            <h3>🌱 Soja</h3>
            <p>Estoque: 720 kg</p>
            <p>Status: Estável</p>
          </div>

          <div className="producao-card">
            <h3>🍄 Micoproteína</h3>
            <p>Estoque: 930 kg</p>
            <p>Status: Excelente</p>
          </div>

          <div className="producao-card">
            <h3>🫘 Grão-de-bico</h3>
            <p>Estoque: 650 kg</p>
            <p>Status: Atenção</p>
          </div>

        </div>

      </section>

      <section className="resumo-sistema">

        <h2>Resumo do Sistema</h2>

        <p>
          A produção alimentar é monitorada continuamente para garantir
          fornecimento estável durante missões espaciais de longa duração.
        </p>

      </section>

    </main>
  );
}

export default Producao;