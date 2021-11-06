import { Col, Row } from "antd"
import React from "react"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import { StepForwardOutlined } from "@ant-design/icons"
import { CircleButton, PlainButton, CustomIconButton } from "./buttons"
import Goback15 from "../assets/goback15.inline.svg"
import Goforward30 from "../assets/goforward30.inline.svg"

const PlayButtonGroup = () => {
  return (
    <div>
      <Row justify="center" gutter={16}>
        <CenterCol>
          <CustomIconButton icon={Goback15} />
        </CenterCol>
        <CenterCol>
          <PlayButton />
        </CenterCol>
        <CenterCol>
          <CustomIconButton icon={Goforward30} />
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
