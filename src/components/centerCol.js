import React from "react"
import Grid from "@mui/material/Grid"

const CenterCol = ({ style, children, ...rest }) => (
  <Grid item justifyContent="center" alignItems="center">
    {children}
  </Grid>
)

export default CenterCol
