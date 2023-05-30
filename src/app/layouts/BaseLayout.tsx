import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BaseLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
