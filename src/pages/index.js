import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/app"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/ep/3">Go to "Episode 3"</Link> <br />
      <Link to="/ep/2">Go to "Episode 2"</Link> <br />
      <br />
      <Link to="/about">Go to About</Link>
    </p>
  </Layout>
)

export default IndexPage
