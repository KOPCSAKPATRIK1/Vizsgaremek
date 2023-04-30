import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/" onClick={handleClose}>
          FŐOLDAL
        </MenuItem>
        <MenuItem component={Link} to="/products" onClick={handleClose}>
          SNEAKEREK
        </MenuItem>
        <MenuItem component={Link} to="/releases" onClick={handleClose}>
          MEGJELENÉSEK
        </MenuItem>
        <MenuItem component={Link} to="/info" onClick={handleClose}>
          INFÓ
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
