import React from "react"
import { Drawer } from "@mui/material"
import PlayButtonGroup from "../components/playButtonGroup"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"
import AudioSlider from "../components/audioSlider"

function PlayControlPanel({ showPanel, onClose }) {
  return (
    <Drawer anchor="bottom" open={!!showPanel} onClose={onClose}>
      <Stack spacing={1} alignItems="center">
        <Skeleton
          variant="rectangular"
          width={200}
          height={200}
          animation={false}
        />
        <AudioSlider
          currentSec={10}
          totalSecs={60}
          sx={{
            width: "50%",
          }}
        />
        <PlayButtonGroup />
      </Stack>
    </Drawer>
  )
}

export default PlayControlPanel
