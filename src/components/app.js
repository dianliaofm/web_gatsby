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
  currentEpState,
  currentEpisodeIdState,
  menuOpenState,
} from "../state/store"

const App = ({ pageTitle, children }) => {
  const [currentSec, setCurrentSec] = useRecoilState(currentSecState)
  const totalSecs = useRecoilValue(totalSecsState)
  const [isPlaying, setIsPlaying] = useRecoilState(playState)
  const [epList, setEpList] = useRecoilState(episodeListState)
  const setCustomCurrentSec = useSetRecoilState(customCurrentSecState)
  const [showPlaylist, setShowPlaylist] = useRecoilState(showPlayListState)
  const currentEp = useRecoilValue(currentEpState)
  const [currentEpId, setCurrentEpId] = useRecoilState(currentEpisodeIdState)
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState)

  const data = useStaticQuery(episodeListQuery)
  const eps = data.allEpisode.nodes

  useEffect(() => {
    if (!currentEpId) {
      const ep1 = epList[0]
      ep1 && setCurrentEpId(ep1.epId)
    }
  })

  useEffect(() => {
    setEpList(eps)
  }, [eps])

  const current1 = Math.round(currentSec) || 0
  const duration1 = Math.round(totalSecs) || 1

  const player = (
    <Player
      isPlaying={isPlaying}
      togglePlayFn={() => setIsPlaying(!isPlaying)}
      totalSecs={duration1}
      currentSec={current1}
      slideFn={setCurrentSec}
      jumpToFn={setCustomCurrentSec}
      currentEp={currentEp}
      showPanel={showPlaylist}
      toggleListFn={() => setShowPlaylist(!showPlaylist)}
    />
  )

  return (
    <Layout
      pageTitle={pageTitle}
      player={player}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
    >
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
