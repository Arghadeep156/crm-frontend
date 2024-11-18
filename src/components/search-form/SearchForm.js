import React from "react";
import { Form, FormGroup, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export default function SearchForm({ handleOnChange, str }) {
  return (
    <div>
      <Form>
        <FormGroup as={Row}>
          <Form.Label column sm="2">
            Search:{" "}
          </Form.Label>
          <Col ms={10}>
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Search..."
            ></Form.Control>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

SearchForm.prototypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
