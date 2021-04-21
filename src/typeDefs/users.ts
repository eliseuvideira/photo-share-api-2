import { gql } from "apollo-server-core";

export const typeDefs = gql`
  extend type Query {
    allUsers: [User!]!
    user(userId: ID!): User
    totalUsers: Int!
    me: User
  }

  extend type Mutation {
    githubAuth(code: String!): GitHubAuth!
  }

  type User {
    userId: ID!
    name: String!
    avatar: String
  }

  type GitHubAuth {
    token: String!
    user: User!
  }
`;
