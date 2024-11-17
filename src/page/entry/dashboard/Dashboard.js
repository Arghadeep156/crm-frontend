import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../../components/tickettable/TicketTable";
import tickets from "../../../assets/dummy-tickets.json";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px", color: "white" }}
          >
            Add new ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total ticket : 50</div>
          <div>Total ticket : 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
}
