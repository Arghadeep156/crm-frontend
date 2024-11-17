import React from "react";
import { Table } from "react-bootstrap";

export default function TicketTable({ tickets }) {
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
                <tr>
                  <td>{ele.id}</td>
                  <td>Pta nahi</td>
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
