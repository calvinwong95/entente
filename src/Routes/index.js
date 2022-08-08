import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Profile from "../views/Profile";

const EntenteRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default EntenteRoutes;
