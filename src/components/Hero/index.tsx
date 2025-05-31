import {
  FullScreenContainer,
  Perfil,
  InfoPerfil,
  BtnPerfil,
  ConteinerInforPerfil,
  NomePerfil,
  BtnMode
} from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import foto from "../../assets/img/foto.jpeg"
import { FaSun } from "react-icons/fa";



const Hero = () => {
  return (
    <FullScreenContainer>
        <BtnMode>
      <a className="btn btn-outline-light" role="button" ><FaSun /></a>
        </BtnMode>
      <Perfil src={foto} alt="Foto de Perfil" />
      <ConteinerInforPerfil >
        <NomePerfil>Moreno Almeida Ferreira</NomePerfil>
        <InfoPerfil>
          Desenvolvedor Full Stack JavaScript em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia.
          Profissional com perfil criativo. Durante minha primeira formação, produzi aulas e palestras, além de desenvolver sites para empresas de relevância cultural.
          Esses projetos me proporcionaram uma valiosa experiência na criação de conteúdo educacional e na implementação de soluções digitais que atendem às necessidades específicas de cada cliente.
        </InfoPerfil>
        <BtnPerfil><a href="https://github.com/Morenodev085" >github</a><FaGithub /></BtnPerfil>
        <BtnPerfil><a href="https://www.linkedin.com/in/morenoalmeida/">linkedin</a><FaLinkedin /></BtnPerfil>
      </ConteinerInforPerfil>
    </FullScreenContainer>
  );
}

export default Hero;
