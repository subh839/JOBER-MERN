import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Features from "./Features/Features";
import Team from "./Team/Team"

export default function Home({ customer }) {
  // console.log(customer);
  return (
    <>
      {/* ------------------------------------------------------NAV BAR--------------------------------------------------------------- */}
      <Navbar />
      {/* ------------------------------------------------------PICTURE--------------------------------------------------------------- */}

      <Features />
      
      {/* ------------------------------------------------------SERVICES--------------------------------------------------------------- */}

      
      <Services customerDetails={customer} />
      {/* ------------------------------------------------------ABOUT US--------------------------------------------------------------- */}
       <Team />    
      {/* ------------------------------------------------------FOOTER --------------------------------------------------------------- */}

      <Footer />
    </>
  );
}
