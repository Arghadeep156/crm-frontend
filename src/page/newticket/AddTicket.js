import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import AddTicketForm from "../../components/addticketform/AddticketForm";
import { shortText } from "../../utils/validate";

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  details: false,
};
export default function AddTicket() {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    const isSubjectValid = await shortText(formData.subject);
    setFormDataError({ ...formDataError, subject: !isSubjectValid });
    console.log("Form submit request recieved", formData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
}
