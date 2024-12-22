const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 3000


// Start the server - Route to fetch available countries
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries')
    res.json(response.data)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error fetching available countries:', err.response?.data || err.message)
  }
})


// Route to fetch country borders
app.get('/api/borders/:countryCode', async (req, res) => {
  const { countryCode } = req.params
  try {
    const countryResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
    const country = countryResponse.data;
    res.json({ country: {code: country.code, name: country.name, borders: country.borders} })
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.response?.data || err.message)
  }
})


//! Links to points b and c (https://countriesnow.space/api/v0.1/countries/population - https://countriesnow.space/api/v0.1/countries/flag/images) are currently not working properly.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})