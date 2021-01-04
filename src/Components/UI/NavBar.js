import React from 'react';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';



const NavBar = () => (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">User</Nav.Link>
                    <Nav.Link href="#pricing">Assessments</Nav.Link>
                    <NavDropdown title="Others" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Questions</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Results</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">More details</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">User Name</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default NavBar;