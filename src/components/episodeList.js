import * as React from "react"
import EpisodeCard from "./episodeCard"
import Grid from "@mui/material/Grid"

export default function EpisodeList({ epList }) {
  return (
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent={"flex-start"}
        marginTop={"20px"}
        alignContent={"flex-start"}
      >
        {epList.map(ep => {
          return (
            <Grid key={ep.id} item xs={8} md={4} lg={3} alignItems={"center"}>
              <EpisodeCard title={ep.title} image={ep.image} />
            </Grid>
          )
        })}
      </Grid>
  )
}
