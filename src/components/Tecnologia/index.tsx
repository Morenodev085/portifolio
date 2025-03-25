import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cores } from '../../styles';
import { TituloTec } from './styles';
import { IoLogoJavascript } from "react-icons/io5";

const Tecnologias = () => {
  return (
    <Container style={{ backgroundColor: cores.cinza }}>
      <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <TituloTec>Tecnologias</TituloTec>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <p>javascreipt</p>
          <IoLogoJavascript />
        </Col>
        <Col xs={6} md={4} >2 of 3</Col>
      </Row>
    </Container>
  );
}

export default Tecnologias;
