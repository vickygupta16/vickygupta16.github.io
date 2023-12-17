import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

export function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="shadow navbar"
    >
      <Container fluid>
        <Navbar.Brand>Vicky Gupta</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#personal" className="navbar-items">
              <i class="bi bi-info-circle"></i> Personal
            </Nav.Link>
            <Nav.Link href="#profession" className="navbar-items">
              <i class="bi bi-pc-display-horizontal"></i> Profession
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-items">
              <i class="bi bi-braces"></i> Skills
            </Nav.Link>
            <Nav.Link href="#almamater" className="navbar-items">
              <i class="bi bi-mortarboard-fill"></i> Alma mater
            </Nav.Link>
            <Nav.Link href="#certifications" className="navbar-items">
              <i class="bi bi-patch-check"></i> Certifications
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-items">
              <i class="bi bi-code-slash"></i> Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
