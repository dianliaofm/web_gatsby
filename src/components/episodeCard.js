import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import IconButton from "@mui/material/IconButton"
// import ShareIcon from '@mui/icons-material/Share';

export default function EpisodeCard({ image, title , date}) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardMedia component="img" height="256" src={image} alt={title} />
      <CardHeader
        title={title}
        subheader={"2021010"}
      />
    </Card>
  )
}
