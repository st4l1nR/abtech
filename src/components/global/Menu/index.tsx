import React from "react";

const index = ({ children }) => {
  return (
    <div className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      {children}
    </div>
  );
};

export default index;
