import React from "react";
// import { useRef } from "react";
import Box from "@mui/material/Box";
import ContactUs from "./Home/ContactUs";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Nav from "./Home/Nav";
import About from "./Home/About";

export default function Home() {
  //   const btnRef = useRef();
  return (
    <Box>
      {/* <Nav ref={btnRef} /> */}
      <Nav />
      <Hero />
      <About />
      <ContactUs />
      <Footer />
    </Box>
  );
}
