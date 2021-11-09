import React from "react"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

export const CircleButton = ({ style, children, onClick, disabled }) => {
  return (
    <Button
      style={{
        margin: 5,
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export const CustomIconButton = ({ icon, onClick }) => (
  <IconButton onClick={onClick}>{icon}</IconButton>
)
