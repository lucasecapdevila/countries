const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 3000


// Start the server - Route to fetch available countries
app.get('/https://date.nager.at/api/v3/AvailableCountries', async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries')
    res.json(response.data)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})