import React from "react";
import { Box, Typography } from "@mui/material";
import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import TenButton from "../../../components/TenButton";

const SignUpForm = ({ handleFlip }) => {
  const classes = UseStyles();
  return (
    <Box
      sx={{
        zIndex: 2,

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box
        className={classes.glassmorphism}
        sx={{
          width: 450,

          marginTop: 3.5,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
          borderRadius: 5,
        }}
      >
        <TenTextField label="Username" />
        <TenTextField label="Password" />
        <TenTextField label="Confirm Password" />
        <TenTextField label="Email" />
        <TenTextField label="Phone Number" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 2,
            marginTop: 4,
          }}
        >
          <TenButton
            variant="outlined"
            color="third-01"
            fullWidth
            sxProps={{ height: 45, width: "30%" }}
            onClick={() => handleFlip()}
          >
            <Typography color="third-01">Back</Typography>
          </TenButton>
          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            sxProps={{ height: 45 }}
          >
            <Typography className={classes.whiteFont}>Log In</Typography>
          </TenButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
