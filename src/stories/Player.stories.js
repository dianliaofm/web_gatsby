import React from "react"
import Player from "../components/player"

export default {
  component: Player,
  title: "Components/Player",
  argTypes: {
    progress: {
      options: [1,100,2],
      control: {
        type: 'range'
      }
    }
  }
}

const Template = args => <Player {...args} />
export const Primary = Template.bind({})
Primary.args = {
  isPlaying: true,
  progress: 20
}
