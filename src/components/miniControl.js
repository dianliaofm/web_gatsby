import React from "react"
import PlayButton from "../components/playButton"

const MiniControl = ({ toggleFn, isPlaying }) => {
  return (
    <div>
      <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
    </div>
  )
}

export default MiniControl
