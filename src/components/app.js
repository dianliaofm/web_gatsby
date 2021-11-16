import { useStaticQuery, graphql } from "gatsby"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Player from "./player"
import React from "react"
import Layout from "./layout"
import {
  episodeListState,
  playState,
  currentSecState,
  totalSecsState,
  customCurrentSecState,
  showPlayListState,
  currentEpState,
  menuOpenState,
} from "../state/store"

const App = ({ pageTitle, children }) => {
  const [currentSec, setCurrentSec] = useRecoilState(currentSecState)
  const totalSecs = useRecoilValue(totalSecsState)
  const [isPlaying, setIsPlaying] = useRecoilState(playState)
  const playList = useRecoilValue(episodeListState)
  const setCustomCurrentSec = useSetRecoilState(customCurrentSecState)
  const [showPlaylist, setShowPlaylist] = useRecoilState(showPlayListState)
  const currentEp = useRecoilValue(currentEpState)
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState)

  const data = useStaticQuery(metaQuery)
  const metaData = data.site.siteMetadata

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
      playList={playList}
    />
  )

  return (
    <Layout
      pageTitle={pageTitle}
      player={player}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      metaData={metaData}
    >
      {children}
    </Layout>
  )
}

export default App

const metaQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        gitUrl
        weiboUrl
        menuConfig {
          text
          path
          key
          id
        }
      }
    }
  }
`
