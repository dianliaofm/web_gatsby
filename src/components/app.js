import { useStaticQuery, graphql } from "gatsby"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Player from "./player"
import React, { useEffect } from "react"
import Layout from "./layout"
import {
  episodeListState,
  playState,
  currentSecState,
  totalSecsState,
  customCurrentSecState,
  showPlayListState,
} from "../state/store"

const App = ({ pageTitle, children }) => {
  const [currentSec, setCurrentSec] = useRecoilState(currentSecState)
  const totalSecs = useRecoilValue(totalSecsState)
  const [isPlaying, setIsPlaying] = useRecoilState(playState)
  const setEpList = useRecoilState(episodeListState)[1]
  const setCustomCurrentSec = useSetRecoilState(customCurrentSecState)
  const [showPlaylist, setShowPlaylist] = useRecoilState(showPlayListState)

  const data = useStaticQuery(episodeListQuery)
  const eps = data.allEpisode.nodes

  useEffect(() => {
    setEpList(eps)
  }, [eps])

  const current1 = currentSec || 0
  const duration1 = totalSecs || 1

  const player = (
    <Player
      isPlaying={isPlaying}
      toggleFn={() => setIsPlaying(!isPlaying)}
      totalSecs={duration1}
      currentSec={current1}
      slideFn={setCurrentSec}
      jumpToFn={setCustomCurrentSec}
      eps={eps}
      showPanel={showPlaylist}
      toggleListFn={() => setShowPlaylist(!showPlaylist)}
    />
  )

  return (
    <Layout pageTitle={pageTitle} player={player}>
      {children}
    </Layout>
  )
}

export default App

const episodeListQuery = graphql`
  query EpQuery {
    allEpisode {
      nodes {
        epId
        image
        title
        url
      }
    }
  }
`
