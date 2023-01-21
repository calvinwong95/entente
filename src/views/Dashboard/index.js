import React from "react";
import { Box } from "@mui/material";
import UseStyles from "../../hooks/useStyle";
import Navbar from "./components/Navbar";

//local imports

const Dashboard = ({ children }) => {
  const classes = UseStyles();

  return (
    <Box className={classes.masterRoot}>
      <Box className={classes.root}>
        <Box
          className={classes.glassmorphism}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Navbar />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              p: 4,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
