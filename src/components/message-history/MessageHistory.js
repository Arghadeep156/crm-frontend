import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Badge, Button, Form } from "react-bootstrap";
import "./MessageHistoryStyle.css";

export default function MessageHistory({ msg }) {
  const [reply, setReply] = useState("");

  // Function to handle reply input change
  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  // Function to handle reply submission (you can customize as needed)
  const handleReplySubmit = (e) => {
    e.preventDefault();
    console.log("Reply sent:", reply);
    setReply(""); // Clear the reply input after submission
  };

  if (!msg || msg.length === 0) return null;

  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
}

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};