import { useStaticQuery, graphql } from "gatsby"
import { atom, useRecoilState, useRecoilValue } from "recoil"
import Player from "./player"
import React from "react"
import Layout from "./layout"
import { playState } from "../state/store"

const currentSecState = atom({
  key: "currentSecState",
  default: 0,
})

const totalSecsState = atom({
  key: "totalSecsState",
  default: 60,
})

const App = ({ pageTitle, children }) => {
  const [currentSec, setCurrentSec] = useRecoilState(currentSecState)
  const totalSecs = useRecoilValue(totalSecsState)
  const [isPlaying, setIsPlaying] = useRecoilState(playState)

  const data = useStaticQuery(episodeListQuery)
  const eps = data.allEpisode.nodes

  const player = (
    <Player
      isPlaying={isPlaying}
      toggleFn={() => setIsPlaying(!isPlaying)}
      totalSecs={totalSecs}
      currentSec={currentSec}
      slideFn={setCurrentSec}
      eps={eps}
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
  query MyQuery {
    allEpisode {
      nodes {
        epId
        image
        title
      }
    }
  }
`
