import { FaSun, FaMoon } from "react-icons/fa";
import { BtnModeB } from "./styled";

type BtnModeProps = {
  temaAtual: "claro" | "escuro";
  alternarTema: () => void;
};

const BtnMode = ({ temaAtual, alternarTema }: BtnModeProps) => {
  return (
    <BtnModeB temaAtual={temaAtual} onClick={alternarTema} aria-label="Alternar tema">
      {temaAtual === "escuro" ? <FaMoon /> : <FaSun />}
    </BtnModeB>
  );
};

export default BtnMode;
