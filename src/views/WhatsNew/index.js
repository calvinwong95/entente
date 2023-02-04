import { Box, MenuItem, Modal, Typography, Icon } from "@mui/material";
import React, { useState } from "react";
import TenButton from "../../components/TenButton";
import TenNoDisplay from "../../components/TenNoDisplay";
import TenTextField from "../../components/TenTextField";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";
import TenCompanyCard from "./components/TenCompanyCard";

const WhatsNew = () => {
  const classes = UseStyles();
  const [data, setData] = useState([
    {
      company_id: 125,
      company_name: "BurgerLab Sdn. Bhd.",
      category: "F&B",
      message:
        "Event for Food Industry Collaboration this weekend on the 4th of March 2023. Join us if you like",
    },
    {
      company_id: 126,
      company_name: "Sime Darby Sdn. Bhd.",
      category: "Engineering",
      message:
        "Event for Convention Industrial Equipment Collaboration this weekend on the 4th of March 2023. Join us if you like",
    },
    {
      company_id: 127,
      company_name: "Christine Bakery Sdn. Bhd.",
      category: "F&B",
      message:
        "Event for Food Industry Collaboration this weekend on the 4th of March 2023. Join us if you like",
    },
  ]);

  return (
    <Dashboard>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h2">Browse for new collaborations!</Typography>
        </Box>
        <Box
          className={classes.defaultBackground}
          sx={{
            width: "100%",
            minHeight: "90%",
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
            data?.map((item) => {
              return (
                <Box key={item?.id}>
                  <TenCompanyCard companyData={item} />
                </Box>
              );
            })
          ) : (
            <TenNoDisplay />
          )}
        </Box>
      </Box>
    </Dashboard>
  );
};

export default WhatsNew;
