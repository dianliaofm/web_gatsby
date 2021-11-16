import * as React from "react"
import { Link } from "gatsby"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./layout.css"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Button from "@mui/material/Button"
import NavMenu from "./navMenu"

const CustomLayout = ({ children, player, menuOpen, setMenuOpen }) => {
  return (
    <>
      <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      {children}
      {player}
    </>
  )
}

export default CustomLayout

function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Dianliao
              </Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
