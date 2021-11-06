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
} from "../state/store"
import PlayButtonGroup from "./playButtonGroup"
import Lipsum from "./lipsum"

const App = ({ pageTitle, children }) => {
  const [currentSec, setCurrentSec] = useRecoilState(currentSecState)
  const totalSecs = useRecoilValue(totalSecsState)
  const [isPlaying, setIsPlaying] = useRecoilState(playState)
  const [epList, setEpList] = useRecoilState(episodeListState)
  const setCustomCurrentSec = useSetRecoilState(customCurrentSecState)

  const data = useStaticQuery(episodeListQuery)
  const eps = data.allEpisode.nodes

  useEffect(() => {
    setEpList(eps)
  }, [eps])

  const player = (
    <Player
      isPlaying={isPlaying}
      toggleFn={() => setIsPlaying(!isPlaying)}
      totalSecs={totalSecs}
      currentSec={currentSec}
      slideFn={setCurrentSec}
      jumpToFn={setCustomCurrentSec}
      eps={eps}
    />
  )

  return (
    <Layout pageTitle={pageTitle} player={player}>
      {children}
      <PlayButtonGroup
        isPlaying={isPlaying}
        toggleFn={() => setIsPlaying(!isPlaying)}
      />
      <Lipsum />
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
