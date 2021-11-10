import React from "react"
import PlayButton from "../components/playButton"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import CenterCol from "./centerCol"
import { ArrowDropUp } from "@mui/icons-material"
import IconButton from "@mui/material/IconButton"

const w = 64

const MiniControl = ({ toggleFn, isPlaying, eps, toggleListFn }) => {
  const currentEp = eps[0]
  return (
    <Grid container>
      <Grid item>
        <img width={w} height={w} src={currentEp.image} />
      </Grid>
      <Grid item>{currentEp.title}</Grid>
      <CenterCol flex="1">
        <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
      </CenterCol>
      <CenterCol flex="1">
        <IconButton onClick={toggleListFn}>
          <ArrowDropUp />
        </IconButton>
      </CenterCol>
    </Grid>
  )
}

export default MiniControl
