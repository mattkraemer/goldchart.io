import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import News from "../components/news"
import SEO from "../components/seo"
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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex">
          <div className="lg:w-1/3">
            <News />
          </div>
          <div className="lg:w-2/3">
          <div className="bg-black bg-opacity-25 rounded-br shadow-lg p-6 lg:p-8">
            <div className="flex -m-3">
              <div className="w-1/4 p-3">
                <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
                  <span className="block mb-1 text-gray-500">Today</span>
                  <span className="block text-2xl text-green-400 leading-none font-semibold">+13.89</span>
                  <span className="text-green-400">+0.81%</span>
                </div>
              </div>
              <div className="w-1/4 p-3">
                <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
                  <span className="block mb-1 text-gray-500">30 Days</span>
                  <span className="block text-2xl text-green-400 leading-none font-semibold">+0.41</span>
                  <span className="text-green-400">+0.02%</span>
                </div>
              </div>
              <div className="w-1/4 p-3">
                <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
                  <span className="block mb-1 text-gray-500">6 Months</span>
                  <span className="block text-2xl text-green-400 leading-none font-semibold">+249.64</span>
                  <span className="text-green-400">+17.01%</span>
                </div>
              </div>
              <div className="w-1/4 p-3">
                <div className="bg-green-900 bg-opacity-25 hover:bg-opacity-50 transition duration-100 ease-in-out rounded px-6 py-4 shadow-lg">
                  <span className="block mb-1 text-gray-500">1 Year</span>
                  <span className="block text-2xl text-green-400 leading-none font-semibold">+420.54</span>
                  <span className="text-green-400">+32.45%</span>
                </div>
              </div>
            </div>
          </div>
            {
              loading 
                ?
                  <div>Loading</div>
                :
                  <Chart labels={labels} prices={prices} />
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
