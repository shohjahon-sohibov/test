const { fetch, fetchAll } = require('../../lib/postgres')

const COUNTRIES = `
    SELECT 
        *
    FROM
        countries
`

const NEW_COUNTRY = `
    INSERT INTO
        countries(
            country_name
        )
    VALUES($1)
    RETURNING *
`

const countries = () => fetchAll(COUNTRIES)
const newCountry = (name) => fetch(NEW_COUNTRY, name)

module.exports = {
    countries,
    newCountry
}