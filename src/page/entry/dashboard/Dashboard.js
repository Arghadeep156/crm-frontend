import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../../components/tickettable/TicketTable";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTicket } from "../../ticket-listing/ticketActions";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTicket());
  }, [dispatch]);

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
          <div>Total ticket : 50</div>
          <div>Pending ticket : 5</div>
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
