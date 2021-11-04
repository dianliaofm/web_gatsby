import React from "react"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"

const Player = ({ isPlaying, currentSec, totalSecs, toggleFn , slideFn}) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 5,
        width: "100%",
      }}
    >
      <AudioSlider
        currentSec={currentSec}
        totalSecs={totalSecs}
        changeFn={slideFn}
      />
      <MiniControl toggleFn={toggleFn} isPlaying={isPlaying} />
    </div>
  )
}

export default Player
