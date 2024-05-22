import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import HistoricalDataPage from "./components/HistoricalDataPage";
import AboutPage from "./components/AboutPage";
import ArduinoStats from "./components/ArduinoStats";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/realtime" element={<ArduinoStats />} />
        <Route path="/historical" element={<HistoricalDataPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
