import ale from "../assets/integrantes/ale.jpg";
import matheus from "../assets/integrantes/matheus.jpg";
import julia from "../assets/integrantes/julia.jpg";

function Integrantes() {
  return (
    <main className="integrantes">

      <h1>Equipe Source Code</h1>

      <section className="integrantes-grid">

        <div className="integrante-card">

          <img
            src={ale}
            alt="Alexandre Prazeres"
            className="integrante-foto"
          />

          <h2>Alexandre Prazeres</h2>

          <p>RM: 573059</p>

          <p>Turma: 1TDSPO</p>

          <p>Função: Desenvolvedor</p>

          <div className="integrante-links">

            <a
              href="https://github.com/U-Ale"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alexandre-prazeres-santos/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="integrante-card">

          <img
            src={matheus}
            alt="Matheus Nezio"
            className="integrante-foto"
          />

          <h2>Matheus Nezio</h2>

          <p>RM: 571702</p>

          <p>Turma: 1TDSPO</p>

          <p>Função: Desenvolvedor</p>

          <div className="integrante-links">

            <a
              href="https://github.com/Nezio22"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-nezio-9971b0392/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="integrante-card">

          <img
            src={julia}
            alt="Júlia Rodrigues"
            className="integrante-foto"
          />

          <h2>Júlia Rodrigues</h2>

          <p>RM: 571244</p>

          <p>Turma: 1TDSPO</p>

          <p>Função: Designer</p>

          <div className="integrante-links">

            <a
              href="https://github.com/juliaraalmeida77-ux"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/júlia-rodrigues-9147593a7/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Integrantes;