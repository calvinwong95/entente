import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";

const TenDropdown = ({
  value,
  onChange,
  label,
  children,
  disabled,
  ...props
}) => {
  return (
    <FormControl fullWidth disabled={disabled}>
      <Typography variant="h4">{label}</Typography>

      <Select
        id="category"
        value={value}
        onChange={onChange}
        sx={{ height: 40, marginBottom: 1, marginTop: 0.5 }}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default TenDropdown;
