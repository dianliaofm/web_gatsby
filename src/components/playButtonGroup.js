import React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import Goback15 from "./Goback15"
import Goforward30 from "../assets/goforward30.inline.svg"
import { IconButton } from "@mui/material"

const PlayButtonGroup = ({ isPlaying, toggleFn, goNextFn, hasNext }) => {
  return (
    <Box>
      <Grid container justify="center" spacing={2}>
        <CenterCol>
          <IconButton>
            <Goback15 />
          </IconButton>
        </CenterCol>
        <CenterCol>
          <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
        </CenterCol>
        <CenterCol>
          <IconButton>
            <Goforward30 />
          </IconButton>
        </CenterCol>
        <CenterCol>next</CenterCol>
      </Grid>
    </Box>
  )
}

export default PlayButtonGroup
