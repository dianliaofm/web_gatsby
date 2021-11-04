import React from "react"
import PlayButton from "../components/playButton"
import { Row, Col, Image } from "antd"

const w = 64

const MiniControl = ({ toggleFn, isPlaying, eps }) => {
  const currentEp = eps[0]
  return (
    <Row>
      <Col>
        <Image width={w} height={w} src={currentEp.image} />
      </Col>
      <Col
        flex="8"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {currentEp.title}
      </Col>
      <Col
        flex="1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
      </Col>
    </Row>
  )
}

export default MiniControl
