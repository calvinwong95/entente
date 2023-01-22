import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";
import DisplaySettings from "./components/DisplaySettings";
import ProfileSettings from "./components/ProfileSettings";

const Profile = () => {
  const classes = UseStyles();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleEditProfile = () => {
    if (isEditProfile) {
      setIsEditProfile(false);
    } else {
      setIsEditProfile(true);
    }
  };
  const handleEditPost = () => {
    setIsEditPost(!isEditPost);
  };
  return (
    <Dashboard>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            columnGap: 4,
          }}
        >
          <ProfileSettings />
          <DisplaySettings />
        </Box>
      </Box>
    </Dashboard>
  );
};

export default Profile;
