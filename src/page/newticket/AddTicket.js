import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import AddTicketForm from "../../components/addticketform/AddticketForm";

export default function AddTicket() {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
}
