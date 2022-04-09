import React from "react";
import { useSession } from "next-auth/react";
import ErrorPage from "next/error";
import {useRouter} from 'next/router'

const withAuth = (Component) => (props) => {
  if (typeof window !== undefined) {
    const { data: session } = useSession();
    const router = useRouter()

    if (!session) {
      router.replace('/')
      return null
    };

    return <Component {...props} />;
  } else return null;
};

export default withAuth;
