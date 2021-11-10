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
  const setEpList = useRecoilState(episodeListState)[1]
  const setCustomCurrentSec = useSetRecoilState(customCurrentSecState)

  const data = useStaticQuery(episodeListQuery)
  const eps = data.allEpisode.nodes

  useEffect(() => {
    setEpList(eps)
  }, [eps])

  const current1 = currentSec || 0;
  const duration1 = totalSecs || 1;

  const player = (
    <Player
      isPlaying={isPlaying}
      toggleFn={() => setIsPlaying(!isPlaying)}
      totalSecs={duration1}
      currentSec={current1}
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
        hasNext={false}
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
