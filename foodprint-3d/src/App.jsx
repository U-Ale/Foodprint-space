import { useState } from "react";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Sobre from "./pages/Sobre";
import Integrantes from "./pages/Integrantes";
import Impressora from "./pages/Impressora";
import Producao from "./pages/Producao";
import Contato from "./pages/Contato";




function App() {
  const [pagina, setPagina] = useState("home");
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    
    <>
 
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

    <button onClick={() => setPagina("home")}>
      Home
    </button>

    <button onClick={() => setPagina("sobre")}>
      Sobre
    </button>

    <button onClick={() => setPagina("producao")}>
      Produção
    </button>

    <button onClick={() => setPagina("impressora")}>
      Impressora
    </button>

    <button onClick={() => setPagina("faq")}>
      FAQ
    </button>

    <button onClick={() => setPagina("contato")}>
      Contato
    </button>

    <button onClick={() => setPagina("integrantes")}>
      Integrantes
    </button>

  </div>

</nav>

      {pagina === "home" && <Home />}
      {pagina === "faq" && <FAQ />}
      {pagina === "sobre" && <Sobre />}
      {pagina === "integrantes" && <Integrantes />}
      {pagina === "impressora" && <Impressora />}
      {pagina === "producao" && <Producao />}
      {pagina === "contato" && <Contato />}
    
      
    </>
  );
}

export default App;