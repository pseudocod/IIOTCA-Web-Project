import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Welcome to the Raspberry Pi Weather Station</h1>
    <p style={styles.text}>
      Our Raspberry Pi Weather Station provides real-time and historical weather
      data collected from an Arduino-based system. This system is designed to
      help you monitor and understand weather patterns in your local area.
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
        View Real-time Data
      </Link>
      <Link to="/historical" style={styles.link}>
        View Historical Data
      </Link>
      <Link to="/about" style={styles.link}>
        Learn About Us
      </Link>
    </div>
  </div>
);

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "36px",
    margin: "20px 0",
  },
  text: {
    fontSize: "18px",
    margin: "20px 0",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  link: {
    padding: "10px 20px",
    backgroundColor: "purple",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default HomePage;
