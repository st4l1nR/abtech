import React from "react";
import Link from "next/link";

type AppProps = {
  className?: string;
  children: React.ReactNode;
  selected?: boolean;
  href?: string;
};
const Item = ({ className, children, selected, href, ...props }: AppProps) => {
  if (href) {
    return (
      <Link href={href}>
        <div
          className={`w-full h-12 px-5 py-3  flex items-center space-x-3 cursor-pointer  ${
            selected ? "border-l-4 border-black" : "hover:text-gray-500"
          } ${className}`}
          {...props}
        >
          {children}
        </div>
      </Link>
    );
  } else
    return (
      <div
        className={`w-full h-6 px-5 py-3 flex items-center space-x-3 cursor-pointer ${
          selected && "text-blue-500"
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
};

export default Item;
