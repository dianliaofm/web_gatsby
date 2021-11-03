import React from "react"
import { Button } from "antd"
import PlayArrow from "@ant-design/icons/CaretRightOutlined"
import Pause from "@ant-design/icons/PauseOutlined"

const PlayButton = ({ isPlaying, toggleFn }) => {
  const Btn = !isPlaying ? Pause : PlayArrow
  return (
    <Button type="primary" shape="circle" icon={<Btn />} onClick={toggleFn} size="large"/>
  )
}

export default PlayButton
