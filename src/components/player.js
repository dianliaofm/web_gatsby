import React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"
import { formatDuration } from "../util/duration"

const Player = ({ currentSec, totalSecs, isPlaying }) => {
  const marks = [
    {
      value: 0,
      label: formatDuration(currentSec),
    },
    {
      value: totalSecs,
      label: formatDuration(totalSecs),
    },
  ]
  return (
    <Box sx={{ width: "auto" }}>
      <Slider
        aria-label="audio progress"
        step={1}
        value={currentSec}
        min={0}
        max={totalSecs}
        marks={marks}
        valueLabelDisplay="auto"
        valueLabelFormat={formatDuration}
      />
      <div>{!isPlaying ? <Pause /> : <PlayArrow />}</div>
    </Box>
  )
}

export default Player
