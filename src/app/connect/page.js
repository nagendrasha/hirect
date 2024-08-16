import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <Grid container>
        <Grid item lg={6}>
        <Typography
            sx={{
              mt: 10,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: { lg: "50px", xs: "45px", sm: "30px" },
            }}
            variant="h2"
          >
            Get the <span style={{ color: "#2ce2a2" }}>Hirect</span> <br /> App{" "}
          </Typography>
        </Grid>
    </Grid>
    <Footer/>
    </>
  )
}

export default page
