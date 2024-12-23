import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/pages/Home"
import CountryInfo from "./components/CountryInfo"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
