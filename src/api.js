import axios from "axios";

const API_URL = 'http://localhost:3000/api'

// Fetch available countries from the API
export const fetchCountries = async () => {
  const response = await axios.get(`${API_URL}/countries`)
  return response.data;
}

// Fetch country borders info from the API
export const fetchCountryBorders = async (countryCode) => {
  const response = await axios.get(`${API_URL}/borders/${countryCode}`)
  return response.data;
}