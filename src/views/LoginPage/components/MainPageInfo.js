import React from "react";
import { Box, Typography } from "@mui/material";
import UseStyles from "../../../hooks/useStyle";

const MainPageInfo = () => {
  const classes = UseStyles();
  return (
    <Box sx={{ width: "50%" }}>
      <Box
        sx={{
          width: 450,
          height: 550,
          marginTop: 3.5,
          padding: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          rowGap: 1,
        }}
      >
        <Box>
          <Typography className={classes.whiteFont} variant="h1">
            Welcome
          </Typography>
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
      </Box>
    </Box>
  );
};

export default MainPageInfo;
