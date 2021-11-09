import React from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CenterCol from "./centerCol"
import PlayButton from "./playButton"
import { CircleButton, CustomIconButton } from "./buttons"
import Goback15 from "../assets/goback15.inline.svg"
import Goforward30 from "../assets/goforward30.inline.svg"

const PlayButtonGroup = ({ isPlaying, toggleFn , goNextFn, hasNext}) => {
  return (
    <Box>
      <Grid container justify="center" spacing={2}>
        <CenterCol>
          <CustomIconButton icon={<Goback15 />} />
        </CenterCol>
        <CenterCol>
          <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
        </CenterCol>
        <CenterCol>
          <CustomIconButton icon={<Goforward30 />} />
        </CenterCol>
        <CenterCol>
        next
        </CenterCol>
      </Grid>
    </Box>
  )
}

export default PlayButtonGroup
