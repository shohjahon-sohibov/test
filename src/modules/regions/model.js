const { fetch, fetchAll } = require('../../lib/postgres')

const REGIONS = `
    SELECT 
        *
    FROM
        regions
    where 
        country_id = $1
`
const NEW_REGION = `
    INSERT INTO 
        regions(
            region_name,
            country_id
        )
    VALUES($1, $2)
    RETURNING *
`


const regions = (countryID) => fetchAll(REGIONS, countryID)
const newRegion = (name, countryID) => fetch(NEW_REGION, name, countryID)

module.exports = {
    regions,
    newRegion
}