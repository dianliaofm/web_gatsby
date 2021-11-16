import React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

function PlayList({ playlist }) {
  return (
    <List
      sx={{
        width: "100%",
      }}
    >
      {playlist.map(ep => {
        return (
          <ListItem disablePadding key={ep.id}>
            <ListItemButton>
              <ListItemText primary={ep.title} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default PlayList
