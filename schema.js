const { gql } = require("apollo-server");

// ! mark shows that the field is required
const typeDefs = gql`
  type Query {
    quakes: [Quake]!
    quake(id: ID!): Quake
    #Quake for the current user
    me: User
  }

  type Quake {
    id: ID!
    location: String
    magnitude: Float
    when: String
    time: String
  }
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    trips: [Quake]!
  }
  type Mutation {
    saveRecord(recordId: ID!): RecordUpdateResponse!
    deleteRecord(recordId: ID!): RecordUpdateResponse!
    login(email: String): String # login token
  }
  type RecordUpdateResponse {
    success: Boolean!
    message: String!
    launches: [Quake]
  }
`;

module.exports = typeDefs;
