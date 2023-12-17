import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG from "../images/VG.png";
import Table from 'react-bootstrap/Table';
import "../App.css";
import Button from 'react-bootstrap/Button';
import Resume from "../resume/Vicky Gupta.pdf";

export function Personal() {
  return (
    <div id="personal" className="text-center">
      <Container>
        <h3 className="section-title">About me</h3>
        <Row>
          <Col xs={12} md={6} className={window.innerWidth < 1450 && "image-resp"}>
            <Image src={VG} className="front-image" />
          </Col>
          <Col xs={12} md={6}>
            <Card className="align-middle shadow-lg personal-card">
            <Card.Body>
              <Table className="personal-table" hover>
                <tbody>
                  <tr className="personal-table-row">
                    <td colspan="2">Hi, I am an Associate Software Engineer, working full time in FinTech organization since Jan 2022</td>
                  </tr>
                  <tr className="personal-table-row">
                    <td className="personal-content-title">Name</td>
                    <th className="personal-content-values">Vicky Gupta</th>
                  </tr>
                  <tr className="personal-table-row">
                    <td className="personal-content-title">Email</td>
                    <th className="personal-content-values"><a href="mailto:vickygupta16599@gmail.com" className="mail-link">vickygupta16599@gmail.com</a></th>
                  </tr>
                  <tr className="personal-table-row">
                    <td className="personal-content-title">Mobile</td>
                    <th className="personal-content-values"><a href="tel:+91 8879835947" className="mob">+91 8879835947</a></th>
                  </tr>
                  <tr className="personal-table-row">
                    <td className="personal-content-title">Date of Birth</td>
                    <th className="personal-content-values">16<sup>th</sup> May 1999</th>
                  </tr>
                  <tr className="personal-table-row">
                    <td className="personal-content-title">Location</td>
                    <th className="personal-content-values">Mumbai, India</th>
                  </tr>
                  <tr className="personal-table-row">
                    <td className="personal-content-title">Nationality</td>
                    <th className="personal-content-values">Indian</th>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button className="resume-btn"><a href={Resume} className="resume-link" target="_blank" rel="noreferrer">Download Resume</a></Button>
      </Container>
      <br/><br/><br/>
      <hr/>
    </div>
  );
}
