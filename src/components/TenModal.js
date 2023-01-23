import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import TenButton from "./TenButton";
import UseStyles from "../hooks/useStyle";

const TenModal = ({ open, onClose }) => {
  const classes = UseStyles();
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          height: 250,
          backgroundColor: "white",
          position: "absolute",
          top: `calc((100% - 250px )/ 2 )`,
          left: `calc((100% - 400px) / 2)`,
          borderRadius: 5,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          rowGap: 2,
        }}
      >
        <Typography sx={{ textAlign: "center" }} color="third-01.main">
          Are you sure you want to do this?
        </Typography>
        <Typography sx={{ textAlign: "center" }} color="error.main">
          Your post display will be seen by other companies depending on whether
          you have switch on the display.
        </Typography>

        <TenButton fullWidth variant="contained" color="third-01">
          <Typography className={classes.whiteFont}>Yes, I am sure</Typography>
        </TenButton>
      </Box>
    </Modal>
  );
};

export default TenModal;
