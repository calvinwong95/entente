import React from "react";
import { Box } from "@mui/material";
import UseStyles from "../../hooks/useStyle";
import Navbar from "./components/Navbar";

//local imports

const Dashboard = ({ children }) => {
  const classes = UseStyles();

  return (
    <Box
      className={classes.root}
      sx={{
        position: "relative",
        paddingX: 20,
        paddingY: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        className={classes.glassmorphism}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Navbar />
        <Box
          sx={{
            width: "85%",
            height: "100%",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,

            padding: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
