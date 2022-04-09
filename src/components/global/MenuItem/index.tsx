import React from "react";
import Link from "next/link";
type AppProps = React.HTMLProps<HTMLDivElement> &  {
  href?: string;
  children: React.ReactNode;
};
const index = ({ href, children, ...props }: AppProps) => (
  <>
    {href ? (
      <Link href={href}>
        <div className="cursor-pointer px-4 py-2 flex space-x-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100" {...props}>
          {children}
        </div>
      </Link>
    ) : (
      <div className="cursor-pointer px-4 py-2 flex space-x-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100"{...props}>
        {children}
      </div>
    )}
  </>
);
export default index;
