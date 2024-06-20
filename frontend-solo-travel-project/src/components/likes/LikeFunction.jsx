import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { baseURL } from "../../environment/index";

const LikeFunction = ({ postId, userId, token, updateLikeCount, likeCount }) => {
    const [liked, setLiked] = useState(() => {
        const previousLikeStatus = localStorage.getItem(`like_${userId}_${postId}`);
        return previousLikeStatus === "liked";
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLikeStatus = async () => {
            setLoading(true);
            const url = `${baseURL}/post/status/${postId}`;

            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const res = await fetch(url, options);
                if (res.ok) {
                    const data = await res.json();
                    updateLikeCount(data.likes.length);
                } else {
                    console.error("Failed to fetch like status");
                }
            } catch (err) {
                console.error("Error fetching like status:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLikeStatus();
    }, [postId, token, updateLikeCount]);

    const toggleLike = async () => {
        if (!loading) {
            setLoading(true);
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
                    updateLikeCount(liked ? likeCount - 1 : likeCount + 1);
                    // Update local storage
                    localStorage.setItem(`like_${userId}_${postId}`, liked ? "unliked" : "liked");
                } else {
                    console.error("Error toggling like:", data.message);
                }
            } catch (err) {
                console.error("Error toggling like:", err.message);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <button
                onClick={toggleLike}
                style={{ background: "none", border: "none", cursor: "pointer" }}
                disabled={loading}
            >
                <FavoriteIcon sx={{ color: liked ? "red" : "gray" }} />
            </button>
            <span>{likeCount}</span>
        </div>
    );
};

export default LikeFunction;
