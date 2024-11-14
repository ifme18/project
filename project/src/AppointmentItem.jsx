import React from 'react';

const AppointmentItem = ({ appointment, onDelete, onCheck, onEdit }) => {
  return (
    <article className="appointment">
      <header>
        <h3>{appointment.title}</h3>
        <p>Date: {appointment.date}</p>
        <p>Status: {appointment.done ? 'Done' : 'Pending'}</p>
      </header>
      <div className="description">
        <p>{appointment.description}</p>
      </div>
      <div className="actions">
        <button onClick={() => onCheck(appointment.id)}>
          {appointment.done ? 'Uncheck' : 'Check'}
        </button>
        <button onClick={() => onDelete(appointment.id)}>Delete</button>
        <button onClick={() => onEdit(appointment)}>Edit</button>
      </div>
    </article>
  );
};

export default AppointmentItem;
