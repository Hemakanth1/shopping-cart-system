import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
