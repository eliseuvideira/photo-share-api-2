import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    api: API!
  }

  type API {
    name: String!
    version: String!
    uptime: String!
  }
`;
