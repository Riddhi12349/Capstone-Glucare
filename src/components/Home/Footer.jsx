import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1", // Light background color for the footer
        padding: "20px 0",
        marginTop: "auto",
        display : 'flex',
        flexDirection : 'column'
      }}
    >
      <Container>
        
            <Typography variant="body1" sx={{ textAlign: "center", fontWeight: "bold" }}>
              Build with ❤️ by
            </Typography>
             <br/> 
              
         
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" sx={{ opacity: 0.5 }}>
                Anupriya Lathey (102103373)
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.5 }}>
                Riddhi Garg (102103282)
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.5 }}>
                Pia Gupta (102103394)
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.5 }}>
                Nitleen Kaur (102103377)
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.5 }}>
                Stuti Mittal (102103485)
              </Typography>
            </Box>
      </Container>
    </Box>
  );
};

export default Footer;
