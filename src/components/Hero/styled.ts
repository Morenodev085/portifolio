import styled from "styled-components";
import { cores } from "../../styles";
import fundo from "../../assets/img/fundo.jpg";


interface BackgroundImageProps {
  isDarkMode: boolean;
}
interface TextProps {
  isDarkMode: boolean;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;

  filter: ${(props) => (props.isDarkMode ? "none" : "invert(1)")};
  z-index: 0;
`;


/* ✅ Overlay escuro opcional */
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

/* ✅ Container principal */
export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

/* ✅ Conteúdo acima da imagem */
export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

/* Outros estilos mantidos... */

export const Perfil = styled.img`
  border-radius: 40%;
  width: 384px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin: 40px;
  }

  @media (max-width: 767px) {
    width: 80%;
    max-width: 300px;
    margin: 0;
  }
`;

export const NomePerfil = styled.h2<TextProps>`
  color: ${(props) => (props.isDarkMode ? cores.escuro.branco : cores.escuro.cinza)};
  font-size: 3.8rem;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
  font-size: 1.8rem;
  text-align: center;
  }
`;

export const ConteinerInforPerfil = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 10px 20px;
  padding: 20px;

  @media (max-width: 767px) {
    width: 90%;
  }
`;


export const InfoPerfil = styled.p<TextProps>`
  color: ${(props) => (props.isDarkMode ? cores.escuro.branco : "#111")};
  /* outras propriedades */
  width: 100%;
  margin-top: 20px;
  text-align: justify;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const BtnPerfil = styled.button`
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`;

export const BtnMode = styled.button<TextProps>`
  cursor: pointer;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#111")};
  border: 4px solid ${(props) => (props.isDarkMode ? "#fff ": "#111")};
  width: 42px;
  padding: 8px;
  border-radius: 32px;
  top: 0;
  left: 0;
  position: absolute;
  margin-top: 32px;
  margin-left: 32px;
  z-index: 3;
  background: transparent;
  font-size: 16px;
`;
