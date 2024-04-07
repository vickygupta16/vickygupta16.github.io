import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../App.css";
import moment from "moment";
import IVPLogo from "../images/IVP_logo.jpg";

export function Profession() {
  const ivpASETenureStart = "2022-01-11"
  const ivpASETenureEnd = "2024-03-31";
  const ivpSETenureStart = "2024-04-01";
  const ivpSETenureEnd = null;
  const tenureCalculator = (tenureStart, tenureEnd) => {
    var tenureStartDate = moment(tenureStart, "YYYY-MM-DD");
    var tenureEndDate = tenureEnd !== null ? moment(tenureEnd, "YYYY-MM-DD") : moment(new Date(), "YYYY-MM-DD");
    var diffDate = moment.duration(tenureEndDate.diff(tenureStartDate));
    var year = diffDate.years();
    var month = (tenureStartDate.month() + 1) !== (tenureEndDate.month() + 1) ? diffDate.months() + 1 : 0;
    var tenureYears = year > 1 ? year + " years " : year !== 0 ? year + " year " : "";
    var tenureMonths = month > 1 ? month + " months" : month !== 0 ? month + " month" : "";
    var designationTenure = tenureYears + tenureMonths;
    return designationTenure;
  }
  const profSkills = [
    { skill: "Microsoft Visio" },
    { skill: "SQL" },
    { skill: "React JS" },
    { skill: ".NET MVC" },
    { skill: "C#" },
    { skill: "REST API" },
    { skill: "Microsoft Azure Data Factory" },
    { skill: "Material UI" },
    { skill: "Figma" },
    { skill: "Postman" },
    { skill: "Git" },
  ];
  return (
    <div id="profession">
      <Container>
        <h3 className="text-center section-title">Profession</h3>
        <Card className="profession-card shadow">
          <Card.Body className="profession-card-body">
            <Card.Title className="summary">
              Logical Software Engineer with 2 years of experience.
              Skilled in development, testing & debugging. Strong work-ethic, communicator, proactive
              and multitasker with organized, detail-oriented approach.
              Conducts comprehensive analysis to identify data/process failure issues.
              Proficient in documentation and Solution deployments.
            </Card.Title>
          </Card.Body>
        </Card>
        <br />
        <Card className="profession-card shadow">
          <Card.Body className="profession-card-body">
            <Row>
              <Col xs={12} md={6}>
                <Card.Title>
                  Software Engineer
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Indus Valley Partners &#x2022; Full Time</Card.Subtitle>
                <Card.Text>
                  Apr 2024 - Present <span className="tenure">{tenureCalculator(ivpSETenureStart, ivpSETenureEnd)}</span>
                </Card.Text>
                <Card.Title>
                  Associate Software Engineer
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Indus Valley Partners &#x2022; Full Time</Card.Subtitle>
                <Card.Text>
                  Jan 2022 - Mar 2024&nbsp;<span className="tenure">{tenureCalculator(ivpASETenureStart, ivpASETenureEnd)}</span>
                </Card.Text>
              </Col>
              <Col className="text-end" xs={12} md={6}>
                <a href="https://www.ivp.in/"><Image src={IVPLogo} className="ivp-logo" /></a>
              </Col>
            </Row>
            <br />
            <ListGroup numbered className="prof-exp">
              <ListGroup.Item>
                Contributed in and led several modules by developing, testing and deploying - Tables, Stored Procedures, Views, Azure Data Factory Pipelines, .NET code, React code.
                <br />
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
              <ListGroup.Item>Headed Data Quality Management Report, sustained the report format and checks, and documented all up-to-date queries and steps used to manually prepare the Report and share with the client team</ListGroup.Item>
              <ListGroup.Item>Automated the daily Data Quality Management Report using <b>Azure Data Factory Pipelines</b>, <b>SQL Stored Procedures</b>, supporting <b>SQL Tables</b> in DataWarehouse and Synapse, <b>SQL View</b> and <b>SSRS Report</b>.</ListGroup.Item>
              <ListGroup.Item>Investigated data issue / <b>ETL</b> process failure issue of various modules, proactively communicated issues and possible remedies with team and fixed the same to avoid losing latest data.</ListGroup.Item>
              <ListGroup.Item>Developed a module end-to-end and stepped into ownership by maintaining data quality and supervising each <b>orchestration</b>. (Orchestration - Scripted Extract Transform Load process)</ListGroup.Item>
              <ListGroup.Item>Oversaw, refined and sustained <b>Data Dictionary</b></ListGroup.Item>
              <ListGroup.Item>Head UAT Restoration Process by coordinating with client IT team.</ListGroup.Item>
              <ListGroup.Item>Using <b>Microsoft Visio</b>, created Database DataWarehouse Diagram Model depicting types of tables and the relationships among them.</ListGroup.Item>
              <ListGroup.Item>Enhanced <b>Azure Logic Apps</b> and Pipelines in <b>Azure Data Factory</b> to send email alerts on pipeline failure having Environment name and Error message.</ListGroup.Item>
              <ListGroup.Item>Mentored juniors and new resources for onboarding.</ListGroup.Item>
            </ListGroup>
            <hr />
            <div className="prof-skills">
              {profSkills.map((item, index) => {
                return (
                  <p key={index} className="skill-item">{item.skill}</p>
                )
              })}
            </div>
          </Card.Body>
        </Card>
      </Container>
      <br /><br /><br />
      <hr />
    </div>
  )
}
