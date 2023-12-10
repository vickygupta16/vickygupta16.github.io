import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";
import Table from 'react-bootstrap/Table';
import "../App.css";
import moment from "moment";

export function Profession(){
  var ivpStartDate = moment("2022-01-11","YYYY-MM-DD");
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const separator = "-";
  var fullDate = moment(`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${ivpStartDate < 10 ? `0${date}` : `${date}`}`,"YYYY-MM-DD");
  const diffDate = moment.duration(fullDate.diff(ivpStartDate));
  const ivpTenureYears = diffDate.years() > 1 ? diffDate.years() + " years " : diffDate.years() + " year ";
  const ivpTenureMonths = diffDate.months() > 1 ? diffDate.months() + " months" : diffDate.months() + "month";
  const ivpTenure = ivpTenureYears + ivpTenureMonths;
  return (
    <div id="profession" className="text-center">
      <Container>
        <h3>Profession</h3>
        <div class="row profession-row">
          <Row>
            <Col xs={12} md={6}>
              <Card className="profession-card">
                <Card.Body>
                  <Card.Title>
                    Associate Software Engineer
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Indus Valley Partners</Card.Subtitle>
                  <Card.Text>
                    Jan 2022 - Present : {ivpTenure}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="profession-card">
                <Card.Body>
                  <Card.Title>
                    Associate Software Engineer
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Indus Valley Partners</Card.Subtitle>
                  <Card.Text>
                    Jan 2022 - Present : {ivpTenure}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
