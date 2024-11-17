import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function HeaderComponent() {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>CRM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Dashboards</Nav.Link>
          <Nav.Link>Tickets</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
