import styled from "styled-components";
import { cores } from "../../styles";

interface AboutContainerProps {
  isDarkMode: boolean;
}
interface TextProps {
  isDarkMode: boolean;
}

export const TituloAbout =  styled.h2<TextProps>`
color: ${(props) => (props.isDarkMode ? cores.claro.destaque : cores.escuro.destaque)};
font-size: 4rem;
  font-family: "BBH Sans Bartle", sans-serif;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`

export const TextMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 612px;

  @media (max-width: 767px) {
    margin-top: 8px; /* aproxima do container superior */
    width: 90%;       /* opcional: deixa responsivo */
  }
`;

export const PMe = styled.p<TextProps>`
font-size: 1.6rem;
font-weight: 300;
color: ${(props) => (props.isDarkMode ? cores.claro.texto : cores.escuro.texto)};
  @media (max-width: 767px) {
    margin-top: 8px; /* aproxima do container superior */
    width: 90%;       /* opcional: deixa responsivo */
    font-size: 1.2rem
  }
`

export const FotoMe = styled.img`
height: 500px;
width: 500px;
border-radius: 50%;

@media (max-width: 767px) {
  height: 250px;
  width: 250px;
}
`
export const AboutContainer = styled.div<AboutContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;        /* espaço entre texto e imagem */
  padding: 20px;
  background-color: ${(props) => (props.isDarkMode ?    cores.claro.background : cores.escuro.background )};

  @media (max-width: 767px) {
    flex-direction: column; /* empilha no celular */
    text-align: justify;
  }
`;

