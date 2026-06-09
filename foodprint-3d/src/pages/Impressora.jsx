import { useState } from "react";

function Impressora({ estoque, setEstoque }) {

  const [imprimindo, setImprimindo] = useState(false);
  const [status, setStatus] = useState("Aguardando impressão");

  function imprimirHamburguer() {

    if (imprimindo) return;

    if (
      estoque.soja < 5 ||
      estoque.ervilha < 3
    ) {
      setStatus("Estoque insuficiente");
      return;
    }

    setImprimindo(true);
    setStatus("Imprimindo Hambúrguer Vegetal...");

    setTimeout(() => {

      setEstoque({
        ...estoque,
        soja: estoque.soja - 5,
        ervilha: estoque.ervilha - 3
      });

      setStatus("Hambúrguer concluído!");
      setImprimindo(false);

    }, 3000);
  }

  function imprimirBalanceada() {

    if (imprimindo) return;

    if (
      estoque.soja < 2 ||
      estoque.ervilha < 2 ||
      estoque.graoDeBico < 2
    ) {
      setStatus("Estoque insuficiente");
      return;
    }

    setImprimindo(true);
    setStatus("Imprimindo Refeição Balanceada...");

    setTimeout(() => {

      setEstoque({
        ...estoque,
        soja: estoque.soja - 2,
        ervilha: estoque.ervilha - 2,
        graoDeBico: estoque.graoDeBico - 2
      });

      setStatus("Refeição concluída!");
      setImprimindo(false);

    }, 3000);
  }

  function imprimirProteica() {

    if (imprimindo) return;

    if (estoque.micoproteina < 8) {
      setStatus("Estoque insuficiente");
      return;
    }

    setImprimindo(true);
    setStatus("Imprimindo Refeição Proteica...");

    setTimeout(() => {

      setEstoque({
        ...estoque,
        micoproteina: estoque.micoproteina - 8
      });

      setStatus("Refeição Proteica concluída!");
      setImprimindo(false);

    }, 3000);
  }

  return (
    <main className="container">

      <h1 className="hud-title">
        🧪 Impressora 3D Alimentar
      </h1>

      <p style={{ marginBottom: "20px", color: "#94a3b8" }}>
        Selecione um alimento para iniciar a impressão.
      </p>

      <section className="grid">

        <div className="card">

          <h3>🍔 Hambúrguer Vegetal</h3>

          <p>Base de soja e ervilha.</p>

          <p>
            Consumo: 5kg Soja + 3kg Ervilha
          </p>

          <div className="status-bar">
            <div
              className="status-fill"
              style={{ width: "70%" }}
            ></div>
          </div>

          <button
            className="button"
            onClick={imprimirHamburguer}
            disabled={imprimindo}
          >
            {imprimindo ? "Imprimindo..." : "Imprimir"}
          </button>

        </div>

        <div className="card">

          <h3>🥗 Refeição Balanceada</h3>

          <p>
            Combinação equilibrada de proteínas vegetais.
          </p>

          <p>
            Consumo: 2kg Soja + 2kg Ervilha + 2kg Grão-de-bico
          </p>

          <div className="status-bar">
            <div
              className="status-fill"
              style={{ width: "50%" }}
            ></div>
          </div>

          <button
            className="button"
            onClick={imprimirBalanceada}
            disabled={imprimindo}
          >
            {imprimindo ? "Imprimindo..." : "Imprimir"}
          </button>

        </div>

        <div className="card">

          <h3>🍽️ Refeição Proteica</h3>

          <p>
            Alta concentração de micoproteína.
          </p>

          <p>
            Consumo: 8kg Micoproteína
          </p>

          <div className="status-bar">
            <div
              className="status-fill"
              style={{ width: "85%" }}
            ></div>
          </div>

          <button
            className="button"
            onClick={imprimirProteica}
            disabled={imprimindo}
          >
            {imprimindo ? "Imprimindo..." : "Imprimir"}
          </button>

        </div>

      </section>

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

        <div className="printer-status">
          <span>{status}</span>
        </div>

      </section>

    </main>
  );
}

export default Impressora;