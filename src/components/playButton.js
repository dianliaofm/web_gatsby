import React from "react"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"
import { IconButton } from "@mui/material"

const PlayButton = ({ isPlaying, toggleFn }) => {
  const Btn = !!isPlaying ? Pause : PlayArrow
  return (
    <IconButton onClick={toggleFn} color="primary">
      <Btn />
    </IconButton>
  )
}

export default PlayButton
