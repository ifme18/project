import React, { useEffect, useState } from "react";
import AppointmentItem from "./AppointmentItem";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");  
  const [isEditing, setIsEditing] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3000/appointments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  const handleCheck = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id ? { ...appointment, done: !appointment.done } : appointment
      )
    );
  };

  const handleEdit = (appointment) => {
    setIsEditing(true);
    setCurrentAppointment(appointment);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === currentAppointment.id ? currentAppointment : appointment
      )
    );
    setIsEditing(false);
    setCurrentAppointment(null);
  };

  
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.title && appointment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Appointment List</h1>
      <ul>
        {appointments.map((appointment) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            onDelete={handleDelete}
            onCheck={handleCheck}
            onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;


