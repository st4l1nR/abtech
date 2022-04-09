import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";


const index = ({ children }) => {
  return (
    <div>
    
      <div className='min-h-screen'>
        <Navbar />
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
