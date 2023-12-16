import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";
import Table from 'react-bootstrap/Table';
import "../App.css";
import UIUXDesign from "../certifications/UI-UX Design Specialization.pdf";
import SEDOTNET from "../certifications/Software Engineering .NET Specialization (NIIT).pdf";
import IntroHTML5 from "../certifications/Introduction to HTML5.pdf";
import IntroCSS3 from "../certifications/Introduction to CSS3.pdf";
import IntroJS from "../certifications/Interactivity with JavaScript.pdf";
import HTMLCSSJS from "../certifications/HTML,CSS and JS for Web Developers.pdf";
import IntroBootStrap4 from "../certifications/FrontEnd WebUI Frameworks and Tools-Bootstrap4.pdf";
import BootStrapjQuery from "../certifications/Bootstrap and jQuery-Certification course for Beginners.pdf";
import JSjQuery from "../certifications/Animation with JavaScript and jQuery.pdf";
import ASRD from "../certifications/Advanced Styling with Responsive Design.pdf";
import AzureSQL from "../certifications/Microsoft Azure SQL.pdf";

export function Certifications() {
  const specializationList = [
    {
      name : "UI / UX Design (Coursera)",
      fileName : UIUXDesign
    },
    {
      name : "Software Engineering .NET Specialization (NIIT)",
      fileName : UIUXDesign
    },
  ]
  const courseList = [
    {
      name : "Introduction to HTML5 (Coursera)",
      fileName : IntroHTML5
    },
    {
      name : "Introduction to CSS3 (Coursera)",
      fileName : IntroCSS3
    },
    {
      name : "Interactivity with JavaScript (Coursera)",
      fileName : IntroJS
    },
    {
      name : "HTML,CSS and JS for Web Developers (Coursera)",
      fileName : HTMLCSSJS
    },
    {
      name : "FrontEnd WebUI Frameworks and Tools-Bootstrap4 (Coursera)",
      fileName : IntroBootStrap4
    },
    {
      name : "Bootstrap and jQuery-Certification course for Beginners (Udemy)",
      fileName : BootStrapjQuery
    },
    {
      name : "Animation with JavaScript and jQuery (Coursera)",
      fileName : JSjQuery
    },
    {
      name : "Advanced Styling with Responsive Design (Coursera)",
      fileName : ASRD
    },
    {
      name : "Microsoft Azure SQL (Coursera)",
      fileName : AzureSQL
    },
  ]
  return(
      <div id="certifications" className="text-center">
        <Container>
          <h3 className="section-title">Certifications</h3>
          <h5 className="certification-sub-header">Specialization</h5>
          <Row className="certifications-row">
            {specializationList.map((item, index) => {
              return (
                <Col key={index} xs={12} md={6} lg={4}>
                  <Card className="specialization-card shadow">
                    <Card.Body className="profession-card-body">
                      <Card.Title className="certificate-title">{item.name}</Card.Title>
                      <Button className="pdf-button"><a href={UIUXDesign} className="pdf-link" target="_blank">View PDF</a></Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <h5 className="certification-sub-header">Course</h5>
          <Row className="certifications-row">
            {courseList.map((item, index) => {
              return (
                <Col key={index} xs={12} md={6} lg={4}>
                  <Card className="course-card shadow">
                    <Card.Body className="course-card-body">
                      <Card.Title className="certificate-title">{item.name}</Card.Title>
                      <Button className="pdf-button"><a href={UIUXDesign} className="pdf-link" target="_blank">View PDF</a></Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <br/>
          <hr/>
      </Container>
    </div>
  )
}
