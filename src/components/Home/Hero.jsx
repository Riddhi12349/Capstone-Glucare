import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Med_Pic from "../assets/med_pic.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        padding: "50px 20px",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            GLUCare
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            An Advanced Non-Invasive Glucose Monitoring System using NIR Spectroscopy.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} >
          <Box
            component="img"
            src={ Med_Pic}
            alt="Doctor illustration"
            sx={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;

