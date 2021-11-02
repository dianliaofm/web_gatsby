import React from "react"
import PlayButton from "../components/playButton"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"

const MiniControl = ({ toggleFn, isPlaying }) => {
  return (
    <Stack direction="row">
      <Paper>image</Paper>
      <Box sx={{ flexGrow: 1, display: "inline-flex", alignItems: "center" }}>
        title 1
      </Box>
      <PlayButton isPlaying={isPlaying} toggleFn={toggleFn} />
    </Stack>
  )
}

export default MiniControl
