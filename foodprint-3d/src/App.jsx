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

  return (
    <>
      <nav>
        <button onClick={() => setPagina("contato")}>
         Contato
        </button>

        <button onClick={() => setPagina("home")}>
          Home
        </button>

         <button onClick={() => setPagina("impressora")}>
          Impressora
         </button>

        <button 
        onClick={() => setPagina("sobre")}>
          Sobre
        </button>

        <button 
        onClick={() => setPagina("integrantes")}>
         Integrantes
        </button> 
         
        <button
         onClick={() => setPagina("faq")}>
          FAQ
        </button>
        <button
         onClick={() => setPagina("producao")}>
          Produção
        </button>
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