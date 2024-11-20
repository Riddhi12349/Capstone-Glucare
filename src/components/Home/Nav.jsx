import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#C9E6F0",
        boxShadow: "none",
        color: "text.primary",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Section */}
        <Typography variant="h6" fontWeight="bold">
          <Link href="/" underline="none" color="inherit">
            GLUCare
          </Link>
        </Typography>

        {/* Center Section (Menu Items) */}
        <Box sx={{ display: "flex", gap: 3, fontWeight: "bold" }}>
          <Link href="/blogs" underline="none" color="inherit">
            Blogs
          </Link>
          <Link href="/about" underline="none" color="inherit">
            About Us
          </Link>
          <Link href="/contact" underline="none" color="inherit">
            Contact Us
          </Link>
          {/* <Link href="/dashboard" underline="none" color="inherit">
            Dashboard
          </Link> */}
          <Link href="/myprofile" underline="none" color="inherit">
            My Profile
          </Link>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="contained" color="primary" href="/login">
            Login
          </Button>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
