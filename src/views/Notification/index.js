import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Icon,
} from "@mui/material";
import React, { useState } from "react";
import TenButton from "../../components/TenButton";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";

const Notification = () => {
  const classes = UseStyles();

  const data = [
    {
      name: "Company A",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company B",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company C",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company D",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company E",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company A",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company B",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company C",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company D",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company E",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company A",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company B",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company C",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company D",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company E",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company A",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company B",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company C",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company D",
      message: "Lorem Ipsum blah blah blah blah",
    },
    {
      name: "Company E",
      message: "Lorem Ipsum blah blah blah blah",
    },
  ];

  return (
    <Dashboard>
      <Box sx={{ height: "100%", paddingBottom: 2 }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h1">Notification</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxHeight: "90%",
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            padding: 2,
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
          {data?.map((notification) => {
            return (
              <Accordion>
                <AccordionSummary expandIcon={<Icon>expand_more_icon</Icon>}>
                  <Typography>
                    {notification.name} wants to collaborate with you!
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      width: "100%",
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
                      onClick={() => console.log("notification deleted")}
                    >
                      <Typography className={classes.whiteFont}>
                        Delete
                      </Typography>
                    </TenButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Dashboard>
  );
};

export default Notification;
