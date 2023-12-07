import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

export function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="bg-body-tertiary shadow p-3 mb-5 bg-body navbar"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="brand-name">
          Vicky Gupta
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="navbar-items">
              Personal
            </Nav.Link>
            <Nav.Link href="#action2" className="navbar-items">
              Alma mater
            </Nav.Link>
            <Nav.Link href="#action3" className="navbar-items">
              Profession
            </Nav.Link>
            <Nav.Link href="#action3" className="navbar-items">
              Skills
            </Nav.Link>
            <Nav.Link href="#action3" className="navbar-items">
              Certifications
            </Nav.Link>
            <Nav.Link href="#action3" className="navbar-items">
              Projects
            </Nav.Link>
            <Nav.Link href="#action3" className="navbar-items">
              Others
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
