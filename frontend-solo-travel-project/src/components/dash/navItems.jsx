import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const navListItems = (
  <>
    <ListItemButton component={Link} to="/dash">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/friends">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Friends" />
    </ListItemButton>
    <ListItemButton component={Link} to="/inbox">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItemButton>
    <ListItemButton component={Link} to="/likes">
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="My Likes" />
    </ListItemButton>
    <ListItemButton component={Link} to="/settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </>
);
