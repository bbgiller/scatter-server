import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Place {
    id: ID!
    name: String
    address: String
    price: Int
    tags: [String]
  },
  type User {
  firstName: String
  lastName: String
  phoneNumber: String
  email: String
  city: String
  country: String
  birthday: String
}
  
  type Query {
    places: [Place!]
    users: [User!]
  }

  type Mutation {
    deletePlace(id: ID!): Place!
    deleteUser(id: ID!): User!
  }
`;
