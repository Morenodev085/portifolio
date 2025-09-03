import { useState } from "react";
import { FaSun } from "react-icons/fa";
import {
  FullScreenContainer,
  BackgroundImage,
  Overlay,
  ContentWrapper,
  BtnMode,
  Perfil,
  ConteinerInforPerfil,
  NomePerfil,
  // InfoPerfil,
  BtnPerfil
} from "./styled";

import foto from "../../assets/img/foto.jpeg";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <FullScreenContainer>
      <BackgroundImage isDarkMode={isDarkMode} />
      <Overlay />

      <BtnMode
        isDarkMode={isDarkMode}
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Alternar tema"
      >
        <FaSun />
      </BtnMode>

      <ContentWrapper>
        <Perfil src={foto} alt="Foto de Perfil" />

        <ConteinerInforPerfil>
          <NomePerfil isDarkMode={isDarkMode}>
            Desenvolvedor Full Stack Java
          </NomePerfil>

          {/* <InfoPerfil isDarkMode={isDarkMode}>
            Desenvolvedor Full Stack JavaScript em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia.
            Profissional com perfil criativo. Durante minha primeira formação, produzi aulas e palestras, além de desenvolver
            sites para empresas de relevância cultural. Esses projetos me proporcionaram uma valiosa experiência na criação de
            conteúdo educacional e na implementação de soluções digitais que atendem às necessidades específicas de cada cliente.
          </InfoPerfil> */}

          <BtnPerfil>
            <a
              href="https://github.com/Morenodev085"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </BtnPerfil>

          <BtnPerfil>
            <a
              href="https://www.linkedin.com/in/morenoalmeida/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </BtnPerfil>
        </ConteinerInforPerfil>
      </ContentWrapper>
    </FullScreenContainer>
  );
};

export default Hero;
