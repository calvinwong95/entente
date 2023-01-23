import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import TenButton from "./TenButton";
import UseStyles from "../hooks/useStyle";

const TenModal = ({
  title = "Are you sure about the new changes?",
  open,
  onClose,
  message,
  confirmFunction,
  loading,
}) => {
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

          justifyContent: "space-evenly",
          rowGap: 2,
        }}
      >
        <Typography sx={{ textAlign: "center" }} color="third-01.main">
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center" }} color="error.main">
          {message}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
          <TenButton
            fullWidth
            variant="outlined"
            color="third-01"
            onClick={onClose}
          >
            <Typography sx={{ color: "third-01.main" }}>Cancel</Typography>
          </TenButton>

          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            onClick={confirmFunction}
            loading={loading}
          >
            <Typography className={classes.whiteFont}>Confirm</Typography>
          </TenButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default TenModal;
