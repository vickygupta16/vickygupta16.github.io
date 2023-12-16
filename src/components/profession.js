import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";
import Table from 'react-bootstrap/Table';
import "../App.css";
import moment from "moment";
import IVPLogo from "../images/IVP_logo2.jpg";

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
  const profSkills = [
    { skill : "Microsoft Visio" },
    { skill : "SQL" },
    { skill : "React JS" },
    { skill : ".NET MVC" },
    { skill : "C#" },
    { skill : "Microsoft Azure Data Factory" },
    { skill : "Material UI" },
    { skill : "Figma" },
    { skill : "Postman" },
    { skill : "Git" },
  ]
  return (
    <div id="profession">
      <Container>
        <h3 className="text-center section-title">Profession</h3>
          <Card className="profession-card shadow">
            <Card.Body className="profession-card-body">
              <Card.Title className="summary">
                Logical Software Engineer with close to 2 years of experience.
                Skilled in development, testing & debugging. Strong work-ethic, communicator, proactive
                and multitasker with organized, detail-oriented approach.
                Conducts comprehensive analysis to identify data/process failure issues.
                Proficient in documentation and Solution deployments.
              </Card.Title>
            </Card.Body>
          </Card>
          <br/>
          <Card className="profession-card shadow">
            <Card.Body className="profession-card-body">
              <Row>
                <Col xs={12} md={6}>
                  <Card.Title>
                    Associate Software Engineer
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Indus Valley Partners &#x2022; Full Time</Card.Subtitle>
                  <Card.Text>
                    Jan 2022 - Present : {ivpTenure}
                  </Card.Text>
                </Col>
                <Col className="text-end" xs={12} md={6}>
                  <a href="https://www.ivp.in/"><Image src={IVPLogo} className="ivp-logo"/></a>
                </Col>
              </Row>
              <br/>
              <ListGroup numbered className="prof-exp">
                <ListGroup.Item>
                  Contributed in several modules by developing, testing and deploying - Tables, Stored Procedures, Views, Azure Data Factory Pipelines, .NET code, React code.
                  <br/>
                  <ul>
                    <li>Created / Modified numerous tables for holding qualitative data and quantitative data.</li>
                    <li>Modified / Developed and optimized Stored Procedures responsible to be source for Synapse tables via ETL Pipelines.</li>
                    <li>Developed and created Views in Azure Synapse to be the primary source for Web Application Reporting Tool (Data Portal Blotter).</li>
                    <li>Modified / Developed / Enhanced ETL Pipelines in <b>Azure Data Factory</b> responsible for loading / massaging data from one data source to other. E.g.
                        <ul>
                          <li>Database Table to CSV File</li>
                          <li>CSV File to ORC File</li>
                          <li>Database Table to ORC File</li>
                          <li>ORC File to DataWarehouse Table</li>
                          <li>XML File to DataWarehouse Table</li>
                          <li>DataWarehouse Table to Synapse Table</li>
                          <li>DataWarehouse Stored Procedure to Synapse Table</li>
                        </ul>
                    </li>
                    <li>Developed several Web API's in <b>.NET</b> to get data from DataWarehouse and Azure Synapse.</li>
                    <li>Using <b>React JS</b>, developed services to consume Web API's and show data on Blotter, added dashboard, updated landing page, fixed styling of various components.</li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>Created / revamped / enhanced blotters in Data Portal. Reformed blotters with multiple dropdowns responsible for API calls and dataset filtering. (Blotter - Web Application Reporting tool)</ListGroup.Item>
                <ListGroup.Item>For daily Data Quality Management Report, sustained the report format and checks, and documented all up-to-date queries and steps used to manually prepare the Report and share with the client team to inform conclusion of the orchestration process (Orchestration - Scripted Extract Transform Load process)</ListGroup.Item>
                <ListGroup.Item>Automated the daily Data Quality Management Report using <b>Azure Data Factory Pipelines</b>, <b>SQL Stored Procedures</b>, supporting <b>SQL Tables</b> in DataWarehouse and Synapse, <b>SQL View</b> and <b>SSRS Report</b>.</ListGroup.Item>
                <ListGroup.Item>Investigated data issue / <b>ETL</b> process failure issue of various modules, proactively communicated issues and possible remedies with team and fixed the same to avoid losing latest data.</ListGroup.Item>
                <ListGroup.Item>Developed a module end-to-end and stepped into ownership by maintaining data quality and supervising each <b>orchestration</b>. (Orchestration - Scripted Extract Transform Load process)</ListGroup.Item>
                <ListGroup.Item>Refined and sustained <b>Data Dictionary</b> which helps client team and dev team both to search/identify source columns/tables of several Data Portal Blotters / Synapse Tables / Synapse Views / DataWarehouse Tables.</ListGroup.Item>
                <ListGroup.Item>Head UAT Restoration Process by coordinating with client IT team.</ListGroup.Item>
                <ListGroup.Item>Using <b>Microsoft Visio</b>, created Database DataWarehouse Diagram Model depicting types of tables and the relationships among them.</ListGroup.Item>
                <ListGroup.Item>Modified <b>Azure Logic Apps</b> and Pipelines in <b>Azure Data Factory</b> to send email alerts on pipeline failure having Environment name and Error message.</ListGroup.Item>
                <ListGroup.Item>Mentored juniors and new resources for onboarding.</ListGroup.Item>
              </ListGroup>
              <hr/>
              <ListGroup horizontal="sm" className="prof-skills">
                {profSkills.map((item, index) => {
                  return (
                      <>
                        <ListGroup.Item key={index}>{item.skill}</ListGroup.Item>
                      </>
                  )
                })}
              </ListGroup>
            </Card.Body>
          </Card>
      </Container>
      <br/><br/><br/>
      <hr/>
    </div>
  )
}
