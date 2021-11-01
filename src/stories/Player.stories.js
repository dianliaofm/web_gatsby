import React from "react"
import Player from "../components/player"

export default {
  component: Player,
  title: "Components/Player",
}

const Template = args => <Player {...args} />
export const Primary = Template.bind({})
Primary.args = {
  isPlaying: true,
}
