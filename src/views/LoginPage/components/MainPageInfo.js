import React from "react";
import { Box, Typography } from "@mui/material";
import UseStyles from "../../../hooks/useStyle";

const MainPageInfo = () => {
  const classes = UseStyles();
  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        px: 10,
        display: "flex",
        flexDirection: "column",
        rowGap: 1,
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Typography className={classes.whiteFont} variant="h2">
        Hassle-free collaboration with
      </Typography>
      <Typography
        className={classes.whiteFont}
        variant="h2"
        sx={{ fontWeight: "bold", marginBottom: 2 }}
      >
        3 simple steps
      </Typography>
      <Typography className={classes.whiteFont} variant="h1">
        Create.
      </Typography>
      <Typography className={classes.whiteFont} variant="h1">
        Connect.
      </Typography>
      <Typography className={classes.whiteFont} variant="h1">
        Collaborate.
      </Typography>
    </Box>
  );
};

export default MainPageInfo;
