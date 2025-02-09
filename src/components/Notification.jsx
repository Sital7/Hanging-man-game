import React from "react";

const Notification = ({ show }) => {
  return show && <div className="notification">Letter already guessed!</div>;
};

export default Notification;
