import { Box, MenuItem, Typography } from "@mui/material";
import React from "react";
import TenButton from "../../components/TenButton";
import TenDropdown from "../../components/TenDropdown";
import TenTextField from "../../components/TenTextField";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";

const Profile = () => {
  const classes = UseStyles();
  return (
    <Dashboard>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h2" sx={{ fontSize: 20 }}>
            Profile
          </Typography>
        </Box>

        <Box
          sx={{
            width: 300,

            backgroundColor: "#FFFFFF",
            borderRadius: 5,
            border: 1,
            borderColor: "third-01.main",
            padding: 2,
          }}
        >
          <Box>
            <Typography>Username</Typography>
            <TenTextField placeholder="Username"></TenTextField>
          </Box>
          <Box>
            <Typography>Email</Typography>
            <TenTextField placeholder="Username@gmail.com"></TenTextField>
          </Box>
          <Box>
            <Typography>Contact Number</Typography>
            <TenTextField placeholder="019-5032912"></TenTextField>
          </Box>
          <Box>
            <Typography>Category</Typography>
            <TenDropdown>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenn</MenuItem>
              <MenuItem value={30}>Thren</MenuItem>
            </TenDropdown>
          </Box>
          <Box>
            <Typography>Company Logo</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 1,
            }}
          >
            <TenButton variant="outlined" color="third-01">
              <Typography sx={{ color: "third-01.main" }}>Cancel</Typography>
            </TenButton>
            <TenButton variant="contained" color="third-01">
              <Typography className={classes.whiteFont}>Edit</Typography>
            </TenButton>
          </Box>
        </Box>
      </Box>
    </Dashboard>
  );
};

export default Profile;
