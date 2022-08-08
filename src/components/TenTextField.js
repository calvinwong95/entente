import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import UseStyles from "../hooks/useStyle";

const TenTextField = ({ label, placeholder, errorMessage }) => {
  const classes = UseStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 0.5,
        marginBottom: 1,
      }}
    >
      <Typography variant="h4">{label}</Typography>
      <TextField fullWidth size="small" placeholder={placeholder}></TextField>
      {errorMessage && (
        <Typography className={classes.errorFont}>{errorMessage}</Typography>
      )}
    </Box>
  );
};

export default TenTextField;
