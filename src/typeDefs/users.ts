import { gql } from "apollo-server-core";

export const typeDefs = gql`
  extend type Query {
    allUsers: [User!]!
    user(userId: ID!): User
    totalUsers: Int!
  }

  type User {
    userId: ID!
    name: String!
    avatar: String
  }
`;
