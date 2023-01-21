import { Box, MenuItem, Modal, Typography, Icon } from "@mui/material";
import React, { useState } from "react";
import TenButton from "../../components/TenButton";
import TenDropdown from "../../components/TenDropdown";
import TenDropzone from "../../components/TenDropzone";
import TenTextField from "../../components/TenTextField";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";
import { AccountCircle } from "@mui/icons-material";

const Profile = () => {
  const classes = UseStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 2.5,
              padding: 2,
            }}
          >
            <Typography variant="h3" sx={{ mb: 2 }}>
              Profile Settings
            </Typography>
            <Box sx={{ width: "100%", overflowY: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircle color="white" sx={{ fontSize: 100 }} />
                </Box>
              </Box>
              <TenTextField label="Username" disabled></TenTextField>
              <TenTextField label="Password" disabled></TenTextField>
              <TenDropdown label="Category" disabled>
                <MenuItem>One</MenuItem>
                <MenuItem>Two</MenuItem>
                <MenuItem>Three</MenuItem>
              </TenDropdown>
              <TenTextField label="Email Addresss" disabled></TenTextField>
              <TenTextField label="Phone Number" disabled></TenTextField>
            </Box>
            {/* <Box sx={{ width: "100%", backgroundColor: "red" }}>
              <TenButton variant="contained">Edit</TenButton>
            </Box> */}
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 2.5,
              padding: 2,
            }}
          >
            <Typography variant="h3">Display Post Settings</Typography>
          </Box>
        </Box>
      </Box>
    </Dashboard>
  );
};

export default Profile;
