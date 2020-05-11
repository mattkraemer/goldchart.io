import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="max-w-xl m-auto h-20 flex items-center">
      <h1>
        <Link to="/" className="text-xl">
          <span className="font-semibold text-yellow-600">Gold</span><span>Chart</span><span className="text-sm">.io</span>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
