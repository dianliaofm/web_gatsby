import * as React from "react"
import { Link } from "gatsby"

const Nav = ({ brand, i18n }) => {
  const { home, about, developer } = i18n
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          {brand}
        </Link>


      </div>
    </nav>
  )
}

export default Nav
