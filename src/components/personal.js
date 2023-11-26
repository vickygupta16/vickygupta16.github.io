import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";

export function Personal() {
  return (
    <div id="#personal" className="text-center">
      <h3>Personal</h3>
      <Container>
        <Row>
          <Col>
            <Image src={VG_3} rounded className="front-image" />
          </Col>
          <Col>2</Col>
        </Row>
      </Container>
    </div>
  );
}
