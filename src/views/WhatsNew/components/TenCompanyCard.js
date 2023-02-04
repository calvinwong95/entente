import { Box, Icon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UseStyles from "../../../hooks/useStyle";
import { Fastfood, Engineering } from "@mui/icons-material";

const TenCompanyCard = ({ companyData }) => {
  const { company_name, message, category } = companyData;
  const classes = UseStyles();

  return (
    <Box
      className={classes.glassmorphism}
      sx={{
        width: "250px",
        minHeight: "200px",
        border: 1,
        borderColor: "#FFF",
        borderRadius: 2.5,
        p: 2,
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {(() => {
          switch (category) {
            case "F&B":
              return (
                <Fastfood sx={{ color: "primary-01.main", fontSize: "40px" }} />
              );
            case "Engineering":
              return (
                <Engineering
                  sx={{ color: "primary-01.main", fontSize: "40px" }}
                />
              );

            default:
              return null;
          }
        })()}
      </Box>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {company_name}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "start" }}>
          Message:
        </Typography>
        <Box
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          <Typography variant="h4" noWrap sx={{ textAlign: "center" }}>
            {message}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TenCompanyCard;
