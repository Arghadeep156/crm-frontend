import React, { useState } from "react";
import "./entrystyle.css";
import { Card } from "react-bootstrap";
import Logincomponent from "../../components/login/Logincomponent";
import PasswordReset from "../../components/passwordReset/PasswordReset";

export default function Entrypage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("Login");

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
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and Password required.");
    }
  };

  const setFormPage = (value) => {
    setFormLoad(value);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required.");
    }
  };

  return (
    <div className="entry-page bg-dark">
      <Card className="form-box">
        {formLoad === "Login" ? (
          <Logincomponent
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            email={email}
            password={password}
            setFormPage={setFormPage}
          />
        ) : (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            setFormPage={setFormPage}
          />
        )}
      </Card>
    </div>
  );
}
