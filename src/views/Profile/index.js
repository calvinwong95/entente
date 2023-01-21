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
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile);
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
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: 2.5,
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3">Profile Settings</Typography>
            {isEditProfile ? (
              <>
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    overflowY: "auto",
                    px: 2,
                    "&::-webkit-scrollbar": {
                      width: "5px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#DCF2FF",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#1D388F61",
                      borderRadius: 2,
                    },
                  }}
                >
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
              </>
            ) : (
              <>
                {" "}
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    overflowY: "auto",
                    px: 2,
                    "&::-webkit-scrollbar": {
                      width: "5px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#DCF2FF",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#1D388F61",
                      borderRadius: 2,
                    },
                  }}
                >
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
              </>
            )}

            <Box sx={{ width: "100%" }}>
              <TenButton variant="contained" color="third-01">
                <Typography
                  className={classes.whiteFont}
                  onClick={handleEditProfile}
                >
                  Edit
                </Typography>
              </TenButton>
            </Box>
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
