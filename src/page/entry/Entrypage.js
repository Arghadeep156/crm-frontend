import React, { useState } from "react";
import "./entrystyle.css";
import { Card } from "react-bootstrap";
import Logincomponent from "../../components/login/Logincomponent";
import PasswordReset from "../../components/passwordReset/PasswordReset";

export default function Entrypage() {
  const [formLoad, setFormLoad] = useState("Login");

  const setFormPage = (value) => {
    setFormLoad(value);
  };

  return (
    <div className="entry-page bg-dark">
      <Card className="form-box">
        {formLoad === "Login" ? (
          <Logincomponent setFormPage={setFormPage} />
        ) : (
          <PasswordReset
            // handleOnChange={handleOnChange}
            // handleOnResetSubmit={handleOnResetSubmit}
            // email={email}
            setFormPage={setFormPage}
          />
        )}
      </Card>
    </div>
  );
}
