import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function TicketTable({ tickets }) {
  const navigate = useNavigate();

  const getTicket = (id) => {
    console.log("Function Reached");
    navigate(`/ticket/${id}`);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Opened Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((ele) => {
              return (
                <tr key={ele.id} onClick={() => getTicket(ele.id)}>
                  <td>{ele.id}</td>
                  <td>{ele.subject}</td>
                  <td>{ele.status}</td>
                  <td>{ele.addedAt}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No ticket to display{" "}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
