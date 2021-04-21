import { ApolloServer, gql } from "apollo-server-express";
import pretty from "pretty-ms";

const { name, version } = require("../package.json");

const typeDefs = gql`
  type Query {
    api: API!
  }

  type API {
    name: String!
    version: String!
    uptime: String!
  }
`;

const resolvers = {
  Query: {
    api: () => ({ name, version }),
  },
  API: {
    uptime: () => pretty(process.uptime() * 1000),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const apollo = apolloServer.getMiddleware();

export default apollo;
