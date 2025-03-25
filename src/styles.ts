import { createGlobalStyle } from "styled-components";

export const cores = {
  fundo: '#D3D3D3',
  verde: '#1E421E',
  preto: '#000',
  branco: '#fff',
  cinza: '	#D3D3D3'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  body{
    background-color: ${cores.fundo};
    color: ${cores.preto};
    font-family: "Roboto","Kanit", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }

  ul{list-style-type: none;}
  a{text-decoration: none;}
`
