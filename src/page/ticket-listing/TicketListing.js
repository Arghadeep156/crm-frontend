import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import PageBreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/tickettable/TicketTable";
import Tickets from "../../assets/dummy-tickets.json";

export default function TicketListing() {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(Tickets);

  const handleOnChange = (e) => {
    setStr(e.target.value);
    searchTicket(e.target.value);
  };

  const searchTicket = (sttr) => {
    const displayList = Tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTicket(displayList);
  };

  useEffect(() => {}, [str, displayTicket]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info">Add new ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
}
