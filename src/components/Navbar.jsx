import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavApp(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="navApp-style">
        <Navbar.Brand>
          <Link className="text-white logo-text" to="/">
          ALG<span className="text-danger">O</span>SUTRAS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-uppercase text-white">
            <Nav.Link className="nav-link-clr">Feed</Nav.Link>
            <Nav.Link className="nav-link-clr">Authors</Nav.Link>
            <Nav.Link className="nav-link-clr">Explore</Nav.Link>
            <Nav.Link className="nav-link-clr">Blog</Nav.Link>
            <Nav.Link className="nav-link-clr">
              <Link className="nav-link-clr" to='/contact'> Contact</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='signin'>
              <button className="nav-link-btn">Get Started</button>
              </Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#">Action</NavDropdown.Item>
        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#">Something</NavDropdown.Item>
        <NavDropdown.Divider /> 
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavApp;
