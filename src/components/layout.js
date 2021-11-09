import * as React from "react"
import { Link } from "gatsby"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const CustomLayout = ({ children, player }) => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      {children}
      {player}
    </>
  )
}

export default CustomLayout
