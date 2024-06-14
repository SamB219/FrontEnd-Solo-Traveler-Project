import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../environment/index";
import Posts from "./Posts";
import Grid from "@mui/material/Grid";

function PostIndex(props) {
  const [posts, setPosts] = useState([]);
  let key = 0;

  const fetchPosts = async () => {
    const url = `${baseURL}/post/all`; //ENDPOINT HERE

    const options = {
      method: "GET",
      headers: new Headers({
        Authorization: props.token,
      }),
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setPosts(data.result);
    } catch (err) {
      console.error(err.message);
    }
  };

  //EXECUTES FETCH ON PAGE RELOAD
  useEffect(() => {
    if (props.token) {
      fetchPosts();
    }
  }, [props.token]);
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
            <Posts post={post} userId={props.userId} token={props.token} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PostIndex;
