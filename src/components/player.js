import React from "react"
import AppBar from "@mui/material/AppBar"
import Slider from "@mui/material/Slider"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { formatDuration } from "../util/duration"
import { common } from "@mui/material/colors"
import { useSelector, useDispatch } from "react-redux"
import { toggle } from "../state/audioPlay"
import IconButton from "@mui/material/IconButton"

const theme = createTheme({
  palette: {
    secondary: {
      main: common.white,
    },
  },
})

const Player = ({ currentSec, totalSecs }) => {
  const isPlaying = useSelector(st => st.play.isPlay)
  const dispatch = useDispatch()
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        poisition="fixed"
        sx={{ top: "auto", bottom: 0 }}
        color="secondary"
      >
        <Slider
          aria-label="audio progress"
          step={1}
          value={currentSec}
          min={0}
          max={totalSecs}
          valueLabelDisplay="auto"
          valueLabelFormat={formatDuration}
        />
        <IconButton
          aria-label="play-pause"
          onClick={() => dispatch(toggle(isPlaying))}
        >
          {!isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </AppBar>
    </ThemeProvider>
  )
}

export default Player
