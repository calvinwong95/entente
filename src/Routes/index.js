import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import LoginPage from "../views/LoginPage";
import MyPost from "../views/MyPost";
import Notification from "../views/Notification";
import Profile from "../views/Profile";
import WhatsNew from "../views/WhatsNew";

const EntenteRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default EntenteRoutes;
