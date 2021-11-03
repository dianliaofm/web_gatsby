import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import Header from "./header"
import 'antd/dist/antd.css';


const Layout = ({ children, player }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
