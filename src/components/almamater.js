import "../App.css";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Almamater(){
  return(
    <div id="almamater" className="text-center">
      <Container>
      <br/>
      <h3 className="section-title">Alma mater</h3>
      <Row className="almamater-row" lg={2} md={1}>
        <Col><Card className="shadow qual-card">
          <Card.Body>
            <Card.Title>Master of Computer Applications (2019-22)</Card.Title>
            <Card.Subtitle>K.J. Somaiya Institute of Management</Card.Subtitle>
            <hr/>
            <Row>
              <Col><span className="mb-2 text-muted">CGPA :</span> <b>9.14</b>&nbsp;/&nbsp;10</Col>
              <Col><span className="mb-2 text-muted">Grade :</span> <b>A+</b></Col>
            </Row>
          </Card.Body>
        </Card></Col>
        <Col><Card className="shadow qual-card">
          <Card.Body>
            <Card.Title>Bachelor of Science in Information Technology (2016-19)</Card.Title>
            <Card.Subtitle>Ramniranjan Jhunjhunwala College</Card.Subtitle>
            <hr/>
            <Row>
              <Col><span className="mb-2 text-muted">CGPA :</span> <b>8.42</b>&nbsp;/&nbsp;10</Col>
              <Col><span className="mb-2 text-muted">Grade :</span> <b>A</b></Col>
            </Row>
          </Card.Body>
        </Card></Col>
          <Col><Card className="shadow qual-card">
          <Card.Body>
            <Card.Title>H.S.C. (2016)</Card.Title>
            <Card.Subtitle>MSBSHSE</Card.Subtitle>
            <Card.Subtitle>Ramniranjan Jhunjhunwala College</Card.Subtitle>
            <hr/>
            <Row>
              <Col><span className="mb-2 text-muted">Aggregate :</span> <b>70.62</b>&nbsp;/&nbsp;100</Col>
              <Col><span className="mb-2 text-muted">Grade :</span> <b>A</b></Col>
            </Row>
          </Card.Body>
        </Card></Col>
      <Col>  <Card className="shadow qual-card">
          <Card.Body>
            <Card.Title>S.S.C. (2014)</Card.Title>
            <Card.Subtitle>MSBSHSE</Card.Subtitle>
            <Card.Subtitle>Hindi High School</Card.Subtitle>
            <hr/>
            <Row>
              <Col><span className="mb-2 text-muted">Aggregate :</span> <b>82.6</b>&nbsp;/&nbsp;100</Col>
              <Col><span className="mb-2 text-muted">Grade :</span> <b>A</b></Col>
            </Row>
          </Card.Body>
        </Card></Col>
        </Row>
        <hr/>
        <br/><br/><br/>

      </Container>
    </div>
  )
}
