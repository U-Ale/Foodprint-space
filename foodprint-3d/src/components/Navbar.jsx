<nav className="navbar">

  <h2 className="logo">
    Source Code
  </h2>

  <button
    className="hamburguer"
    onClick={() => setMenuAberto(!menuAberto)}
  >
    ☰
  </button>

  <div className={`menu ${menuAberto ? "ativo" : ""}`}>

    <button onClick={() => {
      setPagina("home");
      setMenuAberto(false);
    }}>
      Home
    </button>

    <button onClick={() => {
      setPagina("sobre");
      setMenuAberto(false);
    }}>
      Sobre
    </button>

    <button onClick={() => {
      setPagina("producao");
      setMenuAberto(false);
    }}>
      Produção
    </button>

    <button onClick={() => {
      setPagina("impressora");
      setMenuAberto(false);
    }}>
      Impressora
    </button>

    <button onClick={() => {
      setPagina("faq");
      setMenuAberto(false);
    }}>
      FAQ
    </button>

    <button onClick={() => {
      setPagina("contato");
      setMenuAberto(false);
    }}>
      Contato
    </button>

    <button onClick={() => {
      setPagina("integrantes");
      setMenuAberto(false);
    }}>
      Integrantes
    </button>

  </div>

</nav>