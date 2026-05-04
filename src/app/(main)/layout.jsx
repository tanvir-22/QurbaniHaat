import React from "react";
import Navbar from "@/components/Navbar";
const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Mainlayout;
