import React from 'react';
import { Link } from 'react-router-dom';
import './index.css' // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Appointment Manager
        </Link>
        <div className="navbar-nav">
          <Link to="/">View Appointments</Link>
          <Link to="/create">Create Appointment</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;