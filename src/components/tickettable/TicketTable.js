import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TicketTable() {
  const { isLoading, error, searchTicketList } = useSelector(
    (state) => state.tickets
  );

  const navigate = useNavigate();

  const getTicket = (id) => {
    navigate(`/ticket/${id}`);
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h1>{error}</h1>;
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
          {searchTicketList.length ? (
            searchTicketList.map((ele) => {
              return (
                <tr key={ele._id} onClick={() => getTicket(ele._id)}>
                  <td>{ele._id}</td>
                  <td>{ele.subject}</td>
                  <td>{ele.status}</td>
                  <td>{ele.openAt}</td>
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
