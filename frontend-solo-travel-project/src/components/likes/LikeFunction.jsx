import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { baseURL } from "../../environment/index";

const LikeFunction = ({ postId, userId, token }) => {
    const likedStyle = { color: "red" };
    const unLikedStyle = { color: "gray" };

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchLikeStatus = async () => {
        setLoading(true);
        const url = `${baseURL}/post/status`;

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ postId, userId }),
        };

        try {
            const res = await fetch(url, options);
            if (res.ok) {
                const data = await res.json();
                setLiked(data.liked);
                setLikeCount(data.likeCount);
            } else {
                console.error("Failed to fetch like status");
            }
        } catch (err) {
            console.error("Error fetching like status:", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLikeStatus();
    }, [postId, userId, token]);
    const toggleLike = async () => {
        const action = liked ? "unlike" : "like";
        const url = `${baseURL}/post/${postId}/${action}`;
    
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId }),
        };
    
        try {
            const res = await fetch(url, options);
            const data = await res.json();
    
            if (res.ok) {
                setLiked(!liked);
                setLikeCount(likeCount + (liked ? -1 : 1));
            } else {
                console.error("Error toggling like:", data.message);
            }
    
            console.log("Server response:", data); // Log the server response
        } catch (err) {
            console.error("Error toggling like:", err.message);
        }
    };
    

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <button
                onClick={toggleLike}
                style={{ background: "none", border: "none", cursor: "pointer" }}
                disabled={loading}>
                <FavoriteIcon sx={liked ? likedStyle : unLikedStyle} />
            </button>
                <span style={{ marginLeft: 4 }}>{likeCount}</span>
        </div>
    );
};

export default LikeFunction;



