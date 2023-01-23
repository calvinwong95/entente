import { Box, Typography, Switch, Modal } from "@mui/material";
import React, { useState, useContext } from "react";
import TenButton from "../../../components/TenButton";

import TenTextField from "../../../components/TenTextField";
import UseStyles from "../../../hooks/useStyle";
import { AccountCircle } from "@mui/icons-material";
import { GlobalContext } from "../../../context/GlobalContext";
import { Form, Formik, Field, ErrorMessage } from "formik";
import TenModal from "../../../components/TenModal";

const DisplaySettings = () => {
  const classes = UseStyles();
  const { loading, setLoading, displayData, setDisplayData } =
    useContext(GlobalContext);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [displayActive, setDisplayActive] = useState(false);
  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openDisplayModal, setOpenDisplayModal] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);

  const handleEditProfile = () => {
    if (isEditProfile) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsEditProfile(false);
        setOpenCancelModal(false);
      }, 1000);
    } else {
      setIsEditProfile(true);
    }
  };

  const handleSwitch = () => {
    setOpenDisplayModal(true);
  };

  const switchConfirm = () => {
    setDisplayActive(!displayActive);
    setOpenDisplayModal(false);
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
      <Typography variant="h3">Display Settings</Typography>
      <Formik
        initialValues={{
          company_name: "",
          broadcast_message: "",
        }}
        onSubmit={(values) => {
          setLoading(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setDisplayData(values);
            setLoading(false);
            handleEditProfile();
            setOpenSettingModal(false);
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
                <TenTextField
                  label="Company Name"
                  disabled
                  value={displayData?.company_name}
                  placeholder="Insert company name"
                />
                <TenTextField
                  label="Broadcast Message"
                  disabled
                  multiline
                  rows={4}
                  maxRows={4}
                  value={displayData?.broadcast_message}
                  placeholder="Insert the event that you require collaboration"
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
                <Field
                  component={TenTextField}
                  fullWidth
                  label="Company Name"
                  id="company_name"
                  name="company_name"
                  value={values?.company_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  charLimit={30}
                />
                <Field
                  component={TenTextField}
                  fullWidth
                  label="Broadcast Message"
                  id="broadcast_message"
                  name="broadcast_message"
                  value={values?.broadcast_message}
                  multiline
                  rows={4}
                  maxRows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  charLimit={150}
                />
              </Box>
            )}

            <Box sx={{ width: "100%" }}>
              {!isEditProfile ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h4">Display: </Typography>
                    <Switch
                      checked={displayActive}
                      onChange={handleSwitch}
                      disableRipple
                    />
                  </Box>

                  <TenButton
                    variant="contained"
                    color="third-01"
                    onClick={handleEditProfile}
                  >
                    <Typography className={classes.whiteFont}>Edit</Typography>
                  </TenButton>
                </Box>
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
                    onClick={() => setOpenCancelModal(true)}
                  >
                    <Typography sx={{ color: "third-01" }}>Cancel</Typography>
                  </TenButton>
                  <TenButton
                    loading={loading}
                    variant="contained"
                    color="third-01"
                    onClick={() => setOpenSettingModal(true)}
                  >
                    <Typography className={classes.whiteFont}>Save</Typography>
                  </TenButton>
                </Box>
              )}
            </Box>
            {/* Switch Modal */}
            <TenModal
              open={openDisplayModal}
              onClose={() => setOpenDisplayModal(false)}
              message="Your post display will be seen by other companies depending on whether
        you have switch on the display."
              confirmFunction={switchConfirm}
            />
            {/* Display Settings Modal */}
            <TenModal
              open={openSettingModal}
              onClose={() => setOpenSettingModal(false)}
              loading={loading}
              message="The changes provided will be added accordingly."
              confirmFunction={handleSubmit}
            />
            {/*Cancel Display Settings Modal */}
            <TenModal
              open={openCancelModal}
              onClose={() => setOpenCancelModal(false)}
              loading={loading}
              title="Are you sure you want to cancel?"
              message="The changes made will not be saved if you cancel."
              confirmFunction={handleEditProfile}
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default DisplaySettings;
