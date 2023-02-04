import { Box, MenuItem, Modal, Typography, Icon, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import TenButton from "../../components/TenButton";
import TenDropdown from "../../components/TenDropdown";
import TenNoDisplay from "../../components/TenNoDisplay";
import TenTextField from "../../components/TenTextField";
import UseStyles from "../../hooks/useStyle";
import Dashboard from "../Dashboard";
import TenCompanyCard from "./components/TenCompanyCard";

const WhatsNew = () => {
  const classes = UseStyles();
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([
    {
      company_id: 125,
      company_name: "BurgerLab Sdn. Bhd.",
      category: "Food",
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
      category: "Food",
      message:
        "Event for Food Industry Collaboration this weekend on the 4th of March 2023. Join us if you like",
    },
    {
      company_id: 125,
      company_name: "BurgerLab Sdn. Bhd.",
      category: "Food",
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
      category: "Food",
      message:
        "Event for Food Industry Collaboration this weekend on the 4th of March 2023. Join us if you like",
    },
    {
      company_id: 125,
      company_name: "BurgerLab Sdn. Bhd.",
      category: "Food",
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
      category: "Food",
      message:
        "Event for Food Industry Collaboration this weekend on the 4th of March 2023. Join us if you like",
    },
  ]);

  const categories = ["All", "Food", "Engineering", "Electronics"];
  const [categoriesFilter, setCategoriesFilter] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSetCategory = (event) => {
    setCategoriesFilter(event.target.value);
  };

  useEffect(() => {
    setFilteredData(
      data?.filter((item) => {
        return (
          (categoriesFilter === "All" || item.category === categoriesFilter) &&
          item?.company_name.toLowerCase().includes(searchInput?.toLowerCase())
        );
      })
    );
  }, [categoriesFilter, searchInput]);

  return (
    <Dashboard>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="h2">Browse for new collaborations!</Typography>
        </Box>
        <Box
          sx={{
            marginBottom: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            columnGap: 2,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <TenTextField
              type="search"
              value={searchInput}
              label="Search"
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TenDropdown
              label="Categories"
              value={categoriesFilter}
              onChange={handleSetCategory}
            >
              {categories.map((category) => {
                return <MenuItem value={category}>{category}</MenuItem>;
              })}
            </TenDropdown>
          </Box>
        </Box>
        <Box
          className={classes.defaultBackground}
          sx={{
            width: "100%",
            minHeight: "80%",
            maxHeight: "80%",
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
          <Grid container spacing={2}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => {
                return (
                  <>
                    <Grid item xs={4} key={item?.id}>
                      <TenCompanyCard companyData={item} />
                    </Grid>
                  </>
                );
              })
            ) : (
              <TenNoDisplay />
            )}
          </Grid>
        </Box>
      </Box>
    </Dashboard>
  );
};

export default WhatsNew;
