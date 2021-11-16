import React from "react"
import PlayButton from "../components/playButton"
import Grid from "@mui/material/Grid"
import CenterCol from "./centerCol"
import { ArrowDropUp } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"

const w = 64

const MiniControl = ({ toggleFn, isPlaying, currentEp, toggleListFn }) => {
  return (
    <Grid container>
      <Grid item>
        <img width={w} height={w} src={currentEp.image} alt={currentEp.title} />
      </Grid>
      <Grid item flex="2">
        {currentEp.title}
      </Grid>
      <CenterCol flex="1">
        <PlayButton isPlaying={isPlaying} onClick={toggleFn} />
      </CenterCol>
      <CenterCol flex="1">
        <IconButton onClick={toggleListFn}>
          <ArrowDropUp fontSize="large" />
        </IconButton>
      </CenterCol>
    </Grid>
  )
}

export default MiniControl
