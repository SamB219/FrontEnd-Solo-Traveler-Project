//MUI Imports
import * as React from "react";
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
import AddPost from "../posts/AddPost";
import { useNavigate } from "react-router-dom";

//import Button from "@mui/material/Button";

import Filter from "./Filter";
import { navListItems } from "./navItems";
//Leaflet Import
import SimpleMap from "../maps/SimpleMap";
// import { Button } from "@mui/material";
import PostIndex from "../posts/PostIndex";

const drawerWidth = 240; // Adjust this value to change width of navbar popout

//Currently does nothing because theme is default
const defaultTheme = createTheme();

export default function Dashboard(props) {

  return (
    <>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="true" sx={{ mt: 4, mb: 0 }}>
            <Grid container spacing={2} position={"relative"}>
              <SimpleMap />
              {/*  FILTER DISPLAY GRID ---> Absolutely positioned child element of map*/}
              <Grid item xs={12} position={"absolute"}>
                <Filter />
              </Grid>
            </Grid>
          </Container>

          {/* POST DISPLAY GRID */}
          <Container maxWidth="false" sx={{ mt: 3, mb: 4 }}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                <AddPost token={props.token} />
              </Paper>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <PostIndex token={props.token} />
              </Paper>
            </Grid>
          </Container>
        </Box>
    </>
  );
}
