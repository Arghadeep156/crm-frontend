import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import PageBreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/tickettable/TicketTable";
//import Tickets from "../../assets/dummy-tickets.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllTicket } from "./ticketActions";

export default function TicketListing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTicket());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadCrumb page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Link to="/addticket">
            <Button variant="info">Add new ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
}
