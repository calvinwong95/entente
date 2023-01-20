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
    <Box className={classes.masterRoot}>
      <Box
        className={classes.root}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <Typography className={classes.glassmorphismTitle} variant="title">
            entente
          </Typography>
          <MainPageInfo />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactCardFlip
            containerStyle={{
              display: "flex",
              alignSelf: "center",
            }}
            isFlipped={isFlipped}
            flipDirection={"vertical"}
          >
            <SignInForm handleFlip={handleFlip} />
            <SignUpForm handleFlip={handleFlip} />
          </ReactCardFlip>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
