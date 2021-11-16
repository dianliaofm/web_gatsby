import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

const BasicContainer = ({ children }) => {
  return (
    <Container>
      <Box>{children}</Box>
    </Container>
  )
}

export default BasicContainer
