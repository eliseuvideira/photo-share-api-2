import { gql } from "apollo-server-core";

export const typeDefs = gql`
  extend type Query {
    allPhotos: [Photo!]!
    photo(photoId: ID!): Photo
    totalPhotos: Int!
  }

  extend type Mutation {
    createPhoto(input: PhotoInput!): Photo!
  }

  enum PhotoCategory {
    SELFIE
    PORTRAIT
    ACTION
    LANDSCAPE
    GRAPHIC
  }

  type Photo {
    photoId: ID!
    url: String!
    name: String!
    description: String
    category: PhotoCategory!
    postedBy: User!
    created: DateTime!
  }

  input PhotoInput {
    name: String!
    category: PhotoCategory!
    description: String
  }
`;
