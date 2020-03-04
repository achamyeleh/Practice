import { gql } from "apollo-server-express";

export const typeDefs1 = gql`
  type Query {
    userGet(id: Int): User
    # getUsers: User
  }
  type Mutation {
    userAdd(firstName: String!, lastName: String, isActive: Boolean!): Boolean!
  #   userUpdate(id: Int, firstName: String!, lastName: String, isActive: Boolean!): Boolean!
  #   userDelete(id: Int): Boolean

  }
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    isActive: Boolean!
  }
`;