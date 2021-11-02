import React from "react"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"
import IconButton from "@mui/material/IconButton"

const PlayButton = ({ isPlaying, toggleFn }) => {
  const Btn = !isPlaying ? Pause : PlayArrow
  return (
    <IconButton aria-label="play-pause" onClick={toggleFn} size="large">
      <Btn fontSize="large"/>
    </IconButton>
  )
}

export default PlayButton
