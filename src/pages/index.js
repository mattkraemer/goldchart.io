import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import News from "../components/news"
import SEO from "../components/seo"
import Dashboard from "../components/dashboard"
import Chart from "../components/chart"

const IndexPage = () => {
  const [ loading, setLoading ] = useState(true);
  const [ labels, setLabels ] = useState();
  const [ prices, setPrices ] = useState();

  const fetchData = () => {
    fetch ("https://financialmodelingprep.com/api/v3/historical-chart/1min/ZGUSD")
      .then((res) => res.json())
      .then((data) => {
        var labels1 = data.map(function(e) {
          return e.date;
        });
        setLabels(labels1);
        var prices1 = data.map(function(e) {
          return e.close;
        });
        setPrices(prices1)
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex h-screen -mt-20 pt-20">
        <div className="lg:w-1/4 h-full overflow-scroll">
          <News />
        </div>
        <div className="lg:w-3/4 overflow-scroll">
        <Dashboard />
          {
            loading 
              ?
                <div>Loading</div>
              :
                <Chart labels={labels} prices={prices} />
          }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
