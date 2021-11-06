import { Col, Row } from "antd"
import React from "react"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons"
import CircleButton from "./circleButton"

const PlayButtonGroup = () => {
  return (
    <div>
      <Row justify="center" gutter={16}>
        <CenterCol>
          <CircleButton>
            <StepBackwardOutlined />
          </CircleButton>
        </CenterCol>
        <CenterCol>
          <PlayButton />
        </CenterCol>
        <CenterCol>
          <CircleButton>
            <StepForwardOutlined />
          </CircleButton>
        </CenterCol>
      </Row>
    </div>
  )
}

export default PlayButtonGroup
