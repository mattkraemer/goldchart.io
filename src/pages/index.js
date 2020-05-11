import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container lg:max-w-xl m-auto text-center py-12 lg:py-24">
      <h3>Current Gold Price</h3>
      <h1 className="text-3xl lg:text-6xl font-semibold">$13,469.95</h1>
      <p className="text-xl">USD</p>
    </div>
  </Layout>
)

export default IndexPage
