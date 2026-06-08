import { useState } from "react";

function FAQ() {

  const [aberto, setAberto] = useState(null);

  return (
    <main className="faq">

      <h1>Perguntas Frequentes</h1>

      <div className="faq-container">

        <div className="faq-item">
          <button
            className="faq-pergunta"
            onClick={() => setAberto(aberto === 1 ? null : 1)}
          >
            O que é a Source Code?
          </button>

          {aberto === 1 && (
            <p className="faq-resposta">
              Uma startup focada em soluções tecnológicas para
              alimentação sustentável em missões espaciais.
            </p>
          )}
        </div>

        <div className="faq-item">
          <button
            className="faq-pergunta"
            onClick={() => setAberto(aberto === 2 ? null : 2)}
          >
            Como funciona a impressora 3D?
          </button>

          {aberto === 2 && (
            <p className="faq-resposta">
              Ela utiliza matérias-primas vegetais para produzir
              refeições personalizadas através de impressão 3D.
            </p>
          )}
        </div>

        <div className="faq-item">
          <button
            className="faq-pergunta"
            onClick={() => setAberto(aberto === 3 ? null : 3)}
          >
            Quais ingredientes são utilizados?
          </button>

          {aberto === 3 && (
            <p className="faq-resposta">
              Soja, ervilha, micoproteína e grão-de-bico.
            </p>
          )}
        </div>

        <div className="faq-item">
          <button
            className="faq-pergunta"
            onClick={() => setAberto(aberto === 4 ? null : 4)}
          >
            Qual é o objetivo da plataforma?
          </button>

          {aberto === 4 && (
            <p className="faq-resposta">
              Garantir autonomia alimentar para astronautas em
              missões espaciais de longa duração.
            </p>
          )}
        </div>

      </div>

    </main>
  );
}

export default FAQ;