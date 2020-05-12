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
    <header>
      <div className="px-6 lg:p-x8 m-auto h-20 flex items-center justify-between">
        <h1>
          <Link to="/" className="text-xl">
            <span className="font-semibold text-yellow-600">Gold</span><span>Chart</span><span className="text-sm">.io</span>
          </Link>
        </h1>
        <div>
         Current Gold Price: ${currentPrice && currentPrice[0].price}
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
