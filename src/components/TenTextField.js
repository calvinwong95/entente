import React from "react";
import { Box, Typography, TextField, InputBase } from "@mui/material";
import UseStyles from "../hooks/useStyle";

const TenTextField = ({ label, errorMessage, ...props }) => {
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
      <TextField fullWidth size="small" {...props} />
      {errorMessage && (
        <Typography variant="subtitle2" className={classes.errorFont}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default TenTextField;
