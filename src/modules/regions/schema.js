const { gql } = require('apollo-server-express')

module.exports = gql`
    type Regions {
        id: ID!
        name: String!
        country_id : String!    
    }

    extend type Query {
        regions(countryID: ID!): [ Regions! ]!
    }

    extend type Mutation {
        newRegion(name: String! countryID: ID!): Regions
    }
`