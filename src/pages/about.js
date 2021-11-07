import * as React from "react"
import { Link } from "gatsby"

import App from "../components/app"
import Seo from "../components/seo"

const AboutPage = () => (
  <App>
    <Seo title="Page about" />
    <h1>Hi from the about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
  </App>
)

export default AboutPage
