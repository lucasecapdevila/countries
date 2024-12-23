import { useEffect, useState } from "react"
import { getCountryBorders, getCountryDetails } from "../api"
import { Link, useParams } from "react-router"


const CountryInfo = () => {
  const { countryCode } = useParams()
  const [country, setCountry] = useState(null)
  const [borders, setBorders] = useState([])

  useEffect(() => {
    const fetchCountryData = async () => {
      const data = await getCountryDetails(countryCode)
      setCountry(data.country)
      setBorders(data.country.borders)
    }
    fetchCountryData()
  }, [countryCode])

  if(!country) return <div>Loading...</div>

  return (
    <>
      <h1>{country.commonName}</h1>
      <h2>Borders:</h2>
      {borders.length > 0 ? (
      <ul>
        {borders.map((border) => (
          <li key={border.countryCode}>
            <Link to={`/country/${border.countryCode}`}>{border.commonName}</Link>
          </li>
        ))}
      </ul>
      ): (
        <p>No borders found for this country.</p>
      )}
    </>
  )
}

export default CountryInfo