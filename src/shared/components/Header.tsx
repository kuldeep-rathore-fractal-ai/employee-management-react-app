import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

type HeaderProps = {
  apiDown?: boolean;
};

const Header = ({ apiDown }: HeaderProps) => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      className="shadow-sm border-bottom"
      style={apiDown ? { top: "var(--api-bar-height)" } : undefined}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-semibold text-dark">
          Employee Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;