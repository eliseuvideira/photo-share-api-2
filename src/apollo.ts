import { ApolloServer, gql } from "apollo-server-express";

const { name, version } = require("../package.json");

const typeDefs = gql`
  type Query {
    api: API!
  }

  type API {
    name: String!
    version: String!
  }
`;

const resolvers = {
  Query: {
    api: () => ({ name, version }),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const apollo = apolloServer.getMiddleware();

export default apollo;
