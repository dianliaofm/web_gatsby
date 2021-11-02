import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
  const data = useStaticQuery(metaQuery)
  const {title, i18n} = data.site.siteMetadata
  const navInfo = {
    brand: title,
  }
  const lang = i18n.cn

  return (
    <Layout pageTitle="Home Page 1" navInfo={navInfo} i18n={lang}>
      hello
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
