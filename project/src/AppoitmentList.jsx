import React, { useEffect, useState } from "react";
import AppointmentItem from "./AppointmentItem";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
   
  
  
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
    setAppointments(appointments.map((appointment) => 
      appointment.id === id ? { ...appointment, checked: true } : appointment
    ));
  };

  const handleEdit = (id) => {
  
    console.log("Edit appointment with id:", id);
  };

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
