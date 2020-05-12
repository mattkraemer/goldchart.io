import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Chart from "../components/chart"

const IndexPage = () => {
  const [ currentPrice, setCurrentPrice ] = useState();

  const fetchCurrentPrice = () => {
    fetch("https://financialmodelingprep.com/api/v3/quote/ZGUSD")
      .then((res) => res.json())
      .then((data) => {
        setCurrentPrice(data)
      })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container lg:max-w-xl m-auto text-center py-12 lg:py-24">
        <div className="p-12 bg-black bg-opacity-25 rounded-lg">
          <h3>Current Gold Price</h3>
          <h1 className="text-3xl lg:text-6xl font-semibold text-yellow-600 mb-4">$13,469.95</h1>
          <div className="m-auto inline-block">
            <a href="#" className="bg-green-800 text-lg font-semibold px-6 py-3 rounded text-white inline-block mr-4 hover:bg-green-600">Buy</a>
            <a href="#" className="bg-red-800 text-lg font-semibold px-6 py-3 rounded text-white inline-block hover:bg-red-600">Sell</a>
          </div>
        </div>
      </div>
      <Chart />
    </Layout>
  )
}

export default IndexPage
