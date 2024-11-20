import React from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";

function Blogs() {
  const blogLinks = [
    {
      title: "Apollo Diagnostics - Diabetes Blogs",
      url: "https://www.apollodiagnostics.in/blog/category/diabetes",
    },
    {
      title: "Pep2Dia - Managing Blood Sugar",
      url: "https://www.pep2dia.com/blog-pep2dia/human-health/managing-your-blood-sugar-and-well-being/",
    },
    {
      title: "Ganesh Diagnostic - Glucose Management",
      url: "https://www.ganeshdiagnostic.com/blog/7-effective-ways-to-manage-your-blood-glucose-level",
    },
  ];

  return (
    <Box sx={{ padding: "40px 20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography variant="h4" fontWeight="bold">
          Diabetes Management Blogs
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {blogLinks.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                textAlign: "center",
                paddingBottom: 2,
              }}
            >
              <Typography variant="h6" sx={{ padding: "8px 16px" }}>
                {blog.title}
              </Typography>
              <iframe
                src={blog.url}
                title={`Blog ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  border: "none",
                }}
              ></iframe>
              <Box sx={{ marginTop: 2 }}>
                <Button variant="contained" color="primary">
                  <Link
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    underline="none"
                  >
                    View in Full Screen
                  </Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Blogs;
