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

const Player = () => (
  <Box sx={{ width: 300 }}>
    <Slider
      aria-label="audio progress"
      defaultValue={80}
      getAriaValueText={v => `${v}tt`}
      step={10}
      marks={marks}
      valueLabelDisplay="on"
    />
  </Box>
)

export default Player
