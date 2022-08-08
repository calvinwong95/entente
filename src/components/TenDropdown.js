import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const TenDropdown = ({ children }) => {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <FormControl fullWidth>
      <Select
        id="category"
        value={age}
        onChange={handleChange}
        sx={{ height: 40 }}
        placeholder="Please select a category"
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default TenDropdown;
