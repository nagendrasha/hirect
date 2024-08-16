import React from "react";
import { Box, TextField, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Searchbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
      }}
    >
      <IconButton>
        <SearchIcon />
      </IconButton>
      <TextField
        variant="outlined"
        placeholder="Job title, keywords, or company"
        InputProps={{
          sx: { border: "none", outline: "none" },
        }}
        fullWidth
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderLeft: "1px solid #ccc",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <LocationOnIcon />
        <TextField
          variant="outlined"
          placeholder="Delhi"
          InputProps={{
            sx: { border: "none", outline: "none" },
          }}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "0 4px 4px 0",
          height: "100%",
        }}
      >
        Find jobs
      </Button>
    </Box>
  );
};

export default Searchbar;
