import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

function NavMenu({ menuOpen, setMenuOpen }) {
  return (
    <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
      <Box
        sx={{ width: 500 }}
        role="presentation"
      >
        <List>
          {["All mail", "Trash", "Spam"].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />
        <Box>
            icons
        </Box>
      </Box>
    </Drawer>
  )
}

export default NavMenu
