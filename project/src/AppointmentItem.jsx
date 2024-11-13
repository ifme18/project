import React from "react";

const AppointmentItem = ({ appointment, onDelete, onCheck }) => {
  return (
    <div style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h3>{appointment.title}</h3>
      <p>{appointment.description}</p>
      <p>Date: {appointment.date}</p>
      <p>Status: {appointment.done ? "Done" : "Pending"}</p>
      <button onClick={() => onCheck(appointment.id)}>
        {appointment.done ? "Uncheck" : "Check"}
      </button>
      <button onClick={() => onDelete(appointment.id)}>Delete</button>
    </div>
  );
};

export default AppointmentItem;
