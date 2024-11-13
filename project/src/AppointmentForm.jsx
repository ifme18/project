import React, { useState } from "react";
import './index.css'; 

const AppointmentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAppointment = { title, description, date, done: false };

    try {
      const response = await fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment),
      });

      if (response.ok) {
        
        setTitle("");
        setDescription("");
        setDate("");
      } else {
        console.error("Error creating appointment:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Create Appointment</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="form-input"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="form-textarea"
        rows="4"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
        required
      />
      <button type="submit" className="form-button">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;

