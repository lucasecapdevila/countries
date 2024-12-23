import { useEffect, useState } from "react"
import { getAllCountries } from "../api"
import { Link } from "react-router"

const CountriesList = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries()
      setCountries(data)
    }
    fetchCountries()
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-red-500">CountriesList</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link to={`/country/${country.countryCode}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CountriesList