import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import App from "../components/app"
import BasicContainer from "../components/basicContainer"
import EpisodeList from "../components/episodeList"
// import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(epListQuery)
  const eps = data.allEpisode.nodes
  return (
    <App pageTitle={"Home"}>
      <BasicContainer>
        <EpisodeList epList={eps} />
      </BasicContainer>
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
