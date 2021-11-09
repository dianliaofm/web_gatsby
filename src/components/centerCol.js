import React from "react"
import Grid from '@mui/material/Grid';

const CenterCol = ({ style, children, ...rest }) => (
  <Grid item
    {...rest}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...style,
    }}
  >
    {children}
  </Grid>
)

export default CenterCol
