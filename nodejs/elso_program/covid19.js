// https://covid.ourworldindata.org/data/owid-covid-data.csv
const fs = require('fs')
const axios = require('axios').default
const parse = require('csv-parse')
const { promisify } = require('util')
const parseAsync = promisify(parse)
async function downloadLatestData() {
    const response = await axios.get('https://covid.ourworldindata.org/data/owid-covid-data.csv')
    return response.data
}
async function parseData() {
    
}
async function run ()  {
const raw = fs.readFileSync('owid-covid-data.csv')
const output = await parseAsync(raw, {
    delimiter:',',
    columns: true
})

const byLocation = output.reduce((acc, {location, 
total_cases: total_Cases, total_deaths: total_Deaaths}) => {
    acc[location] = {location, total_Cases, total_Deaaths}
    return acc
},{})
console.log(byLocation)
}
run()