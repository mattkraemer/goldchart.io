import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="max-w-xl m-auto h-20 flex items-center text-gray-600">
    © {new Date().getFullYear()} {siteTitle}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by c1x
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
