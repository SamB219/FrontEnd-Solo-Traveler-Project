import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Search from "./Search";
import { baseURL } from "../../../environment/index";
import FilterTags from "./tagFilter/FilterTags";

function Filter({ setPosts, token }) {
  const [filterLocation, setFilterLocation] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const filterPosts = async () => {
    const url = `${baseURL}/post/filter`; //ENDPOINT HERE
    /*   const filterCoords = filterLocation; */

    let bodyObj = JSON.stringify({
      filterLocation,
    });

    const options = {
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/json",
      }),
      body: bodyObj,
      method: "POST",
    };

    try {
      const res = await fetch(url, options);
      /*  if (!res.ok) {
        throw new Error("Failed to fetch posts");
      } */
      const data = await res.json();
      setPosts(data.result);
    } catch (err) {
      console.error(err.message);
    }
  };

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
