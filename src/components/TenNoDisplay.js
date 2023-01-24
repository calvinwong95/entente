import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Typography } from "@mui/material";

const TenNoDisplay = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ErrorOutlineIcon sx={{ color: "grey.main", fontSize: 60 }} />
      <Typography variant="h4" sx={{ color: "grey.main" }}>
        Sorry! There is currently no data to be displayed
      </Typography>
    </Box>
  );
};

export default TenNoDisplay;
