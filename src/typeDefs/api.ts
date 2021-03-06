import { gql } from "apollo-server-core";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    api: API!
  }

  type Mutation {
    api: API!
  }

  type API {
    name: String!
    version: String!
    uptime: String!
  }
`;
