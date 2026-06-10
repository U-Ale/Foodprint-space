function Contato() {
  return (
    <main className="contato">

      <h1>Contato</h1>

      <p className="contato-texto">
        Entre em contato com a equipe Source Code para dúvidas,
        sugestões ou informações sobre o projeto.
      </p>

      <div className="contato-email">

        <h2>📧 Email da Source Code</h2>

        <p>
          sourcecodefiap@gmail.com
        </p>

      </div>

      <form className="contato-form">

        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
          />
        </div>

        <div>
          <label>Mensagem</label>
          <textarea
            rows="5"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>

        <button type="submit">
          Enviar Mensagem
        </button>

      </form>

    </main>
  );
}

export default Contato;