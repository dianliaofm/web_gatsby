import React from "react"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"

const Player = ({
  isPlaying,
  currentSec,
  totalSecs,
  toggleFn,
  slideFn,
  eps,
  jumpToFn,
  showPanel,
  toggleListFn
}) => {
  const containerHeight = !!showPanel ? "100vh" : null;
  const listDisplay = !!showPanel ? "block" : "none";
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        flexDirection: "column-reverse",
        width: "100vw",
        height: containerHeight
      }}
    >
      <MiniControl toggleFn={toggleFn} isPlaying={isPlaying} eps={eps} 
      toggleListFn={toggleListFn}
      />
      <AudioSlider
        currentSec={currentSec}
        totalSecs={totalSecs}
        changeFn={slideFn}
        jumpToFn={jumpToFn}
      />
      <div style={{
        backgroundColor: "orange",
        flexGrow: 1,
        display: listDisplay
      }}>playlist</div>
    </div>
  )
}

export default Player
