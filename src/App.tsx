import Hero from "./components/Hero"
import { cores, GlobalCss } from "./styles"
import Tecnologias from './components/HitoricoDeProjeto'
import AboutMe from "./components/Historia"
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import BtnMode from "./components/BtnMode";
import HistoricoProjetos from "./components/HitoricoDeProjeto";



function App() {

  const [temaAtual, setTemaAtual] = useState<"claro" | "escuro">("escuro");

  const alternarTema = () => {
    setTemaAtual(temaAtual === "claro" ? "escuro" : "claro");
  };
  return (
    <ThemeProvider theme={cores[temaAtual]}>
      <GlobalCss />
      <BtnMode temaAtual={temaAtual} alternarTema={alternarTema} />
      <Hero temaAtual={temaAtual} alternarTema={alternarTema} />
      <AboutMe temaAtual={temaAtual}/>
      <HistoricoProjetos temaAtual={temaAtual} alternarTema={alternarTema}/>
    </ThemeProvider>
  )
}

export default App
