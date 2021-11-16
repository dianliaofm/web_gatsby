import React, { useState } from "react"
import { Drawer } from "@mui/material"
import PlayButtonGroup from "../components/playButtonGroup"
import Skeleton from "@mui/material/Skeleton"
import AudioSlider from "../components/audioSlider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { formatDuration } from "../util/duration"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import PlayList from "./densePlaylist"

const thumbHeight = 256

function PlayControlPanel({
  showPanel,
  onClose,
  currentEp,
  currentSec,
  totalSecs,
  togglePlayFn,
  isPlaying,
  changeFn,
  jumpToFn,
  playList,
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

  const slider1 = (
    <AudioSlider
      currentSec={currentSec}
      totalSecs={totalSecs}
      changeFn={changeFn}
      jumpToFn={jumpToFn}
    />
  )

  const audioTab = (
    <>
      <Box my={2}>{img1}</Box>
      <Typography>{currentEp.title}</Typography>
    </>
  )

  const playListTab = <PlayList playlist={playList} />

  return (
    <Drawer anchor="bottom" open={!!showPanel} onClose={onClose}>
      <Stack spacing={1} alignItems="center">
        <TabPanel audioTab={audioTab} listTab={playListTab} />
        <SliderTimed
          totalSecs={totalSecs}
          currentSec={currentSec}
          changeFn={changeFn}
          slider={slider1}
        />
        <PlayButtonGroup
          isPlaying={isPlaying}
          togglePlayFn={togglePlayFn}
          jumpToFn={jumpToFn}
        />
      </Stack>
    </Drawer>
  )
}

export default PlayControlPanel

function SliderTimed({ currentSec, totalSecs, slider }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center" alignSelf="stretch">
      <Typography>{formatDuration(currentSec)}</Typography>
      {slider}
      <Typography>{formatDuration(totalSecs)}</Typography>
    </Stack>
  )
}

function TabPanel({ listTab, audioTab }) {
  const [value, setValue] = useState(0)
  return (
    <Box
      sx={{
        height: "400px",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={(ev, val) => setValue(val)}
          aria-label="playlist tabs"
        >
          <Tab label="PlayList" id="tab-playlist" />
          <Tab label="Audio" id="tab-audio" />
        </Tabs>
      </Box>
      {value == 0 ? listTab : audioTab}
    </Box>
  )
}
