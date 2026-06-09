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

  const [estoque, setEstoque] = useState({
    ervilha: 850,
    soja: 720,
    micoproteina: 930,
    graoDeBico: 650
  });
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

<button
  onClick={() => {
    setPagina("home");
    setMenuAberto(false);
  }}
>
  Home
</button>

<button
  onClick={() => {
    setPagina("sobre");
    setMenuAberto(false);
  }}
>
  Sobre
</button>

<button
  onClick={() => {
    setPagina("producao");
    setMenuAberto(false);
  }}
>
  Produção
</button>
<button
  onClick={() => {
    setPagina("impressora");
    setMenuAberto(false);
  }}
>
  Impressora
</button>

<button
  onClick={() => {
    setPagina("faq");
    setMenuAberto(false);
  }}
>
  FAQ
</button>

<button
  onClick={() => {
    setPagina("contato");
    setMenuAberto(false);
  }}
>
  contato
</button>
<button
  onClick={() => {
    setPagina("integrantes");
    setMenuAberto(false);
  }}
>
  Integrantes
</button>

  </div>

</nav>

      {pagina === "home" && <Home />}
      {pagina === "faq" && <FAQ />}
      {pagina === "sobre" && <Sobre />}
      {pagina === "integrantes" && <Integrantes />}
      {pagina === "impressora" && (<Impressora estoque={estoque}setEstoque={setEstoque}/>)}
      {pagina === "producao" && (<Producao estoque={estoque} />)}
      {pagina === "contato" && <Contato />}
    
      
    </>
    )
}

export default App;