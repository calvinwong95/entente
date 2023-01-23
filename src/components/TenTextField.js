import React, { useState } from "react";
import { Box, Typography, TextField, InputBase } from "@mui/material";
import UseStyles from "../hooks/useStyle";

const TenTextField = ({ charLimit, label, errorMessage, ...props }) => {
  const { value } = props;
  const classes = UseStyles();
  const [charCount, setCharCount] = useState(value?.length || 0);
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
      <TextField
        fullWidth
        size="small"
        {...props}
        inputProps={{ maxLength: charLimit }}
        onInput={(event) => {
          const { value } = event.target;
          setCharCount(value.length);
        }}
      />
      {charLimit && (
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="body2" color="light-gray-text.main">
            {`${charCount}/${charLimit}`}
          </Typography>
        </Box>
      )}

      {errorMessage && (
        <Typography variant="subtitle2" className={classes.errorFont}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default TenTextField;
