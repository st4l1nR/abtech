import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "../../../lib/connectDB";
import models from "../../../models";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        connectDB();
        const { email, password } = credentials;

        const isGoogleAccount = await models.user.findOne({
          email,
          provider: "google",
        });
        if (isGoogleAccount) throw new Error("google account linked");

        const user = await models.user.findOne(
          { email, password },
          { password: 0 }
        );
        if (!user) throw new Error("Incorrect username or password");
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          image: profile.picture,
          emailVerified: profile.email_verified,
          type: "customer",
          provider: "google",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.name = user.firstName + " " + user.lastName;
        token.email = user.email;
        token.image = user.image;
        token.type = user.type;
        token.provider = user.provider;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.type = token.type;
        session.user.provider = token.provider;
      }
      return session;
    },
  },
  jwt: {
    secret: "test",
  },
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/signin",
  },
  secret: "test",
});
