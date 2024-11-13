
import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Appointment Manager</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",  // Green background
    padding: "10px 20px",
    color: "white",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2rem",
  },
};

export default Header;
