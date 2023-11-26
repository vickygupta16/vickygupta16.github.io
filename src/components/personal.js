import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";
import Table from 'react-bootstrap/Table';
import "../App.css";

export function Personal() {
  return (
    <div id="#personal" className="text-center">
      <Container>
        <Row>
          <Col>
            <Image src={VG_3} rounded className="front-image" />
          </Col>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>Email ID</td>
                  <td className="mail-link"><a href="mailto:vickygupta16599@gmail.com">vickygupta16599@gmail.com</a></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
