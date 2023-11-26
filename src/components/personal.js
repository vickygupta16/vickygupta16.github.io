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
            <div className="align-middle">
            <Table className="" hover>
              <tbody>
                <tr>
                  <td colspan="2">Hi, I am an Associate Software Engineer, working full time in FinTech organization since Jan 2022</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>16<sup>th</sup> May 1999</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><a href="mailto:vickygupta16599@gmail.com" className="mail-link">vickygupta16599@gmail.com</a></td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Mumbai, India</td>
                </tr>
              </tbody>
            </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
