import "../App.css";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Almamater(){
  return(
    <div id="almamater" className="text-center">
      <Container>
      <h3 className="section-title">Alma mater</h3>
      <Row className="almamater-row">
          <Col xs={12} md={6}>
            <Card className="shadow qual-card">
              <Card.Body>
                <Card.Title className="qual-title">Master of Computer Applications <span className="nowrap-texts">(2019-22)</span></Card.Title>
                <Card.Subtitle className="qual-subtitle">K.J. Somaiya Institute of Management</Card.Subtitle>
                <hr/>
                <Row>
                  <Col><span className="mb-2 text-muted nowrap-texts">CGPA :</span> <b>9.14</b>&nbsp;/&nbsp;10</Col>
                  <Col><span className="mb-2 text-muted nowrap-texts">Grade :</span> <b>A+</b></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="shadow qual-card">
              <Card.Body>
                <Card.Title className="qual-title">Bachelor of Science in Information Technology <span className="nowrap-texts">(2016-19)</span></Card.Title>
                <Card.Subtitle className="qual-subtitle">Ramniranjan Jhunjhunwala College</Card.Subtitle>
                <hr/>
                <Row>
                  <Col><span className="mb-2 text-muted">CGPA :</span> <b>8.42</b>&nbsp;/&nbsp;10</Col>
                  <Col><span className="mb-2 text-muted nowrap-texts">Grade :</span> <b>A</b></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="shadow qual-card">
              <Card.Body>
                <Card.Title className="qual-title">H.S.C. <span className="nowrap-texts">(2016)</span></Card.Title>
                <Card.Subtitle className="qual-subtitle">Ramniranjan Jhunjhunwala College</Card.Subtitle>
                <hr/>
                <Row>
                  <Col><span className="mb-2 text-muted nowrap-texts">Aggregate :</span> <b>70.62</b>&nbsp;/&nbsp;100</Col>
                  <Col><span className="mb-2 text-muted nowrap-texts">Grade :</span> <b>A</b></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="shadow qual-card">
              <Card.Body>
                <Card.Title className="qual-title">S.S.C. <span className="nowrap-texts">(2014)</span></Card.Title>
                <Card.Subtitle className="qual-subtitle">Hindi High School</Card.Subtitle>
                <hr/>
                <Row>
                  <Col><span className="mb-2 text-muted nowrap-texts">Aggregate :</span> <b>82.6</b>&nbsp;/&nbsp;100</Col>
                  <Col><span className="mb-2 text-muted nowrap-texts">Grade :</span> <b>A</b></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <hr/>
      </Container>
    </div>
  )
}
