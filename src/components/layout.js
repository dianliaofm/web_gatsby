import * as React from "react"
import Nav from '../components/nav'

const Layout = ({ pageTitle, navInfo, children }) => {
  return (
    <div>
      <Nav {...navInfo} />
      <title>{pageTitle}</title>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
