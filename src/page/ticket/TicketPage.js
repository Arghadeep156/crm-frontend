import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import PageBreadCrumb from "../../components/breadcrumb/BreadCrumb";
//import tickets from "../../assets/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";
import {
  fetchSingleTicket,
  updateTicketStatusClosed,
} from "../ticket-listing/ticketActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function TicketPage() {
  const { isLoading, error, singleTicket } = useSelector(
    (state) => state.tickets
  );
  const { tId } = useParams();
  const [ticket, setTicket] = useState({});
  const dispatch = useDispatch();

  // Fetch ticket data when `tId` changes
  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
  }, [tId, dispatch]); // Only depend on `tId`

  // Update `ticket` state when `singleTicket` changes
  useEffect(() => {
    if (singleTicket && singleTicket._id === tId) {
      setTicket(singleTicket);
    }
  }, [singleTicket, tId]); // Only depend on `singleTicket` and `tId`

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject : {ticket.subject}</div>
          <div className="date">
            Ticket Open :{" "}
            {ticket.openAt && new Date(ticket.openAt).toLocaleDateString()}
          </div>
          <div className="status">Current Status : {ticket.status}</div>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            variant="outline-info"
            onClick={() => dispatch(updateTicketStatusClosed(ticket._id))}
            disabled={ticket.status === "Closed"}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {ticket.conversation && <MessageHistory msg={ticket.conversation} />}
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket tId={tId} />
        </Col>
      </Row>
    </Container>
  );
}
