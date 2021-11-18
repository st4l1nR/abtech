import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import mongoose from "mongoose";
import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";
import * as models from "../../models";

const cors = Cors();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    models,
  }),
});
const startServer = server.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  if (mongoose.connection[0]!) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database ready! 🚀");
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
