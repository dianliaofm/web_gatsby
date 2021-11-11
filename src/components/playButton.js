import React from "react"
import PlayArrow from "@mui/icons-material/PlayCircle"
import Pause from "@mui/icons-material/PauseCircle"
import { IconButton } from "@mui/material"

const PlayButton = ({ isPlaying, toggleFn, btnStyle }) => {
  const Btn = !!isPlaying ? Pause : PlayArrow
  const style1 = btnStyle || { width: "1.5em", height: "1.5em" }
  return (
    <IconButton onClick={toggleFn} color="primary">
      <Btn sx={style1} />
    </IconButton>
  )
}

export default PlayButton
