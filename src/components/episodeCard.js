import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import { formatStamp } from "../util/date"
// import ShareIcon from '@mui/icons-material/Share';
import Box from "@mui/material/Box"
import PlayButton from "./playButton"
import { AddButton } from "./buttons"

export default function EpisodeCard({
  image,
  title,
  timestamp,
  playCurrentFn,
  addCurrentFn,
  isAdded,
}) {
  return (
    <Card>
      <Box
        sx={{
          width: "100%",
          height: 300,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionX: "center",
        }}
      ></Box>
      <CardHeader title={title} subheader={formatStamp(timestamp)} />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <PlayButton isPlaying={false} onClick={playCurrentFn} />
        <AddButton isAdded={isAdded} onClick={addCurrentFn} />
      </Box>
    </Card>
  )
}
