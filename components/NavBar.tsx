import Link from "next/link";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav>
              <Nav.Link as={Link} href="/">
                Breaking
              </Nav.Link>
              <Nav.Link as={Link} href="/search">
                Search{" "}
              </Nav.Link>
              <NavDropdown title="Catagories" id="Catagories-dropdown">
                <NavDropdown.Item as={Link} href="/catagories/business">
                  Business
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/catagories/entertainment">
                  Entertainment
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/catagories/general">
                  General
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/catagories/technology">
                  Technology
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/catagories/science">
                  Science
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/catagories/sports">
                  Sports
                </NavDropdown.Item>{" "}
                <NavDropdown.Item as={Link} href="/catagories/health">
                  Health
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
