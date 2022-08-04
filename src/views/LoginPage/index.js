import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import UseStyles from "../../hooks/useStyle";

//local imports
import MainPageInfo from "./components/MainPageInfo";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import ReactCardFlip from "react-card-flip";

const LoginPage = () => {
  const classes = UseStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Box
      className={classes.root}
      sx={{
        position: "relative",
        paddingX: 20,
        paddingY: 7.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -110,
          left: -20,
          zIndex: 1,
        }}
      >
        <Typography
          className={classes.glassmorphismTitle}
          sx={{ fontSize: 250 }}
        >
          entente
        </Typography>
      </Box>
      <MainPageInfo />
      <ReactCardFlip
        containerStyle={{ backgroundColor: "red" }}
        isFlipped={isFlipped}
        flipDirection={"horizontal"}
      >
        <SignInForm handleFlip={handleFlip} />
        <SignUpForm handleFlip={handleFlip} />
      </ReactCardFlip>
    </Box>
  );
};

export default LoginPage;
