import { gql } from "apollo-server-express";
export const typeDefs2 = gql`
  type Query {
    countryGet(id: Int): Country
    # getUsers: User
  }
  type Mutation {
    countryAdd(isoCode: String!, region: String, population: String!): Boolean!
  #   userUpdate(id: Int, firstName: String!, lastName: String, isActive: Boolean!): Boolean!
  #   userDelete(id: Int): Boolean

  }
  type Country {
    id: Int!
    isoCode: String!
    region: String!
    population: String!
  }
`;
