import React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"

const marks = [
  {
    value: 0,
    label: "0:00",
  },
  {
    value: 100,
    label: "2:00",
  },
]

const Player = ({ progress, isPlaying }) => (
  <Box sx={{ width: "auto" }}>
    <Slider
      aria-label="audio progress"
      step={1}
      value={progress}
      marks={marks}
      valueLabelDisplay="auto"
    />
    <div>{!isPlaying ? <Pause /> : <PlayArrow />}</div>
  </Box>
)

export default Player
