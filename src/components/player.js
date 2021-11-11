import React from "react"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"
import PlayControlPanel from "./playControlPanel"

const Player = ({
  isPlaying,
  currentSec,
  totalSecs,
  toggleFn,
  slideFn,
  eps,
  jumpToFn,
  showPanel,
  toggleListFn,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <AudioSlider
        currentSec={currentSec}
        totalSecs={totalSecs}
        changeFn={slideFn}
        jumpToFn={jumpToFn}
      />
      <MiniControl
        toggleFn={toggleFn}
        isPlaying={isPlaying}
        currentEp={eps[0]}
        toggleListFn={toggleListFn}
      />
      <PlayControlPanel showPanel={showPanel} onClose={toggleListFn} />
    </div>
  )
}

export default Player
