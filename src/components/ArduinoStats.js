import React, { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import {
  FaSnowflake,
  FaCloudSun,
  FaSun,
  FaWater,
  FaMountain,
  FaTachometerAlt,
  FaCloudRain,
} from "react-icons/fa";
import { database } from "../firebaseConfig";

const getTemperatureIcon = (temperature) => {
  if (temperature < 10) {
    return <FaSnowflake />;
  } else if (temperature >= 10 && temperature < 25) {
    return <FaCloudSun />;
  } else {
    return <FaSun />;
  }
};

const getTemperatureString = (temperatureIcon) => {
  if (temperatureIcon.type === FaSnowflake) {
    return "It's very cold!";
  } else if (temperatureIcon.type === FaCloudSun) {
    return "It's mild!";
  } else if (temperatureIcon.type === FaSun) {
    return "It's hot!";
  }
};

const getRainStateIcon = (rainState) => {
  return rainState ? <FaCloudRain /> : <FaSun />;
};

const getRainStateString = (rainState) => {
  return rainState ? "It's raining!" : "It's not raining!";
};

const ArduinoStats = () => {
  const [sensorData, setSensorData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dbRef = ref(database);

    const handleData = (snapshot) => {
      try {
        const data = snapshot.val() || {};
        console.log("Fetched data:", data);
        setSensorData(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    const handleError = (error) => {
      setLoading(false);
      setError(error.message);
    };

    onValue(dbRef, handleData, handleError);

    return () => off(dbRef, "value", handleData);
  }, []);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p>Loading...</p>
      </div>
    );
  }

  const temperature = sensorData["Temperature"];
  const temperatureIcon = getTemperatureIcon(temperature);
  const temperatureString = getTemperatureString(temperatureIcon);
  const rainState = sensorData["Rain State"];
  const rainStateIcon = getRainStateIcon(rainState);
  const rainStateString = getRainStateString(rainState);
  const date = sensorData["Date"];
  const time = sensorData["Time"];

  return (
    <div style={styles.scrollContainer}>
      {error && <p style={styles.errorText}>{error}</p>}
      <div style={styles.header}>Weather Forecast</div>
      <div style={styles.dataContainer}>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            Last update: {date} {time}
          </p>
        </div>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            {temperatureString} {temperature} °C {temperatureIcon}
          </p>
        </div>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            {rainStateString} {rainStateIcon}
          </p>
        </div>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            Humidity: {sensorData["Humidity"]} % <FaWater />
          </p>
        </div>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            Altitude: {parseFloat(sensorData["Altitude"]).toFixed(2)} Meters{" "}
            <FaMountain />
          </p>
        </div>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            Pressure: {sensorData["Pressure"]} Pa <FaTachometerAlt />
          </p>
        </div>
        <div style={styles.dataRow}>
          <p style={styles.dataText}>
            Sealevel Pressure: {sensorData["Sealevel Pressure"]} mbar{" "}
            <FaTachometerAlt />
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  header: {
    fontSize: "28px",
    textAlign: "center",
    margin: "16px 0",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "purple",
    padding: "10px 20px",
    borderRadius: "8px",
  },
  dataContainer: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginTop: "20px",
  },
  dataRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "8px 0",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
    transition: "background-color 0.3s",
  },
  dataRowHover: {
    backgroundColor: "#f9f9f9",
  },
  dataText: {
    fontSize: "18px",
    color: "#555",
    flex: "1",
    textAlign: "left",
  },
  icon: {
    marginLeft: "10px",
  },
  errorText: {
    fontSize: "16px",
    color: "red",
    textAlign: "center",
  },
};

export default ArduinoStats;
