import styled, { createGlobalStyle } from "styled-components";



export const cores = {
  claro: {
    nome: "claro",
    background: "#ffffff",
    texto: "#000000",
    destaque: "#191970",
    fundo: "#fff"
  },
  escuro: {
    nome: "escuro",
    background: "#121212",
    texto: "#ffffff",
    destaque: "#00d1b2",
  },
};

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body{
    background-color: ${cores.claro.fundo};
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
  background: ${(props) => (props.isDarkMode ? "#1a1a1a" : "#f3f3f3")};
  color: ${(props) => (props.isDarkMode ? "#f3f3f3" : "#1a1a1a")};
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
export const FullScreenContainer = styled.div`
  width: 99vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.texto};
`;
