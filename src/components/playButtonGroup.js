import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import Goback15 from "../assets/goback15.inline.svg"
import { IconButton } from "@mui/material"
import Forward30 from "@mui/icons-material/Forward30"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import SkipPrevious from "@mui/icons-material/SkipPrevious"

const secondBtnStyle = {
  height: "2em",
  width: "2em",
}

const playBtnStyle = {
  height: "2.5em",
  width: "2.5em",
}

const PlayButtonGroup = ({ isPlaying, toggleFn, goNextFn, hasNext }) => {
  return (
    <Box>
      <Grid container justifyContent="center" spacing={2} alignItems="center">
        <CenterCol>
          <IconButton>
            <SkipPrevious />
          </IconButton>
        </CenterCol>
        <CenterCol>
          <IconButton>
            <Goback15 style={secondBtnStyle} />
          </IconButton>
        </CenterCol>
        <CenterCol>
          <PlayButton
            isPlaying={isPlaying}
            toggleFn={toggleFn}
            btnStyle={playBtnStyle}
          />
        </CenterCol>
        <CenterCol>
          <IconButton>
            <Forward30 sx={secondBtnStyle} />
          </IconButton>
        </CenterCol>
        <CenterCol>
          <IconButton color="primary" onClick={goNextFn} disabled={!hasNext}>
            <SkipNextIcon />
          </IconButton>
        </CenterCol>
      </Grid>
    </Box>
  )
}

export default PlayButtonGroup
