import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "./style1.scss"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const navInfo = {
    brand: data.site.siteMetadata.title,
  }

  return (
    <Layout pageTitle="Home Page 1" 
      navInfo={navInfo}
    >
      hello
    </Layout>
  )
}
