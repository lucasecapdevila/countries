import axios from "axios";

const API_URL = 'http://localhost:3000/api'

// Fetch available countries from the API
export const getAllCountries = async () => {
  const response = await axios.get(`${API_URL}/countries`)
  return response.data;
}

// Fetch country details info from the API
export const getCountryDetails = async (countryCode) => {
  const response = await axios.get(`${API_URL}/borders/${countryCode}`)
  return response.data;
}

// Fetch country borders info from the API
export const getCountryBorders = async (countryCode) => {
  const response = await axios.get(`${API_URL}/borders/${countryCode}`)
  return response.data.borders;
}