import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import IconButton from "@mui/material/IconButton"
import { formatStamp } from "../util/date"
// import ShareIcon from '@mui/icons-material/Share';
import Box from "@mui/material/Box"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"

export default function EpisodeCard({ image, title, timestamp }) {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IconButton>
          <PlayCircleOutlineIcon
            sx={{
              width: "50%",
              height: "50%",
            }}
          />
        </IconButton>
      </Box>
      <CardHeader title={title} subheader={formatStamp(timestamp)} />
    </Card>
  )
}
