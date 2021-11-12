import React from "react"
import { Drawer } from "@mui/material"
import PlayButtonGroup from "../components/playButtonGroup"
import Skeleton from "@mui/material/Skeleton"
import AudioSlider from "../components/audioSlider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { formatDuration } from "../util/duration"

const thumbHeight = 256

function PlayControlPanel({
  showPanel,
  onClose,
  currentEp,
  currentSec,
  totalSecs,
}) {
  let img1 = currentEp ? (
    <img
      width={thumbHeight}
      height={thumbHeight}
      src={currentEp.image}
      alt={currentEp.title}
    />
  ) : (
    <Skeleton
      variant="rectangular"
      width={thumbHeight}
      height={thumbHeight}
      animation={false}
    />
  )
  return (
    <Drawer anchor="bottom" open={!!showPanel} onClose={onClose}>
      <Stack spacing={1} alignItems="center">
        <Box my={2}>{img1}</Box>
        <Typography>{currentEp.title}</Typography>
        <SliderTimed totalSecs={totalSecs} currentSec={currentSec} />
        <PlayButtonGroup />
      </Stack>
    </Drawer>
  )
}

export default PlayControlPanel

function SliderTimed({ currentSec, totalSecs }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center" alignSelf="stretch">
      <Typography>{formatDuration(currentSec)}</Typography>
      <AudioSlider currentSec={10} totalSecs={60} />
      <Typography>{formatDuration(totalSecs)}</Typography>
    </Stack>
  )
}
