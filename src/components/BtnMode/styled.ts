import styled from "styled-components";

export const BtnModeB = styled.button<{ temaAtual: "claro" | "escuro" }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${({ temaAtual }) => (temaAtual === "escuro" ? "#1a1a1a" : "#f3f3f3")};
  color: ${({ temaAtual }) => (temaAtual === "escuro" ? "#f3f3f3" : "#1a1a1a")};
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
