import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function UpdateTicket({
  handleOnChange,
  message,
  handleOnSubmit,
}) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={message}
        onChange={handleOnChange}
      />
      <div className="text-right mt-3">
        <Button variant="info" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
}
UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
