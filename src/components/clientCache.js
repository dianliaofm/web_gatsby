import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useRecoilState, useSetRecoilState } from "recoil"
import { currentEpisodeIdState, episodeListState } from "../state/store"

export default function ClientCache() {
  const data = useStaticQuery(playListQuery)
  const initailPlaylist = data.allEpisode.nodes
  const setEpList = useSetRecoilState(episodeListState)
  const [currentId, setCurrentId] = useRecoilState(currentEpisodeIdState)

  useEffect(() => {
    setEpList(initailPlaylist)
    if (!currentId) {
      setCurrentId(initailPlaylist[0].id)
    }
  })

  return <></>
}

// init 3 audio for player
const playListQuery = graphql`
  query {
    allEpisode(limit: 3, sort: { order: DESC, fields: timestamp }) {
      nodes {
        image
        url
        timestamp
        title
        id
      }
    }
  }
`
