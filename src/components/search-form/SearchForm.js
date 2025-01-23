import React from "react";
import { Form, FormGroup, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchTicket } from "../../page/ticket-listing/ticketsSlice";

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(searchTicket(value));
    console.log(e.target);
  };

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
              // value={str}
              placeholder="Search..."
            ></Form.Control>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
