// src/JobSearch.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from '@mui/material';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// Hardcoded location name to ID mapping
const locationNameToId = {
  'Noida': '104700236',
  'New York': '105000000',
  'San Francisco': '107000000',
  'Bengaluru': '102000000',
  'Mumbai': '103000000',
  // Add more mappings as needed
};

const Jobs = () => {
  const [keywords, setKeywords] = useState("golang");
  const [location, setLocation] = useState("Noida"); // Default to Noida
  const [datePosted, setDatePosted] = useState("anyTime");
  const [sort, setSort] = useState("mostRelevant");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    const locationId = locationNameToId[location] || '104700236'; // Fallback to Noida ID if location is not found

    const options = {
      method: "GET",
      url: "https://linkedin-data-api.p.rapidapi.com/search-jobs",
      params: {
        keywords,
        locationId,
        datePosted,
        sort,
      },
      headers: {
        "x-rapidapi-key": "ddb8c1c205msh5a3972024ba2835p1cd237jsn893abf873908",
        "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Response data:", response.data); // Log the response data
      setJobs(response.data.data || []); // Access the `data` array and ensure it is an array
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">Search Jobs</Typography>
            <TextField
              sx={{ mt: 3 }}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              label="Keywords"
            />
            <FormControl sx={{ mt: 2 }}>
              <InputLabel id="location-select-label">Location</InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Location"
              >
                {Object.keys(locationNameToId).map((loc) => (
                  <MenuItem key={loc} value={loc}>
                    {loc}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <InputLabel id="date-posted-select-label">Time</InputLabel>
              <Select
                labelId="date-posted-select-label"
                id="date-posted-select"
                value={datePosted}
                onChange={(e) => setDatePosted(e.target.value)}
                label="Time"
              >
                <MenuItem value="anyTime">Any Time</MenuItem>
                <MenuItem value="past24Hours">Past 24 Hours</MenuItem>
                <MenuItem value="pastWeek">Past Week</MenuItem>
                <MenuItem value="pastMonth">Past Month</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <InputLabel id="sort-select-label">Sort</InputLabel>
              <Select
                labelId="sort-select-label"
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                label="Sort"
              >
                <MenuItem value="mostRelevant">Most Relevant</MenuItem>
                <MenuItem value="mostRecent">Most Recent</MenuItem>
              </Select>
            </FormControl>
            <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
              Search
            </Button>
            
            {loading && <CircularProgress sx={{ mt: 2 }} color="secondary" />}
            {error && <p>Error: {error.message}</p>}
          </Box>
        </Grid>
      </Grid>
     
      <Grid container>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id} sx={{ mt: 2 }}>
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {job.title.slice(0, 40) + '..'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company: {job.company ? job.company.name : "No Company Info"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Location: {job.location ? job.location : "No Location Info"}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  View Job
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Jobs;
