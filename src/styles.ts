import { createGlobalStyle } from "styled-components";



export const cores = {
  escuro:{
    fundo: '#D3D3D3',
    verde: '#303952',
    preto: '#000',
    branco: '#fff',
    cinza: '	#D3D3D3'

  }
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body{
    background-color: ${cores.escuro.fundo};
    color: ${cores.escuro.preto};
    font-family: "Roboto","Kanit", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 1140px;
  }

  ul{list-style-type: none;}
  a{text-decoration: none; color:${cores.escuro.preto}}
`
