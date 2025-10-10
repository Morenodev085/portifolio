import { FullScreenContainer } from "../../styles";
import { TituloAbout, TextMe, PMe, FotoMe, AboutContainer } from "./styled";
import foto from '../../assets/img/FOTOS - RODADA DE NEGÓCIOS (84 de 98).jpg'

type AboutMeProps = {
  temaAtual: "claro" | "escuro"
};


const AboutMe = ({ temaAtual }: AboutMeProps) => {
  const isDarkMode = temaAtual === "escuro";

  return (
    <>
      <FullScreenContainer>
        <AboutContainer isDarkMode={isDarkMode}>
          <TextMe>
            <TituloAbout isDarkMode={isDarkMode}>About me</TituloAbout>
            <PMe isDarkMode={isDarkMode} >Desenvolvedor Full Stack JavaScript em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia.
              Profissional com perfil criativo. Durante minha primeira formação, produzi aulas e palestras, além de desenvolver
              sites para empresas de relevância cultural. Esses projetos me proporcionaram uma valiosa experiência na criação de
              conteúdo educacional e na implementação de soluções digitais que atendem às necessidades específicas de cada cliente.</PMe>
          </TextMe>
          <FotoMe src={foto} alt="" />
        </AboutContainer>
      </FullScreenContainer>
    </>
  )
}

export default AboutMe;
