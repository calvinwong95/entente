import React from "react";
import { Button, CircularProgress } from "@mui/material";

const TenButton = ({
  loading = false,
  variant,
  color,
  children,
  onClick,
  sxProps,
  ...rest
}) => {
  return (
    <Button
      disableRipple
      variant={variant}
      color={color}
      sx={{ width: "100%", ...sxProps }}
      onClick={!loading && onClick}
      {...rest}
    >
      {!loading ? (
        children
      ) : (
        <CircularProgress
          size={24}
          thickness={1}
          sx={{
            color: variant === "contained" ? "#DCF2FF" : "#3E4756",
          }}
        />
      )}
    </Button>
  );
};

export default TenButton;
