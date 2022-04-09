import React from "react";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";

const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-1/4">
          <Sidebar />
        </div>
        <div className="md:shrink w-full md:3/4 p-3">
          <div className="max-w-6xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
