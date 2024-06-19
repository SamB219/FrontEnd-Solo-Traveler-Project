import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/dash/Dashboard";
import Signup from "./components/auth/Signup";
import { useEffect, useState } from "react";
import Profile from "./components/profile/Profile";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddPost from "./components/posts/AddPost";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import Filter from "./components/dash/Filter";
import { navListItems } from "./components/dash/navItems";
//Leaflet Import
import SimpleMap from "./components/maps/SimpleMap";
// import { Button } from "@mui/material";
import PostIndex from "./components/posts/PostIndex";
import { baseURL } from "./environment";

const drawerWidth = 240; // Adjust this value to change width of navbar popout

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const defaultTheme = createTheme();

function Shell() {
  const [open, setOpen] = React.useState(true);
  const [sessionToken, setSessionToken] = useState("");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Logout Function
  const navigate = useNavigate();
  const location = useLocation();

  
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setSessionToken("");
    navigate("/");
  };


  //Function for updating token in local storage
  const updateLocalToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    if (location.pathname === `${baseURL}` || location.pathname === `${baseURL}/signup`) {
      setSessionToken("");
    }
};
//Effect that keeps the token when the page re-renders
useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setSessionToken(token);
    } else {
      setSessionToken("");
    }
}, []); 

  const getHeaderText = () => { // Segments the URL and grabs the last word and assigns it to a variable we can use as a header
    const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");
    if (pathSegments.length > 0) {
      return pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() + pathSegments[pathSegments.length - 1].slice(1);
    }
    return "";
  };

  const shellCheck = location.pathname === `${baseURL}` || location.pathname === `${baseURL}/signup`;
  // Not currently working, tried to work around the shell not displaying when user uses the back arrow. 
  // Need to make it to where user cannot go to login or signup if they have a session token


  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex " }}>
          <CssBaseline />
          {!shellCheck && sessionToken && (
            <>
              <AppBar position="absolute" open={open}>
                <Toolbar
                  sx={{
                    pr: "24px", // keep right padding when drawer closed
                  }}
                >
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                      marginRight: "36px",
                      ...(open && { display: "none" }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                  >
                    {getHeaderText()}
                  </Typography>
                  <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit" onClick={handleLogout}>
                    <LogoutIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Drawer variant="permanent" open={open}>
                <Toolbar
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    px: [1],
                  }}
                >
                  <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                  </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">{navListItems}</List>
              </Drawer>
            </>
          )}
          <Routes>
                <Route path="/" element={<Login updateToken={updateLocalToken} />} />
                <Route
                    path="/signup"
                    element={<Signup updateToken={updateLocalToken} />}
                />
                <Route path="/dashboard" element={<Dashboard
                    token={sessionToken} />} />
                <Route path="/profile" element={<Profile
                    token={sessionToken} />} />
            </Routes>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Shell;
