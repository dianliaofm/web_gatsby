import * as React from "react"
import { Link } from "gatsby"
import { FaWeibo , FaGithub} from "react-icons/fa"

const Nav = ({ brand }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          {brand}
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar1"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar1" className="navbar-menu is-active">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <div className="navbar-item is-hoverable">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Contact</a>
            <a className="navbar-item">Developer</a>
            <hr className="navbar-divider" />
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button" aria-label="sina-weibo">
                <FaWeibo />
              </a>
              <a className="button" aria-label="github">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
