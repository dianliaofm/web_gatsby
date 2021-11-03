import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const LayoutMeta = ({pageTitle, children }) => {
  const data = useStaticQuery(metaQuery)
  const { title, i18n } = data.site.siteMetadata
  const navInfo = {
    brand: title,
  }
  const lang = i18n.cn

  return (
    <Layout pageTitle={pageTitle} navInfo={navInfo} i18n={lang}>
      {children}
    </Layout>
  )
}

const metaQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        i18n {
          cn {
            home
            about
            developer
          }
        }
      }
    }
  }
`
export default LayoutMeta
