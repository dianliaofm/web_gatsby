// import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import "antd/dist/antd.css"
import { Link } from "gatsby"

const Layout = ({ children, player }) => {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

  return (
    <>
      <nav>
        <Link to="/">Go to Home</Link>
      </nav>
      <main>{children}</main>
      {player}
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {2021}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
