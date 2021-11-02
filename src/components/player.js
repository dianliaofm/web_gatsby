import React from "react"
import AppBar from "@mui/material/AppBar"
import Slider from "@mui/material/Slider"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Pause from "@mui/icons-material/Pause"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { formatDuration } from "../util/duration"
import { common } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    secondary: {
      main: common.white,
    },
  },
})

const Player = ({ currentSec, totalSecs, isPlaying }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar poisition="fixed" sx={{ top: "auto", bottom: 0 }} color="secondary">
        <Slider
          aria-label="audio progress"
          step={1}
          value={currentSec}
          min={0}
          max={totalSecs}
          valueLabelDisplay="auto"
          valueLabelFormat={formatDuration}
        />
        {!isPlaying ? <Pause /> : <PlayArrow />}
      </AppBar>
    </ThemeProvider>
  )
}

export default Player
