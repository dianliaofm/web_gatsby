import React from "react"
import PlayButton from "../components/playButton"
import { Row, Col } from "antd"

const MiniControl = ({ toggleFn, isPlaying }) => {
  return (
    <Row>
      <Col span={4}>
        <span>image</span>
      </Col>
      <Col span={17}>title</Col>
      <Col
        span={3}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
      </Col>
    </Row>
  )
}

export default MiniControl
