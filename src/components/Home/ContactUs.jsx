import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
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
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}
        >
          Contact Us
        </Typography>

       
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "80%",
                margin : '10%'
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                
                sx={{
                  backgroundColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#115293",
                  },
                  width : '40%'
                }}
              >
                Submit
              </Button>
            </Box>
      
      </Container>
    </Box>
  );
};

export default ContactUs;
