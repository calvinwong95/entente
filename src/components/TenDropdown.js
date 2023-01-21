import {
  FormControl,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";

const TenDropdown = ({ initialValue, label, children, disabled, ...props }) => {
  const [age, setAge] = useState(initialValue);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <FormControl fullWidth disabled={disabled}>
      <Typography variant="h4">{label}</Typography>

      <Select
        id="category"
        value={age}
        onChange={handleChange}
        sx={{ height: 40, marginBottom: 1, marginTop: 0.5 }}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default TenDropdown;
