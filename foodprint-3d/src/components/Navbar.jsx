function Navbar({ pagina, setPagina }) {
  return (
    <nav className="navbar">

      <div className="logo">
        SOURCE CODE
      </div>

      <div className="nav-links">

        <button
          className={pagina === "home" ? "active" : ""}
          onClick={() => setPagina("home")}
        >
          Home
        </button>

        <button
          className={pagina === "impressora" ? "active" : ""}
          onClick={() => setPagina("impressora")}
        >
          Impressora
        </button>

        <button
          className={pagina === "faq" ? "active" : ""}
          onClick={() => setPagina("faq")}
        >
          FAQ
        </button>

        <button
          className={pagina === "contato" ? "active" : ""}
          onClick={() => setPagina("contato")}
        >
          Contato
        </button>

      </div>

    </nav>
  );
}

export default Navbar;