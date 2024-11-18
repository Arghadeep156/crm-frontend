import React from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AddticketForm.css";

export default function AddTicketForm({
  handleOnChange,
  formData,
  handleOnSubmit,
  formDataError,
}) {
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  return (
    <Card className="p-4 mt-3 add-new-ticket">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        {/* Subject Field */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              //   minLength="3"
              //   maxLnegth="100"
              onChange={handleOnChange}
              placeholder="Enter Subject"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.subject && "Subject length should be atleast 3!"}
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
              value={formatDate(formData.issueDate)}
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
              name="details"
              rows="12"
              value={formData.details}
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
AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formDataError: PropTypes.object.isRequired,
};
