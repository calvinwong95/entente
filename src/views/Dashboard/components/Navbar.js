import React from "react";
import { Box, Typography } from "@mui/material";
import UseStyles from "../../../hooks/useStyle";
import { useNavigate } from "react-router-dom";

import TenButton from "../../../components/TenButton";

const Navbar = () => {
  const classes = UseStyles();
  const navigate = useNavigate();
  return (
    <Box
      className={classes.navbar}
      sx={{
        width: "20%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            borderRadius: 50,
            width: 100,
            height: 100,
            backgroundColor: "second-01.main",
          }}
        >
          {/*Insert Image Here*/}
        </Box>
        <Typography
          variant="h4"
          color="third-01.main"
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          Invoke Sdn Bhd
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            width: "100%",
          }}
        >
          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <Typography className={classes.whiteFont}>Profile</Typography>
          </TenButton>
          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            onClick={() => {
              navigate("/mypost");
            }}
          >
            <Typography className={classes.whiteFont}>My Post</Typography>
          </TenButton>
          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            onClick={() => {
              navigate("/whatsnew");
            }}
          >
            <Typography className={classes.whiteFont}>What's New</Typography>
          </TenButton>
          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            onClick={() => {
              navigate("/notification");
            }}
          >
            <Typography className={classes.whiteFont}>Notification</Typography>
          </TenButton>
        </Box>
      </Box>

      <TenButton
        fullWidth
        variant="contained"
        color="third-01"
        onClick={() => {
          navigate("/");
        }}
      >
        <Typography className={classes.whiteFont}>Log Out</Typography>
      </TenButton>
    </Box>
  );
};

export default Navbar;
