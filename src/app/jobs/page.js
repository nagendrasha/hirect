"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Grid, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Searchbar from "@/components/Searchbar";
import axios from "axios";

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(`https://hirect.omggarmentfashion.store/public/api/jobs`);
      setJobs(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      {/* <Searchbar/> */}
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h4" sx={{ mt: 4 }}>
            Latest Jobs
          </Typography>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{ display: "flex", justifyContent: "center", my: 5 }}
        >
          {Array.isArray(jobs) &&
            jobs.map((item, index) => (
              <Card sx={{ width: 300, m: 2 }} key={index}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.salary}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
