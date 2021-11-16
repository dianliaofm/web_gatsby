import { useStaticQuery, graphql } from "gatsby"
import * as React from "react"
import { useRecoilState } from "recoil"
import App from "../components/app"
import EpisodeList from "../components/episodeList"
import { currentEpisodeIdState, episodeListState, isInList } from "../state/store"
// import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(epListQuery)
  const epsData = data.allEpisode.nodes

  const [currentId, setCurrentID] = useRecoilState(currentEpisodeIdState)
  const [playList, setPlayList] =useRecoilState(episodeListState)

  function onPlayAudio(id, isAdded) {}

  function onAddAudio(id, isAdded) {}

  const epsData2 = epsData.map((ep) => {
    return {
      ...ep,
      isAdded: isInList(ep.id, playList)
    }
  })

  return (
    <App pageTitle={"Home"}>
      <EpisodeList
        epList={epsData2}
        playAudio={onPlayAudio}
        addAudio={onAddAudio}
      />
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
