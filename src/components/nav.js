import * as React from "react"
import { Link } from "gatsby"

const Nav = ({ brand, i18n }) => {
  const { home, about, developer } = i18n
  return (
    <nav role="navigation" aria-label="main navigation">
      <div >
        <Link to="/">{brand}</Link>

        <Link to="/about">{about}</Link>
      </div>
    </nav>
  )
}

export default Nav
