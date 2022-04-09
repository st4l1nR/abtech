import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type props = UseFormRegisterReturn &
  React.HTMLProps<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
  };
const index = React.forwardRef(
  ({ label, error, ...props }: props, ref: any) => {
    return (
      <div className="flex flex-col w-full space-y-2">
        {label && <label className="font-bold">{label}</label>}
        <textarea
          className="block w-full h-auto p-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder:italic placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          ref={ref}
          {...props}
        />
        {error && <div className="text-xs font-bold text-red-400">{error}</div>}
      </div>
    );
  }
);

export default index;
