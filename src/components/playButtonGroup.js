import { Col, Row } from "antd"
import React from "react"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import Icon, { StepForwardOutlined } from "@ant-design/icons"
import CircleButton, { PlainButton } from "./circleButton"
import Goback15 from "../assets/goback15.inline.svg"
import Goforward30 from "../assets/goforward30.inline.svg"

const PlayButtonGroup = () => {
  return (
    <div>
      <Row justify="center" gutter={16}>
        <CenterCol>
          <PlainButton>
            <Icon
              component={Goback15}
              style={{
                fontSize: "2em",
              }}
            />
          </PlainButton>
        </CenterCol>
        <CenterCol>
          <PlayButton />
        </CenterCol>
        <CenterCol>
          <PlainButton>
            <Icon
              component={Goforward30}
              style={{
                fontSize: "2em",
              }}
            />
          </PlainButton>
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
