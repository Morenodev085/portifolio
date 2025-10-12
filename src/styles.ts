import styled, { createGlobalStyle } from "styled-components";



export const cores = {
  claro: {
    nome: "claro",
    background: "#f1f7f6",
    texto: "#021b1a",
    destaque: "#03624C",
    preto: "#000"
  },
  escuro: {
    nome: "escuro",
    background: "#032221",
    texto: "#aacbc4",
    destaque: "#2cc295",
    branco: "#f1f7f6"
  },
};

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body{
    background-color: ${cores.claro.background};
    color: ${cores.claro.texto};
    font-family: "Roboto","Kanit", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 1140px;
  }

  ul{list-style-type: none;}
  a{text-decoration: none; color:${cores.claro.texto}}

`

export const BtnMode = styled.button<{ isDarkMode: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.isDarkMode ? cores.escuro.background  : cores.claro.background)};
  color: ${(props) => (props.isDarkMode ? cores.claro.background : cores.escuro.background)};
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 3;

  &:hover {
    transform: scale(1.1) rotate(10deg);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    top: 24px;
    left: 24px;
  }
`;
export const FullScreenContainer = styled.div<{ isDarkMode: boolean }>`
  width: 99vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background-color: ${(props) => (props.isDarkMode ? cores.claro.background : cores.escuro.background)};;
`;
