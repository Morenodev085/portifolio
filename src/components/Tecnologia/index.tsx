import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cores } from '../../styles';
import { CardTEcnologia, ListaCard, TituloTec } from './styles';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Tecnologias = () => {
  return (
    <Container style={{ backgroundColor: cores.escuro.cinza }} className="py-5">
      {/* Título */}
      <Row className="d-flex justify-content-center mb-4">
        <Col className="d-flex justify-content-center">
          <TituloTec>Tecnologias</TituloTec>
        </Col>
      </Row>
      <ListaCard>
        <CardTEcnologia>
          <IoLogoJavascript />
          <h4>Javascript</h4>
        </CardTEcnologia>
        <CardTEcnologia>
          <FaReact />
          <h4>React</h4>
        </CardTEcnologia>
        <CardTEcnologia>
          <SiTypescript />
          <h4>Typescript</h4>
        </CardTEcnologia>
      </ListaCard>
    </Container>

  );
}

export default Tecnologias;
