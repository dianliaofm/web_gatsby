import React from "react"
import Player from "../components/player"

const PlayerStory = {
  component: Player,
  title: "Components/Player",
  argTypes: {
    progress: {
      options: [1, 100, 2],
      control: {
        type: "range",
      },
    },
  },
}

const Template = args => (
  <div
    style={{
      marginTop: "100px",
    }}
  >
    <Player {...args} />
  </div>
)
export const Primary = Template.bind({})
Primary.args = {
  isPlaying: true,
  progress: 20,
}

export default PlayerStory
