import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

// Register Chart.js components
Chart.register(...registerables);

const HistoricalDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, "Status");
    onValue(dbRef, (snapshot) => {
      const tempData = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        tempData.push({
          temperature: childData.Temperature,
          humidity: childData.Humidity,
        });
      });
      // Slice the last 50 entries
      const last50Data = tempData
        .slice(-50)
        .map((item, index) => ({ id: index + 1, ...item }));
      setData(last50Data);
    });
  }, []);

  const temperatureChartData = {
    labels: data.map((d) => d.id), // Use the incremental numbers as labels
    datasets: [
      {
        label: "Temperature",
        data: data.map((d) => d.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const humidityChartData = {
    labels: data.map((d) => d.id), // Use the incremental numbers as labels
    datasets: [
      {
        label: "Humidity",
        data: data.map((d) => d.humidity),
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // Use "category" for the x-axis
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Historical Weather Data</h1>
      <div style={styles.chartContainer}>
        <h2 style={styles.subHeader}>Temperature Data</h2>
        <Line data={temperatureChartData} options={options} />
      </div>
      <div style={styles.chartContainer}>
        <h2 style={styles.subHeader}>Humidity Data</h2>
        <Line data={humidityChartData} options={options} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  header: {
    fontSize: "36px",
    margin: "20px 0",
    textAlign: "center",
  },
  subHeader: {
    fontSize: "24px",
    margin: "10px 0",
    textAlign: "center",
  },
  chartContainer: {
    margin: "20px 0",
  },
};

export default HistoricalDataPage;
