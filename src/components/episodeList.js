import * as React from "react"
import EpisodeCard from "./episodeCard"
import Grid from "@mui/material/Grid"

export default function EpisodeList({ epList, playAudio, addAudio }) {
  return (
    <Grid
      container
      spacing={2}
      marginTop={"20px"}
      columns={{ xs: 4, md: 8, lg: 12 }}
      justifyContent={{
        xs: "center",
        md: "center",
        lg: "flex-start",
      }}
    >
      {epList.map(ep => {
        return (
          <Grid key={ep.id} item xs={3} md={3} lg={3}>
            <EpisodeCard
              {...ep}
              playCurrentFn={() => playAudio(ep.id, ep.isAdded)}
              addCurrentFn={() => addAudio(ep.id, ep.isAdded)}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}
