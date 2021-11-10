import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import Goback15 from "../assets/goback15.inline.svg"
import { IconButton } from "@mui/material"
import Forward30 from "@mui/icons-material/Forward30"
import SkipNextIcon from "@mui/icons-material/SkipNext"

const buttonHeight = {
  height: "1em",
  width: "1em",
}

const PlayButtonGroup = ({ isPlaying, toggleFn, goNextFn, hasNext }) => {
  return (
    <Box>
      <Grid container justify="center" spacing={2}>
        <CenterCol>
          <IconButton>
            <Goback15 style={buttonHeight} />
          </IconButton>
        </CenterCol>
        <CenterCol>
          <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
        </CenterCol>
        <CenterCol>
          <IconButton>
            <Forward30 />
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
