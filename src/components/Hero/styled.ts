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
  width: 600px;
  height: 600px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    width: 80vw;      /* 80% da largura da tela */
    height: 80vw;     /* mesma altura, círculo mantido */
    max-width: 300px; /* nunca maior que 300px no celular */
    max-height: 300px;
  }
`;



export const NomePerfil = styled.h2<TextProps>`
  color: ${(props) => (props.isDarkMode ? cores.escuro.texto : cores.claro.texto)};
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
  color: ${(props) => (props.isDarkMode ? cores.escuro.texto : "#111")};
  /* outras propriedades */
  width: 100%;
  margin-top: 20px;
  text-align: justify;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const BtnPerfil = styled.button<{ isDarkMode: boolean }>`
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.isDarkMode ? cores.claro.texto : cores.escuro.texto)};
  border: 2px solid ${(props) => (props.isDarkMode ? cores.escuro.texto : cores.claro.texto)};
  a{
    color: ${(props) => (props.isDarkMode ? cores.escuro.texto : cores.claro.texto)};
  }
`;



