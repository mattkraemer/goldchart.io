import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Chart from "../components/chart"

const IndexPage = () => {
  const [ labels, setLabels ] = useState();
  const [ prices, setPrices ] = useState();

  useEffect(() => {
    fetch ("https://financialmodelingprep.com/api/v3/historical-chart/1min/ZGUSD")
      .then((res) => res.json())
      .then((data) => {
        var labels = jsonfile.jsonarray.historical.map(function(e) {
          return e.date;
        });
        setLabels(labels);
        var data = jsonfile.jsonarray.historical.map(function(e) {
          return e.close;
        });
        setPrices(data)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Chart labels={labels} prices={prices} />
    </Layout>
  )
}

export default IndexPage
