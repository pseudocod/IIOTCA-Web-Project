import React from "react";

const AboutPage = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>About the Raspberry Pi Weather Station</h1>
    <p style={styles.text}>
      This application is designed to provide real-time and historical weather
      data collected from an Raspberry Pi-based weather station. Our goal is to
      make weather data accessible and easy to understand for everyone.
    </p>
    <p style={styles.text}>
      The Raspberry Pi Weather Station project was initiated to help people
      monitor and analyze weather patterns in their local areas. By utilizing
      the power of Raspberry Pi and various sensors, we can collect accurate and
      timely weather data.
    </p>
    <p style={styles.text}>
      For more information, please contact us at{" "}
      <a href="mailto:vlad.mocan@student.upt.ro">support@weatherstation.com</a>.
    </p>
  </div>
);

const styles = {
  container: {
    padding: "20px",
  },
  header: {
    fontSize: "36px",
    margin: "20px 0",
  },
  text: {
    fontSize: "18px",
    margin: "20px 0",
  },
};

export default AboutPage;
