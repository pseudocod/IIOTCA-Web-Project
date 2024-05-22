// HistoricalDataPage.js
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ref, onValue } from "firebase/database";
import database from "../firebaseConfig";

// Register Chart.js components
Chart.register(...registerables);

const HistoricalDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, "Status");
    onValue(dbRef, (snapshot) => {
      const tempData = [];
      let index = 0;
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        console.log("Child Data:", childData); // Log the child data
        tempData.push({
          id: index++, // Use an incremental number as the label
          temperature: childData.Temperature,
          humidity: childData.Humidity,
        });
      });
      console.log("Temp Data:", tempData); // Log the temp data
      setData(tempData);
    });
  }, []);

  const chartData = {
    labels: data.map((d) => d.id), // Use the incremental numbers as labels
    datasets: [
      {
        label: "Temperature",
        data: data.map((d) => d.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Humidity",
        data: data.map((d) => d.humidity),
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  console.log("Chart Data:", chartData); // Log chart data

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
      <Line data={chartData} options={options} />
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
  },
};

export default HistoricalDataPage;
