import React from "react"
import { formatDuration } from "../util/duration"
import { Slider } from "antd"

const AudioSlider = ({ currentSec, totalSecs, changeFn, jumpToFn }) => {
  return (
    <Slider
      aria-label="audio progress"
      step={1}
      value={currentSec}
      min={0}
      max={totalSecs}
      tipFormatter={formatDuration}
      onChange={changeFn}
      onAfterChange={jumpToFn}
    />
  )
}

export default AudioSlider
