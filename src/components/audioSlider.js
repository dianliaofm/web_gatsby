import React from "react"
import { formatDuration } from "../util/duration"
import Slider from "@mui/material/Slider"

const AudioSlider = ({ currentSec, totalSecs, changeFn }) => {
  return (
    <Slider
      aria-label="audio progress"
      step={1}
      value={currentSec}
      min={0}
      max={totalSecs}
      valueLabelDisplay="auto"
      valueLabelFormat={formatDuration}
      onChange={changeFn}
    />
  )
}

export default AudioSlider
