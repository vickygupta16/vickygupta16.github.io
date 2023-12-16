import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";
import Table from 'react-bootstrap/Table';
import "../App.css";
import Button from 'react-bootstrap/Button';
import TTGCaptures from "../project-captures/TimeTableGenerator-ASPDOTNET-DB_UI.pdf";
import BCACaptures from "../project-captures/BudgetaryControlApp-Android.pdf";
import CRSCaptures from "../project-captures/CarRentalSystem.pdf";
import MDSCaptures from "../project-captures/MealDeliverySystem-ASPDOTNET-DB_UI.pdf";
import EHSCaptures from "../project-captures/EventHandlingApplication-ASPDOTNET.pdf";
import PCSCaptures from "../project-captures/PotholeComplaintSystem-Laravel-DB_UI.pdf";

export function Projects() {
  const projectsList = [
    {
      title : "ToDo App",
      year : 2021,
      type : "Static React App",
      tech : "ReactJS, HTML5, CSS3, Bootstrap",
      repoLink : "https://github.com/vickygupta16/ToDoApp/tree/gh-pages",
      liveLink : "https://vickygupta16.github.io/ToDoApp/",
      captures : null,
    },
    {
      title : "TicTacToe",
      year : 2021,
      type : "Static Web Page",
      tech : "HTML5, CSS3, JavaScript, Bootstrap",
      repoLink : "https://github.com/vickygupta16/TicTacToe",
      liveLink : "https://vickygupta16.github.io/TicTacToe/",
      captures : null,
    },
    {
      title : "Password Generator",
      year : 2021,
      type : "Static Web Page",
      tech : "HTML5, CSS3, JavaScript, Bootstrap",
      repoLink : "https://github.com/vickygupta16/PasswordGenerator",
      liveLink : "https://vickygupta16.github.io/PasswordGenerator/",
      captures : null,
    },
    {
      title : "Time Table Generator",
      year : 2020,
      type : "Web Application",
      tech : "ASP.NET MVC, C#, MSSQL",
      repoLink : "https://github.com/vickygupta16/TimeTableGenerator",
      liveLink : null,
      captures : TTGCaptures,
    },
    {
      title : "Budgetary Control App",
      year : 2020,
      type : "Android Application",
      tech : "Java, Firebase",
      repoLink : "https://github.com/vickygupta16/BudgetaryControlApp",
      liveLink : null,
      captures : BCACaptures,
    },
    {
      title : "Car Rental System",
      year : 2020,
      type : "Website Application",
      tech : "PHP, MySQL, HTML5, CSS3, Bootstrap",
      repoLink : "https://github.com/vickygupta16/CarRentalSystem",
      liveLink : null,
      captures : CRSCaptures,
    },
    {
      title : "Meal Delivery System",
      year : 2019,
      type : "Website Application",
      tech : "ASP.NET MVC, C#, MSSQL",
      repoLink : "https://github.com/vickygupta16/MealDeliverySystem",
      liveLink : null,
      captures : MDSCaptures,
    },
    {
      title : "Event Handling Application",
      year : 2019,
      type : "Website Application",
      tech : "ASP.NET MVC, C#, MSSQL",
      repoLink : "https://github.com/vickygupta16/EventHandlingWebApplication",
      liveLink : null,
      captures : EHSCaptures,
    },
    {
      title : "Pothole Complaint System",
      year : 2018,
      type : "Website Application",
      tech : "PHP, Laravel, MySQL",
      repoLink : "https://github.com/vickygupta16/PotholeComplaintSystem",
      liveLink : null,
      captures : PCSCaptures,
    },
  ]
  return (
    <div id="projects">
      <Container>
        <h3 className="section-title text-center">Academic Projects</h3>
        <Row className="projects-row">
          {projectsList.map((item, index) => {
            return (
              <Col key={index} xs={12} md={4}>
                <Card className="projects-card shadow">
                  <Card.Body className="projects-card-body">
                    <div className="project-header">
                      <h6>{item.title}</h6>
                      <p className="text-muted">{item.year}</p>
                    </div>
                    <p className="text-muted project-type">{item.type}</p>
                    <p className="project-tech">{item.tech}</p>
                    <div className="project-footer">
                      <Button className="repo-button"><a className="repo-link" href={item.repoLink} target="_blank">GitHub Repo</a></Button>
                      {item.liveLink !== null ?
                        <Button className="live-button"><a className="live-link" href={item.liveLink} target="_blank">Live</a></Button>
                        :
                        <Button className="captures-button"><a className="captures-link" href={item.captures} target="_blank">Captures</a></Button>
                      }
                    </div>
                  </Card.Body>
                </Card>
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
