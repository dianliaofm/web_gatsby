import React from "react"
import { Drawer } from "@mui/material"
import PlayButtonGroup from "../components/playButtonGroup"
import Skeleton from "@mui/material/Skeleton"
import AudioSlider from "../components/audioSlider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

const thumbHeight = 256

function PlayControlPanel({ showPanel, onClose }) {
  return (
    <Drawer anchor="bottom" open={!!showPanel} onClose={onClose}>
      <Stack spacing={1} alignItems="center">
        <Skeleton
          variant="rectangular"
          width={thumbHeight}
          height={thumbHeight}
          animation={false}
          sx={{
            my: 2,
          }}
        />
        <SliderTimed />
        <PlayButtonGroup />
      </Stack>
    </Drawer>
  )
}

export default PlayControlPanel

function SliderTimed() {
  return (
    <Stack direction="row" spacing={2} alignItems="center" alignSelf="stretch">
      <Typography>1:00</Typography>
      <AudioSlider currentSec={10} totalSecs={60} />
      <Typography>10:00</Typography>
    </Stack>
  )
}
