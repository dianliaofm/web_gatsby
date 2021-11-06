import React from "react"
import PlayButton from "../components/playButton"
import { Row, Col, Image } from "antd"
import CenterCol from "./centerCol"

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
      <CenterCol flex="1">
        <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
      </CenterCol>
    </Row>
  )
}

export default MiniControl
