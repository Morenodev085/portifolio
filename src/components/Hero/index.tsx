import { FullScreenContainer,
    Perfil,
    InfoPerfil,
    BtnPerfil,
    ConteinerInforPerfil,
    NomePerfil} from "./styles";
import { FaLinkedin, FaGithub  } from "react-icons/fa";




const Hero = () => {
  return (
    <FullScreenContainer>
      <Perfil  src="https://placehold.co/400x400" alt="Foto de Perfil" />
      <ConteinerInforPerfil >
        <NomePerfil>Moreno Almeida Ferreira</NomePerfil>
      <InfoPerfil>
        Desenvolvedor Full Stack JavaScript em formação pela EBAC – Escola Britânica de Artes Criativas e Tecnologia.
        Profissional com perfil criativo. Durante minha primeira formação, produzi aulas e palestras, além de desenvolver sites para empresas de relevância cultural.
        Esses projetos me proporcionaram uma valiosa experiência na criação de conteúdo educacional e na implementação de soluções digitais que atendem às necessidades específicas de cada cliente.
      </InfoPerfil>
      <BtnPerfil>github <FaGithub/></BtnPerfil>
      <BtnPerfil>linkedin <FaLinkedin/></BtnPerfil>
      </ConteinerInforPerfil>
    </FullScreenContainer>
  );
}

export default Hero;
