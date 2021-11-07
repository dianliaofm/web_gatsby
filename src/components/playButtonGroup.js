import { Row } from "antd"
import React from "react"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import { StepForwardOutlined } from "@ant-design/icons"
import { CircleButton, CustomIconButton } from "./buttons"
import Goback15 from "../assets/goback15.inline.svg"
import Goforward30 from "../assets/goforward30.inline.svg"

const PlayButtonGroup = ({ isPlaying, toggleFn , goNextFn, hasNext}) => {
  return (
    <div>
      <Row justify="center" gutter={16}>
        <CenterCol>
          <CustomIconButton icon={Goback15} />
        </CenterCol>
        <CenterCol>
          <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
        </CenterCol>
        <CenterCol>
          <CustomIconButton icon={Goforward30} />
        </CenterCol>
        <CenterCol>
          <CircleButton onClick={goNextFn} disabled={!hasNext}>
            <StepForwardOutlined />
          </CircleButton>
        </CenterCol>
      </Row>
    </div>
  )
}

export default PlayButtonGroup
