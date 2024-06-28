import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../environment/index";
import Posts from "./Posts";
import Grid from "@mui/material/Grid";

function PostIndex({ userId, token, setPinLocations, pinLocations, posts }) {
  /*   const [posts, setPosts] = useState([]); */
  let key = 0;

  //CURRENTLY RUNS ON EVERY RENDER
  /* useEffect(() => {
    if (props.token) {
      fetchPosts();
    }
  }); */

  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={key++}>
            <Posts post={post} userId={userId} token={token} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PostIndex;
