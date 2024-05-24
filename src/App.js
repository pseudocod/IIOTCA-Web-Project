import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import HistoricalDataPage from "./components/HistoricalDataPage";
import ArduinoStats from "./components/ArduinoStats";
import Login from "./components/Login";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/realtime"
            element={
              <PrivateRoute>
                <ArduinoStats />
              </PrivateRoute>
            }
          />
          <Route
            path="/historical"
            element={
              <PrivateRoute>
                <HistoricalDataPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
