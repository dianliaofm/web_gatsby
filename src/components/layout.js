import * as React from "react"
import Nav from '../components/nav'

const Layout = ({ pageTitle, navInfo, children , i18n}) => {
  return (
    <div>
      <Nav {...navInfo} i18n={i18n}/>
      <title>{pageTitle}</title>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
