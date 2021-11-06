import React from "react"
import PlayArrow from "@ant-design/icons/CaretRightOutlined"
import Pause from "@ant-design/icons/PauseOutlined"
import CircleButton from "./circleButton"

const PlayButton = ({ isPlaying, toggleFn }) => {
  const Btn = !!isPlaying ? Pause : PlayArrow
  return (
    <CircleButton onClick={toggleFn}>
      <Btn />
    </CircleButton>
  )
}

export default PlayButton
