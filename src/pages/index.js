import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Chart from "../components/chart"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Chart className="h-screen -mt-20 pt-20" />
    </Layout>
  )
}

export default IndexPage
