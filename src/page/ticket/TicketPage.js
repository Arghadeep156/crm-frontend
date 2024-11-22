import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadCrumb from "../../components/breadcrumb/BreadCrumb";
import Tickets from "../../assets/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";

export default function TicketPage() {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    for (let i = 0; i < Tickets.length; i++) {
      if (Tickets[i].id == tId) {
        setTicket(Tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("Message Recieved");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject : {ticket.subject}</div>
          <div className="date">Ticket Open : {ticket.addedAt}</div>
          <div className="status">Current Status : {ticket.status}</div>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            handleOnChange={handleOnChange}
            message={message}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}
