
import { FullScreenContainer } from '../../styles';


type ProjetosProps = {
  temaAtual: "claro" | "escuro";      // vem do App
  alternarTema: () => void;            // função do App
};

const HistoricoProjetos = ({temaAtual}: ProjetosProps ) => {
  const isDarkMode = temaAtual === "escuro";

  return (
      <FullScreenContainer isDarkMode={isDarkMode}>


      </FullScreenContainer>

  );
}

export default HistoricoProjetos;
