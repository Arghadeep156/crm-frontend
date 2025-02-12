import React from "react";
import PropTypes from "prop-types";
import "./MessageHistoryStyle.css";

export default function MessageHistory({ msg }) {
  if (!msg || msg.length === 0) return null;

  return msg.map((row, i) => (
    <div key={i} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{row.sender}</div>
        <div className="date">
          {row.msgAt && new Date(row.msgAt).toLocaleString()}
        </div>
      </div>
      <div className="message">{row.message}</div>
    </div>
  ));
}

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
