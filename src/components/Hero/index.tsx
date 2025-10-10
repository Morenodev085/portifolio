import {

  BackgroundImage,
  Overlay,
  ContentWrapper,
  Perfil,
  ConteinerInforPerfil,
  NomePerfil,
  BtnPerfil
} from "./styled";

import foto from "../../assets/img/foto.jpeg";
import { FullScreenContainer } from "../../styles";

type HeroProps = {
  temaAtual: "claro" | "escuro";      // vem do App
  alternarTema: () => void;            // função do App
};

const Hero = ({ temaAtual }: HeroProps) => {
  const isDarkMode = temaAtual === "escuro";

  return (
    <FullScreenContainer>
      <BackgroundImage isDarkMode={isDarkMode} />
      <Overlay />

      <ContentWrapper>
        <Perfil src={foto} alt="Foto de Perfil" />

        <ConteinerInforPerfil>
          <NomePerfil isDarkMode={isDarkMode}>
            Desenvolvedor Full Stack Java
          </NomePerfil>

          <BtnPerfil isDarkMode={isDarkMode}>
            <a
              href="https://github.com/Morenodev085"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </BtnPerfil>

          <BtnPerfil isDarkMode={isDarkMode}>
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
