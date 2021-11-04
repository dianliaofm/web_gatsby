import React from "react"
import { Link } from "gatsby"
import App from "../components/app"

const Episode = ({ pageContext }) => {
  const { id, title } = pageContext
  return (
    <App>
      <div>
        this is episode {id}: {title}
      </div>

      <Link to="/">Go back to the homepage</Link>
    </App>
  )
}

export default Episode
