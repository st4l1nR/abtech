import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    image?: string;
    type: string;
    provider: string;
  }

  interface Session {
    user: {
      _id: string;
      name: string;
      email?: string;
      image: string;
      type: string;
      provider: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    _id: string;
    name: string;
    email?: string;
    image: string;
    type: string;
    provider: string;
  }
}
