import React from "react";
import { Box, Typography } from "@mui/material";
import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import TenButton from "../../../components/TenButton";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
const SignInForm = ({ handleFlip }) => {
  const classes = UseStyles();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        className={classes.glassmorphism}
        sx={{
          width: 450,
          height: "100%",
          marginTop: 3.5,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
          borderRadius: 5,
        }}
      >
        {/* Formik Starts Here */}
        <Formik>
          <Form>
            <TenTextField label="Username" />
            <TenTextField label="Password" />
            <TenButton
              variant="contained"
              color="third-01"
              sxProps={{ height: 45 }}
              onClick={() => navigate(`/profile`)}
            >
              <Typography className={classes.whiteFont}>Log In</Typography>
            </TenButton>
          </Form>
        </Formik>

        {/*Dont have account */}
        <Box sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}>
          <Typography variant="body1" sx={{ fontSize: 14 }}>
            Don't have an account yet?
          </Typography>
          <Typography
            onClick={() => handleFlip()}
            variant="body1"
            sx={{
              fontSize: 14,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Sign Up Here!
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ fontSize: 12, cursor: "pointer" }}
          className={classes.errorFont}
        >
          Forgot your password?
        </Typography>
      </Box>
    </Box>
  );
};

export default SignInForm;
