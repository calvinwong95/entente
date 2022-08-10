import { Box, MenuItem, Modal, Typography, Icon } from "@mui/material";
import React, { useState } from "react";
import TenButton from "../../components/TenButton";
import TenDropdown from "../../components/TenDropdown";
import TenDropzone from "../../components/TenDropzone";
import TenTextField from "../../components/TenTextField";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";

const Profile = () => {
  const classes = UseStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <Dashboard>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h2">Profile</Typography>
        </Box>

        <Box
          sx={{
            width: 300,

            backgroundColor: "#FFFFFF",
            borderRadius: 5,
            border: 1,
            borderColor: "third-01.main",
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: isEdit ? 0 : 1,
            }}
          >
            <Typography>Company Logo</Typography>
            {!isEdit && (
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                  border: 1,
                  borderColor: "third-01.main",
                  backgroundColor: "second-01.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 2,
                }}
              >
                <Box
                  sx={{
                    width: 75,
                    height: 75,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                  }}
                ></Box>
              </Box>
            )}
            {isEdit && <TenDropzone></TenDropzone>}
          </Box>
          <Box>
            <Typography>Username</Typography>
            <TenTextField
              placeholder="Username"
              disabled={isEdit ? false : true}
            ></TenTextField>
          </Box>
          <Box>
            <Typography>Email</Typography>
            <TenTextField
              placeholder="Username@gmail.com"
              disabled={isEdit ? false : true}
            >
              {" "}
            </TenTextField>
          </Box>
          <Box>
            <Typography>Contact Number</Typography>
            <TenTextField
              placeholder="019-5032912"
              disabled={isEdit ? false : true}
            ></TenTextField>
          </Box>
          <Box>
            <Typography>Category</Typography>
            <TenDropdown disabled={isEdit ? false : true}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenn</MenuItem>
              <MenuItem value={30}>Thren</MenuItem>
            </TenDropdown>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 1,
              justifyContent: "flex-end",
              marginTop: 2,
            }}
          >
            {isEdit && (
              <TenButton
                variant="outlined"
                color="third-01"
                onClick={() => setIsEdit(false)}
              >
                <Typography sx={{ color: "third-01.main" }}>Cancel</Typography>
              </TenButton>
            )}
            {isEdit && (
              <TenButton
                variant="contained"
                color="third-01"
                onClick={() => setOpenModal(true)}
              >
                <Typography className={classes.whiteFont}>Save</Typography>
              </TenButton>
            )}
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
                  Profile Page Saved
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
                    setIsEdit(false);
                  }}
                >
                  <Typography className={classes.whiteFont}>Back</Typography>
                </TenButton>
              </Box>
            </Modal>
            {!isEdit && (
              <TenButton
                sx={{ width: "48.5%" }}
                variant="contained"
                color="third-01"
                onClick={() => setIsEdit(true)}
              >
                <Typography className={classes.whiteFont}>Edit</Typography>
              </TenButton>
            )}
          </Box>
        </Box>
      </Box>
    </Dashboard>
  );
};

export default Profile;
