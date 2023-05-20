import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

export default function MuiMenu() {
  const [anchorEl, setAnchorEl] = useState();

  const open = anchorEl;

  const handleClick = (e) => {
    setAnchorEl(e.current.target);
  };
  const handleClose=()=>{
    setAnchorEl(null)
  }

  return (
    <Stack>
      <Button
        id="resources-button"
        color="inherit"
        onCLick={handleClick}
        aria-controls={open ? "resources-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Menu
      </Button>
      <Menu
        id="resources-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "resources-button" }}
       onClose={handleClose}
       >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
      </Menu>
    </Stack>
  );
}
