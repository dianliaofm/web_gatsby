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
import NavMenu from "./navMenu"

const CustomLayout = ({
  children,
  player,
  menuOpen,
  setMenuOpen,
  metaData,
}) => {
  return (
    <>
      <Topbar
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        metaData={metaData}
      />
      {children}
      <div style={{
        marginBottom: "256px"
      }}></div>
      {player}
    </>
  )
}

export default CustomLayout

function Topbar({ setMenuOpen, menuOpen, metaData }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        metaData={metaData}
      />
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
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {metaData.title}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
