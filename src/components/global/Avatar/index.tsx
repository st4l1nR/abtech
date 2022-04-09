import React from "react";
import Image from "next/image";
import { User } from "react-feather";
import { useSession } from "next-auth/react";
type AppProps = {
  className?: string;
  alt?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
const index = React.forwardRef(
  ({ className, alt, ...props }: AppProps, ref:any) => {
    const { data: session } = useSession();
    return (
      <>
        {session?.user?.image ? (
          <div
            className={`relative w-10 h-10 ${className}`}
            ref={ref}
            {...props}
          >
            <img
              className="object-fit rounded-full"
              src={session.user.image}
              alt={alt}
            />
          </div>
        ) : (
          <div ref={ref}>
            <User {...props} />
          </div>
        )}
      </>
    );
  }
);

export default index;
