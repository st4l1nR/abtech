import React from "react";
import { CircularProgress } from "@mui/material";

type props = {
  type?: "button" | "submit";
  xs?: string;
  color?: string;
  href?: string;
  loading?: boolean;
} & React.HTMLProps<HTMLInputElement>

const index = React.forwardRef(
  (
    {
      type = "button",
      color = "bg-blue-700",
      xs = "w-36",
      loading,
      href,
      ...props
    }: props,
    ref: any
  ) => {
    const style = `${xs} h-12 flex justify-center ${color} filter backdrop-filter hover:brightness-125 text-white font-bold py-2 px-4 rounded cursor-pointer`;

    return (
      <a href={href} ref={ref}>
        {loading ? (
          <div className={style}>
            <CircularProgress size={30} />
          </div>
        ) : (
          <>
            <input className={style} type={type} {...props} />
          </>
        )}
      </a>
    );
  }
);

export default index;
