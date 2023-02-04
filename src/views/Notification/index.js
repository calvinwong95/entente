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

const Notification = () => {
  const classes = UseStyles();
  const { loading, setLoading } = useContext(GlobalContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToBeRemoved, setIdToBeRemoved] = useState("");
  const [data, setData] = useState([
    {
      company_id: 125,
      company_name: "HSBC Sdn. Bhd.",
      message:
        "I would like to collaborate and fund your event. Please contact me whenever you're available.",
    },
    {
      company_id: 126,
      company_name: "Maybank Sdn. Bhd.",
      message:
        "I would like to collaborate and fund your event. Please contact me whenever you're available. My email address is abc@gmail.com and my contact number is 012-3029102",
    },
    {
      company_id: 127,
      company_name: "BurgerLab Sdn. Bhd.",
      message:
        "I would like to collaborate and fund your event. Please contact me whenever you're available.",
    },
    {
      company_id: 128,
      company_name: "Inside Scoop Sdn. Bhd.",
      message:
        "I would like to collaborate and fund your event. Please contact me whenever you're available.",
    },
  ]);

  const handleDelete = (id) => {
    setOpenDeleteModal(true);
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

  return (
    <Dashboard>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h2">Notification</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxHeight: "90%",
            backgroundColor: "#FFFFFF",
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
              {data?.map((notification) => {
                return (
                  <Accordion className={classes.defaultBackground}>
                    <AccordionSummary
                      expandIcon={<Icon>expand_more_icon</Icon>}
                    >
                      <Typography className={classes.whiteFont}>
                        {notification.company_name} wants to collaborate with
                        you!
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          borderRadius: 1,
                          backgroundColor: "#FFFFFF",
                          padding: 2,
                        }}
                      >
                        <Typography>{notification.message}</Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100%",

                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <TenButton
                          sx={{ width: "10%" }}
                          variant="contained"
                          color="third-01"
                          onClick={() => handleDelete(notification?.company_id)}
                        >
                          <Typography className={classes.whiteFont}>
                            Delete
                          </Typography>
                        </TenButton>
                      </Box>
                      {/* Delete Warning */}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </>
          ) : (
            <TenNoDisplay />
          )}
        </Box>
        <TenModal
          title="Are you sure you want to delete this notification"
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
          message="Notifications will be permanently deleted if you proceed with this action."
          confirmFunction={() => confirmDelete(idToBeRemoved)}
          loading={loading}
        />
      </Box>
    </Dashboard>
  );
};

export default Notification;
