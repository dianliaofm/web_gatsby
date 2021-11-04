// import { useStaticQuery } from "gatsby"
import { atom, useRecoilState, useRecoilValue } from "recoil"
import Player from "./player"
import React from "react"
import Layout from "./layout"

const playState = atom({
  key: "playState",
  default: false,
})

const currentSecState = atom({
  key: "currentSecState",
  default: 0,
})

const totalSecsState = atom({
  key: "totalSecsState",
  default: 60,
})

const App = ({ pageTitle, children }) => {
  const [isPlaying, setIsPlaying] = useRecoilState(playState)
  const [currentSec, setCurrentSec] = useRecoilState(currentSecState)
  const totalSecs = useRecoilValue(totalSecsState)

  const player = (
    <Player
      isPlaying={isPlaying}
      toggleFn={() => setIsPlaying(!isPlaying)}
      totalSecs={totalSecs}
      currentSec={currentSec}
      slideFn={setCurrentSec}
    />
  )

  return (
    <Layout pageTitle={pageTitle} player={player}>
      {children}
    </Layout>
  )
}

export default App
