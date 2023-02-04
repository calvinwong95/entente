import { Box, Icon, Modal, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import UseStyles from "../../../hooks/useStyle";
import { Fastfood, Engineering } from "@mui/icons-material";
import TenMessageBox from "./TenMessageBox";
import { GlobalContext } from "../../../context/GlobalContext";
import TenButton from "../../../components/TenButton";

const TenCompanyCard = ({ companyData }) => {
  const { company_name, message, category } = companyData;
  const classes = UseStyles();
  const [openModal, setOpenModal] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const { loading, setLoading } = useContext(GlobalContext);

  const handleCard = () => {
    setOpenModal(!openModal);
  };

  const handleMessageSent = () => {
    setMessageSent(true);
  };

  return (
    <>
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
        onClick={handleCard}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {(() => {
            switch (category) {
              case "Food":
                return (
                  <Fastfood
                    sx={{ color: "primary-01.main", fontSize: "40px" }}
                  />
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
      <TenMessageBox
        companyName={company_name}
        open={openModal}
        loading={loading}
        setLoading={setLoading}
        confirmFunction={handleMessageSent}
        onClose={() => setOpenModal(false)}
      />
      <Modal open={messageSent} onClose={() => setMessageSent(false)}>
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
          <Typography sx={{ textAlign: "center" }} color="third-01.main">
            Your message has been delivered!
          </Typography>
          <Typography sx={{ textAlign: "center" }} color="third-01.main">
            Your collaborator will be able to see the message and contact you if
            they are interested.
          </Typography>
          <Icon sx={{ fontSize: 50, color: "primary-01.main" }}>
            check_circle_outline
          </Icon>
          <TenButton
            fullWidth
            variant="contained"
            color="third-01"
            onClick={() => {
              setMessageSent(false);
            }}
          >
            <Typography className={classes.whiteFont}>Back</Typography>
          </TenButton>
        </Box>
      </Modal>
    </>
  );
};

export default TenCompanyCard;
