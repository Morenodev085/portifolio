import styled from "styled-components";
import { cores } from "../../styles";

export const TituloTec = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${cores.verde};
  font-size: 3rem;

  @media (max-width: 767px) {

  }
`
export const CardTEcnologia = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ccc;
  font-size: xx-large;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
`

export const ListaCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 30px;
  justify-content: center;
  height: 50vh;
  margin-top: 60px;
  gap: 40px;


`
