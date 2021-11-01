import React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

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
  </Box>
)

export default Player
