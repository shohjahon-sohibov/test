const model = require('./model')

module.exports = {
    Query: {
        countries: async() => {
            return await model.countries()
        }
    },
    Mutation: {
        newCountry: async(_, {name}) => {
            return await model.newCountry(name)
        }
    },
    Countries: {
        id: global => global.country_id,
        name: global => global.country_name
    }
}   