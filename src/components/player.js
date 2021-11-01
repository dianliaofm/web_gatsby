import React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

const marks = [{
    value: 0,
    lable: "0:00"
},{
    value: 100,
    lable: "2:00"
}
]

const Player = ({progress, isPlaying}) => (
  <Box sx={{ width: 'auto' }}>
    <Slider
      aria-label="audio progress"
      defaultValue={80}
      step={1}
      value={progress}
      marks={marks}
      valueLabelDisplay="on"
    />
  </Box>
)

export default Player
