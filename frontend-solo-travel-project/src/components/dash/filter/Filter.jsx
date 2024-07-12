import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Search from "./Search";
import { baseURL } from "../../../environment/index";
import FilterTags from "./tagFilter/FilterTags";

function Filter({
  setPosts,
  token,
  setFilterActive,
  setFilterData,
  filterPosts,
  setSelectedTags,
  selectedTags,
  setFilterLocation,
  filterLocation,
}) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          marginLeft: 5,
          height: 468,
          width: 300,
          position: "absolute",
          /*     justifyContent: "flex-end", */
          alignItems: "center",
        }}
      >
        <Search
          filterLocation={filterLocation}
          setFilterLocation={setFilterLocation}
        />
        <FilterTags
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 0, mb: 0, position: "relative", top: 50 }}
          size="large"
          onClick={filterPosts}
        >
          Find Me
        </Button>
      </Paper>
    </>
  );
}

export default Filter;
