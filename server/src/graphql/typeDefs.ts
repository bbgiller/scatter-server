import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Place {
    id: ID!
    name: String
    address: String
    price: Int
    tags: [String]
  }
  
  type Query {
    places: [Place!]
  }

  type Mutation {
    deletePlace(id: ID!): Place!
  }
`;
