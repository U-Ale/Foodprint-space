function Contato() {
  return (
    <main>

      <h1>Contato</h1>

      <form>

        <div>
          <label>Nome</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <label>Mensagem</label>
          <textarea rows="5"></textarea>
        </div>

        <button>
          Enviar
        </button>

      </form>

    </main>
  );
}

export default Contato;