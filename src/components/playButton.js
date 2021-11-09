import React from "react"
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import { CircleButton } from "./buttons"

const PlayButton = ({ isPlaying, toggleFn }) => {
  const Btn = !!isPlaying ? Pause : PlayArrow
  return (
    <CircleButton onClick={toggleFn}>
      <Btn />
    </CircleButton>
  )
}

export default PlayButton
