import React from "react"
import { IconButton } from "@mui/material"
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck"

const AddButton = ({ btnStyle, onClick, isAdded }) => {
  const style1 = btnStyle || { width: "1.5em", height: "1.5em" }
  const Btn = !isAdded ? PlaylistAddIcon : PlaylistAddCheckIcon
  return (
    <IconButton onClick={onClick} color="primary">
      <Btn sx={style1} />
    </IconButton>
  )
}

export { AddButton }
