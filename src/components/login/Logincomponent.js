import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { loginPending, loginSuccess, loginFail } from "./LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../page/entry/dashboard/userAction";

export default function Logincomponent({ setFormPage }) {
  const { isLoading, isAuth, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("accessJWT")) {
      navigate("/dashboard");
    }
  }, [navigate, isAuth]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and password are required."); // Show an alert if fields are missing
      return; // Stop execution if validation fails
    }
    dispatch(loginPending());
    try {
      const response = await userLogin({ email, password });
      if (response.data.status === "error") {
        return dispatch(loginFail(response.data.message));
      }
      dispatch(loginSuccess());
      navigate("/dashboard");
      dispatch(getUserProfile());
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter password"
              />
            </Form.Group>
            <Button type="submit">Login</Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href="#!" onClick={() => setFormPage("Password")}>
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
}

Logincomponent.propTypes = {
  setFormPage: PropTypes.func.isRequired,
};
