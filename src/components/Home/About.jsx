import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import About from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9fafc",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}
        >
          About GLUCare
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Image or Illustration */}
          <Grid item xs={12} md={6} sx= {{marginBottom : '20px'}}>
            <Box
              component="img"
              src={About} // Replace with your image URL
              alt="NIR-based glucose monitoring"
              sx={{
                width: "80%",
                height: "400px",
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>

          {/* Right Side: Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h7" component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              The existing challenge in non-invasive glucose detection lies in the limited
              commercialization of NIR devices due to issues related to accuracy. Current research
              suggests that NIR spectroscopy is a promising method for glucose monitoring, but its
              widespread adoption is hindered by a lack of precision.
            </Typography>
            <Typography variant="h7" component="p" color="text.secondary" sx={{ marginTop: "20px", lineHeight: 1.8 }}>
              Our project addresses this gap by enhancing accuracy and reliability through the
              incorporation of clinical parameters. By considering individual variations in
              physiology, our goal is to make NIR-based glucose detection more robust, thereby
              paving the way for the successful commercialization of non-invasive glucose
              monitoring solutions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
