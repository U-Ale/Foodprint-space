import { useState } from "react";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      <nav>
        <button onClick={() => setPagina("home")}>
          Home
        </button>

        <button onClick={() => setPagina("faq")}>
          FAQ
        </button>
      </nav>

      {pagina === "home" && <Home />}
      {pagina === "faq" && <FAQ />}
    </>
  );
}

export default App;