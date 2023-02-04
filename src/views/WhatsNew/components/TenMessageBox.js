import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import TenButton from "../../../components/TenButton";
import UseStyles from "../../../hooks/useStyle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TenTextField from "../../../components/TenTextField";
import * as Yup from "yup";

const TenMessageBox = ({
  companyName,
  open,
  setLoading,
  onClose,
  confirmFunction,
  loading,
}) => {
  const classes = UseStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className={classes.defaultBackground}
        sx={{
          width: 1000,
          height: 500,

          position: "absolute",
          top: `calc((100% - 500px )/ 2 )`,
          left: `calc((100% - 1000px) / 2)`,
          borderRadius: 2.5,
          padding: 4,
        }}
      >
        <Box
          className={classes.glassmorphism}
          sx={{
            width: "100%",
            height: "100%",
            p: 4,
            borderRadius: 2.5,
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ textAlign: "start", fontWeight: "bold" }}
            color="third-01.main"
          >
            {companyName}
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "start", fontWeight: "bold" }}
            color="third-01.main"
          >
            Guidelines
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "start" }}
            color="third-01.main"
          >
            Fill in the message to let them know you want to collaborate! <br />{" "}
            We recommend to put in your email address and contact number for
            easier reach!
          </Typography>

          <Formik
            initialValues={{
              notification_message: "",
            }}
            validationSchema={Yup.object({
              notification_message: Yup.string().required(
                "Message cannot be empty as your collaborator will not see anything!"
              ),
            })}
            onSubmit={(values) => {
              setLoading(true);
              setTimeout(() => {
                onClose();
                confirmFunction();
                setLoading(false);
              }, 1500);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <Form style={{ width: "100%", height: "100%" }}>
                <Field
                  component={TenTextField}
                  fullWidth
                  label="Message"
                  id="notification_message"
                  name="notification_message"
                  value={values?.notification_message}
                  multiline
                  error={
                    errors.notification_message && touched.notification_message
                  }
                  rows={6}
                  maxRows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  charLimit={400}
                  errorMessage={<ErrorMessage name="notification_message" />}
                  sx={{ backgroundColor: "#FFF", border: "none" }}
                />

                <Box
                  sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}
                >
                  <TenButton
                    fullWidth
                    variant="outlined"
                    color="third-01"
                    onClick={onClose}
                  >
                    <Typography sx={{ color: "third-01.main" }}>
                      Cancel
                    </Typography>
                  </TenButton>

                  <TenButton
                    fullWidth
                    variant="contained"
                    color="third-01"
                    onClick={handleSubmit}
                    loading={loading}
                  >
                    <Typography className={classes.whiteFont}>Send</Typography>
                  </TenButton>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
};

export default TenMessageBox;
