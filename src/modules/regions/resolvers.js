const model = require('./model')

module.exports = {
    Query: {
        regions: async(_, { countryID }) => {
            return await model.regions(countryID)
        }
    },
    Mutation: {
        newRegion: async(_, {name, countryID}) => {
            return await model.newRegion(name, countryID)
        }
    },
    Regions: {
        id: global => global.region_id,
        name: global => global.region_name,
        country_id: global => global.country_id
    }
}