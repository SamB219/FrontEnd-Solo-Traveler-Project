//MUI Imports
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

//Component Imports
import AddPost from "../posts/AddPost";
import PostIndex from "../posts/PostIndex";
import Filter from "./Filter";

//Leaflet Import
import SimpleMap from "../maps/SimpleMap";

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
              <PostIndex token={props.token} userId={props.userId}/>
            </Paper>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
