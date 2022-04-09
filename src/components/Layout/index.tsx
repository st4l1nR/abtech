import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ClientLayout from "./ClientLayout";
import AdminLayout from "./AdminLayout";

const index = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const path = router.pathname.split("/")[1];

  if (path === "admin" && session?.user?.type === "admin") {
    return <AdminLayout>{children}</AdminLayout>;
  } else return <ClientLayout>{children}</ClientLayout>;
};

export default index;
