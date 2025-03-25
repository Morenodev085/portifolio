import styled from "styled-components";
import { cores } from "../../styles";

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${cores.verde};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Permite rolagem vertical */

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Perfil = styled.img`
  border-radius: 50%;
  width: 384px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 40px;
    margin: 40px 40px;
  }

  @media (max-width: 767px) {
    width: 80%; /* Ajusta a largura para telas pequenas */
    max-width: 300px; /* Evita que a imagem fique muito grande */
    margin-bottom: 20px;
    margin-right: 0;
    margin: 0;
  }
`;

export const NomePerfil = styled.h2`
  color: ${cores.cinza};
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
`;

export const ConteinerInforPerfil = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 10px 20px;

  @media (max-width: 767px) {
    width: 90%; /* Ajusta a largura para telas pequenas */
  }
`;

export const InfoPerfil = styled.p`
  width: 100%;
  margin-top: 20px;
  color: ${cores.cinza};
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
`;
