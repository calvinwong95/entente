import React from "react";
import { Box, Button } from "@mui/material";

const TenButton = ({ variant, color, children, onClick, sxProps, ...rest }) => {
  return (
    <Button
      disableRipple
      variant={variant}
      color={color}
      sx={{ width: "100%", ...sxProps }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TenButton;
