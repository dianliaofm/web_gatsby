import React from "react"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"
import IconButton from "@mui/material/IconButton"

const PlayButton = ({ isPlaying, toggleFn }) => {
  return (
    <IconButton aria-label="play-pause" onClick={toggleFn}>
      {!isPlaying ? <Pause /> : <PlayArrow />}
    </IconButton>
  )
}

export default PlayButton
