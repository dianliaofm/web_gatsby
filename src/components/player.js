import React from "react"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"
import Audio from "./htmlAudio"

const audio1 = "http://podcast40.oss-cn-shanghai.aliyuncs.com/test1.mp3"

const Player = ({
  isPlaying,
  currentSec,
  totalSecs,
  toggleFn,
  slideFn,
  eps,
}) => {
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
      <Audio 
      src={audio1}
      isPlaying={isPlaying}
      />
      <MiniControl toggleFn={toggleFn} isPlaying={isPlaying} eps={eps} />
    </div>
  )
}

export default Player
