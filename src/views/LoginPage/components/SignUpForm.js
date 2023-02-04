import React, { useState, useContext } from "react";
import {
  Box,
  Modal,
  Typography,
  Icon,
  IconButton,
  InputAdornment,
} from "@mui/material";
import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import TenButton from "../../../components/TenButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GlobalContext } from "../../../context/GlobalContext";

//icons

const SignUpForm = ({ handleFlip }) => {
  const classes = UseStyles();
  const { loading, setLoading, setUserData } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
          padding: 4,
          borderRadius: 5,
        }}
      >
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirm_password: "",
            category: "default",
            email: "",
            phone_number: "",
            company_image: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(15, "Username must be less than 15 letters")
              .required("A username is required"),
            password: Yup.string()
              .required("A password is required")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "Password must contain 8 characters, one uppercase, one lowercase, one Number and one special case character"
              ),
            confirm_password: Yup.string()
              .required("Please re-enter your password")
              .oneOf([Yup.ref("password"), null], "Password must match"),
            email: Yup.string()
              .email("Please insert a correct email format")
              .required("An e-mail is required"),
            phone_number: Yup.string()
              .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Please insert a valid phone number"
              )
              .required("A phone number is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            setTimeout(() => {
              setUserData(values);
              resetForm();
              setLoading(false);
              setOpenModal(true);
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
                <Field
                  component={TenTextField}
                  fullWidth
                  value={values.confirm_password}
                  error={errors.confirm_password && touched.confirm_password}
                  label="Confirm Password"
                  id="confirm_password"
                  name="confirm_password"
                  type={!showConfirmPassword ? "password" : "text"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowConfirmPassword}
                        >
                          {showConfirmPassword && <Visibility />}
                          {!showConfirmPassword && <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  errorMessage={<ErrorMessage name="confirm_password" />}
                />
                <Field
                  component={TenTextField}
                  fullWidth
                  value={values.email}
                  error={errors.email && touched.email}
                  label="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={<ErrorMessage name="email" />}
                />
                <Field
                  component={TenTextField}
                  fullWidth
                  value={values.phone_number}
                  error={errors.phone_number && touched.phone_number}
                  label="Phone Number"
                  id="phone_number"
                  name="phone_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={<ErrorMessage name="phone_number" />}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 2,
                  marginTop: 2,
                }}
              >
                <TenButton
                  variant="outlined"
                  color="third-01"
                  fullWidth
                  sxProps={{ height: 45, width: "30%" }}
                  onClick={() => {
                    resetForm();
                    handleFlip();
                  }}
                >
                  <Typography color="third-01">Back</Typography>
                </TenButton>
                <TenButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="third-01"
                  loading={loading}
                  sxProps={{ height: 45 }}
                  onClick={handleSubmit}
                >
                  <Typography className={classes.whiteFont}>Sign Up</Typography>
                </TenButton>
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
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      rowGap: 2,
                    }}
                  >
                    <Typography
                      sx={{ textAlign: "center" }}
                      color="third-01.main"
                    >
                      Registration Complete!
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center" }}
                      color="third-01.main"
                    >
                      An email will be sent to you once your registration has
                      been verified and approved. Thank you
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
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUpForm;
