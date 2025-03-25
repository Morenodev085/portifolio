import Hero from "./components/Hero"
import NavBar from "./components/Nav"
import { GlobalCss } from "./styles"
import Tecnologias from './components/Tecnologia'



function App() {


  return (
    <>
      <GlobalCss />
      <NavBar />
      <Hero />
      <Tecnologias />
    </>
  )
}

export default App
