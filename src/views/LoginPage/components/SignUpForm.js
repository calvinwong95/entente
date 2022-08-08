import React, { useState } from "react";
import { Box, Modal, Typography, Icon } from "@mui/material";
import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import TenButton from "../../../components/TenButton";

//icons

const SignUpForm = ({ handleFlip }) => {
  const classes = UseStyles();

  const [openModal, setOpenModal] = useState(false);
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
            onClick={() => setOpenModal(true)}
          >
            <Typography className={classes.whiteFont}>Sign Up</Typography>
          </TenButton>
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box
              sx={{
                width: 400,
                height: 180,
                backgroundColor: "white",
                position: "absolute",
                top: `calc((100% - 180px )/ 2 )`,
                left: `calc((100% - 400px) / 2)`,
                borderRadius: 5,
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Typography sx={{ textAlign: "center" }} color="third-01.main">
                Registration Complete
              </Typography>
              <Icon sx={{ fontSize: 50, color: "third-01.main" }}>
                check_circle_outline
              </Icon>
              <TenButton
                fullWidth
                variant="contained"
                color="third-01"
                onClick={() => {
                  setOpenModal(false);
                  handleFlip();
                }}
              >
                <Typography className={classes.whiteFont}>
                  Back to Login Screen
                </Typography>
              </TenButton>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
