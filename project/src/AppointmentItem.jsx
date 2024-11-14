import React from "react";
import './index.css'

const AppointmentItem = ({ appointment, onDelete, onCheck, onEdit }) => {
  return (
    <div className="appointment-item">
      <h3>{appointment.title}</h3>
      <p>{appointment.description}</p>
      <p>Date: {appointment.date}</p>
      <p>Status: {appointment.done ? "Done" : "Pending"}</p>
      <button onClick={() => onCheck(appointment.id)}>
        {appointment.done ? "Uncheck" : "Check"}
      </button>
      <button onClick={() => onDelete(appointment.id)}>Delete</button>
      <button onClick={() => onEdit(appointment)}>Edit</button>
    </div>
  );
};

export default AppointmentItem;


