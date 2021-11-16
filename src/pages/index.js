import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import App from "../components/app"
import EpisodeList from "../components/episodeList"
// import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(epListQuery)
  const eps = data.allEpisode.nodes
  return (
    <App pageTitle={"Home"}>
        <EpisodeList epList={eps} />
    </App>
  )
}

export default IndexPage

const epListQuery = graphql`
  query {
    allEpisode(limit: 10, sort: { order: DESC, fields: timestamp }) {
      nodes {
        image
        url
        timestamp
        title
        id
        subtitle
      }
    }
  }
`
