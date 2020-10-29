import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
function NavApp(){
   return (
    <div>
        <Navbar collapseOnSelect expand="md" className="navApp-style">
  <Navbar.Brand href="#" className="text-white logo-text">ALG<span className="text-danger">O</span>SUTRAS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto text-uppercase text-white">
      <Nav.Link className="nav-link-clr" href="#">Feed</Nav.Link>
      <Nav.Link className="nav-link-clr" href="#">Authors</Nav.Link>
      <Nav.Link className="nav-link-clr" href="#">Explore</Nav.Link>
      <Nav.Link className="nav-link-clr" href="#">Blog</Nav.Link>
      <Nav.Link className="nav-link-clr" href="#">Authors</Nav.Link>
      <Nav.Link href="">
        <button className="nav-link-btn">
          Get Started
        </button>
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