import {
  Box,
  MenuItem,
  Modal,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState, useContext } from "react";
import TenButton from "../../../components/TenButton";
import TenDropdown from "../../../components/TenDropdown";
import TenDropzone from "../../../components/TenDropzone";
import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import { AccountCircle } from "@mui/icons-material";
import { GlobalContext } from "../../../context/GlobalContext";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ProfileSettings = () => {
  const classes = UseStyles();
  const { loading, setLoading, userData, setUserData } =
    useContext(GlobalContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState(userData?.category);
  const handleEditProfile = () => {
    if (isEditProfile) {
      setIsEditProfile(false);
    } else {
      setIsEditProfile(true);
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSetCategory = (event) => {
    setCategory(event.target.value);
  };

  //   console.log(userData);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 2.5,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        rowGap: 2,
      }}
    >
      <Typography variant="h3">Profile Settings</Typography>
      <Formik
        initialValues={{
          username: userData?.username,
          password: userData?.password,
          category: "default",
          email: userData?.email,
          phone_number: userData?.phone_number,
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
        onSubmit={(values) => {
          setLoading(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setUserData(values);
            handleEditProfile();
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
          setFieldValue,
          resetForm,
        }) => (
          <Form style={{ width: "100%", height: "100%" }}>
            {!isEditProfile ? (
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  mb: 2,
                  overflowY: "auto",
                  px: 2,
                  "&::-webkit-scrollbar": {
                    width: "5px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#DCF2FF",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#1D388F61",
                    borderRadius: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AccountCircle color="white" sx={{ fontSize: 100 }} />
                  </Box>
                </Box>
                <TenTextField
                  label="Username"
                  disabled
                  value={userData?.username}
                />
                <TenTextField
                  label="Password"
                  disabled
                  type="password"
                  value={userData?.password}
                />
                <TenDropdown
                  label="Category"
                  disabled
                  value={userData?.category}
                >
                  <MenuItem value="default">Please select a category</MenuItem>
                  <MenuItem value={"Food"}>Food</MenuItem>
                  <MenuItem value={"Electronics"}>Electronics</MenuItem>
                  <MenuItem value={"Engineering"}>Engineering</MenuItem>
                </TenDropdown>

                <TenTextField
                  label="Email Addresss"
                  disabled
                  value={userData?.email}
                />
                <TenTextField
                  label="Phone Number"
                  disabled
                  value={userData?.phone_number}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  mb: 2,
                  overflowY: "auto",
                  px: 2,
                  "&::-webkit-scrollbar": {
                    width: "5px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#DCF2FF",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#1D388F61",
                    borderRadius: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TenDropzone></TenDropzone>
                  </Box>
                </Box>
                <Field
                  component={TenTextField}
                  fullWidth
                  error={errors.username && touched.username}
                  label="Username"
                  id="username"
                  name="username"
                  value={values?.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={<ErrorMessage name="username" />}
                />
                <Field
                  component={TenTextField}
                  fullWidth
                  error={errors.password && touched.password}
                  value={values?.password}
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
                  as={TenDropdown}
                  name="category"
                  label="Category"
                  value={category}
                  onChange={(e) => {
                    handleSetCategory(e);
                    setFieldValue("category", e.target.value);
                  }}
                >
                  <MenuItem value="default">Please select a category</MenuItem>
                  <MenuItem value={"Food"}>Food</MenuItem>
                  <MenuItem value={"Electronics"}>Electronics</MenuItem>
                  <MenuItem value={"Engineering"}>Engineering</MenuItem>
                </Field>
                <Field
                  component={TenTextField}
                  fullWidth
                  value={values?.email}
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
                  value={values?.phone_number}
                  error={errors.phone_number && touched.phone_number}
                  label="Phone Number"
                  id="phone_number"
                  name="phone_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={<ErrorMessage name="phone_number" />}
                />
              </Box>
            )}

            <Box sx={{ width: "100%" }}>
              {!isEditProfile ? (
                <>
                  <TenButton
                    variant="contained"
                    color="third-01"
                    onClick={handleEditProfile}
                  >
                    <Typography className={classes.whiteFont}>Edit</Typography>
                  </TenButton>
                </>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <TenButton
                    variant="outlined"
                    color="third-01"
                    onClick={handleEditProfile}
                  >
                    <Typography sx={{ color: "third-01" }}>Cancel</Typography>
                  </TenButton>
                  <TenButton
                    loading={loading}
                    variant="contained"
                    color="third-01"
                    onClick={handleSubmit}
                  >
                    <Typography className={classes.whiteFont}>Save</Typography>
                  </TenButton>
                </Box>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProfileSettings;
