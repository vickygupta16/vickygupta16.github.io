import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

export function Skills() {
  const skillList = [
    {
      skill : "Microsoft Azure Data Factory",
      skilled : 80
    },
    {
      skill : "SQL",
      skilled : 40
    },
    {
      skill : "React JS, AgGrid",
      skilled : 35
    },
    {
      skill : "REST API",
      skilled : 50
    },
    {
      skill : ".NET MVC",
      skilled : 50
    },
    {
      skill : "C#, C++",
      skilled : 50
    },
    {
      skill : "HTML5, CSS3, JavaScript",
      skilled : 70
    },
    {
      skill : "jQuery, Bootstrap, Material UI",
      skilled : 60
    },
    {
      skill : "Git, Figma, Postman",
      skilled : 35
    },
    {
      skill : "PHP, Laravel MVC",
      skilled : 20
    },
    {
      skill : "Microsoft Office (Visio, Word, Excel, Powerpoint), Jira",
      skilled : 60
    },
    {
      skill : "Work ethic, Teamwork, Integrity",
      skilled : 80
    },
  ]
    return (
      <div id="skills">
        <Container>
          <h3 className="section-title text-center">Skills</h3>
          <Row className="skill-row">
            {skillList.map((item, index) => {
                return (
                  <Col xs={12} md={6} key={index}>
                    <p className="skill-title">{item.skill}</p>
                    <ProgressBar now={item.skilled} visuallyHidden className="skill-bar" />
                  </Col>
                )
            })}
          </Row>
        </Container>
        <br/><br/><br/>
        <hr/>
    </div>
  );
}
