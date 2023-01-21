import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Modal,
} from "@mui/material";
import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import TenButton from "../../../components/TenButton";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignInForm = ({ handleFlip }) => {
  const {
    userData,
    setLoading,
    loading,
    loginError,
    setLoginError,
    passwordResetSent,
    setPasswordResetSent,
  } = useContext(GlobalContext);
  const classes = UseStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [resetPWEmail, setResetPWEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          marginTop: 3.5,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
          borderRadius: 5,
        }}
      >
        <Formik
          initialValues={{
            username: "wongcheehoe123",
            password: "wongcheehoe123",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("A username is required"),
            password: Yup.string().required("A password is required"),
          })}
          onSubmit={(values) => {
            //utilize try catch to match the data with the sign up data.
            setLoginError(false);
            setLoading(true);
            setTimeout(() => {
              try {
                if (
                  values?.username === userData?.username &&
                  values?.password === userData?.password
                ) {
                  setLoading(false);
                  console.log("ID matches");
                  navigate("/profile");
                } else {
                  setLoading(false);
                  console.log("ID not match");
                  setLoginError(true);
                }
              } catch (error) {
                console.log("error at SignInForm");
              }
            }, 1500);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm,
          }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
                <Field
                  component={TenTextField}
                  fullWidth
                  error={errors.username && touched.username}
                  label="Username"
                  id="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={<ErrorMessage name="username" />}
                />
                <Field
                  component={TenTextField}
                  fullWidth
                  error={errors.password && touched.password}
                  value={values.password}
                  label="Password"
                  id="password"
                  name="password"
                  type={!showPassword ? "password" : "text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                        >
                          {showPassword && <Visibility />}
                          {!showPassword && <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  errorMessage={<ErrorMessage name="password" />}
                />
                {loginError && (
                  <Typography variant="subtitle2" className={classes.errorFont}>
                    Invalid Username or Password. Please try again.
                  </Typography>
                )}
                <TenButton
                  variant="contained"
                  color="third-01"
                  sxProps={{ height: 45, mt: 2 }}
                  onClick={handleSubmit}
                  loading={loading}
                >
                  <Typography className={classes.whiteFont}>Log In</Typography>
                </TenButton>
                {/*Dont have account */}
                <Box
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                >
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
                  onClick={() => {
                    setPasswordResetSent(false);
                    setOpenModal(true);
                  }}
                >
                  Forgot your password?
                </Typography>
              </Box>
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
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
                    justifyContent: !passwordResetSent
                      ? "space-around"
                      : "center",
                    rowGap: 2,
                  }}
                >
                  {!passwordResetSent && (
                    <>
                      <Typography
                        sx={{ textAlign: "center" }}
                        color="third-01.main"
                      >
                        Lost your password?
                      </Typography>
                      <Typography
                        sx={{ textAlign: "center" }}
                        color="third-01.main"
                      >
                        Insert your email that you registered and we’ll send a
                        link to reset your password .
                      </Typography>
                    </>
                  )}

                  {passwordResetSent && (
                    <Typography sx={{ textAlign: "center" }} color="green">
                      An email to reset password has been sent!
                    </Typography>
                  )}
                  {!passwordResetSent && (
                    <TenTextField
                      value={resetPWEmail}
                      onChange={(event) => setResetPWEmail(event.target.value)}
                      sx={{ width: "100%" }}
                    />
                  )}

                  <Box sx={{ display: "flex", columnGap: 2 }}>
                    {!passwordResetSent && (
                      <TenButton
                        sxProps={{ width: "30%" }}
                        variant="outlined"
                        color="third-01"
                        onClick={() => {
                          setOpenModal(false);
                        }}
                      >
                        <Typography color="third-01">Cancel</Typography>
                      </TenButton>
                    )}

                    <TenButton
                      fullWidth
                      loading={loading}
                      variant="contained"
                      color="third-01"
                      onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                          if (passwordResetSent) {
                            setLoading(false);
                            setOpenModal(false);
                          } else {
                            setLoading(false);
                            setPasswordResetSent(true);
                          }
                        }, 1500);
                      }}
                    >
                      <Typography className={classes.whiteFont}>
                        {passwordResetSent ? "Complete" : "Send"}
                      </Typography>
                    </TenButton>
                  </Box>
                </Box>
              </Modal>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignInForm;
