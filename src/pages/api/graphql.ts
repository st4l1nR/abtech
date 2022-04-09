import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import mongoose from "mongoose";
import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";
import models from "../../models";
import { getSession } from "next-auth/react";

const cors = Cors();
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  context: async ({ req, res }: any) => {
    const session = await getSession({ req });
    return {
      models,
      session,
    };
  },
});

const startServer = server.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
