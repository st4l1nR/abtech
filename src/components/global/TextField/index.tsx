import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type props = UseFormRegisterReturn &
  React.HTMLProps<HTMLInputElement> & {
    label?: string;
    error?: string;
  };
const index = React.forwardRef(
  ({ type = "text", label, error, disabled,  ...props }: props, ref: any) => {
    return (
      <div className="w-full flex flex-col ">
        {label && <label className="font-bold">{label}</label>}
        <input
          className={`w-full h-10 placeholder:italic placeholder:text-gray-400 block bg-white border ${ disabled ? "border-gray-100" : "border-gray-300"} rounded-md px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
          type={type}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {error && <div className="font-bold text-xs text-red-400">{error}</div>}
      </div>
    );
  }
);

export default index;
