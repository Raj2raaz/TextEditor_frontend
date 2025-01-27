import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
// import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./app.css";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="containerwa">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LoginSignup />} />
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-3xl text-red-500">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
