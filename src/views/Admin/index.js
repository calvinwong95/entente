import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Icon,
} from "@mui/material";
import React, { useState, useContext } from "react";
import TenButton from "../../components/TenButton";
import TenModal from "../../components/TenModal";
import TenNoDisplay from "../../components/TenNoDisplay";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";
import { GlobalContext } from "../../context/GlobalContext";

const Admin = () => {
  const classes = UseStyles();
  const { loading, setLoading } = useContext(GlobalContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openApproveModal, setOpenApproveModal] = useState(false);
  const [idToBeRemoved, setIdToBeRemoved] = useState("");
  const [data, setData] = useState([
    {
      company_id: 125,
      company_name: "HSBC Sdn. Bhd.",
      email_address: "HSBC@gmail.com",
      phone_number: "012-3456789",
    },
    {
      company_id: 126,
      company_name: "Maybank Sdn. Bhd.",
      email_address: "Maybank@gmail.com",
      phone_number: "012-3456789",
    },
    {
      company_id: 127,
      company_name: "BurgerLab Sdn. Bhd.",
      email_address: "BurgerLab@gmail.com",
      phone_number: "012-3456789",
    },
    {
      company_id: 128,
      company_name: "Inside Scoop Sdn. Bhd.",
      email_address: "insideScoop@gmail.com",
      phone_number: "012-3456789",
    },
  ]);

  const handleDelete = (id) => {
    setOpenDeleteModal(true);
    setIdToBeRemoved(id);
  };
  const handleApprove = (id) => {
    setOpenApproveModal(true);
    setIdToBeRemoved(id);
  };

  const confirmDelete = (id) => {
    setLoading(true);
    setTimeout(() => {
      let newArr = data.filter((item) => item.company_id !== id);
      setData(newArr);
      setLoading(false);
      setOpenDeleteModal(false);
    }, 1000);
  };

  const confirmApprove = (id) => {
    setLoading(true);
    setTimeout(() => {
      let newArr = data.filter((item) => item.company_id !== id);
      setData(newArr);
      setLoading(false);
      setOpenApproveModal(false);
    }, 1000);
  };

  return (
    <Dashboard>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h2">Admin Dashboard</Typography>
        </Box>
        <Box
          className={classes.defaultBackground}
          sx={{
            width: "100%",
            maxHeight: "90%",

            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            padding: 4,
            overflow: "auto",
            //To edit scrollbar in future
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
          {data?.length !== 0 ? (
            <>
              {data?.map((request, index) => {
                return (
                  <Box
                    key={index}
                    className={classes.glassmorphism}
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 1,
                      p: 4,
                      my: 1,
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ width: "20%", mr: 2 }}>
                          Company Username:
                        </Typography>
                        <Typography>{request.company_name}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ width: "20%", mr: 2 }}>
                          Email Address:
                        </Typography>
                        <Typography>{request.email_address}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography sx={{ width: "20%", mr: 2 }}>
                          Contact Number:
                        </Typography>
                        <Typography>{request.phone_number}</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        columnGap: 2,
                      }}
                    >
                      <TenButton
                        sx={{ width: "10%" }}
                        variant="outlined"
                        color="third-01"
                        onClick={() => handleDelete(request?.company_id)}
                      >
                        <Typography sx={{ color: "third-01.main" }}>
                          Reject
                        </Typography>
                      </TenButton>
                      <TenButton
                        sx={{ width: "10%" }}
                        variant="contained"
                        color="third-01"
                        onClick={() => handleApprove(request?.company_id)}
                      >
                        <Typography className={classes.whiteFont}>
                          Approve
                        </Typography>
                      </TenButton>
                    </Box>
                  </Box>
                );
              })}
            </>
          ) : (
            <TenNoDisplay />
          )}
        </Box>
        <TenModal
          title="Are you sure you want to delete this request"
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          message="An email will be delivered to the email address provided to notify the user on their account approval status."
          confirmFunction={() => confirmDelete(idToBeRemoved)}
          loading={loading}
        />
        <TenModal
          title="Are you ready to onboard this company?"
          open={openApproveModal}
          onClose={() => setOpenApproveModal(false)}
          message="An email will be delivered to the email address provided to notify the user on their account approval status."
          confirmFunction={() => confirmApprove(idToBeRemoved)}
          loading={loading}
        />
      </Box>
    </Dashboard>
  );
};

export default Admin;
