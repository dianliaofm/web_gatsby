// import React from "react"
import Player from "../components/player"

const PlayerStory = {
  component: Player,
  title: "Components/Player",
  argTypes: {
    currentSec: {
      control: {
        type: "range",
        min: 0,
        max: 4 * 3600,
        step: 60,
      },
    },
  },
}

const Template = Player
export const Primary = Template.bind({})
Primary.args = {
  isPlaying: true,
  currentSec: 40,
  totalSecs: 4 * 3600,
}

export default PlayerStory
