import React from "react"
import PlayArrow from "@mui/icons-material/PlayCircle"
import Pause from "@mui/icons-material/PauseCircle"
import { IconButton } from "@mui/material"

const PlayButton = ({ isPlaying, toggleFn, btnFontSize }) => {
  const Btn = !!isPlaying ? Pause : PlayArrow
  return (
    <IconButton onClick={toggleFn} color="primary">
      <Btn fontSize={btnFontSize || "large"} />
    </IconButton>
  )
}

export default PlayButton
