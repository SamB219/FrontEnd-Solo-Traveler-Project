
import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { baseURL } from "../../environment/index";

const LikeFunction = ({ postId, userId, token }) => {
  const likedStyle = { color: "red" };
  const unLikedStyle = { color: "gray" };

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Fetch the initial like status and count from the server
  const fetchLikeStatus = async () => {
    const url = `${baseURL}/post/status`; // Adjust the endpoint as needed

    const options = {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
      body: JSON.stringify({ postId, userId }),
    };

    try {
      const res = await fetch(url, options);
      if (res.ok) {
        const data = await res.json();
        console.log("Like status fetched:", data);
        setLiked(data.liked);
        setLikeCount(data.likeCount);
      } else {
        console.error("Failed to fetch like status");
      }
    } catch (err) {
      console.error("Error fetching like status:", err.message);
    }
  };

  useEffect(() => {
    fetchLikeStatus();
  }, [postId, userId, token]);

  const toggleLike = async () => {
    const url = `${baseURL}/post/${postId}/like`;
    const method = liked ? "DELETE" : "POST";

    const options = {
      method,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
      body: JSON.stringify({ userId }),
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log("Toggle like response:", data);

      if (res.ok) {
        setLiked(!liked);
        setLikeCount(likeCount + (liked ? -1 : 1));
      } else {
        console.error("Error toggling like:", data.message);
      }
    } catch (err) {
      console.error("Error toggling like:", err.message);
    }
  };

  return (
    <button
      onClick={toggleLike}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      <FavoriteIcon sx={liked ? likedStyle : unLikedStyle} />
      <span>{likeCount}</span>
    </button>
  );

};

export default LikeFunction;