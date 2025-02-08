import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleTicket,
  updateTicketConversation,
} from "../../page/ticket-listing/ticketActions";

export default function UpdateTicket({ tId }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.user);
  const { replyMsg } = useSelector((state) => state.tickets);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false); // Hide the alert after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const msgObject = { sender: user.name, message: message };
    console.log("Errored Here 1");
    dispatch(updateTicketConversation(tId, msgObject));
    console.log("Errored here 2");
    dispatch(fetchSingleTicket(tId));
    setMessage("");
    console.log("Hellow user");
  };

  return (
    <div>
      {replyMsg && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Message Updated
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Control
          as="textarea"
          row="5"
          name="detail"
          value={message}
          onChange={handleOnChange}
        />
        <div className="text-right mt-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
}
UpdateTicket.propTypes = {
  tId: PropTypes.string.isRequired,
};
