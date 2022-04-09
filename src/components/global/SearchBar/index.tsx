import React from "react";
import { Search } from "react-feather";
import type { UseFormRegisterReturn } from "react-hook-form";

type props = UseFormRegisterReturn & {
  placeholder?: string;
};

const index = React.forwardRef(({ placeholder, ...props }: props, ref: any) => {
  return (
    <div className="w-full h-12 px-5 py-2 flex items-center space-x-3 border rounded-full">
      <Search />
      <input
        className="w-full h-full outline-none focus-within:outline-none"
        type="text"
        placeholder={placeholder ? placeholder : "Search"}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default index;
