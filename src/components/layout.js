import * as React from "react"
import Nav from "../components/nav"
import Player from "../components/player"

const Layout = ({ pageTitle, navInfo, children, i18n }) => {
  return (
    <div>
      <Nav {...navInfo} i18n={i18n} />
      <title>{pageTitle}</title>
      <main>
        {children}
      </main>
      <Player currentSec={10} totalSecs={101} />
    </div>
  )
}

export default Layout
