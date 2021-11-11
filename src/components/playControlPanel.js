import React from "react"
import { Drawer } from "@mui/material"
import PlayButtonGroup from "../components/playButtonGroup"

function PlayControlPanel({ showPanel, onClose }) {
  return (
    <Drawer anchor="bottom" open={!!showPanel} onClose={onClose}>
      <PlayButtonGroup />
    </Drawer>
  )
}

export default PlayControlPanel
