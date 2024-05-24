import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Welcome to the IoT Weather Station</h1>
    <p style={styles.text}>
      Weather Station provides real-time and historical weather data. This
      system is designed to help you monitor and understand weather patterns in
      your local area.
    </p>
    <p style={styles.text}>
      The data collected includes temperature, humidity, altitude, pressure, and
      more. Whether you're a weather enthusiast, a student, or a professional,
      our comprehensive data and user-friendly interface will provide you with
      the insights you need.
    </p>
    <p style={styles.text}>
      Explore our application to see real-time weather data, view historical
      trends, and learn more about how our system works. Click on the links
      below to navigate through the different sections of our application.
    </p>
    <div style={styles.links}>
      <Link to="/realtime" style={styles.link}>
        View Realtime Data
      </Link>
      <Link to="/historical" style={styles.link}>
        View Historical Data
      </Link>
    </div>
  </div>
);

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "40px auto",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    fontSize: "42px",
    margin: "20px 0",
    color: "#333",
    fontWeight: "bold",
  },
  text: {
    fontSize: "18px",
    margin: "20px 0",
    color: "#666",
    lineHeight: "1.6",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
  link: {
    padding: "12px 24px",
    backgroundColor: "purple",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s, transform 0.3s",
  },
  linkHover: {
    backgroundColor: "#800080",
    transform: "scale(1.05)",
  },
};

export default HomePage;
