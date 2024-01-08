import logo from "../Images/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Section2.css";

const Header = () => {
  return (
    <section id="home" className="headerNav">
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="logoWidth"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="custom-nav gap-3">
              <NavDropdown
                title="Solutions"
                id="basic-nav-dropdown"
                className="headerNavText"
              >
                <NavDropdown.Item href="#lorem1">Lorem1</NavDropdown.Item>
                <NavDropdown.Item href="#lorem2">
                  Lorem2
                </NavDropdown.Item>
                <NavDropdown.Item href="#lorem3">
                  Lorem3
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Resources"
                id="basic-nav-dropdown"
                className="headerNavText"
              >
                <NavDropdown.Item href="#lorem1">Lorem1</NavDropdown.Item>
                <NavDropdown.Item href="#lorem2">
                  Lorem2
                </NavDropdown.Item>
                <NavDropdown.Item href="#lorem3">
                  Lorem3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">
                <span className="headerNavText">About Us</span>
              </Nav.Link>
              <Nav.Link href="#contact">
                <span className="headerNavText">Contact Us</span>
              </Nav.Link>
              <div className="bg-none border-2 d-inline-flex rounded-5">
                <button className="bg-white fs-5 border-none d-inline-flex rounded-5 pt-1 px-3">
                  Login
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
