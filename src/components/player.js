import React from "react"
import AppBar from "@mui/material/AppBar"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { common } from "@mui/material/colors"
import { useSelector, useDispatch } from "react-redux"
import { toggle } from "../state/audioPlay"
import { setTime } from "../state/audioControl"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"

const theme = createTheme({
  palette: {
    secondary: {
      main: common.white,
    },
  },
})

const Player = () => {
  const isPlaying = useSelector(st => st.play.isPlay)
  const dispatch = useDispatch()

  const currentSec = useSelector(s => s.control.currentSec)
  const totalSecs = useSelector(s => s.control.total)

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        poisition="fixed"
        sx={{ top: "auto", bottom: 0 }}
        color="secondary"
      >
        <AudioSlider
          currentSec={currentSec}
          totalSecs={totalSecs}
          changeFn={(e, val) => {
            dispatch(setTime(val))
          }}
        />
        <MiniControl toggleFn={() => dispatch(toggle(isPlaying))} isPlaying={isPlaying} />
      </AppBar>
    </ThemeProvider>
  )
}

export default Player
