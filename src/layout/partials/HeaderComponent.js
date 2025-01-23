import React from "react";
import { Nav, Navbar } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/image/Gemini_Generated_Image_4e0egf4e0egf4e0e-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../api/userApi";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const logoutUser = async () => {
    await userLogout();
    sessionStorage.removeItem("accessJWT");
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboards</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <LinkContainer to="">
            <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
