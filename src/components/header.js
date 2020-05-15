import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const Header = ({ siteTitle }) => {
  const [ currentPrice, setCurrentPrice ] = useState();

  const fetchCurrentPrice = () => {
    fetch("https://financialmodelingprep.com/api/v3/quote/ZGUSD")
      .then((res) => res.json())
      .then((data) => {
        setCurrentPrice(data)
      })
  }

  useEffect(() => {
    fetchCurrentPrice();
    setInterval(() => {
      fetchCurrentPrice();
    }, 5000);
  }, [])

  return (
    <header className="bg-black bg-opacity-75 shadow-lg">
      <div className="container mx-auto px-6 lg:px-8 m-auto h-20 flex items-center justify-between">
        <h1>
          <Link to="/" className="text-xl">
            <span className="font-semibold text-yellow-600">Gold</span><span>Chart</span><span className="text-sm">.io</span>
          </Link>
        </h1>
        <div>
         <span className="font-thin text-lg opacity-75 mr-3">Current Gold Price</span> <span className="text-xl rounded font-semibold text-yellow-600 bg-gray-900 bg-opacity-50 px-5 py-3">${currentPrice && currentPrice[0].price}</span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
