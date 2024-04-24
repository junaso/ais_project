'use client'

import { Logout, Settings } from "@mui/icons-material"
import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import React from "react"
import Image from 'next/image'
import 'style/navgation.css'

const Navgation = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Box className="nav-container">
        <div className="profile-section">
          <Image src="/img/BI.png" alt="Profile Image" className="profile-image" width={50} height={50} />
          <Typography className="title">亜細亜情報システム</Typography>
        </div>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            className="account-button"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          className: 'menu',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default Navgation
