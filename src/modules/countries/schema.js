const { gql } = require('apollo-server-express')

module.exports = gql`
    type Countries {
        id: ID!
        name: String!
    }

    type Query {
        countries: [ Countries! ]!
    }

    type Mutation {
        newCountry(name: String!): Countries
    }
`