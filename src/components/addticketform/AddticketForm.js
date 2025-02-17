import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Spinner, Alert, Card } from "react-bootstrap";
import "./AddticketForm.css";
import { shortText } from "../../utils/validate";
import { useSelector, useDispatch } from "react-redux";
import { createNewTicket } from "./AddTicketAction";
import { restSuccessMSg } from "./AddTicketSlice";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};
export default function AddTicketForm() {
  const dispatch = useDispatch();

  const {
    user: { name },
  } = useSelector((state) => state.user);

  const { isLoading, error, successMsg } = useSelector(
    (state) => state.openTicket
  );

  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {
    return () => {
      successMsg && dispatch(restSuccessMSg());
    };
  }, [dispatch, frmData, frmDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });
    dispatch(createNewTicket({ ...frmData, sender: name }));
  };

  return (
    <Card className="p-4 mt-3 add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      {error && <Alert variant="danger">{error}</Alert>}
      {successMsg && <Alert variant="primary">{successMsg}</Alert>}
      {isLoading && <Spinner variant="primary" animation="border" />}
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        {/* Subject Field */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "Subject length should be atleast 3!"}
            </Form.Text>
          </Col>
        </Form.Group>

        {/* Issue Date Field */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Issue Found At
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        {/* Issue Details Field */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Issue Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="message"
              rows="5"
              value={frmData.message}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" variant="info" size="lg">
          Report Issue
        </Button>
      </Form>
    </Card>
  );
}
