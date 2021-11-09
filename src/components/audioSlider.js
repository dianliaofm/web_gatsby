import React from "react"
import { formatDuration } from "../util/duration"
import Slider from "@mui/material/Slider"

const AudioSlider = ({ currentSec, totalSecs, changeFn, jumpToFn }) => {
  return (
    <Slider
      aria-label="audio progress"
      step={1}
      value={currentSec}
      min={0}
      max={totalSecs}
      valueLabelFormat={formatDuration}
      onChange={(event, val) => changeFn(val)}
      onChangeCommitted={(event, val) => jumpToFn(val)}
      valueLabelDisplay="auto"
    />
  )
}

export default AudioSlider
