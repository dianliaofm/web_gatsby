import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Button from "@mui/material/Button"
import { Link } from "gatsby"
import { FaGithub, FaWeibo } from "react-icons/fa"
import Stack from "@mui/material/Stack"

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
                color: "black"
              }}
            >
              <ListItem button>
                <ListItemText primary={x.text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />
        <Stack direction="row" spacing={1} m={1}>
          <LinkButton href={metaData.gitUrl} icon={<FaGithub />} />
          <LinkButton href={metaData.weiboUrl} icon={<FaWeibo />} />
        </Stack>
      </Box>
    </Drawer>
  )
}

export default NavMenu

function LinkButton({ icon, href }) {
  return (
    <a href={href} target="_blank">
      <Button variant="outlined" size="large">
        {icon}
      </Button>
    </a>
  )
}
