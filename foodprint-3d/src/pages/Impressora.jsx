function Impressora() {


  return (
    <main className="container">

      <h1 className="hud-title">
        🧪 Impressora 3D Alimentar
      </h1>

      <p style={{ marginBottom: "20px", color: "#94a3b8" }}>
        Selecione um alimento para iniciar a impressão.
      </p>

      {/* GRID DE OPÇÕES */}
      <section className="grid">

        <div className="card">
          <h3>🍔 Hambúrguer Vegetal</h3>
          <p>Base de soja e ervilha.</p>

          <div className="status-bar">
            <div className="status-fill" style={{ width: "70%" }}></div>
          </div>

          <button className="button">
            Imprimir
          </button>
        </div>

        <div className="card">
          <h3>🥗 Refeição Balanceada</h3>
          <p>Combinação equilibrada de proteínas vegetais.</p>

          <div className="status-bar">
            <div className="status-fill" style={{ width: "50%" }}></div>
          </div>

          <button className="button">
            Imprimir
          </button>
        </div>

        <div className="card">
          <h3>🍽️ Refeição Proteica</h3>
          <p>Alta concentração de micoproteína.</p>

          <div className="status-bar">
            <div className="status-fill" style={{ width: "85%" }}></div>
          </div>

          <button className="button">
            Imprimir
          </button>
        </div>

      </section>

      {/* PAINEL DA IMPRESSORA */}
      <section className="printer-panel">

        <h2>🖨️ Status da Máquina</h2>

        <div className="printer-status">
          <span>Status: ONLINE</span>
          <span>Modo: PRODUÇÃO</span>
        </div>

        <div className="printer-status">
          <span>Temperatura: 78°C</span>
          <span>Estabilidade: OK</span>
        </div>

      </section>

    </main>
  );
}

export default Impressora;