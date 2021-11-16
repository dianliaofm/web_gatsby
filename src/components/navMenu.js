import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Link } from "gatsby"

function NavMenu({ menuOpen, setMenuOpen, metaData }) {
  const { menuConfig } = metaData
  const closeMenu = () => setMenuOpen(false)
  return (
    <Drawer anchor="left" open={menuOpen} onClose={closeMenu}>
      <Box sx={{ width: 500 }} role="presentation" onClick={closeMenu}>
        <List>
          {menuConfig.map(x => (
            <Link
              to={x.path}
              key={x.id}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItem button>
                <ListItemText primary={x.text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />
        <Box>icons</Box>
      </Box>
    </Drawer>
  )
}

export default NavMenu
