import React from "react"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"
import PlayControlPanel from "./playControlPanel"

const Player = ({
  isPlaying,
  currentSec,
  totalSecs,
  togglePlayFn,
  slideFn,
  currentEp,
  jumpToFn,
  showPanel,
  toggleListFn,
}) => {
  if (!currentEp) {
    return null
  }

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
        toggleFn={togglePlayFn}
        isPlaying={isPlaying}
        currentEp={currentEp}
        toggleListFn={toggleListFn}
      />
      <PlayControlPanel
        showPanel={showPanel}
        onClose={toggleListFn}
        totalSecs={totalSecs}
        currentSec={currentSec}
        currentEp={currentEp}
        isPlaying={isPlaying}
        togglePlayFn={togglePlayFn}
        changeFn={slideFn}
        jumpToFn={jumpToFn}
      />
    </div>
  )
}

export default Player
