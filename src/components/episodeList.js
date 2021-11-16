import * as React from "react"
import Stack from "@mui/material/Stack"
import EpisodeCard from "./episodeCard"

export default function EpisodeList({ epList }) {
  return (
    <Stack spacing={5} alignItems="center" marginY={"20px"}>
      {epList.map(ep => {
        return <EpisodeCard key={ep.id} title={ep.title} image={ep.image} />
      })}
    </Stack>
  )
}
