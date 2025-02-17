import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../../components/tickettable/TicketTable";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { fetchAllTicket } from "../../ticket-listing/ticketActions";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTicket());
    }
  }, [dispatch, tickets]);

  const noOfTicket = tickets.length;
  const noOfPendingTickets = () => {
    let value = 0;
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].status === "Pending client reponse") {
        value += 1;
      }
    }
    return value;
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/addticket">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px", color: "white" }}
            >
              Add new ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total ticket : {noOfTicket}</div>
          <div>Pending ticket : {noOfPendingTickets()}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
}
