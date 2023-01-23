import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Notification from "../views/Notification";
import Profile from "../views/Profile";
import WhatsNew from "../views/WhatsNew";

const EntenteRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/whatsnew" element={<WhatsNew />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </Router>
  );
};

export default EntenteRoutes;
